import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDedicatedPage } from './components/ServiceDedicatedPage';
import { TaifAreasDedicatedPage } from './components/TaifAreasDedicatedPage';
import { AboutTechnicianDedicatedPage } from './components/AboutTechnicianDedicatedPage';
import { DiagnosticDedicatedPage } from './components/DiagnosticDedicatedPage';
import { BookingDedicatedPage } from './components/BookingDedicatedPage';
import { GuaranteesDedicatedPage } from './components/GuaranteesDedicatedPage';
import { TaifAreasSection } from './components/TaifAreasSection';
import { DiagnosticTool } from './components/DiagnosticTool';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingFormSection } from './components/BookingFormSection';
import { LocationMapSection } from './components/LocationMapSection';
import { CustomerReviews } from './components/CustomerReviews';
import { FaqSection } from './components/FaqSection';
import { MaintenanceBlogSection } from './components/MaintenanceBlogSection';
import { ImageGallery } from './components/ImageGallery';
import { QuickContactForm } from './components/QuickContactForm';
import { SeoAndSitemapModal } from './components/SeoAndSitemapModal';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/servicesData';

type SubpageRoute = 'home' | 'service' | 'areas' | 'about' | 'diagnostic' | 'booking' | 'guarantees';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<SubpageRoute>('home');
  const [dedicatedService, setDedicatedService] = useState<ServiceItem | null>(null);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState<boolean>(false);
  const [hasCopiedDetails, setHasCopiedDetails] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledArea, setPrefilledArea] = useState<string>('');

  // Handle Hash routing for independent subpages:
  // #/service/:id, #/areas, #/about, #/diagnostic, #/booking, #/guarantees, #/
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.startsWith('#/service/')) {
        const serviceId = hash.replace('#/service/', '');
        const matched = SERVICES_DATA.find((s) => s.id === serviceId);
        if (matched) {
          setDedicatedService(matched);
          setCurrentRoute('service');
          return;
        }
      }

      if (hash === '#/areas' || hash === '#areas') {
        setCurrentRoute('areas');
        setDedicatedService(null);
        return;
      }

      if (hash === '#/about' || hash === '#about') {
        setCurrentRoute('about');
        setDedicatedService(null);
        return;
      }

      if (hash === '#/diagnostic' || hash === '#diagnostic') {
        setCurrentRoute('diagnostic');
        setDedicatedService(null);
        return;
      }

      if (hash === '#/booking' || hash === '#booking') {
        setCurrentRoute('booking');
        setDedicatedService(null);
        return;
      }

      if (hash === '#/guarantees' || hash === '#guarantees') {
        setCurrentRoute('guarantees');
        setDedicatedService(null);
        return;
      }

      if (hash === '#maintenance-tips' || hash === '#/tips' || hash === '#/blog') {
        setCurrentRoute('home');
        setDedicatedService(null);
        setTimeout(() => {
          const el = document.getElementById('maintenance-tips');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }

      // Default Home
      setCurrentRoute('home');
      setDedicatedService(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Explicit Copy Service Details requested by user:
  const handleCopyServiceDetails = () => {
    const details = `🛠️ خدمات فني تركيب وإصلاح مكيفات سبليت معتمد - الطائف 🛠️
📞 هاتف / واتساب: 0568663745
📍 العنوان: شارع عكاظ، 26523، الشرقية، الطائف 26523، السعودية
⏰ نخدمكم على مدار الساعة (24/7) في جميع أحياء الطائف - نجيك لحد بابك في نفس اليوم

✨ خدماتنا تشمل:
✓ تنظيف وغسيل المكيفات السبلت داخلي وخارجي بأحدث الأجهزة وبدون فوضى
✓ فك وتركيب ونقل المكيفات بوزنية ميزان ماء دقيقة
✓ تعبئة الفريون وقياس ضغط الغاز بفريون أمريكي أصلي
✓ معالجة تسريب الماء والأصوات المزعجة والاهتزاز
✓ صيانة الكمبروسر واللوحات والفلاتر وحل مشاكل التبريد
✓ تعقيم وتعطير المكيف بمواد صحية آمنة

لماذا نحن؟
◾ فنيين متخصصين وخبرة طويلة
◾ أجهزة غسيل حديثة بدون فوضى
◾ نجيك لحد بابك في نفس اليوم
◾ ضمان على الصيانة وسعر منافس

برودة تدوم ونظافة تشوفها
اتصل الآن واحجز صيانة مكيفك: 0568663745`;

    navigator.clipboard.writeText(details);
    setHasCopiedDetails(true);
    setTimeout(() => {
      setHasCopiedDetails(false);
    }, 4000);
  };

  const handleOpenDedicatedServicePage = (service: ServiceItem) => {
    setDedicatedService(service);
    setCurrentRoute('service');
    window.location.hash = `#/service/${service.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPage = (page: string) => {
    if (page === 'home' || page === '') {
      setCurrentRoute('home');
      setDedicatedService(null);
      window.location.hash = '';
    } else if (page.startsWith('split-ac-')) {
      const matched = SERVICES_DATA.find((s) => s.id === page);
      if (matched) {
        handleOpenDedicatedServicePage(matched);
        return;
      }
    } else if (page === 'split-ac-services') {
      setCurrentRoute('home');
      window.location.hash = '#split-ac-services';
      setTimeout(() => {
        const el = document.getElementById('split-ac-services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    } else if (page === 'maintenance-tips' || page === 'tips' || page === 'blog') {
      setCurrentRoute('home');
      window.location.hash = '#maintenance-tips';
      setTimeout(() => {
        const el = document.getElementById('maintenance-tips');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    } else {
      setCurrentRoute(page as SubpageRoute);
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentRoute('home');
    setDedicatedService(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'فني تركيب واصلاح مكيفات سبليت بالطائف | 0568663745';
  };

  const handleOpenBooking = () => {
    handleNavigateToPage('booking');
  };

  const handleRequestBookingWithService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    handleOpenBooking();
  };

  const handleSelectAreaForBooking = (areaName: string) => {
    setPrefilledArea(areaName);
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Cairo',sans-serif] relative selection:bg-blue-600 selection:text-white" dir="rtl">
      
      {/* Header */}
      <Header
        onOpenSeoAudit={() => setIsSeoModalOpen(true)}
        onCopyServiceDetails={handleCopyServiceDetails}
        hasCopied={hasCopiedDetails}
        onSelectService={(serviceId) => {
          const srv = SERVICES_DATA.find((s) => s.id === serviceId);
          if (srv) handleOpenDedicatedServicePage(srv);
        }}
        onNavigateToPage={handleNavigateToPage}
      />

      <main>
        {/* Route 1: Dedicated Standalone Service Page */}
        {currentRoute === 'service' && dedicatedService && (
          <ServiceDedicatedPage
            service={dedicatedService}
            onBackToHome={handleBackToHome}
            onSelectOtherService={handleOpenDedicatedServicePage}
            onRequestBooking={handleRequestBookingWithService}
            onCopyServiceDetails={handleCopyServiceDetails}
            hasCopied={hasCopiedDetails}
          />
        )}

        {/* Route 2: Dedicated Taif Areas Directory Subpage */}
        {currentRoute === 'areas' && (
          <TaifAreasDedicatedPage
            onBackToHome={handleBackToHome}
            onSelectAreaForBooking={handleSelectAreaForBooking}
            onRequestServiceBooking={handleRequestBookingWithService}
          />
        )}

        {/* Route 3: Dedicated About Technician & Workshop Subpage */}
        {currentRoute === 'about' && (
          <AboutTechnicianDedicatedPage
            onBackToHome={handleBackToHome}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {/* Route 4: Dedicated Smart AC Troubleshooting & Diagnostic Subpage */}
        {currentRoute === 'diagnostic' && (
          <DiagnosticDedicatedPage
            onBackToHome={handleBackToHome}
            onRequestBooking={handleRequestBookingWithService}
          />
        )}

        {/* Route 5: Dedicated Booking Subpage */}
        {currentRoute === 'booking' && (
          <BookingDedicatedPage
            onBackToHome={handleBackToHome}
            initialService={prefilledService}
            initialArea={prefilledArea}
          />
        )}

        {/* Route 6: Dedicated Guarantees & Pricing Subpage */}
        {currentRoute === 'guarantees' && (
          <GuaranteesDedicatedPage
            onBackToHome={handleBackToHome}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {/* Route 7: Main Homepage View */}
        {currentRoute === 'home' && (
          <>
            {/* Hero Section with Animated Image Slider & Slogans */}
            <Hero
              onCopyServiceDetails={handleCopyServiceDetails}
              hasCopied={hasCopiedDetails}
              onOpenBooking={handleOpenBooking}
              onNavigateToService={(serviceId) => {
                const srv = SERVICES_DATA.find((s) => s.id === serviceId);
                if (srv) handleOpenDedicatedServicePage(srv);
              }}
              onNavigateToPage={handleNavigateToPage}
            />

            {/* 6 Core Split AC Services Section */}
            <ServicesSection
              onSelectService={handleOpenDedicatedServicePage}
              onRequestBookingWithService={handleRequestBookingWithService}
            />

            {/* Why Choose Us & Guarantees */}
            <WhyChooseUs />

            {/* Taif Coverage Areas Section */}
            <TaifAreasSection
              onSelectAreaForBooking={handleSelectAreaForBooking}
            />

            {/* Smart AC Troubleshooter / Diagnostic Tool */}
            <DiagnosticTool
              onSelectServiceBooking={handleRequestBookingWithService}
            />

            {/* Appointment Booking Form with Slogan */}
            <BookingFormSection
              initialService={prefilledService}
              initialArea={prefilledArea}
            />

            {/* Location & Map Section (Okaz Street, Taif) */}
            <LocationMapSection />

            {/* Verified Customer Reviews */}
            <CustomerReviews />

            {/* Realistic Image Gallery: Cleaning & Installation in Taif */}
            <ImageGallery />

            {/* Maintenance Tips Blog Section (SEO & Practical Advice) */}
            <MaintenanceBlogSection
              onRequestBookingWithService={handleRequestBookingWithService}
            />

            {/* FAQ Section */}
            <FaqSection />

            {/* Quick Contact Form at the foot of homepage */}
            <QuickContactForm />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenSeoAudit={() => setIsSeoModalOpen(true)}
        onCopyServiceDetails={handleCopyServiceDetails}
        hasCopied={hasCopiedDetails}
        onSelectService={(serviceId) => {
          const srv = SERVICES_DATA.find((s) => s.id === serviceId);
          if (srv) handleOpenDedicatedServicePage(srv);
        }}
        onNavigateToPage={handleNavigateToPage}
      />

      {/* Floating Action Bar for Mobile Screens */}
      <FloatingMobileBar
        onCopyServiceDetails={handleCopyServiceDetails}
        hasCopied={hasCopiedDetails}
      />

      {/* SEO & Search Console Audit Modal */}
      <SeoAndSitemapModal
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />

    </div>
  );
}
