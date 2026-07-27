'use client';

import React from 'react';
import { Handshake, Users, Zap, ShieldCheck, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

interface ForAgenciesProps {
  onOpenAgencyForm: () => void;
}

export const ForAgencies: React.FC<ForAgenciesProps> = ({ onOpenAgencyForm }) => {
  return (
    <section id="agencies" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Agency Partner Value Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
              Manpower Agency Network
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] leading-tight">
              Empowering Staffing Agencies with Verified Sourcing Support
            </h2>

            <p className="text-slate-700 text-base leading-relaxed font-medium">
              Are you a Manpower Supplier or Recruitment Agency needing candidates to fulfill large industrial manpower contracts?
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-4 bg-[#F8FAFC] border border-slate-200 rounded-[12px] hover:border-[#0B3C5D]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0B3C5D] text-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B3C5D] text-base">Need Support Sourcing Workers?</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Tap into our growing candidate pipeline across Ahmedabad&apos;s industrial belt — Sanand, Naroda, Vatva, Odhav, and Changodar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#F8FAFC] border border-slate-200 rounded-[12px] hover:border-[#0B3C5D]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#F97316] text-white flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B3C5D] text-base">Need Workers Quickly?</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Need workers quickly for a ramp-up or seasonal surge? We&apos;re built to mobilize fast, starting with focused batches as we grow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#F8FAFC] border border-slate-200 rounded-[12px] hover:border-[#0B3C5D]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B3C5D] text-base">Need Reliable Co-Sourcing Partners?</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Transparent sub-contracting models, shared revenue pipelines, and legally compliant worker documentation.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAgencyForm}
                className="btn-primary-corporate text-base py-4 px-8"
              >
                <Handshake className="w-5 h-5" />
                <span>Become Hiring Partner</span>
              </button>
            </div>

          </div>

          {/* Right Column: Agency Card Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B3C5D] text-white rounded-[16px] p-8 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F97316]/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F97316]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Agency Partnership Hub</h3>
                  <p className="text-xs text-slate-300">Stage 1 Strategic Alliance</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/15">
                <h4 className="text-sm font-bold text-[#F97316] uppercase tracking-wider">What We Provide Partner Agencies:</h4>
                <ul className="text-xs text-slate-200 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span>Pre-screened candidate lead streams by trade & location.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span>Joint candidate mobilization for large industrial clients.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span>Strict non-circumvention agreements protecting agency relationships.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span>Long-term expansion into contract staffing & tech-enabled HR.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 p-4 rounded-xl text-xs text-slate-200 space-y-1">
                <div className="font-bold text-white">Quick Partner Onboarding:</div>
                <p>Fill out the Agency Partnership Google Form and our Partnership Lead will connect with you within 24 hours.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
