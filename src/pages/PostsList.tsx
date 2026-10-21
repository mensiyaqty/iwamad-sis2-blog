import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';

export function PostsList() {
  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}