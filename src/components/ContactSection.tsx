'use client';

import React from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Building,
  Send
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ContactSectionProps {
  onOpenEmployerForm: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEmployerForm }) => {
  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            Contact Jobtrica Workforce Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Reach out to our helpline for candidate job applications, manpower agency partnerships, or industrial worker sourcing requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-5 flex items-start gap-4 hover:border-[#0B3C5D]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#0B3C5D] text-white flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Call Helpline</div>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-base font-extrabold text-[#0B3C5D] hover:text-[#F97316] transition-colors block">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-5 flex items-start gap-4 hover:border-[#0B3C5D]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Instant WhatsApp Chat</div>
                <a 
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-extrabold text-emerald-700 hover:underline block"
                >
                  Click to Chat on WhatsApp
                </a>
                <p className="text-xs text-slate-500">Quick response for candidates & agencies.</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-5 flex items-start gap-4 hover:border-[#0B3C5D]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#F97316] text-white flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Email Support</div>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-[#0B3C5D] hover:underline block">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-5 flex items-start gap-4 hover:border-[#0B3C5D]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#E1306C] text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Instagram Page</div>
                <a 
                  href="https://www.instagram.com/jobtrica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-[#0B3C5D] hover:underline block"
                >
                  instagram.com/jobtrica
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Stay connected and see our updates.</p>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-5 flex items-start gap-4 hover:border-[#0B3C5D]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Based in Ahmedabad, Gujarat</div>
                <p className="text-xs font-semibold text-slate-800 leading-relaxed mt-0.5">
                  Serving Sanand, Naroda, Vatva, Odhav & Changodar industrial estates
                </p>
                <div className="mt-2 text-[11px] text-[#0B3C5D] font-bold">
                  Sourcing Hubs: Sanand, Naroda, Vatva, Odhav, Changodar (Ahmedabad, Gujarat)
                </div>
              </div>
            </div>

            {/* Employer Requirement Banner */}
            <div className="bg-[#0B3C5D] text-white rounded-[12px] p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase">
                <Building className="w-4 h-4" />
                Industrial Employers & Factory Owners
              </div>
              <h4 className="text-base font-extrabold">Need Manpower Sourcing for Your Factory?</h4>
              <p className="text-xs text-slate-200">Submit your industrial worker demand via Google Form and our deployment manager will call you back.</p>
              <button
                onClick={onOpenEmployerForm}
                className="btn-orange-prominent w-full justify-center text-xs py-2.5"
              >
                <Send className="w-4 h-4" />
                <span>Submit Employer Worker Requirement</span>
              </button>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps Mockup */}
          <div className="lg:col-span-7 h-full min-h-[450px]">
            <div className="bg-slate-100 rounded-[16px] overflow-hidden border border-slate-200 shadow-md h-full relative">
              <iframe
                title="Jobtrica Head Office Map Location"
                src={siteConfig.contact.googleMapsEmbed}
                width="100%"
                height="100%"
                className="min-h-[450px] border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
