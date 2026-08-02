import React, { useState } from 'react';
import { MASCOTS, PRODUCTS } from '../data/fujiData';
import { Mascot, Product } from '../types';
import { Sparkles, Snowflake, Volume2, ShieldCheck, Heart, ArrowLeft, Star } from 'lucide-react';

interface MascotShowcaseProps {
  onSelectProduct: (product: Product) => void;
}

export const MascotShowcase: React.FC<MascotShowcaseProps> = ({ onSelectProduct }) => {
  const [selectedMascot, setSelectedMascot] = useState<Mascot>(MASCOTS[0]);
  const [playingVoice, setPlayingVoice] = useState<boolean>(false);

  const matchingProducts = PRODUCTS.filter((p) => p.mascotId === selectedMascot.id);

  const handlePlayVoice = () => {
    setPlayingVoice(true);
    setTimeout(() => {
      setPlayingVoice(false);
    }, 2500);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>شخصیت‌های انحصاری FUJI Universe</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          دنیای <span className="text-cyan-400">ماسکوت‌های فوجی</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          با قهرمانان یخی فوجی آشنا شوید! هر ماسکوت نماینده یک طعم، قدرت انجماد و حس ترُدی بی‌نظیر در جهان فریزدرای است.
        </p>
      </div>

      {/* Mascot Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {MASCOTS.map((m) => {
          const isSelected = selectedMascot.id === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedMascot(m)}
              className={`p-4 rounded-3xl border text-right transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-400/20 shadow-xl shadow-cyan-500/10 scale-105'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-2 rounded-2xl bg-slate-950 border border-slate-800">
                  {m.avatarIcon}
                </span>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                )}
              </div>
              <div>
                <h3 className="text-sm font-black text-white">{m.faName}</h3>
                <p className="text-[10px] text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">{m.name}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Mascot Hero Card */}
      <div className={`p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${selectedMascot.bgGradient} border border-cyan-500/30 shadow-2xl space-y-8 relative overflow-hidden`}>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Mascot Profile Details */}
          <div className="lg:col-span-7 space-y-5 text-right">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedMascot.badgeColor}`}>
                {selectedMascot.faRole}
              </span>
              <span className="text-xs text-slate-300 font-bold bg-slate-900/60 px-3 py-1 rounded-full border border-slate-700">
                ❄️ قدرت یخی: {selectedMascot.faIcePower}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {selectedMascot.faName} <span className="text-lg font-normal text-slate-300">({selectedMascot.faTitle})</span>
            </h2>

            <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm text-slate-200">
              <p>
                <strong className="text-cyan-300">شخصیت و رفتار:</strong> {selectedMascot.faPersonality}
              </p>
              <p>
                <strong className="text-amber-300">خوراکی مورد علاقه:</strong> {selectedMascot.faFavoriteSnack}
              </p>
            </div>

            {/* Voice Quote Simulator */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handlePlayVoice}
                className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-cyan-400/40 text-cyan-300 font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
              >
                <Volume2 className={`w-4 h-4 ${playingVoice ? 'text-cyan-400 animate-bounce' : 'text-slate-400'}`} />
                <span>{playingVoice ? 'در حال پخش صدای ماسکوت...' : 'شنیدن شعار اختصاصی'}</span>
              </button>

              <div className="text-xs italic text-slate-300 bg-slate-900/50 px-4 py-2.5 rounded-2xl border border-slate-800">
                "{selectedMascot.faVoiceQuote}"
              </div>
            </div>

          </div>

          {/* Right Column: Mascot Visual Avatar Banner */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square rounded-3xl glass-ice p-6 flex flex-col items-center justify-center text-center space-y-4 border border-cyan-400/30 group">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-6xl shadow-2xl group-hover:scale-110 transition-transform">
                {selectedMascot.avatarIcon}
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{selectedMascot.faName}</h3>
                <p className="text-xs text-cyan-300 font-semibold">{selectedMascot.title}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                محافظ رسمی فریزدرای فوجی
              </span>
            </div>
          </div>

        </div>

        {/* Recommended Products by this Mascot */}
        {matchingProducts.length > 0 && (
          <div className="pt-8 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-cyan-300 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>محصولات پیشنهادی {selectedMascot.faName}:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchingProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/40 transition-all cursor-pointer flex items-center gap-3.5 group"
                >
                  <img
                    src={p.image}
                    alt={p.faName}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
                  />
                  <div className="text-right flex-1">
                    <h5 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">{p.faName}</h5>
                    <span className="text-[11px] text-cyan-400 font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
                      {p.price.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
