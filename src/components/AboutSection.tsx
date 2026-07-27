'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, Heart, Zap, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/images/warehouse.png"
                  alt="Jobtrica Workforce Solutions logistics and industrial workforce operations"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Stage 1 Startup Partner
                  </span>
                  <h3 className="text-xl font-bold">Empowering Indian Industries & Workers</h3>
                  <p className="text-xs text-slate-200">Sourcing, screening & connecting candidates across major industrial corridors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3 leading-tight">
                Building India&apos;s Most Trusted Blue-Collar Workforce Ecosystem
              </h2>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              <strong>Jobtrica</strong> is a newly launched, Ahmedabad-based blue-collar workforce sourcing partner for manufacturing plants, warehousing operators, and industrial projects across Gujarat&apos;s industrial belt.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We initially work hand-in-hand with verified manpower agencies by sourcing quality candidates for them. As we expand, our roadmap encompasses direct factory hiring, contract staffing, payroll management, HR services, and workforce technology.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#0B3C5D] text-white flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B3C5D] text-lg">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To eliminate job fraud, reduce hiring turnaround time, and provide genuine job opportunities for blue-collar candidates while serving as a reliable partner for staffing agencies.
                </p>
              </div>

              <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#F97316] text-white flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B3C5D] text-lg">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To become Gujarat&apos;s most trusted blue-collar workforce partner, expanding thoughtfully across India.
                </p>
              </div>

            </div>

            {/* Core Values */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-[#0B3C5D] uppercase tracking-wider mb-3">Our Core Values</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Integrity</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-xs">
                  <Zap className="w-4 h-4 text-[#F97316]" />
                  <span>Speed</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-xs">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Quality</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-xs">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Worker Welfare</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
