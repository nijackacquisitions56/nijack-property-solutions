import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 text-base md:text-lg leading-relaxed scroll-smooth">
      {/* 1. HEADER */}
      <nav className="bg-white py-3 border-b-4 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 md:px-5 flex justify-between items-center gap-3">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="bg-[#003366] text-white font-black px-3 py-2 md:px-3.5 md:py-2 rounded text-lg md:text-lg shadow-md shrink-0">
              N.P.S.
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-[#003366] font-black text-sm md:text-xl tracking-tighter leading-none uppercase">
                NIJACK PROPERTY
              </span>
              <span className="text-[#D4AF37] font-bold text-[8px] md:text-[10px] tracking-[0.22em] md:tracking-[0.28em] uppercase leading-none mt-1">
                S O L U T I O N S
              </span>
            </div>
          </div>

          <a
            href="tel:3303319070"
            className="bg-[#003366] text-white px-4 py-3 md:px-6 md:py-3 rounded-full font-black text-sm md:text-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-lg border-2 border-[#D4AF37]/20 shrink-0 text-center leading-tight"
          >
            330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#003366] text-white pt-12 pb-14 md:pt-16 md:pb-20 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs md:text-lg mb-6 italic">
            Northeast Ohio & Nationwide Investment Solutions
          </p>

          <h1 className="text-4xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-tight">
            Sell Your House <br className="md:hidden" />
            <span className="relative inline-block px-1">
              FAST
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-[#D4AF37]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 12 100 5"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                />
              </svg>
            </span>{' '}
            For <br className="md:hidden" />
            <span className="relative inline-block text-[#D4AF37] px-1">
              CASH
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-white opacity-40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q 50 2 100 8"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-4xl font-bold italic opacity-95 uppercase tracking-[0.15em] mb-6">
            "Rooted in Care, Driven by Results."
          </p>

          <p className="text-base md:text-2xl text-white/95 font-black max-w-4xl mx-auto leading-relaxed mb-5 uppercase tracking-[0.06em]">
            Sell Your House As-Is With No Repairs, No Commissions, And A Closing On
            Your Timeline.
          </p>

          <p className="text-sm md:text-xl text-white/85 font-semibold max-w-3xl mx-auto leading-relaxed mb-8">
            Helping Northeast Ohio homeowners find solutions for difficult property
            situations with a simple, straightforward process.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <div className="inline-flex items-center bg-white/10 border-2 border-white/30 px-8 py-4 rounded-full">
              <p className="text-sm md:text-xl font-black uppercase tracking-[0.1em]">
                Closing Timeline: 14–30 Days
              </p>
            </div>

            <a
              href="#property-form"
              className="inline-block bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-full font-black uppercase tracking-[0.08em] text-sm md:text-lg hover:bg-white transition-all shadow-xl"
            >
              Get My Property Reviewed
            </a>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 border border-white/25 rounded-2xl px-5 py-4">
            <p className="text-sm md:text-lg font-bold leading-relaxed">
              All transactions are handled through a licensed title company to help
              ensure a safe and secure closing process.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUICK BENEFITS */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 -mt-8 relative z-10 mb-4">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
            <p className="text-[#003366] font-black text-base md:text-lg uppercase">
              No Repairs Needed
            </p>
            <p className="text-gray-600 text-sm md:text-base font-semibold mt-2 leading-relaxed">
              Sell your property as-is without cleaning, fixing, or updating it
              first.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
            <p className="text-[#003366] font-black text-base md:text-lg uppercase">
              No Commissions
            </p>
            <p className="text-gray-600 text-sm md:text-base font-semibold mt-2 leading-relaxed">
              No agent fees or commissions. Just a direct review of your property.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
            <p className="text-[#003366] font-black text-base md:text-lg uppercase">
              Flexible Closing
            </p>
            <p className="text-gray-600 text-sm md:text-base font-semibold mt-2 leading-relaxed">
              We work with different timelines and aim to find a solution that fits
              your situation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MAIN FORM */}
      <section id="property-form" className="pb-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <form
            action="https://formspree.io/f/xaqpozbn"
            method="POST"
            className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl border-2 border-gray-100 overflow-hidden"
          >
            <div className="bg-[#D4AF37] py-6 md:py-8 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-xl md:text-3xl tracking-[0.1em]">
                Start Your Successful Closing Today
              </h2>
              <p className="text-[#003366] font-bold text-sm md:text-lg mt-3">
                Takes less than 60 seconds to get started.
              </p>
            </div>

            <div className="p-8 md:p-16 space-y-12">
              <div className="text-center">
                <p className="text-[#003366] font-bold text-sm md:text-lg">
                  No obligation. No pressure. Just explore your options.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-xl md:text-4xl italic underline decoration-[#D4AF37] decoration-4">
                  Step 1: Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="FULL NAME"
                    className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-lg md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-lg md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-lg md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400"
                  required
                />

                <input
                  type="text"
                  name="propertyAddress"
                  placeholder="PROPERTY ADDRESS (STREET, CITY, STATE, ZIP)"
                  className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-lg md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-8">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-xl md:text-4xl italic underline decoration-[#D4AF37] decoration-4">
                  Step 2: Property Details
                </h3>

                <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border-4 border-[#D4AF37]/40 shadow-inner">
                  <p className="text-[#003366] font-black text-lg md:text-xl uppercase mb-8 tracking-[0.1em] text-center italic">
                    What is the situation? (Check all that apply)
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Probate',
                      'Inherited',
                      'Tired Landlord',
                      'Needs Repairs',
                      'Foreclosure',
                      'Vacant',
                      'Relocating',
                      'Problem Tenant',
                      'Shopping Around',
                      'Other',
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm"
                      >
                        <input
                          type="checkbox"
                          name="situation"
                          value={label}
                          className="h-7 w-7 accent-[#003366]"
                        />
                        <span className="font-black uppercase text-sm md:text-lg text-[#003366]">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="additionalNotes"
                  placeholder="ADDITIONAL NOTES (TELL US MORE ABOUT THE PROPERTY...)"
                  rows="4"
                  className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-lg md:text-2xl font-bold outline-none focus:border-[#003366] resize-none placeholder:text-gray-400"
                ></textarea>

                <div className="space-y-4">
                  <label className="block text-[#003366] font-black text-lg md:text-xl uppercase tracking-widest italic">
                    How fast do you need to sell?{' '}
                    <span className="text-[#D4AF37]">— CLICK BELOW</span>
                  </label>
                  <select
                    name="timeline"
                    className="w-full bg-white border-4 border-[#003366] rounded-2xl p-6 text-lg md:text-2xl font-black text-[#003366] outline-none shadow-lg cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      CLICK HERE TO SELECT TIMELINE
                    </option>
                    <option>ASAP (RIGHT AWAY)</option>
                    <option>&lt; 30 DAYS</option>
                    <option>&lt; 90 DAYS</option>
                    <option>&lt; 180 DAYS</option>
                    <option>180 DAYS+</option>
                    <option>JUST EXPLORING OPTIONS</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-[#003366] font-black text-lg md:text-xl uppercase tracking-widest italic">
                    What Price Would You Consider For A Cash Offer?
                  </label>
                  <input
                    type="text"
                    name="priceExpectation"
                    placeholder="EXAMPLE: $150,000"
                    className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-lg md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-5 text-center">
                <p className="text-[#003366] font-bold text-sm md:text-lg leading-relaxed">
                  Your information is only used to review your property and discuss
                  possible options. There is no obligation to sell.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-7 md:py-10 rounded-full font-black uppercase tracking-[0.15em] text-xl md:text-4xl hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-2xl"
              >
                Submit My Property →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-lg mb-4 italic">
            Our Simple Process
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: '1',
                t: 'SHARE INFO',
                d: 'Tell us about the property and your situation through the form above.',
              },
              {
                n: '2',
                t: 'REVIEW OPTIONS',
                d: 'We review the details, property condition, and your timeline to see if a solution makes sense.',
              },
              {
                n: '3',
                t: 'CLOSE SAFELY',
                d: 'If the numbers work, we move forward through a licensed title company for a smooth closing process.',
              },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-[#003366] text-white rounded-[3rem] p-10 shadow-2xl text-center border-b-8 border-[#D4AF37]"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-4xl mb-6 shadow-lg">
                  {step.n}
                </div>
                <h3 className="font-black uppercase text-2xl mb-4 tracking-wider">
                  {step.t}
                </h3>
                <p className="text-xl opacity-95 font-medium leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#003366] uppercase mb-12 italic underline decoration-[#D4AF37]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8 text-left">
            {[
              {
                q: 'DO I NEED TO MAKE REPAIRS?',
                a: 'No. We review houses in as-is condition, so there is no need to clean, fix, or update the property before reaching out.',
              },
              {
                q: 'HOW IS MY CASH OFFER DETERMINED?',
                a: 'Our review is based on the property condition, location, timeline, market activity, and the overall situation. Every property is different.',
              },
              {
                q: 'DO I NEED TO CLEAN OUT THE PROPERTY?',
                a: 'In many situations, no. We understand some properties are overwhelming, and we work to keep the process as simple as possible.',
              },
              {
                q: 'WHAT IF I STILL OWE MONEY ON THE PROPERTY?',
                a: 'That does not automatically stop the process. We can review the situation and discuss possible next steps based on the property and payoff amount.',
              },
              {
                q: 'HOW FAST CAN THE PROCESS MOVE?',
                a: 'Some situations can move quickly depending on title, property details, and seller timeline. The sooner we receive your information, the sooner we can review it.',
              },
              {
                q: 'ARE THERE COMMISSIONS?',
                a: 'No. We are direct buyers, not agents. You pay zero agent fees or commissions.',
              },
              {
                q: 'IS THIS A LEGITIMATE PROCESS?',
                a: 'Yes. Transactions are handled through a licensed title company, which helps ensure paperwork, ownership verification, and closing funds are processed securely. You do not pay anything upfront.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg"
              >
                <h3 className="text-[#003366] font-black uppercase text-xl md:text-2xl mb-4 tracking-tight">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-lg md:text-xl font-bold leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRIVACY & PARTNER DISCLOSURE */}
      <section id="privacy-policy" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-100 rounded-[3rem] p-10 md:p-16 border-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase text-center mb-10">
              Your Trust is Our Priority
            </h2>
            <p>
We are real estate investors and not licensed real estate agents. We may market properties and assign our contractual interest to other buyers for a fee.
</p>
          </p>                  {/* 8. HUMAN TOUCH SECTION */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase mb-6">
            A Simple, Honest Path Forward
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl font-bold leading-relaxed">
            We understand every property situation is different. Our goal is to
            provide a clear, respectful process so you can explore your options
            without pressure.
          </p>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="bg-[#003366] text-white py-20 md:py-32 px-6 text-center border-t-8 border-[#D4AF37]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xl mb-6">
            READY TO MOVE FORWARD?
          </p>

          <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-tight">
            START WITH YOUR <br /> PROPERTY DETAILS
          </h2>

          <p className="text-base md:text-2xl font-bold mb-8 text-white/90">
            No obligation. No pressure. Just see what your options look like.
          </p>

          <a
            href="#property-form"
            className="inline-block bg-[#D4AF37] text-[#003366] px-10 py-5 md:px-16 md:py-8 rounded-full font-black uppercase tracking-[0.08em] text-lg md:text-3xl hover:bg-white transition-all shadow-2xl"
          >
            Submit My Details Now
          </a>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white py-16 border-t-8 border-[#003366] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#003366] font-black text-2xl md:text-4xl uppercase block mb-4 tracking-tighter">
            Nijack Property Solutions
          </span>

          <p className="text-gray-600 font-black text-lg md:text-2xl mb-4 uppercase tracking-[0.2em]">
            Northeast Ohio & Nationwide
          </p>

          <p className="text-gray-500 font-bold text-sm md:text-lg mb-8">
            Direct property solutions with a simple and secure closing process.
          </p>

          <div className="mb-8">
            <a
              href="#privacy-policy"
              className="text-[#003366] font-black underline text-lg uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <div className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-widest italic">
            © {new Date().getFullYear()} Nijack Property Solutions. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
