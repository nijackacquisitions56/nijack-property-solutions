import React from "react";

export default function NijackPropertySolutionsWebsite() {

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
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl text-white shadow-sm">
              🏠
            </div>
            <div>
              <div className="font-semibold text-lg leading-tight text-emerald-900">
                Nijack Property Solutions
              </div>
              <div className="text-sm text-gray-500">
                Serving Homeowners Nationwide
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#how" className="hover:text-emerald-700 transition-colors">How It Works</a>
            <a href="#why" className="hover:text-emerald-700 transition-colors">Why Sell To Us</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
            <a href="#contact" className="rounded-xl bg-emerald-700 px-5 py-2 text-white hover:bg-emerald-800 transition-colors">
              Get a Cash Offer
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <img
            src="/symbols-home-sale-banner.png"
            alt="Simple home selling process illustration"
            className="mb-8 w-full max-w-xl rounded-2xl"
          />
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-300 bg-white px-6 py-2 text-emerald-700 shadow-sm">
            <span className="text-xl">✔</span>
            <span className="font-medium">Sell Your House As-Is With Less Hassle</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Need To Sell A House<br/>Without The Usual Stress?
          </h1>
          <p className="mb-4 text-lg text-gray-600">
            Nijack Property Solutions helps homeowners explore a simple cash-sale option without repairs, commissions, or delays.
          </p>
          <p className="mb-8 text-gray-600">
            We work with a network of experienced real estate buyers and help homeowners explore simple selling options for their property.
          </p>
          <div className="rounded-2xl bg-emerald-50 p-6 border border-emerald-100 w-full max-w-md">
            <div className="text-emerald-800 font-bold text-xl mb-1">
              Call Or Text For A Quick Review
            </div>
            <div className="text-2xl font-black text-emerald-700">
              (Your Phone Number)
            </div>
          </div>
        </div>

        {/* FORM */}
        <div id="contact" className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl lg:mt-4">
          <h2 className="mb-2 text-3xl font-bold text-center text-gray-900">Get Started Today</h2>
          <p className="mb-6 text-gray-600 text-center">Tell Us About The Property & We'll Review It Right Away.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Your name" className="rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
              <input placeholder="Phone number" className="rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
            </div>
            <input placeholder="Email address" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
            <input placeholder="Property address" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
            <div className="grid grid-cols-3 gap-4">
              <input placeholder="Sq ft" className="rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
              <input placeholder="Beds" className="rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
              <input placeholder="Baths" className="rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
            </div>
            <input placeholder="Ideal selling timeline" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
            <textarea placeholder="Share anything helpful: repairs needed, inherited situation, tenants, etc." className="h-28 w-full rounded-xl border border-gray-200 bg-gray-50 p-4 focus:outline-emerald-500" />
            <button className="w-full rounded-xl bg-emerald-700 py-4 font-bold text-white shadow-lg hover:bg-emerald-800 transition-all transform hover:-translate-y-1">
              Request Your Offer
            </button>
            <p className="text-xs text-gray-500 text-center">No obligation. No pressure. Just options.</p>
            <p className="text-xs text-gray-400 text-center px-4">
              <strong>By submitting this form you agree to be contacted by Nijack Property Solutions regarding your property inquiry.</strong>
            </p>
          </form>
        </div>
      </section>

      {/* WHY SELL SECTION */}
      <section id="why" className="bg-white py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Homeowners Work With Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow bg-emerald-50/30">
                <h3 className="mb-4 font-bold text-emerald-900 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITUATIONS SECTION */}
      <section className="bg-emerald-700 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-6 md:text-4xl">Situations We Can Help With</h2>
          <p className="text-center text-emerald-100 mb-12 max-w-3xl mx-auto text-lg">
            Many homeowners reach out when they want to explore selling options without repairs, listings, or delays.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {situations.map((s, i) => (
              <div key={i} className="rounded-xl bg-white/10 backdrop-blur-md p-5 border border-white/20 hover:bg-white/20 transition-all">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" className="bg-white py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">The Simple 4-Step Process</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-gray-100 p-8 text-center bg-white shadow-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="mb-4 mt-2 font-bold text-emerald-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-emerald-50/50 py-20 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl">Common Questions</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-100">
                <h3 className="font-bold text-emerald-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id="privacy" className="bg-stone-50 py-20 scroll-mt-20 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-900">Privacy Policy</h2>
          <div className="space-y-6 text-stone-700 leading-relaxed text-sm md:text-base">
            <p>
              <strong>Nijack Property Solutions</strong> respects your privacy and is committed to protecting the information you provide through this website.
            </p>
            <p>
              <strong>Information Collection:</strong> When you submit a request, we collect details such as your name, phone number, email address, property address, and specifics regarding your home's condition.
            </p>
            <p>
              <strong>How We Use Your Info:</strong> This information is used solely to evaluate your property and contact you with potential selling options. Property details (not your private contact info) may be shared with our network of trusted real estate buyers for valuation purposes.
            </p>
            <p>
              <strong>No Third-Party Sales:</strong> We do not sell, rent, or lease your personal contact information to third-party marketing companies.
            </p>
            <p>
              <strong>Communication:</strong> By submitting your info, you provide consent for Nijack Property Solutions to contact you regarding your inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="font-bold text-emerald-900 mb-2 text-lg">Nijack Property Solutions</div>
          <p className="text-gray-500 mb-1">Serving Homeowners Nationwide</p>
          <p className="text-gray-500 mb-1">Call Or Text: (Your Phone Number)</p>
          <p className="text-gray-500 mb-6">Email: info@nijackpropertysolutions.com</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-emerald-800 mb-8">
            <a href="#how" className="hover:underline">How It Works</a>
            <a href="#why" className="hover:underline">Benefits</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>

          <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Disclaimer: Nijack Property Solutions works with a network of real estate buyers and investors. We help homeowners explore selling options and may refer properties to partner buyers for cash offers.
          </p>
          
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
