import React, { useEffect, useState } from 'react';
import {
  submitContactEnquiry,
  submitProductSupportEnquiry,
} from '../../../services/contactEnquiryService';
import {
  sendContactEnquiryEmail,
  sendProductSupportEmail,
} from '../../../services/emailService';
import type {
  ContactEnquiryPayload,
  ContactUserType,
  ProductSupportEnquiryPayload,
  SharedContactFields,
} from '../../../types/contactEnquiry';

type ActiveTab = 'product' | 'experts';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactExpertsFormValues extends SharedContactFields {
  message: string;
}

interface ProductSupportStep2Values {
  device: string;
  softwareVersion: string;
  issueDescription: string;
  attachmentFileName: string;
}

type SharedFieldErrors = Partial<Record<keyof SharedContactFields, string>>;
type ContactFieldErrors = Partial<Record<keyof ContactExpertsFormValues, string>>;
type SupportStep2Errors = Partial<Record<keyof ProductSupportStep2Values, string>>;

const COUNTRY_OPTIONS = ['India', 'United States', 'Germany'];

const DEVICE_OPTIONS = [
  'Astra Precision Stainer',
  'VisionX Scanner',
  'Intellistain Core',
  'Clustr Suite',
];

const USER_TYPE_OPTIONS: Array<{ value: ContactUserType; label: string }> = [
  { value: 'hospital', label: "I'm from a Hospital" },
  { value: 'diagnostic_lab', label: 'I run a Diagnostic Lab' },
  { value: 'academia_research', label: 'I work in Academia or Research' },
  { value: 'clinician_pathologist', label: "I'm a Clinician or Pathologist" },
  { value: 'partner_distributor', label: "I'm a Partner or Distributor" },
  { value: 'government_program', label: 'I represent a Government Program' },
  { value: 'others', label: 'Others' },
];

const INITIAL_SHARED_FIELDS: SharedContactFields = {
  fullName: '',
  country: 'India',
  userType: 'hospital',
  companyName: '',
  phoneNumber: '',
  email: '',
};

const INITIAL_CONTACT_EXPERTS_FORM: ContactExpertsFormValues = {
  ...INITIAL_SHARED_FIELDS,
  message: '',
};

const INITIAL_PRODUCT_SUPPORT_STEP2: ProductSupportStep2Values = {
  device: '',
  softwareVersion: '',
  issueDescription: '',
  attachmentFileName: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9()\-\s]{7,20}$/;

interface RadioOptionProps {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({ label, id, name, checked, onChange }) => (
  <label className="flex items-center space-x-3 cursor-pointer group mb-3">
    <div className="relative flex items-center justify-center">
      <input
        type="radio"
        id={id}
        name={name}
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#00AEEF] transition-all"></div>
      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00AEEF] scale-0 peer-checked:scale-100 transition-transform"></div>
    </div>
    <span className="text-[13px] text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{label}</span>
  </label>
);

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  multiline?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  required = true,
  name,
  value,
  onChange,
  error,
  multiline = false,
}) => {
  const borderClass = error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-[#00AEEF]';

  return (
    <div className="flex flex-col space-y-2 mb-8">
      <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className={`w-full bg-transparent border-b py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 font-medium resize-none ${borderClass}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-transparent border-b py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 font-medium ${borderClass}`}
        />
      )}

      {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
    </div>
  );
};

