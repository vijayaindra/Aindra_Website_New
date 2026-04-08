export interface CareerApplicationPayload {
  flowType: 'career_application';
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location: string;
  gender: string;
  linkedinProfile: string;
  positionApplyingFor: string;
  yearsOfExperience: string;
  availableFrom: string;
  cvFileName: string;
  coverLetterFileName: string;
  motivation: string;
}

export interface CareerApplicationSubmissionResult {
  success: boolean;
  mode: 'firebase' | 'fallback';
  id?: string;
  error?: string;
}
