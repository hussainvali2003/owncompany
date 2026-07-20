'use client';

import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsList } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Success Stories & Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            What Our Partners & Candidates Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Real feedback from staffing agencies, manufacturing HR managers, and blue-collar workers.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsList.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-6 flex flex-col justify-between hover:shadow-lg transition-all relative group"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#0B3C5D]/20 mb-3 group-hover:text-[#F97316]/30 transition-colors" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0B3C5D] text-sm">{t.authorName}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.authorRole}</div>
                  <div className="text-[11px] text-[#F97316] font-semibold">{t.companyOrLocation}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
