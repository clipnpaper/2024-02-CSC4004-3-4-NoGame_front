import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YouthResponse from './YouthResponse';
import YouthRecommendation from './YouthRecommendation';
import CustomPolicySearch from './CustomPolicySearch';
import Login from './Login';
import Start from './Start';
import PolicyDetail from './PolicyDetail';
import CustomPolicySearchResult from './CustomPolicySearchResult';
import EvaluatingPolicySearchResult from './EvaluatingPolicySearchResult';
import FilterButtons from './FilterButtons'; // 버튼 그룹 추가

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ " element={<Start />} />{/* 시작 로고창1 */}
                <Route path="/Login" element={<Login />} /> {/* 카카오 로그인 */}
                <Route path="/YouthResponse" element={<YouthResponse />} /> {/* 로고창2 */}
                <Route path="/recommendation" element={<YouthRecommendation />} /> {/* 홈페이지 */}
                <Route path="/custom-policy-search" element={<CustomPolicySearch />} /> {/* 필터링 */}
                <Route path="/PolicyDetail" element={<PolicyDetail />} />{/* 정책 게시글 */}
                <Route path="/CustomSearchResults" element={<CustomPolicySearchResult />} /> {/* 맞춤 정책 검색결과 */}
                <Route path="/Evaluatingresults" element={<EvaluatingPolicySearchResult />} /> {/* 정책 평가 결과 */}
                <Route path="/Filter" element={<FilterButtons />} />
            </Routes>
        </Router>
    );
}

export default App;
