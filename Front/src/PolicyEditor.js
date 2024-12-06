import React, { useState } from 'react';
import './PolicyEditor.css';

function PolicyEditor() {
    const [title, setTitle] = useState('');
    const [background, setBackground] = useState('');
    const [goal, setGoal] = useState('');
    const [nickname, setNickname] = useState('');
    const [hashtags, setHashtags] = useState([]);
    const [newHashtag, setNewHashtag] = useState('');

    const currentDate = new Date().toLocaleDateString(); // 작성 날짜

    const handleAddHashtag = () => {
        if (newHashtag.trim() && !hashtags.includes(newHashtag)) {
            setHashtags([...hashtags, newHashtag]);
            setNewHashtag('');
        }
    };

    const handleRemoveHashtag = (hashtag) => {
        setHashtags(hashtags.filter((tag) => tag !== hashtag));
    };

    const handleSave = () => {
        const policyProposal = {
            title,
            background,
            goal,
            nickname,
            hashtags,
            date: currentDate,
        };
        console.log('제안 저장:', policyProposal);
        alert('정책이 저장되었습니다!');
    };

    return (
        <div className="policy-editor-container">
            <h1>정책 제안 작성</h1>
            <div>
                <h3>제목</h3>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="정책 제목을 입력하세요."
                />
            </div>
            <div>
                <h3>작성 날짜</h3>
                <p>{currentDate}</p>
            </div>
            <div>
                <h3>배경 및 필요성</h3>
                <textarea
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    placeholder="배경 및 필요성을 입력하세요."
                />
            </div>
            <div>
                <h3>정책 목표</h3>
                <textarea
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="정책 목표를 입력하세요."
                />
            </div>
            <div>
                <h3>해시태그</h3>
                <div className="hashtag-input">
                    <input
                        type="text"
                        value={newHashtag}
                        onChange={(e) => setNewHashtag(e.target.value)}
                        placeholder="해시태그를 입력하세요."
                    />
                    <button onClick={handleAddHashtag}>추가</button>
                </div>
                <div className="hashtag-list">
                    {hashtags.map((hashtag, index) => (
                        <span key={index} className="hashtag">
                            #{hashtag}
                            <button onClick={() => handleRemoveHashtag(hashtag)}>❌</button>
                        </span>
                    ))}
                </div>
            </div>
            <button className="save-button" onClick={handleSave}>저장</button>
        </div>
    );
}

export default PolicyEditor;
