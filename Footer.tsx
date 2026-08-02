import React from 'react';
import { Snowflake, ShieldCheck, Truck, Sparkles, Heart, Phone, Mail, MapPin, Instagram, Send, Globe } from 'lucide-react';
import { ViewTab } from '../types';
import { MASCOTS } from '../data/fujiData';

interface FooterProps {
  setActiveTab: (tab: ViewTab) => void;
  onOpenSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSpecs }) => {
  return (
    <footer className="relative bg-[#070d1c] border-t border-cyan-900/40 text-slate-300 pt-16 pb-8 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Value Value Props Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">انجماد -۴۰ درجه</h4>
              <p className="text-[11px] text-slate-400">۹۸٪ حفظ ویتامین طبیعی</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">۱۰۰٪ بدون افزودنی</h4>
              <p className="text-[11px] text-slate-400">بدون شکر و نگهدارنده</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">ارسال ایمن و ضدضربه</h4>
              <p className="text-[11px] text-slate-400">در جار وکیوم نیتروژن</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">بستنی بدون یخچال</h4>
              <p className="text-[11px] text-slate-400">ماندگاری ۱۸ ماهه محیطی</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Snowflake className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white font-['Plus_Jakarta_Sans',sans-serif]">
                FUJI <span className="text-cyan-400 text-base font-medium font-['Vazirmatn']">| دنیای فریزدرای</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              برند **فوجی (FUJI)** پیشرو در صنعت تولید محصولات Freeze-Dried پریمیوم، بستنی‌های خشک کرانچی و میوه‌های طبیعی فریزدرای شده با استانداردهای بین‌المللی.
            </p>

            {/* Mascot Mini Avatars */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">ماسکوت‌های محبوب دنیای فوجی:</span>
              <div className="flex items-center gap-2">
                {MASCOTS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveTab('mascots')}
                    title={`${m.faName} - ${m.faRole}`}
                    className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-lg hover:scale-110 hover:border-cyan-400 transition-all shadow-sm"
                  >
                    {m.avatarIcon}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="pt-2">
              <span className="text-xs font-bold text-white block mb-2">عضویت در باشگاه کرانچی فوجی (تخفیف‌های ویژه):</span>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="ایمیل یا شماره همراه..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-cyan-500/20">
                  عضویت
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-cyan-400 transition-colors">صفحه اصلی</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-cyan-400 transition-colors">کاتالوگ محصولات</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('mascots')} className="hover:text-cyan-400 transition-colors">دنیای ماسکوت‌ها</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('technology')} className="hover:text-cyan-400 transition-colors">فرآیند انجماد و تصعید (-40°C)</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('b2b')} className="hover:text-cyan-400 transition-colors">فرم اخذ نمایندگی B2B</button>
              </li>
              <li>
                <button onClick={onOpenSpecs} className="text-purple-400 hover:text-purple-300 font-bold transition-colors">سند معماری UI/UX (مخصوص طراحان)</button>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">دسته‌بندی‌ها</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-cyan-400 transition-colors">بستنی خشک میکس</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-cyan-400 transition-colors">توت‌فرنگی و تمشک فریزدرای</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-cyan-400 transition-colors">استیک انبه طلایی</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-cyan-400 transition-colors">قطره‌های ماست پروبیوتیک</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-cyan-400 transition-colors">پودر میوه‌های ارگانیک</button>
              </li>
            </ul>
          </div>

          {/* Contact & Certs Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">ارتباط با ما و گواهی‌ها</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>۰۲۱-۸۸۹۹۰۰۱۱ (پشتیبانی فروش)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@fujifreeze.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>تهران، پارک فناوری، کارخانه فریزدرای فوجی</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© ۲۰۲۶ تمامی حقوق مادی و معنوی متعلق به برند FUJI (Freeze-Dried Universe) می‌باشد.</p>
          <div className="flex items-center gap-4">
            <span>طراحی شده بر اساس سبک Ice-Frost Glassmorphism</span>
            <span>•</span>
            <button onClick={onOpenSpecs} className="text-cyan-400 underline hover:text-cyan-300">
              مشاهده دفترچه راهنمای سیستم برند
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
