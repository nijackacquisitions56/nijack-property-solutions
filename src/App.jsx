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
      
      {/* HEADER WITH ORIGINAL N.P.S. FLARE */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto px-4 bg-[#003366] rounded-xl flex items-center justify-center border-b-4 border-r-4 border-[#D4AF37] shadow-lg">
              <span className="text-white font-black text-xl tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left">
              <div className="font-black text-xl text-[#003366] uppercase tracking-tight">NIJACK <span className="text-[#D4AF37]">PROPERTY</span></div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Solutions</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black text-[#003366] uppercase tracking-widest">
            <a href="#how-it-works" className="hover:text-[#D4AF37]">How It Works</a>
            <a href="tel:3303319070" className="font-bold text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH WAVY UNDERLINES */}
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

      {/* VIDEO SPOTLIGHT (CENTERED OVERLAP) */}
      <section className="mx-auto max-w-4xl px-6 -mt-20 mb-20">
        <div className="bg-[#001122] rounded-3xl shadow-2xl border-4 border-white overflow-hidden aspect-video relative group">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
              <h3 className="text-white font-black text-2xl uppercase tracking-tighter">Virtual Solutions for Northeast Ohio</h3>
              <p className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest">Video Loading...</p>
           </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM & SIDEBAR COMPARISON */}
      <main className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEAD FORM (LEFT) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-black text-[#003366] uppercase text-center">Get Your Cash Offer</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full" />
                  <input name="phone" required placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full" />
                </div>
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full" />
                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#D4AF37] transition-all">
                  GET MY CASH OFFER
                </button>
              </form>
            ) : (
              <div className="text-center py-12"><h2 className="text-2xl font-black text-[#D4AF37] uppercase">Nicole is reviewing your property!</h2></div>
            )}
          </div>

          {/* SIDEBAR COMPARISON (RIGHT) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-black text-[#003366] mb-6 uppercase border-b pb-4">The Nijack Advantage</h3>
              <div className="space-y-6">
                {[
                  { agent: "Agent: 6% Fee", nps: "N.P.S: $0 Fees" },
                  { agent: "Must Do Repairs", nps: "N.P.S: Buy AS-IS" },
                  { agent: "90+ Day Wait", nps: "N.P.S: 14-30 Days" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-xs font-black uppercase">
                    <span className="text-red-500 line-through opacity-60">{row.agent}</span>
                    <span className="text-[#D4AF37] text-lg">➔</span>
                    <span className="text-[#003366]">{row.nps}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* LEAD MAGNET PDF */}
            <div className="bg-[#003366] rounded-3xl p-6 text-white text-center shadow-lg">
              <p className="text-[10px] font-bold uppercase mb-2 tracking-widest opacity-80">Free Strategy Guide</p>
              <h4 className="text-sm font-black mb-4 uppercase">Agent vs. Cash PDF</h4>
              <a href="#" className="inline-block bg-[#D4AF37] text-white px-6 py-2 rounded-full font-black text-[10px] hover:scale-105 transition-transform">DOWNLOAD NOW</a>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37] text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="font-black text-2xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] mb-12 uppercase">Northeast Ohio Real Estate Investment Solutions</p>
          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12 text-xs text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p>At <span className="text-white font-bold">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] font-bold underline">NEVER</span> be sold. Serving Northeast Ohio. 14-30 day typical closing.</p>
          </div>
          <p className="text-[12px] opacity-90 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
