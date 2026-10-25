import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, Mail } from 'lucide-react';
import LinkedInIcon from '../components/LinkedInIcon';
import RoleIntakeForm from '../components/RoleIntakeForm';

const FAQS = [
  {
    q: 'Do you deliver the physical working hardware to my home/college?',
    a: 'Yes, absolutely. We securely package and dispatch fully assembled, tested hardware rigs anywhere across India with high-grade protective packaging. You also receive an unboxing and operation video showing your exact device running before it leaves our lab.'
  },
  {
    q: 'Will you explain the source code and prepare me for the college viva defense?',
    a: 'Yes! Every student project includes a dedicated 1-on-1 screen-share session with the project engineer. We explain the circuit schematic, hardware wiring, line-by-line firmware/code logic, and provide a curated viva Q&A cheat sheet covering examiner questions.'
  },
  {
    q: 'How do you guarantee original, plagiarism-free academic and research reports?',
    a: 'All thesis reports and research papers are authored from scratch by technical writers with postgraduate degrees in engineering. We format strictly to your university guidelines or IEEE/Springer/Elsevier LaTeX specifications, ensuring plagiarism is well below institutional thresholds (< 10%).'
  },
  {
    q: 'Can you implement custom research papers from IEEE Transactions or Scopus journals?',
    a: 'Yes, that is our specialty. Provide us with your target base paper PDF or DOIs, and our researchers will replicate the mathematical equations, simulate the architecture in MATLAB/Python/ANSYS, and build the physical validation hardware.'
  },
  {
    q: 'For startup MVPs, who owns the intellectual property (IP) and source code?',
    a: 'You own 100% of all intellectual property, design files, schematics, source code repositories, and CAD models. Upon completion, we sign formal IP assignment documentation and adhere strictly to mutual Non-Disclosure Agreements (NDAs).'
  },
  {
    q: 'What if my college guide or investor requests changes after delivery?',
    a: 'We provide complimentary revision and bug-fixing support for up to 30 days post-delivery. If your college guide requests adjustments to block diagrams, additional parameters in the report, or sensor calibration tweaks, we implement them promptly.'
  }
];

export default function ContactUs({ initialAudience = 'students' }) {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Hero Header */}
      <section style={{ padding: '120px 48px 40px', background: 'transparent', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', textAlign: 'left' }}>
          <div className="section-label">Engineering Project Intake</div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              margin: '0 0 18px',
              maxWidth: '920px',
              color: 'var(--text-primary)'
            }}
          >
            <span>DISPATCH YOUR SPECIFICATIONS. </span>
            <br />
            <span style={{ color: 'var(--accent)' }}>WE DELIVER WORKING HARDWARE.</span>
          </h1>

          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 0 32px'
            }}
          >
            Fill in your project topic, academic base paper, or custom MVP requirements. Our engineering team provides feasibility reviews and fixed BOM quotes within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '40px 48px 90px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Interactive Tailored Project Inquiry Form */}
          <div className="mobile-card-compact">
            <RoleIntakeForm initialRole={initialAudience || 'students'} />
          </div>

          {/* Right Column: Direct Channels & Guarantees */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Direct Instant Channels Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                DIRECT FAST CHANNELS
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Need immediate answers regarding base paper viability, hardware parts availability, or an urgent viva timeline? Reach out directly.
              </p>

              <a
                href="mailto:consultant.fsk@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  background: 'rgba(1, 42, 45,  0.05)',
                  border: '1px solid rgba(1, 42, 45,  0.2)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  marginBottom: '12px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(1, 42, 45,  0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(1, 42, 45,  0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Mail size={22} color="var(--accent)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Formal Scope Documents &amp; Papers
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>consultant.fsk@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/company/fskprototypingservices"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  background: 'rgba(10, 102, 194, 0.05)',
                  border: '1px solid rgba(10, 102, 194, 0.25)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0a66c2';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(10, 102, 194, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10, 102, 194, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <LinkedInIcon size={32} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#0a66c2', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    LinkedIn
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>FSK Prototyping Services</div>
                </div>
              </a>
            </div>

            {/* Lab Guarantees Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '18px', fontWeight: 700 }}>
                FSK Client Protections
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: '100% Non-Disclosure Agreement (NDA)', desc: 'Your project ideas, proprietary datasets, and patents are legally protected.' },
                  { title: 'Physical Hardware Video Verification', desc: 'Watch your assembled device function live before final doorstep dispatch.' },
                  { title: 'Zero Plagiarism University Guarantee', desc: 'Every thesis and paper is authored from scratch with original diagrams.' }
                ].map((g, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.4 }}>—</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}>{g.title}</strong>
                      <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#64748b' }}>{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ padding: '80px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="section-label">Frequently Answered Questions</div>
          <h2 className="section-title">
            EVERYTHING YOU NEED <br />
            <span style={{ color: 'var(--accent)' }}>TO KNOW</span>
          </h2>

          <div style={{ maxWidth: '960px', marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: isOpen ? '1px solid var(--accent)' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span style={{ fontSize: '0.98rem', fontWeight: 600 }}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="var(--accent)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
