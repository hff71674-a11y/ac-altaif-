import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Droplets, 
  Flame, 
  Volume2, 
  Wind, 
  PowerOff, 
  HelpCircle,
  Clock,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

interface DiagnosticDedicatedPageProps {
  onBackToHome: () => void;
  onRequestBooking: (serviceTitle: string) => void;
}

interface IssueDiagnosis {
  id: string;
  title: string;
  symptom: string;
  icon: any;
  causes: string[];
  recommendedService: string;
  serviceId: string;
  urgency: string;
  color: string;
}

const ISSUES: IssueDiagnosis[] = [
  {
    id: 'water-leak',
    title: 'المكيف ينقط ماء داخل الغرفة',
    symptom: 'تساقط قطرات ماء من الوحدة الداخلية على الجدران أو الأثاث أثناء تشغيل المكيف.',
    icon: Droplets,
    causes: [
      'انسداد خرطوم تصريف المياه بالأتربة والرواسب',
      'امتلاء حوض التكثيف وعدم انسياب الماء',
      'خلل في وزنية وميلان الوحدة الداخلية أثناء التركيب',
      'تراكم الثلج على المبخر بسبب نقص الفريون وذوبانه'
    ],
    recommendedService: 'معالجة تسريب الماء والأصوات المزعجة والاهتزاز',
    serviceId: 'split-ac-water-leak',
    urgency: 'عاجل (قد يسبب تلف الجدران والدهان)',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'weak-cooling',
    title: 'المكيف يخرج هواء حار أو تبريد ضعيف',
    symptom: 'تشغيل المكيف ولكن الغرفة لا تبرد بالشكل المطلوب أو الهواء الخارج حار.',
    icon: Flame,
    causes: [
      'نقص غاز الفريون بسبب تهريب في مواسير النحاس أو البلف',
      'انسداد فلاتر الهواء بالأتربة الكثيفة',
      'اتساخ رديتر الوحدة الخارجية وعدم قدرتها على التبادل الحراري',
      'عطل في كابستور أو كمبروسر المكيف'
    ],
    recommendedService: 'تعبئة الفريون وقياس ضغط الغاز',
    serviceId: 'split-ac-freon',
    urgency: 'متوسط (يستهلك طاقة كهربائية عالية دون تبريد)',
    color: 'from-amber-500 to-red-500'
  },
  {
    id: 'foul-smell',
    title: 'رائحة كريهة أو عفن تخرج مع الهواء',
    symptom: 'انبعاث رائحة رطوبة أو غبار أو عفن مزعجة فور تشغيل المكيف في الغرفة.',
    icon: Wind,
    causes: [
      'تراكم الفطريات والبكتيريا على زعانف المبخر ومروحة البلاور',
      'ركود مياه غير مصرفه داخل حوض المكيف الداخلي',
      'عدم غسيل المكيف لفترة تتجاوز 6 أشهر'
    ],
    recommendedService: 'تنظيف وغسيل المكيفات السبلت بأحدث الأجهزة وبدون فوضى',
    serviceId: 'split-ac-cleaning',
    urgency: 'صحي (يؤثر على مرضى الحساسية والجيوب الأنفية)',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'loud-noise',
    title: 'أصوات طقطقة أو صفير أو اهتزاز مزعج',
    symptom: 'صدور صوت طنين قوي أو احتكاك ريش المروحة عند دوران المكيف.',
    icon: Volume2,
    causes: [
      'خلل في توازن ريشة مروحة البلاور أو تراكم أوساخ ثقيلة عليها',
      'تلف رولمان بلي محرك المروحة الداخلية أو الخارجية',
      'ارتخاء مسامير التثبيت وقواعد المكيف الخارجية'
    ],
    recommendedService: 'معالجة تسريب الماء والأصوات المزعجة والاهتزاز',
    serviceId: 'split-ac-water-leak',
    urgency: 'متوسط (يجب الفحص لمنع كسر المروحة)',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'sudden-cutoff',
    title: 'المكيف يفصل فجأة بعد دقائق من تشغيله',
    symptom: 'يعمل المكيف لمدة 5 إلى 10 دقائق ثم يتوقف الكمبروسر عن العمل ويخرج هواء مروحة فقط.',
    icon: PowerOff,
    causes: [
      'ارتفاع حرارة الكمبروسر (Overload) بسبب اتساخ الراديتر الخارجي',
      'ضعف كابستور الإقلاع الكهربائي وحاجته للاستبدال',
      'خلل في حساس درجة الحرارة (الثيرموستات) أو كارت التحكم'
    ],
    recommendedService: 'صيانة الكمبروسر واللوحات والفلاتر',
    serviceId: 'split-ac-compressor',
    urgency: 'عالي (حماية الكمبروسر من الاحتراق)',
    color: 'from-rose-500 to-red-600'
  }
];

