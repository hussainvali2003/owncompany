'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href={siteConfig.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageSquare className="w-5 h-5 fill-white/20" />
      <span className="text-sm font-semibold hidden md:inline">Need Workers? Chat on WhatsApp</span>
    </a>
  );
};
