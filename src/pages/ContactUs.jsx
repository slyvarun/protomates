import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

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
  const [role, setRole] = useState(initialAudience || 'students');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name && !formData.phone) return;
    setIsSubmitting(true);

    const roleLabel =
      role === 'students'
        ? 'Students (Academic Project)'
        : role === 'scholars'
        ? 'Professional Scholars'
        : 'Startup MVP';

    try {
      await fetch('https://formsubmit.co/ajax/consultant.fsk@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name || 'Anonymous',
          phone: formData.phone,
          track: roleLabel,
          topic: formData.topic,
          _subject: `New FSK Project Inquiry from ${formData.name || 'Visitor'} [${roleLabel}]`,
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

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
          {/* Left Column: Interactive Project Inquiry Form */}
          <div
            className="mobile-card-compact"
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: 'clamp(20px, 4vw, 36px)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Engineering Intake Wizard
              </span>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(5, 150, 105, 0.1)',
                    border: '1px solid #059669',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={34} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  INTAKE RECEIVED!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name || 'Innovator'}</strong>. Your project specifications have been dispatched to our engineering leads. We will review your scope and follow up promptly.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', topic: '' });
                    }}
                    className="btn-primary"
                    style={{ cursor: 'pointer' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* 1. Target Role Tabs */}
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    Select Your Track
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {[
                      { id: 'students', label: 'Students', sub: 'Academic Capstone' },
                      { id: 'scholars', label: 'Scholars', sub: 'Research Paper' },
                      { id: 'startups', label: 'Startups', sub: 'Commercial MVP' }
                    ].map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setRole(p.id)}
                        style={{
                          background: role === p.id ? 'var(--accent)' : '#f8fafc',
                          color: role === p.id ? '#ffffff' : 'var(--text-secondary)',
                          border: role === p.id ? '1px solid var(--accent)' : '1px solid #e2e8f0',
                          padding: '10px 8px',
                          borderRadius: '8px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          fontWeight: role === p.id ? '700' : '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          textAlign: 'center'
                        }}
                      >
                        <div>{p.label}</div>
                        <div style={{ fontSize: '0.62rem', opacity: 0.85 }}>{p.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                      Contact Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your email or phone..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* 3. Project Topic or Scope */}
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                    Project Topic / Paper Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your hardware idea, base paper topic, or required deliverables..."
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: 1.5
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px',
                    fontSize: '0.85rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>Sending to consultant.fsk@gmail.com...</>
                  ) : (
                    <>Submit Inquiry To Engineering Team</>
                  )}
                </button>
              </form>
            )}
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
                  background: 'rgba(0, 82, 255, 0.05)',
                  border: '1px solid rgba(0, 82, 255, 0.2)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Formal Scope Documents &amp; Papers
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>consultant.fsk@gmail.com</div>
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
