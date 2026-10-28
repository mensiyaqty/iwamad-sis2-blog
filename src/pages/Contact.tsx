import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Contact & Information</h1>
        <p className="text-slate-500 text-sm">Author details and thesis project information</p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">
            IS
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">IWAMAD SIS 2</h3>
            <p className="text-sm text-slate-500">Thesis Project / SPA Application</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-semibold text-slate-400 block mb-1">Repository</span>
            <a 
              href="https://github.com/mensiyaaqty/iwamad-sis2-blog" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              GitHub / iwamad-sis2-blog
            </a>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-semibold text-slate-400 block mb-1">Technologies</span>
            <span className="font-semibold text-slate-800">React, TypeScript, Vite, Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};