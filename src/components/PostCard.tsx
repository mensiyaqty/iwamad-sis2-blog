import React from 'react';
import { Link } from 'react-router-dom';

interface PostCardProps {
  id: string | number;
  title: string;
  summary: string;
  date: string;
  category?: string;
}

export const PostCard: React.FC<PostCardProps> = ({ id, title, summary, date, category }) => {
  return (
    <article className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category || 'SIS 2 Thesis'}
          </span>
          <time className="text-xs text-slate-400">{date}</time>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {summary}
        </p>
      </div>
      <Link 
        to={`/posts/${id}`}
        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-2"
      >
        Read more →
      </Link>
    </article>
  );
};