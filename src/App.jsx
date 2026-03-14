import React, { useState } from "react";

export default function NijackPropertySolutionsElite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xaqpozbn", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    } catch (err) { console.error("Submit Error:", err); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* HEADER WITH HIGH-POP BRANDING */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            {/* NEW LOGO BOX WITH GOLD SEAL EFFECT */}
            <div className="h-14 w-14 bg-[#003366] rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105">
              <span className="text-white font-black text-xl tracking-tighter">NPS</span>
            </div>
            <div className="text-left">
              <div className="font-black text-2xl text-[#003366] leading-none uppercase tracking-tighter">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.5em] font-bold mt-1">Solutions</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-8 text-[11px] font-black text-[#003366] uppercase tracking-[0.2em]">
              <a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a>
            </nav>
            <a href="tel:3303319070" className="px-5 py-2 bg-[#003366] text-white rounded-full font-bold text-sm hover:bg-[#002244] transition-all shadow-md">
              📞 330-331-9070
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH GOLD FLARE */}
      <section className="bg-[#003366] text-white py-20 border-b-8 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-[0.9] tracking-tighter">
            Sell Your House <br/>
            <span className="relative inline-block px-3">
              FAST
              <svg className="absolute -bottom-4 left-0 w-full h-6 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
              </svg>
            </span> 
            {" "}FOR{" "}
            <span className="relative inline-block px-3 text-[#D4AF37]">
              CASH
              <svg className="absolute -bottom-4 left-0 w-full h-6 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="5" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-12 text-xl md:text-2xl font-bold uppercase tracking-[0.1em] opacity-90">
            No Repairs • No Commissions • 14-30 Day Closing
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT: FORM & LEAD MAGNET */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl font-black text-[#003366] uppercase tracking-tight text-center">Get Your Cash Offer</h2>
                    <div className="space-y-4">
                      <input name="full_name" required placeholder="Full Name" className="w-full rounded-xl border-2 border-gray-100 p-4 focus:border-[#D4AF37] outline-none transition-all" />
                      <input name="phone" required type="tel" placeholder="Phone Number" className="w-full rounded-xl border-2 border-gray-100 p-4 focus:border-[#D4AF37] outline-none transition-all" />
                      <input name="property_address" required placeholder="Property Address" className="w-full rounded-xl border-2 border-gray-100 p-4 focus:border-[#D4AF37] outline-none transition-all" />
                    </div>
                    
                    <div className="p-5 bg-[#003366]/5 rounded-2xl border border-[#003366]/10">
                      <p className="text-[10px] font-black text-[#003366] uppercase mb-3 text-center tracking-widest italic">Property Situation (Select All That Apply)</p>
                      <div className="grid grid-cols-2 gap-3 text-[10px]">
                        {["Probate", "Inherited", "Pre-foreclosure", "Needs Repairs", "Tired Landlord", "Problem Tenants", "Vacant", "Relocating", "Taxes Behind"].map((opt) => (
                          <label key={opt} className="flex gap-2 items-center cursor-pointer hover:text-[#D4AF37] transition-colors">
                            <input type="checkbox" name="situation" value={opt} className="h-4 w-4 accent-[#003366]" /> 
                            <span className="font-bold uppercase tracking-tighter">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-xl hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1">
                      GET MY CASH OFFER
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="text-3xl font-black text-[#003366] uppercase mb-2">Request Received!</h2>
                    <p className="font-bold text-gray-500 uppercase tracking-widest text-sm">Nicole will call you shortly.</p>
                  </div>
                )}
              </div>

              {/* LEAD MAGNET PDF SECTION */}
              <div className="bg-[#003366] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-black uppercase mb-2">Not ready for an offer yet?</h3>
                  <p className="text-sm opacity-80 mb-6 font-medium italic">Download our free "Agent vs. Cash" Strategy Guide to see which path fits your timeline.</p>
                  <a href="YOUR_PDF_LINK_HERE" className="inline-block bg-[#D4AF37] text-white font-black py-3 px-8 rounded-full text-sm hover:scale-105 transition-transform shadow-lg">
                    SEND ME THE FREE GUIDE
                  </a>
                </div>
                <div className="absolute top-0 right-0 -mr-10 -mt-10 h-40 w-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
              </div>
            </div>

            {/* RIGHT: COMPARISON TABLE */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase text-center border-b pb-4 tracking-tighter">Why Sellers Choose N.P.S.</h3>
              <div className="space-y-8">
                {[
                  { label: "Fees & Commissions", agent: "6% Average", nps: "$0 Fees" },
                  { label: "Property Condition", agent: "Must Be Perfect", nps: "AS-IS / No Repairs" },
                  { label: "Closing Timeline", agent: "90+ Days", nps: "14-30 Days" },
                  { label: "Closing Costs", agent: "Seller Pays 2%", nps: "N.P.S. Pays 100%" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-xs md:text-sm">
                    <div className="w-[35%] text-red-500 font-black uppercase">{row.agent}</div>
                    <div className="text-[#D4AF37] font-bold text-lg">➔</div>
                    <div className="w-[35%] text-[#003366] font-black uppercase text-center">{row.nps}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37] italic text-sm text-gray-600 font-medium">
                "Our mission is simple: To provide Northeast Ohio homeowners with a stress-free exit strategy rooted in care and driven by results."
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER & PRIVACY SECTION */}
      <footer className="bg-[#001122] text-white py-20 border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-black text-3xl uppercase mb-3 tracking-tighter">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-sm font-bold tracking-[0.5em] mb-12 uppercase">Northeast Ohio Real Estate Investment Solutions</p>
          
          <div className="bg-white/5 rounded-3xl p-8 text-left border border-white/10 mb-12 text-xs text-gray-300 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm">
            <p className="mb-4 font-bold text-white uppercase tracking-widest text-[10px]">Privacy & Anti-Spam Policy</p>
            <p className="mb-4">At <span className="text-white font-bold">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] font-bold underline">NEVER</span> be sold to third-party telemarketers.</p>
            <p className="italic opacity-80 uppercase tracking-widest text-[9px]">Nijack Property Solutions is a real estate investment company serving Northeast Ohio. We are not licensed real estate agents and do not charge commissions. We purchase properties directly or through our network of investment partners.</p>
          </div>
          
          <p className="text-[13px] opacity-100 uppercase tracking-[0.3em] font-black text-white">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
