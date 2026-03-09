import React from 'react';

export default function NijackPropertySolutionsWebsite() {
  // These are the lists of info on your page
  const sections = [
    { title: "Fair Cash Offers", icon: "💵", text: "Get a straightforward offer without agent commissions, hidden fees, or drawn-out negotiations." },
    { title: "Sell As-Is", icon: "🛠️", text: "No repairs, no cleanup, and no need to get the house show-ready before you talk with us." },
    { title: "Flexible Closing", icon: "⏱️", text: "Close quickly when you need speed, or pick a timeline that works better for your move." },
    { title: "Simple Process", icon: "🛡️", text: "We keep things clear, respectful, and easy to understand from first conversation to closing." },
  ];

  const steps = [
    { number: "01", title: "Tell Us About the Property", text: "Share the address and a few details about the home, condition, and your timeline." },
    { number: "02", title: "We Review the Numbers", text: "We look at the property, local market activity, and repair needs to determine a fair cash offer." },
    { number: "03", title: "You Get a No-Pressure Offer", text: "Review the offer and ask questions. There is no obligation to move forward." },
    { number: "04", title: "Close on Your Schedule", text: "If you accept, we coordinate the next steps and work toward a smooth closing." },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-xl text-white shadow-sm">🏠</div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Nijack Property Solutions</div>
              <div className="text-xs text-stone-500 uppercase tracking-widest">Serving Homeowners Nationwide</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm font-medium hover:text-emerald-700 transition">How It Works</a>
            <a href="#contact" className="rounded-2xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition">Get Cash Offer</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION WITH IMAGE FIX */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_40%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20 items-center">
            
            <div className="flex flex-col">
              {/* IMAGE: This looks for the file named symbols-home-sale-banner.png in your main folder */}
              <div className="mx-auto lg:mx-0 mb-8 w-full max-w-xl">
                <img
                  src="/symbols-home-sale-banner.png" 
                  alt="Our simple home selling process"
                  className="w-full rounded-3xl shadow-2xl border border-stone-100"
                  onError={(e) => {
                    // This is a safety backup in case the first path fails
                    e.target.src = "symbols-home-sale-banner.png";
                  }}
                />
              </div>

              <div className="mx-auto lg:mx-0 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
                <span>✔</span>
                <span>Sell Your House As-Is With Less Hassle</span>
              </div>

              <h1 className="mt-5 text-center lg:text-left text-4xl font-extrabold leading-tight text-stone-900 sm:text-6xl">
                Need to Sell A House Without The <span className="text-emerald-700">Usual Stress?</span>
              </h1>

              <p className="mt-6 text-center lg:text-left text-lg text-stone-600 max-w-xl mx-auto lg:mx-0">
                A simple cash sale option for inherited, vacant, or repair-heavy properties. We handle the paperwork so you don't have to.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#contact" className="rounded-2xl bg-emerald-700 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-800 transition">Request Offer</a>
                <a href="#how-it-works" className="rounded-2xl border border-stone-200 bg-white px-8 py-4 font-bold text-stone-700 hover:bg-stone-50 transition">How It Works</a>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div id="contact" className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-2xl sm:p-10">
              <h2 className="text-center text-3xl font-bold text-stone-900">Get Started Today</h2>
              <form action="https://formsubmit.co/info@nijackpropertysolutions.com" method="POST" className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:border-emerald-600 outline-none" type="text" name="name" placeholder="Your Name" required />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 focus:border-emerald-600 outline-none" type="tel" name="phone" placeholder="Phone Number" required />
                </div>
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 focus:border-emerald-600 outline-none" type="email" name="email" placeholder="Email Address" required />
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 focus:border-emerald-600 outline-none" type="text" name="address" placeholder="Property Address" required />
                <textarea className="min-h-[100px] w-full rounded-xl border border-stone-200 px-4 py-3 focus:border-emerald-600 outline-none" name="message" placeholder="Tell us about the home..." />
                
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" className="w-full rounded-xl bg-emerald-700 py-4 font-bold text-white shadow-md hover:bg-emerald-800 transition">
                  Request My Cash Offer
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* WHY SELL TO US */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold text-stone-900">A Cleaner, Simpler Way to Sell</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((item) => (
              <div key={item.title} className="rounded-3xl border border-stone-200 bg-white p-8">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-white border-y border-stone-200 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold text-stone-900">From First Call to Closing</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="p-6">
                  <div className="text-emerald-700 font-black text-xl mb-2">Step {step.number}</div>
                  <h3 className="font-bold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-stone-400 text-sm">
        © 2026 Nijack Property Solutions. All rights reserved.
      </footer>
    </div>
  );
}
