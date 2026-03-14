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
      <section className="bg-[#003366] text-white py-20 pb-32 border-b-8 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tighter">
            Sell Your House <br/>
            <span className="relative inline-block px-2">FAST
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="5" fill="transparent"/></svg>
            </span> {" "}For{" "}
            <span className="relative inline-block px-2 text-[#D4AF37]">CASH
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="mt-10 text-xl font-bold uppercase tracking-widest opacity-90 italic">"Rooted in Care, Driven by Results."</p>
        </div>
      </section>

      {/* VIDEO SECTION - THE CENTERPIECE */}
      <section className="mx-auto max-w-5xl px-6 -mt-20 mb-20">
        <div className="bg-[#001122] rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden aspect-video relative group ring-8 ring-[#003366]/5">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white text-3xl ml-1">▶</span>
              </div>
              <h3 className="text-white font-black text-3xl uppercase tracking-tighter mb-2">How We Help Northeast Ohio Homeowners</h3>
              <p className="text-[#D4AF37] font-black uppercase text-xs tracking-[0.3em]">Full 2-Minute Guide Uploading...</p>
           </div>
        </div>
      </section>

      {/* THE COMPARISON SECTION - NO MORE EMPTY SPACE */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black text-[#003366] text-center uppercase mb-12 tracking-tight">The Nijack Advantage vs. Traditional Agents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Fees", agent: "6% Commission", nps: "$0 Fees", icon: "💰" },
              { label: "Repairs", agent: "Must Be Perfect", nps: "Buy AS-IS", icon: "🛠️" },
              { label: "Closing", agent: "90+ Days", nps: "14-30 Days", icon: "🗓️" },
              { label: "Costs", agent: "Seller Pays 2%", nps: "We Pay All", icon: "⚖️" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-b-8 border-[#D4AF37] text-center group hover:-translate-y-2 transition-transform">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-black text-[#003366] uppercase text-sm mb-4 tracking-widest">{item.label}</h4>
                <div className="text-red-500 font-bold text-xs uppercase mb-2 line-through opacity-60">{item.agent}</div>
                <div className="text-[#003366] font-black text-xl uppercase tracking-tighter">{item.nps}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-[#003366] rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-black text-white uppercase text-center mb-8">Get Your Fair Cash Offer</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="name" required placeholder="Name" className="rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-[#D4AF37]" />
                    <input name="phone" required placeholder="Phone" className="rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-[#D4AF37]" />
                  </div>
                  <input name="address" required placeholder="Property Address" className="rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-[#D4AF37]" />
                  <button type="submit" className="w-full rounded-2xl bg-[#D4AF37] py-6 font-black text-white text-2xl shadow-xl hover:scale-105 transition-transform uppercase">
                    Get Started Now
                  </button>
                </form>
              ) : (
                <div className="text-center text-white py-10">
                  <h2 className="text-4xl font-black mb-4 uppercase">Success!</h2>
                  <p className="font-bold opacity-80 uppercase tracking-widest">Nicole is analyzing your comps now.</p>
                </div>
              )}
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-white opacity-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-20 border-t-8 border-[#D4AF37] text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="font-black text-2xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] mb-12 uppercase">Northeast Ohio Real Estate Investment Solutions</p>
          <p className="text-[12px] opacity-90 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
