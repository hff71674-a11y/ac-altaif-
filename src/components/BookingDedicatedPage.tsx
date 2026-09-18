import React, { useState, useEffect } from 'react';
import { 
  CalendarCheck, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  User,
  Phone,
  FileText
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TAIF_AREAS_DATA } from '../data/taifAreasData';
import { NeighborhoodItem } from '../types';

interface BookingDedicatedPageProps {
  onBackToHome: () => void;
  initialService?: string;
  initialArea?: string;
}

export const BookingDedicatedPage: React.FC<BookingDedicatedPageProps> = ({
  onBackToHome,
  initialService = '',
  initialArea = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || SERVICES_DATA[0].title);
  const [selectedArea, setSelectedArea] = useState(initialArea || TAIF_AREAS_DATA[0].name);
  const [acCount, setAcCount] = useState('1');
  const [preferredTime, setPreferredTime] = useState('اليوم (في أقرب وقت ممكن)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'حجز موعد صيانة مكيف سبليت بالطائف | نجيك لبابك في نفس اليوم 0568663745';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingText = `السلام عليكم ورحمة الله،
أود تأكيد حجز موعد صيانة مكيفات سبليت بالطائف:
👤 الاسم: ${customerName || 'عميل كريم'}
📞 رقم الجوال: ${phoneNumber || 'غير محدد'}
📍 الحي بالطائف: ${selectedArea}
🛠️ نوع الخدمة المطلوبة: ${selectedService}
🔢 عدد المكيفات: ${acCount}
⏰ الوقت المفضل: ${preferredTime}
📝 ملاحظات إضافية: ${notes || 'لا يوجد'}

الموقع للمحل: شارع عكاظ، الشرقية، الطائف.`;

    const whatsappUrl = `https://wa.me/966568663745?text=${encodeURIComponent(bookingText)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12" id="booking-dedicated-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
          >
            الرئيسية
          </button>
          <span>/</span>
          <span className="text-blue-700 font-bold">حجز موعد فني مكيفات سبليت بالطائف</span>
        </nav>

        {/* Back and Fast Call Header */}
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
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-md transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اتصل الآن: 0568663745</span>
          </a>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white text-right space-y-3 mb-8 shadow-xl">
          <span className="inline-block bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full">
            نجيك لحد بابك في نفس اليوم بجميع أحياء الطائف
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            حجز موعد صيانة وغسيل مكيفات سبليت بالطائف
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            املأ بيانات الحجز أدناه ليصلك الفني المعتمد في الموعد المحدد مع كافة معدات الغسيل بدون فوضى وشحن الفريون وقطع الغيار الأصلية.
          </p>
          <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5 pt-1">
            <Sparkles className="w-4 h-4" />
            <span>برودة تدوم ونظافة تشوفها | شارع عكاظ، الطائف</span>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 text-right">
          
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                تم تجهيز وإرسال طلب الحجز بنجاح!
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                تم توجيه بيانات حجزك مباشرة إلى واتساب الفني المعتمد (0568663745). سيتواصل معك الفني لتأكيد الوصول لبابك في نفس اليوم.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <a
                  href="tel:0568663745"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-sm"
                >
                  اتصال مباشر للتأكيد: 0568663745
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-100 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm"
                >
                  تعديل بيانات الحجز
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Customer Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    الاسم الكريم:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="أدخل اسمك الكريم"
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    رقم الجوال (للتواصل وتأكيد الوصول):
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="مثال: 05xxxxxxxx"
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 font-mono text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    الخدمة المطلوبة لمكيف السبليت:
                  </label>
                  <div className="relative">
                    <Wrench className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Taif Area Select */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    الحي أو المنطقة بالطائف:
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white"
                    >
                      {TAIF_AREAS_DATA.map((area: NeighborhoodItem) => (
                        <option key={area.id} value={area.name}>
                          {area.name} ({area.distanceFromBase})
                        </option>
                      ))}
                      <option value="حي آخر بالطائف">حي آخر أو ضواحي الطائف</option>
                    </select>
                  </div>
                </div>

                {/* AC Count */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    عدد المكيفات المطلوب صيانتها:
                  </label>
                  <select
                    value={acCount}
                    onChange={(e) => setAcCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white"
                  >
                    <option value="مكيف واحد (1)">مكيف واحد (1)</option>
                    <option value="مكيفين (2)">مكيفين (2)</option>
                    <option value="3 مكيفات">3 مكيفات</option>
                    <option value="4 إلى 6 مكيفات (عرض خصم خاص)">4 إلى 6 مكيفات (عرض خصم خاص)</option>
                    <option value="أكثر من 6 مكيفات (مشروع / عمارة / فندق)">أكثر من 6 مكيفات (مشروع / عمارة / فندق)</option>
                  </select>
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    الموعد المفضل لزيارة الفني:
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white"
                    >
                      <option value="اليوم (في أقرب وقت ممكن - نفس اليوم)">اليوم (في أقرب وقت ممكن - نفس اليوم)</option>
                      <option value="اليوم مساءً (بعد العصر)">اليوم مساءً (بعد العصر)</option>
                      <option value="غداً صباحاً">غداً صباحاً</option>
                      <option value="غداً مساءً">غداً مساءً</option>
                      <option value="حسب التنسيق الهاتفي">حسب التنسيق الهاتفي</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Extra Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-800">
                  وصف العطل أو أي ملاحظات إضافية (اختياري):
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="مثال: المكيف ينقط ماء داخل الصالة، أو المكيف يحتاج غسيل وشحن فريون أصلي..."
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>تأكيد الحجز وإرسال الطلب للفني المعتمد</span>
                </button>

                <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ضمان معتمد وسعر منافس بدون رسوم خفية</span>
                  </span>
                  <span>هاتف مباشر: 0568663745</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </article>
  );
};
