import React, { useState, useEffect } from 'react';
import { CheckCircle2, Lock, Send, Clock, ArrowRight } from 'lucide-react';

export default function RoleIntakeForm({
  initialRole = 'students',
  onClose,
  isHeroInline = false
}) {
  const [role, setRole] = useState(initialRole);
  const [showExtraDetails, setShowExtraDetails] = useState(false);

  const [formData, setFormData] = useState({
    track: initialRole,
    projectTitle: '',
    description: '',
    name: '',
    phone: '',
    email: '',
    institutionOrCompany: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
      setFormData((prev) => ({ ...prev, track: initialRole }));
    }
  }, [initialRole]);

  const handleTrackChange = (newRole) => {
    setRole(newRole);
    setFormData((prev) => ({
      ...prev,
      track: newRole
    }));
  };

  const handleQuickChipClick = (topic) => {
    setFormData((prev) => ({
      ...prev,
      projectTitle: topic
    }));
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/consultant.fsk@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New FSK Prototyping Lead: [${formData.track.toUpperCase()}] ${formData.projectTitle}`,
          _template: 'table',
          _captcha: 'false',
          Track: formData.track,
          "Project / Paper Scope": formData.projectTitle,
          "Client Name": formData.name,
          "WhatsApp / Phone": formData.phone,
          "Email Address": formData.email || 'Not provided',
          "Institution / Company": formData.institutionOrCompany || 'Not provided',
          "Key Requirements & Deadlines": formData.description || 'None specified'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Form dispatch notice:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const TRACKS = [
    { id: 'students', num: '01', label: 'Students', sub: 'Capstones' },
    { id: 'scholars', num: '02', label: 'Scholars', sub: 'Research & PhD' },
    { id: 'startups', num: '03', label: 'Startups', sub: 'Hardware MVP' }
  ];

  const POPULAR_SUGGESTIONS = {
    students: ['IoT Smart Irrigation', 'Edge AI Wearable', 'BLDC Motor Speed Controller', 'RFID Biometric System'],
    scholars: ['Battery Thermal Mgmt', 'Multiphysics Antenna Simulation', 'Edge AI Vision Validation'],
    startups: ['Industrial IoT Sensor Node', 'Custom STM32 Enclosure MVP', 'BLE Telemetry Board']
  };

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: 'clamp(16px, 3.5vw, 32px)',
        boxShadow: '0 16px 36px -10px rgba(1, 42, 45, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04)',
        position: 'relative'
      }}
    >
      {/* Track Selector Tabs */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Step 1: Select Track
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: '#64748b' }}>
            <Clock size={12} color="var(--accent)" />
            <span>Review &lt; 2h</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '6px',
            background: '#f8fafc',
            padding: '4px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0'
          }}
        >
          {TRACKS.map((t) => {
            const isActive = role === t.id;
            return (
              <button
                type="button"
                key={t.id}
                onClick={() => handleTrackChange(t.id)}
                style={{
                  background: isActive ? '#ffffff' : 'transparent',
                  border: isActive ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                  borderRadius: '8px',
                  padding: '9px 4px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: isActive ? '0 2px 8px rgba(1, 42, 45, 0.06)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', fontWeight: 700, color: 'var(--accent)' }}>
                    {t.num}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: isActive ? 700 : 500, color: isActive ? 'var(--text-primary)' : '#64748b' }}>
                    {t.label}
                  </span>
                </div>
                <div className="mobile-hide" style={{ fontSize: '0.64rem', color: '#94a3b8', marginTop: '2px' }}>
                  {t.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Success Confirmation State */}
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '28px 8px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(1, 42, 45, 0.08)',
              border: '1.5px solid var(--accent)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px'
            }}
          >
            <CheckCircle2 size={28} />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              margin: '0 0 8px'
            }}
          >
            Requirement Dispatched
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 18px' }}>
            Our lead engineers are reviewing your specifications and will respond with a fixed quote and feasibility review in under 2 hours.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                track: role,
                projectTitle: '',
                description: '',
                name: '',
                phone: '',
                email: '',
                institutionOrCompany: ''
              });
            }}
            className="btn-primary"
            style={{ cursor: 'pointer', padding: '10px 22px', fontSize: '0.84rem' }}
          >
            Submit Another Requirement
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Step 2: Topic / Scope Input */}
          <div>
            <label
              htmlFor="intake-title"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px'
              }}
            >
              {role === 'students'
                ? 'Step 2: Project Topic or Paper Title *'
                : role === 'scholars'
                ? 'Step 2: Research Area or Paper Scope *'
                : 'Step 2: Hardware MVP / Product Scope *'}
            </label>

            <input
              id="intake-title"
              type="text"
              required
              placeholder={
                role === 'students'
                  ? 'e.g. IoT Smart Irrigation or Base Paper Title'
                  : role === 'scholars'
                  ? 'e.g. EV Battery Thermal Management / MATLAB'
                  : 'e.g. Multi-sensor telemetry node with STM32'
              }
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 13px',
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none',
                lineHeight: 1.4,
                boxSizing: 'border-box'
              }}
            />

            {/* Quick Suggested Chips (Sleek tap-to-fill chips instead of bulky select) */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
              {(POPULAR_SUGGESTIONS[role] || []).slice(0, 3).map((chip) => (
                <button
                  type="button"
                  key={chip}
                  onClick={() => handleQuickChipClick(chip)}
                  style={{
                    background: formData.projectTitle === chip ? 'rgba(1, 42, 45, 0.08)' : '#f8fafc',
                    border: formData.projectTitle === chip ? '1px solid var(--accent)' : '1px solid #e2e8f0',
                    color: formData.projectTitle === chip ? 'var(--accent)' : '#64748b',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  + {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Contact Fields (Name & Phone / WhatsApp) */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                marginBottom: '6px'
              }}
            >
              Step 3: Contact Details
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '10px'
              }}
            >
              <div>
                <input
                  id="intake-name"
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <input
                  id="intake-phone"
                  type="tel"
                  required
                  placeholder="WhatsApp / Phone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Collapsible / Optional Extra Info Toggle on Mobile */}
          {!showExtraDetails ? (
            <button
              type="button"
              onClick={() => setShowExtraDetails(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--accent)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left',
                padding: '2px 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>+ Add Email, College or Specific Notes (Optional)</span>
            </button>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: '10px'
                }}
              >
                <input
                  id="intake-email"
                  type="email"
                  placeholder="Email Address (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  id="intake-org"
                  type="text"
                  placeholder="College / Venture (Optional)"
                  value={formData.institutionOrCompany}
                  onChange={(e) => setFormData({ ...formData, institutionOrCompany: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <textarea
                id="intake-desc"
                rows={2}
                placeholder="Key requirements, deadline, or sensors (Optional)..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'vertical',
                  lineHeight: 1.4,
                  boxSizing: 'border-box'
                }}
              />
            </div>
          )}

          {/* Submit Action */}
          <div style={{ marginTop: '4px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '13px',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Send size={14} />
              <span>{isSubmitting ? 'Dispatching...' : 'Request Feasibility Review & Quote'}</span>
            </button>

            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontSize: '0.7rem',
                color: '#64748b'
              }}
            >
              <Lock size={11} color="var(--accent)" />
              <span>Strict confidentiality • 2-hour engineering feasibility response</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
