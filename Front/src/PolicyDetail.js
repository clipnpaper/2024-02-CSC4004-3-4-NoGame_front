import React from 'react';
import { useParams } from 'react-router-dom';
import './PolicyDetail.css';
import PolicyData_Temp from "./PolicyData_Temp";

// 정책 데이터 예시
const PolicyDetail = () => {
    const { id } = useParams(); // URL에서 정책 ID 가져오기
    const policy = PolicyData_Temp.find((item) => item.id === id);

    if (!policy) {
        return <div className="error-message">정책 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="policy-detail-container">
            <header className="policy-header">
                <h1>{policy.title}</h1>
            </header>

            <img src={policy.image || '/images/placeholder.png'} alt={policy.title} className="policy-detail-image" />

            <div className="policy-content">
                <p className="description">{policy.description}</p>

                <div>
                    <h3>정책 상세 정보</h3>
                    <p>{policy.details}</p>
                </div>
            </div>

            {/* 좋아요 및 조회수 섹션 */}
            <div className="like-view-section">
                <span>❤️ 좋아요: {policy.likes || 0}</span>
                <span>👁️ 조회수: {policy.views || 0}</span>
            </div>

            {/* 별점 섹션 */}
            <div className="rating-container">
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="star">
                            {index < (policy.rating || 0) ? '★' : '☆'}
                        </span>
                    ))}
                </div>
                <p>{policy.rating || '0.0'} ({policy.reviews || 0}명)</p>
                <button className="participate-button">참여하기</button>
            </div>

            {/* 댓글 섹션 */}
            <div className="comment-section">
                <h3>평점과 한줄평</h3>
                {policy.comments && policy.comments.length > 0 ? (
                    policy.comments.map((comment, index) => (
                        <div key={index} className="comment">
                            {comment}
                        </div>
                    ))
                ) : (
                    <p>아직 한줄평이 없습니다.</p>
                )}
            </div>

            {/* 관련 다른 아이디어 섹션 */}
            <div className="related-ideas">
                <h3>관련 다른 아이디어</h3>
                {policy.relatedIdeas && policy.relatedIdeas.length > 0 ? (
                    policy.relatedIdeas.map((idea, index) => (
                        <div key={index} className="idea-card">
                            <p>{idea.title}</p>
                            <span>{idea.tags ? idea.tags.join(' ') : '#관련없음'}</span>
                        </div>
                    ))
                ) : (
                    <p>관련된 아이디어가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default PolicyDetail;
