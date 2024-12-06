import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import YouthResponse from './YouthResponse';
import YouthRecommendation from './YouthRecommendation';
import CustomPolicySearch from './CustomPolicySearch';
import Login from './Login';
import Start from './Start';
import PolicyDetail from './PolicyDetail';
import EvaluatingPolicySearchResult from './EvaluatingPolicySearchResult';
import FilterButtons from './FilterButtons';
import PolicyList from "./PolicyList";
import PolicyProposal from "./PolicyProposal";
import PolicyEditor from "./PolicyEditor";
import PolicyDetail_Proposal from "./PolicyDetail_Proposal";
import './App.css';

function App() {

    return (

        <Router>
            <TransitionGroup>
                <CSSTransition
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <Routes>
                        <Route path="/" element={<Start />} />{/* 시작 로고창1 */}
                        <Route path="/Login" element={<Login />} /> {/* 카카오 로그인 */}
                        <Route path="/YouthResponse" element={<YouthResponse />} /> {/* 로고창2 */}
                        <Route path="/recommendation" element={<YouthRecommendation />} /> {/* 홈페이지 */}
                        <Route path="/custom-policy-search" element={<CustomPolicySearch />} /> {/* 필터링 */}
                        <Route path="/PolicyDetail/:id" element={<PolicyDetail />} />{/* 정책 게시글 */}
                        <Route path="/PolicyList" element={<PolicyList />} />
                        <Route path="/Evaluatingresults" element={<EvaluatingPolicySearchResult />} /> {/* 정책 평가 결과 */}
                        <Route path="/FilterButtons" element={<FilterButtons />} />
                        <Route path="/Policy/:id" element={<PolicyDetail />} />{/* 정책설명글 공통컴포넌트 */}
                        <Route path="/PolicyProposal" element={<PolicyProposal />} />
                        <Route path="/PolicyEditor" element={<PolicyEditor />} />
                        <Route path="/PolicyDetail_Proposal/:id" element={<PolicyDetail_Proposal />} />{/* 제안정책설명글 공통컴포넌트 */}
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </Router>
    );
}

export default App;
