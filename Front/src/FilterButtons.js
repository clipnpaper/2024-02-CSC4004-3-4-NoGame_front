import React from 'react';
import { useNavigate } from 'react-router-dom';


function FilterButtons() {
    const navigate = useNavigate();

    return (
        <div className="button-group">
            {/* 각 버튼에 고유 경로 지정 */}
            <button onClick={() => navigate('/Evaluatingresults')}>정책 평가하기</button>
            <button onClick={() => navigate('/custom-policy-search')}>맞춤 정책 찾기</button>
            <button onClick={() => navigate('/PolicyDetail')}>정책 제안하기</button>
            <button onClick={() => navigate('/recommendation')}>정책 목록 보기</button>
        </div>
    );
}

export default FilterButtons;
