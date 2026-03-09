import React from 'react';

export default function NijackPropertySolutionsWebsite() {
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

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. Nijack Property Solutions buys houses as-is, so you can skip repairs, cleaning, and prep work." },
    { q: "How fast can I get an offer?", a: "That depends on the property details, but many homeowners hear back quickly after reaching out." },
    { q: "Are there any fees or commissions?", a: "We focus on direct home-buying solutions, which means there are typically no agent commissions involved." },
    { q: "What types of situations do you help with?", a: "We can help with inherited properties, vacant homes, unwanted rentals, repair-heavy houses, and sellers who want a simpler sale." },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-xl text-white shadow-sm">
              🏠
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Nijack Property Solutions</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider">Serving Nationwide</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm font-medium hover:text-emerald-700 transition">How It Works</a>
            <a href="#benefits" className="text-sm font-medium hover:text-emerald-700 transition">Benefits</a>
            <a href="#contact" className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition">Get Cash Offer</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_40%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24 items-center">
            
            <div className="flex flex-col text-center lg:text-left">
              <img
                src="/symbols-home-sale-banner.png" 
                alt="Process Illustration"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg mb-8"
              />
              <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-6xl">
                Sell Your House <span className="text-emerald-700">Without The Stress.</span>
              </h1>
              <p className="mt-6 text-lg text-stone-600 max-w-xl mx-auto lg:mx-0">
                A simple cash sale option for inherited, vacant, or repair-heavy properties. Professional closing via licensed title companies.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#contact" className="rounded-xl bg-emerald-700 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-800 transition">Request Offer</a>
                <a href="#how-it-works" className="rounded-xl border border-stone-200 bg-white px-8 py-4 font-bold text-stone-700 hover:bg-stone-50 transition">Learn More</a>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div id="contact" className="rounded-3xl border border-stone-200 bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-center">Get Your Cash Offer</h2>
              <p className="text-stone-500 text-center text-sm mt-1">No obligation, no fees, no repairs.</p>
              
              <form action="https://formsubmit.co/info@nijackpropertysolutions.com" method="POST" className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none focus:border-emerald-500" type="text" name="name" placeholder="Name" required />
                  <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none focus:border-emerald-500" type="tel" name="phone" placeholder="Phone" required />
                </div>
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none focus:border-emerald-500" type="email" name="email" placeholder="Email" required />
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none focus:border-emerald-500" type="text" name="address" placeholder="Property Address" required />
                <textarea className="min-h-[100px] w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-emerald-500" name="message" placeholder="Tell us about the home (repairs needed, etc.)" />
                
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://nijackpropertysolutions.com/?submitted=true" />

                <button type="submit" className="w-full rounded-xl bg-emerald-700 py-4 font-bold text-white shadow-md hover:bg-emerald-800 transition">
                  Get My Offer Today
                </button>
                <p className="text-[10px] text-center text-stone-400 mt-4 leading-relaxed">
                  By submitting, you agree to be contacted by Nijack Property Solutions regarding your property inquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits & FAQ continue below following the same structure... */}
      </main>
    </div>
  );
}
