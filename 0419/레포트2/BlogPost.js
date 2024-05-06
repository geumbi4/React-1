import React from 'react';

function BlogPost(props) {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>작성자: {props.author}</p>
    </div>
  );
}

export default BlogPost;
