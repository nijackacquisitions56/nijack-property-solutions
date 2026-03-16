import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 text-lg leading-relaxed scroll-smooth">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-4 border-b-4 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-4 py-2 rounded text-xl shadow-md">N.P.S.</div>
            <div className="flex flex-col text-left">
              <span className="text-[#003366] font-black text-lg md:text-2xl tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
              <span className="text-[#D4AF37] font-bold text-[10px] md:text-[12px] tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
            </div>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-base md:text-xl hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-lg border-2 border-[#D4AF37]/20">
            330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#003366] text-white pt-12 pb-16 md:pt-16 md:pb-24 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-sm md:text-lg mb-6 italic">
            Northeast Ohio & Nationwide Investment Solutions
          </p>
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-tight">
            Sell Your House <br className="md:hidden" />
            <span className="relative inline-block px-1">
              FAST
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="10" fill="transparent" />
              </svg>
            </span> For <br className="md:hidden" />
            <span className="relative inline-block text-[#D4AF37] px-1">
              CASH
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold italic opacity-95 uppercase tracking-[0.15em] mb-10">"Rooted in Care, Driven by Results."</p>
          <div className="inline-flex items-center bg-white/10 border-2 border-white/30 px-8 py-4 rounded-full">
            <p className="text-sm md:text-xl font-black uppercase tracking-[0.1em]">Closing Timeline: 14–30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM */}
      <section id="property-form" className="relative -mt-12 pb-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <form className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl border-2 border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-6 md:py-8 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-xl md:text-3xl tracking-[0.1em]">Start Your Successful Closing Today</h2>
            </div>

            <div className="p-8 md:p-16 space-y-12">
              <div className="space-y-8">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-2xl md:text-4xl italic underline decoration-[#D4AF37] decoration-4">Step 1: Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-xl md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-xl md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400" required />
                </div>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-xl md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400" required />
                <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, STATE, ZIP)" className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-xl md:text-2xl font-bold outline-none focus:border-[#003366] placeholder:text-gray-400" required />
              </div>

              <div className="space-y-8">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-2xl md:text-4xl italic underline decoration-[#D4AF37] decoration-4">Step 2: Property Details</h3>
                
                <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border-4 border-[#D4AF37]/40 shadow-inner">
                  <p className="text-[#003366] font-black text-lg md:text-xl uppercase mb-8 tracking-[0.1em] text-center italic">What is the situation? (Check all that apply)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around"].map((label) => (
                      <label key={label} className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm">
                        <input type="checkbox" className="h-7 w-7 accent-[#003366]" />
                        <span className="font-black uppercase text-sm md:text-lg text-[#003366]">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[#003366] font-black text-lg md:text-xl uppercase tracking-widest italic">
                    How fast do you need to sell? <span className="text-[#D4AF37]">— CLICK BELOW</span>
                  </label>
                  <select className="w-full bg-white border-4 border-[#003366] rounded-2xl p-6 text-xl md:text-2xl font-black text-[#003366] outline-none shadow-lg cursor-pointer" defaultValue="">
                    <option value="" disabled>CLICK HERE TO SELECT TIMELINE</option>
                    <option>ASAP (RIGHT AWAY)</option>
                    <option>&lt; 30 DAYS</option>
                    <option>&lt; 90 DAYS</option>
                    <option>180 DAYS+</option>
                    <option>JUST EXPLORING OPTIONS</option>
                  </select>
                </div>

                <textarea placeholder="ADDITIONAL NOTES (TELL US MORE ABOUT THE PROPERTY...)" rows="4" className="w-full bg-gray-50 border-b-4 border-gray-300 p-6 text-xl md:text-2xl font-bold outline-none focus:border-[#003366] resize-none placeholder:text-gray-400"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#003366] text-white py-8 md:py-10 rounded-full font-black uppercase tracking-[0.2em] text-2xl md:text-4xl hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-2xl">
                Get My Cash Offer →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-lg mb-4 italic">Our Simple Process</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { n: '1', t: 'SHARE INFO', d: 'Tell us about the property and your situation through the form above.' },
              { n: '2', t: 'REVIEW OPTIONS', d: 'We review the details and timeline to see if a solution makes sense.' },
              { n: '3', t: 'CLOSE FAST', d: 'If the numbers work, we move forward with a smooth closing process.' }
            ].map((step) => (
              <div key={step.n} className="bg-[#003366] text-white rounded-[3rem] p-10 shadow-2xl text-center border-b-8 border-[#D4AF37]">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-4xl mb-6 shadow-lg">{step.n}</div>
                <h3 className="font-black uppercase text-2xl mb-4 tracking-wider">{step.t}</h3>
                <p className="text-xl opacity-95 font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#003366] uppercase mb-12 italic underline decoration-[#D4AF37]">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            {[
              { q: 'DO I NEED TO MAKE REPAIRS?', a: 'No. We buy houses in as-is condition. You pay zero for repairs or cleaning.' },
              { q: 'ARE THERE COMMISSIONS?', a: 'No. We are direct buyers, not agents. You pay zero agent fees.' }
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg">
                <h3 className="text-[#003366] font-black uppercase text-xl md:text-2xl mb-4 tracking-tight">{faq.q}</h3>
                <p className="text-gray-700 text-lg md:text-xl font-bold leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRIVACY & PARTNER DISCLOSURE SECTION */}
      <section id="privacy-policy" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-100 rounded-[3rem] p-10 md:p-16 border-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase text-center mb-10">Your Trust is Our Priority</h2>
            <div className="space-y-6 text-xl md:text-2xl text-gray-700 font-bold leading-relaxed text-center md:text-left">
              <p>Nijack Property Solutions values your privacy. Your information is used only to review your property and provide your cash offer.</p>
              <p>By submitting, you agree that we may contact you regarding your inquiry. Depending on the situation, we may work with trusted investment partners to help create the best possible solution for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-[#003366] text-white py-20 md:py-32 px-6 text-center border-t-8 border-[#D4AF37]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xl mb-6">READY TO MOVE FORWARD?</p>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-tight">START WITH YOUR <br /> PROPERTY DETAILS</h2>
          <a href="#property-form" className="inline-block bg-[#D4AF37] text-[#003366] px-12 py-6 md:px-16 md:py-8 rounded-full font-black uppercase tracking-[0.12em] text-xl md:text-3xl hover:bg-white transition-all shadow-2xl">
            Submit My Details Now
          </a>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-white py-16 border-t-8 border-[#003366] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#003366] font-black text-2xl md:text-4xl uppercase block mb-4 tracking-tighter">Nijack Property Solutions</span>
          <p className="text-gray-600 font-black text-lg md:text-2xl mb-6 uppercase tracking-[0.2em]">Northeast Ohio & Nationwide</p>
          
          <div className="mb-8">
             <a href="#privacy-policy" className="text-[#003366] font-black underline text-lg uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
               Privacy Policy
             </a>
          </div>

          <div className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-widest italic">© {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
};

export default NijackSite;
