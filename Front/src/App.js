import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YouthResponse from './YouthResponse';
import YouthRecommendation from './YouthRecommendation';
import CustomPolicySearch from './CustomPolicySearch';
import Login from './Login';
import Start from './Start';
import PolicyDetail from './PolicyDetail';
//import CustomPolicySearchResult from './CustomPolicySearchResult';
import EvaluatingPolicySearchResult from './EvaluatingPolicySearchResult';
import FilterButtons from './FilterButtons';
import PolicyList from './PolicyList';
import PolicyProposal from './PolicyProposal';
import PolicyEditor from './PolicyEditor';
import PolicyDetail_Proposal from './PolicyDetail_Proposal';

function App() {
    return (
        <Router>
            <Routes>
                {/* Start and Login Routes */}
                <Route path="/" element={<Start />} /> {/* Start logo page */}
                <Route path="/Login" element={<Login />} /> {/* Kakao login page */}

                {/* Main Application Routes */}
                <Route path="/YouthResponse" element={<YouthResponse />} /> {/* Youth Response Page */}
                <Route path="/recommendation" element={<YouthRecommendation />} /> {/* Homepage with Recommendations */}

                {/* Custom Policy Search */}
                <Route path="/custom-policy-search" element={<CustomPolicySearch />} /> {/* Filtering Page */}
                {/* <Route path="/CustomSearchResults" element={<CustomPolicySearchResult />} /> Custom Policy Search Results */}

                {/* Policy Routes */}
                <Route path="/PolicyDetail/:id" element={<PolicyDetail />} /> {/* Policy Detail Page */}
                <Route path="/PolicyList" element={<PolicyList />} /> {/* Policy List Page */}
                <Route path="/Policy/:id" element={<PolicyDetail />} /> {/* Common Policy Detail Component */}

                {/* Evaluation Results */}
                <Route path="/Evaluatingresults" element={<EvaluatingPolicySearchResult />} /> {/* Policy Evaluation Results */}

                {/* Proposal and Editor Routes */}
                <Route path="/PolicyProposal" element={<PolicyProposal />} /> {/* Policy Proposal Page */}
                <Route path="/PolicyEditor" element={<PolicyEditor />} /> {/* Policy Editor Page */}
                <Route path="/PolicyDetail_Proposal/:id" element={<PolicyDetail_Proposal />} /> {/* Proposed Policy Detail Page */}

                {/* Filter Buttons (Standalone) */}
                <Route path="/FilterButtons" element={<FilterButtons />} /> {/* Filter Buttons */}

            </Routes>
        </Router>
    );
}

export default App;
