'use client';

import React from 'react';
import { Shield, PhoneCall, Mail, MapPin, ExternalLink, HeartHandshake, Briefcase } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenCandidateForm: () => void;
  onOpenAgencyForm: () => void;
  onOpenEmployerForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCandidateForm,
  onOpenAgencyForm,
  onOpenEmployerForm
}) => {
  return (
    <footer className="bg-[#07273E] text-slate-300 pt-16 pb-8 border-t-4 border-[#F97316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-white font-extrabold shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight leading-none block">
                  VIRAAT
                </span>
                <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest block">
                  Workforce Solutions
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Connecting Indian industrial manufacturing, warehousing, and logistics enterprises with reliable blue-collar workforce and partner manpower agencies.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-[#F97316] uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Zero Candidate Fee Policy
              </div>
              <p className="text-[11px] text-slate-300">
                We strictly do NOT charge any registration or placement fees from job applicants.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#about" className="hover:text-[#F97316] transition-colors">About Us</a></li>
              <li><a href="#industries" className="hover:text-[#F97316] transition-colors">Industries We Serve</a></li>
              <li><a href="#openings" className="hover:text-[#F97316] transition-colors">Current Openings</a></li>
              <li><a href="#how-it-works" className="hover:text-[#F97316] transition-colors">How It Works</a></li>
              <li><a href="#candidates" className="hover:text-[#F97316] transition-colors">Candidate Zone</a></li>
              <li><a href="#agencies" className="hover:text-[#F97316] transition-colors">Agency Network</a></li>
              <li><a href="#contact" className="hover:text-[#F97316] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Sourcing Forms */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Google Forms</h3>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <button 
                  onClick={onOpenCandidateForm}
                  className="hover:text-[#F97316] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Candidate Registration Form</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenAgencyForm}
                  className="hover:text-[#F97316] transition-colors flex items-center gap-1.5 text-left"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Agency Partnership Form</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenEmployerForm}
                  className="hover:text-[#F97316] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Employer Requirement Form</span>
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Industrial Hubs:</div>
              <div className="flex flex-wrap gap-1 text-[10px] text-slate-300">
                <span className="bg-white/10 px-2 py-0.5 rounded">Gurgaon</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Pune</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Sanand</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Chennai</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Hosur</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
