'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  IndianRupee, 
  Home, 
  Utensils, 
  Users, 
  Clock, 
  Briefcase, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { currentOpenings } from '../config/siteConfig';

interface OpeningsProps {
  onApplyJob: (jobTitle: string) => void;
}

export const Openings: React.FC<OpeningsProps> = ({ onApplyJob }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Manufacturing', 'Warehouse', 'Automobile', 'Logistics', 'Engineering'];

  const filteredJobs = selectedCategory === 'All'
    ? currentOpenings
    : currentOpenings.filter(job => job.category === selectedCategory);

  return (
    <section id="openings" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Verified Job Vacancies
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            Current Blue-Collar Openings Across Ahmedabad
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            100% Genuine, Zero-Fee job opportunities with food and room facilities. Direct Google Form application.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0B3C5D] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-[12px] p-6 shadow-sm hover:shadow-xl hover:border-[#0B3C5D]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Optional Hot Badge */}
              {job.badge && (
                <div className="absolute top-4 right-4 bg-[#F97316] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                  {job.badge}
                </div>
              )}

              <div>
                {/* Category Pill */}
                <span className="text-[11px] font-bold text-[#0B3C5D] bg-[#0B3C5D]/10 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-3">
                  {job.category}
                </span>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B3C5D] transition-colors leading-snug mb-2">
                  {job.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mb-4">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span>{job.location}</span>
                </div>

                {/* Job Description (Role Category Info) */}
                {job.description && (
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {job.description}
                  </p>
                )}

                {/* Salary Banner (only if salary is provided) */}
                {job.salary && (
                  <div className="bg-[#0B3C5D]/5 border border-[#0B3C5D]/10 rounded-xl p-3 mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0B3C5D] text-white flex items-center justify-center font-bold text-sm">
                        ₹
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Monthly Salary</div>
                        <div className="text-sm font-extrabold text-[#0B3C5D]">{job.salary}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Fixed Pay
                    </span>
                  </div>
                )}

                {/* Key Facilities List (only render fields that exist) */}
                {(job.accommodation || job.foodFacility || job.openPositions || job.shift || job.experience) && (
                  <div className="space-y-2.5 text-xs text-slate-650 border-t border-slate-100 pt-4 mb-6">
                    
                    {job.accommodation && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <Home className="w-4 h-4 text-[#0B3C5D]" />
                          Accommodation:
                        </span>
                        <span className="font-semibold text-slate-800">{job.accommodation}</span>
                      </div>
                    )}

                    {job.foodFacility && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <Utensils className="w-4 h-4 text-[#F97316]" />
                          Food Facility:
                        </span>
                        <span className="font-semibold text-slate-800">{job.foodFacility}</span>
                      </div>
                    )}

                    {job.openPositions !== undefined && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <Users className="w-4 h-4 text-indigo-600" />
                          Open Positions:
                        </span>
                        <span className="font-bold text-[#F97316] bg-[#F97316]/10 px-2 py-0.5 rounded">
                          {job.openPositions} Seats
                        </span>
                      </div>
                    )}

                    {job.shift && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          Work Shift:
                        </span>
                        <span className="font-medium text-slate-700">{job.shift}</span>
                      </div>
                    )}

                    {job.experience && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <Briefcase className="w-4 h-4 text-amber-600" />
                          Eligibility:
                        </span>
                        <span className="font-medium text-slate-700">{job.experience}</span>
                      </div>
                    )}

                  </div>
                )}
              </div>

              {/* Apply Button */}
              <button
                onClick={() => onApplyJob(job.title)}
                className="btn-primary-corporate w-full justify-center py-3 text-sm"
              >
                <span>Register Interest</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Candidate Bottom Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#0B3C5D] to-slate-900 rounded-[12px] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#F97316]" />
              Didn&apos;t find your exact trade or job title?
            </h3>
            <p className="text-sm text-slate-200">
              Submit your candidate resume/details in our general application form and our team will match you with upcoming vacancies.
            </p>
          </div>
          <button
            onClick={() => onApplyJob('General Application')}
            className="btn-orange-prominent whitespace-nowrap text-sm py-3 px-6"
          >
            Submit General Application
          </button>
        </div>

      </div>
    </section>
  );
};
