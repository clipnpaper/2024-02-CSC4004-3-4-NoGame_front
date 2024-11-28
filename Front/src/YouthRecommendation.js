import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './YouthRecommendation.css';
<<<<<<< Updated upstream
=======
import PolicyData_Temp from './PolicyData_Temp'; // 정책 데이터 임포트
import FilterButtons from './FilterButtons';
>>>>>>> Stashed changes

function YouthRecommendation() {
    const navigate = useNavigate();
    const [displayedPolicies, setDisplayedPolicies] = useState([]); // 표시할 정책 데이터
    const [visibleCount, setVisibleCount] = useState(2); // 초기 표시할 정책 개수
    const [searchQuery, setSearchQuery] = useState(''); // 검색어
    const [searchResults, setSearchResults] = useState([]); // 검색 결과

<<<<<<< Updated upstream
    const goToCustomPolicySearch = () => {
        navigate('/custom-policy-search');
=======
    // 상세 페이지로 이동
    const goToPolicyDetail = (policyId) => {
        navigate(`/PolicyDetail/${policyId}`);
    };

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 10
        ) {
            setVisibleCount((prevCount) => prevCount + 6); // 스크롤 시 6개씩 추가
        }
    };

    useEffect(() => {
        // 초기 데이터 설정
        setDisplayedPolicies(PolicyData_Temp.slice(0, visibleCount));
    }, [visibleCount]);

    useEffect(() => {
        // 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 이벤트 제거
    }, []);

    // 검색 핸들러
    const handleSearch = async (e) => {
        e.preventDefault();

        // 백엔드로 검색어 요청 전송
        try {
            const response = await fetch(`/api/search?query=${searchQuery}`, {
                method: 'GET',
            });
            const data = await response.json();
            setSearchResults(data.results); // 검색 결과를 상태에 저장
        } catch (error) {
            console.error('검색 요청 실패:', error);
        }
>>>>>>> Stashed changes
    };

    return (
        <div className="recommendation-container">
            <header className="recommendation-header">
                <span className="time">12:00</span>
                <span className="title">青年對答 HOME </span>
                <span className="icons">
                    <span role="img" aria-label="battery">🔋</span>
                </span>
            </header>

<<<<<<< Updated upstream
            <div className="search-bar">
                <input type="text" placeholder="검색어를 입력하세요..." disabled />
            </div>

            <div className="greeting">
                <p>23세 대학생이신 청년님 안녕하세요❤️</p>
=======
            {/* 검색 바 */}
            <form className="search-bar" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="검색어를 입력하세요..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">검색</button>
            </form>

            <div className="greeting">
                <p>23세 대학생이신 청년님 안녕하세요❤️</p>
            </div>
            <div className="greeting2">
>>>>>>> Stashed changes
                <p>해당 정보에 맞춰 추천되고 있어요.</p>
            </div>

            <div className="button-group">
<<<<<<< Updated upstream
                <button>정책 평가하기</button>
                <button onClick={goToCustomPolicySearch}>맞춤 정책찾기</button>
                <button>정책 제안하기</button>
                <button>정책 목록보기</button>
            </div>

            <div className="card-container">
                <div className="card">
                    <h4>[경기] 경기 청년 갤러리</h4>
                    <p>#모집마감 #프로젝트지원 #경기 #19~34</p>
                    <p>참가자 수: 3845 • 관심: 132 • 별점: ★1.9 (309)</p>
                </div>
                <div className="card">
                    <h4>[강남] 청년행복임대주택</h4>
                    <p>#주택지원 #강남 #33층 #문정동</p>
                    <p>참가자 수: 3845 • 관심: 132 • 별점: ★1.9 (309)</p>
                </div>
=======
                <FilterButtons /> {/* 버튼 그룹 컴포넌트 */}
            </div>

            {/* 검색 결과 또는 정책 카드 컨테이너 */}
            <div className="card-container">
                {(searchResults.length > 0 ? searchResults : displayedPolicies).map((policy) => (
                    <div
                        className="card"
                        key={policy.id} // 고유 키 설정
                        onClick={() => goToPolicyDetail(policy.id)} // 정책 ID 전달
                    >
                        <div className="card-header">
                            <span>{policy.region || '지역 정보 없음'}</span>
                            <span>{policy.title}</span>
                        </div>
                        <img
                            src={policy.image || '/images/placeholder.png'} // 이미지 경로 설정
                            alt={policy.title}
                            className="card-image"
                        />
                        <div className="card-body">
                            <p>모집마감일: {policy.deadline || '정보 없음'}</p>
                            <p>{policy.description}</p>
                        </div>
                        <div className="card-footer">
                            <span>⭐ {policy.rating || 'N/A'} ({policy.reviews || 0})</span>
                        </div>
                    </div>
                ))}
>>>>>>> Stashed changes
            </div>
        </div>
    );
}

export default YouthRecommendation;
