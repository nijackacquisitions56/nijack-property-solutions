import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <div className="relative">
              <div className="h-11 w-11 bg-[#003366] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-transform">
                <span className="text-white font-black text-2xl tracking-tighter">N</span>
              </div>
              <div className="absolute -top-1 -right-1 bg-white rounded-md shadow-sm p-0.5 border border-gray-100">
                <div className="text-[#D4AF37] text-xs font-bold leading-none">↗</div>
              </div>
            </div>
            <div>
              <div className="font-black text-xl text-[#003366] leading-tight flex items-center gap-1 uppercase">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-[0.3em] font-bold">Solutions</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-8 text-sm font-bold text-[#003366]">
              <a href="#how" className="hover:text-[#D4AF37] transition">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37] transition">FAQ</a>
              <a href="#contact" className="bg-[#D4AF37] text-white px-6 py-2 rounded-full hover:bg-[#B8860B] transition shadow-lg">Get Offer</a>
            </nav>
            <a href="tel:3303319070" className="font-bold text-[#003366] text-lg">📞 330-331-9070</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#003366] via-[#002244] to-[#001122] text-white py-20 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] px-4 py-1 text-[#D4AF37] text-sm font-bold tracking-wide uppercase">
            Locally Owned & Mission Driven
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
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
          <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto italic leading-relaxed">
            "Rooted in Care, Driven by Results. A respectful path to selling your property on your terms."
          </p>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-12 pb-8">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-8 text-[#003366]">Request Your Cash Offer</h2>
              <form 
                name="contact-leads" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact-leads" />
                <div className="grid md:grid-cols-2 gap-5">
                  <input name="full_name" required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                  <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                
                {/* FIXED SHORTER MOBILE DROPDOWN */}
                <div className="relative group">
                  <select name="timeline" required className="rounded-xl border-2 border-gray-100 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none bg-white font-bold text-[#003366] appearance-none cursor-pointer shadow-sm text-sm md:text-base">
                    <option value="">📅 SELL TIMELINE? (Click Here)</option>
                    <option value="ASAP">ASAP (Within 30 Days)</option>
                    <option value="30-60 Days">30-60 Days</option>
                    <option value="60-90 Days">60-90 Days</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Exploring">Just Exploring Options</option>
                  </select>
                  <div className="absolute right-4 top-5 pointer-events-none text-[#D4AF37]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold mb-3 text-[#003366]">Property Situation (Check any that apply):</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    {[
                      "Probate / Inherited", "Pre-foreclosure", "Code Violations", 
                      "Needs Repairs", "Tired Landlord", "Problem Tenants", 
                      "Vacant", "Relocating", "Taxes Behind", 
                      "Fire Damage", "Downsizing", "Other"
                    ].map((label) => (
                      <label key={label} className="flex gap-3 items-center cursor-pointer py-1">
                        <input type="checkbox" name="situation" value={label} className="h-5 w-5 accent-[#003366] rounded border-gray-300" /> 
                        <span className="text-[#003366] font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <textarea name="additional_details" placeholder="Tell us more about the property's situation..." className="rounded-xl border border-gray-200 p-4 w-full h-24 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all transform hover:-translate-y-1">Get My Cash Offer</button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-7xl mb-6">🤝</div>
              <h2 className="text-3xl font-black mb-4 text-[#003366]">Information Received!</h2>
              <p className="text-gray-600 font-bold mb-6">Thank you. I will review your property details and reach out shortly.</p>
              <button onClick={() => setSubmitted(false)} className="text-[#D4AF37] font-bold underline">Submit another property</button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-12 text-center border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">
           <div className="h-10 w-10 bg-[#003366] rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10"><span className="text-white font-black text-xl">N</span></div>
           <div className="font-black text-2xl tracking-tighter uppercase">NIJACK PROPERTY SOLUTIONS</div>
           <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-6">Real Estate Investment Solutions</p>
           <div className="flex justify-center gap-8 mb-8 text-sm font-bold">
            <a href="tel:3303319070" className="hover:text-[#D4AF37] transition">📞 330-331-9070</a>
            <a href="mailto:info@nijackpropertysolutions.com" className="hover:text-[#D4AF37] transition">✉️ Email Us</a>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-[10px] opacity-30 tracking-widest uppercase">© {new Date().getFullYear()} Nijack Property Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
