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
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-xl text-white shadow-sm shadow-emerald-200/70">
              🏠
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-stone-900">Nijack Property Solutions</div>
              <div className="text-xs text-stone-500">Serving Homeowners Nationwide</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm text-stone-600 transition hover:text-emerald-800">How It Works</a>
            <a href="#benefits" className="text-sm text-stone-600 transition hover:text-emerald-800">Why Sell to Us</a>
            <a href="#faq" className="text-sm text-stone-600 transition hover:text-emerald-800">FAQ</a>
            <a href="#contact" className="text-sm text-stone-600 transition hover:text-emerald-800">Contact</a>
            <a href="#contact" className="rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-200/60 transition hover:bg-emerald-800">
              Get a Cash Offer
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.10),transparent_24%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mx-auto mb-6 w-full max-w-xl">
                <img
                  src="symbols-home-sale-banner.png"
                  alt="Simple home selling process illustration with house, phone, keys, and cash symbols"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
              <div className="mx-auto mb-6 flex items-center justify-center gap-6 text-3xl text-emerald-700">
                <span title="Call">📞</span>
                <span className="text-xl text-stone-400">→</span>
                <span title="Property">🏠</span>
                <span className="text-xl text-stone-400">→</span>
                <span title="Cash Offer">💵</span>
                <span className="text-xl text-stone-400">→</span>
                <span title="Problem Solved">✔</span>
              </div>

              <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                <span>✔</span>
                <span>Sell Your House As-Is With Less Hassle</span>
              </div>

              <h1 className="mt-5 max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Need to Sell A House Without The Usual Stress?
              </h1>

              <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-stone-200/90 bg-white/80 px-6 py-4 shadow-sm shadow-stone-200/40">
                <p className="text-center text-lg leading-8 text-stone-600">
                  Nijack Property Solutions Helps Homeowners Explore a Simple Cash Sale Option for Unwanted, Inherited, Vacant, or Repair-Heavy Properties. We Work With Licensed Title Companies To Ensure Every Transaction Is Handled Professionally And Securely.
                  
                  Many homeowners simply want to explore their options first — there is absolutely no obligation to accept any offer.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#contact" className="rounded-2xl bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-sm shadow-emerald-200/60 transition hover:bg-emerald-800">
                  Request Your Offer
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-3.5 font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-100">
                  See How It Works
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm shadow-stone-200/50">
                  <div className="text-sm font-semibold text-emerald-700">No Repairs Needed</div>
                  <div className="mt-1 text-xl font-bold text-stone-900">Sell As-Is</div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm shadow-stone-200/50">
                  <div className="text-sm font-semibold text-emerald-700">Flexible Timing</div>
                  <div className="mt-1 text-xl font-bold text-stone-900">Close On Your Schedule</div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm shadow-stone-200/50">
                  <div className="text-sm font-semibold text-emerald-700">Straightforward Process</div>
                  <div className="mt-1 text-xl font-bold text-stone-900">No Pressure</div>
                </div>
              </div>
            </div>

            <div id="contact" className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/70 sm:p-8">
              <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900">Get Started Today</h2>
              <p className="mt-2 text-center text-base font-semibold text-stone-700">Tell Us About The Property And We'll Review It Right Away.</p>

              <form
                className="mt-6 space-y-4"
                action="https://formsubmit.co/info@nijackpropertysolutions.com"
                method="POST"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" name="name" placeholder="Your name" required />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="tel" name="phone" placeholder="Phone number" required />
                </div>
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="email" name="email" placeholder="Email address" required />
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" name="property_address" placeholder="Property address" required />
                <div className="grid gap-4 sm:grid-cols-3">
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" name="square_footage" placeholder="Sq ft" />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" name="bedrooms" placeholder="Beds" />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" name="bathrooms" placeholder="Baths" />
                </div>
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" name="timeline" placeholder="Ideal selling timeline" />
                <textarea className="min-h-[120px] w-full rounded-xl border border-stone-200 px-4 py-3 outline-none ring-0 transition focus:border-emerald-400" name="details" placeholder="Share anything helpful about the home, repairs needed, inherited situation, tenants, or why you need to sell." />
                <input type="hidden" name="_subject" value="New lead from Nijack Property Solutions" />
                <input type="hidden" name="_next" value="https://www.nijackpropertysolutions.com/?submitted=true" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="rounded-2xl bg-emerald-50 p-4 text-center text-sm text-emerald-800">
                  <span className="font-semibold text-emerald-900">Typical Response Time:</span> Within 24 Hours
                </div>
                <button type="submit" className="w-full rounded-xl bg-emerald-700 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-800">
                  Request My Cash Offer
                </button>
                <p className="text-xs text-center text-stone-500">Your information is kept private and used only to review your property.</p>
                <button type="submit" className="hidden">
                </button>
                <div className="text-center space-y-3">
                  <p className="text-sm leading-6 font-medium text-stone-600">
                    By submitting, you agree to be contacted by Nijack Property Solutions about your property inquiry.
                  </p>
                  <div className="mx-auto max-w-sm rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                    <div className="font-semibold">A Simple, Seller‑Friendly Process</div>
                    <div>No Obligation To Accept Any Offer</div>
                    <div>Professional Closing Through Licensed Title Companies</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">Why Homeowners Reach Out</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">A Cleaner, Simpler Way to Explore Your Selling Options</h2>
            <p className="mt-4 text-lg text-stone-600">
              We understand that not every house is ready for a traditional listing. Our goal is to offer a clear path forward when speed, convenience, or property condition matters most.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sections.map((item) => (
              <div key={item.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50 transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">How It Works</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">From First Call to Closing, We Keep It Simple</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-3xl border border-stone-200 bg-amber-50/40 p-6 text-center shadow-sm shadow-stone-200/40">
                  <div className="text-sm font-bold text-emerald-700">{step.number}</div>
                  <h3 className="mt-3 text-xl font-semibold text-stone-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/50">
              <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Who We Help</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whoWeHelp.map((item) => (
                  <div key={item} className="rounded-2xl bg-stone-50 px-4 py-3 text-sm text-stone-700">
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-700 p-8 text-center text-white shadow-sm shadow-emerald-200/60">
              <h3 className="text-3xl font-bold tracking-tight">Ready to Talk?</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50">
                Reach out with the address and a few details. We’ll let you know if the property looks like a fit.
              </p>
              <div className="mt-6 space-y-3 text-sm text-emerald-50">
                <div><span className="font-semibold text-white">Phone:</span> (Your Phone Number)</div>
                <div><span className="font-semibold text-white">Email:</span> nicole@nijackpropertysolutions.com</div>
                <div><span className="font-semibold text-white">Area:</span> Based In Ohio — Serving Homeowners Nationwide</div>
              </div>
              <a href="#contact" className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-800 transition hover:bg-amber-50 mx-auto">
                Request an Offer
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">FAQ</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Common Questions</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faq.map((item) => (
                <div key={item.q} className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm shadow-stone-200/40">
                  <h3 className="text-xl font-semibold text-stone-900">{item.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-stone-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="w-full text-center">
            <div className="mt-1 text-center">© 2026 Nijack Property Solutions. All rights reserved.</div>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-4">
            <a href="#benefits" className="transition hover:text-emerald-800">Why Sell to Us</a>
            <a href="#how-it-works" className="transition hover:text-emerald-800">How It Works</a>
            <a href="#contact" className="transition hover:text-emerald-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
