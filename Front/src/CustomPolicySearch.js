import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomPolicySearch.css';

const CustomPolicySearch = () => {
    const navigate = useNavigate();
    const [selectedAge, setSelectedAge] = useState(null); // 선택하지 않으면 전체 검색
    const [selectedCategory, setSelectedCategory] = useState(null); // 선택하지 않으면 전체 검색
    const [selectedGroup, setSelectedGroup] = useState(null); // 선택하지 않으면 전체 검색
    const [selectedFeature, setSelectedFeature] = useState(null); // 선택하지 않으면 전체 검색

    const groups = [
        '전문대생', '대학생', '취준생',
        '사회초년생', '중소기업재직', '청년창업',
        '고졸', '차상위계층', '자립준비청년', '대학원생',
    ];

    const features = [
        '마감된 것도 보여주세요', '하나의 기능',
        '두개의 기능', '세개의 기능',
    ];

    // 완료 버튼 클릭 시 정책 리스트 페이지로 이동
    const handleComplete = () => {
        navigate('/PolicyList', {
            state: {
                selectedAge,
                selectedCategory,
                selectedGroup,
                selectedFeature,
            },
        });
    };

    return (
        <div className="custom-policy-container">
            <header className="custom-policy-header">
                <span className="time">9:41</span>
                <span className="title">맞춤 정책찾기</span>
                <span className="icons">
                    <span role="img" aria-label="battery">🔋</span>
                </span>
            </header>

            <div className="message">
                <p>맞춤 정책을 찾아드릴게요</p>
                <p>걱정마세요. 지금 아무 선택 안해도 다시 설정할 수 있어요.</p>
            </div>

            {/* 나이 선택 */}
            <div className="input-group">
                <label htmlFor="age-select">나이를 알려주세요</label>
                <select
                    id="age-select"
                    value={selectedAge || ''} // 선택하지 않으면 빈 값
                    onChange={(e) =>
                        setSelectedAge(e.target.value ? parseInt(e.target.value) : null)
                    }
                >
                    <option value="">전체</option>
                    {[20, 21, 22, 23, 24, 25].map((age) => (
                        <option key={age} value={age}>
                            {age}세
                        </option>
                    ))}
                </select>
            </div>

            {/* 집단 버튼 */}
            <div className="input-group">
                <p>소속되신 집단에 표시해주세요</p>
                <div className="tags">
                    {groups.map((group) => (
                        <button
                            key={group}
                            className={`tag ${selectedGroup === group ? 'selected' : ''}`}
                            onClick={() =>
                                setSelectedGroup((prev) => (prev === group ? null : group))
                            }
                        >
                            {group}
                        </button>
                    ))}
                </div>
            </div>

            {/* 카테고리 선택 */}
            <div className="input-group">
                <label htmlFor="category-select">정책 카테고리를 설정해주세요</label>
                <select
                    id="category-select"
                    value={selectedCategory || ''} // 선택하지 않으면 빈 값
                    onChange={(e) =>
                        setSelectedCategory(e.target.value || null)
                    }
                >
                    <option value="">전체</option>
                    {['주거지원형', '창업지원형', '기본소득형'].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* 세부 기능 버튼 */}
            <div className="input-group">
                <p>세부기능을 표시해주세요</p>
                <div className="tags">
                    {features.map((feature) => (
                        <button
                            key={feature}
                            className={`detail ${selectedFeature === feature ? 'selected' : ''}`}
                            onClick={() =>
                                setSelectedFeature((prev) => (prev === feature ? null : feature))
                            }
                        >
                            {feature}
                        </button>
                    ))}
                </div>
            </div>

            {/* 완료 버튼 */}
            <button className="complete-button" onClick={handleComplete}>
                완료
            </button>
        </div>
    );
};

export default CustomPolicySearch;
