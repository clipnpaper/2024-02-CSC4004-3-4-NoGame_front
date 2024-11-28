import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PolicyDetail_Proposal from "./PolicyDetail_Proposal"; // 제안된 정책 데이터
import './PolicyDetail_Proposal.css';

const PolicyDetailProposal = () => {
    const { id } = useParams(); // 주소창 경로 에서 ID 가져오기
    const policy = PolicyDetail_Proposal.find((item) => item.id === id);
    console.log(Array.isArray(PolicyDetail_Proposal)); // true여야 함
    console.log(PolicyDetail_Proposal);
    const [comments, setComments] = useState(policy?.comments || []);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(policy?.rating || 0);
    const [likes, setLikes] = useState(policy?.likes || 0);

    if (!policy) {
        return <div>해당 정책 정보를 찾을 수 없습니다.</div>;
    }

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { text: newComment, likes: 0 }]);
            setNewComment('');
        }
    };

    const handleDeleteComment = (index) => {
        setComments(comments.filter((_, idx) => idx !== index));
    };

    const handleLikeComment = (index) => {
        setComments(
            comments.map((comment, idx) =>
                idx === index ? { ...comment, likes: comment.likes + 1 } : comment
            )
        );
    };

    const handleRate = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="policy-detail-container">
            <header className="policy-header">
                <span className="back-button" onClick={() => window.history.back()}>〈 뒤로</span>
                <h1>{policy.title}</h1>
            </header>
            <img src={policy.image} alt={policy.title} className="policy-image" />
            <div className="policy-info">
                <p className="policy-tags">{policy.tags?.join(' ')}</p>
                <p><strong>배경 및 필요성:</strong> {policy.background}</p>
                <p><strong>정책 목표:</strong> {policy.purpose}</p>
            </div>
            <div className="policy-rating">
                <p>⭐ {rating}</p>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= rating ? 'active' : ''}`}
                        onClick={() => handleRate(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
            <div className="policy-comments">
                <h3>댓글</h3>
                <div className="comment-input">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="댓글을 입력하세요..."
                    />
                    <button onClick={handleAddComment}>추가</button>
                </div>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p>{comment.text}</p>
                            <div>
                                <span onClick={() => handleLikeComment(index)}>❤️ {comment.likes}</span>
                                <span onClick={() => handleDeleteComment(index)}>삭제</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PolicyDetailProposal;
