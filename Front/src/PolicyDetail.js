import React from 'react';
import { useParams } from 'react-router-dom';
import './PolicyDetail.css';

function PolicyDetail() {

    const { policyId } = useParams();

    return (
        <div className="policy-detail-container">
            <header className="policy-header">
                <h1>정책아이디어</h1>
            </header>
            <p>정책 ID: {policyId}</p>
            <div className="policy-content">
                <h2>대학생 전공책 바우처</h2>
                <p>대상: 대학생</p>
                <p>#대학생 #바우처 #학업지원</p>

                <div>
                    <h3>배경 및 필요성</h3>
                    <p>대학생들은 학업을 위해 많은 비용을 지출해야 하며...</p>
                </div>

                <div>
                    <h3>정책 목표</h3>
                    <p>이 정책의 목표는 대학생들의 경제적 부담을 줄이고...</p>
                </div>
            </div>

            <div className="like-view-section">
                <span>❤️ 좋아요: 123</span>
                <span>👁️ 조회수: 2348</span>
            </div>

            <div className="rating-container">
                <div className="stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">☆</span>
                </div>
                <p>4.0 (3431)</p>
                <button>참여하기</button>
            </div>

            <div className="comment-section">
                <h3>평점과 한줄평</h3>
                <div className="comment">좋은 정책입니다! 매우 유용할 것 같아요.</div>
                <div className="comment">학생들에게 큰 도움이 될 것 같네요.</div>
                <div className="comment">정책이 구체적이면 더 좋을 것 같아요.</div>
            </div>

            <div className="related-ideas">
                <h3>관련 다른 아이디어</h3>
                <div className="idea-card">
                    <p>정부주도 전공책 공유 플랫폼</p>
                    <span>#전공책</span>
                </div>
                <div className="idea-card">
                    <p>지자체 도서관 전공책 필수 구비</p>
                    <span>#전공책</span>
                </div>
            </div>
        </div>
    );
}

export default PolicyDetail;
