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

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. We buy houses as-is in any condition." },
    { q: "How fast can closing happen?", a: "Many closings happen within 14-30 days, depending on title work and your specific timeline." },
    { q: "What areas do you buy in?", a: "We are based in Northeast Ohio, serving Akron, Cleveland, and surrounding areas." },
    { q: "Are there commissions or fees?", a: "No. We are buying the property directly, so there are zero realtor commissions." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER WITH N.P.S. FLARE & NAV */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="h-12 w-auto px-4 bg-[#003366] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] border-b-4 border-r-4 border-[#D4AF37]">
              <span className="text-white font-black text-xl tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left">
              <div className="font-black text-xl text-[#003366] leading-tight uppercase tracking-tight">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Solutions</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-[10px] font-black text-[#003366] uppercase tracking-widest">
              <a href="#how-it-works" className="hover:text-[#D4AF37]">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37]">FAQ</a>
            </nav>
            <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH WAVY UNDERLINES */}
      <section className="bg-[#003366] text-white py-16 pb-32 border-b-8 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-tight uppercase">
            Sell Your House <br/>
            <span className="relative inline-block px-2">
              FAST
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="5" fill="transparent" />
              </svg>
            </span> 
            {" "}For{" "}
            <span className="relative inline-block px-2 text-[#D4AF37]">
              CASH
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl font-bold uppercase tracking-widest opacity-90 italic">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* VIDEO SPOTLIGHT (CENTERED) */}
      <section className="mx-auto max-w-5xl px-6 -mt-20">
        <div className="relative aspect-video bg-[#001122] rounded-3xl shadow-2xl border-4 border-white overflow-hidden group">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
              <span className="text-white text-2xl ml-1">▶</span>
            </div>
            <h3 className="text-white font-black text-2xl uppercase tracking-tighter">How We Help Sellers In Northeast Ohio</h3>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM & COMPARISON */}
      <main className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-black text-[#003366] uppercase text-center">Get Your Cash Offer</h2>
                <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full" />
                <input name="phone" required placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full" />
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full" />
                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#D4AF37] transition-all">
                  GET MY CASH OFFER
                </button>
              </form>
            ) : (
              <div className="text-center py-12"><h2 className="text-2xl font-black text-[#D4AF37] uppercase">Nicole is reviewing your property!</h2></div>
            )}
            
            {/* LEAD MAGNET PDF */}
            <div className="mt-8 p-6 bg-[#003366] rounded-2xl text-white text-center">
              <p className="text-xs font-bold uppercase mb-2 tracking-widest">Not ready yet? Download our Free Guide</p>
              <a href="#" className="inline-block bg-[#D4AF37] text-white px-6 py-2 rounded-full font-black text-[10px]">AGENT VS. CASH PDF</a>
            </div>
          </div>

          {/* COMPARISON TABLE (CENTERED COLUMNS) */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase text-center border-b pb-4">How We Compare</h3>
            <div className="space-y-6">
              {[
                { red: "Agent: 6% Fee", nps: "N.P.S: $0 Fees" },
                { red: "Repairs Needed", nps: "N.P.S: AS-IS" },
                { red: "90+ Day Wait", nps: "N.P.S: 14-30 Days" }
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-red-500 font-black uppercase w-[40%] text-left">{row.red}</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-[40%] text-center">{row.nps}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-white px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black mb-10 text-[#003366] text-center uppercase tracking-tight">Common Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="font-black text-[#003366] mb-2 uppercase text-xs">Q: {item.q}</p>
                <p className="text-gray-600 text-sm font-medium">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & PRIVACY POLICY BLOCK */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-black text-2xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] mb-12 uppercase">Northeast Ohio Real Estate Investment Solutions</p>
          
          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12 text-xs text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-4">At <span className="text-white font-bold">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] font-bold underline">NEVER</span> be sold to third-party telemarketers.</p>
            <p className="italic opacity-80 uppercase tracking-widest text-[9px]">Serving Northeast Ohio. Not licensed real estate agents. No commissions. 14-30 day typical closing.</p>
          </div>
          
          <p className="text-[12px] opacity-90 uppercase tracking-[0.2em] font-black text-white">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
