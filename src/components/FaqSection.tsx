import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>الأسئلة الأكثر تكراراً</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            كل ما يهمك معرفته عن صيانة وتركيب المكيفات بالطائف
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            إجابات شافية ووافية يقدمها لكم الفني المعتمد لمساعدتكم في الحفاظ على برودة أجهزتكم.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-right p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-right text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center bg-blue-50 border border-blue-100 p-4 rounded-2xl text-xs sm:text-sm text-blue-900">
          لديك سؤال آخر لم تجد إجابته هنا؟ يسعدنا الرد على استفسارك مباشرة عبر الهاتف:{' '}
          <a href="tel:0568663745" className="font-extrabold text-blue-700 underline">
            0568663745
          </a>
        </div>

      </div>
    </section>
  );
};
