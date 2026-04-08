import emailjs from '@emailjs/browser';
import type { ContactEnquiryPayload, ProductSupportEnquiryPayload } from '../types/contactEnquiry';
import type { CareerApplicationPayload } from '../types/careerApplication';

type EmailTemplateKind = 'contact' | 'support' | 'careers';

export interface EmailSendResult {
  success: boolean;
  error?: string;
}

const getTemplateId = (kind: EmailTemplateKind): string => {
  if (kind === 'contact') return import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID ?? '';
  if (kind === 'support') return import.meta.env.VITE_EMAILJS_SUPPORT_TEMPLATE_ID ?? '';
  return import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID ?? '';
};

const getEmailConfig = () => {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  };
};

const isEmailConfigured = (kind: EmailTemplateKind): boolean => {
  const { serviceId, publicKey } = getEmailConfig();
  const templateId = getTemplateId(kind);
  return Boolean(serviceId && publicKey && templateId);
};

const sendEmail = async (
  kind: EmailTemplateKind,
  templateParams: Record<string, unknown>
): Promise<EmailSendResult> => {
  if (!isEmailConfigured(kind)) {
    return {
      success: false,
      error: `EmailJS is not configured for ${kind}. Missing env values.`,
    };
  }

  const { serviceId, publicKey } = getEmailConfig();
  const templateId = getTemplateId(kind);

  try {
    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown EmailJS error',
    };
  }
};

export const sendContactEnquiryEmail = async (
  payload: ContactEnquiryPayload
): Promise<EmailSendResult> => {
  return sendEmail('contact', {
    to_email: 'contactus@aindra.in',
    form_type: 'contact_enquiry',
    full_name: payload.fullName,
    email: payload.email,
    phone: payload.phoneNumber,
    company: payload.companyName,
    country: payload.country,
    user_type: payload.userType,
    message: payload.message,
    submitted_at: new Date().toISOString(),
  });
};

export const sendProductSupportEmail = async (
  payload: ProductSupportEnquiryPayload
): Promise<EmailSendResult> => {
  return sendEmail('support', {
    to_email: 'contactus@aindra.in',
    form_type: 'product_support',
    full_name: payload.fullName,
    email: payload.email,
    phone: payload.phoneNumber,
    company: payload.companyName,
    country: payload.country,
    user_type: payload.userType,
    device: payload.device,
    software_version: payload.softwareVersion ?? '',
    issue_description: payload.issueDescription,
    attachment_file_name: payload.attachmentFileName ?? '',
    submitted_at: new Date().toISOString(),
  });
};

export const sendCareerApplicationEmail = async (
  payload: CareerApplicationPayload
): Promise<EmailSendResult> => {
  return sendEmail('careers', {
    to_email: 'contactus@aindra.in',
    form_type: 'career_application',
    first_name: payload.firstName,
    last_name: payload.lastName,
    email: payload.email,
    phone: payload.phoneNumber,
    location: payload.location,
    gender: payload.gender,
    linkedin_profile: payload.linkedinProfile,
    position_applying_for: payload.positionApplyingFor,
    years_of_experience: payload.yearsOfExperience,
    available_from: payload.availableFrom,
    motivation: payload.motivation,
    cv_file_name: payload.cvFileName,
    cover_letter_file_name: payload.coverLetterFileName,
    submitted_at: new Date().toISOString(),
  });
};
