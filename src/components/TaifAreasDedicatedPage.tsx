import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Car, 
  Navigation, 
  Sparkles,
  CalendarCheck,
  Wrench
} from 'lucide-react';
import { TAIF_AREAS_DATA } from '../data/taifAreasData';
import { NeighborhoodItem } from '../types';

interface TaifAreasDedicatedPageProps {
  onBackToHome: () => void;
  onSelectAreaForBooking: (areaName: string) => void;
  onRequestServiceBooking: (serviceTitle: string) => void;
}

export const TaifAreasDedicatedPage: React.FC<TaifAreasDedicatedPageProps> = ({
  onBackToHome,
  onSelectAreaForBooking,
  onRequestServiceBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'دليل أحياء ومناطق صيانة مكيفات سبليت بالطائف | نجيك لحد بابك في نفس اليوم';
  }, []);

  const filteredAreas = TAIF_AREAS_DATA.filter((area: NeighborhoodItem) => {
    const matchesSearch = 
      area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.distanceFromBase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.popularServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = selectedFilter === 'all' || area.distanceFromBase.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'جميع أحياء ومناطق الطائف' },
    { id: 'مقر', label: 'الشرقية وعكاظ (المقر المباشر)' },
    { id: 'وسط', label: 'وسط الطائف (شهار، السداد)' },
    { id: 'شمال', label: 'شمال الطائف (الحوية والمطار)' },
    { id: 'جنوب', label: 'جنوب وغرب الطائف (الوسام، المثناة)' },
  ];

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12" id="taif-areas-dedicated-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
          >
            الرئيسية
          </button>
          <span>/</span>
          <span className="text-blue-700 font-bold">دليل أحياء ومناطق تغطية صيانة السبلت بالطائف</span>
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
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-black shadow-md transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اتصل الآن: 0568663745</span>
          </a>
        </div>

        {/* Hero Banner for Neighborhoods */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 mb-10 text-right relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>تغطية معتمدة وشاملة لجميع أحياء الطائف وضواحيها 24/7</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              أحياء ومناطق صيانة مكيفات سبليت بالطائف
              <span className="block text-cyan-400 mt-1 text-xl sm:text-3xl">
                نجيك لحد بابك في نفس اليوم وبأعلى جودة
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              انطلاقاً من مقرنا في <strong className="text-white">شارع عكاظ، الشرقية، الطائف</strong>، تصل سيارات الصيانة المجهزة بأحدث أجهزة الغسيل بضغط المياه، وفريون التبريد الأمريكي الأصلي، وقطع الغيار إلى منزلك أو منشأتك في أي حي بالطائف خلال نفس اليوم.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
              <span className="bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-amber-300">
                <MapPin className="w-4 h-4" />
                المقر: شارع عكاظ، 26523، الشرقية، الطائف
              </span>
              <span className="bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-emerald-300">
                <Clock className="w-4 h-4" />
                خدمة طوارئ وصيانة على مدار الساعة 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Search & Zone Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن حيّك (مثال: شهار، الحوية، الوسام، قروى، السداد، المثناة...)"
              className="w-full pr-12 pl-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 transition-all text-right font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md cursor-pointer"
              >
                مسح
              </button>
            )}
          </div>

          {/* Zones Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {filterTabs.map((z) => (
              <button
                key={z.id}
                onClick={() => setSelectedFilter(z.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedFilter === z.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {z.label}
              </button>
            ))}
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {filteredAreas.map((area: NeighborhoodItem) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-5 shadow-sm hover:shadow-md transition-all text-right flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 font-bold text-xs px-2.5 py-1 rounded-lg border border-blue-100">
                    {area.distanceFromBase}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>تغطية اليوم</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{area.name}</span>
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Popular Services in this Area */}
                {area.popularServices && area.popularServices.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-400 mb-1.5">الخدمات الأكثر طلباً في الحي:</div>
                    <div className="flex flex-wrap gap-1">
                      {area.popularServices.map((srv, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-700 text-[11px] px-2 py-0.5 rounded-md border border-slate-200">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons for this Area */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-[11px] text-slate-500 font-medium">
                  {area.coverageStatus} • سيارات الصيانة تجيك لبابك
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:0568663745"
                    className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl text-xs font-bold transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>اتصال بالحي</span>
                  </a>

                  <a
                    href={`https://wa.me/966568663745?text=${encodeURIComponent(`السلام عليكم، أحتاج فني صيانة مكيفات سبليت لحي (${area.name}) بالطائف.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-xl text-xs font-bold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>واتساب للحي</span>
                  </a>
                </div>

                <button
                  onClick={() => onSelectAreaForBooking(area.name)}
                  className="w-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>حجز موعد فني لحي {area.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Slogan */}
        <div className="bg-blue-900 rounded-3xl p-6 sm:p-8 text-white text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-amber-300 font-extrabold text-sm mb-1">
              برودة تدوم ونظافة تشوفها
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              هل تسكن في حي آخر بالطائف ولم تجده في القائمة؟
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm mt-1">
              نغطي كافة أحياء ومخططات الطائف بدون استثناء. تواصل معنا ونصلك في نفس اليوم.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0568663745"
              className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-xl font-black text-sm transition-all shadow-md"
            >
              0568663745
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};
