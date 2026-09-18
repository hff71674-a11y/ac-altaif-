import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  FileCheck, 
  Award, 
  Coins, 
  Clock,
  HeartHandshake
} from 'lucide-react';

interface GuaranteesDedicatedPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export const GuaranteesDedicatedPage: React.FC<GuaranteesDedicatedPageProps> = ({
  onBackToHome,
  onOpenBooking
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'الضمانات وسياسة الأسعار العادلة | صيانة مكيفات سبليت بالطائف 0568663745';
  }, []);

  const guaranteeItems = [
    {
      title: 'ضمان كتابي على الصيانة وقطع الغيار',
      desc: 'نمنح عميلنا ضماناً صريحاً على أي قطعة غيار أصلية تم تركيبها (كابستور، بلف، محرك مروحة، كارت إلكتروني) أو عملية شحن فريون للتأكد من استقرار التبريد.',
      icon: FileCheck
    },
    {
      title: 'أسعار واضحة ومنافسة دون تكاليف خفية',
      desc: 'فحص المشكلة وتحديد التكلفة بدقة تامة ومصارحة العميل قبل البدء بأي خطوة صيانة. لا توجد أي رسوم مفاجئة.',
      icon: Coins
    },
    {
      title: 'أجهزة غسيل معتمدة تضمن سلامة أثاثك',
      desc: 'نضمن حماية منزلك وأثاثك وجدرانك 100% أثناء غسيل المكيف بفضل جراب العزل المائي الشامل وحاويات جمع المياه المخصصة.',
      icon: Sparkles
    },
    {
      title: 'الالتزام بالوصول في نفس اليوم',
      desc: 'احترام وقت العميل قيمة أساسية؛ نصلك في الموعد المحدد بنفس يوم الطلب بكافة أحياء الطائف.',
      icon: Clock
    }
  ];

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12" id="guarantees-dedicated-page">
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
          <span className="text-blue-700 font-bold">الضمانات وسياسة الأسعار التنافسية</span>
        </nav>

        {/* Back and Call Bar */}
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
            <span>0568663745</span>
          </a>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 text-white text-right space-y-4 shadow-xl border border-slate-800 mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>ميثاق الجودة والأمانة في صيانة المكيفات بالطائف</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            ضمان على الصيانة وسعر منافس
            <span className="block text-cyan-300 mt-1 text-xl sm:text-3xl">
              برودة تدوم ونظافة تشوفها
            </span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl">
            نهتم ببناء علاقة ثقة طويلة الأمد مع عملائنا الكرام في كافة أحياء الطائف. لذلك نضع الشفافية التامة والضمان المعتمد في صدارة أولوياتنا في كل زيارة نقوم بها.
          </p>
        </div>

        {/* Guarantees List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {guaranteeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs text-right space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 text-center space-y-4 shadow-md">
          <HeartHandshake className="w-12 h-12 text-blue-600 mx-auto" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            احجز صيانة مكيفك الآن مع فني معتمد وضمان راحة البال
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
            مقرنا: شارع عكاظ، الشرقية، الطائف. اتصل بنا وسنصلك لبابك في نفس اليوم.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-black text-sm shadow-md transition-all cursor-pointer"
            >
              حجز موعد فني الآن
            </button>
            <a
              href="tel:0568663745"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              اتصال: 0568663745
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};
