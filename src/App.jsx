import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: '',
    condition: '',
    reason: '',
    timeline: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Property Information Submitted Successfully!');
  };

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#000', color: '#fff', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', background: 'rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(201,168,76,0.2)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontWeight: 900, fontSize: 24, color: '#C9A84C', letterSpacing: 1 }}>TEKTON</div>
          <div style={{ height: 20, width: 1, background: 'rgba(255,255,255,0.3)' }} />
          <div style={{ fontSize: 11, fontWeight: 600, color: '#aaa', letterSpacing: 2, textTransform: 'uppercase' }}>Property Solutions</div>
        </div>
        <a href="tel:1234567890" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16, border: '2px solid #C9A84C', padding: '10px 20px', borderRadius: 4, transition: 'all 0.3s' }}>
          CALL US: (123) 456-7890
        </a>
      </nav>

      {/* Main Hero Wrapper */}
      <div style={{ position: 'relative', padding: '100px 20px', textAlign: 'center', borderBottom: '8px solid #C9A84C', backgroundImage: 'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(80,10,10,0.78) 100%)' }} />
        
        {/* Balanced Inner Hero Container */}
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

          <p style={{ fontSize: 17, fontWeight: 600, maxWidth: 680, margin: '0 auto 36px', lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: 1 }}>
            No Repairs. No Commissions. Close On Your Timeline.
          </p>
        </div>

        {/* Feature Badges Layout */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 36, position: 'relative', zIndex: 2 }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(201,168,76,0.5)', padding: '14px 28px', borderRadius: 999 }}>
            <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>Closing Timeline: 14-30 Days</span>
          </div>
          <div style={{ background: '#C9A84C', color: '#000', padding: '14px 28px', borderRadius: 999, fontWeight: 900, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>
            Get My Property Reviewed
          </div>
        </div>

        {/* Dynamic Step-By-Step Conversion Form */}
        <div style={{ maxWidth: 600, margin: '40px auto 0', background: '#ffff', color: '#333', padding: 40, borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', textAlign: 'left', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30, borderBottom: '2px solid #eee', paddingBottom: 15 }}>
            <span style={{ fontWeight: 700, color: step === 1 ? '#8B0000' : '#aaa' }}>1. Property Info</span>
            <span style={{ fontWeight: 700, color: step === 2 ? '#8B0000' : '#aaa' }}>2. Contact Details</span>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: 'uppercase' }}>Property Address *</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc', boxSizing: 'border-bottom' }} placeholder="123 Main St, Cuyahoga Falls, OH" />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: 'uppercase' }}>Property Type</label>
                  <select name="propertyType" value={formData.propertyType} onChange={handleChange} style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc' }}>
                    <option value="">Select Type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="condo">Condo / Townhouse</option>
                    <option value="land">Vacant Land</option>
                  </select>
                </div>
                <div style={{ marginBottom: 30 }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: 'uppercase' }}>Property Condition</label>
                  <select name="condition" value={formData.condition} onChange={handleChange} style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc' }}>
                    <option value="">Select Condition</option>
                    <option value="excellent">Excellent (Move-in Ready)</option>
                    <option value="good">Good (Minor TLC Needed)</option>
                    <option value="fair">Fair (Needs Structural/Cosmetic Fixes)</option>
                    <option value="poor">Poor (Studs-Out / Total Rehab)</option>
                  </select>
                </div>
                <button type="button" onClick={() => setStep(2)} style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '16px', borderRadius: 999, fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer' }}>
                  Next Step →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: 'uppercase' }}>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: 'uppercase' }}>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: 30 }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: 'uppercase' }}>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ccc', boxSizing: 'border-box' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <button type="submit" style={{ width: '100%', background: '#8B0000', color: '#fff', padding: '16px', borderRadius: 999, fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer' }}>
                    Submit My Property →
                  </button>
                  <button type="button" onClick={() => setStep(1)} style={{ background: 'transparent', border: 'none', color: '#666', fontSize: 12, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>
                    ← Back to Step 1
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
