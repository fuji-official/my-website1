import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/fujiData';
import { BlogArticle } from '../types';
import { BookOpen, Clock, Calendar, User, ArrowLeft, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>مجله و دانش فریزدرای فوجی</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          مقالات علمی و <span className="text-cyan-400">سبک زندگی کرانچی</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          جدیدترین پژوهش‌های صنایع غذایی، راهنمای تغذیه کودکان و ایده‌های جذاب سرو بستنی خشک در مهمانی‌ها.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group rounded-3xl glass-ice-card border border-slate-800 hover:border-cyan-500/40 p-4 transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-900">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-[10px] font-bold text-cyan-300">
                  {article.category}
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {article.date}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-3 mt-2 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>ادامه مطلب علمی</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0d162e] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 text-right max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 left-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 inline-block">
              {selectedArticle.category}
            </span>

            <h2 className="text-xl sm:text-2xl font-black text-white">{selectedArticle.title}</h2>

            <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
              <span>نویسنده: {selectedArticle.author}</span>
              <span>•</span>
              <span>زمان مطالعه: {selectedArticle.readTime}</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedArticle.content.map((p, i) => (
                <p key={i} className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
