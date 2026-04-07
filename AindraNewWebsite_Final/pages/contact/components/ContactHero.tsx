import React, { useState } from 'react';
import { submitContactEnquiry } from '../../../services/contactEnquiryService';
import type { ContactUserType } from '../../../types/contactEnquiry';

type ActiveTab = 'product' | 'experts';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ProductFormValues {
  fullName: string;
  country: string;
  userType: ContactUserType;
  companyName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

type ProductFormErrors = Partial<Record<keyof ProductFormValues, string>>;

const COUNTRY_OPTIONS = ['India', 'United States', 'Germany'];

const USER_TYPE_OPTIONS: Array<{ value: ContactUserType; label: string }> = [
  { value: 'hospital', label: "I'm from a Hospital" },
  { value: 'diagnostic_lab', label: 'I run a Diagnostic Lab' },
  { value: 'academia_research', label: 'I work in Academia or Research' },
  { value: 'clinician_pathologist', label: "I'm a Clinician or Pathologist" },
  { value: 'partner_distributor', label: "I'm a Partner or Distributor" },
  { value: 'government_program', label: 'I represent a Government Program' },
  { value: 'others', label: 'Others' },
];

const INITIAL_PRODUCT_FORM: ProductFormValues = {
  fullName: '',
  country: 'India',
  userType: 'hospital',
  companyName: '',
  phoneNumber: '',
  email: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9()\-\s]{7,20}$/;

interface RadioOptionProps {
  label: string;
  id: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  label,
  id,
  name,
  checked,
  defaultChecked,
  onChange,
}) => (
  <label className="flex items-center space-x-3 cursor-pointer group mb-3">
    <div className="relative flex items-center justify-center">
      <input
        type="radio"
        id={id}
        name={name}
        className="peer sr-only"
        checked={checked}
        defaultChecked={defaultChecked}
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
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
          value={onChange ? value ?? '' : undefined}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className={`w-full bg-transparent border-b py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 font-medium resize-none ${borderClass}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={onChange ? value ?? '' : undefined}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-transparent border-b py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 font-medium ${borderClass}`}
        />
      )}

      {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
    </div>
  );
};

const ContactHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('product');
  const [expertStep, setExpertStep] = useState(1);

  const [productForm, setProductForm] = useState<ProductFormValues>(INITIAL_PRODUCT_FORM);
  const [productErrors, setProductErrors] = useState<ProductFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleProductChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setProductForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setProductErrors((prev) => {
      if (!prev[name as keyof ProductFormValues]) {
        return prev;
      }

      const next = { ...prev };
      delete next[name as keyof ProductFormValues];
      return next;
    });

    if (submitStatus === 'success' || submitStatus === 'error') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleUserTypeChange = (userType: ContactUserType) => {
    setProductForm((prev) => ({ ...prev, userType }));

    setProductErrors((prev) => {
      if (!prev.userType) {
        return prev;
      }
      const next = { ...prev };
      delete next.userType;
      return next;
    });

    if (submitStatus === 'success' || submitStatus === 'error') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const validateProductForm = (values: ProductFormValues): ProductFormErrors => {
    const errors: ProductFormErrors = {};

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

    if (!values.message.trim()) {
      errors.message = 'Message is required.';
    }

    return errors;
  };

  const handleProductSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateProductForm(productForm);
    if (Object.keys(errors).length > 0) {
      setProductErrors(errors);
      setSubmitStatus('error');
      setSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    const payload = {
      fullName: productForm.fullName.trim(),
      country: productForm.country.trim(),
      userType: productForm.userType,
      companyName: productForm.companyName.trim(),
      phoneNumber: productForm.phoneNumber.trim(),
      email: productForm.email.trim(),
      message: productForm.message.trim(),
    };

    setSubmitStatus('submitting');
    setSubmitMessage('Submitting your enquiry...');

    const result = await submitContactEnquiry(payload);

    if (result.success) {
      setSubmitStatus('success');
      setSubmitMessage(
        result.mode === 'firebase'
          ? 'Enquiry submitted successfully. Our team will contact you soon.'
          : 'Enquiry captured in local safe mode. Enable Firebase to store it in Firestore.'
      );
      setProductForm(INITIAL_PRODUCT_FORM);
      setProductErrors({});
      return;
    }

    setSubmitStatus('error');
    setSubmitMessage(result.error ?? 'Unable to submit your enquiry right now. Please try again.');
  };

  const ExpertStepper = () => (
    <div className="flex flex-col items-center mb-16 relative">
      <div className="flex items-center justify-between w-full max-w-[400px] relative z-10">
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 ${expertStep >= 1 ? 'bg-[#00AEEF]' : 'bg-gray-400'}`}>
            {expertStep > 1 ? '✓' : '1'}
          </div>
          <span className={`mt-2 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${expertStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>GENERAL INFORMATION</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 ${expertStep >= 2 ? 'bg-[#00AEEF]' : 'bg-gray-500'}`}>
            2
          </div>
          <span className={`mt-2 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${expertStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>ISSUE WITH DEVICE</span>
        </div>
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[78%] h-[1px] bg-gray-300 -z-0"></div>
    </div>
  );

  const Step1Form = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <InputField label="YOUR FULL NAME" placeholder="Amit Ravishankar" />
        <div className="flex flex-col space-y-2 mb-8 relative">
          <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase">
            COUNTRY <span className="text-red-500">*</span>
          </label>
          <div className="relative border-b border-gray-300">
            <select className="w-full bg-transparent py-2 text-[14px] appearance-none focus:border-[#00AEEF] outline-none font-medium cursor-pointer">
              {COUNTRY_OPTIONS.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase block mb-6">
          TELL US WHO YOU ARE <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            <RadioOption id="hospital" name="who-are-you" label="I'm from a Hospital" defaultChecked />
            <RadioOption id="lab" name="who-are-you" label="I run a Diagnostic Lab" />
            <RadioOption id="academia" name="who-are-you" label="I work in Academia or Research" />
            <RadioOption id="clinician" name="who-are-you" label="I'm a Clinician or Pathologist" />
          </div>
          <div className="flex flex-col">
            <RadioOption id="partner" name="who-are-you" label="I'm a Partner or Distributor" />
            <RadioOption id="government" name="who-are-you" label="I represent a Government Program" />
            <RadioOption id="others" name="who-are-you" label="Others" />
          </div>
        </div>
      </div>

      <InputField label="COMPANY / NAME OF INSTITUTION" placeholder="Your institution name" />
      <InputField label="PHONE NUMBER" placeholder="+91 4567387256" />
      <InputField label="EMAIL" placeholder="Amit@company.com" type="email" />

      <div className="mt-12">
        <button
          type="button"
          onClick={() => setExpertStep(2)}
          className="w-full bg-[#56A8E8] hover:bg-[#4096D8] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200/50 uppercase tracking-widest text-[13px]"
        >
          CONTINUE TO STEP 2
        </button>
      </div>
    </>
  );

  const Step2Form = () => (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col space-y-2 mb-10 relative">
        <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase">
          WHAT DEVICE ARE YOU REPORTING ABOUT? <span className="text-red-500">*</span>
        </label>
        <div className="relative border-b border-gray-300">
          <select className="w-full bg-transparent py-2 text-[14px] appearance-none focus:border-[#00AEEF] outline-none font-medium cursor-pointer" defaultValue="">
            <option value="" disabled>Select device</option>
            <option>Astra Precision Stainer</option>
            <option>VisionX Scanner</option>
            <option>Intellistain Core</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <InputField label="SOFTWARE VERSION NUMBER FOR THE DEVICE" placeholder="e.g. v2.4.1" required={false} />
      <InputField label="PLEASE BRIEFLY DESCRIBE THE ISSUE YOU'RE FACING" placeholder="Describe the problem..." />

      <div className="mb-12">
        <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase block mb-1">
          PLEASE UPLOAD A PICTURE SHOWING THE PROBLEM
        </label>
        <p className="text-[11px] text-gray-400 mb-6 font-medium">Accepted file types: pdf, doc, docx, txt, rtf</p>

        <div className="flex items-center space-x-6">
          <label className="cursor-pointer">
            <input type="file" className="hidden" />
            <div className="px-10 py-2.5 bg-[#f0f0f0] border border-gray-300 rounded-full text-[12px] font-bold text-gray-700 hover:bg-gray-200 transition-colors shadow-sm uppercase tracking-wide">
              CHOOSE FILE
            </div>
          </label>
          <span className="text-[12px] text-gray-400 font-medium italic">max file size 10 mb</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6">
        <button
          type="button"
          onClick={() => setExpertStep(1)}
          className="w-full bg-transparent border border-gray-400 text-gray-500 hover:text-gray-900 hover:border-gray-900 font-bold py-3.5 rounded-xl transition-all uppercase tracking-widest text-[13px]"
        >
          PREVIOUS
        </button>
        <button
          type="submit"
          className="w-full bg-[#56A8E8] hover:bg-[#4096D8] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200/50 uppercase tracking-widest text-[13px]"
        >
          SUBMIT ENQUIRY
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white pt-8 pb-16 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-gray-900 tracking-tight leading-none mb-4">
          Contact us
        </h1>
        <p className="text-base sm:text-lg md:text-[20px] text-gray-500 font-medium mb-8 md:mb-10">
          How can we help you?
        </p>

        <hr className="border-gray-200 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col">
            <div
              onClick={() => {
                setActiveTab('product');
                setExpertStep(1);
              }}
              className={`group cursor-pointer border-b border-gray-100 pb-8 mb-8 flex justify-between items-center transition-all ${activeTab === 'product' ? 'pl-4' : 'hover:pl-2'}`}
            >
              <div className="flex flex-col space-y-2">
                <h3 className={`text-[20px] font-bold transition-colors ${activeTab === 'product' ? 'text-[#00AEEF]' : 'text-gray-400 group-hover:text-[#00AEEF]'}`}>Product Support</h3>
                <p className="text-[14px] text-gray-500">want to ask you a specific question?</p>
              </div>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md transition-all ${activeTab === 'product' ? 'bg-[#00AEEF] shadow-blue-200' : 'bg-gray-200 group-hover:bg-[#00AEEF]'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab('experts');
                setExpertStep(1);
              }}
              className={`group cursor-pointer border-b border-gray-100 pb-8 flex justify-between items-center transition-all ${activeTab === 'experts' ? 'pl-4' : 'hover:pl-2'}`}
            >
              <div className="flex flex-col space-y-2">
                <h3 className={`text-[20px] font-extrabold transition-colors ${activeTab === 'experts' ? 'text-[#00AEEF]' : 'text-gray-900 group-hover:text-[#00AEEF]'}`}>Contact our experts</h3>
                <p className="text-[14px] text-gray-500">I am a client and need support with my Aindra product</p>
              </div>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white transition-all ${activeTab === 'experts' ? 'bg-[#00AEEF] shadow-md shadow-blue-200' : 'bg-gray-400 group-hover:bg-[#00AEEF]'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="w-full bg-[#EBF8FF] rounded-[20px] md:rounded-[24px] p-5 sm:p-7 md:p-10 lg:p-12 shadow-sm border border-blue-100/50">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-[30px] font-extrabold text-gray-900 mb-2">
                  {activeTab === 'product' ? 'Have a question? Speak with our experts' : 'Need help with your Aindra product?'}
                </h2>
                <p className="text-[14px] text-gray-500 font-medium">
                  {activeTab === 'product' ? "We'll get back within 1 business days" : 'Let us know how we can assist you.'}
                </p>
              </div>

              {activeTab === 'experts' && <ExpertStepper />}

              {activeTab === 'product' ? (
                <form className="max-w-[700px] mx-auto" onSubmit={handleProductSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <InputField
                      label="YOUR FULL NAME"
                      placeholder="Amit Ravishankar"
                      name="fullName"
                      value={productForm.fullName}
                      onChange={handleProductChange}
                      error={productErrors.fullName}
                    />

                    <div className="flex flex-col space-y-2 mb-8 relative">
                      <label className="text-[10px] font-extrabold text-gray-900 tracking-wider uppercase">
                        COUNTRY <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative border-b ${productErrors.country ? 'border-red-400' : 'border-gray-300'}`}>
                        <select
                          name="country"
                          value={productForm.country}
                          onChange={handleProductChange}
                          className="w-full bg-transparent py-2 text-[14px] appearance-none outline-none font-medium cursor-pointer"
                        >
                          {COUNTRY_OPTIONS.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      {productErrors.country && <p className="text-[11px] text-red-500 font-medium">{productErrors.country}</p>}
                    </div>
                  </div>

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
                            checked={productForm.userType === option.value}
                            onChange={() => handleUserTypeChange(option.value)}
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
                            checked={productForm.userType === option.value}
                            onChange={() => handleUserTypeChange(option.value)}
                          />
                        ))}
                      </div>
                    </div>
                    {productErrors.userType && <p className="text-[11px] text-red-500 font-medium">{productErrors.userType}</p>}
                  </div>

                  <InputField
                    label="COMPANY / NAME OF INSTITUTION"
                    placeholder="Your institution name"
                    name="companyName"
                    value={productForm.companyName}
                    onChange={handleProductChange}
                    error={productErrors.companyName}
                  />
                  <InputField
                    label="PHONE NUMBER"
                    placeholder="+91 4567387256"
                    name="phoneNumber"
                    value={productForm.phoneNumber}
                    onChange={handleProductChange}
                    error={productErrors.phoneNumber}
                  />
                  <InputField
                    label="EMAIL"
                    placeholder="Amit@company.com"
                    type="email"
                    name="email"
                    value={productForm.email}
                    onChange={handleProductChange}
                    error={productErrors.email}
                  />
                  <InputField
                    label="MESSAGE"
                    placeholder="What is your question?"
                    name="message"
                    value={productForm.message}
                    onChange={handleProductChange}
                    error={productErrors.message}
                    multiline
                  />

                  {submitStatus !== 'idle' && (
                    <p className={`mb-4 text-[12px] font-semibold ${submitStatus === 'success' ? 'text-emerald-600' : submitStatus === 'submitting' ? 'text-[#00AEEF]' : 'text-red-500'}`}>
                      {submitMessage}
                    </p>
                  )}

                  <div className="mt-12">
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="w-full bg-[#56A8E8] hover:bg-[#4096D8] disabled:bg-[#8ec6ee] disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200/50 uppercase tracking-widest text-[13px]"
                    >
                      {submitStatus === 'submitting' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                    </button>
                  </div>
                </form>
              ) : (
                <form className="max-w-[700px] mx-auto" onSubmit={(event) => event.preventDefault()}>
                  {expertStep === 1 ? <Step1Form /> : <Step2Form />}
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
