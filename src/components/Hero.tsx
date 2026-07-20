'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, Handshake, ShieldCheck, CheckCircle2, Users, MapPin, Award } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenCandidateForm: () => void;
  onOpenAgencyForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCandidateForm, onOpenAgencyForm }) => {
  return (
    <section className="relative bg-[#0B3C5D] text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
        <Image
          src="/images/hero-banner.png"
          alt="Modern Indian industrial facility with blue collar workforce"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Gradient Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Stage 1 Startup Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs sm:text-sm font-semibold text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              <span>India&apos;s Preferred Blue-Collar Workforce Solutions Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Connecting Industries with <span className="text-[#F97316]">Reliable Workforce</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {siteConfig.subheadline}
            </p>

            {/* Feature Pills */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-slate-200">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                100% Free Candidate Hiring
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                Verified Agency Partners
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                Fast 48-Hour Turnaround
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenCandidateForm}
                className="btn-orange-prominent text-base py-4 px-8"
              >
                <Briefcase className="w-5 h-5" />
                <span>Apply for Jobs</span>
              </button>
              <button
                onClick={onOpenAgencyForm}
                className="btn-secondary-corporate bg-white/10 text-white border-white hover:bg-white hover:text-[#0B3C5D] text-base py-4 px-8"
              >
                <Handshake className="w-5 h-5" />
                <span>Partner With Us</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900/40 p-2">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/factory-workers.png"
                  alt="Indian factory workers and machine operators"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent"></div>
                
                {/* Floating Card Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 text-slate-800 shadow-xl border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#F97316] uppercase tracking-wider">Active Sourcing Hubs</p>
                      <p className="text-sm font-bold text-[#0B3C5D] mt-0.5">Pune • Gurgaon • Sriperumbudur • Sanand</p>
                    </div>
                    <div className="bg-[#0B3C5D] text-white p-2 rounded-lg">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                    <span>Operators, Helpers, Welders, Drivers</span>
                    <span className="font-semibold text-emerald-600">Active Pipeline</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Bar */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F97316]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
