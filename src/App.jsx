import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    { title: "Fair Cash Offer", text: "We provide straightforward offers based on market data without hidden fees." },
    { title: "Sell As-Is", text: "No repairs, cleaning, or inspections required before selling." },
    { title: "Flexible Closing", text: "Close quickly or choose a timeline that works best for you." },
    { title: "Professional Network", text: "If we don't purchase directly, we work with trusted investment partners nationwide." }
  ];

  const steps = [
    { title: "Share The Details", text: "Tell us about the property and your situation." },
    { title: "Property Review", text: "We review market data and evaluate if the property fits our buying criteria." },
    { title: "Receive Your Offer", text: "If it fits our buying criteria we present a clear, no-obligation cash offer." },
    { title: "Choose Your Closing", text: "Close through a local title company on a date that works for you." }
  ];

  const faq = [
    { q: "Do I need to make repairs before selling?", a: "No. We buy houses in as-is condition. You do not need to repair or clean anything." },
    { q: "How fast can closing happen?", a: "Many closings happen within 14-21 days depending on the property and title work." },
    { q: "What areas do you buy in?", a: "We actively help homeowners in Ohio and work with investment partners nationwide." },
    { q: "Are there commissions or fees?", a: "No agent commissions. If we purchase the property there are no traditional listing fees." }
  ];

  const situations = [
    "Inherited Property",
    "Vacant Houses",
    "Major Repairs Needed",
    "Behind On Taxes",
    "Problem Tenants",
    "Divorce / Life Changes",
    "Foreclosure Situations",
    "Out-of-State Owners",
    "Relocation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800 font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-xl">
              🏠
            </div>

            <div>
              <div className="font-bold text-lg text-emerald-900">
                Nijack Property Solutions
              </div>

              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                Real Estate Investment Solutions
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-emerald-900">
            <a href="#how" className="hover:text-emerald-700">Process</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
            <a href="#contact" className="rounded-full bg-emerald-700 px-6 py-2 text-white hover:bg-emerald-800">
              Get Offer
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-emerald-700 text-sm font-bold border border-emerald-200">
          Serving Homeowners in Ohio & Nationwide
        </div>

        <h1 className="mb-6 text-4xl font-black md:text-6xl text-gray-900">
          Sell Your House Fast For Cash
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          No Repairs. No Commissions. No Listing Hassle.
        </p>

        <p className="text-emerald-800 font-bold mb-10">
          Even if your property needs repairs or has difficult circumstances.
        </p>

        <div className="mb-10 rounded-3xl bg-white p-8 border shadow-xl w-full max-w-md mx-auto">

          <p className="text-emerald-900 font-bold text-sm uppercase tracking-widest">
            Speak With Our Acquisition Team
          </p>

          <a href="tel:3303319070" className="text-4xl font-black text-emerald-700 block">
            330-331-9070
          </a>

          <p className="text-xs text-gray-400 mt-2 italic">
            Local Ohio Real Estate Investment Company
          </p>

        </div>

      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="mx-auto max-w-3xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl border">

          {!submitted ? (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                  Request Your Cash Offer
                </h2>
                <p className="text-gray-500 mt-2">
                  No obligations
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    required
                    placeholder="Full Name"
                    className="rounded-xl border p-4"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border p-4"
                  />

                </div>

                <input
                  required
                  placeholder="Property Address"
                  className="rounded-xl border p-4 w-full"
                />

                <textarea
                  placeholder="Tell us about the property (repairs needed, tenants, timeline)"
                  className="rounded-xl border p-4 w-full"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-700 py-5 font-bold text-white text-lg hover:bg-emerald-800"
                >
                  Get My Offer
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting you consent to be contacted by Nijack Property Solutions regarding your property.
                </p>

              </form>
            </>
          ) : (
            <div className="text-center py-12">

              <div className="text-6xl mb-4 text-emerald-600">
                ✅
              </div>

              <h2 className="text-3xl font-bold mb-2">
                Property Details Received
              </h2>

              <p className="text-gray-600">
                Our team will review your property and contact you shortly.
              </p>

            </div>
          )}

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl font-black mb-16">
            Our Simple Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {steps.map((step, i) => (
              <div key={i}>
                <div className="text-emerald-700 font-black text-xl mb-2">
                  {i + 1}
                </div>

                <h3 className="font-bold mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="bg-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl font-black mb-16">
            Why Sellers Work With Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {benefits.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">

                <h3 className="font-bold text-emerald-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SITUATIONS */}
      <section className="bg-emerald-800 py-24 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-black mb-12">
            Common Situations We Help With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {situations.map((s, i) => (
              <div key={i} className="border border-white/20 p-4 rounded-lg text-sm">
                {s}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-black mb-8">
            About Nijack Property Solutions
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nijack Property Solutions is a real estate investment company based in Northeast Ohio. 
            We purchase properties directly and also work with a nationwide network of real estate investors 
            to provide solutions for homeowners in markets across the country.
          </p>

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="bg-emerald-50 py-24">

        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-4xl font-black text-center mb-16">
            Frequently Asked Questions
          </h2>

          {faq.map((item, i) => (
            <div key={i} className="mb-6 bg-white p-6 rounded-xl shadow">

              <h3 className="font-bold text-emerald-900 mb-2">
                {item.q}
              </h3>

              <p className="text-gray-600">
                {item.a}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* PRIVACY POLICY */}
      <section id="privacy" className="bg-stone-50 py-16 border-t">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">
            Privacy Policy
          </h2>

          <div className="space-y-4 text-sm text-gray-600 max-w-2xl mx-auto">

            <p>
              Nijack Property Solutions respects your privacy. Information submitted through this website 
              is used only to evaluate the property and respond to your inquiry.
            </p>

            <p>
              Property information may be reviewed internally or shared with trusted real estate investment 
              partners for evaluation purposes. We do not sell your personal contact information.
            </p>

            <p>
              By submitting your information you consent to be contacted regarding your property inquiry.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t text-center">

        <div className="font-bold text-emerald-900 text-xl mb-2">
          Nijack Property Solutions
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Serving Homeowners in Ohio & Nationwide
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold text-emerald-800 mb-8">

          <a href="tel:3303319070">
            📞 330-331-9070
          </a>

          <span className="hidden md:block text-gray-300">|</span>

          <a href="mailto:info@nijackpropertysolutions.com" className="italic lowercase">
            info@nijackpropertysolutions.com
          </a>

        </div>

        <div className="flex justify-center gap-6 text-sm mb-6">
          <a href="#how">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Nijack Property Solutions is a real estate investment company. We may purchase properties directly or assign contracts to investment partners.
        </p>

        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Nijack Property Solutions
        </p>

      </footer>

    </div>
  );
}
