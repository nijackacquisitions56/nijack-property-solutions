import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#003366] font-black text-2xl tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
            <span className="text-[#D4AF37] font-bold text-[11px] tracking-[0.3em] uppercase leading-none mt-1 text-right">S O L U T I O N S</span>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-6 py-3 rounded-full font-black text-sm hover:bg-[#D4AF37] transition-all shadow-lg">
            CALL: 330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION - WITH UNDERLINES */}
      <section className="bg-[#003366] text-white pt-12 pb-24 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Sell Your House <span className="relative inline-block px-1">FAST
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#D4AF37]/40"></span>
            </span> <br/>
            For <span className="relative inline-block px-1 text-[#D4AF37]">CASH
              <span className="absolute bottom-0 left-0 w-full h-2 bg-white/30"></span>
            </span>
          </h1>
          <p className="text-xl md:text-3xl font-bold italic opacity-90 uppercase tracking-[0.2em] mb-8">
            "Rooted in Care, Driven by Results."
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full italic">
            <p className="text-sm md:text-lg font-black uppercase tracking-[0.1em]">Successful Closings: 14 - 30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 mb-16">
        <div className="bg-black rounded-[2rem] aspect-video shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center relative">
          <div className="text-center">
            <div className="text-[#D4AF37] text-6xl mb-4">▶</div>
            <p className="text-white font-black uppercase tracking-widest text-sm italic">Strategy Session: How We Maximize Your Equity</p>
          </div>
        </div>
      </section>

      {/* 4. MAIN FORM */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-white rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-5 text-center">
              <h2 className="text-[#003366] font-black uppercase text-sm md:text-lg tracking-[0.2em]">Start Your Successful Closing Today</h2>
            </div>
            
            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-lg italic underline decoration-[#D4AF37]">Step 1: Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none" required />
                </div>
                <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, ZIP)" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none" required />
              </div>

              {/* STEP 2: SITUATION & SELL TIME */}
              <div className="space-y-6 p-8 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200 shadow-inner">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-lg italic underline decoration-[#D4AF37]">Step 2: The Situation</h3>
                
                <div className="space-y-3">
                  <label className="block text-[12px] font-black text-[#003366] uppercase tracking-[0.2em] italic ml-1 text-right">SELL TIME: (REQUIRED)</label>
                  <select name="selling_timeline" required className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 font-black uppercase text-sm text-[#003366] outline-none cursor-pointer shadow-md">
                    <option value="" disabled selected>Select Your Timeline</option>
                    <option value="ASAP">ASAP (RIGHT AWAY)</option>
                    <option value="< 30 Days">&lt; 30 DAYS</option>
                    <option value="< 90 Days">&lt; 90 DAYS</option>
                    <option value="< 180 Days">&lt; 180 DAYS</option>
                    <option value="180 Days+">180 DAYS+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-[12px] font-black text-[#003366] uppercase tracking-[0.2em] italic ml-1">Current Situation:</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around"].map((label) => (
                      <label key={label} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 cursor-pointer hover:border-[#D4AF37] transition-all">
                        <input type="checkbox" className="h-4 w-4 accent-[#003366]" />
                        <span className="font-black uppercase text-[10px] tracking-tighter text-[#003366]">{label}</span>
                      </label>
                    ))}
                  </div>
                  {/* OTHER PLUS BOX */}
                  <textarea placeholder="ANY OTHER DETAILS? (EX. NEED HELP MOVING, BACK TAXES, ETC.)" className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 font-black uppercase text-[10px] focus:border-[#003366] outline-none mt-4 h-24" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-6 rounded-[2rem] shadow-2xl transition-all uppercase tracking-[0.4em] text-xl group">
                Get My Cash Offer →
              </button>
              <p className="text-center text-[9px] font-bold text-gray-400 uppercase tracking-widest italic mt-2">Privacy Notice: Your data is 100% confidential and only shared with our licensed investment partners to ensure a successful closing.</p>
            </div>
          </form>
        </div>
      </section>

      {/* 5. PDF STRATEGY BRIEF SECTION */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#003366] font-black text-2xl uppercase tracking-widest mb-4 italic">Free Strategy Brief</h2>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-tighter mb-8 italic">Compare "The Nijack Way" vs Traditional Listing Costs</p>
          <a href="/strategy-brief.pdf" target="_blank" className="inline-block bg-white border-4 border-[#003366] text-[#003366] font-black px-10 py-4 rounded-full hover:bg-[#003366] hover:text-white transition-all uppercase tracking-widest text-sm shadow-xl italic">
            Download Strategy Brief PDF
          </a>
        </div>
      </section>

      {/* 6. COMMON QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-[#003366] font-black text-4xl uppercase tracking-tighter mb-12 text-center">Common Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How fast can closing happen?", a: "We typically close within 14 to 30 days." },
            { q: "Do I need to clean or fix anything?", a: "No. We buy houses 'As-Is.'" },
            { q: "Are there any fees or commissions?", a: "Zero. We pay all closing costs." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 border-l-8 border-[#D4AF37] bg-gray-50 rounded-r-2xl">
              <h4 className="font-black text-[#003366] uppercase text-lg mb-2">{item.q}</h4>
              <p className="font-bold text-gray-600 text-sm uppercase leading-relaxed tracking-tight italic">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#003366] py-16 text-white border-t-8 border-[#D4AF37] text-center">
        <span className="font-black text-3xl tracking-tighter uppercase">NIJACK PROPERTY SOLUTIONS</span>
        <div className="flex justify-center gap-12 font-black uppercase text-[10px] tracking-[0.2em] mt-8 italic">
          <span>330-331-9070</span>
          <span>Cuyahoga Falls, OH</span>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 mt-12">
          © 2026 NIJACK PROPERTY SOLUTIONS | ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default NijackSite;
