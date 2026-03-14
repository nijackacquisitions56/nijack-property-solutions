import React, { useState } from "react";

export default function NijackPropertySolutionsMaster() {
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
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto px-4 bg-[#003366] rounded-xl flex items-center justify-center border-b-4 border-r-4 border-[#D4AF37] shadow-lg">
              <span className="text-white font-black text-xl tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left leading-tight">
              <div className="font-black text-xl text-[#003366] uppercase tracking-tight">NIJACK <span className="text-[#D4AF37]">PROPERTY</span></div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Solutions</div>
            </div>
          </div>
          <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white py-16 pb-32 border-b-8 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
            Sell Your House <br/>
            <span className="relative inline-block px-2">FAST
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="5" fill="transparent"/></svg>
            </span> {" "}For{" "}
            <span className="relative inline-block px-2 text-[#D4AF37]">CASH
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="mt-8 text-lg font-bold uppercase tracking-widest opacity-90 italic">"Rooted in Care, Driven by Results."</p>
        </div>
      </section>

      {/* VIDEO SPOTLIGHT */}
      <section className="mx-auto max-w-4xl px-6 -mt-20 mb-20">
        <div className="bg-[#001122] rounded-3xl shadow-2xl border-4 border-white overflow-hidden aspect-video relative group">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
              <h3 className="text-white font-black text-2xl uppercase tracking-tighter">Virtual Solutions for Northeast Ohio</h3>
              <p className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest italic">Video Ready Tomorrow</p>
           </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM & SIDEBAR */}
      <main className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEAD FORM WITH SITUATION CHECKBOXES */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-black text-[#003366] uppercase text-center tracking-tight">Get Your Cash Offer</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full" />
                  <input name="phone" required placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full" />
                </div>
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full" />
                
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black text-[#003366] uppercase mb-4 text-center tracking-widest opacity-70 italic">What is your current situation?</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px]">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Other"].map((label) => (
                      <label key={label} className="flex gap-2 items-center cursor-pointer hover:text-[#D4AF37] transition-colors">
                        <input type="checkbox" name="situation" value={label} className="h-3 w-3 accent-[#003366]" /> 
                        <span className="font-bold uppercase tracking-tighter">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#D4AF37] transition-all">
                  GET MY CASH OFFER
                </button>
              </form>
            ) : (
              <div className="text-center py-12"><h2 className="text-2xl font-black text-[#D4AF37] uppercase">Nicole is reviewing your property!</h2></div>
            )}
          </div>

          {/* SIDEBAR COMPARISON & PDF */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-black text-[#003366] mb-6 uppercase border-b pb-4">The Nijack Advantage</h3>
              <div className="space-y-4">
                {[
                  { bad: "Agent: 6% Fee", good: "NPS: $0 Fees" },
                  { bad: "Must Do Repairs", good: "NPS: Buy AS-IS" },
                  { bad: "90+ Day Wait", good: "NPS: 14-30 Days" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase">
                    <span className="text-red-500 line-through opacity-40">{row.bad}</span>
                    <span className="text-[#D4AF37]">➔</span>
                    <span className="text-[#003366]">{row.good}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#003366] rounded-3xl p-6 text-white text-center shadow-lg">
              <p className="text-[9px] font-bold uppercase mb-2 tracking-[0.2em] opacity-80">Free Strategy Guide</p>
              <h4 className="text-sm font-black mb-4 uppercase tracking-tight">Agent vs. Cash Comparison PDF</h4>
              <a href="#" className="inline-block bg-[#D4AF37] text-white px-8 py-2 rounded-full font-black text-[10px] hover:scale-105 transition-transform shadow-md">DOWNLOAD NOW</a>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-black text-[#003366] text-center uppercase mb-12 tracking-tight">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { q: "Do I need to fix anything?", a: "No. We buy properties in 100% as-is condition. You can even leave unwanted items behind." },
              { q: "How long does it take?", a: "We typically close in 14-30 days, but we can move on your timeline." },
              { q: "Are there fees?", a: "Zero. We are direct buyers, not agents. You pay $0 in realtor fees or commissions." },
              { q: "Where do you buy?", a: "We focus on Northeast Ohio, including Akron, Cleveland, and surrounding suburbs." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <p className="font-black text-[#003366] uppercase text-xs">Q: {item.q}</p>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY PROMISE SECTION */}
      <section className="py-16 bg-[#003366]/5 px-6 border-y border-gray-100 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-[#003366] uppercase mb-4 tracking-tighter underline decoration-[#D4AF37] decoration-4">The Nijack Promise</h2>
          <p className="text-gray-600 font-bold leading-relaxed uppercase text-[11px] tracking-widest px-4 max-w-2xl mx-auto">
            "When you call Nijack, you're talking to us. Nicole handles the research while Jay works with you directly to find a solution that fits your timeline. Rooted in care, driven by results."
          </p>
          <div className="mt-8 font-black text-[#003366] text-xs uppercase italic">Nicole & Jay — Your Virtual Property Partners</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37] text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="font-black text-2xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] mb-12 uppercase font-black">Northeast Ohio Real Estate Investment Solutions</p>
          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12 text-[10px] text-gray-400 leading-relaxed max-w-2xl mx-auto uppercase font-bold tracking-tighter">
            <p>At <span className="text-white">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] underline">NEVER</span> be sold. Serving Northeast Ohio. 14-30 day typical closing.</p>
          </div>
          <p className="text-[12px] opacity-90 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
