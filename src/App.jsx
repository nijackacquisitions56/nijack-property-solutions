import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Star } from 'lucide-react';

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
          <a href="tel:3303319070" className="bg-[#003366] text-white px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 hover:bg-[#D4AF37] transition-all shadow-lg">
            <Phone size={18} /> 330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#003366] text-white pt-12 pb-24 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Sell Your House <span className="text-[#D4AF37]">FAST</span> <br/>
            For <span className="underline decoration-[#D4AF37]/40">CASH</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold italic opacity-90 uppercase tracking-[0.2em] mb-8">
            "Rooted in Care, Driven by Results."
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full">
            <div className="flex text-[#D4AF37]"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            <p className="text-sm md:text-lg font-black uppercase tracking-[0.1em]">Successful Closings: 14 - 30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM */}
      <section className="relative -mt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-white rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-5 text-center">
              <h2 className="text-[#003366] font-black uppercase text-sm md:text-lg tracking-[0.2em]">Start Your Successful Closing Today</h2>
            </div>
            
            <div className="p-8 md:p-12 space-y-10">
              
              {/* STEP 1: CONTACT INFO */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">1</span>
                  <h3 className="text-[#003366] font-black uppercase tracking-widest text-lg italic text-right">Contact Information</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none transition-all" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none transition-all" required />
                </div>
                <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, ZIP)" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none transition-all" required />
              </div>

              {/* STEP 2: SELL TIME & SITUATION */}
              <div className="space-y-6 p-8 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200 shadow-inner">
                <div className="flex items-center gap-4">
                  <span className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">2</span>
                  <h3 className="text-[#003366] font-black uppercase tracking-widest text-lg italic underline decoration-[#D4AF37]">The Situation</h3>
                </div>

                <div className="space-y-3">
                  <label className="block text-[12px] font-black text-[#003366] uppercase tracking-[0.2em] italic ml-1">
                    SELL TIME: (REQUIRED)
                  </label>
                  <select name="selling_timeline" required className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 font-black uppercase text-sm text-[#003366] shadow-md focus:ring-4 focus:ring-[#D4AF37]/20 outline-none appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Your Timeline</option>
                    <option value="ASAP">ASAP (RIGHT AWAY)</option>
                    <option value="< 30 Days">&lt; 30 DAYS</option>
                    <option value="< 90 Days">&lt; 90 DAYS</option>
                    <option value="< 180 Days">&lt; 180 DAYS</option>
                    <option value="180 Days+">180 DAYS+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-[12px] font-black text-[#003366] uppercase tracking-[0.2em] italic ml-1">
                    Select Your Current Situation:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Other"].map((label) => (
                      <label key={label} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 cursor-pointer hover:border-[#D4AF37] transition-all">
                        <input type="checkbox" name="situation" value={label} className="h-4 w-4 accent-[#003366]" />
                        <span className="font-black uppercase text-[10px] tracking-tighter text-[#003366]">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-6 rounded-[2rem] shadow-2xl transition-all uppercase tracking-[0.4em] flex items-center justify-center gap-4 text-xl group">
                Get My Cash Offer <ArrowRight className="group-hover:translate-x-4 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. COMMON QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-[#003366] font-black text-4xl uppercase tracking-tighter mb-12 text-center">Common Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How fast can closing happen?", a: "We typically close within 14 to 30 days. No bank appraisals or inspections." },
            { q: "Do I need to clean or fix anything?", a: "No. We buy houses 'As-Is.' Leave unwanted furniture or trash to us." },
            { q: "Are there any fees or commissions?", a: "Zero. We pay all closing costs. No 6% agent commission." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 border-l-8 border-[#D4AF37] bg-gray-50 rounded-r-2xl">
              <h4 className="font-black text-[#003366] uppercase text-lg mb-2">{item.q}</h4>
              <p className="font-bold text-gray-600 text-sm uppercase leading-relaxed tracking-tight">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ADVANTAGE PILLARS */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-[#003366]">
             <ShieldCheck className="text-[#D4AF37] mx-auto mb-6" size={48} />
             <h3 className="font-black text-[#003366] uppercase text-2xl mb-4 tracking-tighter italic">No Repairs</h3>
             <p className="font-bold text-gray-500 uppercase text-xs tracking-widest leading-loose italic">Skip the contractors and the cleaning. We buy exactly as-is.</p>
          </div>
          <div className="bg-[#003366] p-10 rounded-[3rem] shadow-xl transform md:scale-105 border-t-8 border-[#D4AF37]">
             <Clock className="text-[#D4AF37] mx-auto mb-6" size={48} />
             <h3 className="font-black text-white uppercase text-2xl mb-4 tracking-tighter italic">Fast Funding</h3>
             <p className="font-bold text-white/70 uppercase text-xs tracking-widest leading-loose italic">Get your cash in 14-30 days through a local, licensed title company.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-[#003366]">
             <CheckCircle2 className="text-[#D4AF37] mx-auto mb-6" size={48} />
             <h3 className="font-black text-[#003366] uppercase text-2xl mb-4 tracking-tighter italic">$0 Fees</h3>
             <p className="font-bold text-gray-500 uppercase text-xs tracking-widest leading-loose italic">No commissions, no closing costs, no hidden surprises at the table.</p>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#003366] py-16 text-white border-t-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col mb-10">
            <span className="font-black text-3xl tracking-tighter uppercase">NIJACK PROPERTY SOLUTIONS</span>
            <span className="text-[#D4AF37] font-bold text-xs tracking-[0.5em] uppercase mt-2 italic">Cuyahoga Falls, Ohio</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-10 leading-loose">
            Nijack Property Solutions is a real estate investment firm. We purchase properties directly or through our private investment network to ensure a successful closing.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 font-black uppercase text-sm tracking-widest">
            <a href="tel:3303319070" className="text-[#D4AF37] hover:text-white transition-colors flex items-center justify-center gap-2"><Phone size={16} /> 330-331-9070</a>
            <a href="mailto:nicole@nijackpropertysolutions.com" className="text-[#D4AF37] hover:text-white transition-colors flex items-center justify-center gap-2"><Mail size={16} /> Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
