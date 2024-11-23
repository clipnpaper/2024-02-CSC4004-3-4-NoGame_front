// src/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS 파일을 React 컴포넌트에 불러오기

function Login() {
  return (
    <div className="container">
      <div className="logo"></div>
      <div className="title">시작하기</div>
      <div className="subtitle">
        카카오 로그인 외에는 로그인 방법이 없습니다.<br />1인 1계정을 원칙으로 합니다.
      </div>
      <button className="login-button" onClick={loginWithKakao}>
        <img src="images/kakao-icon.png" alt="카카오 아이콘" />
        카카오 로그인
      </button>
      <div className="terms">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

function loginWithKakao() {
  alert('카카오 로그인을 진행합니다.');
}

export default Login;
