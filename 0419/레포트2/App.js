import React from 'react';
import BlogPost from './BlogPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>윤금비의 블로그</h1>
      <BlogPost
        title="맛집 탐방"
        content="남포동의 이재모 피자"
        author="윤금비"
      />
    </div>
  )
}

export default App;
