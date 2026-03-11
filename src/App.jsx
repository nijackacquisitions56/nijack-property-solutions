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
              <div className="font-semibold text-lg">Nijack Property Solutions</div>
              <div className="text-sm text-gray-500">Serving Homeowners Nationwide</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how">How It Works</a>
            <a href="#why">Why Sell To Us</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="rounded-xl bg-emerald-700 px-5 py-2 text-white">Get a Cash Offer</a>
          </nav>
        </div>
      </header>

      {/* BIG HERO (GRID LAYOUT RESTORED) */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center text-center">
          <img src="/symbols-home-sale-banner.png" alt="Banner" className="mb-8 w-full max-w-3xl" />
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-300 bg-white px-6 py-3 text-emerald-700 shadow-sm">
            <span className="text-xl">✔</span>
            <span className="font-medium text-center">Sell Your House As-Is With Less Hassle</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Need To Sell A House<br/>Without The Usual Stress?
          </h1>
          <p className="mb-4 text-gray-600">
            Nijack Property Solutions helps homeowners explore a simple cash-sale option without repairs, commissions, or delays.
          </p>
          <p className="mb-6 text-gray-600">
            We work with a network of experienced real estate buyers and help homeowners explore simple selling options.
          </p>
        </div>

        {/* FORM */}
        <div id="contact" className="rounded-2xl border bg-white p-8 shadow-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="mb-2 text-3xl font-bold text-center text-gray-900">Get Started Today</h2>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Your name" className="rounded-xl border p-3" />
                <input required placeholder="Phone number" className="rounded-xl border p-3" />
              </div>
              <input required type="email" placeholder="Email address" className="w-full rounded-xl border p-3" />
              <input required placeholder="Property address" className="w-full rounded-xl border p-3" />
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="Sq ft" className="rounded-xl border p-3" />
                <input placeholder="Beds" className="rounded-xl border p-3" />
                <input placeholder="Baths" className="rounded-xl border p-3" />
              </div>
              <input placeholder="Ideal selling timeline" className="w-full rounded-xl border p-3" />
              <textarea placeholder="Share details..." className="h-28 w-full rounded-xl border p-3" />
              <button type="submit" className="w-full rounded-xl bg-emerald-700 py-3 font-semibold text-white">Request Your Offer</button>
              <p className="text-xs text-gray-400 text-center"><strong>By submitting you agree to be contacted by Nijack Property Solutions.</strong></p>
            </form>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-600">We've received your info and will call you at 330-331-9070 soon.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-emerald-700 underline">Back</button>
            </div>
          )}
        </div>
      </section>

      {/* SMALL HERO (CENTERED PHONE BOX) */}
      <section className="pb-16 flex justify-center px-6">
        <div className="rounded-3xl bg-white p-8 border-2 border-emerald-100 shadow-xl w-full max-w-md text-center">
          <div className="text-emerald-900 font-bold text-lg mb-2 uppercase tracking-wide">
            Call Or Text For A Quick Review
          </div>
          <a href="tel:3303319070" className="text-4xl font-black text-emerald-700 hover:text-emerald-800">
            330-331-9070
          </a>
          <p className="text-sm text-gray-400 mt-2 italic text-center">Tap to call directly</p>
        </div>
      </section>

      {/* WHY SELL SECTION */}
      <section id="why" className="bg-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">Why Homeowners Work With Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <div key={i} className="rounded-xl border p-6 shadow-sm">
                <h3 className="mb-3 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Situations We Often Help With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {situations.map((s, i) => (
              <div key={i} className="rounded-xl border bg-white p-4">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-10 text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
            {steps.map((step, i) => (
              <div key={i} className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-white py-16 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-1">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id="privacy" className="bg-stone-50 py-20 scroll-mt-20 border-t">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-stone-900">Privacy Policy</h2>
          <div className="space-y-6 text-stone-700 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            <p><strong>Nijack Property Solutions</strong> respects your privacy. We collect your contact info and property details solely to provide a cash offer.</p>
            <p><strong>Sharing:</strong> Property data may be shared with our network of buyers. We do not sell your personal contact info to marketing lists.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-bold text-emerald-900 mb-2 text-xl">Nijack Property Solutions</div>
          <p className="text-gray-500 mb-1">Serving Homeowners Nationwide</p>
          <p className="text-gray-500 mb-1">Call Or Text: <a href="tel:3303319070" className="underline">330-331-9070</a></p>
          <p className="text-gray-500 mb-8 font-medium italic underline">info@nijackpropertysolutions.com</p>
          <div className="flex justify-center gap-6 text-sm font-semibold text-emerald-800 mb-8">
            <a href="#how">How It Works</a>
            <a href="#why">Benefits</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <p className="text-xs text-gray-400 mt-6">© {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
