import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YouthResponse from './YouthResponse';
import YouthRecommendation from './YouthRecommendation';
import CustomPolicySearch from './CustomPolicySearch';
import Login from './Login';
import Start from './Start';
import PolicyDetail from "./PolicyDetail";
function App() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Start />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/YouthResponse" element={<YouthResponse />} />
                <Route path="/recommendation" element={<YouthRecommendation />} />
                <Route path="/custom-policy-search" element={<CustomPolicySearch />} />
                <Route path="/PolicyDetail" element={<PolicyDetail />} />
            </Routes>
        </Router>
    );
}

export default App;