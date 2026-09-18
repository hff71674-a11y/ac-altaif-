import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Share2, 
  Copy, 
  MapPin, 
  Wrench, 
  FileText,
  Clock,
  Check,
  AlertCircle
} from 'lucide-react';

interface ServiceDedicatedPageProps {
  service: ServiceItem;
  onBackToHome: () => void;
  onSelectOtherService: (service: ServiceItem) => void;
  onRequestBooking: (serviceTitle: string) => void;
  onCopyServiceDetails: () => void;
  hasCopied: boolean;
}

export const ServiceDedicatedPage: React.FC<ServiceDedicatedPageProps> = ({
  service,
  onBackToHome,
  onSelectOtherService,
  onRequestBooking,
  onCopyServiceDetails,
  hasCopied
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${service.title} | فني تركيب واصلاح مكيفات سبليت بالطائف | 0568663745`;
  }, [service]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${service.title} بالطائف | فني مكيفات معتمد`,
        text: `احصل على خدمة ${service.title} في الطائف من فني معتمد. اتصل: 0568663745`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط صفحة الخدمة!');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم، أود حجز خدمة (${service.title}) لمكيف سبليت في الطائف. الرجاء التواصل معي لتأكيد الموعد.`
  );

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12" id={`service-page-${service.id}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6 bg-white p-3 rounded-xl border border-slate-200">
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
          >
            الرئيسية
          </button>
          <span>/</span>
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
          >
            خدمات صيانة المكيفات السبلت
          </button>
          <span>/</span>
          <span className="text-blue-700 font-bold truncate">{service.title}</span>
        </nav>

        {/* Back Button & Actions Bar */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-blue-600" />
            <span>العودة لجميع الخدمات</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              title="مشاركة الصفحة"
            >
              <Share2 className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">مشاركة</span>
            </button>

            <button
              onClick={onCopyServiceDetails}
              className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
              title="نسخ تفاصيل الفني"
            >
              {hasCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
              <span>{hasCopied ? 'تم النسخ!' : 'نسخ بيانات الخدمة'}</span>
            </button>
          </div>
        </div>

        {/* Main Service Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-10">
          
          {/* Hero Banner with Dedicated Image */}
          <div className="relative h-72 sm:h-96 w-full bg-slate-900 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-blue-600/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                قسم صيانة مكيفات السبلت بالطائف
              </span>
              <span className="bg-emerald-600/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                نجيك لحد بابك في نفس اليوم
              </span>
            </div>

            <div className="absolute bottom-6 right-6 left-6 text-right">
              <div className="inline-block text-xs text-amber-300 font-extrabold bg-slate-900/80 px-3 py-1 rounded-lg mb-2">
                برودة تدوم ونظافة تشوفها
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-md">
                {service.title}
              </h1>
              <p className="text-slate-200 text-xs sm:text-sm mt-2 max-w-3xl line-clamp-2">
                {service.shortDesc}
              </p>
            </div>
          </div>

          {/* Quick Contact & Communication Bar */}
          <div className="bg-slate-900 text-white p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-white" />
              </div>
              <div className="text-right">
                <div className="text-[11px] text-blue-300 font-semibold">اتصل الآن واحجز صيانة مكيفك مباشرة:</div>
                <div className="text-lg font-black text-white tracking-wide">0568663745</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-1 sm:flex-none justify-end">
              <a
                href="tel:0568663745"
                className="flex-1 sm:flex-none text-center bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>اتصال فوري</span>
              </a>

              <a
                href={`https://wa.me/966568663745?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none text-center bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب مباشر</span>
              </a>
            </div>
          </div>

          {/* Service Detailed Content Grid */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            
            {/* Overview / Full Description */}
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>عن الخدمة ونطاق العمل المعتمد</span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line text-right">
                {service.fullDesc}
              </p>
            </div>

            {/* Highlights List */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base font-bold text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-700" />
                <span>أهم مميزات تنفيذ هذه الخدمة:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3 rounded-xl border border-blue-100/60 shadow-2xs">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Symptoms / When to book */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span>متى تحتاج لطلب خدمة {service.title}؟</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.symptoms.map((sym, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span>{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Steps */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span>خطوات العمل المتبعة بأحدث الأجهزة وبدون فوضى:</span>
              </h3>
              <div className="space-y-3">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials and Guarantee */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 p-4 sm:p-5 rounded-2xl text-right">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>الضمان والأمانة الفنية:</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  {service.guaranteeText}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-2xl text-right">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-1.5">
                  <Wrench className="w-5 h-5 text-slate-600" />
                  <span>المعدات والأجهزة المستخدمة:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {service.materialsUsed}
                </p>
              </div>
            </div>

            {/* CTA Box inside dedicated page */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                برودة تدوم ونظافة تشوفها
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto mb-6">
                اتصل الآن واحجز صيانة مكيفك مع فني متخصص في جميع أحياء الطائف. نجيك لحد بابك في نفس اليوم بأحدث الأجهزة.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:0568663745"
                  className="w-full sm:w-auto bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-xl font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>اتصل الآن: 0568663745</span>
                </a>
                <button
                  onClick={() => onRequestBooking(service.title)}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>حجز موعد لهذه الخدمة</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Other Split AC Services Navigator */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-lg font-extrabold text-slate-900 mb-4 text-right">
            تصفح باقي خدمات صيانة مكيفات السبلت بالطائف:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_DATA.filter(s => s.id !== service.id).map(other => (
              <button
                key={other.id}
                onClick={() => onSelectOtherService(other)}
                className="text-right p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all flex items-start gap-3 group cursor-pointer"
              >
                <img 
                  src={other.image} 
                  alt={other.title} 
                  className="w-16 h-16 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {other.shortDesc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};
