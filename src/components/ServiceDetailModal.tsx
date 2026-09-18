import React from 'react';
import { ServiceItem } from '../types';
import { 
  X, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  Layers, 
  Clock, 
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestBooking: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestBooking
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 text-right relative my-auto"
        id="service-detail-subpage"
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="إغلاق الصفحة"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-left">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              صفحة الخدمة المستقلة | الطائف
            </span>
          </div>
        </div>

        {/* Hero Banner with Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-5 right-6 left-6 text-white">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>فني معتمد لجميع أحياء الطائف 24/7</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight text-white">
              {service.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              مقر العمل: شارع عكاظ، الطائف | هاتف: 0568663745
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Full In-depth Description */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>الوصف الشامل للخدمة والمعايير الهندسية:</span>
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {service.fullDesc}
            </p>
          </div>

          {/* Symptoms: When to call */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>متى تحتاج لطلب هذه الخدمة فوراً؟ (علامات العطل):</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.symptoms.map((symptom, i) => (
                <div key={i} className="flex items-start gap-2 bg-amber-50/70 border border-amber-100 p-3 rounded-xl text-xs text-amber-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Technical Execution */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-blue-600" />
              <span>خطوات التنفيذ الاحترافية المتبعة من الفني:</span>
            </h3>
            <div className="space-y-2.5">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 p-3 rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Guarantee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs mb-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>المواد وقطع الغيار المستخدمة:</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                {service.materialsUsed}
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>الضمان المعتمد:</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {service.guaranteeText}
              </p>
            </div>
          </div>

          {/* Fast Call / Booking CTA in Subpage */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-extrabold text-sm sm:text-base">
                هل ترغب بحجز خدمة: {service.title}؟
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>نجيك لحد بابك في نفس اليوم في جميع أحياء الطائف</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href="tel:0568663745"
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>اتصال: 0568663745</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onRequestBooking(service.title);
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>طلب حجز الخدمة</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
