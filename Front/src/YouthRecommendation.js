import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './YouthRecommendation.css';
import PolicyData_Temp from './PolicyData_Temp';
import FilterButtons from './FilterButtons';

function YouthRecommendation() {
    const navigate = useNavigate();
    const [displayedPolicies, setDisplayedPolicies] = useState([]);
    const [visibleCount, setVisibleCount] = useState(2);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // 사용자 정보 로드
        const storedProfile = localStorage.getItem('profile');
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

    useEffect(() => {
        setDisplayedPolicies(PolicyData_Temp.slice(0, visibleCount));
    }, [visibleCount]);

    const goToPolicyDetail = (policyId) => {
        navigate(`/PolicyDetail/${policyId}`);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 10
        ) {
            setVisibleCount((prevCount) => prevCount + 6);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="recommendation-container">
            <header className="recommendation-header">
                <span className="time">12:00</span>
                <span className="title">青年對答 HOME </span>
                <span className="icons">
          <span role="img" aria-label="battery">
            🔋
          </span>
        </span>
            </header>

            <div className="greeting">
                {profile ? (
                    <p>
                        서울에 거주하시는 20세 대학생이신{' '}
                        {profile.name}님 안녕하세요 ❤️
                    </p>
                ) : (
                    <p>사용자 정보를 불러오는 중...</p>
                )}
            </div>
            <div className="greeting2">
                <p>해당 정보에 맞춰 추천되고 있어요.</p>
            </div>

            <div className="button-group">
                <FilterButtons />
            </div>

            <div className="card-container">
                {displayedPolicies.map((policy) => (
                    <div
                        className="card"
                        key={policy.id}
                        onClick={() => goToPolicyDetail(policy.id)}
                    >
                        <div className="card-header">
                            <h4>{policy.title || '[제목 없음]'}</h4>
                        </div>
                        <p>{policy.tags ? policy.tags.join(' ') : '#태그 없음'}</p>
                        <p>
                            참가자 수: {policy.participants || '정보 없음'} • 관심:{' '}
                            {policy.interest || 0} • 별점: ⭐{policy.rating || 'N/A'} (
                            {policy.reviews || 0})
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YouthRecommendation;