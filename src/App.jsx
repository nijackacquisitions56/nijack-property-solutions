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
    { q: "How fast can closing happen?", a: "Many closings happen within 14-21 days, depending on title work." },
    { q: "What areas do you buy in?", a: "We are based in Northeast Ohio, serving Akron, Cleveland, and surrounding areas." },
    { q: "Are there commissions or fees?", a: "No. There are zero realtor commissions or hidden fees." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER WITH N.P.S. FLARE */}
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
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#003366] text-white py-16 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center uppercase">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-tight">
            Sell Your House <span className="text-[#D4AF37]">Fast</span> For <span className="text-[#D4AF37]">Cash</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 font-bold tracking-wide">No repairs. No commissions. No stress.</p>
        </div>
      </section>

      {/* COMPARISON / VIDEO SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-12 uppercase">
            Agent vs. Cash Buyer: <span className="text-[#D4AF37]">The Truth</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
            {/* VIDEO PLACEHOLDER */}
            <div className="relative aspect-video bg-[#001122] rounded-3xl shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center">
               <p className="text-white font-black tracking-widest uppercase text-[10px]">Your Video Will Play Here</p>
            </div>

            {/* QUICK COMPARISON TABLE */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase text-center border-b pb-4">How We Compare</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-red-500 font-black uppercase w-1/3">Agent: 6% Fee</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-1/3 text-right">N.P.S: $0 Fees</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-red-500 font-black uppercase w-1/3">Repairs Needed</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-1/3 text-right">N.P.S: As-Is</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-red-500 font-black uppercase w-1/3">90+ Day Wait</span>
                  <span className="text-[#D4AF37] text-xl font-bold">➔</span>
                  <span className="text-[#003366] font-black uppercase w-1/3 text-right">N.P.S: 14 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-10 pb-16">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-black text-center text-[#003366] uppercase">Get Your Cash Offer</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full" />
              </div>
              <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full" />
              
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
                      <span className="text-[#003366] font-semibold text-[12px]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all transform hover:-translate-y-1">
                GET MY CASH OFFER
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-3xl font-black mb-4 text-[#003366]">Nicole is on it!</h2>
              <p className="text-gray-600 font-bold">Expect a call shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-black mb-12 text-[#003366] uppercase">Simple 4-Step Process</h2>
        <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="h-10 w-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-black mx-auto mb-4">{i+1}</div>
              <h3 className="font-bold text-[#003366] mb-2 uppercase">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black mb-10 text-[#003366] text-center uppercase tracking-tight">Common Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-black text-[#003366] mb-2 uppercase text-sm">Q: {item.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-12 border-t-8 border-[#D4AF37] text-center">
        <div className="font-black text-xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
        <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em]">© {new Date().getFullYear()} Cuyahoga Falls, OH</p>
      </footer>
    </div>
  );
}
