import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SmsTerms = () => {
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

          <h1 style={{ color: '#0d0d0d', fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(22px,4vw,36px)', marginBottom: 8, textAlign: 'center' }}>SMS Terms &amp; Conditions</h1>
          <p style={{ color: '#888', fontSize: 13, textAlign: 'center', marginBottom: 40, fontStyle: 'italic' }}>Tekton Property Solutions LLC &nbsp;|&nbsp; Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div style={{ background: '#f8f6f2', border: '2px solid #C9A84C', borderRadius: 14, padding: '20px 24px', marginBottom: 36, fontSize: 14, lineHeight: 1.8, color: '#444', fontWeight: 600 }}>
            <p style={{ margin: '0 0 6px', fontWeight: 900, color: '#0d0d0d', textTransform: 'uppercase', fontSize: 13, letterSpacing: 1 }}>Summary</p>
            <p style={{ margin: 0 }}>By opting in, you agree to receive text messages from <strong>Tekton Property Solutions LLC</strong> at the number you provided. Message frequency may vary. Message &amp; data rates may apply. Text <strong>STOP</strong> to unsubscribe. Text <strong>HELP</strong> for help. Consent is not required to purchase or receive any service.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 15, lineHeight: 1.9, color: '#444', fontWeight: 600 }}>

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>1. Program Description</h2>
              <p style={{ margin: 0 }}>Tekton Property Solutions LLC operates an SMS messaging program to communicate with individuals who have submitted a property inquiry through our website at tektonpropertysolutions.com. Messages sent through this program may include:</p>
              <ul style={{ margin: '10px 0 0', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Property inquiry follow-up and responses</li>
                <li>Appointment scheduling and reminders</li>
                <li>Cash offer discussions and updates</li>
                <li>Transaction status updates</li>
                <li>General customer service communications</li>
              </ul>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>2. How to Opt In</h2>
              <p style={{ margin: 0 }}>You opt in to receive SMS messages from Tekton Property Solutions LLC by checking one or more SMS consent checkboxes on our property inquiry form at tektonpropertysolutions.com. Checking a box confirms your agreement to these SMS Terms &amp; Conditions.</p>
              <p style={{ margin: '10px 0 0' }}>Consent is not required as a condition of purchasing any property, receiving any service, or submitting a property inquiry.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>3. Message
