import React from 'react';
import { Phone, Mail, Globe, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* HEADER - COMPACT */}
      <nav className="bg-white py-3 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#003366] font-black text-xl tracking-tighter leading-none">NIJACK PROPERTY</span>
            <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#D4AF37] transition-all">
            <Phone size={16} /> 330-331-9070
          </a>
        </div>
      </nav>

      {/* HERO SECTION - TIGHT & IMPACTFUL */}
      <section className="bg-[#003366] text-white pt-8 pb-12 border-b-4 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-tight">
            Sell Your House <span className="text-[#D4AF37]">FAST</span> For <span className="underline decoration-white/30">CASH</span>
          </h1>
          <div className="inline-block bg-[#D4AF37] text-[#003366] px-6 py-1 rounded font-black uppercase text-lg mb-4">
            CLOSE IN 14 - 30 DAYS
          </div>
          <p className="text-lg md:text-xl font-bold italic opacity-90 uppercase tracking-widest">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* MAIN FORM AREA - MOVED UP & SIDE-BY-SIDE */}
      <section className="relative -mt-8 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <form className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-3 text-center">
              <h2 className="text-[#003366] font-black uppercase text-sm tracking-widest">Start Your Successful Closing Today</h2>
            </div>
            
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              
              {/* LEFT COLUMN: CONTACT INFO */}
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-[#003366] uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="Nicole..." className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 text-sm font-bold outline-none focus:border-[#003366] transition-all" required />
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

              {/* RIGHT COLUMN: SITUATION & SELL TIME */}
              <div className="space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div>
                  <label className="text-[10px] font-black text-[#003366] uppercase tracking-widest block mb-2 italic">SELL TIME:</label>
                  <select name="selling_timeline" required className="w-full bg-white border-2 border-gray-200 rounded-lg p-2 font-black uppercase text-xs outline-none focus:border-[#D4AF37]">
                    <option value="" disabled selected>Select Timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="< 30 Days">&lt; 30 Days</option>
                    <option value="< 90 Days">&lt; 90 Days</option>
                    <option value="< 180 Days">&lt; 180 Days</option>
                    <option value="180 Days+">180 Days+</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-black text-[#003366] uppercase tracking-widest block mb-3 italic">Situation:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant"].map((label) => (
                      <label key={label} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="h-3 w-3 accent-[#003366]" />
                        <span className="text-[9px] font-black uppercase tracking-tighter">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="px-8 pb-8">
              <button type="submit" className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-3 group">
                Get My Cash Offer <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* THE NIJACK ADVANTAGE - 3 PILLARS */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border-2 border-[#D4AF37]/20 rounded-3xl">
            <div className="w-12 h-12 bg-[#003366] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 font-black">01</div>
            <h3 className="font-black text-[#003366] uppercase mb-2">As-Is Cash</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">No repairs, no cleaning, no junk removal. We take it exactly as it sits today.</p>
          </div>
          <div className="text-center p-6 bg-[#003366] text-white rounded-3xl">
            <div className="w-12 h-12 bg-[#D4AF37] text-[#003366] rounded-full flex items-center justify-center mx-auto mb-4 font-black">02</div>
            <h3 className="font-black uppercase mb-2">Fast Funding</h3>
            <p className="text-xs font-bold text-white/70 uppercase tracking-tight">Close in as little as 14-30 days with a local title company you can trust.</p>
          </div>
          <div className="text-center p-6 border-2 border-[#D4AF37]/20 rounded-3xl">
            <div className="w-12 h-12 bg-[#003366] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 font-black">03</div>
            <h3 className="font-black text-[#003366] uppercase mb-2">$0 Commissions</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">We pay all closing costs. The price we agree on is the price you walk away with.</p>
          </div>
        </div>
      </section>

      {/* FOOTER - COMPACT */}
      <footer className="bg-[#003366] py-10 text-white text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4">
          Nijack Property Solutions | Cuyahoga Falls, OH | 330-331-9070
        </p>
        <div className="flex justify-center gap-6 opacity-80">
          <a href="#" className="hover:text-[#D4AF37]"><ShieldCheck size={20} /></a>
          <a href="#" className="hover:text-[#D4AF37]"><Globe size={20} /></a>
          <a href="#" className="hover:text-[#D4AF37]"><Mail size={20} /></a>
        </div>
      </footer>
    </div>
  );
};

export default NijackSite;
