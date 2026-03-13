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
        headers: {
          'Accept': 'application/json'
        }
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

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER WITH N.P.S. FLARE */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            {/* THE N.P.S. GOLD-FLARE ICON */}
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

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white py-16 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-tight uppercase">
            Sell Your House <br/>
            <span className="text-[#D4AF37]">Fast</span> For <span className="text-[#D4AF37]">Cash</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 font-bold tracking-wide">
            No repairs. No commissions. No hidden fees.
          </p>
          <p className="mt-2 text-sm md:text-base opacity-70 italic">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* AGENT VS CASH BUYER / VIDEO SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-4 uppercase leading-none">
              Agent vs. Cash Buyer: <span className="text-[#D4AF37]">The Truth</span>
            </h2>
            <p className="text-gray-600 font-bold max-w-2xl mx-auto uppercase text-xs tracking-widest">
              Choose the path that fits your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* VIDEO PLAYER (REPLACE WITH YOUR CANVA/YOUTUBE EMBED) */}
            <div className="relative aspect-video bg-[#001122] rounded-3xl shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center group">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-white font-black tracking-widest uppercase text-[10px]">Watch: How We Help Homeowners</p>
              </div>
            </div>

            {/* QUICK COMPARISON TABLE */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-black text-[#003366] mb-6 uppercase tracking-tight">How we compare</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2 text-xs md:text-sm">
                  <span className="text-gray-400 font-bold uppercase">Fees/Commissions</span>
                  <span className="text-[#003366] font-black">NIJACK: $0 | AGENT: 6%</span>
                </div>
                <div className="flex justify-between border-b pb-2 text-xs md:text-sm">
                  <span className="text-gray-400 font-bold uppercase">Repairs Needed</span>
                  <span className="text-[#003366] font-black">NIJACK: NONE | AGENT: MANY</span>
                </div>
                <div className="flex justify-between border-b pb-2 text-xs md:text-sm">
                  <span className="text-gray-400 font-bold uppercase">Closing Time</span>
                  <span className="text-[#003366] font-black">NIJACK: 14 DAYS | AGENT: 90 DAYS</span>
                </div>
              </div>
              <p className="mt-6 text-[10px] text-gray-400 italic leading-relaxed">
                *Cash offers provide speed and certainty, while listing is for those seeking full market value and have time for repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-10 pb-8">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New Seller Lead - Nijack Property Solutions" />
              <input type="text" name="_gotcha" className="hidden" />

              <h2 className="text-2xl font-black text-center text-[#003366] uppercase">Get Your No-Obligation Offer</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <input name="email" type="email" placeholder="Email Address (Optional)" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
              
              <div className="relative">
                <select name="timeline" required className="rounded-xl border-2 border-gray-100 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none bg-white font-bold text-[#003366] appearance-none cursor-pointer text-sm">
                  <option value="">📅 SELL TIMELINE? (Click Here)</option>
                  <option value="ASAP">ASAP (Within 30 Days)</option>
                  <option value="30-60 Days">30-60 Days</option>
                  <option value="60-90 Days">60-90 Days</option>
                  <option value="Exploring">Just Exploring Options</option>
                </select>
              </div>

              {/* MOTIVATION FILTERS */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-bold mb-4 text-[#003366] text-sm text-center uppercase tracking-tighter">Property Situation:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Probate / Inherited", "Pre-foreclosure", "Needs Repairs", 
                    "Problem Tenants", "Vacant", "Just shopping around"
                  ].map((label) => (
                    <label key={label} className="flex gap-3 items-center cursor-pointer">
                      <input type="checkbox" name="situation" value={label} className="h-5 w-5 accent-[#003366] rounded" /> 
                      <span className="text-[#003366] font-semibold">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all transform hover:-translate-y-1">
                Get My Cash Offer
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="text-7xl mb-6 text-[#D4AF37]">🤝</div>
              <h2 className="text-3xl font-black mb-4 text-[#003366]">Thank You—We’re On It!</h2>
              <p className="text-gray-600 font-bold mb-6 max-w-md mx-auto">
                Nicole will personally review your property details today. Expect a friendly call or text shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-[#D4AF37] font-bold underline">Submit another property</button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-12 border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-black text-xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] mb-8">REAL ESTATE INVESTMENT SOLUTIONS</p>
          <p className="text-[10px] opacity-30 uppercase tracking-[0.2em]">© {new Date().getFullYear()} Cuyahoga Falls, OH</p>
        </div>
      </footer>
    </div>
  );
}
