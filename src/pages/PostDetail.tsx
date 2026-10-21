import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { posts } from '../data/posts';

export function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post = posts.find((p) => p.id === postId);

  const [likes, setLikes] = useState(0);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>Sorry, the post with ID {id} does not exist.</p>
        <Link to="/posts">Back to Posts</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
        <Link to="/posts">Back to Posts</Link>
      </div>
    </div>
  );
}