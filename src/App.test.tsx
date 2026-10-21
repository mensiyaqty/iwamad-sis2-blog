import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { PostsList } from './pages/PostsList';
import { PostDetail } from './pages/PostDetail';
import { SignIn } from './pages/SignIn';
import { posts } from './data/posts';

describe('Blog Application Tests', () => {
  it('renders one card per post in the array', () => {
    render(
      <MemoryRouter>
        <PostsList />
      </MemoryRouter>
    );
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(posts.length);
  });

  it('increments like count when like button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/posts/1']}>
        <PostDetail />
      </MemoryRouter>
    );

    const likeButton = screen.getByRole('button', { name: /like/i });
    expect(likeButton).toHaveTextContent('Like (0)');

    await user.click(likeButton);
    expect(likeButton).toHaveTextContent('Like (1)');
  });

  it('shows sign-in view when signed out', () => {
    render(
      <MemoryRouter>
        <SignIn onSignIn={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/sign in required/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
});