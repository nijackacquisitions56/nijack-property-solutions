import React, { useState } from 'react';

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', propertyAddress: '', propertyState: '',
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

      <nav style={{ background: '#ffffff', borderBottom: '4px solid #C9A84C', position: 'sticky', top: 0, zIndex: 50 }}>
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src="/tekton-emblem.jpg" 
        alt="Tekton Property Solutions"
        style={{
          width: '85px', 
          height: '85px',
          marginRight: '15px', // Fixed gap control
          display: 'block'
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: '#8B0000', fontWeight: 900, fontSize: '32px', margin: 0, lineHeight: '1' }}>TEKTON</h1>
        <div style={{ color: '#0A2240', fontWeight: 800, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>PROPERTY SOLUTIONS LLC</div>
      </div>
    </div>

    <a href="#property-form" style={{ background: '#8B0000', color: '#fff', padding: '10px 20px', borderRadius: '999px', fontWeight: 900, textDecoration: 'none', border: '2px solid #C9A84C', fontSize: '14px', textTransform: 'uppercase' }}>GET YOUR OFFER</a>
  </div>
</nav>

      <section style={{ position: 'relative', color: '#fff', padding: '100px 20px', borderBottom: '8px solid #C9A84C', textAlign: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(80,10,10,0.78))' }} />
        <div style={{ maxWidth: 950, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(38px, 6.5vw, 68px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.15, marginBottom: 24 }}>SELL YOUR HOUSE <span style={{ color: '#C9A84C' }}>FAST</span> FOR <span style={{ color: '#C9A84C' }}>CASH</span></h1>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 600, marginBottom: 36, textTransform: 'uppercase' }}>No Repairs. No Commissions. Close On Your Timeline.</p>
          <a href="#property-form" style={{ background: '#C9A84C', color: '#0d0d0d', padding: '14px 32px', borderRadius: 999, fontWeight: 900, textDecoration: 'none', textTransform: 'uppercase' }}>GET MY PROPERTY REVIEWED</a>
        </div>
      </section>

      <section id="property-form" style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', background: '#fff', borderRadius: 32, boxShadow: '0 8px 48px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ background: '#C9A84C', padding: '32px', textAlign: 'center' }}>
            <h2 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>Start Your Successful Closing</h2>
          </div>
          <form action="https://formspree.io/f/xaqpozbn" method="POST" style={{ padding: '40px' }}>
            <input type="hidden" name="fullName" value={formData.fullName} />
            <input type="hidden" name="phone" value={formData.phone} />
            <input type="hidden" name="email" value={formData.email} />
            <input type="hidden" name="propertyAddress" value={formData.propertyAddress} />
            <input type="hidden" name="propertyState" value={formData.propertyState} />
            <input type="hidden" name="situation" value={formData.situation.join(', ')} />
            
            {step === 1 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <input type="text" placeholder="FULL NAME" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} style={{ background: '#e2ded7', border: 'none', padding: '16px', fontWeight: 800, width: '100%' }} />
                <input type="tel" placeholder="PHONE" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ background: '#e2ded7', border: 'none', padding: '16px', fontWeight: 800, width: '100%' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 16 }}>
                  <input type="text" placeholder="ADDRESS" value={formData.propertyAddress} onChange={e => setFormData({...formData, propertyAddress: e.target.value})} style={{ background: '#e2ded7', border: 'none', padding: '16px', fontWeight: 800 }} />
                  <select value={formData.propertyState} onChange={e => setFormData({...formData, propertyState: e.target.value})} style={{ background: '#e2ded7', border: 'none', padding: '16px', fontWeight: 800 }}>
                    <option value="">ST</option>
                    {['OH','AL','AZ','CA','FL','GA','IL','IN','KY','MI','NC','NY','PA','TX'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <button type="button" onClick={() => setStep(2)} style={{ background: '#0d0d0d', color: '#C9A84C', padding: '20px', border: '2px solid #C9A84C', cursor: 'pointer' }}>CONTINUE →</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{ fontWeight: 900 }}>What is the situation?</p>
                {situations.map(s => (
                  <button key={s} type="button" onClick={() => handleCheck(s)} style={{ background: formData.situation.includes(s) ? '#8B0000' : '#e2ded7', color: formData.situation.includes(s) ? '#fff' : '#000', border: 'none', padding: '10px', cursor: 'pointer' }}>{s}</button>
                ))}
                <button type="submit" style={{ background: '#8B0000', color: '#fff', padding: '20px', cursor: 'pointer' }}>SUBMIT PROPERTY</button>
                <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>← BACK</button>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer style={{ background: '#fff', padding: '48px 20px', textAlign: 'center', borderTop: '6px solid #0d0d0d' }}>
        <img src="/tekton-emblem.jpg" alt="Tekton Property Solutions" style={{ height: '55px', margin: '0 auto 20px' }} />
        <p style={{ fontWeight: 800, fontSize: 13, color: '#888' }}>TEKTON PROPERTY SOLUTIONS LLC</p>
      </footer>
    </div>
  );
};

export default App;
