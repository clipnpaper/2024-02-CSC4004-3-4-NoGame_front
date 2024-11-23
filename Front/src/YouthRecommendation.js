import React from 'react';
import { useNavigate } from 'react-router-dom';
import './YouthRecommendation.css';
import FilterButtons from './FilterButtons';

function YouthRecommendation() {
    const navigate = useNavigate();

    const goToPolicyDetail = (policyId) => {
        navigate(`/policy-detail/${policyId}`);
    };

    return (
        <div className="recommendation-container">
            <header className="recommendation-header">
                <span className="time">9:41</span>
                <span className="title">Recommendation</span>
                <span className="icons">
                    <span role="img" aria-label="battery">🔋</span>
                </span>
            </header>

            <div className="search-bar">
                <input type="text" placeholder="검색어를 입력하세요..." disabled/>
            </div>

            <div className="greeting">
                <p>23세 대학생이신 청년님 안녕하세요❤️</p>
            </div>
            <div className={"greeting2"}>
                <p>해당 정보에 맞춰 추천되고 있어요.</p>
            </div>


            <div className="button-group">
                {/* 각 버튼에 고유 경로 지정 */}
                <FilterButtons /> {/* 버튼 그룹 컴포넌트를 재사용 */}
            </div>

            {/* 카드 컨테이너 */}
            <div className="card-container">
                <div
                    className="card"
                    onClick={() => goToPolicyDetail('policy-1')} // 정책 ID를 전달
                >
                    <div className="card-header">
                        <span>경기</span>
                        <span>청년 갭이어</span>
                    </div>
                    <img src="placeholder1.png" alt="Card image" className="card-image"/>
                    <div className="card-body">
                        <p>모집마감일: 155×62</p>
                        <p>정책 설명 내용...</p>
                    </div>
                    <div className="card-footer">
                        <span>⭐ 1.9 (309)</span>
                    </div>
                </div>

                <div
                    className="card"
                    onClick={() => goToPolicyDetail('policy-2')} // 다른 정책 ID
                >
                    <div className="card-header">
                        <span>강남</span>
                        <span>청년행복임대주택</span>
                    </div>
                    <img src="placeholder2.png" alt="Card image" className="card-image"/>
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

export default YouthRecommendation;


