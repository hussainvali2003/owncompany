'use client';

import React from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  formType: 'candidate' | 'agency' | 'employer';
  defaultJobTitle?: string;
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  formType,
  defaultJobTitle
}) => {
  if (!isOpen) return null;

  const getFormUrl = () => {
    switch (formType) {
      case 'candidate':
        return siteConfig.forms.candidateRegistration;
      case 'agency':
        return siteConfig.forms.agencyPartnership;
      case 'employer':
        return siteConfig.forms.employerRequirement;
      default:
        return siteConfig.forms.candidateRegistration;
    }
  };

  const formUrl = getFormUrl();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-[#0B3C5D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-1">
            <ShieldCheck className="w-4 h-4" />
            Verified Google Form Submission
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-slate-200 mt-1">{subtitle}</p>
          
          {defaultJobTitle && (
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-xs text-white">
              <span>Applying for:</span>
              <span className="font-semibold text-[#F97316]">{defaultJobTitle}</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              What to expect after submitting:
            </h4>
            <ul className="text-xs text-slate-650 space-y-1.5 list-disc list-inside pl-1 text-slate-600">
              <li>Our team reviews your submission within 24 hours.</li>
              <li>100% Confidential & Secure via Google Forms.</li>
              <li>Zero registration fees or charges.</li>
            </ul>
          </div>

          <p className="text-sm text-slate-600">
            Click below to open the official Google Form in a new secure window. It takes less than 2 minutes to complete.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-corporate flex-1 text-center justify-center text-sm py-3"
            >
              <span>Proceed to Google Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-3 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100/80 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>{siteConfig.name}</span>
          <span>Google Forms Integration</span>
        </div>
      </div>
    </div>
  );
};
