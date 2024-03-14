import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const LikeButton: React.FC<{ addToLikedMovies: (movie: string) => void }> = ({ addToLikedMovies }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      addToLikedMovies('Sample Movie');
    }
  };

  return (
    <button onClick={handleLike} className={`like-button ${liked ? 'liked' : ''}`}>
      {liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
    </button>
  );
};

export default LikeButton;
