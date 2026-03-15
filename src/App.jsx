import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed scroll-smooth">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-3 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-3 py-1.5 rounded text-lg shadow-md">N.P.S.</div>
            <div className="flex flex-col text-left">
              <span className="text-[#003366] font-black text-base md:text-xl tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
              <span className="text-[#D4AF37] font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
            </div>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-5 py-3 md:px-6 md:py-3 rounded-full font-black text-sm md:text-base hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-lg border-2 border-[#D4AF37]/20">
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
            Sell Your House <span className="relative inline-block px-1">FAST<svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/></svg></span> For <span className="relative inline-block text-[#D4AF37] px-1">CASH<svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="6" fill="transparent"/></svg></span>
          </h1>
          <p className="text-xl md:text-2xl font-bold italic opacity-95 uppercase tracking-[0.15em] mb-6">"Rooted in Care, Driven by Results."</p>
          <div className="inline-flex items-center bg-white/10 border border-white/20 px-7 py-3 rounded-full">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.08em]">Closing Timeline: 14–30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM */}
      <section id="property-form" className="relative -mt-10 md:-mt-12 pb-14 md:pb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <form className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-5 md:py-6 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-sm md:text-xl tracking-[0.16em]">Start Your Successful Closing Today</h2>
            </div>

            <div className="p-6 md:p-12 space-y-10">
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-lg md:text-2xl italic underline decoration-[#D4AF37]">Step 1: Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
                </div>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
                <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, STATE, ZIP)" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
              </div>

              {/* ENLARGED SITUATION SECTION */}
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-lg md:text-2xl italic underline decoration-[#D4AF37]">Step 2: Property Details</h3>
                <div className="bg-gray-50 p-8 md:p-10 rounded-[2rem] border-2 border-[#D4AF37]/30 shadow-inner">
                  <p className="text-[#003366] font-black text-sm uppercase mb-6 tracking-[0.2em] italic text-center">What is the situation? (Check all that apply)</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around"].map((label) => (
                      <label key={label} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#D4AF37] transition-colors cursor-pointer shadow-sm">
                        <input type="checkbox" className="h-5 w-5 accent-[#003366]" />
                        <span className="font-black uppercase text-[10px] md:text-[12px] tracking-tighter text-[#003366]">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 pt-4">
                  <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" defaultValue="">
                    <option value="" disabled>SELL TIME: (REQUIRED)</option>
                    <option>ASAP (RIGHT AWAY)</option>
                    <option>&lt; 30 DAYS</option>
                    <option>&lt; 90 DAYS</option>
                  </select>
                  <input type="text" placeholder="ASKING PRICE (OPTIONAL)" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" />
                </div>
                <textarea placeholder="ADDITIONAL NOTES (TELL US MORE...)" rows="4" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366] resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#003366] text-white py-6 rounded-full font-black uppercase tracking-[0.2em] text-xl hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-xl">
                Get My Cash Offer →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs mb-4">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tight">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', t: 'Submit Property', d: 'Tell us about the property and your situation through the form above.' },
              { n: '2', t: 'Review Options', d: 'We review the details and timeline to see if a solution makes sense.' },
              { n: '3', t: 'Close Successfully', d: 'If the numbers work, we move forward with a smooth closing process.' }
            ].map((step) => (
              <div key={step.n} className="bg-[#003366] text-white rounded-[2rem] p-8 shadow-xl text-center border-b-4 border-[#D4AF37]">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37] text-[#003366] flex items-center justify-center font-black text-2xl mb-5">{step.n}</div>
                <h3 className="font-black uppercase text-xl mb-3">{step.t}</h3>
                <p className="opacity-90 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#003366] uppercase text-center mb-12 italic">Common Seller Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Do I need to make repairs?', a: 'No. We work with sellers who want to sell as-is.' },
              { q: 'Are there hidden fees?', a: 'No agent commissions. We focus on a direct solution.' }
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-[#003366] font-black uppercase text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRIVACY POLICY & PARTNER DISCLOSURE */}
      <section id="privacy-policy" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs text-center mb-4 text-[#D4AF37]">Your Privacy & Peace of Mind</p>
            <h2 className="text-3xl font-black text-[#003366] uppercase text-center mb-8">Your Information Matters</h2>
            <div className="space-y-4 text-gray-700 font-medium leading-relaxed">
              <p>Nijack Property Solutions respects your privacy. Information submitted is used only to review your property and contact you regarding your request.</p>
              <p>We do not sell your personal information. By submitting, you agree that we may contact you by phone, email, or text regarding your property inquiry.</p>
              <p className="pt-4 border-t border-gray-200 text-sm italic">Depending on the property, we may work with trusted investment partners to help create possible solutions for sellers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-[#003366] text-white py-16 md:py-24 px-6 text-center border-t-8 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs mb-4 italic">READY TO TALK?</p>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">START WITH YOUR <br className="hidden md:block" /> PROPERTY DETAILS</h2>
          <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed mb-10">Tell us about the property and your situation. We’ll review the details and discuss possible next steps.</p>
          <a href="#property-form" className="inline-block bg-[#D4AF37] text-[#003366] px-10 py-5 rounded-full font-black uppercase tracking-[0.12em] text-sm md:text-lg hover:bg-white transition-all shadow-xl">
            Submit Property Details
          </a>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[#003366] font-black text-xl md:text-2xl uppercase block mb-2">Nijack Property Solutions</span>
          <p className="text-gray-600 font-bold text-sm mb-6 uppercase tracking-widest">NE Ohio & Nationwide Investment Solutions</p>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">© {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
};

export default NijackSite;
