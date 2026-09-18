import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  User, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  PhoneCall, 
  MessageSquare, 
  CalendarCheck, 
  Share2, 
  Check, 
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { BlogPostItem } from '../types';

interface MaintenanceArticleModalProps {
  post: BlogPostItem | null;
  onClose: () => void;
  onRequestBooking: (serviceTitle: string) => void;
}

export const MaintenanceArticleModal: React.FC<MaintenanceArticleModalProps> = ({
  post,
  onClose,
  onRequestBooking
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    const textToCopy = `نصيحة صيانة مكيفات سبلت بالطائف:\n${post.title}\n\n${post.excerpt}\n\nللحجز والاستفسار: 0568663745`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      dir="rtl"
    >
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto text-right relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-black px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
              title="نسخ ومشاركة ملخص النصيحة"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 hidden sm:inline">تم النسخ</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">مشاركة</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              aria-label="إغلاق المقال"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6">
          
          {/* Article Title & Metadata */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
              {post.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <User className="w-3.5 h-3.5 text-blue-600" />
                {post.author}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="text-blue-600 font-bold">شارع عكاظ، الطائف</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-48 sm:h-64 bg-slate-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-sm">
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Key Takeaways Box (ملخص الفني السريع) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-4 sm:p-5 border border-blue-200/80 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-black text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>خلاصة إرشادات الفني (أهم النقاط السريعة):</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {post.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed">
            {post.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 border-r-4 border-blue-600 pr-3">
                  {sec.heading}
                </h3>

                <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm sm:leading-loose">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Practical Tips Callout */}
                {sec.tips && sec.tips.length > 0 && (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 text-xs sm:text-sm text-emerald-950 space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>خطوات عملية موصى بها:</span>
                    </div>
                    <ul className="space-y-1.5 pr-2">
                      {sec.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technician Warning Callout */}
                {sec.warning && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-black text-amber-800 mb-0.5">تحذير فني هام:</strong>
                      <span>{sec.warning}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400">الكلمات المفتاحية:</span>
            {post.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-lg font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Service CTA Box */}
          {post.relatedServiceTitle && (
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-5 sm:p-6 text-white space-y-3 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="bg-blue-500/30 text-blue-200 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">
                  هل تواجه هذه المشكلة في مكيفك الآن؟
                </span>
                <span className="text-amber-300 text-xs font-bold">
                  نجيك لحد بابك في نفس اليوم بالطائف
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black">
                خدمة {post.relatedServiceTitle} بأحدث الأجهزة وضمان معتمد
              </h4>

              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                وفر وقتك وعناء المحاولات الخاطئة. فنيونا المحترفون يصلون إلى موقعك في أي حي بالطائف خلال وقت قياسي مع توفير قطع الغيار الأصلية وفريون أمريكي عالي النقاء.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href="tel:0568663745"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>اتصال: 0568663745</span>
                </a>

                <a
                  href={`https://wa.me/966568663745?text=${encodeURIComponent(`السلام عليكم، قرأت مقال (${post.title}) وأحتاج فني صيانة لمكيف السبلت لدي في الطائف.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساب مباشر</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onRequestBooking(post.relatedServiceTitle || 'صيانة مكيفات سبليت');
                  }}
                  className="flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-black py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-blue-600" />
                  <span>حجز موعد فني</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>مؤسسة فني صيانة وتكييف معتمد بالطائف • شارع عكاظ</span>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-bold cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
