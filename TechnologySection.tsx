import React, { useState } from 'react';
import { TECH_STEPS, TECH_COMPARISON } from '../data/fujiData';
import { Snowflake, Cpu, Zap, ShieldCheck, Thermometer, Check, X, Sparkles } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>علم انجماد و تصعید در خلأ (-40°C Cryo-Sublimation)</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          تکنولوژی پیشرفته <span className="text-cyan-400">Freeze-Dried فوجی</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          چگونه آب موجود در بستنی و میوه بدون تبدیل شدن به مایع، مستقیماً از حالت جامد (یخ) به بخار تبدیل می‌شود؟ راز بافت ترد و ماندگاری ۲ ساله!
        </p>
      </div>

      {/* Temperature Visualizer Banner */}
      <div className="p-8 rounded-3xl glass-ice border border-cyan-500/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-slate-800 text-center space-y-3">
          <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300">
            <Thermometer className="w-10 h-10 animate-pulse" />
          </div>
          <div>
            <span className="text-3xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">-40°C</span>
            <span className="block text-xs text-cyan-300 font-bold">Cryogenic Freeze Chamber</span>
          </div>
          <p className="text-[11px] text-slate-400">انجماد عمیق کریستالی در فاز خلاء</p>
        </div>

        <div className="md:col-span-8 space-y-4 text-right">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>فرآیند ۴ مرحله‌ای تبدیل خوراکی به کریستال‌های کرانچی</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH_STEPS.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-slate-900 border-cyan-400 ring-1 ring-cyan-400/30'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs font-black text-slate-950 bg-cyan-400 px-2 py-0.5 rounded-lg font-['Plus_Jakarta_Sans',sans-serif]">
                    {step.step}
                  </span>
                  <h4 className="text-xs font-bold text-white">{step.title}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Technology Comparison Matrix Table */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">
            مقایسه روش فریزدرای فوجی با سایر روش‌های خشک‌کردن
          </h3>
          <p className="text-xs text-slate-400">
            چرا محصولات FUJI از نظر حفظ تغذیه، بافت و عطر در رتبه اول جهان قرار دارند؟
          </p>
        </div>

        <div className="bg-slate-900/80 rounded-3xl p-4 sm:p-6 border border-slate-800 overflow-x-auto shadow-2xl">
          <table className="w-full text-xs text-right text-slate-300">
            <thead className="bg-slate-950 text-cyan-300 font-bold border-b border-slate-800">
              <tr>
                <th className="p-4 text-sm">ویژگی و فاکتور کیفیت</th>
                <th className="p-4 text-sm font-extrabold text-cyan-400 bg-cyan-950/50 rounded-t-xl">
                  ❄️ فوجی (Freeze-Dried)
                </th>
                <th className="p-4 text-sm">خشک‌کردن آفتابی (Sun-Dried)</th>
                <th className="p-4 text-sm">خشک‌کن حرارتی (Dehydrated)</th>
                <th className="p-4 text-sm">میوه تازه (Fresh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {TECH_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-white">{row.feature}</td>
                  <td className="p-4 font-extrabold text-cyan-300 bg-cyan-950/30">
                    {row.fuji}
                  </td>
                  <td className="p-4 text-slate-400">{row.sunDried}</td>
                  <td className="p-4 text-slate-400">{row.dehydrated}</td>
                  <td className="p-4 text-slate-400">{row.fresh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};
