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
              {/* Step 1: Contact Info */}
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-lg md:text-2xl italic underline decoration-[#D4AF37]">Step 1: Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
                </div>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
                <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, STATE, ZIP)" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" required />
              </div>

              {/* Step 2: Property Details */}
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-wider text-lg md:text-2xl italic underline decoration-[#D4AF37]">Step 2: Property Details</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" defaultValue="">
                    <option value="" disabled>SELL TIME: (REQUIRED)</option>
                    <option>ASAP (RIGHT AWAY)</option>
                    <option>&lt; 30 DAYS</option>
                    <option>&lt; 90 DAYS</option>
                    <option>180 DAYS+</option>
                  </select>
                  <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" defaultValue="">
                    <option value="" disabled>PROPERTY TYPE</option>
                    <option>SINGLE FAMILY HOUSE</option>
                    <option>MULTI-FAMILY</option>
                    <option>CONDO/TOWNHOME</option>
                    <option>LAND</option>
                    <option>OTHER</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" defaultValue="">
                    <option value="" disabled>PROPERTY CONDITION</option>
                    <option>EXCELLENT (MOVE-IN READY)</option>
                    <option>GOOD (MINIMAL REPAIRS)</option>
                    <option>NEEDS WORK (MODERATE REPAIRS)</option>
                    <option>DISTRESSED (MAJOR REPAIRS)</option>
                  </select>
                  <input type="text" placeholder="ASKING PRICE (OPTIONAL)" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366]" />
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                  <p className="text-[#003366] font-black text-xs uppercase mb-4 tracking-widest italic">What is the situation? (Check all that apply)</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around"].map((label) => (
                      <label key={label} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="h-4 w-4 accent-[#003366]" />
                        <span className="font-bold uppercase text-[10px] text-[#003366]">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea placeholder="ADDITIONAL NOTES (TELL US MORE ABOUT THE PROPERTY...)" rows="4" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-semibold outline-none focus:border-[#003366] resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#003366] text-white py-6 rounded-full font-black uppercase tracking-[0.2em] text-xl hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-xl">
                Get My Cash Offer →
              </button>
              <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">By submitting, you agree to be contacted by Nijack Property Solutions regarding your property inquiry.</p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-7">
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-3">No Repairs Needed</h3>
              <p className="text-gray-700 font-medium">Sell your property as-is. No cleanup and no costly updates before closing.</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-3">No Agent Commissions</h3>
              <p className="text-gray-700 font-medium">Skip listing fees and traditional costs. We focus on a direct solution.</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-3">Flexible Closing</h3>
              <p className="text-gray-700 font-medium">Need to move quickly? We work to find a timeline that fits your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRIVACY POLICY */}
      <section id="privacy-policy" className="py-16 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs mb-4 text-center">Privacy Policy</p>
            <h2 className="text-3xl font-black text-[#003366] uppercase tracking-tight text-center mb-6">Your Information Matters</h2>
            <div className="space-y-4 text-gray-700 font-medium leading-relaxed">
              <p>Nijack Property Solutions respects your privacy. Information submitted is used only to review your property and contact you about your request.</p>
              <p>We do not sell your personal information. By submitting, you agree that we may contact you by phone, email, or text regarding your property inquiry.</p>
              <p className="italic pt-4 border-t border-gray-100">Questions? Reach out to us directly at 330-331-9070.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-16 md:py-24 bg-[#003366] text-white border-t-8 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.25em] text-xs mb-4">Ready To Talk?</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">Start With Your Property Details</h2>
          <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed mb-8">Tell us about the property and your situation. We’ll review the details and discuss possible next steps.</p>
          <a href="#property-form" className="inline-block bg-[#D4AF37] text-[#003366] px-10 py-5 rounded-full font-black uppercase tracking-[0.12em] text-sm md:text-lg hover:bg-white transition-all shadow-xl">
            Submit Property Details
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-4">
            <span className="text-[#003366] font-black text-xl md:text-2xl uppercase tracking-tight">Nijack Property Solutions</span>
          </div>
          <p className="text-gray-600 font-bold text-sm md:text-base mb-6">Northeast Ohio & Nationwide Investment Solutions</p>
          <div className="text-[10px] md:text-xs text-gray-400 uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default NijackSite;
