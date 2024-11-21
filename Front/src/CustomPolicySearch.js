import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomPolicySearch.css';

function CustomPolicySearch() {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedDetail, setSelectedDetail] = useState(null);
    const [selectedAge, setSelectedAge] = useState("20세");
    const [selectedPolicy, setSelectedPolicy] = useState("주거지원형");
    const navigate = useNavigate();

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
    };

    const handleDetailSelect = (detail) => {
        setSelectedDetail(detail);
    };

    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value);
    };

    const handlePolicyChange = (event) => {
        setSelectedPolicy(event.target.value);
    };

    const handleSubmit = () => {
        navigate('/results', {
            state: {
                selectedGroup,
                selectedDetail,
                selectedAge,
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

            <div className="input-group">
                <label>나이를 알려주세요</label>
                <select onChange={handleAgeChange} value={selectedAge}>
                    <option>20세</option>
                    <option>21세</option>
                    <option>22세</option>
                    <option>23세</option>
                    <option>24세</option>
                    <option>25세</option>
                </select>
            </div>

            <div className="input-group">
                <label>소속되신 집단에 표시해주세요</label>
                <div className="radio-group">
                    {["전문대생", "대학생", "취준생", "사회초년생", "중소기업재직", "청년창업", "고졸"
                    ,"차상위계층", "자립준비청년", "대학원생"].map((group) => (
                        <div
                            key={group}
                            className={`radio-button ${selectedGroup === group ? "selected" : ""}`}
                            onClick={() => handleGroupSelect(group)}
                        >
                            {group}
                        </div>
                    ))}
                </div>
            </div>


            <div className="input-group">
                <label>정책 카테고리를 설정해주세요</label>
                <select onChange={handlePolicyChange} value={selectedPolicy}>
                    <option>주거지원형</option>
                    <option>창업지원형</option>
                    <option>기본소득형</option>
                </select>
            </div>


            <div className="input-group">
                <label>세부기능을 표시해주세요</label>
                <div className="radio-group">
                    {["마감된 것도 보여주세요", "하나의 기능", "두개의 기능", "세개의 기능"].map((detail) => (
                        <div
                            key={detail}
                            className={`radio-button ${selectedDetail === detail ? "selected" : ""}`}
                            onClick={() => handleDetailSelect(detail)}
                        >
                            {detail}
                        </div>
                    ))}
                </div>
            </div>

            <button className="complete-button" onClick={handleSubmit}>완료</button>
        </div>
    );
}

export default CustomPolicySearch;

