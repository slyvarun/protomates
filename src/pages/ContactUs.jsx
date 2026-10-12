import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  Shield,
  Clock,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  FileText,
  Lock
} from 'lucide-react';

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
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (initialAudience) {
      setRole(initialAudience);
    }
  }, [initialAudience]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const roleLabel =
      role === 'students' ? 'Student (Academic Project)' : role === 'scholars' ? 'Professional Scholar' : 'Startup MVP';

    try {
      await fetch('https://formsubmit.co/ajax/info.protomates@gmail.com', {
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
          _subject: `New Protomates Project Inquiry from ${formData.name || 'Visitor'} [${roleLabel}]`,
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
    <div style={{ paddingTop: '100px', background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      {/* Header */}
      <section style={{ padding: '80px 48px 50px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(200, 255, 0, 0.08), transparent 70%)',
            filter: 'blur(120px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Initiate Engineering Consultation</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 8.5rem)',
              lineHeight: 0.88,
              letterSpacing: '2px',
              marginBottom: '28px'
            }}
          >
            LET'S BUILD YOUR <br />
            <span style={{ color: 'var(--accent)' }}>PROJECT &amp; PAPER</span>
          </h1>

          <p style={{ fontSize: '1.12rem', color: '#aaa', lineHeight: 1.85, maxWidth: '800px', margin: 0 }}>
            Share your project title, base paper abstract, or hardware MVP requirements. Our engineering leads will review your scope, provide a technical roadmap, and schedule a 1-on-1 discovery call within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '40px 48px 90px', background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '50px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Interactive Project Inquiry Form */}
          <div
            style={{
              background: '#0d0d12',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Sparkles size={16} color="var(--accent)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
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
                    background: 'rgba(200, 255, 0, 0.1)',
                    border: '1px solid var(--accent)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--white)', marginBottom: '12px' }}>
                  INTAKE RECEIVED!
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Thank you, <strong style={{ color: 'var(--white)' }}>{formData.name || 'Innovator'}</strong>. Your project specifications have been dispatched to <strong style={{ color: 'var(--accent)' }}>info.protomates@gmail.com</strong>. Our engineering leads will review your scope and follow up promptly.
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
                      letterSpacing: '1.5px',
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
                          background: role === p.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.03)',
                          color: role === p.id ? 'var(--black)' : '#bbb',
                          border: role === p.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                          padding: '10px 8px',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          fontWeight: role === p.id ? '700' : '400',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          textAlign: 'center'
                        }}
                      >
                        <div>{p.label}</div>
                        <div style={{ fontSize: '0.62rem', opacity: 0.8 }}>{p.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '1px', color: '#999', display: 'block', marginBottom: '6px' }}>
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
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '4px',
                        color: 'var(--white)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '1px', color: '#999', display: 'block', marginBottom: '6px' }}>
                      Contact Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your email or contact..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '4px',
                        color: 'var(--white)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* 3. Project Topic or Scope */}
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '1px', color: '#999', display: 'block', marginBottom: '6px' }}>
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
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: 'var(--white)',
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
                    fontSize: '0.82rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    marginTop: '6px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>Sending to info.protomates@gmail.com...</>
                  ) : (
                    <>Submit Inquiry To Engineering Team <Send size={15} /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Fast-Track Channels, Guarantee Badges & Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Direct Instant Channels Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '36px'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', marginBottom: '16px' }}>
                DIRECT FAST CHANNELS
              </h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Need immediate answers regarding base paper viability, hardware parts availability, or an urgent viva timeline? Reach out directly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="mailto:info.protomates@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 20px',
                    background: 'rgba(0, 229, 255, 0.05)',
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                    borderRadius: '6px',
                    color: 'var(--white)',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Mail size={24} color="#00e5ff" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#00e5ff', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Formal Scope Documents &amp; Papers
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>info.protomates@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Lab Guarantees Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #111116, #0a0a0e)',
                border: '1px solid rgba(200, 255, 0, 0.2)',
                borderRadius: '10px',
                padding: '30px'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                Protomates Client Protections
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: '100% Non-Disclosure Agreement (NDA)', desc: 'Your project ideas, proprietary datasets, and patents are legally protected.' },
                  { title: 'Physical Hardware Video Verification', desc: 'Watch your assembled device function live before final doorstep dispatch.' },
                  { title: 'Zero Plagiarism University Guarantee', desc: 'Every thesis and paper is authored from scratch with original diagrams.' }
                ].map((g, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px' }}>
                    <Shield size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.85rem' }}>{g.title}</strong>
                      <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#888' }}>{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ padding: '80px 48px', background: 'var(--black)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Frequently Answered Questions
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            EVERYTHING YOU NEED <br />
            <span style={{ color: 'var(--accent)' }}>TO KNOW</span>
          </h2>

          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: isOpen ? '1px solid rgba(200, 255, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '22px 28px',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--white)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span style={{ fontSize: '1rem', fontWeight: '600' }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="var(--accent)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 28px 24px', color: '#aaa', fontSize: '0.92rem', lineHeight: 1.8 }}>
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
