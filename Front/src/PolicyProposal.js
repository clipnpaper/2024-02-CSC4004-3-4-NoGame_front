import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PolicyProposal.css';

function PolicyProposal() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('주거지원형'); // 카테고리 선택
    const [selectedGroups, setSelectedGroups] = useState([]); // 혜택 집단 선택

    const groups = [
        '대학생', '취준생', '사회초년생', '전문대생',
        '중소기업재직', '청년창업', '고졸', '차상위계층',
        '자립준비청년', '대학원생', '모든청년', '내가 만들기',
    ];

    const toggleGroup = (group) => {
        setSelectedGroups((prev) =>
            prev.includes(group)
                ? prev.filter((g) => g !== group)
                : [...prev, group]
        );
    };

    return (
        <div className="policy-proposal-container">
            <header>
                <button onClick={() => navigate('/policy-editor')}>[정책을 제안하세요.]</button>
            </header>
            <h2>제안하고 싶은 정책의 카테고리를 정해주세요</h2>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="주거지원형">주거지원형</option>
                <option value="창업지원형">창업지원형</option>
                <option value="기본소득형">기본소득형</option>
            </select>

            <h3>혜택 집단에 표시해주세요</h3>
            <div className="group-buttons">
                {groups.map((group) => (
                    <button
                        key={group}
                        className={selectedGroups.includes(group) ? 'selected' : ''}
                        onClick={() => toggleGroup(group)}
                    >
                        {group}
                    </button>
                ))}
            </div>

            <button
                className="complete-button"
                onClick={() =>
                    navigate('/PolicyEditor', { state: { selectedCategory, selectedGroups } })//일단 제안목록이 아닌 일반정책목록으로 이동함
                }                                                                           //추후 백엔드와 협의해야함.
            >
                완료
            </button>
        </div>
    );
}

export default PolicyProposal;
