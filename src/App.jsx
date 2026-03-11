import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { title: "Submit Property Info", text: "Tell us about the property and your timeline." },
    { title: "Property Review", text: "We review the property and local market data." },
    { title: "Receive Your Offer", text: "If it fits our buying criteria we present a clear cash offer." },
    { title: "Choose Closing Date", text: "Close through a local title company on your timeline." }
  ];

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. We buy houses as-is." },
    { q: "How fast can closing happen?", a: "Many closings happen within 14-21 days depending on title work." },
    { q: "What areas do you buy in?", a: "We serve homeowners in Ohio and nationwide through our investor network." },
    { q: "Are there commissions or fees?", a: "No commissions when we purchase the property." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          
          {/* REFINED CSS LOGO */}
          <div className="flex items-center gap-3 group">
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
              <div className="text-[11px] text-gray-400 uppercase tracking-[0.3em] font-bold">
                Solutions
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8 text-sm font-bold text-[#003366]">
              <a href="#how" className="hover:text-[#D4AF37] transition">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37] transition">FAQ</a>
              <a href="#contact" className="bg-[#D4AF37] text-white px-6 py-2 rounded-full hover:bg-[#B8860B] transition shadow-lg">
                Get Offer
              </a>
            </nav>
            <a href="tel:3303319070" className="font-bold text-[#003366] text-lg hidden lg:block">
              📞 330-331-9070
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#003366] via-[#002244] to-[#001122] text-white py-24 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] px-4 py-1 text-[#D4AF37] text-sm font-bold tracking-wide">
            Serving Homeowners in Ohio & Nationwide
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Sell Your House <br/>
            <span className="relative inline-block">
              FAST
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#D4AF37] rounded-full opacity-80"></div>
            </span> 
            {" "}For{" "}
            <span className="relative inline-block text-[#D4AF37]">
              CASH
              <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-white rounded-full opacity-40"></div>
            </span>
          </h1>
          <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto italic">
            "The Brooklyn Hustle meets Ohio Heart."
          </p>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-12 pb-16">
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-8 text-[#003366]">
                Request Your Cash Offer
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input required placeholder="Full Name" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                  <input required type="tel" placeholder="Phone Number" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <input required placeholder="Property Address" className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                
                {/* TIMELINE DROP-DOWN WITH ARROW HELPER */}
                <div className="relative group">
                  <div className="absolute -left-10 top-4 text-[#D4AF37] animate-bounce hidden xl:block">
                    <span className="text-3xl">➔</span>
                  </div>
                  <select required className="rounded-xl border-2 border-gray-100 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none bg-white font-bold text-[#003366] appearance-none cursor-pointer shadow-sm">
                    <option value="">📅 HOW SOON ARE YOU LOOKING TO SELL? (Click Here)</option>
                    <option>ASAP (Within 30 Days)</option>
                    <option>30-60 Days</option>
                    <option>60-90 Days</option>
                    <option>3-6 Months</option>
                    <option>Just Exploring Options</option>
                  </select>
                  <div className="absolute right-4 top-5 pointer-events-none text-[#D4AF37]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold mb-3 text-[#003366]">What best describes your situation?</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {["Inherited property", "Needs repairs", "Behind on taxes", "Problem tenants", "Vacant", "Relocating", "Life change"].map((label) => (
                      <label key={label} className="flex gap-2 items-center cursor-pointer">
                        <input type="checkbox" className="accent-[#003366]" /> {label}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea placeholder="Tell us about the property (repairs, tenants, taxes, etc.)" className="rounded-xl border border-gray-200 p-4 w-full h-32 focus:ring-2 focus:ring-[#D4AF37] outline-none" />

                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all transform hover:-translate-y-1">
                  Get My Cash Offer
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-[#D4AF37]">✅</div>
              <h2 className="text-3xl font-bold mb-2 text-[#003366]">Property Details Received</h2>
              <p className="text-gray-600 font-medium">I've received your info. I'll review it and reach out shortly!</p>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-black mb-14 text-[#003366]">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:border-[#D4AF37] transition-all">
                <div className="h-14 w-14 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-black mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-lg mb-3 text-[#003366]">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-black text-center mb-16 text-[#003366]">Common Questions</h2>
          {faq.map((item, i) => (
            <div key={i} className="mb-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#003366] mb-2 flex items-center gap-2">
                <span className="text-[#D4AF37]">Q.</span> {item.q}
              </h3>
              <p className="text-gray-600 text-sm pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 text-center border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center mb-6">
             <div className="h-12 w-12 bg-[#003366] rounded-xl flex items-center justify-center shadow-lg border border-white/10 mb-4">
                <span className="text-white font-black text-2xl">N</span>
             </div>
             <div className="font-black text-2xl tracking-tighter">NIJACK PROPERTY SOLUTIONS</div>
             <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mt-1">Real Estate Investment Solutions</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-sm font-bold">
            <a href="tel:3303319070" className="hover:text-[#D4AF37] transition">📞 330-331-9070</a>
            <a href="mailto:info@nijackpropertysolutions.com" className="hover:text-[#D4AF37] transition">✉️ info@nijackpropertysolutions.com</a>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8">
            <h4 className="text-[#D4AF37] font-bold text-lg mb-4">Privacy Policy</h4>
            <p className="text-xs opacity-50 max-w-2xl mx-auto leading-loose mb-8">
              Information submitted through this website is used only to evaluate the property and respond to your inquiry. 
              We do not sell your personal information. Nijack Property Solutions is a real estate investment company. 
              We may purchase properties directly or assign contracts to investment partners.
            </p>
            <p className="text-[10px] opacity-30 uppercase tracking-widest">
              © {new Date().getFullYear()} Nijack Property Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
