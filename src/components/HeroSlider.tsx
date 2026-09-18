import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  PhoneCall, 
  MessageSquare, 
  Play, 
  Pause, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft, 
  Copy,
  CalendarCheck,
  Wrench
} from 'lucide-react';
import cleaningImg from '../assets/images/split_ac_cleaning_1789709281857.jpg';
import installImg from '../assets/images/split_ac_installation_1789709294550.jpg';
import freonImg from '../assets/images/split_ac_freon_1789709307491.jpg';
import leakImg from '../assets/images/split_ac_water_leak_1789709319734.jpg';
import compressorImg from '../assets/images/split_ac_compressor_1789709332083.jpg';
import sanitizingImg from '../assets/images/split_ac_sanitizing_1789709344748.jpg';

export interface SlideItem {
  id: string;
  serviceId: string;
  title: string;
  subtitle: string;
  badge: string;
  slogan: string;
  highlight: string;
  image: string;
  accentColor: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    serviceId: 'split-ac-cleaning',
    title: 'تنظيف وغسيل المكيفات السبلت بأحدث أجهزة ضغط المياه',
    subtitle: 'غسيل داخلي وخارجي بأكياس عزل مخصصة تحمي الجدران والفرش من أي قطرة ماء، مع تسليك مجرى الصرف وتنظيف الفلاتر.',
    badge: 'أجهزة غسيل حديثة بدون فوضى',
    slogan: 'برودة تدوم ونظافة تشوفها',
    highlight: 'تنظيف المكثف والمبخر • إزالة العفن والغبار • فحص التبريد الفوري',
    image: cleaningImg,
    accentColor: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'slide-2',
    serviceId: 'split-ac-installation',
    title: 'فك وتركيب ونقل مكيفات سبليت بوزنية ميزان ماء دقيقة',
    subtitle: 'تثبيت القواعد المعدنية بوزنية هندسية لمنع الاهتزاز أو ميلان الجهاز، مع تمديد مواسير النحاس وحماية الجدران من أي تشويه.',
    badge: 'فنيين متخصصين وخبرة طويلة',
    slogan: 'نجيك لحد بابك في نفس اليوم',
    highlight: 'تركيب ميزان ليزر • حماية العزل الحراري • تشغيل وتجربة كاملة',
    image: installImg,
    accentColor: 'from-indigo-600 to-blue-600'
  },
  {
    id: 'slide-3',
    serviceId: 'split-ac-freon',
    title: 'تعبئة الفريون الأمريكي الأصلي وقياس ضغط الغاز',
    subtitle: 'فحص إلكتروني دقيق لكشف أماكن تهريب الغاز وضبط ضغط الفريون R410A و R22 بأحدث الساعات لتحقيق أعلى كفاءة تبريد.',
    badge: 'فريون أمريكي أصلي 100%',
    slogan: 'برودة تدوم ونظافة تشوفها',
    highlight: 'قياس دقيق لضغط الـ PSI • كشف تهريب المواسير والبلف • ضمان التبريد',
    image: freonImg,
    accentColor: 'from-cyan-600 to-teal-600'
  },
  {
    id: 'slide-4',
    serviceId: 'split-ac-water-leak',
    title: 'معالجة تسريب الماء والأصوات المزعجة والاهتزاز',
    subtitle: 'حل جذري ونهائي لمشاكل تنقيط الماء داخل الغرف، وتسليك مجرى وحوض التكثيف بالمضخات ومعالجة أصوات المحركات.',
    badge: 'حل نهائي وفوري لتنقيط الماء',
    slogan: 'أجهزة غسيل حديثة بدون فوضى',
    highlight: 'تسليك حوض التكثيف • فحص مروحة البلاور • موازنة الوحدة بالكامل',
    image: leakImg,
    accentColor: 'from-sky-600 to-blue-700'
  },
  {
    id: 'slide-5',
    serviceId: 'split-ac-compressor',
    title: 'صيانة الكمبروسر واللوحات الإلكترونية والمراوح',
    subtitle: 'فحص الدوائر الكهربائية، تبديل الكابستور الأصلي، معالجة فصل التبريد المفاجئ، وإصلاح كروت التحكم وضمان قطع الغيار.',
    badge: 'ضمان على الصيانة وسعر منافس',
    slogan: 'نجيك لحد بابك في نفس اليوم',
    highlight: 'فحص الكابستور والريلاي • صيانة محرك المروحة • حل فصل الكمبروسر',
    image: compressorImg,
    accentColor: 'from-amber-600 to-orange-600'
  },
  {
    id: 'slide-6',
    serviceId: 'split-ac-sanitizing',
    title: 'تعقيم وتطهير المكيفات بمواد طبية عطرية آمنة',
    subtitle: 'القضاء على 99.9% من البكتيريا والجراثيم والعفن داخل مجاري الهواء، مع تعطير منعش يدوم طويلاً لراحة وصحة أسرتك.',
    badge: 'هواء نقي وصحي خالي من البكتيريا',
    slogan: 'برودة تدوم ونظافة تشوفها',
    highlight: 'تعقيم المبخر والريش • مواد صحية معتمدة • عطور منعشة تدوم',
    image: sanitizingImg,
    accentColor: 'from-emerald-600 to-teal-700'
  }
];

