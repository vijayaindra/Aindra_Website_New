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

const getAutoReplyTemplateId = (): string => import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? '';

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
    const message =
      typeof error === 'object' && error !== null && 'text' in error && typeof (error as { text?: unknown }).text === 'string'
        ? (error as { text: string }).text
        : error instanceof Error
          ? error.message
          : 'Unknown EmailJS error';
    return {
      success: false,
      error: message,
    };
  }
};

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (typeof error === 'object' && error !== null && 'text' in error) {
    const text = (error as { text?: unknown }).text;
    if (typeof text === 'string' && text.trim()) return text;
  }
  if (error instanceof Error && error.message.trim()) return error.message;
  return fallback;
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
    support_file_url: payload.supportFileUrl ?? '',
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
    cv_file_url: payload.cvFileUrl,
    cover_letter_file_url: payload.coverLetterFileUrl ?? '',
    submitted_at: new Date().toISOString(),
  });
};

export const sendAutoReplyEmail = async (payload: {
  recipientEmail: string;
  recipientName: string;
  formType: 'contact_enquiry' | 'product_support' | 'career_application';
}): Promise<EmailSendResult> => {
  const { serviceId, publicKey } = getEmailConfig();
  const templateId = getAutoReplyTemplateId();

  if (!serviceId || !publicKey || !templateId) {
    return {
      success: false,
      error: 'EmailJS auto-reply is not configured. Missing env values.',
    };
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        to_email: payload.recipientEmail,
        email: payload.recipientEmail,
        user_email: payload.recipientEmail,
        to_name: payload.recipientName,
        name: payload.recipientName,
        user_name: payload.recipientName,
        reply_to: 'contactus@aindra.in',
        form_type: payload.formType,
        submitted_at: new Date().toISOString(),
      },
      { publicKey }
    );
    return { success: true };
  } catch (error) {
    const message = getErrorMessage(error, 'Unknown EmailJS auto-reply error');
    return {
      success: false,
      error: message,
    };
  }
};
