import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>제22대 국회의원선거 특집 홈페이지</title>
      <link
        href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
    <header>
      <div className="container">
        <div className="header-style">
          <img
            src="https://img.nec.go.kr/images/n21/avt/kcircle.png"
            alt=""
          />제22대 국회의원선거
        </div>
        <div></div>
        <div></div>
      </div>
    </header>

    <body className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div className="container-fluid">
          <div
            ><img src="https://img.nec.go.kr/images/n21/avt/logo.png" alt=""
          /></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link">알림·소식</div>
              <div className="nav-link">선거정보</div>
              <div className="nav-link">선거이슈 및 사실확인</div>
              <div className="nav-link">자료공간</div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="main-style">
          <div className="b">선거일 투표</div>
          <div className="main-text">4 월 10 일(수) <br />오전 6시~오후 6시</div>
        </div>
        <div className="main-style">
          <div className="b">사전 투표</div>
          <div className="main-text">
            4 월 5 일(금) ~ 6 일(토) <br />오전 6시~오후 6시 <br />
            전국 어디서나 가능
          </div>
        </div>
        <div className="sub-style">
          <div className="main-text">
            준비물 : <br />
            사진이 부착된 신분증<br />(모바일 신분증도 가능)
          </div>
        </div>
      </div>

      <script src="main.js"></script>
    </body>
</>
  );
}



export default App;
