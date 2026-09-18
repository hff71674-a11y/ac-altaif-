import React, { useState } from 'react';
import { TAIF_AREAS_DATA } from '../data/taifAreasData';
import { NeighborhoodItem } from '../types';
import { 
  MapPin, 
  PhoneCall, 
  MessageSquare,
  CheckCircle2, 
  Navigation, 
  Search,
  ShieldCheck,
  Sparkles,
  Truck
} from 'lucide-react';

interface TaifAreasSectionProps {
  onSelectAreaForBooking: (areaName: string) => void;
}

export const TaifAreasSection: React.FC<TaifAreasSectionProps> = ({
  onSelectAreaForBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = TAIF_AREAS_DATA.filter(area => 
    area.name.includes(searchQuery) || 
    area.description.includes(searchQuery) ||
    area.popularServices.some(s => s.includes(searchQuery))
  );

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-slate-200" id="taif-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-2.5">
            <Truck className="w-3.5 h-3.5 text-emerald-600" />
            <span>نجيك لحد بابك في نفس اليوم في جميع أحياء الطائف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            أحياء ومناطق الخدمة في الطائف وضواحيها
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            سياراتنا المجهزة بأحدث أجهزة الغسيل وقطع الغيار الأصلية تجوب أحياء ومخططات الطائف يومياً لخدمتكم بأعلى معايير الجودة والأمانة.
          </p>
        </div>

        {/* Central Base Highlight: Okaz Street, Ash Sharqiyah */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-5 sm:p-6 rounded-2xl mb-8 border border-blue-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-blue-300 font-bold uppercase tracking-wider">
                مركز الانطلاق الرئيسي للفني بالطائف
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5">
                شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية
              </div>
              <div className="text-xs text-slate-300 mt-1">
                موقع استراتيجي بقلب الطائف يتيح سرعة الاستجابة وخدمة المنازل في نفس اليوم.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="tel:0568663745"
              className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>اتصل الآن: 0568663745</span>
            </a>
            <a
              href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D8%A8%D8%AD%D9%8A%20%D8%A8%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none text-center bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب</span>
            </a>
          </div>
        </div>

        {/* Neighborhood Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="ابحث عن حيّك في الطائف (شهار، الحوية، الوسام، السداد...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 pr-10 pl-4 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
          />
          <Search className="w-5 h-5 text-slate-400 absolute top-3.5 right-3.5" />
        </div>

        {/* Grid of Neighborhoods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-4 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="text-right">
                    <h3 className="font-extrabold text-sm text-slate-900">
                      {area.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {area.nameEn}
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                    24/7 متاح
                  </span>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-3 text-right">
                  {area.description}
                </p>

                {/* Status Badge without arrival time */}
                <div className="flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-800 p-2 rounded-lg border border-emerald-100 mb-3 font-semibold">
                  <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{area.coverageStatus}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {area.popularServices.map((srv, idx) => (
                    <span 
                      key={idx}
                      className="bg-slate-200/70 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Communication Icons */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center gap-1.5">
                <a
                  href="tel:0568663745"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1 transition-colors"
                  title="اتصال هاتفي مباشر"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>اتصال</span>
                </a>

                <a
                  href={`https://wa.me/966568663745?text=${encodeURIComponent(`السلام عليكم، أحتاج فني تكييف في ${area.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                  title="واتساب مباشر"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>واتساب</span>
                </a>

                <button
                  onClick={() => onSelectAreaForBooking(area.name)}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 py-1.5 px-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  حجز موعد
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Neighborhoods Keyword Cloud */}
        <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center text-xs text-slate-600 leading-loose">
          <span className="font-bold text-slate-800 ml-1">تغطية فني تكييف الطائف تشمل:</span>
          <span>شهار، الحوية، الوسام 1 و 2 و 3، قروى، المثناة، السداد، حي القيم الأعلى والأسفل، الريان، الشرقية، الفيصلية، الجال، الوشحاء، أم العراد، عودة، جبرة، نخب، مسرة، الهدا، الشفا، وكافة المخططات والاستراحات بالطائف وضواحيها.</span>
        </div>

      </div>
    </section>
  );
};
