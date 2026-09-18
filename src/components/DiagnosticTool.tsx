import React, { useState } from 'react';
import { DIAGNOSTIC_ISSUES } from '../data/diagnosticsData';
import { DiagnosticIssue } from '../types';
import { 
  Stethoscope, 
  AlertTriangle, 
  PhoneCall, 
  CheckCircle2, 
  HelpCircle,
  Wrench,
  ArrowLeft
} from 'lucide-react';

interface DiagnosticToolProps {
  onSelectServiceBooking: (serviceId: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({
  onSelectServiceBooking
}) => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>(DIAGNOSTIC_ISSUES[0].id);

  const currentIssue = DIAGNOSTIC_ISSUES.find(i => i.id === selectedIssueId) || DIAGNOSTIC_ISSUES[0];

  return (
    <section className="py-14 lg:py-20 bg-slate-900 text-white relative overflow-hidden" id="diagnostic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full border border-blue-400/30 mb-3">
            <Stethoscope className="w-4 h-4 text-cyan-400" />
            <span>مساعد تشخيص أعطال المكيف السريع بالطائف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">
            اختر مشكلة مكيفك وتعرف على السبب والحل الفوري
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            وفّر وقتك واكتشف العطل المحتمل قبل زيارة الفني، مع إرشادات عاجلة لحماية أجهزة التكييف من الاحتراق أو تلف الدوائر.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Issue Selector Tabs (Left / 5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 text-right">
              الأعراض والمشاكل الشائعة:
            </label>
            {DIAGNOSTIC_ISSUES.map((issue) => {
              const isActive = issue.id === selectedIssueId;
              return (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssueId(issue.id)}
                  className={`w-full text-right p-3.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 translate-x-[-4px]' 
                      : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base">{isActive ? '🔍' : '⚙️'}</span>
                    <span>{issue.symptom}</span>
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-md shrink-0 ${
                    issue.severity === 'عاجل' 
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {issue.severity}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Diagnostic Result Card (Right / 7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/95 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-5">
              <div>
                <span className="text-xs text-blue-400 font-bold block mb-1">النتيجة والتشخيص الهندسي</span>
                <h3 className="text-base sm:text-lg font-black text-white">
                  {currentIssue.symptom}
                </h3>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                currentIssue.severity === 'عاجل'
                  ? 'bg-red-600 text-white'
                  : 'bg-amber-600 text-white'
              }`}>
                الحالة: {currentIssue.severity}
              </span>
            </div>

            {/* Possible Causes */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-300 mb-2.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>الأسباب الفنية المحتملة للعطل:</span>
              </h4>
              <ul className="space-y-2 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50">
                {currentIssue.possibleCauses.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Advice */}
            <div className="mb-6 bg-amber-950/40 border border-amber-500/30 p-4 rounded-2xl text-xs sm:text-sm text-amber-200 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5 text-amber-300">نصيحة الفني قبل الزيارة:</span>
                <span>{currentIssue.advice}</span>
              </div>
            </div>

            {/* Actions for this Issue */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="tel:0568663745"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>طلب فحص الفني هاتفياً: 0568663745</span>
              </a>

              <a
                href={`https://wa.me/966568663745?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2C%20%D9%84%D8%AF%D9%8A%20%D9%85%D8%B4%D9%83%D9%84%D8%A9%20%D9%81%D9%8A%20%D9%85%D9%83%D9%8A%D9%81%20%D8%A7%D9%84%D8%B3%D8%A8%D9%84%D9%8A%D8%AA%3A%20${encodeURIComponent(currentIssue.symptom)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-5 rounded-xl font-bold text-sm transition-all cursor-pointer"
              >
                <span>واتساب فوري</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
