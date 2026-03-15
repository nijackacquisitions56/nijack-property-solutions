import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HEADER - COMPACT */}
      <nav className="bg-white py-2 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-2 py-1 rounded text-lg shadow-md">N.P.S.</div>
            <div className="flex flex-col">
              <span className="text-[#003366] font-black text-sm md:text-xl tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
              <span className="text-[#D4AF37] font-bold text-[8px] md:text-[10px] tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
            </div>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-black text-xs md:text-sm hover:bg-[#D4AF37] transition-all shadow-lg border-2 border-[#D4AF37]/20">
            330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION - SMALLER VERTICAL HEIGHT */}
      <section className="bg-[#003366] text-white pt-6 pb-12 md:pt-8 md:pb-16 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-3 italic">
            NE Ohio & Nationwide Investment Solutions
          </p>
          <h1 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-tight">
            Sell Your House <br className="md:hidden"/>
            <span className="relative inline-block px-1">
              FAST
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/></svg>
            </span> For <br className="md:hidden"/>
            <span className="relative inline-block text-[#D4AF37] px-1">
              CASH
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="6" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="text-sm md:text-xl font-bold italic opacity-90 uppercase tracking-[0.2em] mb-6">
            "Rooted in Care, Driven by Results."
          </p>
          <div className="inline-flex items-center bg-white/10 border border-white/20 px-6 py-2 rounded-full">
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em]">Successful Closings: 14 - 30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-4 md:px-6 -mt-6 mb-10">
        <div className="bg-black rounded-[1.5rem] md:rounded-[2rem] aspect-video shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center relative group cursor-pointer">
          <div className="text-center p-4">
            <div className="text-[#D4AF37] text-4xl md:text-6xl mb-2">▶</div>
            <p className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs italic leading-tight">The Nijack Advantage Strategy Session</p>
          </div>
        </div>
      </section>

      {/* 4. MAIN FORM - LARGER FONT FOR READABILITY */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <form className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-4 md:py-6 text-center">
              <h2 className="text-[#003366] font-black uppercase text-xs md:text-lg tracking-[0.2em]">Start Your Successful Closing Today</h2>
            </div>
            
            <div className="p-6 md:p-14 space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-base md:text-2xl italic underline decoration-[#D4AF37]">Step 1: Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 md:p-5 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 md:p-5 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none" required />
                </div>
                <input type="text" placeholder="PROPERTY ADDRESS" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 md:p-5 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none" required />
              </div>

              {/* STEP 2 */}
              <div className="space-y-8 p-6 md:p-10 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-gray-200 shadow-inner">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-base md:text-2xl italic underline decoration-[#D4AF37]">Step 2: The Situation</h3>
                <div className="space-y-4">
                  <label className="block text-[11px] md:text-[14px] font-black text-[#003366] uppercase tracking-[0.2em] italic ml-1">SELL TIME: (REQUIRED)</label>
                  <select name="selling_timeline" required className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 md:p-5 font-black uppercase text-xs md:text-lg text-[#003366] outline-none shadow-md">
                    <option value="" disabled selected>Select Your Timeline</option>
                    <option value="ASAP">ASAP (RIGHT AWAY)</option>
                    <option value="< 30 Days">&lt; 30 DAYS</option>
                    <option value="< 90 Days">&lt; 90 DAYS</option>
                    <option value="< 180 Days">&lt; 180 DAYS</option>
                    <option value="180 Days+">180 DAYS+</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around"].map((label) => (
                    <label key={label} className="flex items-center gap-3 p-3 md:p-4 bg-white rounded-xl border border-gray-100 cursor-pointer hover:border-[#D4AF37] transition-all">
                      <input type="checkbox" className="h-4 w-4 md:h-5 md:w-5 accent-[#003366]" />
                      <span className="font-black uppercase text-[9px] md:text-[13px] tracking-tighter text-[#003366]">{label}</span>
                    </label>
                  ))}
                </div>
                <textarea placeholder="ANY OTHER DETAILS?" className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 md:p-5 font-black uppercase text-[10px] md:text-sm focus:border-[#003366] outline-none mt-4 h-24 md:h-32" />
              </div>

              <button type="submit" className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-6 md:py-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-all uppercase tracking-[0.4em] text-sm md:text-2xl">
                Get My Cash Offer →
              </button>
              <p className="text-center text-[9px] md:text-[12px] font-black text-[#003366] uppercase tracking-widest italic opacity-100">
                PRIVACY NOTICE: YOUR DATA IS 100% CONFIDENTIAL AND ONLY SHARED WITH OUR LICENSED INVESTMENT PARTNERS TO ENSURE A SUCCESSFUL CLOSING.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 5. FOOTER - NE OHIO & NATIONWIDE */}
      <footer className="bg-[#003366] py-16 text-white border-t-8 border-[#D4AF37] text-center">
        <div className="flex flex-col mb-10 items-center">
          <div className="bg-white text-[#003366] font-black px-4 py-2 rounded mb-4 text-2xl shadow-xl">N.P.S.</div>
          <span className="font-black text-2xl md:text-4xl tracking-tighter uppercase">NIJACK PROPERTY SOLUTIONS</span>
          <span className="text-[#D4AF37] font-bold text-xs md:text-sm tracking-[0.5em] uppercase mt-2">NE Ohio & Nationwide</span>
        </div>
        <div className="flex flex-col gap-6 font-black uppercase text-xs md:text-lg tracking-widest px-6">
          <span className="text-[#D4AF37]">330-331-9070</span>
          <span className="text-[#D4AF37] break-all">nicole@nijackpropertysolutions.com</span>
          <p className="text-[10px] md:text-[14px] font-bold tracking-[0.4em] opacity-40 mt-12 italic">
            © 2026 NIJACK PROPERTY SOLUTIONS | ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
