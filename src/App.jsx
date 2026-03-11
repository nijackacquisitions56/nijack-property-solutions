import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    { title: "Fair Cash Offer", text: "Get a straightforward offer without agent commissions or hidden closing fees." },
    { title: "Sell As-Is", text: "No repairs, cleanup, or showings required. We buy properties in any condition." },
    { title: "Virtual Closing", text: "We handle the paperwork remotely so you can close from anywhere in the country." },
    { title: "Fast & Reliable", text: "Clear communication and a simple process designed to save you time and stress." }
  ];

  const steps = [
    { title: "Submit Property Details", text: "Tell us about the home's condition and your ideal timeline." },
    { title: "Virtual Review", text: "We analyze the local market and property data to build your offer." },
    { title: "Receive Your Offer", text: "You get a fair, no-obligation cash offer with absolute transparency." },
    { title: "Close & Get Paid", text: "Choose your closing date and skip the traditional bank delays." }
  ];

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. We buy houses in 'as-is' condition. You don't even need to clean it out." },
    { q: "How fast can closing happen?", a: "Every situation is different, but we often close in as little as 14-21 days." },
    { q: "What if I live in a different state?", a: "No problem! We specialize in virtual closings and remote transactions." },
    { q: "Are there commissions or fees?", a: "Unlike listing with an agent, there are zero commissions and we typically cover closing costs." }
  ];

  const situations = [
    "Inherited Property", "Vacant Or Abandoned", "Major Repairs Needed", 
    "Behind On Taxes", "Problem Tenants", "Divorce / Life Changes", 
    "Foreclosure Avoidance", "Out-of-State Owners", "Relocation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800 scroll-smooth font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-md font-bold text-xl">🏠</div>
            <div>
              <div className="font-bold text-lg text-emerald-900 leading-tight">Nijack Property Solutions</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">National Home Buying Solutions</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-emerald-900">
            <a href="#how" className="hover:text-emerald-700 transition-colors">Process</a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">Our Story</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
            <a href="#contact" className="rounded-full bg-emerald-700 px-6 py-2 text-white hover:bg-emerald-800 shadow-md transition-all">Get My Offer</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center text-center">
        <img src="/symbols-home-sale-banner.png" alt="Simple home selling process" className="mb-8 w-full max-w-2xl rounded-3xl shadow-2xl" />
        
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-emerald-700 text-sm font-bold border border-emerald-200">
          <span>🌎</span> Buying Houses in Ohio & Nationwide
        </div>

        <h1 className="mb-6 text-4xl font-black md:text-6xl text-gray-900 tracking-tight leading-tight">
          We Buy Houses Cash.<br/><span className="text-emerald-700 underline decoration-emerald-200">Any Condition. Anywhere.</span>
        </h1>

        <p className="mb-10 text-xl text-gray-600 max-w-2xl leading-relaxed">
          Skip the repairs, the agents, and the months of waiting. Get a fair, no-obligation offer for your property today.
        </p>

        {/* CALL TO ACTION BOX */}
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
                <h2 className="text-3xl font-bold text-gray-900">Request Your Offer</h2>
                <p className="text-gray-500 mt-2">No Repairs. No Commissions. No Fees.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Name</label>
                    <input required placeholder="Your Full Name" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Phone</label>
                    <input required placeholder="Phone Number" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Property Address (City & State)</label>
                  <input required placeholder="123 Main St, City, State" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                </div>

                <button type="submit" className="w-full rounded-xl bg-emerald-700 py-5 font-black text-white text-lg shadow-lg hover:bg-emerald-800 transition-all uppercase tracking-wider">
                  Get My Offer Now
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  By submitting this form, you agree to be contacted by Nijack Property Solutions regarding your inquiry. We value your privacy and never sell your contact information.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-bounce">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Details Received!</h2>
              <p className="text-lg text-gray-600 mb-8 px-4">
                Nicole will review your property details and contact you at **330-331-9070** shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-emerald-700 font-bold hover:underline">← Submit Another Property</button>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-16 text-gray-900">The Simple 4-Step Process</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-3xl p-8 bg-emerald-50 border border-emerald-100 shadow-sm">
                <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-black">
                  {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-3 text-emerald-900 mt-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SELL TO US / BENEFITS */}
      <section id="why" className="bg-emerald-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-16 text-gray-900">Why Sellers Choose Nicole</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                <div className="text-emerald-700 text-xl mb-4">✅</div>
                <h3 className="font-bold text-lg mb-2 text-emerald-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITUATIONS WE HELP WITH */}
      <section className="bg-emerald-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-black mb-12 md:text-4xl">Common Situations We Handle</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {situations.map((s, i) => (
              <div key={i} className="rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm font-medium text-sm">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STORY SECTION */}
      <section id="about" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-900">About Nijack Property Solutions</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Hi, I’m Nicole. I founded <strong>Nijack Property Solutions</strong> to help homeowners find honest, fast, and simple solutions for their real estate needs. Based in <strong>Northeast Ohio</strong>, we leverage modern technology to purchase homes across the country virtually.
            </p>
            <p>
              Our mission is to take the stress out of selling. Whether you've inherited a home, are dealing with a difficult tenant, or simply want to avoid the long agent-listing process, we are here to provide a clear path forward.
            </p>
            <div className="pt-8 italic font-bold text-2xl text-emerald-800">
              "Honest solutions for homeowners, no matter where your property is located."
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-emerald-50/50 py-24 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-black text-center mb-16 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-emerald-100">
                <h3 className="font-bold text-emerald-900 mb-2 text-lg">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id="privacy" className="bg-stone-50 py-16 scroll-mt-20 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold mb-8 text-stone-900 uppercase tracking-widest text-center">Privacy Policy</h2>
          <div className="space-y-4 text-stone-600 text-sm max-w-2xl mx-auto text-center md:text-left">
            <p><strong>Nijack Property Solutions</strong> respects your privacy. We collect your contact info and property details solely to provide a cash offer review.</p>
            <p><strong>Sharing:</strong> Property data may be shared with our network of real estate buyers to evaluate your home. We never sell your personal contact info to third-party marketing lists.</p>
            <p><strong>Consent:</strong> By submitting your info, you provide Nijack Property Solutions permission to contact you regarding your inquiry.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="font-black text-2xl text-emerald-900 mb-2">Nijack Property Solutions</div>
          <p className="text-gray-500 text-sm mb-8 italic">Nationwide Virtual Home Buying Solutions</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold text-emerald-800 mb-12">
            <a href="tel:3303319070" className="hover:text-emerald-900 transition-all">📞 330-331-9070</a>
            <span className="hidden md:block text-gray-200">|</span>
            <a href="mailto:info@nijackpropertysolutions.com" className="lowercase italic hover:text-emerald-900 transition-all">info@nijackpropertysolutions.com</a>
          </div>

          <p className="text-[10px] text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed uppercase tracking-tighter">
            Nijack Property Solutions is a real estate investment company. We are not licensed real estate agents and do not represent you as such. 
          </p>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">© {new Date().getFullYear()} Nijack Property Solutions</p>
        </div>
      </footer>
    </div>
  );
}
