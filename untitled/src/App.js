import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import YouthResponse from './YouthResponse';
import YouthRecommendation from './YouthRecommendation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<YouthResponse />} />
                <Route path="/recommendation" element={<YouthRecommendation />} />
            </Routes>
        </Router>
    );
}

export default App;