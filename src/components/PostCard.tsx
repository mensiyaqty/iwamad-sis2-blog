import { Link } from 'react-router-dom';
import type { Post } from '../data/posts';

export function PostCard({ post }: { post: Post }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <Link to={`/posts/${post.id}`}>Read More</Link>
    </div>
  );
}