import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  PhoneCall,
  MessageSquare,
  Tag,
  Truck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      badge: 'الخبرة والاحترافية',
      title: 'فنيين متخصصين وخبرة طويلة',
      desc: 'فريق فني معتمد ذو خبرة تمتد لسنوات في صيانة وتركيب جميع ماركات وأنواع المكيفات (سبليت، دولابي، شباك) بأعلى معايير الحرفية والأمانة.'
    },
    {
      icon: Sparkles,
      badge: 'نظافة تامة وحماية الأثاث',
      title: 'أجهزة غسيل حديثة بدون فوضى',
      desc: 'نستخدم مضخات ضغط مياه متطورة مع أكياس وجراب عزل مخصص يحمي الجدران والفرش والأثاث من أي قطرة ماء، لتستلم مكيفك نظيفاً كأنه جديد.'
    },
    {
      icon: Truck,
      badge: 'سرعة استجابة فائقة',
      title: 'نجيك لحد بابك في نفس اليوم',
      desc: 'سيارات مجهزة تجوب كافة أحياء الطائف (شهار، الحوية، الوسام، قروى، السداد، المثناة وغيرها). نصلك مباشرة عند باب منزلك في نفس يوم الاتصال.'
    },
    {
      icon: Tag,
      badge: 'أفضل قيمة وأعلى جودة',
      title: 'ضمان على الصيانة وسعر منافس',
      desc: 'نقدم ضماناً كتابياً معتمداً على كافة أعمال الصيانة والتركيب وقطع الغيار الأصلية، وبأسعار عادلة ومنافسة تناسب جميع أهالي الطائف الكرام.'
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>معايير الجودة والأمانة في الطائف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            لماذا نحن؟
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            أربعة أسباب تجعلنا خيارك الأول والموثوق لتركيب وصيانة مكيفات السبليت في الطائف:
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all shadow-xs hover:shadow-lg text-right flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>معتمد ومضمون 100%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* User CTA Callout */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-xl border border-blue-800 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-block bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full mb-3">
              ❄️ برودة تدوم ونظافة تشوفها
            </div>
            <h3 className="text-xl sm:text-3xl font-black mb-3">
              اتصل الآن واحجز صيانة مكيفك
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              فني معتمد جاهز لخدمتك في شارع عكاظ وكافة أحياء الطائف وضواحيها. صيانة فورية بأعلى درجات الأمانة والإتقان.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:0568663745"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-xl font-black text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>اتصال فوري: 0568663745</span>
              </a>

              <a
                href="https://wa.me/966568663745?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D9%85%D9%83%D9%8A%D9%81%20%D8%B3%D8%A8%D9%84%D9%8A%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>محادثة واتساب سريعة</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
