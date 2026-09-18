import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  X, 
  ZoomIn, 
  ChevronRight, 
  ChevronLeft,
  Wrench,
  Droplets,
  Zap,
  Layers
} from 'lucide-react';

import realCleaningImg from '../assets/images/split_ac_real_cleaning_1789712276241.jpg';
import realInstallImg from '../assets/images/split_ac_real_install_1789712289534.jpg';
import realOutdoorImg from '../assets/images/split_ac_real_outdoor_1789712300668.jpg';
import realFilterImg from '../assets/images/split_ac_real_filter_1789712313027.jpg';
import classicCleaningImg from '../assets/images/split_ac_cleaning_1789709281857.jpg';
import classicFreonImg from '../assets/images/split_ac_freon_1789709307491.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cleaning' | 'installation' | 'maintenance' | 'freon';
  categoryLabel: string;
  area: string;
  description: string;
  image: string;
  beforeAfter?: string;
  highlights: string[];
}

export const ImageGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'تنظيف مكيف سبليت بغلاف عازل مائي متطور',
      category: 'cleaning',
      categoryLabel: 'تنظيف وغسيل',
      area: 'حي شهار، الطائف',
      description: 'استخدام سترة عزل ووتربروف مخصصة مع مضخة ضغط مياه متطورة لإزالة الرواسب والعفن الداخلي دون تسريب نقطة ماء واحدة على الأثاث أو الجدار.',
      image: realCleaningImg,
      beforeAfter: 'نظافة 100% بدون فوضى',
      highlights: ['عزل تام للجدار والفرش', 'تسليك مجرى الصرف', 'تعقيم الزعانف والألمنيوم']
    },
    {
      id: 'gal-2',
      title: 'تركيب وحدة سبليت داخلية بوزنية ميزان ماء ليزري',
      category: 'installation',
      categoryLabel: 'فك وتركيب',
      area: 'حي الوسام، الطائف',
      description: 'تثبيت مسطرة التثبيت المعدنية بأعلى دقة ميزان ماء لمنع أي ميلان يسبب تجمع المياه، وتمديد النحاس بعزل حراري محكم.',
      image: realInstallImg,
      beforeAfter: 'تثبيت هندسي متين',
      highlights: ['وزنية ميزان ليزر دقيقة', 'حماية الديكور والدهان', 'عزل أنابيب النحاس']
    },
    {
      id: 'gal-3',
      title: 'فحص ضغط وتعبئة فريون للوحدة الخارجية',
      category: 'freon',
      categoryLabel: 'شحن فريون',
      area: 'حي الحوية، الطائف',
      description: 'فحص ضغط دائرة التبريد بساعة الفحص المتخصصة (Manifold Gauge)، ومعالجة التسريب في صمامات اللواكير ثم التعبئة بفريون R410A أمريكي أصلي.',
      image: realOutdoorImg,
      beforeAfter: 'ضغط تبريد مثالي 120 PSI',
      highlights: ['فريون أمريكي أصلي', 'كشف التسريب بالرغوة', 'فحص أمبير الكمبروسر']
    },
    {
      id: 'gal-4',
      title: 'فلاتر ومبخر مكيف بعد الغسيل والتعقيم الشامل',
      category: 'cleaning',
      categoryLabel: 'تنظيف وغسيل',
      area: 'حي الفيصلية، الطائف',
      description: 'إزالة الأتربة المتراكمة وشحوم الهواء من الفلاتر والمروحة الأسطوانية (Blower Wheel) واستعادة تيار الهواء البارد الصافي بنسبة 100%.',
      image: realFilterImg,
      beforeAfter: 'هواء نقي وصحي',
      highlights: ['تدفق هواء قوي ومضاعف', 'القضاء على الروائح الكريهة', 'خفض استهلاك الكهرباء']
    },
    {
      id: 'gal-5',
      title: 'غسيل وتطهير مروحة البلاور ومجرى حوض التكثيف',
      category: 'maintenance',
      categoryLabel: 'صيانة ومعالجة',
      area: 'حي الخالدية، الطائف',
      description: 'حل مشكلة تنقيط المياه داخل الغرفة الناتجة عن انسداد مجرى الصرف، مع ضخ مواد مذيبة للأملاح داخل اللي الخارجي.',
      image: classicCleaningImg,
      beforeAfter: 'إنهاء تسريب الماء كلياً',
      highlights: ['تنظيف حوض التكثيف', 'تسليك لي الصرف بمضخة ضغط', 'تعقيم مجرى الهواء']
    },
    {
      id: 'gal-6',
      title: 'صيانة دارة التبريد وضبط صمامات النحاس',
      category: 'maintenance',
      categoryLabel: 'صيانة ومعالجة',
      area: 'حي قروى، الطائف',
      description: 'إعادة عزل مواسير النحاس الخارجية المتآكلة بفعل أشعة الشمس لمنع فقدان البرودة، وربط اللواكير بعزم شد قياسي.',
      image: classicFreonImg,
      beforeAfter: 'كفاءة تبريد قصوى',
      highlights: ['شريط عزل حراري أبيض', 'فحص عزم ربط الصمامات', 'اختبار التبريد بعد التشغيل']
    }
  ];

  const categories = [
    { id: 'all', label: 'كافة الأعمال المنفذة' },
    { id: 'cleaning', label: 'غسيل وتنظيف بدون فوضى' },
    { id: 'installation', label: 'فك وتركيب بوزنية دقيقة' },
    { id: 'freon', label: 'شحن فريون أصلي' },
    { id: 'maintenance', label: 'صيانة ومعالجة الأعطال' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-14 sm:py-16 bg-slate-900 text-white relative overflow-hidden" id="gallery-section">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>معرض الصور الواقعية من الميدان</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            نماذج واقعية من عمليات التنظيف والتركيب بالطائف
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            شاهد نماذج حقيقية لخدماتنا في منازل وفلل عملائنا بمختلف أحياء الطائف — نعتمد أحدث أكياس ومضخات الغسيل العازلة للماء لمنع أي فوضى، وميزان دقيق لتركيب متقن يعيش طويلاً.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-slate-950/70 border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col text-right"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-blue-400/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Area Tag */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-700/60">
                  {item.area}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-blue-600/90 text-white p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                {/* Bottom Result Pill */}
                {item.beforeAfter && (
                  <div className="absolute bottom-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                    <span>{item.beforeAfter}</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-white text-base group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-300">
                  {item.highlights.map((hl, idx) => (
                    <span key={idx} className="bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 text-slate-400">
                      • {hl}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Lightbox for detailed view */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" onClick={() => setActiveModalItem(null)}>
            <div 
              className="bg-slate-950 border border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 left-4 z-20 bg-slate-900/90 text-slate-300 hover:text-white p-2 rounded-full border border-slate-700 transition-colors cursor-pointer"
                title="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative aspect-4/3 bg-slate-900">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{activeModalItem.beforeAfter}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {activeModalItem.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    موقع العمل: {activeModalItem.area}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white">
                  {activeModalItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalItem.description}
                </p>

                {/* Highlights */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>مميزات التنفيذ المعتمدة في هذا العمل:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                    {activeModalItem.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="tel:0568663745"
                    className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>طلب نفس الخدمة لمكيفك (0568663745)</span>
                  </a>

                  <a
                    href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A7%D8%B7%D9%84%D8%B9%D8%AA%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D8%B1%D8%B6%20%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%83%D9%85%20%D9%88%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%84%D9%85%D9%83%D9%8A%D9%81%D9%8A%20%D8%A8%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-colors shadow-md"
                  >
                    محادثة واتساب
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
