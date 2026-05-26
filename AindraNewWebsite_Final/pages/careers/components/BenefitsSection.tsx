import React, { useEffect, useRef, useState } from 'react';
import { submitCareerApplication } from '../../../services/careerApplicationService';
import { sendAutoReplyEmail, sendCareerApplicationEmail } from '../../../services/emailService';
import type { CareerApplicationPayload } from '../../../types/careerApplication';
import { sectionContainer, sectionShell } from '../../../components/layout';
import { SectionEyebrow } from '../../../components/SectionEyebrow';

interface JobOpening {
  id: number;
  title: string;
  location: string;
}

const jobs: JobOpening[] = [
  { id: 1, title: 'Developer', location: 'Bangalore, Karnataka - Full time' },
  { id: 2, title: 'Electronics Engineer', location: 'Bangalore, Karnataka - Full time' },
  { id: 3, title: 'Mechatronics Engineer', location: 'Bangalore, Karnataka - Full time' },
  { id: 4, title: 'Mechanical Engineer', location: 'Bangalore, Karnataka - Full time' },
];

const BenefitItem = ({ title, description, circleOnLeft = true }: { title: string, description: string, circleOnLeft?: boolean }) => (
  <div className={`flex items-center gap-8 ${circleOnLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#EBF0F3] shrink-0" />
    <div className="max-w-md">
      <h3 className="text-[24px] font-semibold text-gray-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-[17px] leading-relaxed text-gray-600 font-normal">
        {description}
      </p>
    </div>
  </div>
);

const JobItem: React.FC<{ job: JobOpening }> = ({ job }) => (
  <div className="group border-t border-gray-100 py-8 flex items-center justify-between transition-colors hover:bg-gray-50/50">
    <div className="flex flex-col">
      <h3 className="text-[22px] md:text-[24px] font-semibold text-gray-900 mb-1.5">{job.title}</h3>
      <p className="text-[14px] text-gray-400 font-normal">{job.location}</p>
    </div>
    <button className="w-10 h-10 rounded-full bg-[#00AEEF] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 active:scale-95">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

const FormField = ({
  label,
  children,
  required = true,
  sublabel = "",
  error = "",
}: {
  label: string;
  children?: React.ReactNode;
  required?: boolean;
  sublabel?: string;
  error?: string;
}) => (
  <div className="mb-6">
    <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2">
      {label} {required && <span className="text-red-500">*</span>}
      {sublabel && <span className="ml-2 text-gray-400 lowercase font-normal">{sublabel}</span>}
    </label>
    {children}
    {error && <p className="mt-2 text-[11px] text-red-500 font-medium">{error}</p>}
  </div>
);

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    gender: '',
    linkedinProfile: '',
    positionApplyingFor: '',
    yearsOfExperience: '',
    availableFrom: '',
    cvFileUrl: '',
    coverLetterFileUrl: '',
    motivation: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_REGEX = /^\+?[0-9()\-\s]{7,20}$/;
  const LINKEDIN_REGEX = /^https?:\/\/(www\.)?linkedin\.com\/.+/i;
  const URL_REGEX = /^https?:\/\/\S+$/i;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    if (submitState !== 'idle') {
      setSubmitState('idle');
      setSubmitMessage('');
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(formData.email.trim())) nextErrors.email = 'Enter a valid email.';
    if (!formData.phoneNumber.trim()) nextErrors.phoneNumber = 'Phone number is required.';
    else if (!PHONE_REGEX.test(formData.phoneNumber.trim())) nextErrors.phoneNumber = 'Enter a valid phone number.';
    if (!formData.location.trim()) nextErrors.location = 'Location is required.';
    if (!formData.gender.trim()) nextErrors.gender = 'Gender is required.';
    if (!formData.linkedinProfile.trim()) nextErrors.linkedinProfile = 'LinkedIn profile is required.';
    else if (!LINKEDIN_REGEX.test(formData.linkedinProfile.trim())) {
      nextErrors.linkedinProfile = 'Enter a valid LinkedIn URL.';
    }
    if (!formData.positionApplyingFor.trim()) nextErrors.positionApplyingFor = 'Position is required.';
    if (!formData.yearsOfExperience.trim()) nextErrors.yearsOfExperience = 'Experience is required.';
    if (!formData.availableFrom.trim()) nextErrors.availableFrom = 'Availability is required.';
    if (!formData.cvFileUrl.trim()) nextErrors.cvFileUrl = 'CV Google Drive link is required.';
    else if (!URL_REGEX.test(formData.cvFileUrl.trim())) nextErrors.cvFileUrl = 'Enter a valid URL.';
    if (formData.coverLetterFileUrl.trim() && !URL_REGEX.test(formData.coverLetterFileUrl.trim())) {
      nextErrors.coverLetterFileUrl = 'Enter a valid URL.';
    }
    if (!formData.motivation.trim()) nextErrors.motivation = 'This field is required.';

    return nextErrors;
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      location: '',
      gender: '',
      linkedinProfile: '',
      positionApplyingFor: '',
      yearsOfExperience: '',
      availableFrom: '',
      cvFileUrl: '',
      coverLetterFileUrl: '',
      motivation: '',
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitState('error');
      setSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    const payload: CareerApplicationPayload = {
      flowType: 'career_application',
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      location: formData.location.trim(),
      gender: formData.gender.trim(),
      linkedinProfile: formData.linkedinProfile.trim(),
      positionApplyingFor: formData.positionApplyingFor.trim(),
      yearsOfExperience: formData.yearsOfExperience.trim(),
      availableFrom: formData.availableFrom.trim(),
      cvFileUrl: formData.cvFileUrl.trim(),
      coverLetterFileUrl: formData.coverLetterFileUrl.trim() || undefined,
      motivation: formData.motivation.trim(),
    };

    setSubmitState('submitting');
    setSubmitMessage('Submitting application...');

    const persistenceResult = await submitCareerApplication(payload);
    const emailResult = await sendCareerApplicationEmail(payload);
    const autoReplyResult = await sendAutoReplyEmail({
      recipientEmail: payload.email,
      recipientName: `${payload.firstName} ${payload.lastName}`.trim(),
      formType: 'career_application',
    });

    if (persistenceResult.success && emailResult.success) {
      setSubmitState('success');
      setSubmitMessage(
        persistenceResult.mode === 'firebase'
          ? autoReplyResult.success
            ? 'Application submitted successfully. Email sent to contactus@aindra.in and auto-reply sent to your email.'
            : `Application submitted successfully. Email sent to contactus@aindra.in, but auto-reply could not be sent (${autoReplyResult.error ?? 'unknown error'}).`
          : autoReplyResult.success
            ? 'Application submitted in local safe mode, email sent to contactus@aindra.in, and auto-reply sent to your email.'
            : `Application submitted in local safe mode and email sent to contactus@aindra.in, but auto-reply could not be sent (${autoReplyResult.error ?? 'unknown error'}).`
      );
      resetForm();
      return;
    }

    if (persistenceResult.success && !emailResult.success) {
      setSubmitState('success');
      setSubmitMessage(
        `Application saved successfully, but email sending failed${
          emailResult.error ? ` (${emailResult.error})` : '. Please check EmailJS configuration.'
        }`
      );
      resetForm();
      return;
    }

    if (!persistenceResult.success && emailResult.success) {
      setSubmitState('success');
      setSubmitMessage('Application email sent successfully, but Firestore/local save failed.');
      resetForm();
      return;
    }

    setSubmitState('error');
    setSubmitMessage(
      emailResult.error ??
        persistenceResult.error ??
        'Unable to submit application right now. Please try again.'
    );
  };

  return (
    <div className="mt-20 bg-[#f1f4f6] rounded-[32px] p-8 md:p-16 border border-gray-100 w-full">
      <div className="text-center mb-16">
        <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 mb-4 tracking-tight">Interested in Joining Aindra?</h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Whether there's an opening or you want to be considered for future roles, use the form below to share your interest with us.
        </p>
      </div>

      <form className="max-w-full mx-auto" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <FormField label="Your Full Name" error={errors.firstName || errors.lastName}>
            <div className="grid grid-cols-2 gap-4">
              <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
              <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </div>
          </FormField>
          
          <div className="md:col-span-2">
            <FormField label="Email" error={errors.email}>
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@example.com" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField label="Phone Number" error={errors.phoneNumber}>
              <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </FormField>
          </div>

          <FormField label="Location" error={errors.location}>
            <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="City, Country" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <FormField label="Gender" error={errors.gender}>
            <input name="gender" value={formData.gender} onChange={handleChange} type="text" placeholder="Preferred Gender" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Linkdln Profile" error={errors.linkedinProfile}>
              <input name="linkedinProfile" value={formData.linkedinProfile} onChange={handleChange} type="url" placeholder="https://linkedin.com/in/username" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField label="Position Applying For" error={errors.positionApplyingFor}>
              <div className="relative">
                <select name="positionApplyingFor" value={formData.positionApplyingFor} onChange={handleChange} className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm appearance-none">
                  <option value="" disabled>Select a position</option>
                  <option value="Developer">Developer</option>
                  <option value="Electronics Engineer">Electronics Engineer</option>
                  <option value="Mechatronics Engineer">Mechatronics Engineer</option>
                  <option value="Mechanical Engineer">Mechanical Engineer</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </FormField>
          </div>

          <FormField label="Years of Experience" error={errors.yearsOfExperience}>
            <input name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} type="text" placeholder="e.g. 5 years" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <FormField label="Available From" error={errors.availableFrom}>
            <input name="availableFrom" value={formData.availableFrom} onChange={handleChange} type="text" placeholder="Date or Notice Period" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <FormField label="CV Google Drive Link" error={errors.cvFileUrl}>
            <input
              name="cvFileUrl"
              value={formData.cvFileUrl}
              onChange={handleChange}
              type="url"
              placeholder="Paste Google Drive CV link"
              className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm"
            />
          </FormField>

          <FormField label="Cover Letter Google Drive Link" required={false} error={errors.coverLetterFileUrl}>
            <input
              name="coverLetterFileUrl"
              value={formData.coverLetterFileUrl}
              onChange={handleChange}
              type="url"
              placeholder="Paste Google Drive cover letter link"
              className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm"
            />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Tell us why you're a great fit" error={errors.motivation}>
              <textarea name="motivation" value={formData.motivation} onChange={handleChange} placeholder="Share your motivation, relevant skills, or career goals" rows={6} className="w-full px-6 py-5 rounded-[24px] bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm resize-none"></textarea>
            </FormField>
          </div>
        </div>

        {submitState !== 'idle' && (
          <p
            className={`text-center text-sm font-semibold ${
              submitState === 'success'
                ? 'text-emerald-600'
                : submitState === 'submitting'
                  ? 'text-[#00AEEF]'
                  : 'text-red-500'
            }`}
          >
            {submitMessage}
          </p>
        )}

        <div className="mt-12 flex justify-center">
          <button type="submit" disabled={submitState === 'submitting'} className="px-12 py-4 bg-[#00AEEF] text-white text-[18px] font-bold rounded-full shadow-lg shadow-blue-500/20 hover:bg-[#0096ce] disabled:bg-[#7bc8ed] disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider">
            {submitState === 'submitting' ? 'Submitting...' : 'Sumbit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCompactHeight, setIsCompactHeight] = useState(false);
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

  useEffect(() => {
    const handleResize = () => {
      setIsCompactHeight(window.innerHeight <= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      let progress = -rect.top / totalScrollable;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transitionPoint = 0.76;

  const item1EnterProgress = clamp01(scrollProgress / 0.24);
  const item1ExitProgress = clamp01((scrollProgress - 0.26) / 0.14);
  const item1Opacity = item1EnterProgress * (1 - item1ExitProgress);
  const item1TranslateY = (40 * (1 - item1EnterProgress)) - (100 * item1ExitProgress);

  const item2EnterProgress = clamp01((scrollProgress - 0.10) / 0.24);
  const item2ExitProgress = clamp01((scrollProgress - 0.30) / 0.14);
  const item2Opacity = item2EnterProgress * (1 - item2ExitProgress);
  const item2TranslateY = (80 * (1 - item2EnterProgress)) - (200 * item2ExitProgress);

  const item3EnterProgress = clamp01((scrollProgress - 0.46) / 0.20);
  const item3ExitProgress = clamp01((scrollProgress - 0.68) / 0.20);
  const item3Opacity = item3EnterProgress * (1 - item3ExitProgress);
  const item3TranslateY = (40 * (1 - item3EnterProgress)) - (100 * item3ExitProgress);

  const item4EnterProgress = clamp01((scrollProgress - 0.50) / 0.20);
  const item4ExitProgress = clamp01((scrollProgress - 0.72) / 0.20);
  const item4Opacity = item4EnterProgress * (1 - item4ExitProgress);
  const item4TranslateY = (80 * (1 - item4EnterProgress)) - (200 * item4ExitProgress);

  const positionsEnterProgress = clamp01((scrollProgress - 0.78) / 0.18);
  const positionsOpacity = positionsEnterProgress;
  const positionsTranslateY = 60 * (1 - positionsEnterProgress);

  const stage1Opacity = scrollProgress <= transitionPoint
    ? 1
    : clamp01(1 - ((scrollProgress - transitionPoint) / 0.10));
  const eyebrowLabel = scrollProgress < transitionPoint ? 'Benefits' : 'Positions';

  return (
    <>
    <div ref={containerRef} className={`${sectionShell} relative w-full`} style={{ height: '760vh' }}>
      <section className={`sticky ${isCompactHeight ? 'top-16 h-[calc(100svh-4rem)] min-h-0 py-3' : 'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)]'} max-h-[900px]:top-16 max-h-[900px]:h-[calc(100svh-4rem)] max-h-[900px]:min-h-0 max-h-[900px]:py-3 max-h-[820px]:h-[calc(100svh-3.5rem)] w-full ${isCompactHeight ? '' : 'min-h-[700px] xl:min-h-[740px]'} bg-white flex flex-col overflow-visible lg:overflow-hidden`}>
        
        <div className="relative z-50 bg-white pt-6 pb-4">
          <div className={`${sectionContainer} flex flex-col md:flex-row items-start w-full`}>
            <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10 mb-6 md:mb-0">
              <SectionEyebrow label={eyebrowLabel} />
            </div>
            <div className={`flex-1 mt-0 relative overflow-visible lg:overflow-hidden ${isCompactHeight ? 'min-h-[104px]' : 'min-h-[136px] md:min-h-[172px]'} md:pl-10`}>
              <h2 className={`absolute inset-0 ${isCompactHeight ? 'text-[24px] md:text-[30px] lg:text-[34px]' : 'text-[28px] md:text-[34px] lg:text-[40px]'} font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px] transition-all duration-1000 ${scrollProgress < transitionPoint ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                Our team values focus, dedication, innovation and the power of what can happen when they converge.
              </h2>
              <h2 className={`absolute inset-0 ${isCompactHeight ? 'text-[24px] md:text-[30px] lg:text-[34px]' : 'text-[28px] md:text-[34px] lg:text-[40px]'} font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px] transition-all duration-1000 ${scrollProgress >= transitionPoint ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Current openings at Aindra Systems
              </h2>
            </div>
          </div>
        </div>

        {/* Benefits Container (Fades out) */}
        <div className="flex-grow relative z-10"
          style={{ 
            opacity: stage1Opacity,
            visibility: stage1Opacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div className={`h-full flex flex-col ${sectionContainer} ${isCompactHeight ? 'pt-8' : 'pt-12'} relative`}>
            <div className={`absolute inset-0 flex flex-col ${isCompactHeight ? 'pt-6 gap-12' : 'pt-10 gap-16'} md:pl-[180px] pointer-events-none`}>
              <div 
                style={{ 
                  opacity: item1Opacity,
                  transform: `translateY(${item1TranslateY}px)`,
                  visibility: item1Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-600 ease-out pointer-events-auto"
              >
                <BenefitItem 
                  title="Health and wellness" 
                  description="We care about you and your health. That's why we offer a comprehensive benefits program that you can customize to your life." 
                  circleOnLeft={true}
                />
              </div>

              <div 
                style={{ 
                  opacity: item2Opacity,
                  transform: `translateY(${item2TranslateY}px)`,
                  alignSelf: 'flex-end',
                  visibility: item2Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-600 ease-out md:pr-24 pointer-events-auto"
              >
                <BenefitItem 
                  title="Work-life balance" 
                  description="When we're at our best, everyone benefits, and so does our work. We offer flexible work schedules that adjust to your life." 
                  circleOnLeft={false}
                />
              </div>
            </div>

            <div className={`absolute inset-0 flex flex-col ${isCompactHeight ? 'pt-6 gap-12' : 'pt-10 gap-16'} md:pl-[180px] pointer-events-none`}>
              <div 
                style={{ 
                  opacity: item3Opacity,
                  transform: `translateY(${item3TranslateY}px)`,
                  visibility: item3Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-600 ease-out pointer-events-auto"
              >
                <BenefitItem 
                  title="Paid time-off" 
                  description="We offer a generous PTO policy that promotes rest and the happiness of our team." 
                  circleOnLeft={true}
                />
              </div>

              <div 
                style={{ 
                  opacity: item4Opacity,
                  transform: `translateY(${item4TranslateY}px)`,
                  alignSelf: 'flex-end',
                  visibility: item4Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-600 ease-out md:pr-16 pointer-events-auto"
              >
                <BenefitItem 
                  title="Educational assistance" 
                  description="We want to grow with you. Aindra offers reimbursement for educational development." 
                  circleOnLeft={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Positions Container (Fades in and scrolls naturally) */}
        <div 
          className={`${sectionContainer} pb-32 relative z-20`}
          style={{ 
            opacity: positionsOpacity,
            visibility: positionsOpacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: positionsOpacity > 0.8 ? 'auto' : 'none',
            transform: `translateY(${positionsTranslateY}px)`
          }}
        >
          {/* Jobs List - aligned to same content column as section heading */}
          <div className="flex flex-col md:flex-row items-start mb-12 w-full">
            <div className="w-full md:w-[20%] shrink-0 mb-6 md:mb-0" />
            <div className="w-full md:flex-1 md:pl-10">
              <div className="flex flex-col border-b border-gray-100 max-w-[1000px]">
                {jobs.map((job) => (
                  <JobItem key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
          
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-40"></div>
      </section>
    </div>
    <div className={`${sectionShell} bg-white pb-24`}>
      <div className={sectionContainer}>
        <ApplicationForm />
      </div>
    </div>
    </>
  );
};

export default BenefitsSection;
