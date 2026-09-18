import React from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Star, CheckCircle2, MessageSquare, Quote } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>تقييمات وتجارب أهالي الطائف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            ماذا يقول عملاؤنا في مختلف أحياء الطائف؟
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            أكثر من 500 عميل يثقون في خدماتنا في شهار، الوسام، الحوية، السداد، وغيرها.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between text-right relative overflow-hidden"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <div className="text-xs font-bold text-blue-600 mb-2">
                  الخدمة: {review.serviceTitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {review.neighborhood}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
