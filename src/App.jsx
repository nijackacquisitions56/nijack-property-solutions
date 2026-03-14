import React, { useState } from "react";

export default function NijackPropertySolutionsElite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xaqpozbn", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    } catch (err) { console.error("Submit Error:", err); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="h-12 w-12 bg-[#003366] rounded-full flex items-center justify-center border-2 border-[#D4AF37]">
              <span className="text-white font-black text-lg">NPS</span>
            </div>
            <div className="text-left">
              <div className="font-black text-xl text-[#003366] leading-none uppercase tracking-tighter">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold">Solutions</div>
            </div>
          </div>
          <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37]">📞 330-331-9070</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white pt-16 pb-32 border-b-8 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Sell Your House <span className="text-[#D4AF37]">Fast</span> For <span className="text-[#D4AF37]">Cash</span>
          </h1>
          <p className="text-lg md:text-xl font-bold uppercase opacity-90 tracking-widest">
            Serving Northeast Ohio • No Repairs • No Commissions
          </p>
        </div>
      </section>

      {/* THE VIDEO SPOTLIGHT (NEW CENTERPIECE) */}
      <section className="mx-auto max-w-5xl px-6 -mt-20">
        <div className="relative aspect-video bg-[#001122] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white overflow-hidden group">
          {/* PLACEHOLDER UNTIL TOMORROW */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#003366] to-[#001122]">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
               <span className="text-white text-3xl ml-1">▶</span>
            </div>
            <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-2">How It Works in Northeast Ohio</h3>
            <p className="text-[#D4AF37] font-bold uppercase text-xs tracking-[0.2em]">Watch our 60-second walkthrough</p>
          </div>
          {/* Once video is ready, replace div with: <video src="your-video.mp4" controls className="w-full h-full object-cover" /> */}
        </div>
      </section>

      {/* CONVERSION SECTION (FORM + TABLE) */}
      <main className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* FORM (LEFT - 7 COLUMNS) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-black text-[#003366] uppercase text-center">Start Your Cash Offer</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input name="full_name" required placeholder="Full Name" className="rounded-xl border-2 border-gray-100 p-4 w-full" />
                      <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-xl border-2 border-gray-100 p-4 w-full" />
                    </div>
                    <input name="property_address" required placeholder="Property Address" className="rounded-xl border-2 border-gray-100 p-4 w-full" />
                    
                    <button type="submit" className="w-full rounded-xl bg-[#003366] py-5 font-black text-white text-xl shadow-xl hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1">
                      GET MY CASH OFFER
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <h2 className="text-3xl font-black text-[#D4AF37] uppercase">Nicole is reviewing your property!</h2>
                  </div>
                )}
              </div>
            </div>

            {/* TABLE & LEAD MAGNET (RIGHT - 5 COLUMNS) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-[#003366] mb-6 uppercase border-b pb-4">Why Us?</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase"><span className="text-red-500">Agent: 6% Fee</span><span className="text-[#003366]">NPS: $0 Fee</span></div>
                  <div className="flex justify-between text-xs font-bold uppercase"><span className="text-red-500">Agent: Repairs</span><span className="text-[#003366]">NPS: As-Is</span></div>
                  <div className="flex justify-between text-xs font-bold uppercase"><span className="text-red-500">Agent: 90 Days</span><span className="text-[#003366]">NPS: 14 Days</span></div>
                </div>
              </div>

              {/* LEAD MAGNET */}
              <div className="bg-[#003366] rounded-3xl p-8 text-white shadow-xl text-center">
                <h3 className="font-black uppercase mb-2">Free Strategy Guide</h3>
                <p className="text-[10px] opacity-80 mb-4 font-bold uppercase">"Agent vs. Cash: Which path is right for you?"</p>
                <a href="YOUR_LINK" className="inline-block bg-[#D4AF37] text-white font-black py-2 px-6 rounded-full text-[10px]">DOWNLOAD PDF</a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#001122] text-white py-16 border-t-8 border-[#D4AF37] text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="font-black text-2xl uppercase mb-2 tracking-tighter">NIJACK PROPERTY SOLUTIONS</div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] mb-12 uppercase">Northeast Ohio Real Estate Investment Solutions</p>
          <p className="text-[12px] opacity-90 uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} NIJACK PROPERTY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
