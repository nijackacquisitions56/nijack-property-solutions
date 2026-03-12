import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqpozbn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        window.scrollTo({ top: 300, behavior: "smooth" });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="h-11 w-11 bg-[#003366] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl">N</span>
            </div>
            <div>
              <div className="font-black text-xl text-[#003366] leading-tight uppercase">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-[0.3em] font-bold">
                Solutions
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <a href="tel:3303319070" className="text-[#003366]">
              📞 330-331-9070
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#003366] text-white py-16 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Sell Your House <span className="text-[#D4AF37]">FAST</span> For{" "}
            <span className="text-[#D4AF37]">CASH</span>
          </h1>
          <p className="text-lg opacity-90 font-medium italic">
            "Rooted in Care, Driven by Results."
          </p>
        </div>
      </section>

      {/* FORM */}
      <section id="contact" className="mx-auto max-w-3xl px-6 -mt-10 pb-8">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100">

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">

              <input type="hidden" name="_subject" value="New Seller Lead - Nijack Property Solutions" />
              <input type="text" name="_gotcha" style={{display:"none"}} />

              <h2 className="text-2xl font-bold text-center text-[#003366]">
                Get Your Offer
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="Full Name"
                  required
                  placeholder="Full Name"
                  className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
                />

                <input
                  name="Phone"
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
                />
              </div>

              <input
                name="Property Address"
                required
                placeholder="Property Address"
                className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />

              <input
                name="Asking Price"
                placeholder="What price are you hoping to get for the property?"
                className="rounded-xl border border-gray-200 p-4 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />

              <div className="relative">
                <select
                  name="Timeline"
                  required
                  className="rounded-xl border-2 border-gray-100 p-4 pr-12 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none bg-white font-bold text-[#003366]"
                >
                  <option value="">📅 SELL TIMELINE? (Click Here)</option>
                  <option value="ASAP">ASAP (Within 30 Days)</option>
                  <option value="30-60 Days">30-60 Days</option>
                  <option value="60-90 Days">60-90 Days</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Exploring">Just Exploring Options</option>
                </select>
              </div>

              <textarea
                name="Extra Details"
                placeholder="Tell us more about the property's situation..."
                className="rounded-xl border border-gray-200 p-4 w-full h-24 focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />

              {error && (
                <p className="text-red-500 text-sm font-bold text-center">
                  Something went wrong. Please check your connection or call us
                  directly.
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-lg hover:bg-[#002244] transition-all"
              >
                Get My Cash Offer
              </button>

              <p className="text-center text-xs text-gray-500">
                No obligation. No pressure. Your information stays private.
              </p>
            </form>

          ) : (

            <div className="text-center py-12">
              <div className="text-7xl mb-6 text-[#D4AF37]">🤝</div>

              <h2 className="text-3xl font-black mb-4 text-[#003366]">
                Thank You—We’re On It!
              </h2>

              <p className="text-gray-600 font-bold mb-6 max-w-md mx-auto">
                Nicole will personally review your property details today.
                Expect a friendly call or text shortly to discuss your options.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="text-[#D4AF37] font-bold underline"
              >
                Submit another property
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37]">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <div className="font-black text-2xl uppercase mb-2">
            NIJACK PROPERTY SOLUTIONS
          </div>

          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] mb-8">
            Real Estate Investment Solutions
          </p>

          <div className="flex justify-center gap-8 mb-10 text-sm font-bold">
            <a href="tel:3303319070" className="hover:text-[#D4AF37] transition underline">
              330-331-9070
            </a>

            <a href="mailto:info@nijackpropertysolutions.com" className="hover:text-[#D4AF37] transition underline">
              Email Us
            </a>
          </div>

          <hr className="border-white/10 mb-10" />

          <p className="text-xs opacity-70 max-w-xl mx-auto leading-relaxed">
            Nijack Property Solutions is a real estate investment company.
            We may purchase properties directly or assign contracts to
            investment partners. We are not licensed real estate agents and
            do not charge commissions.
          </p>

          <p className="mt-12 text-[10px] opacity-30 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Nijack Property Solutions
          </p>

        </div>
      </footer>
    </div>
  );
}
