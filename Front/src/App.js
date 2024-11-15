import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YouthResponse from './YouthResponse';
import YouthRecommendation from './YouthRecommendation';
import CustomPolicySearch from './CustomPolicySearch';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<YouthResponse />} />
                <Route path="/recommendation" element={<YouthRecommendation />} />
                <Route path="/custom-policy-search" element={<CustomPolicySearch />} />
            </Routes>
        </Router>
    );
}

export default App;