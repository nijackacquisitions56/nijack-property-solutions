import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-2 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-2 py-1 rounded text-lg shadow-md">
              N.P.S.
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#003366] font-black text-sm md:text-xl tracking-tighter leading-none uppercase">
                NIJACK PROPERTY
              </span>
              <span className="text-[#D4AF37] font-bold text-[8px] md:text-[10px] tracking-[0.3em] uppercase leading-none mt-1">
                S O L U T I O N S
              </span>
            </div>
          </div>
          <a
            href="tel:3303319070"
            className="bg-[#003366] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-black text-xs md:text-sm hover:bg-[#D4AF37] transition-all shadow-lg border-2 border-[#D4AF37]/20"
          >
            330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#003366] text-white pt-10 pb-16 md:pt-14 md:pb-24 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-4 italic">
            NE Ohio & Nationwide Investment Solutions
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
            </span>{' '}
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

          <p className="text-lg md:text-2xl font-bold italic opacity-90 uppercase tracking-[0.2em] mb-8">
            "Rooted in Care, Driven by Results."
          </p>

          <div className="inline-flex items-center bg-white/10 border border-white/20 px-8 py-3 rounded-full">
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em]">
              Successful Closings: 14 - 30 Days
            </p>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM */}
      <section className="relative -mt-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <form className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-4 md:py-6 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-xs md:text-lg tracking-[0.2em]">
                Start Your Successful Closing Today
              </h2>
            </div>

            <div className="p-6 md:p-14 space-y-8 md:space-y-12">
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-base md:text-2xl italic underline decoration-[#D4AF37]">
                  Step 1: Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                />

                <input
                  type="text"
                  placeholder="PROPERTY ADDRESS"
                  className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  required
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-base md:text-2xl italic underline decoration-[#D4AF37]">
                  Step 2: Property Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="PROPERTY TYPE"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ESTIMATED CONDITION"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="TIMELINE TO SELL"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ASKING PRICE (OPTIONAL)"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  />
                </div>

                <textarea
                  placeholder="TELL US ABOUT THE PROPERTY OR YOUR SITUATION"
                  rows="5"
                  className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm md:text-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-xl"
              >
                Submit Property
              </button>

              <p className="text-center text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wide leading-relaxed">
                By submitting, you agree to be contacted by Nijack Property Solutions regarding your property.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
              Why Sellers Work With Us
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight">
              Simple. Clear. Reliable.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-lg mb-3">
                No Repairs Needed
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Sell your property as-is. No cleanup, no contractors, and no costly updates before closing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-lg mb-3">
                No Agent Commissions
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Skip listing fees and traditional selling costs. We focus on a direct, straightforward solution.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-lg mb-3">
                Flexible Closing Timeline
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Need to close quickly or need a little more time? We work to find a timeline that fits your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SITUATIONS WE HANDLE */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
              Situations We Handle
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight">
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
                <h3 className="text-[#003366] font-black uppercase text-sm md:text-base tracking-wide">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-xl mb-5">
                1
              </div>
              <h3 className="font-black uppercase text-lg mb-3">Submit Property</h3>
              <p className="opacity-90 leading-relaxed">
                Tell us about the property and your situation through the form above.
              </p>
            </div>

            <div className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-xl mb-5">
                2
              </div>
              <h3 className="font-black uppercase text-lg mb-3">Review Options</h3>
              <p className="opacity-90 leading-relaxed">
                We review the numbers, the property condition, and the timeline to see if a solution makes sense.
              </p>
            </div>

            <div className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-xl mb-5">
                3
              </div>
              <h3 className="font-black uppercase text-lg mb-3">Close Successfully</h3>
              <p className="opacity-90 leading-relaxed">
                If the numbers work for everyone, we move forward with a smooth and efficient closing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOTIVATION / PRIORITY BOXES */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
              Seller Priorities
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight">
              What Matters Most To You?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-[#D4AF37]">
              <h3 className="text-[#003366] font-black uppercase text-lg mb-4">
                Speed
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Need to move quickly? We focus on efficient communication and clear next steps.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-[#D4AF37]">
              <h3 className="text-[#003366] font-black uppercase text-lg mb-4">
                Certainty
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                If you want a direct path instead of endless showings and uncertainty, we aim to keep things simple.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-[#D4AF37]">
              <h3 className="text-[#003366] font-black uppercase text-lg mb-4">
                Convenience
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                No cleaning, no open houses, and no chasing contractors just to get the property ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight">
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
                <h3 className="text-[#003366] font-black uppercase text-sm md:text-lg mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 bg-[#003366] text-white border-t-8 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
            Ready To Talk?
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Start With Your Property Details
          </h2>
          <p className="text-white/85 text-base md:text-xl font-medium leading-relaxed mb-8">
            Tell us about the property and your situation. We’ll review the details and discuss possible next steps.
          </p>
          <a
            href="tel:3303319070"
            className="inline-block bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-full font-black uppercase tracking-[0.15em] text-sm md:text-base hover:bg-white transition-all shadow-xl"
          >
            Call 330-331-9070
          </a>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-4">
            <span className="text-[#003366] font-black text-lg uppercase tracking-tight">
              Nijack Property Solutions
            </span>
          </div>

          <p className="text-gray-600 font-medium text-sm mb-4">
            Northeast Ohio & Nationwide Investment Solutions
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-500">
            <span>No Repairs</span>
            <span>•</span>
            <span>No Commissions</span>
            <span>•</span>
            <span>Flexible Closings</span>
          </div>

          <div className="mt-6 text-xs text-gray-400">
            © {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
