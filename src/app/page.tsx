'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { AboutSection } from '../components/AboutSection';
import { Industries } from '../components/Industries';
import { Openings } from '../components/Openings';
import { HowItWorks } from '../components/HowItWorks';
import { ForCandidates } from '../components/ForCandidates';
import { ForAgencies } from '../components/ForAgencies';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FormModal } from '../components/FormModal';
import { WhatsAppWidget } from '../components/WhatsAppWidget';

export default function HomePage() {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    formType: 'candidate' | 'agency' | 'employer';
    defaultJobTitle?: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    formType: 'candidate',
  });

  const openCandidateForm = (jobTitle?: string) => {
    setModalConfig({
      isOpen: true,
      title: jobTitle ? `Apply for ${jobTitle}` : 'Candidate Job Application Form',
      subtitle: 'Fill out your basic details in our secure Google Form. No fees required.',
      formType: 'candidate',
      defaultJobTitle: jobTitle
    });
  };

  const openAgencyForm = () => {
    setModalConfig({
      isOpen: true,
      title: 'Manpower Agency Partnership Form',
      subtitle: 'Partner with Jobtrica to co-source candidates for industrial accounts.',
      formType: 'agency'
    });
  };

  const openEmployerForm = () => {
    setModalConfig({
      isOpen: true,
      title: 'Industrial Employer Worker Requirement Form',
      subtitle: 'Submit your factory/warehouse manpower requirements for rapid deployment.',
      formType: 'employer'
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      
      {/* Header / Navigation */}
      <Header 
        onOpenCandidateForm={() => openCandidateForm()} 
        onOpenAgencyForm={openAgencyForm} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onOpenCandidateForm={() => openCandidateForm()} 
          onOpenAgencyForm={openAgencyForm} 
        />

        {/* 6 Premium Trust Badges */}
        <TrustSection />

        {/* About Section */}
        <AboutSection />

        {/* Industries Grid */}
        <Industries />

        {/* Featured Job Cards */}
        <Openings onApplyJob={openCandidateForm} />

        {/* 5-Step recruitment timeline */}
        <HowItWorks />

        {/* For Candidates Hub */}
        <ForCandidates onOpenCandidateForm={() => openCandidateForm()} />

        {/* For Agencies Network */}
        <ForAgencies onOpenAgencyForm={openAgencyForm} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Accordion FAQ */}
        <FAQSection />

        {/* Contact Us & Map */}
        <ContactSection onOpenEmployerForm={openEmployerForm} />

      </main>

      {/* Footer */}
      <Footer 
        onOpenCandidateForm={() => openCandidateForm()}
        onOpenAgencyForm={openAgencyForm}
        onOpenEmployerForm={openEmployerForm}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppWidget />

      {/* Google Form Trigger Modal */}
      <FormModal 
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        formType={modalConfig.formType}
        defaultJobTitle={modalConfig.defaultJobTitle}
      />

    </div>
  );
}
