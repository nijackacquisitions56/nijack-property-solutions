import React from 'react';

export default function NijackPropertySolutionsWebsite() {
  const sections = [
    {
      title: "Fair Cash Offers",
      icon: "💵",
      text: "Get a straightforward offer without agent commissions, hidden fees, or drawn-out negotiations.",
    },
    {
      title: "Sell As-Is",
      icon: "🛠️",
      text: "No repairs, no cleanup, and no need to get the house show-ready before you talk with us.",
    },
    {
      title: "Flexible Closing",
      icon: "⏱️",
      text: "Close quickly when you need speed, or pick a timeline that works better for your move.",
    },
    {
      title: "Simple Process",
      icon: "🛡️",
      text: "We keep things clear, respectful, and easy to understand from first conversation to closing.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tell Us About the Property",
      text: "Share the address and a few details about the home, condition, and your timeline.",
    },
    {
      number: "02",
      title: "We Review the Numbers",
      text: "We look at the property, local market activity, and repair needs to determine a fair cash offer.",
    },
    {
      number: "03",
      title: "You Get a No-Pressure Offer",
      text: "Review the offer and ask questions. There is no obligation to move forward.",
    },
    {
      number: "04",
      title: "Close on Your Schedule",
      text: "If you accept, we coordinate the next steps and work toward a smooth closing.",
    },
  ];

  const faq = [
    {
      q: "Do I need to make repairs before selling?",
      a: "No. Nijack Property Solutions buys houses as-is, so you can skip repairs, cleaning, and prep work.",
    },
    {
      q: "How fast can I get an offer?",
      a: "That depends on the property details, but many homeowners hear back quickly after reaching out.",
    },
    {
      q: "Are there any fees or commissions?",
      a: "We focus on direct home-buying solutions, which means there are typically no agent commissions involved.",
    },
    {
      q: "What types of situations do you help with?",
      a: "We can help with inherited properties, vacant homes, unwanted rentals, repair-heavy houses, and sellers who want a simpler sale.",
    },
  ];

  const whoWeHelp = [
    "Inherited properties",
    "Vacant or unwanted homes",
    "Landlords ready to sell",
    "Homes needing repairs",
    "Owners facing difficult timelines",
    "People wanting a direct sale option",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-xl text-white shadow-sm">
              🏠
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-stone-900 leading-tight">Nijack Property Solutions</div>
              <div className="text-xs text-stone-500 uppercase tracking-widest">Serving Homeowners Nationwide</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm font-medium text-stone-600 transition hover:text-emerald-800">How It Works</a>
            <a href="#benefits" className="text-sm font-medium text-stone-600 transition hover:text-emerald-800">Why Sell to Us</a>
            <a href="#faq" className="text-sm font-medium text-stone-600 transition hover:text-emerald-800">FAQ</a>
            <a href="#contact" className="rounded-2xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800">
              Get a Cash Offer
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_30%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20 items-center">
            
            <div className="flex flex-col">
              {/* IMAGE FIXED: Correct filename "site" and pathing */}
              <div className="mx-auto lg:mx-0 mb-8 w-full max-w-xl">
                <img
                  src="/symbols-home-site-banner.png" 
                  alt="Simple home selling process illustration"
                  className="w-full rounded-3xl shadow-xl shadow-stone-200/60 border border-stone-100"
                />
              </div>

              <div className="mx-auto lg:mx-0 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
                <span>✔</span>
                <span>Sell Your House As-Is With Less Hassle</span>
              </div>

              <h1 className="mt-5 text-center lg:text-left text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Need to Sell A House Without The <span className="text-emerald-700">Usual Stress?</span>
              </h1>

              <div className="mt-6 max-w-2xl mx-auto lg:mx-0 rounded-2xl border border-stone-200/90 bg-white/80 px-6 py-5 shadow-sm">
                <p className="text-center lg:text-left text-lg leading-relaxed text-stone-600">
                  Nijack Property Solutions helps homeowners explore a simple cash sale option for unwanted, inherited, or vacant properties. 
                  We handle the details so you don't have to.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#contact" className="rounded-2xl bg-emerald-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-800">
                  Request Your Offer
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-stone-200 bg-white px-8 py-4 font-bold text-stone-700 shadow-sm transition hover:bg-stone-50">
                  See How It Works
                </a>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div id="contact" className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-2xl shadow-stone-300/40 sm:p-10">
              <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900">Get Started Today</h2>
              <p className="mt-2 text-center text-stone-600 font-medium">Tell Us About The Property To Review It Right Away.</p>

              <form
                className="mt-8 space-y-4"
                action="https://formsubmit.co/info@nijackpropertysolutions.com"
                method="POST"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600" type="text" name="name" placeholder="Your Name" required />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600" type="tel" name="phone" placeholder="Phone Number" required />
                </div>
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600" type="email" name="email" placeholder="Email Address" required />
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600" type="text" name="property_address" placeholder="Property Address" required />
                
                <div className="grid gap-4 grid-cols-3">
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600 text-sm" type="text" name="sq_ft" placeholder="Sq Ft" />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600 text-sm" type="text" name="beds" placeholder="Beds" />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600 text-sm" type="text" name="baths" placeholder="Baths" />
                </div>
                
                <textarea className="min-h-[120px] w-full rounded-xl border border-stone-200 px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 outline-none transition focus:border-emerald-600" name="details" placeholder="Tell us anything helpful (repairs needed, situation, or timeline)." />
                
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://nijackpropertysolutions.com/?submitted=true" />

                <button type="submit" className="w-full rounded-xl bg-emerald-700 py-4 font-bold text-white shadow-md transition hover:bg-emerald-800">
                  Request My Cash Offer
                </button>
                
                <p className="text-center text-[11px] text-stone-400 leading-relaxed">
                  By submitting, you agree to be contacted by Nijack Property Solutions about your property inquiry. 
                  Your information is kept private.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* WHY SELL SECTION */}
        <section id="benefits" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">A Cleaner, Simpler Way to Sell</h2>
            <p className="mt-4 text-lg text-stone-600">
              We offer a clear path forward when speed, convenience, or property condition matters most.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sections.map((item) => (
              <div key={item.title} className="rounded-3xl border border-stone-200 bg-white p-8 transition hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-stone-900">From First Call to Closing</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-3xl bg-stone-50 p-8 shadow-sm border border-stone-100">
                  <div className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-4">Step {step.number}</div>
                  <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-stone-900">Who We Help</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whoWeHelp.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-stone-50 px-5 py-4 text-sm font-medium text-stone-700 border border-stone-100">
                    <span className="text-emerald-600 font-bold">✔</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-700 p-10 text-center text-white shadow-xl">
              <h3 className="text-3xl font-bold">Ready to Talk?</h3>
              <p className="mt-4 text-emerald-50">Reach out with your property address. We'll let you know if it's a fit within 24 hours.</p>
              <div className="mt-8 space-y-4 text-sm text-emerald-50 border-t border-emerald-600 pt-8">
                <div><span className="font-bold text-white uppercase text-[10px] tracking-widest block mb-1">Phone</span> (Your Phone Number)</div>
                <div><span className="font-bold text-white uppercase text-[10px] tracking-widest block mb-1">Email</span> info@nijackpropertysolutions.com</div>
              </div>
              <a href="#contact" className="mt-10 inline-block w-full rounded-2xl bg-white px-5 py-4 font-bold text-emerald-800 transition hover:bg-stone-50">
                Get Your Offer
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-stone-50 py-20 border-t border-stone-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-stone-900 mb-12">Common Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {faq.map((item) => (
                <div key={item.q} className="rounded-3xl bg-white p-8 border border-stone-200 shadow-sm">
                  <h3 className="text-lg font-bold text-stone-900">{item.q}</h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-stone-500">© 2026 Nijack Property Solutions. All rights reserved.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-semibold text-stone-400">
            <a href="#how-it-works" className="hover:text-emerald-700 transition">Process</a>
            <a href="#benefits" className="hover:text-emerald-700 transition">Benefits</a>
            <a href="#faq" className="hover:text-emerald-700 transition">FAQ</a>
            <a href="#contact" className="hover:text-emerald-700 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
