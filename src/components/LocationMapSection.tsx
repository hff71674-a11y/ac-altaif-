import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Navigation, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Maximize2
} from 'lucide-react';
import { 
  APIProvider, 
  Map, 
  AdvancedMarker, 
  Pin, 
  InfoWindow 
} from '@vis.gl/react-google-maps';

const TAIF_OKAZ_COORDS = { lat: 21.2678, lng: 40.4158 };
const EXACT_ADDRESS_STRING = 'شارع عكاظ، 26523، الشرقية، الطائف 26523، المملكة العربية السعودية';
const GOOGLE_MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية')}`;

export const LocationMapSection: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  return (
    <section className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>مقر الفني وتفاصيل التواصل المباشر</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            موقعنا في قلب الطائف - شارع عكاظ
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            نرحب باتصالاتكم واستفساراتكم على مدار 24 ساعة لخدمتكم فوراً في جميع أحياء ومحافظة الطائف.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between text-right">
            <div className="space-y-6">
              
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1">
                  فني تركيب واصلاح مكيفات سبليت بالطائف
                </h3>
                <p className="text-xs text-slate-500">
                  خدمة معتمدة ومتنقلة لجميع أنواع التكييف (سبليت، دولابي، شباك)
                </p>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">العنوان الكامل:</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                    شارع عكاظ، 26523، الشرقية، الطائف 26523، المملكة العربية السعودية
                  </div>
                  <div className="text-[11px] text-blue-600 font-semibold mt-1">
                    الرمز البريدي: 26523
                  </div>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">رقم الهاتف المباشر والواتساب:</div>
                  <div className="text-base font-black text-slate-900 mt-0.5 dir-ltr text-right">
                    0568663745
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
                    متاح للاتصالات والاستفسارات 24/7
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">أوقات العمل:</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                    24 ساعة يومياً (طوال أيام الأسبوع بلا انقطاع)
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    فريق طوارئ مناوب ليلاً ونهاراً
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-3 mt-6">
              <a
                href="tel:0568663745"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>اتصال مباشر</span>
              </a>
              <a
                href="https://wa.me/966568663745"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب فوري</span>
              </a>
            </div>
          </div>

            {/* Interactive Google Map Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between overflow-hidden relative">
            <div className="text-right mb-4 flex items-center justify-between">
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>فتح في تطبيق خرائط Google</span>
              </a>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-0.5">
                  موقعنا بدقة: شارع عكاظ، الشرقية، الطائف
                </h3>
                <p className="text-xs text-slate-500">
                  دبوس الموقع الدقيق لمركز الفني مع توجيه مباشر للملاحة
                </p>
              </div>
            </div>

            {/* Interactive Map Container */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              {apiKey ? (
                <APIProvider apiKey={apiKey} solutionChannel="GMP_visgl_reactgooglemaps_v1_default">
                  <Map
                    defaultCenter={TAIF_OKAZ_COORDS}
                    defaultZoom={15}
                    mapId="taif_ac_map"
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                    className="w-full h-full"
                    internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
                  >
                    <AdvancedMarker 
                      position={TAIF_OKAZ_COORDS}
                      onClick={() => setShowInfoWindow(!showInfoWindow)}
                      title="شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية"
                    >
                      <Pin 
                        background="#dc2626" 
                        glyphColor="#ffffff" 
                        borderColor="#991b1b" 
                      />
                    </AdvancedMarker>

                    {showInfoWindow && (
                      <InfoWindow
                        position={TAIF_OKAZ_COORDS}
                        onCloseClick={() => setShowInfoWindow(false)}
                      >
                        <div className="p-2 text-right dir-rtl max-w-[240px]">
                          <div className="flex items-center gap-1 text-red-600 font-extrabold text-xs mb-1">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>مقر الفني - شارع عكاظ</span>
                          </div>
                          <div className="text-[11px] text-slate-700 font-semibold mb-1">
                            شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية
                          </div>
                          <div className="text-[10px] text-emerald-700 font-medium mb-2 bg-emerald-50 p-1 rounded">
                            خدمة متنقلة 24/7 لجميع أحياء الطائف
                          </div>
                          <div className="flex gap-1.5">
                            <a
                              href="tel:0568663745"
                              className="flex-1 text-center bg-blue-600 text-white font-bold text-[11px] py-1 px-2 rounded-md hover:bg-blue-700"
                            >
                              اتصال
                            </a>
                            <a
                              href={GOOGLE_MAPS_SEARCH_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center bg-emerald-600 text-white font-bold text-[11px] py-1 px-2 rounded-md hover:bg-emerald-700"
                            >
                              توجيه
                            </a>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </Map>
                </APIProvider>
              ) : (
                <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mb-4">
                    نغطي جميع أحياء الطائف: الحوية، شهار، السداد، الوسام، الوشحاء، الفيصلية وغيرها.
                  </p>
                  <a
                    href={GOOGLE_MAPS_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>فتح الموقع في خرائط Google مباشرة</span>
                  </a>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>إمكانية الدفع عند المعاينة وإتمام الصيانة</span>
              </span>
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-bold inline-flex items-center gap-1"
              >
                <span>اتجاهات القيادة إلى شارع عكاظ</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
