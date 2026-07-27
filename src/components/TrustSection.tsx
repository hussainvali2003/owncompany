'use client';

import React from 'react';
import { CheckCircle2, Building2, ShieldAlert, Zap, HeartHandshake, Award } from 'lucide-react';
import { trustBadges } from '../config/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  CheckCircle2,
  Building2,
  ShieldAlert,
  Zap,
  HeartHandshake,
  Award
};

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Built On Integrity & Transparency
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            Why Workers & Agencies Trust Jobtrica
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We bridge the gap between manpower suppliers, industrial manufacturing units, and blue-collar job seekers with complete transparency.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustBadges.map((badge) => {
            const IconComponent = iconMap[badge.icon] || CheckCircle2;
            return (
              <div
                key={badge.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-6 hover:shadow-lg hover:border-[#0B3C5D]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center mb-4 group-hover:bg-[#0B3C5D] group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#F97316] font-bold text-lg">✔</span>
                  <h3 className="text-lg font-bold text-[#0B3C5D] group-hover:text-[#F97316] transition-colors">
                    {badge.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