export const DiagnosticDedicatedPage: React.FC<DiagnosticDedicatedPageProps> = ({
  onBackToHome,
  onRequestBooking
}) => {
  const [selectedIssue, setSelectedIssue] = useState<IssueDiagnosis>(ISSUES[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'فحص وتشخيص أعطال مكيفات سبليت بالطائف | فني معتمد 0568663745';
  }, []);

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12" id="diagnostic-dedicated-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
          >
            الرئيسية
          </button>
          <span>/</span>
          <span className="text-blue-700 font-bold">فحص وتشخيص أعطال مكيفات السبلت</span>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-blue-600" />
            <span>العودة للرئيسية</span>
          </button>

          <a
            href="tel:0568663745"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-md transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اتصل الآن: 0568663745</span>
          </a>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 mb-10 text-right space-y-4">
          <span className="inline-block bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full">
            أداة التشخيص الذكي لمكيفات السبليت بالطائف
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            ما المشكلة التي تواجهها مع مكيفك؟
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            حدد العرض أو العطل الذي تلاحظه في مكيفك لتحصل على التشخيص الهندسي الفوري، الأسباب المحتملة، والخدمة الموصى بها مع إمكانية حجز الفني المعتمد ليصلك في نفس اليوم.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>نجيك لحد بابك في نفس اليوم بجميع أحياء الطائف</span>
          </div>
        </div>

        {/* Symptom Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {ISSUES.map((issue) => {
            const IconComp = issue.icon;
            const isSelected = selectedIssue.id === issue.id;
            return (
              <button
                key={issue.id}
                onClick={() => setSelectedIssue(issue)}
                className={`p-4 rounded-2xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2.5 rounded-xl text-white bg-gradient-to-br ${issue.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {issue.title}
                  </h3>
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {issue.symptom}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Issue Diagnosis Result Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 text-right space-y-6 mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                تقرير التشخيص المبدئي
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                عطل: {selectedIssue.title}
              </h2>
            </div>
            
            <div className="text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-xl">
              مستوى الأهمية: {selectedIssue.urgency}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>الأسباب الهندسية المرجحة لهذا العطل:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {selectedIssue.causes.map((cause, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{cause}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm sm:text-base">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>الخدمة الهندسية الموصى بها لحل المشكلة:</span>
            </div>

            <div className="text-base sm:text-lg font-black text-blue-800">
              {selectedIssue.recommendedService}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestBooking(selectedIssue.recommendedService)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>حجز فني لإصلاح هذا العطل فوراً</span>
              </button>

              <a
                href={`tel:0568663745`}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>استشارة فنية هاتفياً (0568663745)</span>
              </a>

              <a
                href={`https://wa.me/966568663745?text=${encodeURIComponent(`السلام عليكم، بعد استخدام أداة فحص الأعطال أواجه مشكلة (${selectedIssue.title}) في مكيف سبليت بالطائف، وأود حجز فني للكشف والإصلاح.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب فوري</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
};
