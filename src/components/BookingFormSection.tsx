import React, { useState, useEffect } from 'react';
import { TAIF_AREAS_DATA } from '../data/taifAreasData';
import { SERVICES_DATA } from '../data/servicesData';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { 
  Calendar, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Wrench,
  Sparkles,
  Send
} from 'lucide-react';

interface BookingFormSectionProps {
  initialService?: string;
  initialArea?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialService = '',
  initialArea = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: initialArea || TAIF_AREAS_DATA[0].name,
    acType: 'مكيف سبليت (جداري)',
    serviceNeeded: initialService || SERVICES_DATA[0].title,
    urgency: 'عاجل اليوم في نفس اليوم',
    notes: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialArea) {
      setFormData(prev => ({ ...prev, neighborhood: initialArea }));
    }
  }, [initialArea]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;

    try {
      // Save booking request to Firestore
      await addDoc(collection(db, 'bookings'), {
        fullName: formData.name.trim() || 'عميل في الطائف',
        phone: formData.phone.trim(),
        serviceType: formData.serviceNeeded,
        neighborhood: formData.neighborhood,
        acType: formData.acType,
        urgency: formData.urgency,
        notes: formData.notes || '',
        createdAt: serverTimestamp(),
        status: 'pending'
      });
    } catch (error) {
      console.error('Error recording booking in Firestore:', error);
    }

    // Build structured WhatsApp message
    const message = `السلام عليكم ورحمة الله،
أرغب بحجز فني تكييف في الطائف:
👤 الاسم: ${formData.name || 'عميل كريم'}
📞 رقم الجوال: ${formData.phone}
📍 الحي في الطائف: ${formData.neighborhood}
❄️ نوع المكيف: ${formData.acType}
🛠️ الخدمة المطلوبة: ${formData.serviceNeeded}
⏰ الموعد المفضل: ${formData.urgency}
📝 ملاحظات إضافية: ${formData.notes || 'لا يوجد'}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/966568663745?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-slate-200" id="booking">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>حجز موعد فني تكييف مباشر بالطائف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            برودة تدوم ونظافة تشوفها
          </h2>
          <p className="mt-1 text-base font-bold text-blue-700">
            اتصل الآن واحجز صيانة مكيفك | نجيك لحد بابك في نفس اليوم
          </p>
          <p className="mt-2 text-sm text-slate-600">
            املأ بياناتك وسيتم التواصل معك مباشرة لتأكيد موعد زيارة الفني في جميع أحياء الطائف.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs text-right">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-900 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-950">
                تم إرسال طلبكم بنجاح!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                تم تحويل طلبك مباشرة إلى واتساب الفني المعتمد (0568663745). سيتواصل معك الفني لتأكيد موعد الزيارة لموقعك في الطائف.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  إرسال طلب موعد آخر
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الاسم الكريم (اختياري):
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: أبو فهد"
                    className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    رقم الجوال للتواصل <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05xxxxxxxx"
                    className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Neighborhood without estimated arrival */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الحي بالطائف <span className="text-red-500">*</span>:
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                  >
                    {TAIF_AREAS_DATA.map((area) => (
                      <option key={area.id} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                    <option value="حي آخر بالطائف">حي آخر داخل أو خارج الطائف</option>
                  </select>
                </div>

                {/* AC Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    نوع جهاز التكييف:
                  </label>
                  <select
                    value={formData.acType}
                    onChange={(e) => setFormData({ ...formData, acType: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                  >
                    <option value="مكيف سبليت (جداري)">مكيف سبليت (جداري)</option>
                    <option value="مكيف دولابي (كاسيت / أرضي)">مكيف دولابي (كاسيت / أرضي)</option>
                    <option value="مكيف شباك">مكيف شباك</option>
                    <option value="أكثر من مكيف (فحص وتأسيس)">أكثر من مكيف (فحص وتأسيس)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Needed */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الخدمة المطلوبة:
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="فحص شامل وصيانة عاجلة">فحص شامل وصيانة عاجلة</option>
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الموعد المفضل للزيارة:
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                  >
                    <option value="نجيك لحد بابك في نفس اليوم (عاجل)">نجيك لحد بابك في نفس اليوم (عاجل)</option>
                    <option value="خلال اليوم في الفترة المسائية">خلال اليوم في الفترة المسائية</option>
                    <option value="خلال اليوم في الفترة الصباحية">خلال اليوم في الفترة الصباحية</option>
                    <option value="غداً في أي وقت مناسب">غداً في أي وقت مناسب</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  تفاصيل إضافية أو وصف المشكلة:
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="مثال: غسيل مكيفين سبليت بدون فوضى، أو فحص تسريب ماء، أو تعبئة فريون..."
                  className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-right resize-none"
                ></textarea>
              </div>

              {/* Communication Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>إرسال الطلب وحجز موعد عبر الواتساب</span>
                </button>

                <a
                  href="tel:0568663745"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>اتصال فوري: 0568663745</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ضمان على الصيانة وسعر منافس - الدفع عند إتمام العمل والمعاينة</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
