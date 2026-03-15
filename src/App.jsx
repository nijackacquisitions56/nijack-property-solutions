import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-3 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-3 py-1.5 rounded text-lg shadow-md">
              N.P.S.
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#003366] font-black text-base md:text-xl tracking-tighter leading-none uppercase">
                NIJACK PROPERTY
              </span>
              <span className="text-[#D4AF37] font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase leading-none mt-1">
                S O L U T I O N S
              </span>
            </div>
          </div>

          <a
            href="tel:3303319070"
            className="bg-[#003366] text-white px-5 py-3 md:px-6 md:py-3 rounded-full font-black text-sm md:text-base hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-lg border-2 border-[#D4AF37]/20"
          >
            330-331-9070
          </a>
        </div>
      </nav>

{/* 2. HERO SECTION */}
<section className="bg-[#003366] text-white pt-9 pb-13 md:pt-13 md:pb-18 border-b-8 border-[#D4AF37]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-[#D4AF37] font-black uppercase tracking-[0.28em] text-xs md:text-sm mb-4 italic">
      Northeast Ohio & Nationwide Investment Solutions
    </p>

    <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
      Sell Your House <br className="md:hidden" />
      <span className="relative inline-block px-1">
        FAST
        <svg
          className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-[#D4AF37]"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0 5 Q 50 12 100 5"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
          />
        </svg>
      </span>{" "}
      For <br className="md:hidden" />
      <span className="relative inline-block text-[#D4AF37] px-1">
        CASH
        <svg
          className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-white opacity-40"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0 8 Q 50 2 100 8"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
          />
        </svg>
      </span>
    </h1>

    <p className="text-xl md:text-2xl font-bold italic opacity-95 uppercase tracking-[0.15em] mb-6">
      "Rooted in Care, Driven by Results."
    </p>

    <div className="inline-flex items-center bg-white/10 border border-white/20 px-7 py-3 rounded-full">
      <p className="text-xs md:text-sm font-black uppercase tracking-[0.08em]">
        Closing Timeline: 14–30 Days
      </p>
    </div>

  </div>
</section>
  
     {/* 3. MAIN FORM */}
      <section id="property-form" className="relative -mt-10 md:-mt-12 pb-14 md:pb-16">        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <form id="property-form" className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">            <div className="bg-[#D4AF37] py-5 md:py-6 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-sm md:text-xl tracking-[0.16em]">
                Start Your Successful Closing Today
              </h2>
            </div>

            <div className="p-6 md:p-12 space-y-9 md:space-y-10">
              {/* Step 1 */}
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-lg md:text-2xl italic underline decoration-[#D4AF37]">
                  Step 1: Your Information
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                    Property Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the property address"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                    required
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-lg md:text-2xl italic underline decoration-[#D4AF37]">
                  Step 2: Property Details
                </h3>

                {/* Priority fields first for acquisitions */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                      Sell Timeline
                    </label>
                    <select
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      <option>&lt; 30 Days (Call ASAP)</option>
                      <option>&lt; 90 Days</option>
                      <option>&lt; 180 Days</option>
                      <option>180 Days+</option>
                      <option>Just Exploring Options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                      Situation
                    </label>
                    <select
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your situation
                      </option>
                      <option>Inherited Property</option>
                      <option>Vacant House</option>
                      <option>Tax Delinquency</option>
                      <option>Too Many Repairs</option>
                      <option>Landlord Burnout</option>
                      <option>Foreclosure Concern</option>
                      <option>Divorce</option>
                      <option>Relocation</option>
                      <option>Behind On Payments</option>
                      <option>Need To Sell Fast</option>
                      <option>Just Shopping Around</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                      Property Type
                    </label>
                    <select
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option>Single Family House</option>
                      <option>Not Sure</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                      Property Condition
                    </label>
                    <select
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select condition
                      </option>
                      <option>Excellent</option>
                      <option>Good</option>
                      <option>Needs Minor Repairs</option>
                      <option>Needs Major Repairs</option>
                      <option>Very Distressed</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                    Asking Price
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-bold text-[#003366] mb-2 uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <textarea
                    placeholder="Tell us anything else you'd like us to know"
                    rows="4"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 md:p-5 text-base md:text-lg font-semibold focus:border-[#003366] outline-none resize-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-[#003366] text-white py-5 rounded-full font-black uppercase tracking-[0.15em] text-base md:text-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-xl"
                >
                  Submit Property
                </button>

                <p className="text-center text-xs md:text-sm text-gray-600 font-semibold leading-relaxed">
                  By submitting, you agree to be contacted by Nijack Property Solutions regarding your property.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-15 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Why Sellers Work With Us
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight leading-tight">
              Simple. Clear. Reliable.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-3">
                No Repairs Needed
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                Sell your property as-is. No cleanup, no contractors, and no costly updates before closing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-3">
                No Agent Commissions
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                Skip listing fees and traditional selling costs. We focus on a direct, straightforward solution.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-3">
                Flexible Closing Timeline
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                Need to close quickly or need a little more time? We work to find a timeline that fits your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SITUATIONS WE HANDLE */}
      <section className="py-15 md:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Situations We Handle
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight leading-tight">
              We Understand Life Happens
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Inherited Property',
              'Vacant House',
              'Tax Delinquency',
              'Too Many Repairs',
              'Landlord Burnout',
              'Need To Sell Fast',
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-[1.75rem] p-6 shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-[#003366] font-black uppercase text-base md:text-lg tracking-wide">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-15 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight leading-tight">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-2xl mb-5">
                1
              </div>
              <h3 className="font-black uppercase text-xl mb-3">Submit Property</h3>
              <p className="opacity-90 text-base md:text-lg leading-relaxed">
                Tell us about the property and your situation through the form above.
              </p>
            </div>

            <div className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-2xl mb-5">
                2
              </div>
              <h3 className="font-black uppercase text-xl mb-3">Review Options</h3>
              <p className="opacity-90 text-base md:text-lg leading-relaxed">
                We review the numbers, the property condition, and the timeline to see if a solution makes sense.
              </p>
            </div>

            <div className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-2xl mb-5">
                3
              </div>
              <h3 className="font-black uppercase text-xl mb-3">Close Successfully</h3>
              <p className="opacity-90 text-base md:text-lg leading-relaxed">
                If the numbers work for everyone, we move forward with a smooth and efficient closing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SELLER PRIORITIES */}
      <section className="py-15 md:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Seller Priorities
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight leading-tight">
              What Matters Most To You?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-[#D4AF37]">
              <h3 className="text-[#003366] font-black uppercase text-xl mb-4">
                Speed
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                Need to move quickly? We focus on efficient communication and clear next steps.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-[#D4AF37]">
              <h3 className="text-[#003366] font-black uppercase text-xl mb-4">
                Certainty
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                If you want a direct path instead of endless showings and uncertainty, we aim to keep things simple.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-[#D4AF37]">
              <h3 className="text-[#003366] font-black uppercase text-xl mb-4">
                Convenience
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                No cleaning, no open houses, and no chasing contractors just to get the property ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-15 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight leading-tight">
              Common Seller Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to make repairs first?',
                a: 'No. We work with sellers who want to sell their property in its current condition.',
              },
              {
                q: 'Do you charge commissions or hidden fees?',
                a: 'No agent commissions. Any transaction details would be discussed clearly up front.',
              },
              {
                q: 'How fast can the process move?',
                a: 'Many situations can move quickly, depending on title, property details, and seller timeline.',
              },
              {
                q: 'Am I obligated to accept an offer?',
                a: 'No. Submitting your information simply starts the conversation.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 rounded-[1.75rem] p-6 md:p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-[#003366] font-black uppercase text-base md:text-xl mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRIVACY POLICY */}
      <section id="privacy-policy" className="py-15 md:py-16 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-sm mb-4 text-center">
              Privacy Policy
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#003366] uppercase tracking-tight text-center mb-6">
              Your Information Matters
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg font-medium leading-relaxed">
              <p>
                Nijack Property Solutions respects your privacy. Information submitted through this website is used only to review your property, contact you about your request, and discuss possible next steps.
              </p>
              <p>
                We do not sell your personal information to third parties. We may use trusted service providers to help us operate our business and communicate with you.
              </p>
            By submitting your information, you agree that we may contact you by phone, email, or text regarding your property inquiry.
              </p>
              <p>
        </div>
{/* 10. CTA SECTION: SCROLLS TO FORM */}
<section className="bg-[#003366] text-white py-16 md:py-24 px-6 text-center border-t-8 border-[#D4AF37]">
  <div className="max-w-4xl mx-auto">
    <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-4 italic">
      READY TO TALK?
    </p>
    
    <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
      START WITH YOUR <br className="hidden md:block" /> PROPERTY DETAILS
    </h2>
    
    <p className="text-sm md:text-lg font-medium opacity-80 max-w-2xl mx-auto leading-relaxed mb-10">
      Tell us about the property and your situation. We'll review the details and discuss possible next steps.
    </p>

    {/* THE GOLD BUTTON FIX */}
    <a
      href="#property-form"
      className="inline-block bg-[#D4AF37] text-[#003366] px-10 py-5 rounded-full font-black uppercase tracking-[0.12em] text-sm md:text-lg hover:bg-white transition-all shadow-xl"
    >
      Submit Property Details
    </a>
  </div>
</section>      {/* 11. FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-4">
            <span className="text-[#003366] font-black text-xl md:text-2xl uppercase tracking-tight">
              Nijack Property Solutions
            </span>
          </div>
          <p className="text-gray-600 font-bold text-sm md:text-base mb-6">
            Northeast Ohio & Nationwide Investment Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-black text-gray-400 mb-6 uppercase tracking-widest">
            <span>No Repairs</span>
            <span>•</span>
            <span>No Commissions</span>
            <span>•</span>
            <span>Fast Closings</span>
          </div>
          <div className="text-[10px] md:text-xs text-gray-400 uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
