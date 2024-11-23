import React from 'react';
import { useNavigate } from 'react-router-dom';
import './YouthResponse.css';

function YouthResponse() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/recommendation');
    };

    return (
        <div className="container" onClick={handleClick}>
            {/* Previous content here */}
            <header className="header">
                <span className="time">9:41</span>
                <span className="title">WireFrame</span>
                <span className="icons">
          <span role="img" aria-label="battery">🔋</span>
        </span>
            </header>

            <div className="content">
                <p className="main-text">
                    청년들의 새로운 참여 방법, 국가가 묻고, 청년이 대답한다.
                    <br />
                    <span className="title-text">청년대답</span>
                </p>
            </div>

            <footer className="footer">
                <div className="pagination">
                    <span>5 / 27</span>
                </div>
            </footer>
        </div>
    );
}

export default YouthResponse;

