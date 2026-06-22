import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openFaq, setOpenFaq] = useState(null);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', propertyAddress: '',
    situation: [], additionalNotes: '', timeline: '', priceExpectation: '',
    smsConsentTransactional: false,
    smsConsentMarketing: false,
    roofCondition: '', hvacCondition: '', electricalCondition: '',
    plumbingCondition: '', foundationCondition: '', overallCondition: '',
    bestTimeToCall: '', preferredContact: '', otherDescription: ''
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

  const isCompleteAddress = (addr) => {
    if (!addr || addr.trim().length < 10) return false;
    const hasStreetNumber = /\d/.test(addr);
    const hasZip = /\d{5}/.test(addr);
    const hasState = /\b[A-Za-z]{2}\b/.test(addr);
    const wordCount = addr.trim().split(/\s+/).length;
    return hasStreetNumber && wordCount >= 3 && (hasZip || hasState);
  };

  const isValidEmail = (email) => {
    const val = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(val)) return false;
    const validTLDs = ['com','net','org','edu','gov','mil','int','io','co','us','biz','info','mobi','name','pro','aero','coop','museum','travel','jobs','tel','cat','post','xxx','app','dev','ai','tech','online','site','website','store','shop','blog','news','media','agency','cloud','digital','email','finance','group','health','home','house','live','local','plus','real','realty','solutions','services','support','systems','team','today','top','work','world','zone','in','uk','ca','au','de','fr','es','it','nl','br','mx','jp','cn','ru','kr','se','no','dk','fi','pl','pt','nz','za','sg','hk','ae','sa','il','ng','gh','ke','tz','ug'];
    const tld = val.split('.').pop();
    return validTLDs.includes(tld);
  };

  const selectStyle = {
    width: '100%',
    background: '#ffffff',
    border: '3px solid #000000',
    padding: '14px 40px 14px 14px',
    fontSize: 13,
    fontWeight: 900,
    borderRadius: 8,
    appearance: 'none',
    WebkitAppearance: 'none',
    letterSpacing: 1,
    textTransform: 'uppercase'
  };

  const repairOptions = [
    { key: 'roofCondition', label: 'Roof Condition', required: true, options: ['Not sure','No known issues','Older but no leaks','Has leaks','Needs repair','Needs full replacement'] },
    { key: 'hvacCondition', label: 'Heating / Cooling System', required: true, options: ['Not sure','Working properly','Older but working','Needs repair','Not working','No central HVAC'] },
    { key: 'electricalCondition', label: 'Electrical System', required: true, options: ['Not sure','Updated / no known issues','Older but working','Fuse box or outdated panel','Known electrical issues','Needs major electrical work'] },
    { key: 'plumbingCondition', label: 'Plumbing Condition', required: true, options: ['Not sure','No known issues','Older but working','Leaks or slow drains','Known plumbing issues','Needs major plumbing work'] },
    { key: 'foundationCondition', label: 'Foundation / Structural Concerns', required: true, options: ['Not sure','No known issues','Minor cracks / settling','Water in basement or crawlspace','Major cracks or movement','Needs foundation repair'] },
    { key: 'overallCondition', label: 'Overall Property Condition', required: true, options: ['Not sure','Move-in ready','Light repairs needed','Moderate repairs needed','Heavy repairs needed','Fire / water damage','Vacant or boarded'] },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#f9f7f4', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* 1. NAV */}
      <nav style={{ background: '#ffffff', borderBottom: '4px solid #C9A84C', position: 'sticky', top: 0, zIndex: 50 }}>
        <style>{`
          .nav-container { max-width: 1200px; margin: 0 auto; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; gap: 14px; }
          .brand-group { display: flex; align-items: center; gap: 4px; }
          .logo-img { height: 72px; width: auto; object-fit: contain; }
          .logo-text-wrapper { display: flex; flex-direction: column; justify-content: center; }
          .line-tekton { color: #8B0000; font-weight: 900; font-size: 28px; text-transform: uppercase; line-height: 0.95; letter-spacing: 0.5px; }
          .line-solutions { color: #555555; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 800; line-height: 1.1; margin: 4px 0 2px; }
          .line-relief { color: #A38430; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; line-height: 1.0; font-style: italic; }
          .cta-btn { background: #8B0000; color: #fff; padding: 14px 28px; border-radius: 999px; font-weight: 900; font-size: 15px; text-decoration: none; border: 2px solid #C9A84C; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }
          .cta-btn-short { display: none; }
          .cta-btn-full { display: inline; }
          @media (max-width: 768px) {
            .hero-section { padding: 70px 16px 80px !important; }
            .nav-container { padding: 6px 10px; gap: 4px; }
            .brand-group { gap: 3px; }
            .logo-img { height: 65px; }
            .line-tekton { font-size: 22px; line-height: 0.95; }
            .line-solutions { font-size: 10px; letter-spacing: 0.9px; margin: 1px 0; line-height: 1.0; }
            .line-relief { font-size: 9px; letter-spacing: 1px; line-height: 1.0; }
            .cta-btn { padding: 10px 16px; font-size: 12px; letter-spacing: 0.5px; }
            .cta-btn-full { display: none; }
            .cta-btn-short { display: inline; }
            .form-input { font-size: 13px !important; padding: 10px !important; }
            .pref-btn { padding: 8px 6px !important; font-size: 11px !important; }
            .contact-pref-title { font-size: 15px !important; }
            .contact-pref-sub { font-size: 13px !important; }
            .contact-pref-helper { font-size: 12px !important; }
            .pref-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
            .step-btn { font-size: 14px !important; padding: 12px !important; }
            .submit-btn { font-size: 14px !important; padding: 14px !important; }
            .form-section { padding: 20px 20px 40px !important; }
            .cta-section-btn { font-size: 14px !important; padding: 14px 24px !important; }
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
          <a href="#property-form" className="cta-btn"><span className="cta-btn-full">Get My Property Review</span><span className="cta-btn-short">Get Offer</span></a>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="hero-section" style={{ position: 'relative', color: '#fff', padding: '100px 20px 110px', borderBottom: '8px solid #C9A84C', textAlign: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(80,10,10,0.78) 100%)' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.7 }} />
            <p style={{ color: '#C9A84C', fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', margin: 0, fontStyle: 'italic' }}>Ohio &amp; Nationwide</p>
            <div style={{ height: 1, width: 60, background: '#C9A84C', opacity: 0.7 }} />
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 20, letterSpacing: -1 }}>
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
              <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>14-30 Day Closing</span>
            </div>
            <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '14px 32px', borderRadius: 999, fontWeight: 900, fontSize: 15, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 2 }}>Get My Property Reviewed</a>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 16, padding: '14px 24px', maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>All transactions are handled through a licensed title company to help ensure a safe and secure closing process.</p>
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
      <section id="property-form" className="form-section" style={{ padding: '80px 20px 60px', scrollMarginTop: 100 }}>
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
              <input type="hidden" name="roofCondition" value={formData.roofCondition} />
              <input type="hidden" name="hvacCondition" value={formData.hvacCondition} />
              <input type="hidden" name="electricalCondition" value={formData.electricalCondition} />
              <input type="hidden" name="plumbingCondition" value={formData.plumbingCondition} />
              <input type="hidden" name="foundationCondition" value={formData.foundationCondition} />
              <input type="hidden" name="overallCondition" value={formData.overallCondition} />
              <input type="hidden" name="bestTimeToCall" value={formData.bestTimeToCall} />
              <input type="hidden" name="preferredContact" value={formData.preferredContact} />
              <input type="hidden" name="otherDescription" value={formData.otherDescription} />

              <div style={{ padding: '40px' }}>
                {step === 1 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <p style={{ color: '#555', fontSize: 14, textAlign: 'center', margin: '0 0 8px', fontWeight: 600 }}>No obligation. No pressure. Just explore your options.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                      <input type="text" required placeholder="FULL NAME" className="form-input" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                      <input type="tel" placeholder="PHONE NUMBER (OPTIONAL)" className="form-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                      <input type="email" required placeholder="EMAIL ADDRESS" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                      <input type="text" required placeholder="FULL ADDRESS" className="form-input" value={formData.propertyAddress} onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })} style={{ background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700 }} />
                    </div>

                    {/* SMS CONSENT - TWO CHECKBOXES */}
                    <div style={{ background: '#f8f6f2', border: '1px solid #e0d8c8', borderRadius: 12, padding: '16px 20px', marginTop: 4 }}>
                      <p style={{ fontSize: 12, fontWeight: 900, color: '#0d0d0d', textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 12px' }}>Consent Forms</p>

                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', marginBottom: 12 }}>
                        <input type="checkbox" checked={formData.smsConsentTransactional} onChange={(e) => setFormData({ ...formData, smsConsentTransactional: e.target.checked })} style={{ marginTop: 3, width: 18, height: 18, accentColor: '#8B0000', flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: '#555', lineHeight: 1.6, fontWeight: 600 }}>
  I consent to receive non-marketing text messages from Tekton Property Solutions LLC at the phone number provided about my property inquiry, appointment reminders, offer discussions, and transaction updates. Message frequency may vary. Message &amp; data rates may apply. Text <strong>HELP</strong> for help. Text <strong>STOP</strong> to unsubscribe at any time. Consent is not a condition of any purchase or service.
</span>
                      </label>

                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', marginBottom: 12 }}>
                        <input type="checkbox" checked={formData.smsConsentMarketing} onChange={(e) => setFormData({ ...formData, smsConsentMarketing: e.target.checked })} style={{ marginTop: 3, width: 18, height: 18, accentColor: '#8B0000', flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: '#555', lineHeight: 1.6, fontWeight: 600 }}>
  I consent to receive promotional or marketing text messages from Tekton Property Solutions LLC at the phone number provided, including property-related follow-up messages, updates, and other promotional communications. Message frequency may vary. Message &amp; data rates may apply. Text <strong>HELP</strong> for help. Text <strong>STOP</strong> to unsubscribe at any time. Consent is not a condition of any purchase or service.
</span>
                      </label>
<p style={{ fontSize: 11, color: '#666', margin: '8px 0 4px', fontStyle: 'italic', fontWeight: 600 }}>Checking either SMS consent box is optional. If you do not consent to text messages, we may contact you by email.</p>
                      <p style={{ fontSize: 11, color: '#888', margin: '4px 0 0', textAlign: 'center' }}>
                        <Link to="/privacy-policy" style={{ color: '#8B0000', textDecoration: 'underline', fontWeight: 700 }}>Privacy Policy</Link>
                        {' | '}
                        <Link to="/sms-terms" style={{ color: '#8B0000', textDecoration: 'underline', fontWeight: 700 }}>SMS Terms &amp; Conditions</Link>
                      </p>
                    </div>

                    {/* Inline validation error */}
                    {errors.step1 && (
                      <div style={{ background: '#fff0f0', border: '2px solid #8B0000', borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
                        <p style={{ color: '#8B0000', fontWeight: 900, fontSize: 14, margin: 0 }}>{errors.step1}</p>
                      </div>
                    )}

                    <button type="button" onClick={() => {
                      if (!formData.fullName || !formData.email || !formData.propertyAddress) {
                        setErrors({ step1: 'Please fill out your name, email, and property address before continuing.' });
                        return;
                      }
                      if (!isCompleteAddress(formData.propertyAddress)) {
                        setErrors({ step1: 'Please enter a complete property address including street number, city, state, and zip code. Example: 1234 Main St, Columbus, OH 43215' });
                        return;
                      }
                      if (!isValidEmail(formData.email)) {
                        setErrors({ step1: 'Please enter a valid email address. Example: name@email.com' });
                        return;
                      }
                      setErrors({});
                      setStep(2);
                      setTimeout(() => { document.getElementById('property-form').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
                    }} className='step-btn' style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '16px', borderRadius: 999, fontWeight: 900, fontSize: 18, border: '2px solid #C9A84C', cursor: 'pointer', marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
                      Continue to Step 2 →
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                    {/* Situation */}
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
                      <input type="text" placeholder="PLEASE DESCRIBE YOUR SITUATION..." value={formData.otherDescription} onChange={e => setFormData({...formData, otherDescription: e.target.value})} style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 15, fontWeight: 700, boxSizing: 'border-box' }} />
                    )}

                    {/* Additional Notes */}
                    <div>
                      <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>* Additional Notes</label>
                      <textarea rows={4} placeholder="Tell us anything else about the property — repairs needed, current occupancy, access issues, unique features, or anything that may affect the value or timeline. The more you share, the better we can help you." value={formData.additionalNotes} onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })} style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 14, fontFamily: 'inherit', lineHeight: 1.6 }} />
                    </div>

                    {/* Timeline */}
                    <div>
                      <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>* How fast do you need to sell? <span style={{ color: '#C9A84C' }}>— Click black down arrow on right below</span></label>
                      <div style={{ position: 'relative' }}>
                        <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} style={selectStyle}>
                          <option value="">Select timeline here...</option>
                          <option value="Immediately">Immediately (ASAP)</option>
                          <option value="1-2 Weeks">Within 1-2 Weeks</option>
                          <option value="1 Month">Within a Month</option>
                          <option value="Just curious">Just testing the market / Curious</option>
                        </select>
                        <div style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: 20, fontWeight: 900 }}>▼</div>
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <label style={{ display: 'block', fontWeight: 900, color: '#1a1a1a', marginBottom: 6, textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.5, fontStyle: 'italic' }}>* What price would you consider for a cash offer?</label>
                      <input type="text" required placeholder="EXAMPLE: $150,000" value={formData.priceExpectation} onChange={(e) => setFormData({ ...formData, priceExpectation: e.target.value })} style={{ width: '100%', background: '#f5f5f3', border: 'none', borderBottom: '2px solid #8B0000', padding: '14px', fontSize: 14, fontWeight: 700 }} />
                    </div>

                    {/* Property Condition Questions */}
                    <div style={{ background: '#f8f6f2', border: '1px solid #e0d8c8', borderRadius: 16, padding: '24px 20px' }}>
                      <p style={{ fontWeight: 900, color: '#0d0d0d', textTransform: 'uppercase', fontSize: 13, letterSpacing: 1, margin: '0 0 6px', textAlign: 'center' }}>Property Condition Questions</p>
                      <p style={{ fontSize: 12, color: '#555', fontStyle: 'italic', textAlign: 'center', margin: '0 0 20px', fontWeight: 700 }}>Required — "Not Sure" is always a valid answer</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {repairOptions.map((r) => (
                          <div key={r.key}>
                            <label style={{ display: 'block', fontWeight: 800, color: '#1a1a1a', marginBottom: 6, fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5 }}>{r.label}{r.required && <span style={{ color: '#8B0000', marginLeft: 4 }}>*</span>}</label>
                            <div style={{ position: 'relative' }}>
                              <select value={formData[r.key]} onChange={(e) => setFormData({ ...formData, [r.key]: e.target.value })} style={selectStyle}>
                                <option value="">Select one...</option>
                                {r.options.map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                              <div style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: 20, fontWeight: 900 }}>▼</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── NEW: Best Time to Call + Preferred Contact ── */}
                    <div style={{ background: '#f8f6f2', border: '1px solid #e0d8c8', borderRadius: 16, padding: '24px 20px' }}>
                      <p className='contact-pref-title' style={{ fontWeight: 900, color: '#0d0d0d', textTransform: 'uppercase', fontSize: 13, letterSpacing: 1, margin: '0 0 6px', textAlign: 'center' }}>Contact Preferences</p>
                      <p className='contact-pref-sub' style={{ fontSize: 12, color: '#555', fontStyle: 'italic', textAlign: 'center', margin: '0 0 4px', fontWeight: 700 }}>This helps us follow up the right way after reviewing your property information.</p>
                      <p className='contact-pref-helper' style={{ fontSize: 12, color: '#888', fontStyle: 'italic', textAlign: 'center', margin: '0 0 20px' }}>If you prefer a call or text, please include your phone number so we can follow up the way you requested.</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                        {/* Best Time to Call */}
                        <div>
                          <label style={{ display: 'block', fontWeight: 800, color: '#1a1a1a', marginBottom: 6, fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5 }}>Best Time to Reach You</label>
                          <div className='pref-grid-2' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                            {['Morning', 'Afternoon', 'Evening', 'Anytime', 'Text Me First'].map((opt) => {
                              const isSelected = formData.bestTimeToCall === opt;
                              return (
                                <button key={opt} type="button" onClick={() => setFormData({ ...formData, bestTimeToCall: isSelected ? '' : opt })} className='pref-btn' style={{ padding: '12px 10px', borderRadius: 8, border: isSelected ? '2px solid #8B0000' : '2px solid #d0c8b8', background: isSelected ? '#8B0000' : '#fff', color: isSelected ? '#fff' : '#555', fontWeight: 800, cursor: 'pointer', fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5, textAlign: 'center', transition: 'all 0.15s' }}>
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Preferred Contact Method */}
                        <div>
                          <label style={{ display: 'block', fontWeight: 800, color: '#1a1a1a', marginBottom: 6, fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5 }}>Preferred Contact Method</label>
                          <div className='pref-grid-2' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                            {['Call', 'Text', 'Email', 'No Call — Text Only'].map((opt) => {
                              const isSelected = formData.preferredContact === opt;
                              return (
                                <button key={opt} type="button" onClick={() => setFormData({ ...formData, preferredContact: isSelected ? '' : opt })} className='pref-btn' style={{ padding: '12px 10px', borderRadius: 8, border: isSelected ? '2px solid #8B0000' : '2px solid #d0c8b8', background: isSelected ? '#8B0000' : '#fff', color: isSelected ? '#fff' : '#555', fontWeight: 800, cursor: 'pointer', fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5, textAlign: 'center', transition: 'all 0.15s' }}>
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                        {(formData.preferredContact === 'Call' || formData.preferredContact === 'Text' || formData.preferredContact === 'No Call — Text Only') && (
                          <div style={{ marginTop: 16 }}>
                            <label style={{ display: 'block', fontWeight: 800, color: '#1a1a1a', marginBottom: 6, fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                              Phone Number <span style={{ color: '#C9A84C', fontSize: 11 }}>(Required for {formData.preferredContact})</span>
                            </label>
                            <input
                              type="tel"
                              placeholder="YOUR PHONE NUMBER"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              style={{ width: '100%', background: '#ffffff', border: '2px solid #C9A84C', borderRadius: 8, padding: '14px', fontSize: 15, fontWeight: 700, boxSizing: 'border-box' }}
                            />
                          </div>
                        )}

                    </div>
                    {/* ── END NEW SECTION ── */}

                    {/* Disclosure */}
                    <div style={{ border: '2px solid #C9A84C', padding: '14px', borderRadius: 8, background: '#fffcf7' }}>
                      <p style={{ fontSize: 11, color: '#444', lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
                        <strong>Disclosure:</strong> Tekton Property Solutions LLC is a real estate wholesaler, not a licensed agent. We may purchase properties below market value and assign contracts to third-party buyers for a profit. A written Wholesaler Disclosure Statement will be provided before any contract is binding. No obligation to sell.
                      </p>
                    </div>

                    {/* Inline validation error */}
                    {errors.step2 && (
                      <div style={{ background: '#fff0f0', border: '2px solid #8B0000', borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
                        <p style={{ color: '#8B0000', fontWeight: 900, fontSize: 14, margin: 0 }}>{errors.step2}</p>
                      </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                      <button type="button" onClick={() => {
                        if (formData.situation.length === 0) { setErrors({ step2: 'Please select at least one situation before submitting.' }); return; }
                        if (!formData.timeline) { setErrors({ step2: 'Please select how fast you need to sell before submitting.' }); return; }
                        if (!formData.priceExpectation || formData.priceExpectation.trim() === '') { setErrors({ step2: 'Please enter a price you would consider for a cash offer.' }); return; }
                        if (!formData.additionalNotes || formData.additionalNotes.trim() === '') { setErrors({ step2: 'Please tell us more about the property before submitting.' }); return; }
                        if (!formData.preferredContact) { setErrors({ step2: 'Please select your preferred contact method before submitting.' }); return; }
                        if (
                          (formData.preferredContact === 'Call' ||
                           formData.preferredContact === 'Text' ||
                           formData.preferredContact === 'No Call — Text Only') &&
                          !formData.phone.trim()
                        ) { setErrors({ step2: 'Please enter your phone number since you selected ' + formData.preferredContact + ' as your preferred contact method.' }); return; }
                        if (!formData.roofCondition) { setErrors({ step2: 'Please select the Roof Condition before submitting.' }); return; }
                        if (!formData.hvacCondition) { setErrors({ step2: 'Please select the Heating / Cooling System condition before submitting.' }); return; }
                        if (!formData.electricalCondition) { setErrors({ step2: 'Please select the Electrical System condition before submitting.' }); return; }
                        if (!formData.plumbingCondition) { setErrors({ step2: 'Please select the Plumbing Condition before submitting.' }); return; }
                        if (!formData.foundationCondition) { setErrors({ step2: 'Please select the Foundation / Structural condition before submitting.' }); return; }
                        if (!formData.overallCondition) { setErrors({ step2: 'Please select the Overall Property Condition before submitting.' }); return; }
                        setErrors({});
                        document.querySelector('form').submit();
                      }} className='submit-btn' style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '18px', borderRadius: 999, fontWeight: 900, fontSize: 18, border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1 }}>
                        Submit My Property →
                      </button>
                     <button type="button" onClick={() => { setStep(1); setTimeout(() => { document.getElementById('property-form').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50); }} style={{ background: 'transparent', border: 'none', color: '#666', fontSize: 16, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>← Back to Step 1</button>
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
                <p style={{ margin: '0 0 10px' }}>By providing your phone number and checking one or more SMS consent boxes on our contact form, you agree to receive text messages from Tekton Property Solutions LLC regarding your property inquiry.</p>
                <p style={{ margin: '0 0 10px' }}><strong>Message frequency may vary.</strong> Message and data rates may apply.</p>
                <p style={{ margin: '0 0 10px' }}>Text <strong>STOP</strong> to unsubscribe at any time. Text <strong>HELP</strong> for help.</p>
                <p style={{ margin: 0 }}>SMS consent is never required as a condition of any purchase, sale, or service. Mobile phone numbers and SMS consent information will not be sold, rented, shared, or transferred to third parties or affiliates for marketing or promotional purposes.</p>
              </div>
             <p style={{ margin: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
  <strong>Business Address:</strong> 6545 Market Ave N, Ste 100, Canton, OH 44721<br />
  <strong>Contact:</strong>{' '}<a href="mailto:nicole@tektonpropertysolutions.com" style={{ color: '#8B0000', fontWeight: 700, textDecoration: 'underline' }}>Email Nicole</a>
</p>
 
              </p>
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
          <a href="#property-form" className="cta-section-btn" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '20px 48px', borderRadius: 999, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3, fontSize: 18, textDecoration: 'none', display: 'inline-block' }}>Submit My Details Now</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#fff', padding: '48px 20px', borderTop: '6px solid #0d0d0d', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <img src="/tekton-emblem.png" alt="Tekton Emblem" style={{ height: 60, width: 'auto', objectFit: 'contain', marginBottom: 16 }} onError={e => e.target.style.display = 'none'} />
          <p style={{ color: '#666', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 6 }}>Ohio &amp; Nationwide</p>
          <p style={{ color: '#888', fontSize: 13, marginBottom: 6 }}>6545 Market Ave N, Ste 100, Canton, OH 44721</p>
          <p style={{ color: '#888', fontSize: 13, marginBottom: 20, overflowWrap: 'break-word', wordBreak: 'break-word' }}><a href="mailto:nicole@tektonpropertysolutions.com" style={{ color: '#8B0000', textDecoration: 'underline', fontWeight: 700, display: 'inline' }}>nicole@tektonpropertysolutions.com</a></p>
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
