import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Start.css';

function Start() {
    const navigate = useNavigate();

    useEffect(() => {
        const splashScreen = document.getElementById("splash-screen");

        // 3초 후에 시작 화면을 숨기고 다른 페이지로 이동 (예시)
        setTimeout(() => {
            splashScreen.style.display = "none";
            navigate('/Login'); // 필요한 경로로 이동
        }, 3000);
    }, [navigate]);

    return (
        <div id="splash-screen" className="splash-container">
            <div className="splash-logo">
                <h1>청년대답</h1>
                <p>青年對答</p>
            </div>
        </div>
    );
}

export default Start;
