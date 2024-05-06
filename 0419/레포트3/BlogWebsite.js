import React, { useState } from 'react';
import './App.css';

// 블로그 포스트 컴포넌트
function BlogPost(props) {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>작성자: {props.author}</p>
    </div>
  );
}

// 블로그 웹사이트 컴포넌트
function BlogWebsite() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '맛집 탐방',
      content: '남포동의 이재모 피자',
      author: '위치 : 부산 중구 남포동'
    },
    {
      id: 2,
      title: '책 추천',
      content: '당신 인생의 이야기 (영화 컨택트)',
      author: '작가 : 테드 창'
    }
  ]);

  return (
    <div className="blog-website">
      <h1>윤금비의 블로그</h1>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
}

export default BlogWebsite;
