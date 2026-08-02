import React, { useState } from 'react';
import { X, FileText, Layers, Palette, Type, Sparkles, Copy, Check, Grid, Cpu } from 'lucide-react';
import { DESIGN_TOKENS, MASCOTS } from '../data/fujiData';

interface SpecDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecDocModal: React.FC<SpecDocModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeSubTab, setActiveSubTab] = useState<'architecture' | 'tokens' | 'copywriting' | 'mascots'>('architecture');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Container */}
      <div className="relative w-full max-w-5xl bg-[#091124] border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden text-right my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/50 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">سند جامع UI/UX، معماری صفحات و سیستم طراحی FUJI</h3>
              <p className="text-[11px] text-purple-300">FUJI Freeze-Dried Universe • Design Tokens & Architecture Specification</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950 px-6 py-2 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'architecture'
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span>۱. معماری صفحات و وایرفریم (IA)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('tokens')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'tokens'
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4 text-purple-400" />
            <span>۲. سیستم طراحی (Design Tokens)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('copywriting')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'copywriting'
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Type className="w-4 h-4 text-purple-400" />
            <span>۳. کپی‌رایتیگ خلاقانه فارسی</span>
          </button>

          <button
            onClick={() => setActiveSubTab('mascots')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'mascots'
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>۴. سیستم ماسکوت‌ها و هویت برند</span>
          </button>
        </div>

        {/* Content Scroll View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-xs text-slate-300 leading-relaxed">
          
          {/* Section 1: Architecture & Wireframes */}
          {activeSubTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30">
                <h4 className="text-sm font-extrabold text-white mb-2 flex items-center gap-2">
                  <Grid className="w-4 h-4 text-cyan-400" />
                  <span>معماری اطلاعات و نقشه ساختار صفحات (Information Architecture)</span>
                </h4>
                <p className="text-slate-400">
                  وبسایت FUJI بر اساس معماری مدرن تک‌صفحه‌ای (SPA) با قابلیت سوئیچ بین بخش‌ها، دراور سبد خرید کشویی و مدال‌های اختصاصی PDP و سیستم طراحی ایجاد شده است.
                </p>
              </div>

              {/* Page Structure Tree */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-cyan-300">۱. صفحه اصلی (Home):</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li><strong>Hero Section:</strong> ۳D Mascots Banner + افکت‌های Ice-Frost + نوار آمار انجماد</li>
                    <li><strong>Mascot Carousel:</strong> اسلایدر تعاملی ماسکوت‌ها همراه با صدای شعار</li>
                    <li><strong>Bestsellers Showcase:</strong> ویترین جار بستنی خشک و توت‌فرنگی‌های کرانچی</li>
                    <li><strong>Sublimation Tech Step:</strong> فرآیند ۴ مرحله‌ای انجماد در -40°C</li>
                    <li><strong>Trust Badges:</strong> گواهی‌های ۱۰۰٪ ارگانیک و ماندگاری بدون یخچال</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-cyan-300">۲. کاتالوگ محصولات (Catalog):</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>فیلتر هوشمند بر اساس دسته‌بندی (بستنی خشک، میوه، تنقلات، پودر)</li>
                    <li>فیلتر بر اساس ماسکوت مربوطه (Glacio, Strawby, BerryBoo, etc.)</li>
                    <li>فیلتر بر اساس شاخص ترُدی (Crunchiness 1 to 5)</li>
                    <li>انتخاب آنی وزن جار (50g, 100g, 150g, 250g) با محاسبه قیمت</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-cyan-300">۳. صفحه اختصاصی محصول (PDP Modal):</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>گالری تصاویر با وکیوم شفاف جار محصولات</li>
                    <li>باکس معرفی ماسکوت همراه و شعار یخی</li>
                    <li>جدول کامل ارزش غذایی (کالری، فیبر، پروتئین، ویتامین C)</li>
                    <li>تکنولوژی انجماد و ترکیبات تشکیل‌دهنده</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-cyan-300">۴. بخش تجاری B2B و مجله:</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>فرم اخذ نمایندگی با فیلدهای تخصصی شهر، نوع فروشگاه و حجم سفارش</li>
                    <li>قابلیت دانلود کاتالوگ رسمی B2B به صورت PDF</li>
                    <li>مجله علمی درباره فریزدرای و راهنمای تغذیه کودکان</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Design Tokens */}
          {activeSubTab === 'tokens' && (
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white mb-2">پلت رنگی و توکن‌های Tailwind CSS</h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                <div
                  onClick={() => copyToClipboard('#0b1329', 'Primary Dark Slate')}
                  className="p-3 rounded-2xl bg-[#0b1329] border border-cyan-500/40 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="h-10 rounded-xl bg-[#0b1329] mb-2 border border-slate-700"></div>
                  <span className="font-bold text-white block">Primary Dark Slate</span>
                  <span className="text-[10px] text-cyan-300 font-mono">#0b1329</span>
                </div>

                <div
                  onClick={() => copyToClipboard('#38bdf8', 'Ice Cyan')}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="h-10 rounded-xl bg-[#38bdf8] mb-2"></div>
                  <span className="font-bold text-white block">Ice Cyan</span>
                  <span className="text-[10px] text-cyan-400 font-mono">#38bdf8</span>
                </div>

                <div
                  onClick={() => copyToClipboard('#c084fc', 'Neon Purple')}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="h-10 rounded-xl bg-[#c084fc] mb-2"></div>
                  <span className="font-bold text-white block">Neon Purple</span>
                  <span className="text-[10px] text-purple-300 font-mono">#c084fc</span>
                </div>

                <div
                  onClick={() => copyToClipboard('#f43f5e', 'Strawberry Red')}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="h-10 rounded-xl bg-[#f43f5e] mb-2"></div>
                  <span className="font-bold text-white block">Strawberry Red</span>
                  <span className="text-[10px] text-rose-300 font-mono">#f43f5e</span>
                </div>

                <div
                  onClick={() => copyToClipboard('#fbbf24', 'Mango Amber')}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="h-10 rounded-xl bg-[#fbbf24] mb-2"></div>
                  <span className="font-bold text-white block">Mango Amber</span>
                  <span className="text-[10px] text-amber-300 font-mono">#fbbf24</span>
                </div>
              </div>

              {copiedToken && (
                <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-center font-bold">
                  کد رنگ {copiedToken} کپی شد!
                </div>
              )}

              {/* Typography Specs */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h5 className="font-bold text-white">تایپوگرافی و فونت‌های استاندارد:</h5>
                <p>فونت اصلی فارسی: <strong>Vazirmatn (وزیرمتن)</strong> با اوزان ۳۰۰ تا ۹۰۰</p>
                <p>فونت اعداد و برند انگلیسی: <strong>Plus Jakarta Sans</strong> برای برچسب‌های مدرن</p>
                <p>افکت شیشه‌ای (Glassmorphism): <strong>16px backdrop-blur</strong> با خطوط مرزی 1px cyan-white</p>
              </div>
            </div>
          )}

          {/* Section 3: Copywriting */}
          {activeSubTab === 'copywriting' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">متن‌های پیشنهادی خلاقانه و شعارهای برند فوجی</h4>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">شعار اصلی برند (Tagline):</span>
                  <p className="text-sm font-extrabold text-white">
                    "FUJI Freeze-Dried Universe | دنیای ترُد، سالم و هیجان‌انگیز بدون نیاز به یخچال!"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-rose-400 font-bold block mb-1">کپی مربوط به بستنی خشک:</span>
                  <p className="text-sm font-extrabold text-white">
                    "تجربه اولیه کرانچی فوق‌العاده که بلافاصله روی زبان شما مثل برف آب می‌شود!"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-1">کپی مربوط به میوه‌های فریزدرای:</span>
                  <p className="text-sm font-extrabold text-white">
                    "۱۰۰٪ میوه ارگانیک با حفظ ۹۸٪ ویتامین C و صفر گرم شکر افزوده یا ماده نگهدارنده!"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Mascots */}
          {activeSubTab === 'mascots' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MASCOTS.map((m) => (
                <div key={m.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{m.avatarIcon}</span>
                    <div>
                      <h5 className="font-bold text-white text-sm">{m.faName} ({m.name})</h5>
                      <span className="text-[10px] text-cyan-400">{m.faTitle}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300"><strong>شخصیت:</strong> {m.faPersonality}</p>
                  <p className="text-[11px] text-cyan-300"><strong>قدرت یخی:</strong> {m.faIcePower}</p>
                  <p className="text-[11px] italic text-slate-400">"{m.faVoiceQuote}"</p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
