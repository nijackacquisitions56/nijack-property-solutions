import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    { title: "Fair Cash Offer", text: "Straightforward offers without agent commissions or hidden closing fees." },
    { title: "Sell As-Is", text: "No repairs or cleanup needed. We buy properties in any condition, nationwide." },
    { title: "Virtual Closing", text: "We handle the paperwork remotely so you can close from the comfort of your home." },
    { title: "Fast & Reliable", text: "Clear communication and a simple process designed to save you time." }
  ];

  const situations = [
    "Inherited Property", "Vacant Homes", "Major Repairs Needed", 
    "Behind on Taxes", "Out-of-State Owners", "Problem Tenants"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800 scroll-smooth font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-md font-bold">NP</div>
            <div>
              <div className="font-bold text-lg text-emerald-900 leading-tight">Nijack Property Solutions</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest text-center">National Home Buying Solutions</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#how" className="hover:text-emerald-700 transition-colors">How It Works</a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">Our Story</a>
            <a href="#contact" className="rounded-full bg-emerald-700 px-6 py-2 text-white hover:bg-emerald-800 shadow-md transition-all">Get Cash Offer</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center text-center">
        <img src="/symbols-home-sale-banner.png" alt="Sell Your House Virtually" className="mb-8 w-full max-w-2xl rounded-3xl shadow-2xl" />
        
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-emerald-700 text-sm font-bold border border-emerald-200">
          <span>🌎</span> Buying Houses in Ohio & Nationwide
        </div>

        <h1 className="mb-6 text-4xl font-black md:text-6xl text-gray-900 tracking-tight">
          Sell Your House Fast.<br/><span className="text-emerald-700">Any Condition. Anywhere.</span>
        </h1>

        <p className="mb-10 text-xl text-gray-600 max-w-2xl leading-relaxed">
          Get a fair cash offer without leaving your couch. We specialize in simple, remote closings for homeowners across the country.
        </p>

        <div className="mb-16 rounded-3xl bg-white p-8 border-2 border-emerald-100 shadow-xl w-full max-w-md">
          <p className="text-emerald-900 font-bold text-sm mb-1 uppercase tracking-widest">Call Or Text Nicole Directly</p>
          <a href="tel:3303319070" className="text-4xl font-black text-emerald-700 hover:text-emerald-800 transition-colors">330-331-9070</a>
          <p className="text-xs text-gray-400 mt-2 italic">A Trusted, Ohio-Based Company</p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="contact" className="mx-auto max-w-3xl px-6 pb-24 scroll-mt-20">
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl border border-gray-100">
          {!submitted ? (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Get Your No-Obligation Offer</h2>
                <p className="text-gray-500 mt-2">Submit your property details below for a quick review.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 ml-1">NAME</label>
                    <input required placeholder="Your Name" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 ml-1">PHONE</label>
                    <input required placeholder="Phone Number" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 ml-1">PROPERTY ADDRESS (Include City & State)</label>
                  <input required placeholder="123 Main St, City, State" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                </div>

                <button type="submit" className="w-full rounded-xl bg-emerald-700 py-5 font-black text-white text-lg shadow-lg hover:bg-emerald-800 transition-all uppercase tracking-wider">
                  Request My Cash Offer
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed px-4">
                  By clicking "Request My Cash Offer", you agree to be contacted by Nijack Property Solutions regarding your inquiry. We respect your privacy and never sell your data.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Offer Request Sent!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nicole will review your property details and contact you at **330-331-9070** shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT ME SECTION (VIRTUAL READY) */}
      <section id="about" className="bg-emerald-900 py-24 text-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">About Nijack Property Solutions</h2>
          <div className="space-y-6 text-emerald-50 text-lg leading-relaxed">
            <p>
              Hi, I’m Nicole. Based in the heart of the Midwest, I founded <strong>Nijack Property Solutions</strong> to help homeowners navigate difficult property situations with ease. While our roots are in <strong>Northeast Ohio</strong>, we leverage modern technology to buy houses cash across many different states.
            </p>
            <p>
              Virtual wholesaling allows us to provide the same honest, fast, and transparent service to a homeowner in Florida or Texas as we do to a neighbor right here in <strong>Cuyahoga Falls</strong>. We specialize in remote closings, meaning you can sell your house without ever having to meet in person or deal with stressful showings.
            </p>
            <div className="pt-8 italic font-bold text-2xl text-white">
              "Providing honest real estate solutions, no matter where your property is located."
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-16 text-gray-900">The Nijack Advantage</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <div key={i} className="rounded-3xl p-8 bg-emerald-50/50 border border-emerald-100/50">
                <div className="text-emerald-700 text-2xl mb-4 font-bold italic">0{i+1}</div>
                <h3 className="font-bold text-xl mb-3 text-emerald-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="font-black text-2xl text-emerald-900 mb-2">Nijack Property Solutions</div>
          <p className="text-gray-500 text-sm">A Professional Real Estate Investment Company</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold text-emerald-800 mt-8 mb-12">
            <a href="tel:3303319070" className="hover:text-emerald-900">📞 330-331-9070</a>
            <a href="mailto:info@nijackpropertysolutions.com" className="lowercase italic hover:text-emerald-900">info@nijackpropertysolutions.com</a>
          </div>
          <p className="text-[10px] text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Nijack Property Solutions works with a nationwide network of buyers. We are not real estate agents and do not provide legal or financial advice. We specialize in providing cash-sale alternatives for properties in any condition.
          </p>
          <p className="text-[10px] text-gray-400 tracking-widest uppercase">© {new Date().getFullYear()} Nijack Property Solutions</p>
        </div>
      </footer>
    </div>
  );
}
