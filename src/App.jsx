import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* HEADER */}
      <nav className="bg-white py-2 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#003366] text-white font-black px-2 py-1 rounded text-lg shadow-md">N.P.S.</div>
            <div className="flex flex-col">
              <span className="text-[#003366] font-black text-xl tracking-tighter uppercase">NIJACK PROPERTY</span>
              <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase mt-1">SOLUTIONS</span>
            </div>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-6 py-2 rounded-full font-black text-sm hover:bg-[#D4AF37] transition-all shadow-lg">
            330-331-9070
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#003366] text-white pt-10 pb-16 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs mb-4 italic">
            NE Ohio & Nationwide Investment Solutions
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Sell Your House <br />
            <span className="text-[#D4AF37]">FAST</span> For <span className="text-[#D4AF37]">CASH</span>
          </h1>

          <p className="text-lg font-bold italic opacity-90 uppercase tracking-[0.2em] mb-6">
            Rooted in Care, Driven by Results
          </p>

          <div className="inline-flex items-center bg-white/10 border border-white/20 px-6 py-2 rounded-full">
            <p className="text-sm font-black uppercase tracking-[0.1em]">
              Typical Closing Timeline: 14 - 30 Days
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-3xl mx-auto px-6 -mt-10 mb-16">
        <div className="bg-black rounded-2xl aspect-video shadow-2xl flex items-center justify-center">
          <p className="text-white font-black uppercase">Video Placeholder</p>
        </div>
      </section>

      {/* REALTOR VS CASH */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-[#003366] text-3xl font-black uppercase mb-12">
          Selling With A Realtor vs A Cash Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 p-8 rounded-2xl border">
            <h3 className="font-black text-xl mb-6 text-[#003366]">
              Listing With A Realtor
            </h3>

            <ul className="space-y-3 text-sm font-bold">
              <li>Home showings and open houses</li>
              <li>Repairs often required</li>
              <li>Buyer financing approval</li>
              <li>30–120 day selling timeline</li>
              <li>5–6% agent commissions</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border">
            <h3 className="font-black text-xl mb-6 text-[#003366]">
              Selling To A Cash Buyer
            </h3>

            <ul className="space-y-3 text-sm font-bold">
              <li>Sell the property as-is</li>
              <li>No repairs required</li>
              <li>No commissions or listing fees</li>
              <li>Flexible closing timeline</li>
              <li>Close in as little as 14–30 days</li>
            </ul>
          </div>

        </div>
      </section>

      {/* HOW OFFERS WORK */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#003366] font-black text-3xl uppercase mb-6">
            How Cash Offers Are Determined
          </h2>

          <p className="font-bold text-sm leading-relaxed">
            Cash offers are based on several factors including property condition,
            repair costs, local market conditions, and investor holding costs.
            Because investors purchase homes as-is and handle the repairs,
            the offer is typically below retail market value but provides
            homeowners with a faster and more convenient selling option.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <form className="bg-white rounded-3xl shadow-2xl border border-gray-100">

            <div className="bg-[#D4AF37] py-6 text-center">
              <h2 className="text-[#003366] font-black uppercase tracking-widest">
                Request Your Cash Offer
              </h2>
            </div>

            <div className="p-12 space-y-8">

              <input
                type="text"
                placeholder="FULL NAME"
                className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase"
                required
              />

              <input
                type="tel"
                placeholder="PHONE NUMBER"
                className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase"
                required
              />

              <input
                type="text"
                placeholder="PROPERTY ADDRESS"
                className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase"
                required
              />

              <input
                type="text"
                placeholder="WHAT PRICE ARE YOU HOPING TO GET?"
                className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase"
              />

              <textarea
                placeholder="ANY OTHER DETAILS ABOUT THE PROPERTY?"
                className="w-full bg-gray-50 border rounded-xl p-4 font-black uppercase"
              />

              <button
                type="submit"
                className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-6 rounded-2xl uppercase tracking-widest text-lg"
              >
                Get My Cash Offer
              </button>

              <p className="text-center text-sm font-bold text-[#003366]">
                ✓ No obligation &nbsp;&nbsp; ✓ No repairs required &nbsp;&nbsp; ✓ No commissions
              </p>

              <p className="text-center text-xs font-bold text-[#003366] uppercase tracking-widest italic">
                Your information is confidential and only used to evaluate your property.
              </p>

            </div>

          </form>

        </div>
      </section>

      {/* BUYER NETWORK */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#003366] font-black text-3xl uppercase mb-6">
            Our Nationwide Buyer Network
          </h2>

          <p className="font-bold text-sm leading-relaxed">
            Nijack Property Solutions works with a network of professional real estate
            investors and investment partners across the United States.
            Depending on the property and location, we may purchase the property
            directly or connect it with one of our trusted investment partners
            to help facilitate a successful closing.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#003366] py-16 text-white border-t-8 border-[#D4AF37] text-center">

        <div className="flex flex-col mb-10 items-center">
          <div className="bg-white text-[#003366] font-black px-4 py-2 rounded mb-4 text-2xl shadow-xl">
            N.P.S.
          </div>

          <span className="font-black text-3xl uppercase">
            NIJACK PROPERTY SOLUTIONS
          </span>

          <span className="text-[#D4AF37] font-bold text-sm tracking-[0.5em] uppercase mt-2">
            NE Ohio & Nationwide
          </span>
        </div>

        <div className="flex flex-col gap-4 font-black uppercase tracking-widest px-6">
          <span className="text-[#D4AF37]">330-331-9070</span>
          <span className="text-[#D4AF37] break-all">
            nicole@nijackpropertysolutions.com
          </span>

          <p className="text-sm opacity-40 mt-10 italic">
            © 2026 NIJACK PROPERTY SOLUTIONS | ALL RIGHTS RESERVED
          </p>
        </div>

      </footer>
    </div>
  );
};

export default NijackSite;
