import React from 'react';
import { PostCard } from '../components/PostCard';

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Web Application Architecture on React and TypeScript',
    summary: 'An overview of core design patterns, component structure, and state management in modern web applications.',
    date: 'October 28, 2026',
    category: 'Architecture'
  },
  {
    id: '2',
    title: 'Vite Build Optimization and Deployment to GitHub Pages',
    summary: 'A practical guide on configuring Vite, bundling, and automating workflows via CI/CD.',
    date: 'October 25, 2026',
    category: 'DevOps'
  },
  {
    id: '3',
    title: 'Security and Authentication in Client-Side SPAs',
    summary: 'Exploring methods for securing client data, working with JWT tokens, and setting up protected routes.',
    date: 'October 20, 2026',
    category: 'Security'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center md:text-left bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-blue-500/20 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30 mb-4">
            Thesis Research
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            IWAMAD SIS 2 Blog
          </h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
            A platform for publishing research materials, technical documentation, and academic articles on web development.
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Latest Publications</h2>
          <span className="text-sm text-slate-500 font-medium">Total: {MOCK_POSTS.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_POSTS.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
};