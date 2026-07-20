'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, PhoneCall, Briefcase, Handshake } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  onOpenCandidateForm: () => void;
  onOpenAgencyForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCandidateForm, onOpenAgencyForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#0B3C5D] text-slate-200 text-xs py-2 px-4 text-center border-b border-white/10 font-medium flex items-center justify-between max-w-7xl mx-auto hidden sm:flex">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#F97316]" />
          <span>100% Free Job Applications — We Never Charge Candidates Any Fees</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors flex items-center gap-1">
            <PhoneCall className="w-3 h-3 text-[#F97316]" />
            <span>Call: {siteConfig.contact.phone}</span>
          </a>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Mon - Sat: 9:00 AM - 7:00 PM</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-md border-b border-slate-200/80 py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0B3C5D] flex items-center justify-center text-white shadow-md group-hover:bg-[#F97316] transition-colors">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#0B3C5D] tracking-tight leading-none block">
                VIRAAT
              </span>
              <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest block">
                Workforce Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-[#0B3C5D] transition-colors">About Us</a>
            <a href="#industries" className="hover:text-[#0B3C5D] transition-colors">Industries</a>
            <a href="#openings" className="hover:text-[#0B3C5D] transition-colors flex items-center gap-1">
              <span>Openings</span>
              <span className="bg-[#F97316]/10 text-[#F97316] text-[10px] font-bold px-1.5 py-0.5 rounded">HOT</span>
            </a>
            <a href="#how-it-works" className="hover:text-[#0B3C5D] transition-colors">How It Works</a>
            <a href="#candidates" className="hover:text-[#0B3C5D] transition-colors">For Candidates</a>
            <a href="#agencies" className="hover:text-[#0B3C5D] transition-colors">For Agencies</a>
            <a href="#contact" className="hover:text-[#0B3C5D] transition-colors">Contact</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAgencyForm}
              className="btn-secondary-corporate text-xs py-2.5 px-4"
            >
              <Handshake className="w-4 h-4" />
              <span>Partner With Us</span>
            </button>
            <button
              onClick={onOpenCandidateForm}
              className="btn-primary-corporate text-xs py-2.5 px-4"
            >
              <Briefcase className="w-4 h-4" />
              <span>Apply for Jobs</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0B3C5D] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col gap-3 font-semibold text-slate-700 text-base">
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100"
              >
                About Us
              </a>
              <a 
                href="#industries" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100"
              >
                Industries We Serve
              </a>
              <a 
                href="#openings" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Current Openings</span>
                <span className="bg-[#F97316] text-white text-xs px-2 py-0.5 rounded-full font-bold">Active</span>
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100"
              >
                How It Works
              </a>
              <a 
                href="#candidates" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100"
              >
                For Candidates
              </a>
              <a 
                href="#agencies" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100"
              >
                For Agencies
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100"
              >
                Contact Us
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCandidateForm();
                }}
                className="btn-primary-corporate w-full justify-center text-sm py-3"
              >
                <Briefcase className="w-4 h-4" />
                <span>Apply for Jobs</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAgencyForm();
                }}
                className="btn-secondary-corporate w-full justify-center text-sm py-3"
              >
                <Handshake className="w-4 h-4" />
                <span>Partner With Us</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
