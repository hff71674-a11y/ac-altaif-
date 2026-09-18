import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  PhoneCall, 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  Zap,
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestBookingWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestBookingWithService
}) => {
  return (
    <section className="py-14 lg:py-20 bg-slate-50 relative" id="split-ac-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>خدمات فني تركيب وإصلاح مكيفات سبليت معتمد - الطائف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            خدمات صيانة المكيفات السبلت المعتمدة بالطائف
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            نقدم لكم خدمات احترافية ومتكاملة لجميع أنواع التكييف (سبليت، دولابي، شباك) فني محترف بكافة أعطال المكيفات وبأعلى معايير الجودة والأمانة في جميع أحياء الطائف.
          </p>

          {/* Slogan Banner */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md">
            <span className="text-amber-400">❄️ برودة تدوم ونظافة تشوفها</span>
            <span className="text-slate-500">|</span>
            <span className="text-blue-300">اتصل الآن واحجز صيانة مكيفك: 0568663745</span>
          </div>
        </div>

        {/* 6 Core Services Grid with High-Resolution Dedicated Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service, index) => {
            const whatsappText = encodeURIComponent(`السلام عليكم، أحتاج خدمة (${service.title}) لمكيف سبليت بالطائف.`);
            return (
              <article 
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Badge */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-3 right-3 bg-blue-600/95 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1 shadow-sm">
                    <span>خدمة #{index + 1}</span>
                  </div>

                  {/* Guaranteed Badge */}
                  <div className="absolute top-3 left-3 bg-emerald-600/95 text-white text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ضمان معتمد</span>
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-3 right-3 left-3">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Description */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Short Description */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-right mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-1.5 mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      {service.highlights.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons & Communication Icons */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    
                    {/* Dedicated Independent Page Button */}
                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                      title="عرض الصفحة المستقلة وتفاصيل التنفيذ الكاملة"
                    >
                      <span>الصفحة المستقلة للخدمة وشرح الخطوات</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>

                    {/* Communication Icons: Direct Call & WhatsApp */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:0568663745"
                        className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                        title="اتصال هاتفي مباشر بالفني"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>اتصال: 0568663745</span>
                      </a>

                      <a
                        href={`https://wa.me/966568663745?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                        title="محادثة واتساب فورية"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>واتساب فوري</span>
                      </a>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-right">
              <h4 className="text-base font-bold text-slate-900">
                برودة تدوم ونظافة تشوفها في جميع أحياء ومخططات الطائف
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                أجهزة غسيل حديثة بدون فوضى، فنيين متخصصين وخبرة طويلة، ونجيك لحد بابك في نفس اليوم.
              </p>
            </div>
            <a
              href="tel:0568663745"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-colors shadow-sm"
            >
              اتصل الآن واحجز صيانة مكيفك
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
