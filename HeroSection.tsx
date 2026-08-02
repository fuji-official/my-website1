import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, Sparkles, ArrowRight, ShieldCheck, Flame, ChevronLeft } from 'lucide-react';
import { ViewTab } from '../types';
import { heroBanner, MASCOTS } from '../data/fujiData';

interface HeroSectionProps {
  setActiveTab: (tab: ViewTab) => void;
  onOpenSpecs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab, onOpenSpecs }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      
      {/* Background Gradients & Ice Glow Orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329] via-[#0f1b3b] to-[#0b1329] -z-20"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none -z-10"></div>

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (RTL Text & CTAs) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            {/* Top Frost Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10">
              <Snowflake className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>تکنولوژی انجماد و تصعید پریمیوم (-40°C Sublimation)</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white tracking-tight">
              به دنیای <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white font-['Plus_Jakarta_Sans',sans-serif]">FUJI</span> خوش‌آمدید!
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
                تجربه ترُدی بی‌نظیر در دمای منفی ۴۰ درجه
              </span>
            </h1>

            {/* Subtitle Copywriting */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
              بستنی‌های خشک و میوه‌های فریزدرای شده پریمیوم فوجی؛ ترد، ۱۰۰٪ طبیعی، غنی از عصاره واقعیت و بدون نیاز به یخچال! همراه با شخصيت‌ها و ماسکوت‌های دوست‌داشتنی: <strong className="text-cyan-300">Glacio & Moki</strong>, <strong className="text-rose-400">Strawby</strong>, <strong className="text-purple-400">BerryBoo</strong>, <strong className="text-amber-300">Banni</strong> و <strong className="text-orange-400">MangoPoff</strong>.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                ✨ ۰٪ شکر افزودنی
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                ❄️ ۹۸٪ حفظ ویتامین C
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                📦 ۱۸ ماه ماندگاری محیطی
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('catalog')}
                className="group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center gap-3 hover:scale-[1.02]"
              >
                <span>مشاهده ویترین محصولات</span>
                <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
              </button>

              <button
                onClick={() => setActiveTab('technology')}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 font-bold text-sm transition-all flex items-center gap-2 hover:border-cyan-400"
              >
                <Snowflake className="w-4 h-4 text-cyan-400" />
                <span>راز تکنولوژی -40°C</span>
              </button>

              <button
                onClick={onOpenSpecs}
                className="px-4 py-3.5 rounded-2xl bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-500/40 text-xs font-bold transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>دفترچه UI/UX و سیستم طراحی</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <span className="block text-2xl font-black text-cyan-400 font-['Plus_Jakarta_Sans',sans-serif]">
                  -40°C
                </span>
                <span className="text-xs text-slate-400">دمای انجماد تصعیدی</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  100%
                </span>
                <span className="text-xs text-slate-400">ارگانیک و طبیعی</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-rose-400 font-['Plus_Jakarta_Sans',sans-serif]">
                  5/5 ⭐
                </span>
                <span className="text-xs text-slate-400">رضایت مشتریان</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Hero Visual Banner & Floating Snacks) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Main Visual Glass Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden glass-ice-card p-3 border border-cyan-500/30 group">
              <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={heroBanner}
                  alt="FUJI Freeze-Dried Universe Mascots"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-transparent opacity-60"></div>

                {/* Top Badge on Image */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-[11px] font-bold text-cyan-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  FUJI Mascots Universe
                </div>

                {/* Bottom Quote Floating Bar */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700 text-right">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-cyan-300 flex items-center gap-1">
                      ❄️ Glacio & Moki:
                    </span>
                    <span className="text-[11px] text-slate-300 italic">
                      "Stay Cool, Stay Crunchy!"
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Mascot Cards */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 p-3 rounded-2xl glass-ice border border-cyan-400/40 shadow-xl hidden sm:flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-xl">
                  🍓
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-white">استرابی (Strawby)</span>
                  <span className="text-[10px] text-rose-300">توت‌فرنگی کامل فریزدرای</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 p-3 rounded-2xl glass-ice border border-amber-400/40 shadow-xl hidden sm:flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl">
                  🥭
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-white">منگوپاف (MangoPoff)</span>
                  <span className="text-[10px] text-amber-300">استیک انبه طلایی کرانچی</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mascot Carousel Quick Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>خانواده ماسکوت‌های فوجی</span>
            </h3>
            <button
              onClick={() => setActiveTab('mascots')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>مشاهده داستان ماسکوت‌ها</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {MASCOTS.map((mascot) => (
              <div
                key={mascot.id}
                onClick={() => setActiveTab('mascots')}
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/70 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {mascot.avatarIcon}
                  </div>
                  <div className="text-right">
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {mascot.faName}
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-1">{mascot.faRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
