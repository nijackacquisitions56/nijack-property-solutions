import React from 'react';
import { Phone, Mail, Globe, CheckCircle2, Clock, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HEADER - COMPACT & BRANDED */}
      <nav className="bg-white py-3 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#003366] font-black text-xl tracking-tighter leading-none">NIJACK PROPERTY</span>
            <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-4">
              <span className="text-[10px] font-black text-[#003366] uppercase tracking-widest">Available 24/7</span>
              <span className="text-[#D4AF37] font-bold text-xs uppercase italic">Rooted in Care</span>
            </div>
            <a href="tel:3303319070" className="bg-[#003366] text-white px-5 py-2.5 rounded-full font-black text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-[#003366]/20">
              <Phone size={16} /> 330-331-9070
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION - TIGHT VERTICAL SPACE */}
      <section className="bg-[#003366] text-white pt-10 pb-20 md:pt-12 md:pb-28 border-b-4 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Sell Your House <span className="text-[#D4AF37]">FAST</span> <br/>
            For <span className="underline decoration-[#D4AF37]/40">CASH</span>
          </h1>
          
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-6">
            <div className="flex text-[#D4AF37]"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
            <p className="text-sm font-black uppercase tracking-widest">Successful Closings: 14 - 30 Days</p>
          </div>

          <p className="text-lg md:text-2xl font-bold italic opacity-90 uppercase tracking-[0.2em]">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* 3. MAIN FORM - FLOATING & MULTI-COLUMN TO SAVE SPACE */}
      <section className="relative -mt-12 md:-mt-16 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <form className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-4 text-center">
              <h2 className="text-[#003366] font-black uppercase text-xs md:text-sm tracking-[0.2em]">Start Your Successful Closing Strategy</h2>
            </div>
            
            <div className="p-6 md:p-10 grid md:grid-cols-2 gap-10">
              
              {/* CONTACT COLUMN (STEP 1) */}
              <div className="space-y-5">
                <p className="text-[11px] font-black text-[#003366] uppercase tracking-[0.2em] border-b-2 border-[#D4AF37] inline-block pb-1 mb-2 italic">STEP 1: CONTACT INFO</p>
                <div>
                  <label className="text-[10px] font-black text-[#003366] uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="Name..." className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 text-sm font-bold outline-none focus:border-[#003366] transition-all" required />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[#003366] uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" placeholder="330-..." className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 text-sm font-bold outline-none focus:border-[#003366] transition-all" required />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[#003366] uppercase tracking-widest ml-1">Property Address</label>
                  <input type="text" placeholder="Street, City, Zip..." className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 text-sm font-bold outline-none focus:border-[#003366] transition-all" required />
                </div>
              </div>

              {/* SITUATION & SELL TIME COLUMN (STEP 2) */}
              <div className="space-y-5 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-inner">
                <p className="text-[11px] font-black text-[#003366] uppercase tracking-[0.2em] border-b-2 border-[#D4AF37] inline-block pb-1 mb-2 italic">STEP 2: SELL TIME & SITUATION</p>
                
                {/* *** THE SELL TIME DROPDOWN YOU ARE LOOKING FOR *** */}
                <div>
                  <label className="text-[11px] font-black text-[#003366] uppercase tracking-widest block mb-2 italic">SELL TIME:</label>
                  <select name="selling_timeline" required className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-3 font-black uppercase text-xs outline-none focus:ring-4 focus:ring-[#D4AF37]/20 shadow-sm text-[#003366]">
                    <option value="" disabled selected>Select Your Timeline</option>
                    <option value="ASAP">ASAP (Immediate)</option>
                    <option value="< 30 Days">&lt; 30 Days</option>
                    <option value="< 90 Days">&lt; 90 Days</option>
                    <option value="< 180 Days">&lt; 180 Days</option>
                    <option value="180 Days+">180 Days+</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-black text-[#003366] uppercase tracking-widest block mb-3 italic">Current Situation:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant"].map((label) => (
                      <label key={label} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="h-4 w-4 accent-[#003366]" />
                        <span className="text-[10px] font-black uppercase tracking-tighter group-hover:text-[#D4AF37] transition-colors">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="px-10 pb-10">
              <button type="submit" className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-5 rounded-2xl shadow-xl shadow-[#003366]/20 transition-all uppercase tracking-[0.3em] flex items-center justify-center gap-4 group text-lg">
                Get My Cash Offer <ArrowRight className="group-hover:translate-x-3 transition-transform" />
              </button>
              <p className="text-center text-[9px] font-bold text-gray-400 uppercase mt-4 tracking-widest">No obligation • No hidden fees • 100% Confidential</p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. THE NIJACK ADVANTAGE - COMPACT PILLARS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: "01", title: "As-Is Cash", body: "No repairs, no cleaning, no junk removal. We take it exactly as it sits.", icon: <ShieldCheck /> },
            { id: "02", title: "Fast Funding", body: "Close in as little as 14-30 days with local title experts.", icon: <Clock /> },
            { id: "03", title: "$0 Commissions", body: "We pay all closing costs. No hidden fees, ever.", icon: <CheckCircle2 /> }
          ].map((pill, idx) => (
            <div key={idx} className={`p-8 rounded-[2.5rem] transition-all hover:scale-105 ${idx === 1 ? 'bg-[#003366] text-white shadow-xl' : 'border-2 border-[#D4AF37]/20 text-[#003366]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-black ${idx === 1 ? 'bg-[#D4AF37] text-[#003366]' : 'bg-[#003366] text-[#D4AF37]'}`}>{pill.id}</div>
              <h3 className="font-black uppercase text-xl mb-3 tracking-tighter italic">{pill.title}</h3>
              <p className={`text-[13px] font-bold uppercase tracking-tight leading-relaxed ${idx === 1 ? 'opacity-80' : 'text-slate-500'}`}>{pill.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#003366] pt-16 pb-8 text-white border-t-4 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col mb-8">
            <span className="font-black text-2xl tracking-tighter uppercase">NIJACK PROPERTY SOLUTIONS</span>
            <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.5em] uppercase mt-2 italic">Cuyahoga Falls, Ohio</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-8 max-w-2xl mx-auto">
            Nijack Property Solutions is a real estate investment firm. We purchase properties directly or through our private investment network to ensure a successful closing.
          </p>
          <div className="flex justify-center gap-8 mb-8">
             <a href="tel:3303319070" className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-2 font-black uppercase text-xs tracking-widest"><Phone size={14} /> 330-331-9070</a>
             <a href="mailto:nicole@nijackpropertysolutions.com" className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-2 font-black uppercase text-xs tracking-widest"><Mail size={14} /> Email Us</a>
          </div>
          <div className="pt-8 border-t border-white/10 text-[9px] font-bold opacity-30 tracking-[0.4em] uppercase">
            © 2026 Nijack Property Solutions | Rooted in Care, Driven by Results.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
