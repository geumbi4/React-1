import React, { useState } from 'react';

const BlogPost = ({ title }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>좋아요 : {likes}</p>
      <button onClick={handleLike}>👍</button>
    </div>
  );
};

export default BlogPost;
