import React from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Navigation, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>مقر الفني وتفاصيل التواصل المباشر</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            موقعنا في قلب الطائف - شارع عكاظ
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            نرحب باتصالاتكم واستفساراتكم على مدار 24 ساعة لخدمتكم فوراً في جميع أحياء ومحافظة الطائف.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between text-right">
            <div className="space-y-6">
              
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1">
                  فني تركيب واصلاح مكيفات سبليت بالطائف
                </h3>
                <p className="text-xs text-slate-500">
                  خدمة معتمدة ومتنقلة لجميع أنواع التكييف (سبليت، دولابي، شباك)
                </p>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">العنوان الكامل:</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                    شارع عكاظ، 26523، الشرقية، الطائف 26523، المملكة العربية السعودية
                  </div>
                  <div className="text-[11px] text-blue-600 font-semibold mt-1">
                    الرمز البريدي: 26523
                  </div>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">رقم الهاتف المباشر والواتساب:</div>
                  <div className="text-base font-black text-slate-900 mt-0.5 dir-ltr text-right">
                    0568663745
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
                    متاح للاتصالات والاستفسارات 24/7
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">أوقات العمل:</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                    24 ساعة يومياً (طوال أيام الأسبوع بلا انقطاع)
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    فريق طوارئ مناوب ليلاً ونهاراً
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-3 mt-6">
              <a
                href="tel:0568663745"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>اتصال مباشر</span>
              </a>
              <a
                href="https://wa.me/966568663745"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب فوري</span>
              </a>
            </div>
          </div>

          {/* Interactive Simulated Map / Directions Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between overflow-hidden relative">
            <div className="text-right mb-4">
              <h3 className="font-bold text-slate-900 text-base mb-1">
                خريطة التغطية وانطلاق الفني من شارع عكاظ بالطائف
              </h3>
              <p className="text-xs text-slate-500">
                انطلاق سريع من حي الشرقية عبر الطرق الدائرية والمحاور الرئيسية للوصول لكافة الأحياء
              </p>
            </div>

            {/* Visual Schematic Map Container */}
            <div className="relative h-64 sm:h-80 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center group">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-70"></div>
              
              {/* Radial Roads visualization */}
              <div className="absolute w-72 h-72 border border-blue-200 rounded-full animate-ping opacity-20 pointer-events-none"></div>
              <div className="absolute w-96 h-96 border border-blue-300 rounded-full opacity-30 pointer-events-none"></div>

              {/* Pin at Okaz Street */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="bg-red-600 text-white p-3 rounded-full shadow-lg border-2 border-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-2 bg-slate-900/90 text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md border border-slate-700 text-center">
                  <div>شارع عكاظ، الشرقية</div>
                  <div className="text-[10px] text-blue-300">مقر فني تكييف الطائف</div>
                </div>
              </div>

              {/* Neighboring Markers */}
              <div className="absolute top-6 right-8 bg-white/90 border border-slate-300 px-2 py-1 rounded text-[11px] font-bold text-slate-700 shadow-xs">
                حي شهار (خدمة في نفس اليوم)
              </div>
              <div className="absolute bottom-6 left-8 bg-white/90 border border-slate-300 px-2 py-1 rounded text-[11px] font-bold text-slate-700 shadow-xs">
                حي الحوية (تغطية شاملة)
              </div>
              <div className="absolute bottom-6 right-10 bg-white/90 border border-slate-300 px-2 py-1 rounded text-[11px] font-bold text-slate-700 shadow-xs">
                حي الوسام (نجيك لحد بابك)
              </div>
              <div className="absolute top-6 left-10 bg-white/90 border border-slate-300 px-2 py-1 rounded text-[11px] font-bold text-slate-700 shadow-xs">
                حي السداد (خدمة 24/7)
              </div>

              {/* Action Overlay */}
              <a
                href="https://maps.google.com/?q=Okaz+Street+Taif+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-slate-950/20 hover:bg-slate-950/40 backdrop-blur-[1px] transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-20"
              >
                <span className="bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                  <span>فتح في تطبيق خرائط Google</span>
                </span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>إمكانية الدفع عند المعاينة وإتمام الصيانة</span>
              </span>
              <a
                href="https://maps.google.com/?q=Okaz+Street+Taif+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-bold inline-flex items-center gap-1"
              >
                <span>اتجاهات القيادة إلى شارع عكاظ</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
