import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Clock, 
  Wrench, 
  Sparkles, 
  Check, 
  Users,
  Compass,
  Zap
} from 'lucide-react';
import heroTechImg from '../assets/images/hero_split_ac_1789709356253.jpg';

interface AboutTechnicianDedicatedPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export const AboutTechnicianDedicatedPage: React.FC<AboutTechnicianDedicatedPageProps> = ({
  onBackToHome,
  onOpenBooking
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'من نحن | فني تركيب واصلاح مكيفات سبليت معتمد بالطائف | 0568663745';
  }, []);

  const pillars = [
    {
      title: 'فنيين متخصصين وخبرة طويلة',
      desc: 'فريق فني معتمد بخبرة تزيد عن 15 عاماً في صيانة وإصلاح كافة أعطال مكيفات السبليت والدولابي والشباك بكبرى الماركات العالمية (جري، ماندو، دايكن، إل جي، ميديا، أو جنرال وغيرها).',
      icon: Award,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      title: 'أجهزة غسيل حديثة بدون فوضى',
      desc: 'نستخدم مضخات ضغط مياه ألمانية متطورة مع أكياس وجراب عزل مخصص يحيط بالوحدة الداخلية بالكامل، مما يضمن غسيلاً عميقاً لكافة أجزاء المكيف بدون تساقط أي قطرة ماء على جدرانك أو أثاثك.',
      icon: Sparkles,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      title: 'نجيك لحد بابك في نفس اليوم',
      desc: 'ندرك صعوبة الأجواء وأهمية التكييف في منزلك أو مكتبك، لذلك نلتزم بالاستجابة الفورية والوصول المباشر إلى بابك في نفس يوم طلب الصيانة بجميع أحياء الطائف وضواحيها.',
      icon: Clock,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      title: 'ضمان على الصيانة وسعر منافس',
      desc: 'نقدم أسعاراً شفافة وعادلة بدون أي رسوم خفية مع تقديم ضمان معتمد على كافة أعمال الصيانة وشحن الفريون وقطع الغيار الأصلية المستخدمة.',
      icon: ShieldCheck,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    }
  ];

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12" id="about-technician-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumbs */}
        <nav aria-label="مسار التنقل" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
          >
            الرئيسية
          </button>
          <span>/</span>
          <span className="text-blue-700 font-bold">عن الفني المعتمد والمقر بالطائف</span>
        </nav>

        {/* Back Button */}
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
            <span>اتصل: 0568663745</span>
          </a>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden bg-slate-900 min-h-[300px]">
              <img 
                src={heroTechImg} 
                alt="فني صيانة مكيفات سبليت معتمد بالطائف"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">
                خبرة معتمدة 15+ عاماً بالطائف
              </div>
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 text-right space-y-4">
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                برودة تدوم ونظافة تشوفها
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                فني تركيب وإصلاح مكيفات سبليت معتمد بالطائف
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                مقرنا الرئيسي في <strong>شارع عكاظ، الشرقية، الطائف</strong>. نختص في تقديم حلول هندسية متكاملة لجميع أنظمة ومكيفات السبليت المنزلية والتجارية، بدءاً من فك ونقل وتركيب الوحدات بميزان ليزر، مروراً بغسيل وتنظيف المكيفات بدون إحداث أي فوضى، وصولاً لشحن الفريون الأصلي وإصلاح الكمبروسرات واللوحات الإلكترونية.
              </p>

              {/* Verified Workshop Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-right">
                  <div className="font-bold text-slate-900">عنوان المقر المعتمد:</div>
                  <div className="text-slate-700 mt-0.5">
                    شارع عكاظ، 26523، الشرقية، الطائف 26523، المملكة العربية السعودية
                  </div>
                  <div className="text-emerald-700 font-bold mt-1">
                    ✓ نخدم كافة أحياء الطائف وضواحيها ونصلك في نفس اليوم
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Section */}
        <div className="mb-10 text-right">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <span>ركائز خدمتنا وضماناتنا لعملائنا في الطائف</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs text-right space-y-3"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${p.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{p.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantee and Contact Callout */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black">
              جاهزون لصيانة مكيفك الآن في أي حي بالطائف
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm">
              اتصل بنا مباشرة أو تواصل عبر واتساب وسنصلك لبابك في نفس اليوم.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:0568663745"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>0568663745</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
            >
              حجز موعد فني
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
