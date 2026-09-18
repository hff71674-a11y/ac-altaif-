import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  Wrench, 
  Clock, 
  Sparkles, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { TAIF_AREAS_DATA } from '../data/taifAreasData';

export const QuickContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'غسيل وتنظيف مكيف سبليت بأجهزة بدون فوضى',
    'فك ونقل وتركيب مكيف سبليت بوزنية دقيقة',
    'شحن فريون أمريكي أصلي مع كشف تسريب',
    'معالجة تسريب المياه وتطهير مجرى الصرف',
    'صيانة كمبروسر واستبدال كابستور وقواطع',
    'عزل حراري وتمديد مواسير نحاس مولر',
    'فحص وصيانة عامة / استفسار آخر'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('يرجى كتابة الاسم');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      setErrorMessage('يرجى إدخال رقم جوال صحيح للتواصل');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('يرجى كتابة تفاصيل استفسارك أو مشكلة المكيف');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant direct web submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Store in localStorage for audit/history
      try {
        const existing = JSON.parse(localStorage.getItem('quick_inquiries') || '[]');
        existing.push({
          ...formData,
          createdAt: new Date().toISOString(),
          id: 'INQ-' + Date.now()
        });
        localStorage.setItem('quick_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      area: '',
      serviceType: '',
      message: ''
    });
    setIsSuccess(false);
    setErrorMessage('');
  };

  return (
    <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-t border-slate-800" id="quick-contact-section">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>تواصل فوري ومباشر دون تطبيقات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            نموذج الاستفسار السريع (Quick Contact)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            أرسل استفسارك أو طلب صيانة مكيفك مباشرة وسيقوم الفني بالاتصال بك هاتفياً في غضون دقائق معدودة لمساعدتك فوراً.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-3xl p-8 sm:p-10 text-center max-w-xl mx-auto shadow-2xl space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-black text-white">
              تم استلام استفسارك بنجاح!
            </h3>
            
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
              شكراً لك يا <span className="font-bold text-white">{formData.name}</span>. تم تسجيل استفسارك وسيقوم الفني بالاتصال على رقم جوالك <span className="font-bold text-white dir-ltr inline-block">({formData.phone})</span> فوراً.
            </p>

            <div className="bg-emerald-900/40 rounded-2xl p-4 text-xs text-emerald-300 text-right space-y-1.5 border border-emerald-800/60">
              <div>• <span className="font-bold">الحي / المنطقة:</span> {formData.area || 'جميع أحياء الطائف'}</div>
              <div>• <span className="font-bold">نوع الخدمة:</span> {formData.serviceType || 'استفسار عام'}</div>
              <div>• <span className="font-bold">الرسالة:</span> "{formData.message}"</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                إرسال استفسار آخر
              </button>

              <a
                href="tel:0568663745"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-black transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>اتصال فوري: 0568663745</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="bg-rose-950/60 border border-rose-500/40 text-rose-200 p-3 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Field 1: Name */}
                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-bold text-slate-300">
                    الاسم الكريم <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: أبو فهد"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Field 2: Phone */}
                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-bold text-slate-300">
                    رقم الجوال <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="05XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 text-right focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Field 3: Area */}
                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-bold text-slate-300">
                    الحي بالطائف
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="">اختر الحي (اختياري)</option>
                    {TAIF_AREAS_DATA.map((area) => (
                      <option key={area.id} value={area.name}>
                        {area.name} - {area.distanceFromBase}
                      </option>
                    ))}
                    <option value="حي آخر / ضواحي الطائف">حي آخر / ضواحي الطائف</option>
                  </select>
                </div>

                {/* Field 4: Service Type */}
                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-bold text-slate-300">
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="">اختر الخدمة (اختياري)</option>
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Field 5: Message */}
              <div className="space-y-1.5 text-right">
                <label className="text-xs font-bold text-slate-300">
                  تفاصيل الاستفسار أو المشكلة التي تواجهها <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="اكتب استفسارك هنا (مثال: المكيف يقطر ماء داخل الغرفة، أو أحتاج غسيل مكيفين سبليت بحي شهار وموعد الزيارة المناسب)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Assurance note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>الرد خلال دقائق • نخدمك على مدار 24 ساعة في كافة أحياء الطائف</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-black text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>إرسال الاستفسار مباشرة</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
