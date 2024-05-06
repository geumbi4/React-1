import React, { useState, useEffect } from 'react';
import './App.css'; 
import myImg from '../src/image/myImg.png'; 
import oneImg from '../src/image/one.png'; 
import twoImg from '../src/image/two.png'; 
import githubImg from '../src/image/icon-github.png'; 

function useTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
}

function App() {
  const timer = useTimer();

  return (
    <div className="mainbox">
      <div>
        <img className="myImg" src={myImg} alt="My Image" />
        <h1>윤금비</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;머무른 시간 : {timer} 초</p>
        <br/><br/><br/><br/>
      </div>

      <section>
        <h2>About</h2>
        <div>
          <span className="first-line">이름</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;윤금비</span><br/>
          <span className="first-line">생년월일</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;2001.4.4</span><br/>
          <span className="first-line">학교/전공</span>
          <span>&nbsp;&nbsp;경성대학교 소프트웨어학과</span>
        </div>
      </section>
      <br/>

      <section>
        <h2>Project</h2>
        <div className="float-wrap mb-5">
          <span className="text">탕후루 소개 사이트</span>
          <div><img className="second-line-img" src={oneImg} alt="One Image" /></div>
        </div>
        <div className="float-wrap">
          <p className="text">숫자 맞추기 게임 사이트</p>
          <img className="second-line-img" src={twoImg} alt="Two Image" />
        </div>
      </section>
      <br/>

      <footer>
        <h2>Contact</h2>
        <a href="https://github.com/geumbi4"><img className="github-img" src={githubImg} alt="깃허브 주소" />github</a>
      </footer>
    </div>
  );
}

export default App;
