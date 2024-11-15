import React from 'react';
import './YouthRecommendation.css';

function YouthRecommendation() {
    return (
        <div className="recommendation-container">
            <header className="recommendation-header">
                <span className="time">9:41</span>
                <span className="title">Recommendation</span>
                <span className="icons">
          <span role="img" aria-label="battery">🔋</span>
        </span>
            </header>

            <div className="search-bar"> {/* This is the placeholder for the search bar */}
                <input type="text" placeholder="검색어를 입력하세요..." disabled />
            </div>

            <div className="greeting">
                <p>23세 대학생이신 청년님 안녕하세요❤️</p>
                <p>해당 정보에 맞춰 추천되고 있어요.</p>
            </div>

            <div className="button-group">
                <button>정책 평가하기</button>
                <button>맞춤 정책찾기</button>
                <button>정책 제안하기</button>
                <button>정책 목록보기</button>
            </div>

            <div className="card-container">
                {/* Repeat these card elements as needed */}
                <div className="card">
                    <h4>[경기] 경기 청년 갤러리</h4>
                    <p>#모집마감 #프로젝트지원 #경기 #19~34</p>
                    <p>참가자 수: 3845 • 관심: 132 • 별점: ★1.9 (309)</p>
                </div>
                <div className="card">
                    <h4>[강남] 청년행복임대주택</h4>
                    <p>#주택지원 #강남 #33층 #문정동</p>
                    <p>참가자 수: 3845 • 관심: 132 • 별점: ★1.9 (309)</p>
                </div>
                {/* Add more cards here */}
            </div>
        </div>
    );
}

export default YouthRecommendation;
