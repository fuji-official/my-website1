import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Snowflake } from 'lucide-react';
import { PRODUCTS, MASCOTS } from '../data/fujiData';
import { ViewTab } from '../types';

interface MascotChatbotProps {
  setActiveTab: (tab: ViewTab) => void;
}

export const MascotChatbot: React.FC<MascotChatbotProps> = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: 'user' | 'glacio'; text: string; actionTab?: ViewTab }[]
  >([
    {
      sender: 'glacio',
      text: 'سلام! من گلاسیو (Glacio) هستم، نگهبان انجماد ۴۰- درجه فوجی! ❄️ دنبال چه طعم یا تنقلاتی می‌گردی تا راهنماییت کنم؟'
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleAsk = (userQuestion: string) => {
    let botReply = '';
    let tabAction: ViewTab | undefined = undefined;

    const q = userQuestion.toLowerCase();

    if (q.includes('کودک') || q.includes('بچه')) {
      botReply = 'برای فرشته‌های کوچولو، "بستنی خشک میکس فوجی" و "قطره‌های ماست میوه‌ای پروبیوتیک" بهترین گزینه‌ست! چون فوق‌العاده ترد و ذوب‌شونده‌ست و شکر افزوده نداره. 🍓🍨';
      tabAction = 'catalog';
    } else if (q.includes('یخچال') || q.includes('خراب') || q.includes('نگهداری')) {
      botReply = 'اصلاً نیازی به یخچال نداره! ❄️ راز فوجی در فرآیند تصعید خلأ نهفته‌ست. تمام رطوبت خارج شده و در جار وکیوم نیتروژن تا ۱۸ ماه در دمای اتاق تازه می‌مونه.';
      tabAction = 'technology';
    } else if (q.includes('نمایندگی') || q.includes('عمده') || q.includes('فروشگاه')) {
      botReply = 'عالیه! ما برای بنکداران، هایپرمارکت‌ها و فروشگاه‌های آنلاین استندهای شیک و تخفیف‌های پله‌ای داریم. فرم B2B رو پر کن تا همکارانم تماس بگیرن! 💼';
      tabAction = 'b2b';
    } else if (q.includes('تخفیف') || q.includes('کد')) {
      botReply = 'کد تخفیف ویژه ۱۵ درصدی شما در سبد خرید: FUJI2026 🎉 همین الان در سبد خرید وارد کن!';
    } else {
      botReply = 'ممنون از پیامت! پیشنهاد می‌کنم ویترین محصولات ما شامل توت‌فرنگی کامل، استیک انبه طلایی و بستنی خشک میکس را امتحان کنی! ❄️✨';
      tabAction = 'catalog';
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userQuestion },
      { sender: 'glacio', text: botReply, actionTab: tabAction }
    ]);

    setInputMsg('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/40 hover:scale-110 transition-all flex items-center gap-2 border-2 border-cyan-300 animate-bounce"
        >
          <span className="text-2xl">❄️</span>
          <span className="hidden sm:inline text-xs font-black pl-1">مشاور طعم Glacio</span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 animate-ping"></span>
        </button>
      )}

      {/* Chat Box Panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-[#0d162e] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[480px] text-right animate-in slide-in-from-bottom duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-2xl">
                ❄️
              </div>
              <div>
                <h4 className="text-xs font-black text-white">گلاسیو (Glacio) - مشاور هوشمند طعم</h4>
                <span className="text-[10px] text-cyan-300 block">پاسخگوی آنلاین • FUJI Assistant</span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-start' : 'items-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-cyan-500 text-slate-950 font-bold rounded-tl-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tr-none'
                  }`}
                >
                  {m.text}
                </div>

                {m.actionTab && (
                  <button
                    onClick={() => {
                      setActiveTab(m.actionTab!);
                      setIsOpen(false);
                    }}
                    className="mt-1 text-[11px] text-cyan-400 font-bold underline hover:text-cyan-300"
                  >
                    مشاهده بخش مربوطه →
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-slate-950 border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[10px]">
            <button
              onClick={() => handleAsk('مناسب برای کودکان؟')}
              className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 whitespace-nowrap"
            >
              👶 کودکان
            </button>
            <button
              onClick={() => handleAsk('بدون نیاز به یخچال؟')}
              className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 whitespace-nowrap"
            >
              ❄️ شرایط نگهداری
            </button>
            <button
              onClick={() => handleAsk('شرایط اخذ نمایندگی؟')}
              className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 whitespace-nowrap"
            >
              💼 نمایندگی B2B
            </button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              placeholder="سوال شما از گلاسیو..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && inputMsg && handleAsk(inputMsg)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={() => inputMsg && handleAsk(inputMsg)}
              className="p-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold"
            >
              <Send className="w-4 h-4 rotate-180" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