interface HeroSliderProps {
  onNavigateToService: (serviceId: string) => void;
  onOpenBooking: () => void;
  onCopyServiceDetails: () => void;
  hasCopied: boolean;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateToService,
  onOpenBooking,
  onCopyServiceDetails,
  hasCopied
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000; // 6 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeSlide = SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / slideDuration) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم، أود الاستفسار وحجز خدمة (${activeSlide.title}) لمكيف سبليت في الطائف. هاتف الفني: 0568663745`
  );

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-700/80 shadow-2xl bg-slate-950 text-white" id="main-hero-slider">
      
      {/* Slides Container */}
      <div className="relative h-[560px] sm:h-[580px] lg:h-[620px] w-full">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Dynamic Ken-Burns Zoom effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                    isActive ? 'scale-105 filter brightness-75' : 'scale-100 filter brightness-50'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                
                {/* Advanced Gradient Overlays for High Contrast and Arabic Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
              </div>

              {/* Slide Content Box */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-between py-6 sm:py-8 lg:py-10 text-right">
                
                {/* Top Badges Bar inside Slide */}
                <div className="flex items-center justify-between gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md border border-blue-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{slide.badge}</span>
                  </span>

                  {/* Slide Counter Indicator */}
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/60 px-3 py-1 rounded-xl text-xs font-mono font-bold text-slate-300">
                    <span className="text-amber-400">{index + 1}</span>
                    <span className="text-slate-500 mx-1">/</span>
                    <span>{SLIDES.length}</span>
                  </div>
                </div>

                {/* Middle Hero Copy */}
                <div className="max-w-3xl space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg tracking-tight">
                    {slide.title}
                  </h2>

                  <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed font-medium drop-shadow-sm max-w-2xl">
                    {slide.subtitle}
                  </p>

                  {/* Feature Highlights row */}
                  <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl p-2.5 sm:p-3 inline-flex items-center gap-2 text-xs sm:text-sm text-cyan-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{slide.highlight}</span>
                  </div>
                </div>

                {/* Bottom Call To Action Buttons */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    
                    {/* Direct Call Button */}
                    <a
                      href="tel:0568663745"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 sm:px-6 py-3 rounded-xl font-black text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>اتصل الآن: 0568663745</span>
                    </a>

                    {/* Direct WhatsApp Button */}
                    <a
                      href={`https://wa.me/966568663745?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>واتساب فوري</span>
                    </a>

                    {/* Dedicated Page Button */}
                    <button
                      onClick={() => onNavigateToService(slide.serviceId)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-cyan-300 hover:text-white border border-cyan-400/40 px-4 sm:px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      <Wrench className="w-4 h-4 text-cyan-400" />
                      <span>الصفحة المستقلة للخدمة</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>

                    {/* Quick Booking Button */}
                    <button
                      onClick={onOpenBooking}
                      className="hidden md:flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>حجز موعد فني</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar (Timer) */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-800/80 z-30 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slider Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="الشريحة السابقة"
        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md border border-slate-700/80 shadow-lg transition-all cursor-pointer group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        aria-label="الشريحة التالية"
        className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md border border-slate-700/80 shadow-lg transition-all cursor-pointer group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slider Bottom Controls: Play/Pause, Indicators, and Mini Tabs */}
      <div className="bg-slate-950/95 border-t border-slate-800/80 p-3 sm:p-4 z-30 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Autoplay Pause/Play button + Dots */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer"
              title={isPlaying ? 'إيقاف التبديل التلقائي مؤقتاً' : 'تشغيل التبديل التلقائي'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? 'إيقاف مؤقت' : 'تشغيل تلقائي'}</span>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 h-2.5 bg-blue-500 shadow-sm'
                      : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`الانتقال إلى ${s.title}`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          {/* Quick Slide Shortcuts (Mini Interactive Tabs) */}
          <div className="hidden lg:flex items-center gap-2 overflow-x-auto max-w-2xl py-0.5">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`text-right px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  idx === currentIndex
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>{s.badge.split(' ')[0]}</span>
                <span className="truncate max-w-[120px]">{s.title.split(' ')[0]} {s.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};
