import React from 'react';

interface JobOpening {
  id: number;
  title: string;
  location: string;
}

const benefits = [
  {
    title: 'Health and Wellness',
    description:
      "We care about you and your health, with comprehensive benefits that can be tailored to your lifestyle.",
  },
  {
    title: 'Work-life Balance',
    description:
      'Flexible schedules help you do your best work while making space for life outside the workplace.',
  },
  {
    title: 'Paid Time-off',
    description: 'A generous PTO policy supports rest, recovery, and long-term team wellbeing.',
  },
  {
    title: 'Educational Assistance',
    description: 'We invest in your growth with support for relevant educational development.',
  },
];

const jobs: JobOpening[] = [
  { id: 1, title: 'Developer', location: 'Bangalore, Karnataka - Full time' },
  { id: 2, title: 'Electronics Engineer', location: 'Bangalore, Karnataka - Full time' },
  { id: 3, title: 'Mechatronics Engineer', location: 'Bangalore, Karnataka - Full time' },
  { id: 4, title: 'Mechanical Engineer', location: 'Bangalore, Karnataka - Full time' },
];

const JobItem: React.FC<{ job: JobOpening }> = ({ job }) => (
  <div className="group border-t border-gray-100 py-5 sm:py-6 md:py-7 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors">
    <div className="min-w-0">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 break-words">{job.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{job.location}</p>
    </div>
    <button
      className="shrink-0 inline-flex min-h-11 min-w-11 h-11 w-11 items-center justify-center rounded-full bg-[#00AEEF] text-white shadow-sm transition-transform group-hover:scale-105 active:scale-95"
      aria-label={`Open application for ${job.title}`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

const FormField = ({
  label,
  children,
  required = true,
  sublabel = '',
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  sublabel?: string;
}) => (
  <div>
    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-gray-800">
      {label} {required && <span className="text-red-500">*</span>}
      {sublabel ? <span className="ml-2 font-normal normal-case tracking-normal text-gray-500">{sublabel}</span> : null}
    </label>
    {children}
  </div>
);

const baseInputClass =
  'w-full min-h-11 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20';

const ApplicationForm: React.FC = () => {
  return (
    <section className="mt-10 sm:mt-14 md:mt-16 rounded-3xl border border-gray-100 bg-[#f1f4f6] p-5 sm:p-7 md:p-10 lg:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Interested in Joining Aindra?</h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
          Whether there is an opening now or you want to be considered for future roles, share your details below.
        </p>
      </div>

      <form className="mt-8 md:mt-10" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-x-8">
          <FormField label="Your Full Name">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" placeholder="First" className={baseInputClass} />
              <input type="text" placeholder="Last" className={baseInputClass} />
            </div>
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Email">
              <input type="email" placeholder="email@example.com" className={baseInputClass} />
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField label="Phone Number">
              <input type="tel" placeholder="+91 00000 00000" className={baseInputClass} />
            </FormField>
          </div>

          <FormField label="Location">
            <input type="text" placeholder="City, Country" className={baseInputClass} />
          </FormField>

          <FormField label="Gender">
            <input type="text" placeholder="Preferred Gender" className={baseInputClass} />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="LinkedIn Profile">
              <input type="url" placeholder="https://linkedin.com/in/username" className={baseInputClass} />
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField label="Position Applying For">
              <div className="relative">
                <select className={`${baseInputClass} appearance-none pr-10`} defaultValue="">
                  <option value="" disabled>
                    Select a position
                  </option>
                  <option value="Developer">Developer</option>
                  <option value="Electronics Engineer">Electronics Engineer</option>
                  <option value="Mechatronics Engineer">Mechatronics Engineer</option>
                  <option value="Mechanical Engineer">Mechanical Engineer</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </FormField>
          </div>

          <FormField label="Years of Experience">
            <input type="text" placeholder="e.g. 5 years" className={baseInputClass} />
          </FormField>

          <FormField label="Available From">
            <input type="text" placeholder="Date or notice period" className={baseInputClass} />
          </FormField>

          <FormField label="CV" sublabel="Accepted: pdf, doc, docx, txt, rtf">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex min-h-11 items-center rounded-full border border-gray-200 bg-white px-5 text-xs font-bold uppercase tracking-[0.08em] text-gray-800 hover:bg-gray-50"
              >
                Choose File
              </button>
              <span className="text-xs uppercase tracking-[0.08em] text-gray-500">Max 10MB</span>
            </div>
          </FormField>

          <FormField label="Cover Letter" sublabel="Accepted: pdf, doc, docx, txt, rtf">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex min-h-11 items-center rounded-full border border-gray-200 bg-white px-5 text-xs font-bold uppercase tracking-[0.08em] text-gray-800 hover:bg-gray-50"
              >
                Choose File
              </button>
              <span className="text-xs uppercase tracking-[0.08em] text-gray-500">Max 10MB</span>
            </div>
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Tell us why you are a great fit">
              <textarea
                placeholder="Share your motivation, relevant skills, or career goals"
                rows={6}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 resize-y"
              />
            </FormField>
          </div>
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#00AEEF] px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0096ce]"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 md:px-8 md:py-20 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 md:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00AEEF]">Benefits</span>
          <h2 className="mt-3 max-w-[980px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight text-[#111827]">
            Our team values focus, dedication, innovation, and the power of what can happen when they converge.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF0F3]" />
              <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-600">{benefit.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00AEEF]">Positions</span>
          <h2 className="mt-3 max-w-[980px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight text-[#111827]">
            Current openings at Aindra Systems
          </h2>

          <div className="mt-6 md:mt-8 max-w-4xl border-b border-gray-100">
            {jobs.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </div>

          <ApplicationForm />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
