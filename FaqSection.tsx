import React, { useState } from 'react';
import { FAQS } from '../data/fujiData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span>پاسخ به ابهامات و سوالات متداول شما</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          سوالات متداول <span className="text-cyan-400">دنیای فریزدرای فوجی</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          پاسخ به سوالات درباره تکنولوژی -40°C، بستنی بدون یخچال، فاقد شکر و شرایط نمایندگی.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeCategory === 'all'
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-900 text-slate-300 border border-slate-800'
          }`}
        >
          همه سوالات
        </button>
        <button
          onClick={() => setActiveCategory('tech')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeCategory === 'tech'
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-900 text-slate-300 border border-slate-800'
          }`}
        >
          تکنولوژی انجماد
        </button>
        <button
          onClick={() => setActiveCategory('product')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeCategory === 'product'
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-900 text-slate-300 border border-slate-800'
          }`}
        >
          محصولات و سلامت
        </button>
        <button
          onClick={() => setActiveCategory('b2b')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeCategory === 'b2b'
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-900 text-slate-300 border border-slate-800'
          }`}
        >
          نمایندگی B2B
        </button>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-5 flex items-center justify-between text-right gap-4 focus:outline-none"
              >
                <span className="text-sm font-bold text-white leading-snug">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-slate-950/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
