import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-2 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-2 py-1 rounded text-lg shadow-md">N.P.S.</div>
            <div className="flex flex-col text-left">
              <span className="text-[#003366] font-black text-sm md:text-xl tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
              <span className="text-[#D4AF37] font-bold text-[8px] md:text-[10px] tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
            </div>
          </div>
          <a
            href="tel:3303319070"
            className="bg-[#003366] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-black text-xs md:text-sm hover:bg-[#D4AF37] transition-all shadow-lg border-2 border-[#D4AF37]/20"
          >
            330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#003366] text-white pt-10 pb-16 md:pt-14 md:pb-24 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-4 italic">
            NE Ohio & Nationwide Investment Solutions
          </p>

          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            Sell Your House <br className="md:hidden" />
            <span className="relative inline-block px-1">
              FAST
              <svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-[#D4AF37]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>{' '}
            For <br className="md:hidden" />
            <span className="relative inline-block text-[#D4AF37] px-1">
              CASH
              <svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-white opacity-40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="6" fill="transparent" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-bold italic opacity-90 uppercase tracking-[0.2em] mb-8">
            "Rooted in Care, Driven by Results."
          </p>

          <div className="inline-flex items-center bg-white/10 border border-white/20 px-8 py-3 rounded-full">
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em]">
              Successful Closings: 14 - 30 Days
            </p>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM */}
      <section className="relative -mt-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <form className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-4 md:py-6 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-xs md:text-lg tracking-[0.2em]">
                Start Your Successful Closing Today
              </h2>
            </div>

            <div className="p-6 md:p-14 space-y-8 md:space-y-12">
              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-base md:text-2xl italic underline decoration-[#D4AF37]">
                  Step 1: Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="PROPERTY ADDRESS"
                  className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  required
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-base md:text-2xl italic underline decoration-[#D4AF37]">
                  Step 2: Property Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="PROPERTY TYPE"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ESTIMATED CONDITION"
                    className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none"
                  />
                </div>

                <textarea
                  placeholder="TELL US ABOUT THE PROPERTY OR YOUR SITUATION"
                  rows="5"
                  className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-xs md:text-lg focus:border-[#003366] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm md:text-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-all shadow-xl"
              >
                Submit Property
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NijackSite;
