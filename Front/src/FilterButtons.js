import React from 'react';
import { useNavigate } from 'react-router-dom';


function FilterButtons() {
    const navigate = useNavigate();

    return (
        <div className="button-group">
            {/* 각 버튼에 고유 경로 지정 */}
            <button onClick={() => navigate('/EvaluatingPolicySearchResult')}>정책 평가하기</button>
            <button onClick={() => navigate('/custom-policy-search')}>맞춤 정책찾기</button>
            <button onClick={() => navigate('/PolicyProposal')}>정책 제안하기</button>
            <button onClick={() => navigate('/PolicyList')}>최신 정책목록</button>
        </div>
    );
}

export default FilterButtons;
