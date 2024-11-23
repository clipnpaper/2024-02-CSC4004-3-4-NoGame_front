import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EvaluatingPolicySearchResult.css';

// 가상 데이터 (서버나 데이터베이스에서 가져올 데이터로 대체 가능)
const policyData = [
    {
        id: 1,
        region: '경기',
        title: '경기 청년 갤러리',
        description: '모집마감일: 155×62. 프로젝트 지원 정책입니다.',
        image: 'placeholder1.png',
        rating: 1.9,
        reviews: 309,
    },
    {
        id: 2,
        region: '강남',
        title: '청년행복임대주택',
        description: '강남 지역에 위치한 청년 임대 주택입니다.',
        image: 'placeholder2.png',
        rating: 4.3,
        reviews: 512,
    },
    {
        id: 3,
        region: '서울',
        title: '서울 창업 지원 프로그램',
        description: '서울 지역 창업 지원을 위한 정책입니다.',
        image: 'placeholder3.png',
        rating: 4.5,
        reviews: 120,
    },
    // 추가 데이터...
];

function EvaluatingPolicySearchResult() {
    const location = useLocation();
    const navigate = useNavigate();

    // 필터링 값 가져오기
    const { selectedGroup, selectedDetail, selectedAge, selectedPolicy } = location.state || {};

    // 필터링 함수: 조건에 맞는 정책만 필터링
    const filteredPolicies = policyData.filter((policy) => {
        return (
            (!selectedGroup || policy.region.includes(selectedGroup)) &&
            (!selectedDetail || policy.title.includes(selectedDetail)) &&
            (!selectedPolicy || policy.description.includes(selectedPolicy))
        );
    });

    return (
        <div className="evaluating-policy-container">
            <header className="evaluating-policy-header">
                <span className="back-button" onClick={() => navigate('/')}>〈 정책목록</span>
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
                        <div className="card" key={policy.id}>
                            <div className="card-header">
                                <span>{policy.region}</span>
                                <span>{policy.title}</span>
                            </div>
                            <img src={policy.image} alt={policy.title} className="card-image" />
                            <div className="card-body">
                                <p>{policy.description}</p>
                            </div>
                            <div className="card-footer">
                                <span>⭐ {policy.rating} ({policy.reviews})</span>
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
