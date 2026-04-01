import React from 'react';

const ContactDetails: React.FC = () => {
  return (
    <section className="w-full bg-white pt-24 pb-0 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Top Left "CONTACT" Indicator */}
        <div className="absolute left-6 md:left-12 top-0 flex flex-col items-start z-20">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase">CONTACT</span>
          <div className="flex items-center w-16 mt-1">
            <div className="h-[1px] flex-1 bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white -ml-[2px]"></div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 tracking-tight ml-0 md:ml-48">
            Get in touch with us
          </h2>
        </div>

        {/* Staggered Contact Info Section */}
        <div className="relative min-h-[160px] mb-0">
          <div className="relative grid grid-cols-1 md:grid-cols-3 h-full">
            
            {/* Column 1: Empty */}
            <div className="flex flex-col items-center md:items-start z-10">
              {/* This column remains empty for balanced staggered layout */}
            </div>

            {/* Column 2: Phone Number Only (Top row) */}
            <div className="flex flex-col items-center md:items-start z-10">
              {/* Phone Number */}
              <div className="md:pt-[60px] w-full flex justify-center md:justify-start">
                <div className="flex items-center space-x-6 md:-translate-x-[48px]">
                  <div className="w-24 h-24 rounded-full bg-[#EBF8FF] flex items-center justify-center shrink-0 shadow-sm border border-blue-50/50">
                    <svg className="w-10 h-10 text-[#56A8E8]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col bg-white pr-4 py-2">
                    <span className="text-[17px] font-extrabold text-gray-900 mb-0.5 whitespace-nowrap">Phone Number</span>
                    <span className="text-[14px] text-gray-500 font-medium tracking-wide">(+91) 95828 78299</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Email Address AND Office Location */}
            <div className="flex flex-col items-center md:items-start z-10">
              {/* Email Address */}
              <div className="md:pt-[60px] w-full flex justify-center md:justify-start">
                <div className="flex items-center space-x-6 md:-translate-x-[48px]">
                  <div className="w-24 h-24 rounded-full bg-[#EBF8FF] flex items-center justify-center shrink-0 shadow-sm border border-blue-50/50">
                    <svg className="w-10 h-10 text-[#56A8E8]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col bg-white pr-4 py-2">
                    <span className="text-[17px] font-extrabold text-gray-900 mb-0.5 whitespace-nowrap">Email Address</span>
                    <span className="text-[14px] text-gray-500 font-medium tracking-wide">contactus@aindra.in</span>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="md:mt-[64px] w-full flex justify-center md:justify-start">
                <div className="flex items-center space-x-6 md:-translate-x-[48px]">
                  <div className="w-24 h-24 rounded-full bg-[#EBF8FF] flex items-center justify-center shrink-0 shadow-sm border border-blue-50/50">
                    <svg className="w-10 h-10 text-[#56A8E8]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col bg-white pr-4 py-2">
                    <span className="text-[17px] font-extrabold text-gray-900 mb-0.5 whitespace-nowrap">Office Location</span>
                    <span className="text-[13px] text-gray-500 font-medium leading-relaxed max-w-[220px]">
                      #26, 19th Cross, 24th Main Rd, J P Nagar Phase 5, Bengaluru, Karnataka 560078
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Map Section - Increased negative margin to md:-mt-80 to move the map even higher as requested */}
      <div className="w-full h-[550px] relative md:-mt-80 grayscale-[0.2] z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1558903348074!2d77.58498007567798!3d12.903038616480575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1513a8907f1f%3A0x8673322197609a4b!2sAindra%20Systems!5e0!3m2!1sen!2sin!4v1715858853488!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aindra Systems Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactDetails;