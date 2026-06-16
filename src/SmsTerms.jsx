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
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: '48px 40px', border: '2px solid #e8e0d0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', overflowX: 'hidden' }}>

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
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>3. Message Frequency</h2>
              <p style={{ margin: 0 }}>Message frequency varies based on your inquiry status and the nature of your property situation. You may receive messages when we are actively reviewing your property, scheduling a follow-up, or processing a transaction. We will not send unsolicited bulk promotional messages.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>4. Message &amp; Data Rates</h2>
              <p style={{ margin: 0 }}>Message and data rates may apply to text messages sent to and received from Tekton Property Solutions LLC. Rates are determined by your mobile carrier and plan. Tekton Property Solutions LLC is not responsible for any charges incurred from your carrier.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>5. How to Opt Out</h2>
              <p style={{ margin: 0 }}>You may opt out of receiving SMS messages from Tekton Property Solutions LLC at any time by texting <strong>STOP</strong> to any message you receive from us. After opting out, you will receive one final confirmation message and no further SMS messages will be sent.</p>
              <p style={{ margin: '10px 0 0' }}>You may also opt out by contacting us directly:</p>
              <p style={{ margin: '8px 0 0', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                Email: <a href="mailto:nicole@tektonpropertysolutions.com" style={{ color: '#8B0000', textDecoration: 'underline' }}>nicole@tektonpropertysolutions.com</a>
              </p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>6. How to Get Help</h2>
              <p style={{ margin: 0 }}>For assistance with our SMS program, text <strong>HELP</strong> to any message you receive from us, or contact us at:</p>
              <p style={{ margin: '8px 0 0', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                Email: <a href="mailto:nicole@tektonpropertysolutions.com" style={{ color: '#8B0000', textDecoration: 'underline' }}>nicole@tektonpropertysolutions.com</a>
              </p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>7. Privacy &amp; Data Sharing</h2>
              <p style={{ margin: 0 }}>Your phone number and SMS consent status are collected solely for the purpose of communicating with you about your property inquiry.</p>
              <p style={{ margin: '10px 0 0' }}><strong>SMS consent and phone numbers are not sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. Your phone number and any information related to your SMS subscription will not be shared with any external entities, unless required by law or in connection with a legal obligation.</strong></p>
              <p style={{ margin: '10px 0 0' }}>For full details on how we handle your personal information, see our <Link to="/privacy-policy" style={{ color: '#8B0000', textDecoration: 'underline' }}>Privacy Policy</Link>.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>8. Supported Carriers</h2>
              <p style={{ margin: 0 }}>Our SMS program is supported by major US carriers including AT&amp;T, T-Mobile, Verizon, Sprint, and others. Carrier support may vary. We are not responsible for delays or failures in SMS delivery caused by carrier issues.</p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>9. Contact Information</h2>
              <p style={{ margin: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                <strong>Tekton Property Solutions LLC</strong><br />
                6545 Market Ave N, Ste 100<br />
                Canton, OH 44721<br />
                Email: <a href="mailto:nicole@tektonpropertysolutions.com" style={{ color: '#8B0000', textDecoration: 'underline' }}>nicole@tektonpropertysolutions.com</a>
          
              </p>
            </section>

            <div style={{ borderTop: '1px solid #e8e0d0' }} />

            <section>
              <h2 style={{ color: '#8B0000', fontWeight: 900, textTransform: 'uppercase', fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>10. Changes to These Terms</h2>
              <p style={{ margin: 0 }}>We may update these SMS Terms &amp; Conditions from time to time. Any changes will be reflected on this page with an updated date. Continued use of our SMS program after updates constitutes your acceptance of the revised terms.</p>
            </section>

          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/privacy-policy" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Privacy Policy</Link>
          <Link to="/" style={{ color: '#8B0000', fontWeight: 900, textDecoration: 'underline', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Back to Home</Link>
        </div>
        <p style={{ color: '#aaa', fontSize: 12, textAlign: 'center', marginTop: 20, fontStyle: 'italic' }}>© {new Date().getFullYear()} Tekton Property Solutions LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SmsTerms;
