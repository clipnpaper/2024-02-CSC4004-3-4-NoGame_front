import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PolicyDetail_Proposal from "./PolicyData_proposaleded";
import './PolicyDetail_Proposal.css';

const PolicyDetailProposal = () => {
    const { id } = useParams();

    const policies = Array.isArray(PolicyDetail_Proposal) ? PolicyDetail_Proposal : [];
    const policy = policies.find((item) => item.id === id);

    // 긍정/부정 지수 상태
    const [positiveScore, setPositiveScore] = useState(75);
    const [negativeScore, setNegativeScore] = useState(100 - 75);

    // 초기 상태
    const [comments, setComments] = useState([
        { author: '오상현', text: '잠은 죽어서 자는거 아니었나요? ㅎㅎ', likes: 3, dislikes: 25 },
        { author: '최나래', text: '피부 관련 질병 옮을까봐 걱정되네요.. 정말로 예산 받아 수면실 생겼을 때 ' +
                '학교에서 관리할 때 수면실 위생대책 강구 잘해야겠어요.', likes: 6, dislikes: 1 },
        { author: '김현준', text: '정말로 이 정책이 받아들여 질까요??', likes: 4, dislikes: 1 },
        { author: '야기시타 쇼키', text: '전 이 아이디어 격하게 찬성합니다!!', likes: 4, dislikes: 0 },
    ]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(`policy_${id}`));
        if (savedData) {
            setComments(savedData.comments || comments);
            setRating(savedData.rating || 4);
            setPositiveScore(savedData.positiveScore || 75);
            setNegativeScore(savedData.negativeScore || 25);
        }
    }, [id]);

    useEffect(() => {
        localStorage.setItem(
            `policy_${id}`,
            JSON.stringify({ comments, rating, positiveScore, negativeScore })
        );
    }, [comments, rating, positiveScore, negativeScore, id]);

    if (!policy) {
        return <div>해당 정책 정보를 찾을 수 없습니다.</div>;
    }

    // 댓글 추가
    const handleAddComment = () => {
        if (newComment.trim()) {
            // "좋은" 단어가 포함된 경우 긍정/부정 지수 업데이트
            if (newComment.includes("좋은")) {
                setPositiveScore((prev) => prev + 1);
                setNegativeScore((prev) => prev - 1);
            }

            setComments([
                ...comments,
                { author: '익명', text: newComment, likes: 0, dislikes: 0 },
            ]);
            setNewComment('');
        }
    };

    const handleLikeComment = (index) => {
        setComments(
            comments.map((comment, idx) =>
                idx === index
                    ? { ...comment, likes: comment.likes + 1 }
                    : comment
            )
        );
    };

    const handleDislikeComment = (index) => {
        setComments(
            comments.map((comment, idx) =>
                idx === index
                    ? { ...comment, dislikes: comment.dislikes + 1 }
                    : comment
            )
        );
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
                        onClick={() => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
            {/* 긍정/부정 지수 추가 */}
            <div className="policy-score">
                <p className="positive">긍정 지수: {positiveScore}</p>
                <p className="negative">부정 지수: {negativeScore}</p>
            </div>
            <div className="policy-comments">
                <h3>한줄평</h3>
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
                            <p><strong>{comment.author}</strong></p>
                            <p>{comment.text}</p>
                            <div className="comment-actions">
                                <span
                                    className="like-button"
                                    onClick={() => handleLikeComment(index)}
                                >
                                    👍 {comment.likes}
                                </span>
                                <span
                                    className="dislike-button"
                                    onClick={() => handleDislikeComment(index)}
                                >
                                    👎 {comment.dislikes}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PolicyDetailProposal;
