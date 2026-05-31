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

      {/* 1. NAV (Updated Tagline with Period + Responsive Layout) */}
      <nav style={{ background: '#ffffff', borderBottom: '4px solid #C9A84C', position: 'sticky', top: 0, zIndex: 50 }}>
        <style>{`
          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 14px;
          }
          .brand-group {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .logo-img {
            height: 105px;
            width: auto;
            object-fit: contain;
          }
          .logo-text-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          /* Desktop Typography Settings */
          .line-tekton {
            color: #8B0000;
            font-weight: 900;
            font-size: 36px;
            text-transform: uppercase;
            line-height: 0.95;
            letter-spacing: 0.5px;
          }
          .line-solutions {
            color: #555555;
            font-size: 15px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            font-weight: 800;
            line-height: 1.1;
            margin: 4px 0 2px;
          }
          .line-relief {
            color: #A38430;
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 1.0;
            font-style: italic;
          }
          
          .cta-btn {
            background: #8B0000;
            color: #fff;
            padding: 14px 28px;
            border-radius: 999px;
            font-weight: 900;
            font-size: 15px;
            text-decoration: none;
            border: 2px solid #C9A84C;
            letter-spacing: 1px;
            text-transform: uppercase;
            white-space: nowrap;
          }

          /* Mobile Optimization */
          @media (max-width: 768px) {
            .nav-container {
              padding: 6px 10px;
              gap: 4px;
            }
            .brand-group {
              gap: 3px;
            }
            .logo-img {
              height: 55px;
            }
            .line-tekton {
              font-size: 18px;
              line-height: 0.95;
            }
            .line-solutions {
              font-size: 7.5px;
              letter-spacing: 1px;
              margin: 1px 0;
              line-height: 1.0;
            }
            .line-relief {
              font-size: 6.5px;
              letter-spacing: 1.2px;
              line-height: 1.0;
            }
            .cta-btn {
              padding: 8px 14px;
              font-size: 11px;
            }
          }
        `}</style>

        <div className="nav-container">
          {/* Brand Group */}
          <div className="brand-group">
            <img
              src="/tekton-emblem.png"
              alt="Tekton Logo"
              className="logo-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div className="logo-text-wrapper">
              {/* Line 1: TEKTON */}
              <div className="line-tekton">TEKTON</div>
              {/* Line 2: PROPERTY SOLUTIONS LLC */}
              <div className="line-solutions">PROPERTY SOLUTIONS LLC</div>
              {/* Line 3: RELIEF THAT DELIVERS. */}
              <div className="line-relief">RELIEF THAT DELIVERS.</div>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#property-form" className="cta-btn">
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
                  <span style={{ 
              color: step === s ? '#C9A84C' : step > s ? '#8B0000' : '#111111', 
              fontWeight: 900, 
              fontSize: 13, 
              textTransform: 'uppercase', 
              letterSpacing: 2 
            }}>
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
                {step === 1 ? (
            /* STEP 1: CONTACT INFO (Restored to your exact layout) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ color: '#555', fontSize: 14, textAlign: 'center', margin: '0 0 8px', fontWeight: 600 }}>
                No obligation. No pressure. Just explore your options.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <input
                  type="text"
                  required
                  placeholder="FULL NAME"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }}
                />
                <input
                  type="tel"
                  required
                  placeholder="PHONE NUMBER"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }}
                />
                <input
                  type="text"
                  required
                  placeholder="PROPERTY ADDRESS (STREET, CITY, STATE)"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }}
                />
              </div>
              
              <button
                type="button"
                onClick={() => {
                  if (formData.fullName && formData.phone && formData.email && formData.propertyAddress) {
                    setStep(2);
                  } else {
                    alert('Please fill out all contact details before moving to Step 2.');
                  }
                }}
                style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '16px', borderRadius: 999, fontWeight: 900, fontSize: 18, border: '2px solid #C9A84C', cursor: 'pointer', marginTop: 20, textTransform: 'uppercase', letterSpacing: 1 }}
              >
                Continue to Step 2 →
              </button>
            </div>
          ) : (
            /* STEP 2: PROPERTY DETAILS (Restored to match image_c32d7a.png perfectly) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              
              {/* Situation Grid Box */}
              <div style={{ background: '#222222', padding: '24px', borderRadius: 16, border: '1px solid #444' }}>
                <label style={{ display: 'block', fontWeight: 900, color: '#C9A84C', marginBottom: 16, textTransform: 'uppercase', fontSize: 13, letterSpacing: 1, textAlign: 'center' }}>
                  What is the situation? (Check all that apply)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                  {situations.map((sit) => {
                    const isSelected = formData.situation.includes(sit);
                    return (
                      <button
                        key={sit}
                        type="button"
                        onClick={() => handleCheck(sit)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px',
                          borderRadius: 8,
                          border: isSelected ? '2px solid #C9A84C' : '1px solid #444',
                          background: isSelected ? '#333333' : '#2a2a2a',
                          color: isSelected ? '#C9A84C' : '#a0a0a0',
                          fontWeight: 800,
                          cursor: 'pointer',
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          textAlign: 'left',
                          transition: 'all 0.15s'
                        }}
                      >
                        {/* Custom Square Visual State Checkbox Indicator */}
                        <div style={{ width: 14, height: 14, border: '1px solid #C9A84C', background: isSelected ? '#C9A84C' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, flexShrink: 0 }}>
                          {isSelected && <span style={{ color: '#000', fontSize: 10, fontWeight: 900 }}>✓</span>}
                        </div>
                        {sit}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Notes Text Area */}
              <div>
                <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>
                  Additional Notes (Tell us more about the property...)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the roof, plumbing, overall updates, or any structural needs..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 14, fontFamily: 'inherit' }}
                />
              </div>

              {/* Timeline Selection Box */}
              <div>
                <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>
                  How fast do you need to sell? <span style={{ color: '#C9A84C' }}>— Click Below</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{ width: '100%', background: '#ffffff', border: '3px solid #000000', padding: '14px 40px 14px 14px', fontSize: 13, fontWeight: 900, borderRadius: 8, appearance: 'none', WebkitAppearance: 'none', letterSpacing: 1, textTransform: 'uppercase' }}
                  >
                    <option value="">Click here to select timeline...</option>
                    <option value="Immediately">Immediately (ASAP)</option>
                    <option value="1-2 Weeks">Within 1-2 Weeks</option>
                    <option value="1 Month">Within a Month</option>
                    <option value="Just curious">Just testing the market / Curious</option>
                  </select>
                  {/* Custom Styled Heavy Dropdown Chevron */}
                  <div style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: 20, fontWeight: 900 }}>
                    ▼
                  </div>
                </div>
              </div>

              {/* Price Expectation Input */}
              <div>
                <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>
                  What price would you consider for a cash offer?
                </label>
                <input
                  type="text"
                  placeholder="EXAMPLE: $150,000"
                  value={formData.priceExpectation}
                  onChange={(e) => setFormData({ ...formData, priceExpectation: e.target.value })}
                  style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 14, fontWeight: 700 }}
                />
              </div>

              {/* Legal Wholesaler Disclosure Box */}
              <div style={{ border: '2px solid #C9A84C', padding: '14px', borderRadius: 8, background: '#fffcf7' }}>
                <p style={{ fontSize: 11, color: '#444', lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
                  <strong>Disclosure:</strong> Tekton Property Solutions LLC is a real estate wholesaler, not a licensed agent. We may purchase properties below market value and assign contracts to third-party buyers for a profit. A written Wholesaler Disclosure Statement will be provided before any contract is binding. No obligation to sell.
                </p>
              </div>

              {/* Submit Buttons Layout */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <button
                  type="submit"
                  style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '18px', borderRadius: 999, fontWeight: 900, fontSize: 18, border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1 }}
                >
                  Submit My Property →
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{ background: 'transparent', border: 'none', color: '#666', fontSize: 12, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}
                >
                  ← Back to Step 1
                </button>
              </div>

            </div>
          )}
