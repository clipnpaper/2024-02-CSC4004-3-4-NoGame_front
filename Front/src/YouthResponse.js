import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './YouthResponse.css';

function YouthResponse() {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');

            if (code) {
                try {
                    // 1. Kakao OAuth 토큰 요청
                    const tokenResponse = await fetch(
                        'https://kauth.kakao.com/oauth/token',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: new URLSearchParams({
                                grant_type: 'authorization_code',
                                client_id: '48fbbd944370c44ffd825a0a7ca01074',
                                redirect_uri: 'http://localhost:3000/YouthResponse',
                                code,
                            }),
                        }
                    );
                    const tokenData = await tokenResponse.json();
                    const { access_token } = tokenData;

                    // 2. 사용자 정보 요청
                    const userInfoResponse = await fetch(
                        'https://kapi.kakao.com/v2/user/me',
                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${access_token}`,
                            },
                        }
                    );
                    const userInfo = await userInfoResponse.json();

                    // 3. 사용자 정보 저장
                    const profile = {
                        name: userInfo.kakao_account.profile.nickname,
                        age: userInfo.kakao_account.age_range,
                        region: userInfo.kakao_account.profile.region || '지역 정보 없음',
                    };
                    localStorage.setItem('profile', JSON.stringify(profile));

                    // 4. `/recommendation`으로 이동
                    navigate('/recommendation');
                } catch (error) {
                    console.error('사용자 정보 요청 실패:', error);
                }
            }
        };

        fetchUserInfo();
    }, [navigate]);

    return (
        <div className="container">
            {/* 기존 내용 유지 */}
            <header className="header">
                <span className="time">9:41</span>
                <span className="title">WireFrame</span>
                <span className="icons">
          <span role="img" aria-label="battery">🔋</span>
        </span>
            </header>

            <div className="content">
                <p className="main-text">
                    청년들의 새로운 참여 방법, 국가가 묻고, 청년이 대답한다.
                    <br />
                    <span className="title-text">청년대답</span>
                </p>
                <p className="loading-message">로그인 정보를 가져오고 있습니다...</p>
            </div>

            <footer className="footer">
                <div className="pagination">
                    <span>5 / 27</span>
                </div>
            </footer>
        </div>
    );
}

export default YouthResponse;