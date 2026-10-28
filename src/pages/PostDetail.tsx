import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8">
        ← Back to publications list
      </Link>

      <article className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Publication #{id}
          </span>
          <time className="text-xs text-slate-400">October 28, 2026</time>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
          Detailed Analysis of Thesis Module #{id}
        </h1>

        <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
          <p>
            This section contains the full text of the investigated material. As part of the <strong>IWAMAD SIS 2</strong> project, special attention was paid to the performance and responsiveness of the user interface.
          </p>
          <p>
            Using React combined with TypeScript typing minimizes development errors, while the Vite bundler provides instant Hot Module Replacement (HMR).
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Key Solution Features:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Modular component architecture.</li>
            <li>Responsive layout with Tailwind CSS.</li>
            <li>Optimized build for GitHub Pages.</li>
          </ul>
        </div>
      </article>
    </div>
  );
};