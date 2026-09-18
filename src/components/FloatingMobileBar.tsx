import React from 'react';
import { PhoneCall, MessageSquare, Copy, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FloatingMobileBarProps {
  onCopyServiceDetails: () => void;
  hasCopied: boolean;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  onCopyServiceDetails,
  hasCopied
}) => {
  return (
    <aside aria-label="شريط الاتصال السريع" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5 items-center">
        
        {/* Direct Call Button */}
        <a
          href="tel:0568663745"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-3 rounded-xl text-xs sm:text-sm font-black shadow-md shadow-blue-600/20 active:scale-95 transition-all text-center"
        >
          <PhoneCall className="w-4 h-4 shrink-0" />
          <span>اتصال: 0568663745</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/966568663745?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-3 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>محادثة واتساب</span>
        </a>

      </div>
    </aside>
  );
};
