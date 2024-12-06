import React from 'react';
import { useNavigate } from 'react-router-dom';


function FilterButtons() {
    const navigate = useNavigate();

    return (
        <div className="button-group">
            {/* 각 버튼에 고유 경로 지정 */}
            <button onClick={() => navigate('/Evaluatingresults')}>정책평가하기</button>
            <button onClick={() => navigate('/custom-policy-search')}>맞춤정책찾기</button>
            <button onClick={() => navigate('/PolicyProposal')}>정책제안하기</button>
            <button onClick={() => navigate('/PolicyList')}>최신정책목록</button>
        </div>
    );
}

export default FilterButtons;
