import React, { useState } from "react";

export default function NijackPropertySolutionsElite() {
  const [submitted, setSubmitted] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const [isShopping, setIsShopping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    const situation = data.getAll("situation");
    if (situation.includes("Shopping Around")) {
      setIsShopping(true);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xaqpozbn", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#D4AF37] selection:text-white text-[15px]">
      
      {/* IMPROVED RESPONSIVE HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex justify-between items-center">
          
          {/* LOGO AREA - ALWAYS VISIBLE */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-10 w-auto px-3 bg-[#003366] rounded-lg flex items-center justify-center border-b-2 border-r-2 border-[#D4AF37] shadow-md">
              <span className="text-white font-black text-lg tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left leading-tight">
              <div className="font-black text-sm md:text-lg text-[#003366] uppercase tracking-tight">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-[0.3em] font-bold">Solutions</div>
            </div>
          </div>
          
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-[#003366]">
            <a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a>
          </nav>

          {/* CONTACT & MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-4">
             <a href="tel:3303319070" className="font-black text-[#003366] text-base md:text-xl">330-331-9070</a>
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#003366] p-1"
             >
               {isMenuOpen ? "✕" : "☰"}
             </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4 text-[12px] font-black uppercase tracking-widest text-[#003366] animate-in slide-in-from-top duration-200">
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white pt-10 pb-28 md:pt-12 md:pb-32 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-3xl md:text-8xl font-black mb-4 uppercase tracking-tighter leading-[1.1] md:leading-[0.9]">
            Sell Your House <br/>
            <span className="relative inline-block px-1">FAST
              <svg className="absolute -bottom-4 md:-bottom-5 left-0 w-full h-3 md:h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/></svg>
            </span> {" "}For{" "}
            <span className="relative inline-block px-1 text-[#D4AF37]">CASH
              <svg className="absolute -bottom-4 md:-bottom-5 left-0 w-full h-3 md:h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="6" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="text-sm md:text-2xl font-bold uppercase tracking-[0.2em] opacity-95 italic mt-6">"Rooted in Care, Driven by Results."</p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-xl px-6 -mt-16 mb-12">
        <div className="bg-[#001122] rounded-2xl shadow-2xl border-4 border-white overflow-hidden aspect-video relative group ring-4 ring-black/5">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-2 shadow-lg transition-transform group-hover:scale-110 cursor-pointer">
                <span className="text-white text-xl ml-1">▶</span>
              </div>
              <h3 className="text-white font-black text-lg uppercase tracking-tighter">Process Walkthrough</h3>
              <p className="text-[#D4AF37] font-bold uppercase text-[8px] tracking-widest italic text-center">Coming Soon</p>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 bg-white px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#003366] text-center uppercase mb-10 tracking-tighter">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-left">
            {[
              { q: "Do I need to fix anything?", a: "No. We purchase properties in 100% as-is condition. You can even leave unwanted items or trash behind; we handle the cleanup." },
              { q: "How long does the process take?", a: "We typically close within 14-30 days, but we can move as fast or as slow as your specific situation requires." },
              { q: "Are there any hidden fees?", a: "Zero. We are direct buyers, not agents. You pay no commissions, no closing costs, and no hidden service fees." },
              { q: "What areas do you serve?", a: "We are based in Northeast Ohio (Akron/Cleveland), but through our network of investment partners, we can provide solutions nationwide." }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <p className="font-black text-[#003366] uppercase text-sm tracking-tight border-l-4 border-[#D4AF37] pl-3">
                  {item.q}
                </p>
                <p className="text-gray-600 font-medium leading-relaxed text-[14px]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CAPTURE GRID */}
      <main className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100">
            {!submitted && !isShopping ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-black text-[#003366] uppercase text-center tracking-tighter">Start Your Review</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="full_name" required placeholder="Full Name" className="rounded-xl border-2 border-gray-100 p-4 w-full font-bold uppercase" />
                  <input name="phone" required placeholder="Phone Number" className="rounded-xl border-2 border-gray-100 p-4 w-full font-bold uppercase" />
                </div>
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border-2 border-gray-100 p-4 w-full font-bold uppercase" />
                
                <div className="p-5 bg-[#003366]/5 rounded-2xl border border-[#003366]/10">
                  <p className="text-[11px] font-black text-[#003366] uppercase mb-4 text-center tracking-widest italic underline decoration-[#D4AF37]">Select Your Current Situation</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px]">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around", "Other"].map((label) => (
                      <label key={label} className="flex gap-2 items-center cursor-pointer hover:text-[#D4AF37] transition-colors">
                        <input type="checkbox" name="situation" value={label} onChange={(e) => {
                           if(e.target.value === "Other") setShowOther(e.target.checked);
                        }} className="h-4 w-4 accent-[#003366]" /> 
                        <span className="font-bold uppercase tracking-tighter">{label}</span>
                      </label>
                    ))}
                  </div>
                  {showOther && (
                    <div className="mt-4">
                      <textarea 
                        name="other_explanation" 
                        required
                        placeholder="PLEASE PROVIDE DETAILS HERE..." 
                        className="w-full rounded-xl border-2 border-[#D4AF37] p-4 text-[11px] font-black uppercase h-24 outline-none shadow-sm focus:ring-2 focus:ring-[#D4AF37]" 
                      />
                    </div>
                  )}
                </div>

                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-2xl shadow-xl hover:bg-[#D4AF37] transition-all uppercase tracking-tighter">
                  GET MY CASH OFFER
                </button>
              </form>
            ) : isShopping ? (
              <div className="text-center py-16 px-4">
                <h2 className="text-2xl font-black text-[#003366] uppercase mb-4">Market Insight</h2>
                <p className="text-[15px] font-bold text-gray-500 uppercase leading-relaxed">We specialize in expedited closings within 60 days. Please download our strategy guide to the right for more information.</p>
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-3xl font-black text-[#D4AF37] uppercase tracking-tighter">Review Initiated!</h2>
                <p className="font-bold text-[#003366] uppercase mt-2 text-center">Our team will be in touch shortly.</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center">
              <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase border-b-4 border-[#D4AF37] pb-4 tracking-tighter">The Advantage</h3>
              <div className="space-y-6">
                {[
                  { bad: "Agent: 6% Fee", good: "N.P.S: $0 Fees" },
                  { bad: "Must Do Repairs", good: "N.P.S: Buy AS-IS" },
                  { bad: "90+ Day Wait", good: "N.P.S: 14-30 Days" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center text-[13px] font-black uppercase tracking-tighter">
                    <span className="text-red-600 font-black w-[42%]">{row.bad}</span>
                    <span className="text-[#D4AF37] text-2xl font-bold w-[16%]">➔</span>
                    <span className="text-[#003366] w-[42%]">{row.good}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#003366] rounded-2xl p-8 text-white text-center shadow-lg border-r-8 border-[#D4AF37]">
              <h4 className="text-lg font-black mb-4 uppercase tracking-tighter underline decoration-[#D4AF37]">Agent vs. Cash PDF</h4>
              <a href="YOUR_PDF_URL_HERE" target="_blank" className="inline-block bg-[#D4AF37] text-white px-10 py-3 rounded-full font-black text-xs hover:scale-105 transition-transform uppercase tracking-widest">DOWNLOAD NOW</a>
            </div>
          </div>
        </div>
      </main>

      {/* PROCESS */}
      <section id="how-it-works" className="py-16 bg-white px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black text-[#003366] uppercase mb-12 tracking-tighter">How Our Process Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{t:"Talk",d:"Complete the form. Our analysts review your property data immediately."}, {t:"Review",d:"Connect for a brief virtual walkthrough or provide photos for assessment."}, {t:"Paid",d:"Sign digitally and get paid on your specific timeline."}].map((s,i) => (
              <div key={i} className="space-y-3">
                <div className="text-3xl font-black text-[#D4AF37]">0{i+1}</div>
                <h4 className="font-black text-[#003366] uppercase text-sm tracking-widest">{s.t}</h4>
                <p className="text-[13px] text-gray-600 font-bold uppercase tracking-tight leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 border-t-4 border-[#D4AF37] text-center px-6">
        <div className="mx-auto max-w-4xl">
          <div className="font-black text-2xl uppercase mb-2 tracking-tighter">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] mb-12 uppercase">Northeast Ohio & Nationwide Investment Solutions</p>
          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12 text-[10px] text-gray-400 leading-relaxed max-w-2xl mx-auto uppercase font-bold tracking-tighter opacity-80">
            <p className="mb-4">At <span className="text-white">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] underline">NEVER</span> be sold.</p>
            <p className="italic">Nijack Property Solutions is a real estate investment firm. We are not licensed real estate agents. We purchase properties directly or through our extensive network of private investment partners to ensure a guaranteed closing for our clients.</p>
          </div>
          <p className="text-[11px] opacity-70 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
