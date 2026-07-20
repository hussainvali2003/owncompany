'use client';

import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Target, 
  Zap, 
  MessageSquareCheck, 
  HeartHandshake 
} from 'lucide-react';

const whyChooseItems = [
  {
    title: "Trusted Recruitment",
    description: "Built on strict ethical standards, zero fees for candidates, and verified employer relationships.",
    icon: ShieldCheck
  },
  {
    title: "Verified Candidates",
    description: "Every worker profile underwent phone screening, document verification, and skill background checks.",
    icon: UserCheck
  },
  {
    title: "Deep Industry Focus",
    description: "Domain-specific sourcing tailored for manufacturing, auto parts, warehousing, e-commerce, and logistics.",
    icon: Target
  },
  {
    title: "Fast Turnaround",
    description: "Rapid candidate mobilization within 48 to 72 hours for urgent industrial worker shortages.",
    icon: Zap
  },
  {
    title: "Transparent Communication",
    description: "Clear expectations regarding salary, working hours, hostel facilities, and canteen amenities.",
    icon: MessageSquareCheck
  },
  {
    title: "Long-term Partnerships",
    description: "Sustained commitment to candidate career growth and agency business expansion.",
    icon: HeartHandshake
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Our Differentiators
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            Why Leading Agencies & Employers Choose Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Delivering quality blue-collar manpower solutions across India with speed, reliability, and trust.
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-[12px] p-6 hover:shadow-xl hover:border-[#0B3C5D]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center mb-4 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2 group-hover:text-[#F97316] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
