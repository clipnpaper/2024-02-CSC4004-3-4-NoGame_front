import React from 'react';
import './CustomPolicySearch.css';

<<<<<<< Updated upstream
function CustomPolicySearch() {
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

            <div className="input-group">
                <label>나이를 알려주세요</label>
                <select>
                    <option>20세</option>
                    <option>21세</option>
                    <option>22세</option>
                    {/* Add other ages as options */}
                </select>
            </div>

            <div className="input-group">
                <label>소속되신 집단에 표시해주세요</label>
                <div className="tags">
                    <span className="tag selected">전문대생</span>
                    <span className="tag">대학생</span>
                    <span className="tag">취준생</span>
                    <span className="tag">사회초년생</span>
                    {/* Add more tags as needed */}
                </div>
            </div>

            <div className="input-group">
                <label>정책 카테고리를 설정해주세요</label>
                <select>
                    <option>주거지원형</option>
                    <option>창업지원형</option>
                    {/* Add other categories as options */}
                </select>
            </div>

            <div className="input-group">
                <label>세부 디테일을 정해주세요.</label>
                <div className="details">
                    <span className="detail">마감된것도</span>
                    <span className="detail">모두 보여주세요</span>
                    {/* Add more detail options as needed */}
                </div>
            </div>

            <button className="complete-button">완료</button>
=======
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
                <h1>맞춤 정책찾기</h1>
            </header>

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
            <div className="group-buttons">
                <p>소속되신 집단에 표시해주세요</p>
                <div className="buttons">
                    {groups.map((group) => (
                        <button
                            key={group}
                            className={`group-button ${selectedGroup === group ? 'selected' : ''}`}
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
            <div className="feature-buttons">
                <p>세부기능을 표시해주세요</p>
                <div className="buttons">
                    {features.map((feature) => (
                        <button
                            key={feature}
                            className={`feature-button ${selectedFeature === feature ? 'selected' : ''}`}
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
>>>>>>> Stashed changes
        </div>
    );
};

export default CustomPolicySearch;
