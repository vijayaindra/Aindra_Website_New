export type ContactUserType =
  | 'hospital'
  | 'diagnostic_lab'
  | 'academia_research'
  | 'clinician_pathologist'
  | 'partner_distributor'
  | 'government_program'
  | 'others';

export interface ContactEnquiryPayload {
  fullName: string;
  country: string;
  userType: ContactUserType;
  companyName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export interface ContactEnquirySubmissionResult {
  success: boolean;
  mode: 'firebase' | 'fallback';
  id?: string;
  error?: string;
}
