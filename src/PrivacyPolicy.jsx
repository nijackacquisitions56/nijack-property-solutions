import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#f9f7f4', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: '#fff', borderBottom: '4px solid #C9A84C', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/tekton-emblem.png" alt="Tekton Logo" style={{ height: 48, width: 'auto', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
          <div>
            <div style={{ color: '#8B0000', fontWeight: 900, fontSize: 20, textTransform: 'uppercase', lineHeight: 1 }}>TEKTON</div>
            <div style={{ color: '#555', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 800 }}>PROPERTY SOLUTIONS LLC</div>
          </div>
        </Link>
        <Link to="/" style={{ background: '#8B0000', color: '#fff', padding: '10px 22px', borderRadius: 999, fontWeight: 900, fontSize: 13, textDecoration: 'none', border: '2px solid #C9A84C', textTransform: 'uppercase', letterSpacing: 1 }}>
          ← Back to Home
        </Link>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: '48px 40px', border: '2px solid #e8e0d0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>

          <h1 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(24px,4vw,38px)', marginBottom: 8, textAlign: 'center' }}>Privacy Policy</h1>
          <p style={{ color: '#888', fontSize: 13, textAlign: 'center', marginBottom: 40, fontStyle: 'italic' }}>Tekton Property Solutions LLC &nbsp;|&nbsp; Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 15, lineHeight: 1.9, color: '#444', fontWeight: 600 }}>

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>1. Who We Are</h2>
              <p style={{ margin: 0 }}>Tekton Property Solutions LLC is a real estate solutions company based in Ohio. We help property owners explore options for selling residential and other real estate directly, often in as-is condition. We are not licensed real estate agents. We operate in Ohio and nationwide.</p>
              <p style={{ margin: '10px 0 0' }}><strong>Business Address:</strong> 6545 Market Ave N, Ste 100, Canton, OH 44721<br /><strong>Phone:</strong> 330-889-8983<br /><strong>Email:</strong> nicole@tektonpropertysolutions.com</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>2. Information We Collect</h2>
              <p style={{ margin: 0 }}>When you submit our property inquiry form, we collect:</p>
              <ul style={{ margin: '10px 0 0', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Property address</li>
                <li>Property situation and condition details</li>
                <li>Selling timeline and price expectations</li>
                <li>SMS consent status</li>
              </ul>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>3. How We Use Your Information</h2>
              <p style={{ margin: 0 }}>Your information is used solely to:</p>
              <ul style={{ margin: '10px 0 0', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Review your property and respond to your inquiry</li>
                <li>Contact you about your property situation</li>
                <li>Send follow-up communications if you have consented</li>
                <li>Facilitate a potential property transaction through a licensed title company</li>
              </ul>
              <p style={{ margin: '12px 0 0' }}>We do not sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>4. Ohio SB 155 Wholesaler Disclosure</h2>
              <p style={{ margin: 0 }}>In compliance with <strong>Ohio Revised Code § 5301.95 (Ohio SB 155)</strong>, Tekton Property Solutions LLC discloses that we are real estate wholesalers — not licensed real estate agents or brokers — acting on our own behalf.</p>
              <p style={{ margin: '10px 0 0' }}>We may enter into purchase agreements at below-market value and assign those contracts to third-party buyers for a profit. A written Wholesaler Disclosure Statement will be provided to you and must be signed before any contract is binding.</p>
              <div style={{ background: '#f8f6f2', padding: '16px 20px', borderRadius: 10, borderLeft: '5px solid #C9A84C', marginTop: 12, fontSize: 14, fontStyle: 'italic' }}>
                You have the right to seek independent legal or professional advice before signing any agreement. There is no obligation to sell.
              </div>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>5. SMS &amp; Text Message Communications</h2>
              <p style={{ margin: 0 }}>If you provide your phone number and check the SMS consent box on our inquiry form, you agree to receive text messages from Tekton Property Solutions LLC. These messages may include property inquiry follow-up, appointment reminders, offer discussions, and transaction updates.</p>
              <p style={{ margin: '10px 0 0' }}><strong>Message frequency may vary.</strong> Message and data rates may apply.</p>
              <p style={{ margin: '10px 0 0' }}>To opt out at any time, reply <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>.</p>
              <p style={{ margin: '10px 0 0' }}>SMS consent is never required as a condition of any purchase, sale, or service. We do not share your phone number or consent status with third parties for their own marketing.</p>
              <p style={{ margin: '10px 0 0' }}>For full SMS terms, see our <Link to="/sms-terms" style={{ color: '#8B0000', textDecoration: 'underline' }}>SMS Terms &amp; Conditions</Link>.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>6. Data Security</h2>
              <p style={{ margin: 0 }}>We take reasonable steps to protect your information. Form submissions are processed through Formspree, a secure third-party service. We do not store payment or financial information.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>7. Your Rights</h2>
              <p style={{ margin: 0 }}>You may request that we delete your information or stop contacting you at any time by emailing nicole@tektonpropertysolutions.com or calling 330-889-8983.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>8. Changes to This Policy</h2>
              <p style={{ margin: 0 }}>We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated date. Continued use of our website constitutes acceptance of any updates.</p>
            </section>

          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/sms-terms" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>SMS Terms &amp; Conditions</Link>
          <Link to="/" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Back to Home</Link>
        </div>
        <p style={{ color: '#aaa', fontSize: 12, textAlign: 'center', marginTop: 20, fontStyle: 'italic' }}>© {new Date().getFullYear()} Tekton Property Solutions LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
