import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  CheckCircle2, 
  FileText,
  SearchCheck,
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface HeaderProps {
  onOpenSeoAudit: () => void;
  onCopyServiceDetails: () => void;
  hasCopied: boolean;
  onSelectService: (serviceId: string) => void;
  onNavigateToPage?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSeoAudit, 
  onCopyServiceDetails, 
  hasCopied,
  onSelectService,
  onNavigateToPage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (hashOrPage: string) => {
    if (onNavigateToPage) {
      onNavigateToPage(hashOrPage);
    } else {
      window.location.hash = hashOrPage.startsWith('#') ? hashOrPage : `#/${hashOrPage}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" id="site-header">
      {/* Top Notification & Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              نجيك لحد بابك في نفس اليوم 24/7
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 text-xs hidden sm:inline">خدمة سريعة وشاملة لكافة أحياء ومخططات الطائف</span>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex items-center gap-3.5 text-xs">
            <a 
              href="tel:0568663745" 
              className="flex items-center gap-1 text-slate-200 hover:text-white font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>0568663745</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group" title="فني تركيب واصلاح مكيفات سبليت بالطائف">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="text-xl">❄️</span>
          </div>
          <div className="text-right">
            <div className="font-extrabold text-sm sm:text-base lg:text-lg text-slate-900 leading-tight">
              فني تركيب واصلاح مكيفات سبليت بالطائف
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-700 font-bold mt-0.5">
              <span>0568663745</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-emerald-700 font-medium">برودة تدوم ونظافة تشوفها</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-700">
          <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
            الرئيسية
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer py-1"
            >
              <span>خدمات صيانة السبلت (6)</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {servicesDropdownOpen && (
              <div 
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 border-b border-slate-100 mb-1">
                  كافة خدمات صيانة مكيفات السبليت:
                </div>
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv.id);
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-right px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <span className="text-blue-500 text-xs font-bold">←</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('split-ac-services')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            خدماتنا
          </button>
          <button 
            onClick={() => {
              const galEl = document.getElementById('gallery-section');
              if (galEl) {
                galEl.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleNav('home');
              }
            }} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            معرض الأعمال
          </button>
          <button 
            onClick={() => handleNav('areas')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            أحياء الطائف
          </button>
          <button 
            onClick={() => handleNav('diagnostic')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            فحص الأعطال
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            عن الفني
          </button>
          <button 
            onClick={() => handleNav('guarantees')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            الضمان والأسعار
          </button>
          <button 
            onClick={() => handleNav('maintenance-tips')} 
            className="hover:text-blue-600 transition-colors cursor-pointer text-amber-600 font-bold"
          >
            مدونة النصائح
          </button>
          <button 
            onClick={() => handleNav('booking')} 
            className="hover:text-blue-600 transition-colors cursor-pointer text-blue-600 font-bold"
          >
            حجز موعد
          </button>
        </nav>

        {/* Communication Action Icons & Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Direct Phone Call */}
          <a
            href="tel:0568663745"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            id="header-call-btn"
            title="اتصال هاتفي مباشر"
          >
            <PhoneCall className="w-4 h-4" />
            <span>0568663745</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            id="header-whatsapp-btn"
            title="محادثة واتساب فورية"
          >
            <MessageSquare className="w-4 h-4" />
            <span>واتساب</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl">
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
            <span className="font-bold">شارع عكاظ، الطائف</span>
            <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">نجيك في نفس اليوم</span>
          </div>

          {/* Quick Mobile Communication Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="tel:0568663745"
              className="flex items-center justify-center gap-1.5 bg-blue-600 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>اتصال: 0568663745</span>
            </a>

            <a
              href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب مباشر</span>
            </a>
          </div>

          {/* Services in mobile menu */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-500 mb-2">أقسام خدمات صيانة السبلت:</div>
            <div className="space-y-1">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => {
                    onSelectService(srv.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-right py-2 px-3 rounded-lg text-xs font-medium text-slate-800 hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>✓ {srv.title}</span>
                  <span className="text-blue-600">←</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-1.5 text-sm font-semibold text-slate-800">
            <button 
              onClick={() => handleNav('areas')} 
              className="w-full text-right py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>أحياء الطائف ومناطق الخدمة</span>
              <span className="text-blue-600 text-xs">←</span>
            </button>
            <button 
              onClick={() => handleNav('diagnostic')} 
              className="w-full text-right py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>فحص وتشخيص أعطال المكيفات</span>
              <span className="text-amber-600 text-xs">←</span>
            </button>
            <button 
              onClick={() => handleNav('about')} 
              className="w-full text-right py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>عن الفني المعتمد والمقر</span>
              <span className="text-emerald-600 text-xs">←</span>
            </button>
            <button 
              onClick={() => handleNav('guarantees')} 
              className="w-full text-right py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>الضمانات وسياسة الأسعار</span>
              <span className="text-blue-600 text-xs">←</span>
            </button>
            <button 
              onClick={() => handleNav('maintenance-tips')} 
              className="w-full text-right py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center justify-between text-amber-700 font-bold"
            >
              <span>مدونة نصائح الصيانة والأعطال</span>
              <span className="text-amber-600 text-xs">←</span>
            </button>
            <button 
              onClick={() => handleNav('booking')} 
              className="w-full text-right py-2.5 px-3 bg-blue-50 text-blue-800 font-bold rounded-xl flex items-center justify-between"
            >
              <span>حجز موعد صيانة فني</span>
              <span className="text-blue-600">←</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
