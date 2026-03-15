import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Star } from 'lucide-react';

const NijackSite = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HEADER */}
      <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#003366] font-black text-2xl tracking-tighter leading-none uppercase">NIJACK PROPERTY</span>
            <span className="text-[#D4AF37] font-bold text-[11px] tracking-[0.3em] uppercase leading-none mt-1 text-right">S O L U T I O N S</span>
          </div>
          <a href="tel:3303319070" className="bg-[#003366] text-white px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 hover:bg-[#D4AF37] transition-all shadow-lg">
            <Phone size={18} /> 330-331-9070
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#003366] text-white pt-12 pb-24 border-b-8 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Sell Your House <span className="text-[#D4AF37]">FAST</span> <br/>
            For <span className="underline decoration-[#D4AF37]/40">CASH</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold italic opacity-90 uppercase tracking-[0.2em] mb-8">
            "Rooted in Care, Driven by Results."
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full">
            <div className="flex text-[#D4AF37]"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            <p className="text-sm md:text-lg font-black uppercase tracking-[0.1em]">Successful Closings: 14 - 30 Days</p>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM - THE "10/10" STRUCTURE */}
      <section className="relative -mt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-white rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden">
            <div className="bg-[#D4AF37] py-5 text-center">
              <h2 className="text-[#003366] font-black uppercase text-sm md:text-lg tracking-[0.2em]">Start Your Successful Closing Today</h2>
            </div>
            
            <div className="p-8 md:p-12 space-y-10">
              
              {/* STEP 1: CONTACT INFO */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">1</span>
                  <h3 className="text-[#003366] font-black uppercase tracking-widest text-lg italic">Contact Information</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="FULL NAME" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none transition-all" required />
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none transition-all" required />
                </div>
                <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, ZIP)" className="w-full bg-gray-50 border-b-4 border-gray-200 p-4 font-black uppercase text-sm focus:border-[#003366] outline-none transition-all" required />
              </div>

              {/* STEP 2: SELL TIME & SITUATION */}
              <div className="space-y-6 p-8 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200 shadow-inner">
                <div className="flex items-center gap-4">
                  <span className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">2</span>
                  <h3 className="text-[#003366] font-black uppercase tracking-widest text-lg italic underline decoration-[#D4AF37]">The Situation</h3>
                </div>

                {/* THE SELL TIME DROPDOWN */}
                <div className="space-y-3">
                  <label className="block text-[12px] font-black text-[#003366] uppercase tracking-[0.2em] italic ml-1">
                    SELL TIME: (REQUIRED)
                  </label>
                  <select name="selling_timeline" required className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 font-black uppercase text-sm text-[#003366] shadow-md focus:ring-4 focus:ring-[#D4AF37]/20 outline-none cursor-pointer">
                    <option value="" disabled selected>Select Your Timeline</option>
                    <option value="ASAP">ASAP (RIGHT AWAY)</option>
                    <option value="< 30 Days">&lt; 30 DAYS</option>
                    <option value="< 90 Days">&lt; 90 DAYS</option>
                    <option value="< 180
