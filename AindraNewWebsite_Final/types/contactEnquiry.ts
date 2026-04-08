export type ContactUserType =
  | 'hospital'
  | 'diagnostic_lab'
  | 'academia_research'
  | 'clinician_pathologist'
  | 'partner_distributor'
  | 'government_program'
  | 'others';

export interface ContactEnquirySubmissionResult {
  success: boolean;
  mode: 'firebase' | 'fallback';
  id?: string;
  error?: string;
}

export interface SharedContactFields {
  fullName: string;
  country: string;
  userType: ContactUserType;
  companyName: string;
  phoneNumber: string;
  email: string;
}

export interface ContactEnquiryPayload extends SharedContactFields {
  flowType: 'contact_experts';
  message: string;
}

export interface ProductSupportEnquiryPayload extends SharedContactFields {
  flowType: 'product_support';
  device: string;
  softwareVersion?: string;
  issueDescription: string;
  attachmentFileName?: string;
}
