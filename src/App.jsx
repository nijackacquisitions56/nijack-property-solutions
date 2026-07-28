import React, { useState } from 'react';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is included with my reservation?",
      a: "Your reservation includes full access to all scheduled activities, amenities, and complimentary event materials upon arrival."
    },
    {
      q: "Can I modify or cancel my booking?",
      a: "Yes, modifications and cancellations can be made up to 48 hours prior to the event date through your confirmation email."
    },
    {
      q: "Is there an age requirement?",
      a: "Attendees must be 18 years or older, or accompanied by a parent/guardian."
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fdfbf7', color: '#0d0d0d', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* 1. HERO SECTION */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 16px' }}>
          Exclusive Experience
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#555', maxWidth: 680, margin: '0 auto 32px', lineHeight: 1.5 }}>
          Reserve your spot today and join us for an unforgettable event.
        </p>
      </section>

      {/* 2. FAQ SECTION */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: 'clamp(22px,4vw,32px)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 32, color: '#0d0d0d' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #e0d8c8', overflow: 'hidden' }}>
                <button 
                  type="button" 
                  onClick={() => setOpenFaq(isOpen ? null : i)} 
                  style={{ 
                    width: '100%', 
                    padding: '20px 24px', 
                    textAlign: 'left', 
                    background: 'none', 
                    border: 'none', 
                    fontWeight: 900, 
                    fontSize: 15, 
                    textTransform: 'uppercase', 
                    letterSpacing: 1, 
                    color: '#0d0d0d', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    gap: 12 
                  }}
                >
                  <span style={{ flex: 1 }}>{f.q}</span>
                  <span style={{ color: '#8B0000', fontSize: 20 }}>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: '#555', fontSize: 15, lineHeight: 1.6 }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
