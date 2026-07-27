'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Ban, 
  Compass, 
  UserCheck, 
  Zap, 
  FormInput, 
  Briefcase,
  CheckCircle2
} from 'lucide-react';

interface ForCandidatesProps {
  onOpenCandidateForm: () => void;
}

const candidateBenefits = [
  {
    title: "Verified Job Opportunities",
    description: "100% genuine vacancies at reputed manufacturing, warehousing, and logistics companies.",
    icon: ShieldCheck
  },
  {
    title: "No Fake Vacancies or Fees",
    description: "Zero registration fees. Zero agent commission charges. Absolutely 100% free for workers.",
    icon: Ban
  },
  {
    title: "Career & Trade Guidance",
    description: "Free counseling on choosing the right industrial sector, trade certification, and career path.",
    icon: Compass
  },
  {
    title: "Interview & Skill Support",
    description: "Briefing sessions before company trade tests to ensure maximum selection rates.",
    icon: UserCheck
  },
  {
    title: "Fast Call Response",
    description: "Our recruitment counselors call you within 24 hours of form submission.",
    icon: Zap
  },
  {
    title: "Simple Google Form",
    description: "No complex resume formatting required. Just fill your basic details in 2 minutes.",
    icon: FormInput
  }
];

export const ForCandidates: React.FC<ForCandidatesProps> = ({ onOpenCandidateForm }) => {
  return (
    <section id="candidates" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0B3C5D] rounded-[16px] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
          
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Candidate Zone
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-4 leading-tight">
              Looking for a Reliable Blue-Collar Job in India?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mt-2">
              Helpers, Machine Operators, Packers, Electricians, Welders, Fitters, Drivers & Security Staff — We match you with verified industrial employers across Sanand, Naroda, Vatva, Odhav, and Changodar (Ahmedabad).
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-10">
            {candidateBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[12px] p-5 hover:bg-white/15 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F97316] text-white flex items-center justify-center mb-3 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action Box */}
          <div className="bg-white text-slate-900 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative z-10">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-600 text-xs font-extrabold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                100% Free Registration Guarantee
              </div>
              <h4 className="text-lg font-extrabold text-[#0B3C5D]">Ready to Start Your Career Journey?</h4>
              <p className="text-xs text-slate-600">No account creation or password needed. Submit basic details in Google Form.</p>
            </div>
            
            <button
              onClick={onOpenCandidateForm}
              className="btn-orange-prominent text-base py-4 px-8 whitespace-nowrap"
            >
              <Briefcase className="w-5 h-5" />
              <span>Register Now as Candidate</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
