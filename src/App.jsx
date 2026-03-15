import React from 'react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed">
      
      {/* 1. HEADER - BALANCED SCALE */}
      <nav className="bg-white py-2 md:py-3 border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#003366] text-white font-black px-2 py-1 rounded text-base md:text-lg shadow-md">N.P.S.</div>
            <div className="flex flex-col">
              <span className="text-[#003366] font-black text-xs md:text-lg tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
              <span className="text-[#D4AF37] font-bold text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase leading-none mt-1">S O L U T I O N S</span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex gap-6 font-black text-[#003366] text-[9px] uppercase tracking-widest italic">
              <a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors">How It Works</a>
              <a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a>
            </div>
            <a href="tel:3303319070" className="bg-[#003366] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-black text-[10px] md:text-xs hover:bg-[#D4AF37] transition-all shadow-lg border-2 border-[#D4AF37]/20">
              330-331-9070
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION - CLEANER PROPORTIONS */}
      <section className="bg-[#003366] text-white pt-8 pb-14 md:pt-10 md:pb-20 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[7px] md:text-[9px] mb-3 italic">
            Northeast Ohio & Nationwide Investment Solutions
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-4 uppercase tracking-tighter leading-[1.1] md:leading-[1]">
            Sell Your House <br/>
            <span className="relative inline-block px-1">
              FAST
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/></svg>
            </span> For <br className="md:hidden"/>
            <span className="relative inline-block text-[#D4AF37] px-1">
              CASH
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="6" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl font-bold italic opacity-90 uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6">
            "Rooted in Care, Driven by Results."
          </p>
          <div className="inline-flex items-center bg-white/10 border border-white/20 px-5 py-2 rounded-full">
            <p className="text-[9px] md:text-sm font-black uppercase tracking-[0.1em]">Successful Closings: 14 - 30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-4 md:px-6 -mt-8 mb-10 md:mb-14">
        <div className="bg-black rounded-[1.5rem] md:rounded-[2rem] aspect-video shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center relative group cursor-pointer">
          <div className="text-center p-4 group-hover:scale-105 transition-transform">
            <div className="text-[#D4AF37] text-4xl md:text-6xl mb-2 md:mb-3">▶</div>
            <p className="text-white font-black uppercase tracking-widest text-[9px] md:text-xs italic leading-tight">Strategy Session: The Nijack Advantage</p>
          </div>
        </div>
      </section>

      {/* 4. MAIN FORM - TIGHTENED & READABLE */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <form className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-3 md:py-4 text-center px-4">
              <h2 className="text-[#003366] font-black uppercase text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em]">Start Your Successful Closing Today</h2>
            </div>
            
            <div className="p-5 md:p-10 space-y-6 md:space-y-8">
              {/* STEP 1 */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-[#003366] font-black uppercase tracking-widest text-xs md:text-base italic underline decoration-[#D4AF3
