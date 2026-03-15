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
            Sell Your House <br/>
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

      {/* 4 STEP PROCESS */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-[#003366] font-black text-3xl uppercase mb-12">
            Our Simple 4 Step Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 font-bold text-sm">

            <div>
              <div className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-3">1</div>
              Submit your property information
            </div>

            <div>
              <div className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-3">2</div>
              We review the property
            </div>

            <div>
              <div className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-3">3</div>
              Receive a clear cash offer
            </div>

            <div>
              <div className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-3">4</div>
              Close with a local title company
            </div>

          </div>

        </div>
      </section>

      {/* SITUATIONS */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-[#003366] font-black text-3xl uppercase mb-12">
            Situations We Help Homeowners With
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm font-bold">

            <div className="bg-gray-50 p-6 rounded-xl border">Probate / Inherited Property</div>
            <div className="bg-gray-50 p-6 rounded-xl border">Vacant or Abandoned Homes</div>
            <div className="bg-gray-50 p-6 rounded-xl border">Costly Repairs Needed</div>
            <div className="bg-gray-50 p-6 rounded-xl border">Problem Tenants</div>
            <div className="bg-gray-50 p-6 rounded-xl border">Behind on Property Taxes</div>
            <div className="bg-gray-50 p-6 rounded-xl border">Relocating or Downsizing</div>

          </div>

        </div>
      </section>

      {/* REALTOR VS CASH */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-[#003366] text-3xl font-black uppercase mb-12">
          Selling With A Realtor vs A Cash Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 p-8 rounded-2xl border">
            <h3 className="font-black text-xl mb-6 text-[#003366]">Listing With A Realtor</h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>Showings & open houses</li>
              <li>Repairs often required</li>
              <li>Buyer financing approval</li>
              <li>30–120 day timeline</li>
              <li>5–6% commission fees</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border">
            <h3 className="font-black text-xl mb-6 text-[#003366]">Selling For Cash</h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>Sell as-is</li>
              <li>No repairs required</li>
              <li>No commissions</li>
              <li>Flexible closing</li>
              <li>14–30 day closings</li>
            </ul>
          </div>

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

            <div className="p-10 space-y-8">

              <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase" required/>

              <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase" required/>

              <input type="text" placeholder="PROPERTY ADDRESS" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase" required/>

              <input type="text" placeholder="WHAT PRICE ARE YOU HOPING TO GET?" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase"/>

              {/* SELL TIMELINE */}
              <div>
                <label className="font-black text-sm text-[#003366] uppercase mb-2 block">
                  SELL TIMELINE
                </label>

                <select className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 font-black uppercase text-[#003366]">

                  <option value="">Select Timeline</option>
                  <option>ASAP</option>
                  <option>30 Days</option>
                  <option>60 Days</option>
                  <option>90 Days</option>
                  <option>3-6 Months</option>
                  <option>Just Exploring</option>

                </select>
              </div>

              {/* MOTIVATION */}
              <div className="grid grid-cols-2 gap-4">

                {[
                "Probate",
                "Inherited",
                "Tired Landlord",
                "Needs Repairs",
                "Foreclosure",
                "Vacant",
                "Relocating",
                "Problem Tenant",
                "Behind on Taxes",
                "Shopping Around"
                ].map((label) => (

                  <label key={label} className="flex items-center gap-2 font-bold text-sm">

                    <input type="checkbox"/>

                    {label}

                  </label>

                ))}

              </div>

              <textarea placeholder="ANY OTHER DETAILS ABOUT THE PROPERTY?" className="w-full bg-gray-50 border rounded-xl p-4 font-black uppercase"/>

              <button type="submit" className="w-full bg-[#003366] hover:bg-[#D4AF37] text-white font-black py-6 rounded-2xl uppercase tracking-widest text-lg">
                Get My Cash Offer
              </button>

              <p className="text-center text-sm font-bold text-[#003366]">
                ✓ No obligation ✓ No repairs ✓ No commissions
              </p>

            </div>

          </form>

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
            © 2026 NIJACK PROPERTY SOLUTIONS
          </p>
        </div>

      </footer>

    </div>
  );
};

export default NijackSite;
