import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CustomPolicySearch.css';

function CustomPolicySearchResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedGroup = '전체', selectedDetail = '상세 없음', selectedAge = '모든 연령', selectedPolicy = '정책 없음' } = location.state || {};

    return (
        <div className="evaluating-policy-container">
            <header className="custom-policy-header">
                <span className="back-button" onClick={() => navigate('/')}>〈 정책목록</span>
                <span className="title">맞춤설정 {'>'} 필터링 결과</span>
                <span className="icons">
                    <span role="img" aria-label="filter">⚙️</span>
                </span>
            </header>

            <div className="selected-tags">
                <span className="tag selected">{selectedGroup}</span>
                <span className="tag selected">{selectedDetail}</span>
                <span className="tag selected">{selectedAge}세</span>
                <span className="tag selected">{selectedPolicy}</span>
            </div>

            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                        <span>경기</span>
                        <span>청년 갭이어</span>
                    </div>
                    <img src="/images/placeholder1.png" alt="청년 갭이어 정책 이미지" className="card-image" />
                    <div className="card-body">
                        <p>모집마감일: 155×62</p>
                        <p>정책 설명 내용...</p>
                    </div>
                    <div className="card-footer">
                        <span>⭐ 1.9 (309)</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span>강남</span>
                        <span>청년행복임대주택</span>
                    </div>
                    <img src="/images/placeholder2.png" alt="청년 행복 임대 주택 이미지" className="card-image" />
                    <div className="card-body">
                        <p>모집마감일: 155×62</p>
                        <p>정책 설명 내용...</p>
                    </div>
                    <div className="card-footer">
                        <span>⭐ 1.9 (309)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomPolicySearchResult;
