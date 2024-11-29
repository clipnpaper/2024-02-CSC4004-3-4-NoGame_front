import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './YouthRecommendation.css';
import PolicyData_Temp from './PolicyData_Temp'; // 정책 데이터 임포트
import FilterButtons from './FilterButtons'; // 버튼 그룹 컴포넌트

function YouthRecommendation() {
    const navigate = useNavigate();
    const [displayedPolicies, setDisplayedPolicies] = useState([]); // 표시할 정책 데이터
    const [visibleCount, setVisibleCount] = useState(2); // 초기 표시할 정책 개수
    const [searchQuery, setSearchQuery] = useState(''); // 검색어
    const [searchResults, setSearchResults] = useState([]); // 검색 결과

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
        // 초기 데이터 설정 (보이는 정책 개수만큼 자르기)
        setDisplayedPolicies(PolicyData_Temp.slice(0, visibleCount));
    }, [visibleCount]);

    useEffect(() => {
        // 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 제거
    }, []);

    // 검색 핸들러
    const handleSearch = async (e) => {
        e.preventDefault();

        // 백엔드로 검색어 요청 전송 (가정)
        try {
            const response = await fetch(`/api/search?query=${searchQuery}`, {
                method: 'GET',
            });
            const data = await response.json();
            setSearchResults(data.results); // 검색 결과를 상태에 저장
        } catch (error) {
            console.error('검색 요청 실패:', error);
        }
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

            {/* 환영 인사 */}
            <div className="greeting">
                <p>23세 대학생이신 청년님 안녕하세요❤️</p>
            </div>
            <div className="greeting2">
                <p>해당 정보에 맞춰 추천되고 있어요.</p>
            </div>

            {/* 필터 버튼 그룹 */}
            <div className="button-group">
                <FilterButtons />
            </div>

            {/* 정책 카드 컨테이너 */}
            <div className="card-container">
                {(searchResults.length > 0 ? searchResults : displayedPolicies).map((policy) => (
                    <div
                        className="card"
                        key={policy.id} // 고유 키 설정
                        onClick={() => goToPolicyDetail(policy.id)} // 정책 ID 전달
                    >
                        <div className="card-header">
                            <h4>{policy.title || '[제목 없음]'}</h4>
                        </div>
                        <p>{policy.tags ? policy.tags.join(' ') : '#태그 없음'}</p>
                        <p>참가자 수: {policy.participants || '정보 없음'} • 관심: {policy.interest || 0} • 별점: ⭐{policy.rating || 'N/A'} ({policy.reviews || 0})</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YouthRecommendation;
