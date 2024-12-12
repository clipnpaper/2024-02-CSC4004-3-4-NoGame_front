import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EvaluatingPolicySearchResult.css';
import config from './config'; // Make sure this file exists for your API config

function EvaluatingPolicySearchResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const [policies, setPolicies] = useState([]); // To store fetched policy data
    const [filteredPolicies, setFilteredPolicies] = useState([]); // To store filtered policies after API fetch

    // 필터링 값 가져오기
    const { selectedGroup, selectedDetail, selectedAge, selectedPolicy } = location.state || {};

    // 정책 상세 페이지로 이동
    const goToPolicyDetail_Proposal = (policyId) => {
        navigate(`/PolicyDetail/${policyId}`);
    };

    // Fetch policy data from API
    useEffect(() => {
        const fetchPolicies = async () => {
            try {
                const response = await fetch(`${config.API_BASE_URL}/policyapp/`); // Update with your actual API endpoint
                const data = await response.json();
                setPolicies(data); // Set the fetched data as policies
            } catch (error) {
                console.error('Error fetching policies:', error);
            }
        };
        fetchPolicies();
    }, []); // Run on component mount

    // Filter policies based on selected filters
    useEffect(() => {
        if (policies.length > 0) {
            const filtered = policies.filter((policy) => {
                return (
                    (!selectedGroup || policy.groups.includes(selectedGroup)) && // 집단 필터
                    (!selectedDetail || policy.title.includes(selectedDetail)) && // 세부 필터
                    (!selectedPolicy || policy.category === selectedPolicy) // 카테고리 필터
                );
            });
            setFilteredPolicies(filtered); // Set filtered policies
        }
    }, [policies, selectedGroup, selectedDetail, selectedAge, selectedPolicy]);

    return (
        <div className="evaluating-policy-container">
            <header className="evaluating-policy-header">
                <span className="back-button" onClick={() => navigate('/Recommendation')}>〈 정책목록</span>
                <span className="title">맞춤설정 {'>'} 필터링 결과</span>
                <span className="icons">
                    <span role="img" aria-label="filter">⚙️</span>
                </span>
            </header>

            <div className="selected-tags">
                {selectedGroup && <span className="tag selected">{selectedGroup}</span>}
                {selectedDetail && <span className="tag selected">{selectedDetail}</span>}
                {selectedAge && <span className="tag selected">{selectedAge}세</span>}
                {selectedPolicy && <span className="tag selected">{selectedPolicy}</span>}
            </div>

            <div className="card-container">
                {filteredPolicies.length > 0 ? (
                    filteredPolicies.map((policy) => (
                        <div className="card" key={policy.id} onClick={() => goToPolicyDetail_Proposal(policy.id)}>
                            <div className="card-header">{policy.title || '제목 없음'}</div>
                            <img
                                src={policy.image || '/images/placeholder.png'} /* 기본 이미지 경로 */
                                alt={policy.title || '이미지 없음'}
                                className="card-image"
                            />
                            <div className="card-body">
                                <p>{policy.description || ''}</p>
                                <p>제안 날짜: {policy.date || '2024년 12월 4일'}</p>
                            </div>
                            <div className="card-footer">
                                ⭐ {policy.rating || 'N/A'} ({policy.likes || 0} likes)
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">해당 조건에 맞는 정책이 없습니다.</p>
                )}
            </div>

        </div>
    );
}

export default EvaluatingPolicySearchResult;

