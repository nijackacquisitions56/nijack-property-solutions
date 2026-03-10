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

    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800">

      {/* HEADER */}

      <header className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl text-white">
              🏠
            </div>

            <div>
              <div className="font-semibold text-lg">
                Nijack Property Solutions
              </div>

              <div className="text-sm text-gray-500">
                Serving Homeowners Nationwide
              </div>
            </div>

          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">

            <a href="#how">How It Works</a>
            <a href="#why">Why Sell To Us</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>

            <a
              href="#contact"
              className="rounded-xl bg-emerald-700 px-5 py-2 text-white"
            >
              Get a Cash Offer
            </a>

          </nav>

        </div>

      </header>


      {/* HERO */}

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2">

        <div className="flex flex-col justify-center">

          <img
            src="/symbols-home-sale-banner.png"
            alt="Simple home selling process"
            className="mb-8 w-full max-w-3xl"
          />

          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-300 bg-white px-6 py-3 text-emerald-700 shadow-sm">

            <span className="text-xl">✔</span>

            <span className="font-medium">
              Sell Your House As-Is With Less Hassle
            </span>

          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Need To Sell A House
            <br/>
            Without The Usual Stress?
          </h1>

          <p className="mb-4 text-gray-600">
            Nijack Property Solutions helps homeowners explore a simple
            cash-sale option without repairs, commissions, or delays.
          </p>

          <p className="mb-6 text-gray-600">
            We work with a network of experienced real estate buyers and
            help homeowners explore simple selling options for their
            property.
          </p>

          <div className="text-emerald-700 font-semibold text-lg">
            Call Or Text For A Quick Property Review
            <br/>
            (Your Phone Number)
          </div>

        </div>


        {/* FORM */}

        <div
          id="contact"
          className="rounded-2xl border bg-white p-8 shadow-lg"
        >

          <h2 className="mb-2 text-3xl font-bold text-center">
            Get Started Today
          </h2>

          <p className="mb-6 text-gray-600 text-center">
            Tell Us About The Property And We'll Review It Right Away.
          </p>

          <form className="space-y-4">

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="Your name"
                className="rounded-xl border p-3"
              />

              <input
                placeholder="Phone number"
                className="rounded-xl border p-3"
              />

            </div>

            <input
              placeholder="Email address"
              className="w-full rounded-xl border p-3"
            />

            <input
              placeholder="Property address"
              className="w-full rounded-xl border p-3"
            />

            <div className="grid grid-cols-3 gap-4">

              <input
                placeholder="Sq ft"
                className="rounded-xl border p-3"
              />

              <input
                placeholder="Beds"
                className="rounded-xl border p-3"
              />

              <input
                placeholder="Baths"
                className="rounded-xl border p-3"
              />

            </div>

            <input
              placeholder="Ideal selling timeline"
              className="w-full rounded-xl border p-3"
            />

            <textarea
              placeholder="Share anything helpful about the home, repairs needed, inherited situation, tenants, or why you need to sell."
              className="h-28 w-full rounded-xl border p-3"
            />

            <button
              className="w-full rounded-xl bg-emerald-700 py-3 font-semibold text-white"
            >
              Request Your Offer
            </button>

            <p className="text-xs text-gray-500 text-center">
              No obligation. No pressure. Just information about your options.
            </p>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree we may contact you regarding your property.
            </p>

          </form>

        </div>

      </section>


      {/* WHY SELL */}

      <section id="why" className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-center text-3xl font-bold">
            Why Homeowners Work With Us
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item,i)=>(

              <div key={i} className="rounded-xl border p-6 shadow-sm">

                <h3 className="mb-3 font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SITUATIONS */}

      <section className="bg-emerald-50 py-16">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Situations We Often Help Homeowners With
          </h2>

          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Many homeowners reach out when they want to explore selling
            options without repairs, listings, or delays.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">

            {situations.map((s,i)=>(
              <div key={i} className="rounded-xl border bg-white p-4">
                {s}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section id="how" className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-center text-3xl font-bold">
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step,i)=>(

              <div key={i} className="rounded-xl border bg-white p-6 shadow-sm">

                <h3 className="mb-3 font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section id="faq" className="bg-white py-16">

        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Common Questions
          </h2>

          <div className="space-y-6">

            {faq.map((item,i)=>(

              <div key={i}>

                <h3 className="font-semibold mb-1">
                  {item.q}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t bg-white py-10 text-center text-sm text-gray-500">

        <p className="mb-2">
          Nijack Property Solutions
        </p>

        <p className="mb-2">
          Serving Homeowners Nationwide
        </p>

        <p className="mb-2">
          Call Or Text: (Your Phone Number)
        </p>

        <p className="mb-4">
          Email: info@nijackpropertysolutions.com
        </p>

        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Nijack Property Solutions works with a network of real estate buyers
          and investors. We help homeowners explore selling options and may
          refer properties to partner buyers.
        </p>

        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Nijack Property Solutions. All rights reserved.
        </p>

      </footer>

    </div>

  );
}
