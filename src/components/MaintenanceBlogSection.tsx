import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  PhoneCall,
  CalendarCheck,
  Tag,
  Share2,
  ChevronRight
} from 'lucide-react';
import { MAINTENANCE_BLOG_POSTS } from '../data/maintenanceTipsData';
import { BlogPostItem } from '../types';
import { MaintenanceArticleModal } from './MaintenanceArticleModal';

interface MaintenanceBlogSectionProps {
  onRequestBookingWithService: (serviceTitle: string) => void;
}

export const MaintenanceBlogSection: React.FC<MaintenanceBlogSectionProps> = ({
  onRequestBookingWithService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalPost, setActiveModalPost] = useState<BlogPostItem | null>(null);

  const categories = ['الكل', 'برودة وتبريد', 'تسريب وأعطال', 'غسيل وتعقيم', 'فريون وكهرباء'];

  const filteredPosts = MAINTENANCE_BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.keyTakeaways.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80 relative text-right"
      id="maintenance-tips"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>مدونة نصائح الصيانة ومقالات الخبراء بالطائف</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            نصائح وإرشادات ذهبية لحماية وتبريد مكيفك
            <span className="block text-blue-600 mt-1">
              برودة تدوم ونظافة تشوفها مع فني الطائف المعتمد
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            مقالات وأدلة فنية مبسطة تساعدك على فهم أعطال مكيف السبلت، معرفة متى يمكنك التصرف بنفسك، ومتى يتعين عليك طلب الفني المختص لحماية منزلك وتوفير فواتير الكهرباء.
          </p>

          {/* Search & Category Tabs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في النصائح (تسريب، برودة، فريون...)"
                className="w-full pr-10 pl-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm text-slate-800 transition-all text-right shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto p-8 space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">لم يتم العثور على مقالات تطابق بحثك</h3>
            <p className="text-xs text-slate-500">جرب البحث بكلمات أخرى مثل "برودة"، "ماء"، "غسيل" أو اختر "الكل".</p>
            <button
              onClick={() => {
                setSelectedCategory('الكل');
                setSearchQuery('');
              }}
              className="mt-2 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
            >
              إعادة تعيين البحث
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Image Banner with Category Badge */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="bg-blue-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs font-medium">
                      <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-blue-300" />
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-[11px] text-slate-300 bg-slate-900/60 backdrop-blur-xs px-2 py-1 rounded-lg">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <h3 
                      onClick={() => setActiveModalPost(post)}
                      className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Key Takeaways Bullets (Fast Value for Scanners) */}
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2">
                      <div className="text-[11px] font-extrabold text-blue-800 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>أبرز ما في المقال:</span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-slate-600">
                        {post.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5 line-clamp-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="bg-slate-100 text-slate-500 text-[10px] font-medium px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                  <button
                    onClick={() => setActiveModalPost(post)}
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-extrabold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <span>قراءة الدليل كاملاً</span>
                    <ArrowLeft className="w-4 h-4 text-blue-600" />
                  </button>

                  {post.relatedServiceTitle && (
                    <button
                      onClick={() => onRequestBookingWithService(post.relatedServiceTitle || 'صيانة مكيفات سبليت')}
                      className="bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border border-blue-200/60"
                      title="طلب فحص وصيانة فني مباشر"
                    >
                      طلب الفني
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Trust & Direct Consultation Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>استشارة فنية مجانية عبر الهاتف والواتساب</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black">
              لم تجد حلاً للمشكلة في المقالات أو تحتاج كشفاً فورياً في منزلك؟
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              فني صيانة وتكييف سبليت معتمد بشارع عكاظ بالطائف متاح على مدار الساعة (24/7). سياراتنا مجهزة بكافة أجهزة القياس والفريون وقطع الغيار للوصول إليك في نفس اليوم.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:0568663745"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>اتصل الآن: 0568663745</span>
            </a>

            <a
              href={`https://wa.me/966568663745?text=${encodeURIComponent('السلام عليكم، أحتاج استشارة فنية بخصوص مكيف السبلت لدي في الطائف.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all border border-slate-700"
            >
              <span>واتساب الفني</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Full Article Reader Modal */}
      <MaintenanceArticleModal
        post={activeModalPost}
        onClose={() => setActiveModalPost(null)}
        onRequestBooking={onRequestBookingWithService}
      />

    </section>
  );
};
