import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} IWAMAD SIS 2 Blog. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Thesis Project</span>
          <span>SIS 2 / React + TypeScript</span>
        </div>
      </div>
    </footer>
  );
};