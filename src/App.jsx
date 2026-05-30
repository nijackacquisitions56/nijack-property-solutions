import React, { useState } from 'react';

const LOGO_URL = "/tekton-logo.png"; 

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', propertyAddress: '',
    situation: [], additionalNotes: '', timeline: '', priceExpectation: ''
  });

  const faqs = [
    { q: 'DO I NEED TO MAKE REPAIRS?', a: 'No. We review houses in as-is condition, so there is no need to clean, fix, or update the property before reaching out.' },
    { q: 'HOW IS MY CASH OFFER DETERMINED?', a: 'Our review is based on the property condition, location, timeline, market activity, and the overall situation. Every property is different.' },
    { q: 'DO I NEED TO CLEAN OUT THE PROPERTY?', a: 'In many situations, no. We understand some properties are overwhelming, and we work to keep the process as simple as possible.' },
    { q: 'WHAT IF I STILL OWE MONEY ON THE PROPERTY?', a: 'That does not automatically stop the process. We can review the situation and discuss possible next steps based on the property and payoff amount.' },
    { q: 'HOW FAST CAN THE PROCESS MOVE?', a: 'Some situations can move quickly depending on title, property details, and seller timeline. The sooner we receive your information, the sooner we can review it.' },
    { q: 'ARE THERE COMMISSIONS?', a: 'No. We are direct buyers, not agents. You pay zero agent fees or commissions.' },
    { q: 'IS THIS A LEGITIMATE PROCESS?', a: 'Yes. Transactions are handled through a licensed title company, which helps ensure paperwork, ownership verification, and closing funds are processed securely. You do not pay anything upfront.' },
  ];

  const situations = ['Probate','Inherited','Tired Landlord','Needs Repairs','Foreclosure','Vacant','Relocating','Problem Tenant','Shopping Around','Other'];

  const handleCheck = (val) => {
    setFormData(f => ({
      ...f,
      situation: f.situation.includes(val) ? f.situation.filter(s => s !== val) : [...f.situation, val]
    }));
  };

  const inputStyle = {
    background: '#f8f6f2', border: 'none', borderBottom: '3px solid #ccc',
    padding: '16px 12px', fontSize: 16, fontWeight: 700, outline: 'none',
    fontFamily: "'Georgia', serif", width: '100%', boxSizing: 'border-box', display: 'block'
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#f9f7f4', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: '#0d0d0d', borderBottom: '4px solid #C9A84C', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src={LOGO_URL}
            alt="Tekton Property Solutions LLC"
            style={{ height: 80, width: 'auto', objectFit: 'contain' }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', alignItems: 'center', gap: 12 }}>
            <div style={{ background: '#8B0000', border: '2px solid #C9A84C', borderRadius: 8, padding: '6px 12px' }}>
              <span style={{ color: '#C9A84C', fontWeight: 900, fontSize: 16, letterSpacing: 2 }}>PTS</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 900, fontSize: 16, letterSpacing: 1, textTransform: 'uppercase', lineHeight: 1.1 }}>TEKTON PROPERTY</div>
              <div style={{ color: '#C9A84C', fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700 }}>SOLUTIONS LLC</div>
            </div>
          </div>
          <a href="#property-form" style={{ background: '#8B0000', color: '#fff', padding: '12px 24px', borderRadius: 999, fontWeight: 900, fontSize: 14, textDecoration: 'none', border: '2px solid #C9A84C', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Get Your Offer
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative', color: '#fff', padding: '100px 20px 110px',
        borderBottom: '8px solid #C9A84C', textAlign: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(80,10,10,0.75) 100%)' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.6 }} />
            <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', margin: 0, fontStyle: 'italic' }}>Ohio &amp; Nationwide Investment Solutions</p>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.6 }} />
          </div>
          <h1 style={{ fontSize: 'clamp(42px, 8vw, 90px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 20, letterSpacing: -1 }}>
            Sell Your House <span style={{ color: '#C9A84C' }}>FAST</span><br />For <span style={{ color: '#C9A84C' }}>CASH</span>
          </h1>
          <p style={{ fontSize: 22, fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: 3, color: '#C9A84C', marginBottom: 20 }}>
            "Relief That Delivers."
          </p>
          <p style={{ fontSize: 17, fontWeight: 600, maxWidth: 680, margin: '0 auto 12px', lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: 1 }}>
            Sell Your House As-Is — No Repairs, No Commissions, Close On Your Timeline.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Helping Ohio homeowners find solutions for difficult property situations with a simple, straightforward process.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 36 }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(201,168,76,0.4)', padding: '14px 28px', borderRadius: 999 }}>
              <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>Closing Timeline: 14–30 Days</span>
            </div>
            <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '14px 32px', borderRadius: 999, fontWeight: 900, fontSize: 15, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 2 }}>
              Get My Property Reviewed
            </a>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 16, padding: '14px 24px', maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>All transactions are handled through a licensed title company to help ensure a safe and secure closing process.</p>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section style={{ background: '#8B0000', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
          {[
            { icon: '🏛', label: 'Licensed Title Company' },
            { icon: '✦', label: '$0 Fees or Commissions' },
            { icon: '📅', label: '14–30 Day Closing' },
            { icon: '🏠', label: 'As-Is — No Repairs' },
          ].map((t, i) => (
            <div key={i} style={{ padding: '20px 36px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
              <div style={{ color: '#C9A84C', fontWeight: 900, fontSize: 24, lineHeight: 1, marginBottom: 6 }}>{t.icon}</div>
              <div style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ maxWidth: 1000, margin: '-36px auto 0', padding: '0 20px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {[
            { title: 'No Repairs Needed', desc: 'Sell your property as-is without cleaning, fixing, or updating it first.' },
            { title: 'No Commissions', desc: 'No agent fees or commissions. Just a direct review of your property.' },
            { title: 'Flexible Closing', desc: 'We work with different timelines and aim to find a solution that fits your situation.' },
          ].map((b) => (
            <div key={b.title} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(10,22,40,0.12)', padding: '24px 20px', borderTop: '4px solid #8B0000' }}>
              <p style={{ color: '#0d0d0d', fontWeight: 900, fontSize: 15, textTransform: 'uppercase', marginBottom: 8, letterSpacing: 1 }}>{b.title}</p>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2-STEP FORM */}
      <section id="property-form" style={{ padding: '60px 20px', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 32, boxShadow: '0 8px 48px rgba(10,22,40,0.14)', border: '1px solid #e8e0d0', overflow: 'hidden' }}>

            {/* Form Header */}
            <div style={{ background: '#C9A84C', padding: '32px 24px', textAlign: 'center' }}>
              <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(18px,4vw,26px)', letterSpacing: 2, margin: '0 0 8px' }}>Start Your Successful Closing Today</h2>
              <p style={{ color: '#0d0d0d', fontWeight: 700, fontSize: 14, margin: 0 }}>Takes less than 60 seconds to get started.</p>
            </div>

            {/* Step Indicator */}
            <div style={{ display: 'flex', borderBottom: '2px solid #e8e0d0' }}>
              {[1, 2].map(s => (
                <div key={s} onClick={() => s < step && setStep(s)} style={{ flex: 1, padding: '16px', textAlign: 'center', background: step === s ? '#0d0d0d' : '#f8f6f2', cursor: s < step ? 'pointer' : 'default', borderBottom: step === s ? '4px solid #C9A84C' : '4px solid transparent' }}>
                  <span style={{ color: step === s ? '#C9A84C' : step > s ? '#8B0000' : '#aaa', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2 }}>
                    {step > s ? '✓ ' : ''}{s === 1 ? 'Step 1: Contact Info' : 'Step 2: Property Details'}
                  </span>
                </div>
              ))}
            </div>

            <form action="https://formspree.io/f/xaqpozbn" method="POST">
              <input type="hidden" name="fullName" value={formData.fullName} />
              <input type="hidden" name="phone" value={formData.phone} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="propertyAddress" value={formData.propertyAddress} />
              <input type="hidden" name="situation" value={formData.situation.join(', ')} />
              <input type="hidden" name="additionalNotes" value={formData.additionalNotes} />
              <input type="hidden" name="timeline" value={formData.timeline} />
              <input type="hidden" name="priceExpectation" value={formData.priceExpectation} />

              <div style={{ padding: '40px' }}>

                {/* STEP 1 */}
                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <p style={{ color: '#555', fontSize: 14, textAlign: 'center', margin: '0 0 8px', fontWeight: 600 }}>No obligation. No pressure. Just explore your options.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 16 }}>
                      <input type="text" placeholder="FULL NAME" value={formData.fullName} onChange={e => setFormData(f => ({...f, fullName: e.target.value}))} style={inputStyle} />
                      <input type="tel" placeholder="PHONE NUMBER" value={formData.phone} onChange={e => setFormData(f => ({...f, phone: e.target.value}))} style={inputStyle} />
                    </div>
                    <input type="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={e => setFormData(f => ({...f, email: e.target.value}))} style={inputStyle} />
                    <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, STATE, ZIP)" value={formData.propertyAddress} onChange={e => setFormData(f => ({...f, propertyAddress: e.target.value}))} style={inputStyle} />
                    <button type="button" onClick={() => {
                      if (!formData.fullName || !formData.phone || !formData.propertyAddress) {
                        alert('Please fill in your name, phone, and property address to continue.');
                        return;
                      }
                      setStep(2);
                      setTimeout(() => document.getElementById('property-form').scrollIntoView({ behavior: 'smooth' }), 100);
                    }} style={{ background: '#0d0d0d', color: '#C9A84C', padding: '20px', borderRadius: 999, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3, fontSize
