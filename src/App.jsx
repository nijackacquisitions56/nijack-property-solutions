import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
        setError(false);
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  const steps = [
    { title: "Submit Info", text: "Tell us about the property and your timeline." },
    { title: "Review", text: "We review the property and local market data." },
    { title: "Cash Offer", text: "If it fits our criteria, we present a clear cash offer." },
    { title: "You Choose", text: "Close through a local title company on your timeline." }
  ];

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. We buy houses as-is in any condition." },
    { q: "How fast can closing happen?", a: "Many closings happen within 14-30 days, depending on title work and your specific timeline." },
    { q: "What areas do you buy in?", a: "We are based in Northeast Ohio, serving homeowners throughout the region including Akron, Cleveland, and surrounding areas." },
    { q: "Are there commissions or fees?", a: "No. Since we are buying the property directly, there are no realtor commissions or hidden fees." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER WITH NAVIGATION & N.P.S. FLARE */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="h-12 w-auto px-4 bg-[#003366] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] border-b-4 border-r-4 border-[#D4AF37] transform -rotate-1 group-hover:rotate-0 transition-all duration-300">
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
            <nav className="flex gap-6 text-xs font-black text-[#003366] uppercase tracking-widest">
              <a href="#how-it-works" className="hover:text-[#D4AF37] transition text-[10px]">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37] transition text-[10px]">FAQ</a>
            </nav>
            <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH WAVY UNDERLINES */}
      <section className="bg-[#003366] text-white py-16 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-tight uppercase">
            Sell Your House <br/>
            <span className="relative inline-block px-2">
              FAST
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#D4AF37] opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="5" fill="transparent" strokeLinecap="round" />
              </svg>
            </span> 
            {" "}For{" "}
            <span className="relative inline-block px-2 text-[#D4AF37]">
              CASH
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl opacity-90 font-bold tracking-wide uppercase">
            No repairs. No commissions. No stress.
          </p>
          <p className="mt-2 text-sm md:text-base opacity-70 italic tracking-widest">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-12 uppercase">
            Agent vs. Cash Buyer: <span className="text-[#D4AF37]">The Truth</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
            <div className="relative aspect-video bg-[#001122] rounded-3xl shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center group">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-white font-black tracking-widest uppercase text-[10px]">Watch: How We Help Homeowners</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase text-center border-b pb-4">How We Compare</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-red-500 font-black uppercase w-[40%]">Agent: 6% Fee</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-[40%] text-center">N.P.S: $0 Fees</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-red-500 font-black uppercase w-[40%]">Repairs Needed</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-[40%] text-center tracking-tight">N.P.S: AS-IS</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-red-500 font-black uppercase w-[40%]">90+ Day Wait</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-[40%] text-center">N.P.S: 14-30 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-10 pb-16">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-black text-center text-[#003366] uppercase tracking-tight">Get Your Cash Offer</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
              <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-bold mb-4 text-[#003366] text-sm uppercase text-center tracking-tighter">Your Situation (Check all that apply):</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {[
                    "Probate / Inherited", "Pre-foreclosure", "Code Violations", 
                    "Needs Repairs", "Tired Landlord", "Problem Tenants", 
                    "Vacant", "Relocating", "Taxes Behind", 
                    "Fire Damage", "Downsizing", "Just shopping around"
                  ].map((label) => (
                    <label key={label} className="flex gap-2 items-center cursor-pointer">
                      <input type="checkbox" name="situation" value={label} className="h-4 w-4 accent-[#003366]" /> 
                      <span className="text-[#003366] font-semibold text-[11px] leading-tight">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all transform hover:-translate-y-1">
                GET MY CASH OFFER
              </button>
            </form>
          ) : (
            <div className="text-center py-12 text-[#003366]">
              <h2 className="text-3xl font-black mb-4 uppercase text-[#D4AF37]">Request Received!</h2>
              <p className="font-bold uppercase tracking-widest">We will reach out to you shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-16 bg-white text-center px-6 border-b border-gray-100">
        <h2 className="text-3xl font-black mb-12 text-[#003366] uppercase tracking-tight">Our Simple Process</h2>
        <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-black mx-auto mb-4">{i+1}</div>
              <h3 className="font-black text-[#003366] mb-2 uppercase text-sm">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-bold">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black mb-10 text-[#003366] text-center uppercase tracking-tight">Common Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-black text-[#003366] mb-2 uppercase text-sm">Q: {item.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & PRIVACY POLICY */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-black text-2xl uppercase mb-2 tracking-tighter">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] mb-12 uppercase font-black">Northeast Ohio Real Estate Investment Solutions</p>
          
          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12 text-xs text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-4 font-bold">At <span className="text-white">Nijack Property Solutions</span>, we value your privacy. Your information is used strictly for property analysis and will <span className="text-[#D4AF37] underline">NEVER</span> be sold to third-party telemarketers.</p>
            <p className="italic opacity-80 uppercase tracking-widest text-[10px]">Nijack Property Solutions is a real estate investment company serving Northeast Ohio. We are not licensed real estate agents and do not charge commissions.</p>
          </div>
          
          <p className="text-[12px] opacity-90 uppercase tracking-[0.2em] font-black text-white">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
