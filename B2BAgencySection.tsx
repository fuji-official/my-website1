import React, { useState } from 'react';
import { B2BApplicationData } from '../types';
import { Briefcase, Download, CheckCircle2, Building, MapPin, Phone, Mail, FileText, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface B2BAgencySectionProps {
  onDownloadCatalog: () => void;
}

export const B2BAgencySection: React.FC<B2BAgencySectionProps> = ({ onDownloadCatalog }) => {
  const [formData, setFormData] = useState<B2BApplicationData>({
    fullName: '',
    companyName: '',
    city: '',
    phone: '',
    email: '',
    businessType: 'distributor',
    estimatedVolume: '500-1000 جار در ماه',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.companyName) {
      alert('لطفاً نام، نام مجموعه و شماره تماس را وارد کنید.');
      return;
    }

    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#c084fc', '#f43f5e', '#fbbf24']
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span>همکاری تجاری B2B و اخذ نمایندگی رسمی فوجی</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          توسعه شبکه <span className="text-cyan-400">فروش و نمایندگی B2B</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          پیوستن به شبکه توزیع محصولات فریزدرای فوجی در سراسر ایران و خاورمیانه. دریافت استندهای لوکس نمایشگاهی، کاتالوگ همکاری و شرایط تسویه اعتباری.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Benefits & Catalog Download */}
        <div className="lg:col-span-5 space-y-6 text-right">
          
          <div className="p-6 rounded-3xl glass-ice border border-cyan-500/30 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>مزایای نمایندگی رسمی FUJI</span>
            </h3>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>حاشیه سود جذاب و تخفیف‌های پله‌ای برای سفارشات عمده</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>ارسال استندهای شفاف پلکسی گلاس هیبریدی جهت شلف فروشگاهی</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>ضمانت ماندگاری ۱۸ ماهه بدون نیاز به یخچال و سرمایش</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>حمایت تبلیغاتی استانی و درج نام نمایندگی در وبسایت رسمی</span>
              </li>
            </ul>
          </div>

          {/* Download PDF Catalog Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/80 to-slate-900 border border-purple-500/40 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">دانلود کاتالوگ جامع محصولات B2B</h4>
                <p className="text-[11px] text-purple-300">شامل لیست قیمتها، مشخصات جارها و آنالیز آزمایشگاهی</p>
              </div>
            </div>

            <button
              onClick={onDownloadCatalog}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>دانلود کاتالوگ رسمی (PDF)</span>
            </button>
          </div>

        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 text-right shadow-2xl">
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>
              <h3 className="text-2xl font-black text-white">درخواست شما با موفقیت ثبت شد!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                همکاران ما در واحد توسعه شبکه فروش فوجی ظرف کمتر از ۲۴ ساعت کاری با شما تماس گرفته و پرونده نمایندگی را تکمیل خواهند کرد.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-cyan-300 font-bold text-xs hover:bg-slate-700"
              >
                ثبت درخواست جدید
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">فرم ثبت درخواست همکاری و اخذ نمایندگی</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">نام و نام خانوادگی متقاضی *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثلا: علی محمدی"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">نام مجموعه / شرکت / فروشگاه *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثلا: بازرگانی آریا / فروشگاه ارمغان"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">شهر / استان محل فعالیت *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثلا: شیراز / اصفهان / تهران"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">شماره تماس مستقیم *</label>
                  <input
                    type="tel"
                    required
                    placeholder="۰۹۱۲..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">نوع فعالیت تجاری:</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="distributor">توزیع‌کننده و بنکدار استانی</option>
                    <option value="retail_chain">هایپرمارکت زنجیره‌ای</option>
                    <option value="supermarket">فروشگاه محلی / سوپرمارکت لوکس</option>
                    <option value="online_store">فروشگاه اینترنتی و آنلاین</option>
                    <option value="export">صادرات و بازرگانی بین‌المللی</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">حجم تخمینی سفارش ماهانه:</label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="200-500">۲۰۰ تا ۵۰۰ جار در ماه</option>
                    <option value="500-1000">۵۰۰ تا ۱۰۰۰ جار در ماه</option>
                    <option value="1000-5000">۱۰۰۰ تا ۵۰۰۰ جار در ماه</option>
                    <option value="5000+">بیشتر از ۵۰۰۰ جار (نمایندگی انحصاری)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-bold block">توضیحات و پیام شما (اختیاری):</label>
                <textarea
                  rows={3}
                  placeholder="رزومه مختصر یا سوابق توزیع در شهر خود..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>ارسال درخواست اخذ نمایندگی</span>
              </button>
            </form>
          )}

        </div>

      </div>

    </section>
  );
};
