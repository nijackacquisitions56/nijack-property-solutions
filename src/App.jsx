import React, { useState } from "react";

export default function NijackPropertySolutionsElite() {
  const [submitted, setSubmitted] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const [isShopping, setIsShopping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    // Screening Logic
    const situation = data.getAll("situation");
    if (situation.includes("Shopping Around")) {
      setIsShopping(true);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xaqpozbn", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto px-3 bg-[#003366] rounded-lg flex items-center justify-center border-b-2 border-r-2 border-[#D4AF37] shadow-md">
              <span className="text-white font-black text-lg tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left leading-tight">
              <div className="font-black text-lg text-[#003366] uppercase tracking-tight">NIJACK <span className="text-[#D4AF37]">PROPERTY</span></div>
              <div className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold">Solutions</div>
            </div>
          </div>
          <div className="text-right">
             <div className="text-[10px] font-black text-red-600 uppercase tracking-widest">Available 24/7</div>
             <a href="tel:3303319070" className="font-black text-[#003366] text-xl">330-331-9070</a>
          </div>
        </div>
      </header>

      {/* BIGGER DESKTOP HERO */}
      <section className="bg-[#003366] text-white pt-12 pb-32 border-b-4 border-[#D4AF37]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Sell Your House <br/>
            <span className="relative inline-block px-1">FAST
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/></svg>
            </span> {" "}For{" "}
            <span className="relative inline-block px-1 text-[#D4AF37]">CASH
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="6" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-bold uppercase tracking-[0.3em] opacity-95 italic mt-4">"Rooted in Care, Driven by Results."</p>
        </div>
      </section>

      {/* SMALLER VIDEO SPOTLIGHT */}
      <section className="mx-auto max-w-2xl px-6 -mt-16 mb-12">
        <div className="bg-[#001122] rounded-2xl shadow-2xl border-4 border-white overflow-hidden aspect-video relative group ring-4 ring-black/5">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-2 shadow-lg transition-transform group-hover:scale-110 cursor-pointer">
                <span className="text-white text-xl ml-1">▶</span>
              </div>
              <h3 className="text-white font-black text-lg uppercase tracking-tighter">Virtual Process Walkthrough</h3>
              <p className="text-[#D4AF37] font-bold uppercase text-[8px] tracking-widest italic">Ready Tomorrow</p>
           </div>
        </div>
      </section>

      {/* MAIN CAPTURE GRID */}
      <main className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-start">
          
          {/* SCREENING FORM */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100">
            {!submitted && !isShopping ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-black text-[#003366] uppercase text-center tracking-tighter">Start Your Review</h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase text-center -mt-4 tracking-widest">Required to speak with our strategy team</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="full_name" required placeholder="Full Name" className="rounded-xl border-2 border-gray-100 p-4 w-full text-base font-bold" />
                  <input name="phone" required placeholder="Phone Number" className="rounded-xl border-2 border-gray-100 p-4 w-full text-base font-bold" />
                </div>
                <input name="property_address" required placeholder="Property Address" className="rounded-xl border-2 border-gray-100 p-4 w-full text-base font-bold" />
                
                <div className="p-5 bg-[#003366]/5 rounded-2xl border border-[#003366]/10">
                  <p className="text-[11px] font-black text-[#003366] uppercase mb-4 text-center tracking-widest italic underline decoration-[#D4AF37]">Select Your Current Situation</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px]">
                    {["Probate", "Inherited", "Tired Landlord", "Needs Repairs", "Foreclosure", "Vacant", "Relocating", "Problem Tenant", "Shopping Around", "Other"].map((label) => (
                      <label key={label} className="flex gap-2 items-center cursor-pointer hover:text-[#D4AF37] transition-colors">
                        <input type="checkbox" name="situation" value={label} onChange={(e) => {
                           if(e.target.value === "Other") setShowOther(e.target.checked);
                        }} className="h-4 w-4 accent-[#003366]" /> 
                        <span className="font-bold uppercase tracking-tighter">{label}</span>
                      </label>
                    ))}
                  </div>
                  {showOther && <textarea name="other_explanation" placeholder="Details..." className="mt-4 w-full rounded-xl border-2 border-gray-100 p-3 text-[11px] font-bold uppercase h-20 outline-none focus:border-[#D4AF37]" />}
                </div>

                <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-2xl shadow-xl hover:bg-[#D4AF37] transition-all uppercase tracking-tighter">
                  GET MY CASH OFFER
                </button>
              </form>
            ) : isShopping ? (
              <div className="text-center py-16 px-4">
                <h2 className="text-2xl font-black text-[#003366] uppercase mb-4">Thank You for Inquiring</h2>
                <p className="text-sm font-bold text-gray-500 uppercase leading-relaxed">We focus on owners needing to sell within 60 days. Please download our "Agent vs. Cash" guide to the right to see if a cash offer fits your timeline.</p>
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-3xl font-black text-[#D4AF37] uppercase tracking-tighter">Review Initiated!</h2>
                <p className="font-bold text-[#003366] uppercase mt-2">A strategist will be in touch shortly.</p>
              </div>
            )}
          </div>

          {/* THE ADVANTAGE (BIGGER TEXT) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase border-b-4 border-[#D4AF37] pb-4 text-center tracking-tighter">The Advantage</h3>
              <div className="space-y-6">
                {[
                  { bad: "Agent: 6% Fee", good: "N.P.S: $0 Fees" },
                  { bad: "Must Do Repairs", good: "N.P.S: Buy AS-IS" },
                  { bad: "90+ Day Wait", good: "N.P.S: 14-30 Days" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center text-[13px] font-black uppercase tracking-tighter">
                    <span className="text-red-600 font-black w-[45%] text-left">{row.bad}</span>
                    <span className="text-[#D4AF37] text-2xl font-bold px-2 w-[10%] text-center">➔</span>
                    <span className="text-[#003366] w-[45%] text-left">{row.good}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#003366] rounded-2xl p-8 text-white text-center shadow-lg border-r-8 border-[#D4AF37]">
              <h4 className="text-lg font-black mb-4 uppercase tracking-tighter underline decoration-[#D4AF37]">Agent vs. Cash PDF</h4>
              <p className="text-[10px] font-bold uppercase opacity-80 mb-6">Compare timelines and net profits before you sell.</p>
              <a href="YOUR_PDF_URL_HERE" target="_blank" className="inline-block bg-[#D4AF37] text-white px-10 py-3 rounded-full font-black text-xs hover:scale-105 transition-transform uppercase tracking-widest">DOWNLOAD NOW</a>
            </div>
          </div>
        </div>
      </main>

      {/* NEUTRALIZED PROCESS SECTION */}
      <section id="how-it-works" className="py-12 bg-white border-y border-gray-100 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black text-[#003366] uppercase mb-12 tracking-tighter">How Our Process Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{t:"Talk",d:"Complete the form. A strategist analyzes your data immediately."}, {t:"Review",d:"Connect for a brief virtual tour or provide photos."}, {t:"Paid",d:"Sign digitally and get your cash on your timeline."}].map((s,i) => (
              <div key={i} className="space-y-3">
                <div className="text-3xl font-black text-[#D4AF37]">0{i+1}</div>
                <h4 className="font-black text-[#003366] uppercase text-sm tracking-widest">{s.t}</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tight leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 border-t-4 border-[#D4AF37] text-center px-6">
        <div className="mx-auto max-w-4xl">
          <div className="font-black text-2xl uppercase mb-2 tracking-tighter">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] mb-12 uppercase">Virtual Investment Solutions • Northeast Ohio</p>
          <div className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 mb-12 text-[10px] text-gray-400 leading-relaxed max-w-2xl mx-auto uppercase font-bold tracking-tighter opacity-70">
            <p>At <span className="text-white">Nijack Property Solutions</span>, we value your privacy. Your data will <span className="text-[#D4AF37] underline">NEVER</span> be sold. Serving Northeast Ohio. 14-30 day typical closing.</p>
          </div>
          <p className="text-[11px] opacity-70 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
