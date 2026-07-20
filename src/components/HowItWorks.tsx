'use client';

import React from 'react';
import { 
  FileText, 
  PhoneCall, 
  UserCheck, 
  Award, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    stepNumber: "01",
    title: "Apply Online",
    subtitle: "Submit Candidate Form",
    description: "Fill our simple Google Form with your name, phone number, trade, and experience. Takes under 2 minutes.",
    icon: FileText
  },
  {
    stepNumber: "02",
    title: "Phone Screening",
    subtitle: "Quick Verification",
    description: "Our recruitment specialist calls you to verify your availability, preferred location, and job requirements.",
    icon: PhoneCall
  },
  {
    stepNumber: "03",
    title: "Interview & Trade Test",
    subtitle: "Skill Assessment",
    description: "Participate in direct employer or agency trade test (for skilled trades like welding, electrical, CNC).",
    icon: UserCheck
  },
  {
    stepNumber: "04",
    title: "Selection & Offer",
    subtitle: "Zero-Fee Confirmation",
    description: "Receive formal selection details including salary structure, hostel facilities, and joining date.",
    icon: Award
  },
  {
    stepNumber: "05",
    title: "Joining & Onboarding",
    subtitle: "Factory / Plant Joining",
    description: "Report to the plant with guided transport, room allocation, and canteen registration assistance.",
    icon: CheckCircle2
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Transparent Recruitment Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            How It Works — 5 Simple Steps to Joining
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A fast, structured, and fee-free process from online registration to workplace joining.
          </p>
        </div>

        {/* Desktop & Mobile Timeline */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-6 text-center hover:bg-white hover:shadow-xl hover:border-[#0B3C5D]/40 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#0B3C5D] text-white font-extrabold text-sm flex items-center justify-center mb-4 group-hover:bg-[#F97316] transition-colors shadow-md">
                      {step.stepNumber}
                    </div>

                    {/* Step Icon */}
                    <div className="w-10 h-10 mx-auto rounded-lg bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#0B3C5D] group-hover:text-[#F97316] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#F97316] uppercase tracking-wider mb-2">
                      {step.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator for Mobile */}
                  {idx < steps.length - 1 && (
                    <div className="mt-4 flex justify-center text-slate-300 lg:hidden">
                      <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0 text-[#F97316]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
