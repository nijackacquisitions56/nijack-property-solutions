import React, { useState } from "react";

export default function NijackPropertySolutionsMaster() {
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
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto px-4 bg-[#003366] rounded-xl flex items-center justify-center shadow-lg border-b-4 border-r-4 border-[#D4AF37]">
              <span className="text-white font-black text-xl tracking-tighter uppercase">N.P.S.</span>
            </div>
            <div className="text-left">
              <div className="font-black text-xl text-[#003366] leading-tight uppercase tracking-tight">
                NIJACK <span className="text-[#D4AF37]">PROPERTY</span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Solutions</div>
            </div>
          </div>
          <a href="tel:3303319070" className="font-bold text-[#003366] text-lg underline decoration-[#D4AF37] decoration-2">📞 330-331-9070</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white py-16 pb-24 border-b-8 border-[#D4AF37]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
            Sell Your House <br/>
            <span className="relative inline-block px-2">FAST
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#D4AF37]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="5" fill="transparent"/></svg>
            </span> {" "}For{" "}
            <span className="relative inline-block px-2 text-[#D4AF37]">CASH
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span>
          </h1>
          <p className="mt-8 text-lg font-bold uppercase tracking-widest opacity-90 italic">"Rooted in Care, Driven by Results."</p>
        </div>
      </section>

      {/* VIDEO PREVIEW SECTION (NEW) */}
      <section className="mx-auto max-w-4xl px-6 -mt-16 mb-16">
        <div className="bg-[#001122] rounded-3xl shadow-2xl border-4 border-white overflow-hidden aspect-video relative group">
           {/* Replace this div with your actual video tag once you download from Canva */}
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#003366] to-[#001122]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <span className="
