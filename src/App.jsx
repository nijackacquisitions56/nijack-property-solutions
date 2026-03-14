import React, { useState } from "react";

export default function NijackPropertySolutionsAudit() {
  const [submitted, setSubmitted] = useState(false);
  const [showOther, setShowOther] = useState(false);

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
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }
    } catch (err) { console.error(err); }
  };

  const handleCheckboxChange = (e) => {
    if (e.target.value === "Other") {
      setShowOther(e.target.checked);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto px-3 bg-[#003366] rounded-lg flex items-center justify-center border-b-2 border-r-2 border-[#D4AF37] shadow-md">
              <span className="text-white font-black text-lg tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left leading-tight">
              <div className="font-black text-lg text-[#003366] uppercase tracking-tight">NIJACK <span className="text-[#D4AF37]">PROPERTY</span></div>
              <div className="text-[9px] text-gray-400 uppercase tracking-[0.3em] font-bold">Solutions</div>
            </div>
          </div>
          <a href="tel:3303319070" className="font-bold text-[#003366] text-base md:text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
        </div>
      </header>

      {/* COMPACT HERO */}
      <section className="bg-[#003366] text-white pt-10 pb-24 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-black mb-3 uppercase tracking-tighter leading-tight">
            Sell Your House <br/>
            <span className="relative inline-block px-1">FAST
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="transparent"/></svg>
            </span> {" "}For{" "}
            <span className="relative inline-block px-1 text-[#D4AF37]">CASH
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="5" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-90 italic">"Rooted in Care, Driven by Results."</p>
        </div>
      </section>

      {/* VIDEO SPOTLIGHT */}
      <section className="mx-auto max-w-4xl px-6 -mt-16 mb-10">
        <div className="bg-[#001122] rounded-2xl shadow-2xl border-4 border-white overflow-hidden aspect-video relative group">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white text-3xl ml-1">▶</span>
              </div>
              <h3 className="text-white font-black text-2xl uppercase tracking-tighter">Virtual Solutions for Northeast Ohio</h3>
              <p className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest italic">Video Ready Tomorrow</p>
           </div>
        </div>
      </section>

      {/* REVISED AND NEUTRALIZED PROCESS SECTION */}
      <section id="how-it-works" className="py-10 bg-white border-b border-gray-100 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-black text-[#003366] uppercase mb-10 tracking-tighter">How Our Process Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{t:"Talk",d:"Fill the form or call us directly. A strategist will review your property data."}, {t:"Review",d:"Connect with a team member via phone, video, or send photos."}, {t:"Paid",d:"Sign paperwork digitally & choose your closing date."}].map((s,i) => (
              <div key={i} className="space-y-2 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="inline-block h-8 w-8 bg-[#003366] rounded-full text-[#D4AF37] font-black text-base flex items-center justify-center mb-1">
                  {i+1}
                </div>
                <h4 className="font-black text-[#003366] uppercase text-xs tracking-widest">{s.t}</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tight leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CAPTURE GRID */}
      <main className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-black text-[#003366] uppercase text-center tracking-tight">Get Your Cash Offer</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full text-sm font-medium" />
                  <input name="phone" required placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full text-sm font-medium" />
                </div>
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full text-sm font-medium" />
                
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[10px] font-black text-[#003366] uppercase mb-4 text-center tracking-widest opacity-70 italic">What is your current situation?</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px]">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around", "Other"].map((label) => (
                      <label key={label} className="flex gap-2 items-center cursor-pointer hover:text-[#D4AF37] transition-colors">
                        <input type="checkbox" name="situation" value={label} onChange={handleCheckboxChange} className="h-3 w-3 accent-[#003366]" /> 
                        <span className="font-bold uppercase tracking-tighter">{label}</span>
                      </label>
                    ))}
                  </div>

                  {showOther && (
                    <div className="mt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                      <textarea name="other_explanation" placeholder="Please describe..." className="w-full rounded-xl border border-gray-200 p-3 text-[11px] font-bold uppercase outline-none focus:border-[#D4AF37] h-20" />
                    </div>
                  )}
                </div>

                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#D4AF37] transition-all uppercase tracking-tight">
                  GET MY CASH OFFER
                </button>
              </form>
            ) : (
              <div className="text-center py-12"><h2 className="text-2xl font-black text-[#D4AF37] uppercase tracking-tighter">Your property is under review!</h2></div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            
            {/* AUDITED NIJACK ADVANTAGE (IMPROVED VISIBILITY) */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-black text-[#003366] mb-6 uppercase border-b pb-4 text-center">The Advantage</h3>
              <div className="space-y-5">
                {[
                  { bad: "Agent: 6% Fee", good: "N.P.S: $0 Fees" },
                  { bad: "Must Do Repairs", good: "N.P.S: Buy AS-IS" },
                  { bad: "90+ Day Wait", good: "N.P.S: 14-30 Days" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center text-[12px] font-black uppercase">
                    {/* The bad text is now red, bold, no line-through, and wider for maximum visibility */}
                    <span className="text-red-600 font-extrabold w-[45%] text-left tracking-tighter">
                      {row.bad}
                    </span>
                    <span className="text-[#D4AF37] text-xl font-bold px-2 w-[10%] text-center">
                      ➔
                    </span>
                    <span className="text-[#003366] w-[45%] text-left">
                      {row.good}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#003366] rounded-2xl p-6 text-white text-center shadow-lg border-r-4 border-[#D4AF37]">
              <h4 className="text-xs font-black mb-4 uppercase tracking-tight">Agent vs. Cash Comparison PDF</h4>
              <a href="YOUR_PDF_URL_HERE" target="_blank" className="inline-block bg-[#D4AF37] text-white px-8 py-2 rounded-full font-black text-[10px] hover:scale-105 transition-transform uppercase tracking-widest">DOWNLOAD NOW</a>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ SECTION */}
      <section id="faq" className="py-12 bg-white px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-[#003366] text-center uppercase mb-10 tracking-tighter">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              { q: "Fix anything?", a: "No. We buy 100% as-is. Leave what you don't want." },
              { q: "How long?", a: "14-30 days typically. You choose the date." },
              { q: "Fees?", a: "Zero commissions. Zero hidden costs." },
              { q: "Where?", a: "Northeast Ohio: Akron, Cleveland, & Suburbs." }
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <p className="font-black text-[#003366] uppercase text-[10px]">Q: {item.q}</p>
                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-tighter leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-12 border-t-4 border-[#D4AF37] text-center px-6">
        <div className="mx-auto max-w-4xl">
          <div className="font-black text-xl uppercase mb-1 tracking-tight">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.4em] mb-8 uppercase">Northeast Ohio Real Estate Investment Solutions</p>
          <div className="bg-white/5 rounded-2xl p-6 text-left border border-white/10 mb-8 text-[10px] text-gray-400 leading-relaxed max-w-2xl mx-auto uppercase font-bold tracking-tighter">
            <p>At <span className="text-white">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] underline">NEVER</span> be sold. Serving Northeast Ohio. 14-30 day typical closing.</p>
          </div>
          <p className="text-[11px] opacity-70 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
