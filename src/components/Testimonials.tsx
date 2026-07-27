'use client';

import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Founder&apos;s Note
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            Why We Started Jobtrica
          </h2>
        </div>

        {/* Founder's Note Card */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all relative group max-w-3xl mx-auto">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-[#0B3C5D]/10 absolute -top-5 -left-5 bg-white rounded-full p-2 border border-slate-200" />
          
          <div className="space-y-6">
            <p className="text-slate-700 text-lg sm:text-xl italic leading-relaxed text-center font-medium">
              &ldquo;We saw how hard it is for Ahmedabad&apos;s manpower agencies to find quality candidates fast, and how often job seekers get burned by fake listings and hidden fees. We&apos;re building Jobtrica to fix both — starting right here in Sanand, Naroda, and Vatva.&rdquo;
            </p>
            
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="font-extrabold text-[#0B3C5D] text-base">Hussain Vali</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Founder, Jobtrica</div>
                <div className="text-[11px] text-[#F97316] font-bold">Ahmedabad, Gujarat</div>
              </div>
              <div className="flex items-center gap-2 bg-[#0B3C5D]/5 border border-[#0B3C5D]/10 rounded-full px-4 py-1.5 text-xs text-[#0B3C5D] font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Zero-Fee Sourcing Partner</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
