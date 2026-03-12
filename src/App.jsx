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

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. We buy houses as-is in any condition." },
    { q: "How fast can closing happen?", a: "Many closings happen within 14-21 days, depending on title work and your specific timeline." },
    { q: "What areas do you buy in?", a: "We are based in Northeast Ohio, but we work with a network of trusted investment partners to provide solutions for homeowners nationwide." },
    { q: "Are there commissions or fees?", a: "No. Since we are buying the property directly or through our partners, there are no realtor commissions or hidden fees." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center text-center sm:text-left">
          <div className="flex items-center gap-3 group mx-auto sm:mx-0">
            <div className="h-11 w-11 bg-[#003366] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl">N</span>
            </div>
            <div>
              <div className="font-black text-xl text-[#003366] leading-tight uppercase">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-[0.3em] font-bold">Solutions</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-8 text-sm font-bold text-[#003366]">
              <a href="#how" className="hover:text-[#D4AF37] transition">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37] transition">FAQ</a>
            </nav>
            <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white py-16 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
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
          <p className="text-xl opacity-90 font-medium italic">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-10 pb-8">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New Seller Lead - Nijack Property Solutions" />
              <input type="text" name="_gotcha" className="hidden" />

              <h2 className="text-2xl font-bold text-center text-[#003366]">Get Your No-Obligation Offer</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <input name="email" type="email" placeholder="Email Address (Optional)" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
              
              <input name="asking_price" placeholder="What price are you hoping to get?" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />

              <div className="relative">
                <select name="timeline" required className="rounded-xl border-2 border-gray-100 p-4 pr-12 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none bg-white font-bold text-[#003366] appearance-none cursor-pointer text-sm">
                  <option value="">📅 SELL TIMELINE? (Click Here)</option>
                  <option value="ASAP">ASAP (Within 30 Days)</option>
                  <option value="30-60 Days">30-60 Days</option>
                  <option value="60-90 Days">60-90 Days</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Exploring">Just Exploring Options</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D4AF37]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-bold mb-4 text-[#003366] text-sm text-center">Property Situation (Check all that apply):</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {[
                    "Probate / Inherited", "Pre-foreclosure", "Code Violations", 
                    "Needs Repairs", "Tired Landlord", "Problem Tenants", 
                    "Vacant", "Relocating", "Taxes Behind", 
                    "Fire Damage", "Downsizing", "Other"
                  ].map((label) => (
                    <label key={label} className="flex gap-3 items-center cursor-pointer">
                      <input type="checkbox" name="situation" value={label} className="h-5 w-5 accent-[#003366] rounded border-gray-300 flex-shrink-0" /> 
                      <span className="text-[#003366] font-semibold">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea name="extra_details" placeholder="Tell us more about the property's condition or your situation..." className="rounded-xl border border-gray-200 p-4 w-full h-24 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              
              <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all transform hover:-translate-y-1">
                Get My Cash Offer
              </button>
              
              <p className="text-center text-xs text-gray-500">
                No obligation. No pressure. Your information stays private.
              </p>
            </form>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-7xl mb-6 text-[#D4AF37]">🤝</div>
              <h2 className="text-3xl font-black mb-4 text-[#003366]">Thank You—We’re On It!</h2>
              <p className="text-gray-600 font-bold mb-6 max-w-md mx-auto">
                Nicole will personally review your property details today. Expect a friendly call or text from us shortly to discuss your options.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-[#D4AF37] font-bold underline">Submit another property</button>
            </div>
          )}
        </div>
      </section>

      {/* REASSURANCE SECTION (THE MISSING PIECE) */}
      <section className="py-12 bg-white px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-8 text-[#003366]">Why Homeowners Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🛠️", title: "No Repairs", desc: "Sell as-is. We handle all the cleanup and fixing." },
              { icon: "💰", title: "No Fees", desc: "No commissions. No hidden closing costs." },
              { icon: "📅", title: "Your Timeline", desc: "Close in 14 days or 6 months. You choose." },
              { icon: "📍", title: "Local Team", desc: "Based right here in Northeast Ohio." }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-[#003366] mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-black mb-12 text-[#003366]">Our Simple 4-Step Process</h2>
        <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-black mx-auto mb-4">{i+1}</div>
              <h3 className="font-bold text-[#003366] mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-white px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black mb-12 text-[#003366] text-center">Common Questions</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-black text-[#003366] mb-2">Q: {item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & PRIVACY POLICY */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-black text-2xl uppercase mb-2">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] mb-12">Real Estate Investment Solutions</p>

          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12">
            <h4 className="text-[#D4AF37] font-black text-lg mb-4 uppercase tracking-widest">Legal & Privacy</h4>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>At <span className="text-white font-bold">Nijack Property Solutions</span>, we value your privacy. Information collected is used solely to provide evaluation services. Your data will <span className="text-[#D4AF37] font-bold underline">NEVER</span> be sold to third-party telemarketers.</p>
              <p className="italic opacity-80">
                Nijack Property Solutions is a real estate investment firm based in Cuyahoga Falls, Ohio. We are not licensed real estate agents and do not charge commissions. We may purchase properties directly or assign contracts to investment partners.
              </p>
            </div>
          </div>

          <p className="text-[10px] opacity-30 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Nijack Property Solutions</p>
        </div>
      </footer>
    </div>
  );
}
