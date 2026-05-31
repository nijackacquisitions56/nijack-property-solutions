import React, { useState } from 'react';

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

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#f9f7f4', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* 1. NAV (Tightened Text-to-Emblem Gap) */}
      <nav style={{ background: '#ffffff', borderBottom: '4px solid #C9A84C', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14 }}>
          
          {/* Brand Group (Gap reduced to 4 to move text left) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <img
              src="/tekton-emblem.png"
              alt="Tekton Logo"
              style={{ height: 105, width: 'auto', objectFit: 'contain' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* Line 1: TEKTON */}
              <div style={{ color: '#8B0000', fontWeight: 900, fontSize: 'clamp(26px, 6vw, 36px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '0.5px' }}>
                TEKTON
              </div>
              {/* Line 2: PROPERTY SOLUTIONS LLC */}
              <div style={{ color: '#555555', fontSize: 'clamp(12px, 2.5vw, 15px)', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 800, lineHeight: 1.1, margin: '4px 0 2px' }}>
                PROPERTY SOLUTIONS LLC
              </div>
              {/* Line 3: RELIEF THAT DELIVERS */}
              <div style={{ color: '#A38430', fontSize: 'clamp(9px, 2vw, 12px)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, lineHeight: 1.0, fontStyle: 'italic' }}>
                RELIEF THAT DELIVERS
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#property-form" style={{ background: '#8B0000', color: '#fff', padding: '14px 28px', borderRadius: 999, fontWeight: 900, fontSize: 'clamp(12px, 3vw, 15px)', textDecoration: 'none', border: '2px solid #C9A84C', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Get Your Offer
          </a>
        </div>
      </nav>
      {/* 2. HERO */}
      <section style={{
        position: 'relative', color: '#fff', padding: '100px 20px 110px',
        borderBottom: '8px solid #C9A84C', textAlign: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(80,10,10,0.78) 100%)' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.7 }} />
            <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', margin: 0, fontStyle: 'italic' }}>Ohio &amp; Nationwide Investment Solutions</p>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.7 }} />
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 20, letterSpacing: -1 }}>
            Sell Your House <span style={{ color: '#C9A84C' }}>FAST</span><br />For <span style={{ color: '#C9A84C' }}>CASH</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, background: '#C9A84C', opacity: 0.7 }} />
            <p style={{ fontSize: 20, fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: 3, color: '#C9A84C', margin: 0 }}>"Relief That Delivers."</p>
            <div style={{ height: 1, width: 40, background: '#C9A84C', opacity: 0.7 }} />
          </div>
          <p style={{ fontSize: 17, fontWeight: 600, maxWidth: 680, margin: '0 auto 36px', lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: 1 }}>
            No Repairs. No Commissions. Close On Your Timeline.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 36 }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(201,168,76,0.5)', padding: '14px 28px', borderRadius: 999 }}>
              <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>Closing Timeline: 14–30 Days</span>
            </div>
            <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '14px 32px', borderRadius: 999, fontWeight: 900, fontSize: 15, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 2 }}>
              Get My Property Reviewed
            </a>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 16, padding: '14px 24px', maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>All transactions are handled through a licensed title company to help ensure a safe and secure closing process.</p>
          </div>
        </div>
      </section>

      {/* 3. TRUST SIGNALS */}
      <section style={{ background: '#8B0000', padding: '10px 20px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {[
            { icon: '🏛', label: 'Licensed Title Company' },
            { icon: '✦', label: '$0 Fees or Commissions' },
            { icon: '📅', label: '14–30 Day Closing' },
            { icon: '🏠', label: 'As-Is — No Repairs' },
          ].map((t, i) => (
            <div key={i} style={{ padding: '15px 24px', textAlign: 'center', flex: '1 1 200px', minWidth: '160px' }}>
              <div style={{ color: '#C9A84C', fontSize: 24, marginBottom: 8 }}>{t.icon}</div>
              <div style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', lineHeight: 1.4 }}>{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. QUICK BENEFITS */}
      <section style={{ maxWidth: 1000, margin: '-24px auto 0', padding: '0 20px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {[
            { title: 'No Repairs Needed', desc: 'Sell your property as-is without cleaning, fixing, or updating it first.' },
            { title: 'No Commissions', desc: 'No agent fees or commissions. Just a direct review of your property.' },
            { title: 'Flexible Closing', desc: 'We work with different timelines and aim to find a solution that fits your situation.' },
          ].map((b) => (
            <div key={b.title} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(10,22,40,0.12)', padding: '24px 20px', borderTop: '4px solid #8B0000' }}>
              <p style={{ color: '#0d0d0d', fontWeight: 900, fontSize: 16, textTransform: 'uppercase', marginBottom: 8, letterSpacing: 1 }}>{b.title}</p>
              <p style={{ color: '#555', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 2-STEP FORM (With Padding Fix for Sticky Header Alignment) */}
      <section id="property-form" style={{ padding: '80px 20px 60px', scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 32, boxShadow: '0 8px 48px rgba(10,22,40,0.14)', border: '1px solid #e8e0d0', overflow: 'hidden' }}>

            <div style={{ background: '#C9A84C', padding: '32px 24px', textAlign: 'center' }}>
              <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(18px,4vw,26px)', letterSpacing: 2, margin: '0 0 8px' }}>Start Your Successful Closing Today</h2>
              <p style={{ color: '#0d0d0d', fontWeight: 700, fontSize: 14, margin: 0 }}>Takes less than 60 seconds to get started.</p>
            </div>

            {/* Step tabs */}
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
                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <p style={{ color: '#555', fontSize: 14, textAlign: 'center', margin: '0 0 8px', fontWeight: 600 }}>No obligation. No pressure. Just explore your options.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 16 }}>
                      <input type="text" placeholder="FULL NAME" value={formData.fullName} onChange={e => setFormData(f => ({...f, fullName: e.target.value}))} style={{ background: '#f0ede8', border: 'none', borderBottom: '3px solid #8B0000', padding: '16px 12px', fontSize: 16, fontWeight: 800, outline: 'none', fontFamily: 'Georgia, serif', width: '100%', boxSizing: 'border-box', color: '#1a1a1a' }} />
                      <input type="tel" placeholder="PHONE NUMBER" value={formData.phone} onChange={e => setFormData(f => ({...f, phone: e.target.value}))} style={{ background: '#f0ede8', border: 'none', borderBottom: '3px solid #8B0000', padding: '16px 12px', fontSize: 16, fontWeight: 800, outline: 'none', fontFamily: 'Georgia, serif', width: '100%', boxSizing: 'border-box', color: '#1a1a1a' }} />
                    </div>
                    <input type="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={e => setFormData(f => ({...f, email: e.target.value}))} style={{ background: '#f0ede8', border: 'none', borderBottom: '3px solid #8B0000', padding: '16px 12px', fontSize: 16, fontWeight: 800, outline: 'none', fontFamily: 'Georgia, serif', width: '100%', boxSizing: 'border-box', color: '#1a1a1a' }} />
                    <input type="text" placeholder="PROPERTY ADDRESS (STREET, CITY, STATE, ZIP)" value={formData.propertyAddress} onChange={e => setFormData(f => ({...f, propertyAddress: e.target.value}))} style={{ background: '#f0ede8', border: 'none', borderBottom: '3px solid #8B0000', padding: '16px 12px', fontSize: 16, fontWeight: 800, outline: 'none', fontFamily: 'Georgia, serif', width: '100%', boxSizing: 'border-box', color: '#1a1a1a' }} />
                    <button type="button" onClick={() => {
                      if (!formData.fullName || !formData.phone || !formData.propertyAddress) {
                        alert('Please fill in your name, phone, and property address to continue.');
                        return;
                      }
                      setStep(2);
                      setTimeout(() => document.getElementById('property-form').scrollIntoView({ behavior: 'smooth' }), 100);
                    }} style={{ background: '#0d0d0d', color: '#C9A84C', padding: '20px', borderRadius: 999, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3, fontSize: 16, border: '3px solid #C9A84C', cursor: 'pointer', width: '100%', marginTop: 8 }}>
                      Continue to Step 2 →
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ background: '#1a1a1a', padding: '24px', borderRadius: 20, border: '2px solid rgba(201,168,76,0.4)' }}>
                      <p style={{ color: '#C9A84C', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', margin: '0 0 16px' }}>What is the situation? (Check all that apply)</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: 10 }}>
                        {situations.map(label => (
                          <label key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: formData.situation.includes(label) ? '#8B0000' : '#2a2a2a', borderRadius: 12, border: formData.situation.includes(label) ? '2px solid #C9A84C' : '2px solid #444', cursor: 'pointer' }}>
                            <input type="checkbox" checked={formData.situation.includes(label)} onChange={() => handleCheck(label)} style={{ width: 18, height: 18, accentColor: '#C9A84C' }} />
                            <span style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 11, color: '#C9A84C', letterSpacing: 1 }}>{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <textarea placeholder="ADDITIONAL NOTES (TELL US MORE ABOUT THE PROPERTY...)" rows="3" value={formData.additionalNotes} onChange={e => setFormData(f => ({...f, additionalNotes: e.target.value}))} style={{ background: '#f0ede8', border: 'none', borderBottom: '3px solid #8B0000', padding: '16px 12px', fontSize: 15, fontWeight: 800, outline: 'none', resize: 'none', fontFamily: 'Georgia, serif', width: '100%', boxSizing: 'border-box', color: '#1a1a1a' }}></textarea>

                    <div>
                      <label style={{ display: 'block', color: '#0d0d0d', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, fontStyle: 'italic' }}>How fast do you need to sell? <span style={{ color: '#C9A84C' }}>— CLICK BELOW</span></label>
                      <select value={formData.timeline} onChange={e => setFormData(f => ({...f, timeline: e.target.value}))} style={{ background: '#fff', border: '3px solid #0d0d0d', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 900, color: '#0d0d0d', fontFamily: 'Georgia, serif', width: '100%' }}>
                        <option value="" disabled>CLICK HERE TO SELECT TIMELINE</option>
                        <option>ASAP (RIGHT AWAY)</option>
                        <option>&lt; 30 DAYS</option>
                        <option>&lt; 90 DAYS</option>
                        <option>&lt; 180 DAYS</option>
                        <option>180 DAYS+</option>
                        <option>JUST EXPLORING OPTIONS</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#0d0d0d', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, fontStyle: 'italic' }}>What Price Would You Consider For A Cash Offer?</label>
                      <input type="text" placeholder="EXAMPLE: $150,000" value={formData.priceExpectation} onChange={e => setFormData(f => ({...f, priceExpectation: e.target.value}))} style={{ background: '#f0ede8', border: 'none', borderBottom: '3px solid #8B0000', padding: '16px 12px', fontSize: 16, fontWeight: 800, outline: 'none', fontFamily: 'Georgia, serif', width: '100%', boxSizing: 'border-box', color: '#1a1a1a' }} />
                    </div>

                    <div style={{ background: '#f8f6f2', border: '2px solid #C9A84C', borderRadius: 12, padding: '14px 18px' }}>
                      <p style={{ fontSize: 12, color: '#333', fontWeight: 700, margin: 0, lineHeight: 1.6 }}>
                        <strong>Disclosure:</strong> Tekton Property Solutions LLC is a real estate wholesaler, not a licensed agent. We may purchase properties below market value and assign contracts to third-party buyers for a profit. A written Wholesaler Disclosure Statement will be provided before any contract is binding. No obligation to sell.
                      </p>
                    </div>

                    <button type="submit" style={{ background: '#8B0000', color: '#fff', padding: '22px', borderRadius: 999, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3, fontSize: 'clamp(15px,3vw,20px)', border: '3px solid #C9A84C', cursor: 'pointer', width: '100%' }}>
                      Submit My Property →
                    </button>
                    <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#888', fontSize: 13, cursor: 'pointer', textDecoration: 'underline', fontWeight: 700 }}>← Back to Step 1</button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section style={{ padding: '60px 20px', background: '#0d0d0d', textAlign: 'center' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12, fontStyle: 'italic' }}>Our Simple Process</p>
          <h2 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(28px,5vw,52px)', marginBottom: 48, letterSpacing: -1 }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 24 }}>
            {[
              { n: '1', t: 'SHARE INFO', d: 'Tell us about the property and your situation through the form above.' },
              { n: '2', t: 'REVIEW OPTIONS', d: 'We review the details, property condition, and your timeline to see if a solution makes sense.' },
              { n: '3', t: 'CLOSE SAFELY', d: 'If the numbers work, we move forward through a licensed title company for a smooth closing process.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#1a1a1a', borderRadius: 24, padding: '36px 24px', border: '1px solid rgba(201,168,76,0.3)', borderBottom: '6px solid #C9A84C' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#C9A84C', color: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 28, margin: '0 auto 20px' }}>{s.n}</div>
                <h3 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', fontSize: 18, letterSpacing: 2, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section style={{ padding: '60px 20px', background: '#f9f7f4' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(24px,4vw,40px)', textAlign: 'center', marginBottom: 40, borderBottom: '4px solid #C9A84C', paddingBottom: 16 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e8e0d0', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ color: '#0d0d0d', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>{faq.q}</span>
                  <span style={{ color: '#8B0000', fontSize: 22, fontWeight: 900, marginLeft: 12, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', color: '#555', fontSize: 15, lineHeight: 1.7, fontWeight: 600 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRIVACY & DISCLOSURE */}
      <section id="privacy-policy" style={{ padding: '60px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ background: '#f8f6f2', borderRadius: 32, padding: '48px 40px', border: '2px solid #e8e0d0' }}>
            <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', fontSize: 'clamp(22px,4vw,36px)', marginBottom: 32 }}>Your Trust Is Our Priority</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15, lineHeight: 1.8, color: '#444', fontWeight: 600 }}>
              <p style={{ margin: 0 }}>Tekton Property Solutions LLC values your privacy. In compliance with <strong>Ohio SB 155</strong>, we disclose that we are real estate wholesalers — not licensed real estate agents — acting on our own behalf.</p>
              <p style={{ margin: 0 }}>We may enter into purchase agreements at below-market value and assign them to third-party buyers for a profit.</p>
              <div style={{ background: '#fff', padding: '20px 24px', borderRadius: 12, borderLeft: '6px solid #C9A84C', fontSize: 14, fontStyle: 'italic' }}>
                A written Wholesaler Disclosure Statement will be provided and must be signed before any contract is binding. You have the right to seek legal or professional advice before signing.
              </div>
              <p style={{ margin: 0 }}>Your information is collected solely to review your property and discuss possible options. We do not sell your personal information to third parties.</p>
              <p style={{ margin: 0 }}><strong>Business Address:</strong> 6545 Market Ave N, Ste 100, Canton, OH 44721 &nbsp;|&nbsp; <strong>Phone:</strong> 330-331-9070</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section style={{ background: '#0d0d0d', color: '#fff', padding: '80px 20px', textAlign: 'center', borderTop: '8px solid #C9A84C' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', fontSize: 13, marginBottom: 16 }}>READY TO MOVE FORWARD?</p>
          <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(28px,6vw,64px)', lineHeight: 1.1, marginBottom: 24, letterSpacing: -1 }}>Start With Your<br />Property Details</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, fontWeight: 600 }}>No obligation. No pressure. Just see what your options look like.</p>
          <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '20px 48px', borderRadius: 999, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3, fontSize: 18, textDecoration: 'none', display: 'inline-block' }}>
            Submit My Details Now
          </a>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer style={{ background: '#fff', padding: '48px 20px', borderTop: '6px solid #0d0d0d', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <img src="/tekton-emblem.png" alt="Tekton Emblem" style={{ height: 60, width: 'auto', objectFit: 'contain', marginBottom: 16 }} onError={e => e.target.style.display = 'none'} />
          <p style={{ color: '#666', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 6 }}>Ohio &amp; Nationwide</p>
          <p style={{ color: '#888', fontSize: 13, marginBottom: 6 }}>6545 Market Ave N, Ste 100, Canton, OH 44721</p>
          <p style={{ color: '#888', fontSize: 13, marginBottom: 20 }}>330-331-9070</p>
          <a href="#privacy-policy" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: 2, fontSize: 13 }}>Privacy Policy &amp; Disclosure</a>
          <p style={{ color: '#aaa', fontSize: 12, marginTop: 20, fontStyle: 'italic' }}>© {new Date().getFullYear()} Tekton Property Solutions LLC. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
