import React from 'react';
import BlogPost from './BlogPost';

const App = () => {
  return (
    <div>
      <h1>금비의 맛집 탐방</h1>
      <BlogPost title="남포동 이재모 피자" />
      <BlogPost title="남포동 백화양곱창" />
      <BlogPost title="영도해녀촌" />
    </div>
  );
};

export default App;