interface CountryFieldProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const CountryField: React.FC<CountryFieldProps> = ({ name, value, onChange, error }) => (
  <div className="flex flex-col space-y-2 mb-8 relative">
    <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase">
      COUNTRY <span className="text-red-500">*</span>
    </label>
    <div className={`relative border-b ${error ? 'border-red-400' : 'border-gray-300'}`}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent py-2 text-[14px] appearance-none outline-none font-medium cursor-pointer"
      >
        {COUNTRY_OPTIONS.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
  </div>
);

interface UserTypeFieldProps {
  value: ContactUserType;
  onChange: (value: ContactUserType) => void;
  error?: string;
}

const UserTypeField: React.FC<UserTypeFieldProps> = ({ value, onChange, error }) => (
  <div className="mb-10">
    <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase block mb-6">
      TELL US WHO YOU ARE <span className="text-red-500">*</span>
    </label>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      <div className="flex flex-col">
        {USER_TYPE_OPTIONS.slice(0, 4).map((option) => (
          <RadioOption
            key={option.value}
            id={option.value}
            name="who-are-you"
            label={option.label}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {USER_TYPE_OPTIONS.slice(4).map((option) => (
          <RadioOption
            key={option.value}
            id={option.value}
            name="who-are-you"
            label={option.label}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
    {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
  </div>
);

const validateSharedFields = (values: SharedContactFields): SharedFieldErrors => {
  const errors: SharedFieldErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!values.country.trim()) {
    errors.country = 'Country is required.';
  }

  if (!values.userType) {
    errors.userType = 'Please select who you are.';
  }

  if (!values.companyName.trim()) {
    errors.companyName = 'Company or institution is required.';
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required.';
  } else if (!PHONE_REGEX.test(values.phoneNumber.trim())) {
    errors.phoneNumber = 'Enter a valid phone number.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  return errors;
};

const validateContactExpertsForm = (values: ContactExpertsFormValues): ContactFieldErrors => {
  const errors: ContactFieldErrors = validateSharedFields(values);

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
};

const validateSupportStep2 = (values: ProductSupportStep2Values): SupportStep2Errors => {
  const errors: SupportStep2Errors = {};

  if (!values.device.trim()) {
    errors.device = 'Device selection is required.';
  }

  if (!values.issueDescription.trim()) {
    errors.issueDescription = 'Issue description is required.';
  }

  return errors;
};

const ContactHero: React.FC = () => {
  const getTabFromHash = (): ActiveTab => {
    const hash = window.location.hash || '';
    const query = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(query);
    return params.get('tab') === 'experts' ? 'experts' : 'product';
  };

  const [activeTab, setActiveTab] = useState<ActiveTab>(getTabFromHash);
  const [supportStep, setSupportStep] = useState<1 | 2>(1);

  const [contactExpertsForm, setContactExpertsForm] = useState<ContactExpertsFormValues>(
    INITIAL_CONTACT_EXPERTS_FORM
  );
  const [contactErrors, setContactErrors] = useState<ContactFieldErrors>({});
  const [contactSubmitStatus, setContactSubmitStatus] = useState<SubmitStatus>('idle');
  const [contactSubmitMessage, setContactSubmitMessage] = useState('');

  const [supportStep1Form, setSupportStep1Form] = useState<SharedContactFields>(INITIAL_SHARED_FIELDS);
  const [supportStep2Form, setSupportStep2Form] = useState<ProductSupportStep2Values>(
    INITIAL_PRODUCT_SUPPORT_STEP2
  );
  const [supportStep1Errors, setSupportStep1Errors] = useState<SharedFieldErrors>({});
  const [supportStep2Errors, setSupportStep2Errors] = useState<SupportStep2Errors>({});
  const [supportSubmitStatus, setSupportSubmitStatus] = useState<SubmitStatus>('idle');
  const [supportSubmitMessage, setSupportSubmitMessage] = useState('');

  const resetStatuses = () => {
    setContactSubmitStatus('idle');
    setContactSubmitMessage('');
    setSupportSubmitStatus('idle');
    setSupportSubmitMessage('');
  };

  const handleTabSelect = (tab: ActiveTab) => {
    setActiveTab(tab);
    setSupportStep(1);
    resetStatuses();

    const params = new URLSearchParams(window.location.hash.split('?')[1] ?? '');
    params.set('tab', tab);
    window.history.replaceState(null, '', `#/contact?${params.toString()}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const nextTab = getTabFromHash();
      setActiveTab(nextTab);
      setSupportStep(1);
      resetStatuses();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleContactExpertsInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setContactExpertsForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setContactErrors((prev) => {
      if (!prev[name as keyof ContactExpertsFormValues]) {
        return prev;
      }

      const next = { ...prev };
      delete next[name as keyof ContactExpertsFormValues];
      return next;
    });

    if (contactSubmitStatus !== 'idle') {
      setContactSubmitStatus('idle');
      setContactSubmitMessage('');
    }
  };

  const handleContactExpertsUserTypeChange = (userType: ContactUserType) => {
    setContactExpertsForm((prev) => ({ ...prev, userType }));

    setContactErrors((prev) => {
      if (!prev.userType) {
        return prev;
      }
      const next = { ...prev };
      delete next.userType;
      return next;
    });
  };

  const handleSupportStep1Input = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setSupportStep1Form((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSupportStep1Errors((prev) => {
      if (!prev[name as keyof SharedContactFields]) {
        return prev;
      }
      const next = { ...prev };
      delete next[name as keyof SharedContactFields];
      return next;
    });

    if (supportSubmitStatus !== 'idle') {
      setSupportSubmitStatus('idle');
      setSupportSubmitMessage('');
    }
  };

  const handleSupportStep1UserTypeChange = (userType: ContactUserType) => {
    setSupportStep1Form((prev) => ({ ...prev, userType }));

    setSupportStep1Errors((prev) => {
      if (!prev.userType) {
        return prev;
      }
      const next = { ...prev };
      delete next.userType;
      return next;
    });
  };

  const handleSupportStep2Input = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setSupportStep2Form((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSupportStep2Errors((prev) => {
      if (!prev[name as keyof ProductSupportStep2Values]) {
        return prev;
      }
      const next = { ...prev };
      delete next[name as keyof ProductSupportStep2Values];
      return next;
    });
  };

  const handleSupportFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setSupportStep2Form((prev) => ({
      ...prev,
      attachmentFileName: file ? file.name : '',
    }));
  };

  const handleSupportContinue = () => {
    const errors = validateSharedFields(supportStep1Form);
    if (Object.keys(errors).length > 0) {
      setSupportStep1Errors(errors);
      return;
    }

    setSupportStep1Errors({});
    setSupportStep(2);
  };

  const handleContactExpertsSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateContactExpertsForm(contactExpertsForm);
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      setContactSubmitStatus('error');
      setContactSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    const payload: ContactEnquiryPayload = {
      flowType: 'contact_experts',
      fullName: contactExpertsForm.fullName.trim(),
      country: contactExpertsForm.country.trim(),
      userType: contactExpertsForm.userType,
      companyName: contactExpertsForm.companyName.trim(),
      phoneNumber: contactExpertsForm.phoneNumber.trim(),
      email: contactExpertsForm.email.trim(),
      message: contactExpertsForm.message.trim(),
    };

    setContactSubmitStatus('submitting');
    setContactSubmitMessage('Submitting your enquiry...');

    const persistenceResult = await submitContactEnquiry(payload);
    const emailResult = await sendContactEnquiryEmail(payload);

    if (persistenceResult.success && emailResult.success) {
      setContactSubmitStatus('success');
      setContactSubmitMessage(
        persistenceResult.mode === 'firebase'
          ? 'Enquiry submitted successfully. Email sent to contactus@aindra.in.'
          : 'Enquiry submitted in local safe mode and email sent to contactus@aindra.in.'
      );
      setContactExpertsForm(INITIAL_CONTACT_EXPERTS_FORM);
      setContactErrors({});
      return;
    }

    if (persistenceResult.success && !emailResult.success) {
      setContactSubmitStatus('success');
      setContactSubmitMessage('Enquiry saved successfully, but email sending failed. Please check EmailJS configuration.');
      setContactExpertsForm(INITIAL_CONTACT_EXPERTS_FORM);
      setContactErrors({});
      return;
    }

    if (!persistenceResult.success && emailResult.success) {
      setContactSubmitStatus('success');
      setContactSubmitMessage('Email sent successfully, but Firestore/local save failed.');
      setContactExpertsForm(INITIAL_CONTACT_EXPERTS_FORM);
      setContactErrors({});
      return;
    }

    setContactSubmitStatus('error');
    setContactSubmitMessage(
      emailResult.error ??
        persistenceResult.error ??
        'Unable to submit your enquiry right now. Please try again.'
    );
  };

  const handleSupportSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const step2Errors = validateSupportStep2(supportStep2Form);
    if (Object.keys(step2Errors).length > 0) {
      setSupportStep2Errors(step2Errors);
      setSupportSubmitStatus('error');
      setSupportSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    const payload: ProductSupportEnquiryPayload = {
      flowType: 'product_support',
      fullName: supportStep1Form.fullName.trim(),
      country: supportStep1Form.country.trim(),
      userType: supportStep1Form.userType,
      companyName: supportStep1Form.companyName.trim(),
      phoneNumber: supportStep1Form.phoneNumber.trim(),
      email: supportStep1Form.email.trim(),
      device: supportStep2Form.device.trim(),
      softwareVersion: supportStep2Form.softwareVersion.trim() || undefined,
      issueDescription: supportStep2Form.issueDescription.trim(),
      attachmentFileName: supportStep2Form.attachmentFileName || undefined,
    };

    setSupportSubmitStatus('submitting');
    setSupportSubmitMessage('Submitting support request...');

    const persistenceResult = await submitProductSupportEnquiry(payload);
    const emailResult = await sendProductSupportEmail(payload);

    if (persistenceResult.success && emailResult.success) {
      setSupportSubmitStatus('success');
      setSupportSubmitMessage(
        persistenceResult.mode === 'firebase'
          ? 'Support request submitted successfully. Email sent to contactus@aindra.in.'
          : 'Support request submitted in local safe mode and email sent to contactus@aindra.in.'
      );
      setSupportStep1Form(INITIAL_SHARED_FIELDS);
      setSupportStep2Form(INITIAL_PRODUCT_SUPPORT_STEP2);
      setSupportStep1Errors({});
      setSupportStep2Errors({});
      setSupportStep(1);
      return;
    }

    if (persistenceResult.success && !emailResult.success) {
      setSupportSubmitStatus('success');
      setSupportSubmitMessage('Support request saved successfully, but email sending failed. Please check EmailJS configuration.');
      setSupportStep1Form(INITIAL_SHARED_FIELDS);
      setSupportStep2Form(INITIAL_PRODUCT_SUPPORT_STEP2);
      setSupportStep1Errors({});
      setSupportStep2Errors({});
      setSupportStep(1);
      return;
    }

    if (!persistenceResult.success && emailResult.success) {
      setSupportSubmitStatus('success');
      setSupportSubmitMessage('Support request email sent successfully, but Firestore/local save failed.');
      setSupportStep1Form(INITIAL_SHARED_FIELDS);
      setSupportStep2Form(INITIAL_PRODUCT_SUPPORT_STEP2);
      setSupportStep1Errors({});
      setSupportStep2Errors({});
      setSupportStep(1);
      return;
    }

    setSupportSubmitStatus('error');
    setSupportSubmitMessage(
      emailResult.error ??
        persistenceResult.error ??
        'Unable to submit support request right now. Please try again.'
    );
  };

  return (
    <section className="w-full bg-white pt-8 pb-16 md:pb-24 px-4 md:px-6">
      <div className="mx-auto w-full max-w-[1520px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-gray-900 tracking-tight leading-none mb-4">
          Contact us
        </h1>
        <p className="text-base sm:text-lg md:text-[20px] text-gray-500 font-medium mb-8 md:mb-10">
          How can we help you?
        </p>

        <hr className="border-gray-200 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col">
            <button
              type="button"
              onClick={() => handleTabSelect('product')}
              className={`group w-full text-left cursor-pointer border-b border-gray-100 pb-8 mb-8 flex justify-between items-center transition-all ${activeTab === 'product' ? 'pl-4' : 'hover:pl-2'}`}
            >
              <div className="flex flex-col space-y-2">
                <h3 className={`text-[20px] font-bold transition-colors ${activeTab === 'product' ? 'text-[#00AEEF]' : 'text-gray-400 group-hover:text-[#00AEEF]'}`}>
                  Product Support
                </h3>
                <p className="text-[14px] text-gray-500">I am a client and need support with my Aindra product</p>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md transition-all ${activeTab === 'product' ? 'bg-[#00AEEF] shadow-blue-200' : 'bg-gray-200 group-hover:bg-[#00AEEF]'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleTabSelect('experts')}
              className={`group w-full text-left cursor-pointer border-b border-gray-100 pb-8 flex justify-between items-center transition-all ${activeTab === 'experts' ? 'pl-4' : 'hover:pl-2'}`}
            >
              <div className="flex flex-col space-y-2">
                <h3 className={`text-[20px] font-extrabold transition-colors ${activeTab === 'experts' ? 'text-[#00AEEF]' : 'text-gray-900 group-hover:text-[#00AEEF]'}`}>
                  Contact our experts
                </h3>
                <p className="text-[14px] text-gray-500">Want to ask us a specific question?</p>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-white transition-all ${activeTab === 'experts' ? 'bg-[#00AEEF] shadow-md shadow-blue-200' : 'bg-gray-400 group-hover:bg-[#00AEEF]'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>

          <div className="lg:col-span-8">
            <div className="w-full bg-[#EBF8FF] rounded-[20px] md:rounded-[24px] p-5 sm:p-7 md:p-10 lg:p-12 shadow-sm border border-blue-100/50">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-[30px] font-extrabold text-gray-900 mb-2">
                  {activeTab === 'product'
                    ? 'Need help with your Aindra product?'
                    : 'Have a question? Speak with our experts'}
                </h2>
                <p className="text-[14px] text-gray-500 font-medium">
                  {activeTab === 'product'
                    ? 'Let us know how we can assist you.'
                    : "We'll get back within 1 business days"}
                </p>
              </div>

              {activeTab === 'product' ? (
                <>
                  <div className="flex flex-col items-center mb-16 relative">
                    <div className="flex items-center justify-between w-full max-w-[400px] relative z-10">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 ${supportStep >= 1 ? 'bg-[#00AEEF]' : 'bg-gray-400'}`}
                        >
                          {supportStep > 1 ? '✓' : '1'}
                        </div>
                        <span
                          className={`mt-2 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${supportStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`}
                        >
                          GENERAL INFORMATION
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 ${supportStep >= 2 ? 'bg-[#00AEEF]' : 'bg-gray-500'}`}
                        >
                          2
                        </div>
                        <span
                          className={`mt-2 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${supportStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}
                        >
                          ISSUE WITH DEVICE
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[78%] h-[1px] bg-gray-300 -z-0"></div>
                  </div>

                  <form className="max-w-[700px] mx-auto" onSubmit={handleSupportSubmit} noValidate>
                    {supportStep === 1 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                          <InputField
                            label="YOUR FULL NAME"
                            placeholder="Amit Ravishankar"
                            name="fullName"
                            value={supportStep1Form.fullName}
                            onChange={(event) => handleSupportStep1Input(event as React.ChangeEvent<HTMLInputElement>)}
                            error={supportStep1Errors.fullName}
                          />

                          <CountryField
                            name="country"
                            value={supportStep1Form.country}
                            onChange={handleSupportStep1Input}
                            error={supportStep1Errors.country}
                          />
                        </div>

                        <UserTypeField
                          value={supportStep1Form.userType}
                          onChange={handleSupportStep1UserTypeChange}
                          error={supportStep1Errors.userType}
                        />

                        <InputField
                          label="COMPANY / NAME OF INSTITUTION"
                          placeholder="Your institution name"
                          name="companyName"
                          value={supportStep1Form.companyName}
                          onChange={(event) => handleSupportStep1Input(event as React.ChangeEvent<HTMLInputElement>)}
                          error={supportStep1Errors.companyName}
                        />
                        <InputField
                          label="PHONE NUMBER"
                          placeholder="+91 4567387256"
                          name="phoneNumber"
                          value={supportStep1Form.phoneNumber}
                          onChange={(event) => handleSupportStep1Input(event as React.ChangeEvent<HTMLInputElement>)}
                          error={supportStep1Errors.phoneNumber}
                        />
                        <InputField
                          label="EMAIL"
                          placeholder="Amit@company.com"
                          type="email"
                          name="email"
                          value={supportStep1Form.email}
                          onChange={(event) => handleSupportStep1Input(event as React.ChangeEvent<HTMLInputElement>)}
                          error={supportStep1Errors.email}
                        />

                        {supportSubmitStatus === 'error' && supportSubmitMessage && (
                          <p className="mb-4 text-[12px] font-semibold text-red-500">{supportSubmitMessage}</p>
                        )}

                        <div className="mt-12">
                          <button
                            type="button"
                            onClick={handleSupportContinue}
                            className="w-full bg-[#56A8E8] hover:bg-[#4096D8] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200/50 uppercase tracking-widest text-[13px]"
                          >
                            CONTINUE TO STEP 2
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="animate-in fade-in duration-500">
                        <div className="flex flex-col space-y-2 mb-8 relative">
                          <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase">
                            WHAT DEVICE ARE YOU REPORTING ABOUT? <span className="text-red-500">*</span>
                          </label>
                          <div className={`relative border-b ${supportStep2Errors.device ? 'border-red-400' : 'border-gray-300'}`}>
                            <select
                              name="device"
                              value={supportStep2Form.device}
                              onChange={(event) => handleSupportStep2Input(event as React.ChangeEvent<HTMLSelectElement>)}
                              className="w-full bg-transparent py-2 text-[14px] appearance-none outline-none font-medium cursor-pointer"
                            >
                              <option value="">Select device</option>
                              {DEVICE_OPTIONS.map((device) => (
                                <option key={device} value={device}>
                                  {device}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          {supportStep2Errors.device && (
                            <p className="text-[11px] text-red-500 font-medium">{supportStep2Errors.device}</p>
                          )}
                        </div>

                        <InputField
                          label="SOFTWARE VERSION NUMBER FOR THE DEVICE"
                          placeholder="e.g. v2.4.1"
                          required={false}
                          name="softwareVersion"
                          value={supportStep2Form.softwareVersion}
                          onChange={handleSupportStep2Input}
                        />

                        <InputField
                          label="PLEASE BRIEFLY DESCRIBE THE ISSUE YOU'RE FACING"
                          placeholder="Describe the problem..."
                          name="issueDescription"
                          value={supportStep2Form.issueDescription}
                          onChange={handleSupportStep2Input}
                          error={supportStep2Errors.issueDescription}
                          multiline
                        />

                        <div className="mb-12">
                          <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase block mb-1">
                            PLEASE UPLOAD A PICTURE SHOWING THE PROBLEM
                          </label>
                          <p className="text-[11px] text-gray-400 mb-6 font-medium">
                            Accepted file types: pdf, doc, docx, txt, rtf
                          </p>

                          <div className="flex items-center space-x-6">
                            <label className="cursor-pointer">
                              <input
                                type="file"
                                className="hidden"
                                onChange={handleSupportFileChange}
                              />
                              <div className="px-10 py-2.5 bg-[#f0f0f0] border border-gray-300 rounded-full text-[12px] font-bold text-gray-700 hover:bg-gray-200 transition-colors shadow-sm uppercase tracking-wide">
                                CHOOSE FILE
                              </div>
                            </label>
                            <span className="text-[12px] text-gray-400 font-medium italic">
                              {supportStep2Form.attachmentFileName || 'max file size 10 mb'}
                            </span>
                          </div>
                        </div>

                        {supportSubmitStatus !== 'idle' && (
                          <p
                            className={`mb-4 text-[12px] font-semibold ${
                              supportSubmitStatus === 'success'
                                ? 'text-emerald-600'
                                : supportSubmitStatus === 'submitting'
                                  ? 'text-[#00AEEF]'
                                  : 'text-red-500'
                            }`}
                          >
                            {supportSubmitMessage}
                          </p>
                        )}

                        <div className="mt-12 grid grid-cols-2 gap-6">
                          <button
                            type="button"
                            onClick={() => setSupportStep(1)}
                            className="w-full bg-transparent border border-gray-400 text-gray-500 hover:text-gray-900 hover:border-gray-900 font-bold py-3.5 rounded-xl transition-all uppercase tracking-widest text-[13px]"
                          >
                            PREVIOUS
                          </button>
                          <button
                            type="submit"
                            disabled={supportSubmitStatus === 'submitting'}
                            className="w-full bg-[#56A8E8] hover:bg-[#4096D8] disabled:bg-[#8ec6ee] disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200/50 uppercase tracking-widest text-[13px]"
                          >
                            {supportSubmitStatus === 'submitting' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </>
              ) : (
                <form className="max-w-[700px] mx-auto" onSubmit={handleContactExpertsSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <InputField
                      label="YOUR FULL NAME"
                      placeholder="Amit Ravishankar"
                      name="fullName"
                      value={contactExpertsForm.fullName}
                      onChange={handleContactExpertsInput}
                      error={contactErrors.fullName}
                    />

                    <CountryField
                      name="country"
                      value={contactExpertsForm.country}
                      onChange={handleContactExpertsInput}
                      error={contactErrors.country}
                    />
                  </div>

                  <UserTypeField
                    value={contactExpertsForm.userType}
                    onChange={handleContactExpertsUserTypeChange}
                    error={contactErrors.userType}
                  />

                  <InputField
                    label="COMPANY / NAME OF INSTITUTION"
                    placeholder="Your institution name"
                    name="companyName"
                    value={contactExpertsForm.companyName}
                    onChange={handleContactExpertsInput}
                    error={contactErrors.companyName}
                  />
                  <InputField
                    label="PHONE NUMBER"
                    placeholder="+91 4567387256"
                    name="phoneNumber"
                    value={contactExpertsForm.phoneNumber}
                    onChange={handleContactExpertsInput}
                    error={contactErrors.phoneNumber}
                  />
                  <InputField
                    label="EMAIL"
                    placeholder="Amit@company.com"
                    type="email"
                    name="email"
                    value={contactExpertsForm.email}
                    onChange={handleContactExpertsInput}
                    error={contactErrors.email}
                  />
                  <InputField
                    label="MESSAGE"
                    placeholder="What is your question?"
                    name="message"
                    value={contactExpertsForm.message}
                    onChange={handleContactExpertsInput}
                    error={contactErrors.message}
                    multiline
                  />

                  {contactSubmitStatus !== 'idle' && (
                    <p
                      className={`mb-4 text-[12px] font-semibold ${
                        contactSubmitStatus === 'success'
                          ? 'text-emerald-600'
                          : contactSubmitStatus === 'submitting'
                            ? 'text-[#00AEEF]'
                            : 'text-red-500'
                      }`}
                    >
                      {contactSubmitMessage}
                    </p>
                  )}

                  <div className="mt-12">
                    <button
                      type="submit"
                      disabled={contactSubmitStatus === 'submitting'}
                      className="w-full bg-[#56A8E8] hover:bg-[#4096D8] disabled:bg-[#8ec6ee] disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200/50 uppercase tracking-widest text-[13px]"
                    >
                      {contactSubmitStatus === 'submitting' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
