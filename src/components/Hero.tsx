import React from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Copy, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Check,
  CalendarCheck,
  Wrench,
  Map,
  Compass
} from 'lucide-react';
import { HeroSlider } from './HeroSlider';

interface HeroProps {
  onCopyServiceDetails: () => void;
  hasCopied: boolean;
  onOpenBooking: () => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToPage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onCopyServiceDetails, 
  hasCopied,
  onOpenBooking,
  onNavigateToService,
  onNavigateToPage
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white pt-4 pb-10 lg:pt-6 lg:pb-12 border-b border-slate-800" id="hero-section">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Main Prominent Animated Image Slider */}
        <div className="w-full">
          <HeroSlider
            onNavigateToService={onNavigateToService}
            onOpenBooking={onOpenBooking}
            onCopyServiceDetails={onCopyServiceDetails}
            hasCopied={hasCopied}
          />
        </div>

        {/* Clean & Balanced Trust / Info Strip */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 text-right shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Left/Main Column: Address & Quick Highlights */}
            <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0 border border-blue-500/20">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>فني تكييف سبليت معتمد ومحترف</span>
                    <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      خدمة 24 ساعة
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    تغطية فورية وشاملة لجميع أحياء ومخططات الطائف وضواحيها
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  أجهزة بدون فوضى
                </span>
                <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  فريون أمريكي أصلي
                </span>
                <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ضمان معتمد
                </span>
              </div>
            </div>

            {/* Right Column: Fast Subpage Shortcuts */}
            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2.5 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
              <button
                onClick={() => {
                  const galEl = document.getElementById('gallery-section');
                  if (galEl) {
                    galEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigateToPage('home');
                  }
                }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-emerald-400 px-3.5 py-2 rounded-xl border border-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="معرض صور أعمال التنظيف والتركيب"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>معرض الأعمال</span>
              </button>

              <button
                onClick={() => onNavigateToPage('areas')}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl border border-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="أحياء الطائف المشمولة بالصيانة"
              >
                <Map className="w-3.5 h-3.5 text-cyan-400" />
                <span>دليل أحياء الطائف</span>
              </button>

              <button
                onClick={() => onNavigateToPage('diagnostic')}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl border border-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="فحص ذكي لأعطال المكيف"
              >
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span>فحص الأعطال</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
