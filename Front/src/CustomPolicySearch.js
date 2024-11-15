import React from 'react';
import './CustomPolicySearch.css';

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
        </div>
    );
}

export default CustomPolicySearch;
