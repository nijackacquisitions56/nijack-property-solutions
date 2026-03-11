import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      title: "Fair Cash Offer",
      text: "Get a straightforward offer without agent commissions, hidden fees, or drawn-out negotiations."
    },
    {
      title: "Sell As-Is",
      text: "No repairs, cleanup, or showings required. Explore selling the property exactly as it sits."
    },
    {
      title: "Flexible Closing",
      text: "Close quickly if needed or choose a timeline that works best for your situation."
    },
    {
      title: "Simple Process",
      text: "Clear communication and a straightforward process from first conversation to closing."
    }
  ];

  const steps = [
    {
      title: "Tell Us About The Property",
      text: "Share the address and a few details about the home."
    },
    {
      title: "We Review The Numbers",
      text: "We review the property and local market activity."
    },
    {
      title: "Receive A No-Pressure Offer",
      text: "You'll receive a fair offer with absolutely no obligation."
    },
    {
      title: "Close On Your Schedule",
      text: "Choose a closing timeline that works best for your situation."
    }
  ];

  const faq = [
    {
      q: "Do I need to make repairs before selling?",
      a: "No. Many homeowners explore selling options because the property needs repairs or updates. Selling as-is may be possible."
    },
    {
      q: "How fast can closing happen?",
      a: "Some situations allow closing in a few weeks while others may require more time. Timelines can often be flexible depending on your situation."
    },
    {
      q: "What if I still owe money on the property?",
      a: "Many homeowners still have mortgages, taxes, or liens. Each situation can be reviewed individually."
    },
    {
      q: "Are there commissions or fees?",
      a: "Traditional listings often involve commissions and closing costs. A direct sale option may help avoid many of those expenses."
    }
  ];

  const situations = [
    "Inherited Property",
    "Vacant Or Abandoned Homes",
    "Homes Needing Major Repairs",
    "Landlords Ready To Sell",
    "Behind On Property Taxes",
    "Problem Tenants",
    "Divorce Or Life Changes",
    "Out Of State Owners",
    "Homeowners Wanting A Simple Sale"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800 scroll-smooth">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl text-white">
              🏠
            </div>
            <div>
              <div className="font-semibold text-lg leading-tight text-emerald-900">Nijack Property Solutions</div>
              <div className="text-sm text-gray-500">Serving Homeowners Nationwide</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-900">
            <a href="#how" className="hover:text-emerald-700 transition-colors">How It Works</a>
            <a href="#why" className="hover:text-emerald-700 transition-colors">Why Sell To Us</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
            <a href="#contact" className="rounded-xl bg-emerald-700 px-5 py-2 text-white shadow-md hover:bg-emerald-800 transition-all">Get a Cash Offer</a>
          </nav>
        </div>
      </header>

      {/* MAIN HERO GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2">
        
        {/* LEFT COLUMN: TEXT & PHONE */}
        <div className="flex flex-col items-center text-center">
          <img src="/symbols-home-sale-banner.png" alt="Banner" className="mb-8 w-full max-w-3xl rounded-2xl shadow-sm" />
          
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-300 bg-white px-6 py-3 text-emerald-700 shadow-sm">
            <span className="text-xl">✔</span>
            <span className="font-medium">Sell Your House As-Is With Less Hassle</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
            Need To Sell A House<br/>Without The Usual Stress?
          </h1>

          <p className="mb-4 text-gray-600 max-w-lg">
            Nijack Property Solutions helps homeowners explore a simple cash-sale option without repairs, commissions, or delays.
          </p>

          <p className="mb-6 text-gray-600 max-w-lg">
            We work with a network of experienced real estate buyers and help homeowners explore simple selling options.
          </p>

          {/* PHONE BOX - ADJUSTED HIGHER & SIZED TO MATCH FORM BOX */}
          <div className="mt-2 rounded-3xl bg-white p-6 border-2 border-emerald-100 shadow-lg w-full max-w-[440px] transition-transform hover:scale-[1.02]">
            <div className="text-emerald-900 font-bold text-sm mb-1 uppercase tracking-wider">
              Call Or Text For A Quick Review
            </div>
            <a href="tel:3303319070" className="text-4xl font-black text-emerald-700 hover:text-emerald-800 transition-colors">
              330-331-9070
            </a>
            <p className="text-xs text-gray-400 mt-2 italic">Tap to call directly from your phone</p>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM */}
        <div id="contact" className="rounded-2xl border bg-white p-8 shadow-xl self-start w-full max-w-[440px] mx-auto lg:mx-0">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="mb-1 text-3xl font-bold text-center text-gray-900">Get Started Today</h2>
              <p className="mb-6 text-gray-600 text-center text-sm">Tell Us About The Property & We'll Review It Right Away.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Your name" className="rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
                <input required placeholder="Phone number" className="rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
              </div>

              <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
              <input required placeholder="Property address" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
              
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="Sq ft" className="rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
                <input placeholder="Beds" className="rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
                <input placeholder="Baths" className="rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
              </div>

              <input placeholder="Ideal timeline" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
              <textarea placeholder="Share details about repairs or the situation..." className="h-24 w-full rounded-xl border border-gray-200 bg-gray-50 p-3 focus:outline-emerald-500" />
              
              <button type="submit" className="w-full rounded-xl bg-emerald-700 py-4 font-bold text-white shadow-md hover:bg-emerald-800 transition-all">
                Request Your Offer
              </button>
              
              <p className="text-[10px] text-gray-400 text-center leading-tight">
                <strong>By submitting this form you agree to be contacted by Nijack Property Solutions regarding your inquiry.</strong>
              </p>
            </form>
          ) : (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-300">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Thank You!</h2>
              <p className="text-gray-600 mb-6 px-4">
                We've received your info. We will reach out to you at <strong>330-331-9070</strong> shortly to discuss your property.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-emerald-700 font-medium hover:underline">
                ← Send another inquiry
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY SELL SECTION */}
      <section id="why" className="bg-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Why Homeowners Work With Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <div key={i} className="rounded-xl border p-6 shadow-sm bg-emerald-50/20">
                <h3 className="mb-3 font-semibold text-emerald-900 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITUATIONS SECTION */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Situations We Often Help With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {situations.map((s, i) => (
              <div key={i} className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm text-center font-medium">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="rounded-xl border bg-white p-6 shadow-sm border-l-4 border-l-emerald-700">
                <h3 className="mb-3 font-semibold text-emerald-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Common Questions</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="border-b pb-6 last:border-0 border-emerald-50">
                <h3 className="font-semibold mb-2 text-emerald-900">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id="privacy" className="bg-stone-50 py-16 scroll-mt-20 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8 text-stone-900 underline decoration-emerald-700 underline-offset-8">Privacy Policy</h2>
          <div className="space-y-4 text-stone-700 text-sm max-w-2xl mx-auto text-center md:text-left">
            <p><strong>Nijack Property Solutions</strong> respects your privacy. We collect your contact info and property details solely to provide a cash offer review.</p>
            <p><strong>Sharing:</strong> Property data may be shared with our network of real estate buyers to evaluate your home. We never sell your personal contact info to third-party marketing lists.</p>
            <p><strong>Consent:</strong> By submitting your info, you give us permission to contact you regarding your property inquiry.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-bold text-emerald-900 mb-2 text-xl tracking-tight">Nijack Property Solutions</div>
          <p className="text-gray-500 mb-1 text-sm">Serving Homeowners Nationwide</p>
          <p className="text-gray-500 mb-1 text-sm">
            Call Or Text: <a href="tel:3303319070" className="underline font-semibold text-emerald-800">330-331-9070</a>
          </p>
          <p className="text-gray-500 mb-8 font-medium italic underline text-xs">info@nijackpropertysolutions.com</p>
          
          <div className="flex justify-center gap-6 text-sm font-semibold text-emerald-800 mb-8">
            <a href="#how" className="hover:underline">How It Works</a>
            <a href="#why" className="hover:underline">Benefits</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
          
          <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-widest">
            © {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
