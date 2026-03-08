export default function NijackPropertySolutionsWebsite() {
  const sections = [
    {
      title: "Fair cash offers",
      icon: "💵",
      text: "Get a straightforward offer without agent commissions, hidden fees, or drawn-out negotiations.",
    },
    {
      title: "Sell as-is",
      icon: "🛠️",
      text: "No repairs, no cleanup, and no need to get the house show-ready before you talk with us.",
    },
    {
      title: "Flexible closing",
      icon: "⏱️",
      text: "Close quickly when you need speed, or pick a timeline that works better for your move.",
    },
    {
      title: "Simple process",
      icon: "🛡️",
      text: "We keep things clear, respectful, and easy to understand from first conversation to closing.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tell us about the property",
      text: "Share the address and a few details about the home, condition, and your timeline.",
    },
    {
      number: "02",
      title: "We review the numbers",
      text: "We look at the property, local market activity, and repair needs to determine a fair cash offer.",
    },
    {
      number: "03",
      title: "You get a no-pressure offer",
      text: "Review the offer and ask questions. There is no obligation to move forward.",
    },
    {
      number: "04",
      title: "Close on your schedule",
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
              <div className="text-xs text-stone-500">Simple property buying solutions</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm text-stone-600 transition hover:text-emerald-800">How it works</a>
            <a href="#benefits" className="text-sm text-stone-600 transition hover:text-emerald-800">Why sell to us</a>
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
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm text-emerald-800 shadow-sm">
                <span>✔</span>
                <span>Sell your house as-is with less hassle</span>
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Need to sell a house without the usual stress?
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                Nijack Property Solutions helps homeowners explore a simple cash sale option for unwanted, inherited, vacant, or repair-heavy properties.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-sm shadow-emerald-200/60 transition hover:bg-emerald-800">
                  Request Your Offer
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-stone-200 bg-white px-6 py-3.5 font-semibold text-stone-900 transition hover:bg-amber-50">
                  See How It Works
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm shadow-stone-200/50">
                  <div className="text-sm text-stone-500">No repairs needed</div>
                  <div className="mt-1 text-xl font-bold text-stone-900">Sell as-is</div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm shadow-stone-200/50">
                  <div className="text-sm text-stone-500">Flexible timing</div>
                  <div className="mt-1 text-xl font-bold text-stone-900">Close on your schedule</div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm shadow-stone-200/50">
                  <div className="text-sm text-stone-500">Straightforward process</div>
                  <div className="mt-1 text-xl font-bold text-stone-900">No pressure</div>
                </div>
              </div>
            </div>

            <div id="contact" className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/70 sm:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">Get started today</h2>
              <p className="mt-2 text-sm text-stone-500">Tell us about the property and we’ll reach out.</p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" placeholder="Your name" />
                  <input className="h-12 rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="tel" placeholder="Phone number" />
                </div>
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="email" placeholder="Email address" />
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" placeholder="Property address" />
                <input className="h-12 w-full rounded-xl border border-stone-200 px-4 outline-none ring-0 transition focus:border-emerald-400" type="text" placeholder="Ideal selling timeline" />
                <textarea className="min-h-[120px] w-full rounded-xl border border-stone-200 px-4 py-3 outline-none ring-0 transition focus:border-emerald-400" placeholder="Share anything helpful about the home, repairs needed, inherited situation, tenants, or why you want to sell." />
                <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
                  <span className="font-semibold text-emerald-900">Response speed:</span> Typically within 24 hours
                </div>
                <button type="button" className="w-full rounded-xl bg-emerald-700 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-800">
                  Request My Cash Offer
                </button>
                <p className="text-xs leading-5 text-stone-500">
                  By submitting, you agree to be contacted by Nijack Property Solutions about your property inquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">Why homeowners reach out</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">A cleaner, simpler way to explore your selling options</h2>
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
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">How it works</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">From first call to closing, we keep it simple</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-3xl border border-stone-200 bg-amber-50/40 p-6 shadow-sm shadow-stone-200/40">
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
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Who we help</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whoWeHelp.map((item) => (
                  <div key={item} className="rounded-2xl bg-stone-50 px-4 py-3 text-sm text-stone-700">
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-700 p-8 text-white shadow-sm shadow-emerald-200/60">
              <h3 className="text-3xl font-bold tracking-tight">Ready to talk?</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50">
                Reach out with the address and a few details. We’ll let you know if the property looks like a fit.
              </p>
              <div className="mt-6 space-y-3 text-sm text-emerald-50">
                <div><span className="font-semibold text-white">Phone:</span> (555) 123-4567</div>
                <div><span className="font-semibold text-white">Email:</span> info@nijackpropertysolutions.com</div>
                <div><span className="font-semibold text-white">Area:</span> Serving local homeowners</div>
              </div>
              <a href="#contact" className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-800 transition hover:bg-amber-50">
                Request an Offer
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">FAQ</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Common questions</h2>
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
          <div>
            <div className="font-semibold text-stone-900">Nijack Property Solutions</div>
            <div>Direct home-selling solutions with a simple, respectful process.</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#benefits" className="transition hover:text-emerald-800">Why sell to us</a>
            <a href="#how-it-works" className="transition hover:text-emerald-800">How it works</a>
            <a href="#contact" className="transition hover:text-emerald-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
