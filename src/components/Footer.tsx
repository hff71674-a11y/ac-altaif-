import React from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  Copy,
  SearchCheck,
  Heart,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TAIF_AREAS_DATA } from '../data/taifAreasData';

interface FooterProps {
  onOpenSeoAudit: () => void;
  onCopyServiceDetails: () => void;
  hasCopied: boolean;
  onSelectService?: (serviceId: string) => void;
  onNavigateToPage?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenSeoAudit, 
  onCopyServiceDetails, 
  hasCopied,
  onSelectService,
  onNavigateToPage
}) => {
  const handlePageNav = (page: string) => {
    if (onNavigateToPage) {
      onNavigateToPage(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-24 lg:pb-14 border-t border-slate-800 text-right" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Call to Action Banner inside Footer */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 mb-12 border border-blue-800/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <span className="text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-2">
              برودة تدوم ونظافة تشوفها
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              اتصل الآن واحجز صيانة مكيفك في جميع أحياء الطائف
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              فنيين متخصصين وخبرة طويلة • أجهزة غسيل حديثة بدون فوضى • نجيك لحد بابك في نفس اليوم • ضمان وسعر منافس
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:0568663745"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>اتصال: 0568663745</span>
            </a>

            <a
              href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                ❄️
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">
                  فني تركيب واصلاح مكيفات سبليت بالطائف
                </h3>
                <div className="text-xs text-blue-400 font-bold">
                  هاتف / واتساب: 0568663745
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              فني معتمد ومتخصص في تركيب وصيانة وإصلاح كافة أعطال المكيفات السبليت والدولابي والشباك بجميع أحياء ومحافظة الطائف على مدار 24 ساعة، بأحدث المعدات ومواد التعقيم والفريون الأمريكي الأصلي وبدون فوضى.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0568663745" className="hover:text-white transition-colors font-bold dir-ltr">
                  0568663745
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>نخدمكم على مدار الساعة (24/7) - نجيك لحد بابك في نفس اليوم</span>
              </div>
            </div>


          </div>

          {/* Column 2: 6 Core Services Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-extrabold text-white border-b border-slate-800 pb-2">
              أقسام خدمات صيانة السبلت بالطائف
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onSelectService && onSelectService(service.id)}
                    className="hover:text-blue-400 transition-colors flex items-center gap-2 text-right w-full cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coverage Areas & Dedicated Subpages (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-sm font-extrabold text-white border-b border-slate-800 pb-2 mb-2">
                صفحات فرعية مستقلة
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>
                  <button 
                    onClick={() => {
                      const galEl = document.getElementById('gallery-section');
                      if (galEl) {
                        galEl.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        handlePageNav('home');
                      }
                    }} 
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-emerald-300 font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>معرض صور أعمال التنظيف والتركيب</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const qcEl = document.getElementById('quick-contact-section');
                      if (qcEl) {
                        qcEl.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        handlePageNav('home');
                      }
                    }} 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-cyan-300 font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>نموذج الاستفسار السريع المباشر</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNav('areas')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>دليل أحياء ومناطق الطائف المستقل</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNav('diagnostic')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>أداة فحص وتشخيص الأعطال</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNav('about')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>عن الفني المعتمد والمقر بشارع عكاظ</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNav('guarantees')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>الضمانات وسياسة الأسعار العادلة</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNav('maintenance-tips')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer text-amber-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>مدونة نصائح الصيانة ومقالات الخبراء</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNav('booking')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-bold cursor-pointer text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>صفحة حجز موعد فني مباشر</span>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-white border-b border-slate-800 pb-1.5 mb-2">
                تغطية أحياء الطائف (24/7)
              </h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
                {TAIF_AREAS_DATA.slice(0, 8).map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handlePageNav('areas')}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1 text-right cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>{area.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Bottom Summary */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed text-center">
          <p>
            فني مكيفات سبليت الطائف | صيانة مكيفات سبليت بالطائف | تركيب مكيفات سبليت شارع عكاظ | غسيل مكيفات بمضخات الطائف بدون فوضى | شحن فريون أصلي R410A الطائف | تمديد مواسير نحاس مولر أمريكي الطائف | كشف تهريب فريون وماء الطائف | فني مكيفات شهار | فني مكيفات الحوية | فني مكيفات الوسام | فني مكيفات السداد | صيانة مكيفات 24 ساعة الطائف | رقم فني مكيفات سبليت معتمد 0568663745.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} فني تركيب واصلاح مكيفات سبليت بالطائف | 0568663745
          </div>
          <div className="text-slate-400">
            برودة تدوم ونظافة تشوفها • خدمة فورية 24 ساعة
          </div>
        </div>

      </div>
    </footer>
  );
};
