import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openFaq, setOpenFaq] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', propertyAddress: '',
    situation: [], additionalNotes: '', timeline: '', priceExpectation: '',
    smsConsentTransactional: false,
smsConsentMarketing: false
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

      {/* 1. NAV */}
      <nav style={{ background: '#ffffff', borderBottom: '4px solid #C9A84C', position: 'sticky', top: 0, zIndex: 50 }}>
        <style>{`
          .nav-container { max-width: 1200px; margin: 0 auto; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; gap: 14px; }
          .brand-group { display: flex; align-items: center; gap: 4px; }
          .logo-img { height: 105px; width: auto; object-fit: contain; }
          .logo-text-wrapper { display: flex; flex-direction: column; justify-content: center; }
          .line-tekton { color: #8B0000; font-weight: 900; font-size: 36px; text-transform: uppercase; line-height: 0.95; letter-spacing: 0.5px; }
          .line-solutions { color: #555555; font-size: 15px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 800; line-height: 1.1; margin: 4px 0 2px; }
          .line-relief { color: #A38430; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; line-height: 1.0; font-style: italic; }
          .cta-btn { background: #8B0000; color: #fff; padding: 14px 28px; border-radius: 999px; font-weight: 900; font-size: 15px; text-decoration: none; border: 2px solid #C9A84C; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }
          @media (max-width: 768px) {
            .nav-container { padding: 6px 10px; gap: 4px; }
            .brand-group { gap: 3px; }
            .logo-img { height: 55px; }
            .line-tekton { font-size: 18px; line-height: 0.95; }
            .line-solutions { font-size: 7.5px; letter-spacing: 1px; margin: 1px 0; line-height: 1.0; }
            .line-relief { font-size: 6.5px; letter-spacing: 1.2px; line-height: 1.0; }
            .cta-btn { padding: 8px 14px; font-size: 11px; }
          }
        `}</style>
        <div className="nav-container">
          <div className="brand-group">
            <img src="/tekton-emblem.png" alt="Tekton Logo" className="logo-img" onError={e => { e.target.style.display = 'none'; }} />
            <div className="logo-text-wrapper">
              <div className="line-tekton">TEKTON</div>
              <div className="line-solutions">PROPERTY SOLUTIONS LLC</div>
              <div className="line-relief">RELIEF THAT DELIVERS.</div>
            </div>
          </div>
          <a href="#property-form" className="cta-btn">Get Your Offer</a>
        </div>
      </nav>

      {/* 2. HERO */}
      <section style={{ position: 'relative', color: '#fff', padding: '100px 20px 110px', borderBottom: '8px solid #C9A84C', textAlign: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(80,10,10,0.78) 100%)' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.7 }} />
            <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', margin: 0, fontStyle: 'italic' }}>Ohio &amp; Nationwide</p>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.7 }} />
          </div>
          <h1 style={{ fontSize: 'clamp(38px, 6.5vw, 72px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 20, letterSpacing: -1 }}>
            Sell Your House <span style={{ color: '#C9A84C' }}>FAST</span><br />For <span style={{ color: '#C9A84C' }}>CASH</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, background: '#C9A84C', opacity: 0.7 }} />
            <p style={{ fontSize: 20, fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: 3, color: '#C9A84C', margin: 0 }}>"Relief That Delivers."</p>
            <div style={{ height: 1, width: 40, background: '#C9A84C', opacity: 0.7 }} />
          </div>
          <p style={{ fontSize: 17, fontWeight: 600, maxWidth: 680, margin: '0 auto 36px', lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: 1 }}>No Repairs. No Commissions. Close On Your Timeline.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 36 }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(201,168,76,0.5)', padding: '14px 28px', borderRadius: 999 }}>
              <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>Closing Timeline: 14–30 Days</span>
            </div>
            <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '14px 32px', borderRadius: 999, fontWeight: 900, fontSize: 15, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 2 }}>Get My Property Reviewed</a>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 16, padding: '14px 24px', maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>All transactions are handled through a licensed title company to help ensure a safe and secure closing process.</p>
          </div>
        </div>
      </section>

      {/* 3. TRUST SIGNALS */}
      <section style={{ background: '#8B0000', padding: '10px 20px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {[{ icon: '🏛', label: 'Licensed Title Company' },{ icon: '✦', label: '$0 Fees or Commissions' },{ icon: '📅', label: '14–30 Day Closing' },{ icon: '🏠', label: 'As-Is — No Repairs' }].map((t, i) => (
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
          {[{ title: 'No Repairs Needed', desc: 'Sell your property as-is without cleaning, fixing, or updating it first.' },{ title: 'No Commissions', desc: 'No agent fees or commissions. Just a direct review of your property.' },{ title: 'Flexible Closing', desc: 'We work with different timelines and aim to find a solution that fits your situation.' }].map((b) => (
            <div key={b.title} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(10,22,40,0.12)', padding: '24px 20px', borderTop: '4px solid #8B0000' }}>
              <p style={{ color: '#0d0d0d', fontWeight: 900, fontSize: 16, textTransform: 'uppercase', marginBottom: 8, letterSpacing: 1 }}>{b.title}</p>
              <p style={{ color: '#555', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 2-STEP FORM */}
      <section id="property-form" style={{ padding: '80px 20px 60px', scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 32, boxShadow: '0 8px 48px rgba(10,22,40,0.14)', border: '1px solid #e8e0d0', overflow: 'hidden' }}>
            <div style={{ background: '#C9A84C', padding: '32px 24px', textAlign: 'center' }}>
              <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(18px,4vw,26px)', letterSpacing: 2, margin: '0 0 8px' }}>Start Your Successful Closing Today</h2>
              <p style={{ color: '#0d0d0d', fontWeight: 700, fontSize: 14, margin: 0 }}>Takes less than 60 seconds to get started.</p>
            </div>

            <div style={{ display: 'flex', borderBottom: '2px solid #e8e0d0' }}>
              {[1, 2].map(s => (
                <div key={s} onClick={() => s < step && setStep(s)} style={{ flex: 1, padding: '16px', textAlign: 'center', background: step === s ? '#0d0d0d' : '#f8f6f2', cursor: s < step ? 'pointer' : 'default', borderBottom: step === s ? '4px solid #C9A84C' : '4px solid transparent' }}>
                  <span style={{ color: step === s ? '#C9A84C' : step > s ? '#8B0000' : '#111111', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2 }}>
                    {step > s ? '✓ ' : ''}{s === 1 ? 'Step 1: Contact Info' : 'Step 2: Property Details'}
                  </span>
                </div>
              ))}
            </div>

            <form action="https://formspree.io/f/xwvjklgy" method="POST">
              <input type="hidden" name="fullName" value={formData.fullName} />
              <input type="hidden" name="phone" value={formData.phone} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="propertyAddress" value={formData.propertyAddress} />
              <input type="hidden" name="situation" value={formData.situation.join(', ')} />
              <input type="hidden" name="additionalNotes" value={formData.additionalNotes} />
              <input type="hidden" name="timeline" value={formData.timeline} />
              <input type="hidden" name="priceExpectation" value={formData.priceExpectation} />
              <input type="hidden" name="smsConsentTransactional" value={formData.smsConsentTransactional ? 'Yes - consented to transactional SMS' : 'No'} />
<input type="hidden" name="smsConsentMarketing" value={formData.smsConsentMarketing ? 'Yes - consented to marketing SMS' : 'No'} />

              <div style={{ padding: '40px' }}>
                {step === 1 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <p style={{ color: '#555', fontSize: 14, textAlign: 'center', margin: '0 0 8px', fontWeight: 600 }}>No obligation. No pressure. Just explore your options.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                      <input type="text" required placeholder="FULL NAME" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                      <input type="tel" required placeholder="PHONE NUMBER" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                      <input type="email" required placeholder="EMAIL ADDRESS" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                      <input type="text" required placeholder="PROPERTY ADDRESS (STREET, CITY, STATE)" value={formData.propertyAddress} onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                    </div>

                    {/* SMS CONSENT - TWO CHECKBOXES */}
<div style={{ background: '#f8f6f2', border: '1px solid #e0d8c8', borderRadius: 12, padding: '16px 20px', marginTop: 4 }}>
  <p style={{ fontSize: 12, fontWeight: 900, color: '#0d0d0d', textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 12px' }}>Consent Forms</p>

  {/* Checkbox 1 - Transactional */}
  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', marginBottom: 12 }}>
    <input
      type="checkbox"
      checked={formData.smsConsentTransactional}
      onChange={(e) => setFormData({ ...formData, smsConsentTransactional: e.target.checked })}
      style={{ marginTop: 3, width: 18, height: 18, accentColor: '#8B0000', flexShrink: 0 }}
    />
    <span style={{ fontSize: 12, color: '#555', lineHeight: 1.6, fontWeight: 600 }}>
      I consent to receive non-marketing text messages from Tekton Property Solutions LLC at the phone number provided about my property inquiry, appointment reminders, offer discussions, and transaction updates. Message &amp; data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for assistance.
    </span>
  </label>

  {/* Checkbox 2 - Marketing */}
  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', marginBottom: 12 }}>
    <input
      type="checkbox"
      checked={formData.smsConsentMarketing}
      onChange={(e) => setFormData({ ...formData, smsConsentMarketing: e.target.checked })}
      style={{ marginTop: 3, width: 18, height: 18, accentColor: '#8B0000', flexShrink: 0 }}
    />
    <span style={{ fontSize: 12, color: '#555', lineHeight: 1.6, fontWeight: 600 }}>
      I consent to receive marketing text messages from Tekton Property Solutions LLC at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for assistance. Consent is not a condition of any purchase or service.
    </span>
  </label>

  {/* Policy Links */}
  <p style={{ fontSize: 11, color: '#888', margin: '8px 0 0', textAlign: 'center' }}>
    <Link to="/privacy-policy" style={{ color: '#8B0000', textDecoration: 'underline', fontWeight: 700 }}>Privacy Policy</Link>
    {' | '}
    <Link to="/sms-terms" style={{ color: '#8B0000', textDecoration: 'underline', fontWeight: 700 }}>Terms of Service</Link>
  </p>
</div>
                    <button type="button" onClick={() => { if (formData.fullName && formData.phone && formData.email && formData.propertyAddress) { setStep(2); } else { alert('Please fill out all contact details before moving to Step 2.'); } }} style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '16px', borderRadius: 999, fontWeight: 900, fontSize: 18, border: '2px solid #C9A84C', cursor: 'pointer', marginTop: 20, textTransform: 'uppercase', letterSpacing: 1 }}>
                      Continue to Step 2 →
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ background: '#222222', padding: '24px', borderRadius: 16, border: '1px solid #444' }}>
                      <label style={{ display: 'block', fontWeight: 900, color: '#C9A84C', marginBottom: 16, textTransform: 'uppercase', fontSize: 13, letterSpacing: 1, textAlign: 'center' }}>* What is the situation? (Check all that apply)</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                        {situations.map((sit) => {
                          const isSelected = formData.situation.includes(sit);
                          return (
                            <button key={sit} type="button" onClick={() => handleCheck(sit)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: 8, border: isSelected ? '2px solid #C9A84C' : '1px solid #444', background: isSelected ? '#333333' : '#2a2a2a', color: isSelected ? '#C9A84C' : '#a0a0a0', fontWeight: 800, cursor: 'pointer', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', transition: 'all 0.15s' }}>
                              <div style={{ width: 14, height: 14, border: '1px solid #C9A84C', background: isSelected ? '#C9A84C' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, flexShrink: 0 }}>
                                {isSelected && <span style={{ color: '#000', fontSize: 10, fontWeight: 900 }}>✓</span>}
                              </div>
                              {sit}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {formData.situation.includes('Other') && (
                      <input type="text" required placeholder="PLEASE DESCRIBE YOUR SITUATION..." value={formData.otherDescription || ''} onChange={e => setFormData({...formData, otherDescription: e.target.value})} style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700, boxSizing: 'border-box', marginTop: 8 }} />
                    )}

                    <div>
                      <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>* Additional Notes (Tell us more about the property...)</label>
                      <textarea rows={3} placeholder="Tell us about the roof, plumbing, overall updates, or any structural needs..." value={formData.additionalNotes} onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })} style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 14, fontFamily: 'inherit' }} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>* How fast do you need to sell? <span style={{ color: '#C9A84C' }}>— Click Below</span></label>
                      <div style={{ position: 'relative' }}>
                        <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} style={{ width: '100%', background: '#ffffff', border: '3px solid #000000', padding: '14px 40px 14px 14px', fontSize: 13, fontWeight: 900, borderRadius: 8, appearance: 'none', WebkitAppearance: 'none', letterSpacing: 1, textTransform: 'uppercase' }}>
                          <option value="">Click here to select timeline...</option>
                          <option value="Immediately">Immediately (ASAP)</option>
                          <option value="1-2 Weeks">Within 1-2 Weeks</option>
                          <option value="1 Month">Within a Month</option>
                          <option value="Just curious">Just testing the market / Curious</option>
                        </select>
                        <div style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: 20, fontWeight: 900 }}>▼</div>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>* What price would you consider for a cash offer?</label>
                      <input type="text" required placeholder="EXAMPLE: $150,000" value={formData.priceExpectation} onChange={(e) => setFormData({ ...formData, priceExpectation: e.target.value })} style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 14, fontWeight: 700 }} />
                    </div>

                    <div style={{ border: '2px solid #C9A84C', padding: '14px', borderRadius: 8, background: '#fffcf7' }}>
                      <p style={{ fontSize: 11, color: '#444', lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
                        <strong>Disclosure:</strong> Tekton Property Solutions LLC is a real estate wholesaler, not a licensed agent. We may purchase properties below market value and assign contracts to third-party buyers for a profit. A written Wholesaler Disclosure Statement will be provided before any contract is binding. No obligation to sell.
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                      <button type="button" onClick={() => {
                        if (formData.situation.length === 0) { alert('Please select at least one situation before submitting.'); return; }
                        if (!formData.timeline) { alert('Please select how fast you need to sell before submitting.'); return; }
                        if (!formData.priceExpectation || formData.priceExpectation.trim() === '') { alert('Please enter a price you would consider for a cash offer.'); return; }
                        if (!formData.additionalNotes || formData.additionalNotes.trim() === '') { alert('Please tell us more about the property before submitting.'); return; }
                        document.querySelector('form').submit();
                      }} style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '18px', borderRadius: 999, fontWeight: 900, fontSize: 18, border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1 }}>
                        Submit My Property →
                      </button>
                      <button type="button" onClick={() => setStep(1)} style={{ background: 'transparent', border: 'none', color: '#666', fontSize: 12, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>← Back to Step 1</button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '60px 20px', background: '#0d0d0d', textAlign: 'center' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12, fontStyle: 'italic' }}>Our Simple Process</p>
          <h2 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(28px,5vw,52px)', marginBottom: 48, letterSpacing: -1 }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 24 }}>
            {[{n:'1',t:'SHARE INFO',d:'Tell us about the property and your situation through the form above.'},{n:'2',t:'REVIEW OPTIONS',d:'We review the details, property condition, and your timeline to see if a solution makes sense.'},{n:'3',t:'CLOSE SAFELY',d:'If the numbers work, we move forward through a licensed title company for a smooth closing process.'}].map(s => (
              <div key={s.n} style={{ background: '#1a1a1a', borderRadius: 24, padding: '36px 24px', border: '1px solid rgba(201,168,76,0.3)', borderBottom: '6px solid #C9A84C' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#C9A84C', color: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 28, margin: '0 auto 20px' }}>{s.n}</div>
                <h3 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', fontSize: 18, letterSpacing: 2, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                {openFaq === i && <div style={{ padding: '0 24px 20px', color: '#555', fontSize: 15, lineHeight: 1.7, fontWeight: 600 }}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY */}
      <section id="privacy-policy" style={{ padding: '60px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ background: '#f8f6f2', borderRadius: 32, padding: '48px 40px', border: '2px solid #e8e0d0' }}>
            <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', fontSize: 'clamp(22px,4vw,36px)', marginBottom: 32 }}>Your Trust Is Our Priority</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15, lineHeight: 1.8, color: '#444', fontWeight: 600 }}>
              <p style={{ margin: 0 }}>Tekton Property Solutions LLC values your privacy. In compliance with <strong>Ohio SB 155</strong>, we disclose that we are real estate wholesalers — not licensed real estate agents — acting on our own behalf.</p>
              <p style={{ margin: 0 }}>We may enter into purchase agreements at below-market value and assign them to third-party buyers for a profit.</p>
              <div style={{ background: '#fff', padding: '20px 24px', borderRadius: 12, borderLeft: '6px solid #C9A84C', fontSize: 14, fontStyle: 'italic' }}>A written Wholesaler Disclosure Statement will be provided and must be signed before any contract is binding. You have the right to seek legal or professional advice before signing.</div>
              <p style={{ margin: 0 }}>Your information is collected solely to review your property and discuss possible options. We do not sell your personal information to third parties.</p>
              <div style={{ background: '#fff', border: '1px solid #e0d8c8', borderRadius: 12, padding: '20px 24px', marginTop: 8 }}>
                <p style={{ margin: '0 0 10px', fontWeight: 900, color: '#0d0d0d', textTransform: 'uppercase', fontSize: 13, letterSpacing: 1 }}>SMS &amp; Text Message Policy</p>
                <p style={{ margin: '0 0 10px' }}>By providing your phone number and checking the SMS consent box on our contact form, you agree to receive text messages from Tekton Property Solutions LLC regarding your property inquiry. This may include follow-up messages, appointment reminders, and transaction updates.</p>
                <p style={{ margin: '0 0 10px' }}><strong>Message frequency may vary.</strong> Message and data rates may apply depending on your mobile carrier and plan.</p>
                <p style={{ margin: '0 0 10px' }}>To opt out at any time, reply <strong>STOP</strong> to any text message you receive from us. To request assistance, reply <strong>HELP</strong>.</p>
                <p style={{ margin: 0 }}>SMS consent is never required as a condition of any purchase, sale, or service. We do not share your phone number or SMS consent status with third parties for their own marketing purposes.</p>
              </div>
              <p style={{ margin: 0 }}><strong>Business Address:</strong> 6545 Market Ave N, Ste 100, Canton, OH 44721 &nbsp;|&nbsp; <strong>Phone:</strong> 330-889-8983</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d0d0d', color: '#fff', padding: '80px 20px', textAlign: 'center', borderTop: '8px solid #C9A84C' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', fontSize: 13, marginBottom: 16 }}>READY TO MOVE FORWARD?</p>
          <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(28px,6vw,64px)', lineHeight: 1.1, marginBottom: 24, letterSpacing: -1 }}>Start With Your<br />Property Details</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, fontWeight: 600 }}>No obligation. No pressure. Just see what your options look like.</p>
          <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '20px 48px', borderRadius: 999, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3, fontSize: 18, textDecoration: 'none', display: 'inline-block' }}>Submit My Details Now</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#fff', padding: '48px 20px', borderTop: '6px solid #0d0d0d', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <img src="/tekton-emblem.png" alt="Tekton Emblem" style={{ height: 60, width: 'auto', objectFit: 'contain', marginBottom: 16 }} onError={e => e.target.style.display = 'none'} />
          <p style={{ color: '#666', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 6 }}>Ohio &amp; Nationwide</p>
          <p style={{ color: '#888', fontSize: 13, marginBottom: 6 }}>6545 Market Ave N, Ste 100, Canton, OH 44721</p>
          <p style={{ color: '#888', fontSize: 13, marginBottom: 20 }}>330-889-8983</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
            <Link to="/privacy-policy" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: 2, fontSize: 13 }}>Privacy Policy</Link>
            <span style={{ color: '#ccc', fontSize: 13 }}>|</span>
            <Link to="/sms-terms" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: 2, fontSize: 13 }}>SMS Terms &amp; Conditions</Link>
            <span style={{ color: '#ccc', fontSize: 13 }}>|</span>
            <Link to="/privacy-policy" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: 2, fontSize: 13 }}>Disclosure</Link>
          </div>
          <p style={{ color: '#aaa', fontSize: 12, marginTop: 20, fontStyle: 'italic' }}>© {new Date().getFullYear()} Tekton Property Solutions LLC. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
