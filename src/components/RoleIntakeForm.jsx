import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Send,
  ShieldCheck,
  Clock,
  Video,
  PhoneCall,
  Mail,
  Calendar,
  FileText,
  Sparkles,
  Users
} from 'lucide-react';

export const STUDENT_PROJECTS = [
  {
    title: 'IoT Smart Agriculture & Automated Irrigation System',
    domain: 'Hybrid',
    desc: 'Automated irrigation & soil monitoring prototype using ESP32, capacitive soil moisture sensors, DHT22 temperature/humidity, and relay-controlled DC water pump. Features real-time Blynk/ThingsSpeak cloud dashboard, automatic threshold irrigation, and SMS alerts. Delivered with fully tested hardware, 80+ page project report, circuit schematic, and 1-on-1 viva defense coaching.',
    specs: ['ESP32 Dual-Core', 'Soil Moisture Sensor', 'Relay Pump Driver', 'Blynk / ThingsSpeak Cloud', 'Full Thesis & Viva Guide']
  },
  {
    title: 'Autonomous Obstacle Avoidance & Path-Planning Rover',
    domain: 'Hardware',
    desc: 'Multi-sensor robotic vehicle chassis powered by Arduino/ESP32, HC-SR04 ultrasonic sonar, infrared edge detectors, and L298N dual H-bridge motor driver. Implements real-time collision avoidance, servo-steered sensor panning, and dead-reckoning trajectory tracking. Includes working robot, commented firmware, circuit layout, and IEEE thesis report.',
    specs: ['Arduino / ESP32', 'Ultrasonic Sonar', 'Dual H-Bridge Driver', 'Geared DC Motors', 'Commented Code & Viva Q&A']
  },
  {
    title: 'Smart Energy Meter with Tamper Detection & Cloud Telemetry',
    domain: 'Hybrid',
    desc: 'Single-phase IoT digital energy meter utilizing ESP32, non-invasive CT current sensor (SCT-013), and ZMPT101B voltage transformer. Computes real-time RMS voltage, current, active power, and power factor with magnetic tamper alerts and cloud billing dashboard. Delivered with safety-isolated casing, full report, and viva guide.',
    specs: ['ESP32 Wi-Fi', 'SCT-013 CT Sensor', 'ZMPT101B Voltage', 'OLED + Web Dashboard', 'Safety Isolated Casing']
  },
  {
    title: 'Edge AI Wearable Health Monitoring & Fall Detection Band',
    domain: 'Hybrid',
    desc: 'Compact wearable health telemetry band using ESP32-WROOM, MAX30102 pulse oximeter (SpO2 & heart rate), and MPU6050 6-axis accelerometer. Features an embedded TinyML fall detection algorithm and emergency alert broadcast via Wi-Fi/Bluetooth. Complete with 3D-printed enclosure, firmware, and presentation PPT.',
    specs: ['ESP32-WROOM', 'MAX30102 PPG', 'MPU6050 6-Axis IMU', 'TinyML Fall Detection', '3D Printed Wristband Case']
  },
  {
    title: 'Brushless DC (BLDC) Motor Speed Controller with Regenerative Braking',
    domain: 'Hardware',
    desc: 'High-efficiency 3-phase BLDC electronic speed controller (ESC) based on STM32 / Arduino and discrete MOSFET inverter bridge. Implements Hall-effect sensor commutation, PWM speed regulation, overcurrent protection, and regenerative energy recovery telemetry. Includes breadboard/PCB rig, simulation waveform analysis, and thesis report.',
    specs: ['STM32 / Arduino', '3-Phase Inverter Bridge', 'Hall commutation', 'PWM closed-loop control', 'Oscilloscope Waveform Data']
  },
  {
    title: 'RFID & Biometric Attendance System with Web Dashboard',
    domain: 'Hybrid',
    desc: 'Contactless institutional attendance node featuring NodeMCU/ESP32, RC522 RFID reader, R307 optical fingerprint scanner, and 16x2 I2C character LCD. Syncs attendance logs to a real-time Google Firebase / MySQL web dashboard with automated Excel report generation. Includes assembled rig, database scripts, and viva preparation Q&A.',
    specs: ['ESP32 / NodeMCU', 'R307 Fingerprint', 'RC522 RFID', 'Firebase / MySQL Cloud', 'Excel Export Report']
  },
  {
    title: 'Smart Home Automation & Gesture-Controlled Appliances',
    domain: 'Hybrid',
    desc: 'Comprehensive smart living system with dual-mode control: hand gestures via APDS-9960 gesture sensor, plus local Wi-Fi web interface. Drives high-voltage AC loads via opto-isolated 4-channel relay board with zero-crossing detection. Includes working desktop demonstration rig, safety enclosures, source code, and full project documentation.',
    specs: ['ESP32 Wi-Fi', 'APDS-9960 Gesture', '4-Channel Opto-Relay', 'Web Control Interface', 'Safety Enclosures']
  }
];

export default function RoleIntakeForm({
  initialRole = 'students',
  onClose,
  isHeroInline = false
}) {
  const [role, setRole] = useState(initialRole);

  // Form State
  const [formData, setFormData] = useState({
    // Student fields
    studentProjectType: 'Major Project',
    studentDomain: 'Hybrid',
    studentTitleChoice: STUDENT_PROJECTS[0].title,
    studentCustomTitle: '',
    studentCustomDescription: '',
    studentNotes: '',

    // Scholar fields (Streamlined 1-on-1 Review)
    scholarService: 'Thesis Writing & Document Preparation',
    scholarMeetPreference: '1-on-1 Google Meet / Screen-Share',
    scholarIdea: '',

    // Startup fields (Streamlined 1-on-1 Founder Meet)
    startupStage: 'Functional Demo Prototype',
    startupMeetPreference: '1-on-1 Google Meet / Video Call',
    startupIdea: '',

    // Common Contact Fields
    name: '',
    phone: '',
    email: '',
    institutionOrCompany: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync role if prop changes
  React.useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  const currentStudentProject = STUDENT_PROJECTS.find(p => p.title === formData.studentTitleChoice);
  const isStudentCustom = formData.studentTitleChoice === 'Custom Title';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name && !formData.phone) return;
    setIsSubmitting(true);

    let roleLabel = '';
    let subjectTitle = '';
    let payload = {};

    if (role === 'students') {
      roleLabel = 'Student Track (Capstones & Degrees)';
      let finalDescription = '';
      if (isStudentCustom) {
        subjectTitle = formData.studentCustomTitle || 'Custom Student Project';
        finalDescription = formData.studentCustomDescription || 'Custom project topic specified by student.';
      } else {
        subjectTitle = formData.studentTitleChoice;
        finalDescription = currentStudentProject ? currentStudentProject.desc : '';
        if (formData.studentNotes) {
          finalDescription += `\n\n[Additional Student Notes / Viva Requirements]: ${formData.studentNotes}`;
        }
      }

      payload = {
        Track: roleLabel,
        'Project Classification': formData.studentProjectType,
        'Engineering Domain': formData.studentDomain,
        'Project Title': subjectTitle,
        'Project Description': finalDescription,
        'Student Name': formData.name,
        'Contact Phone / WhatsApp': formData.phone,
        'Email Address': formData.email || 'Not provided',
        'College / University': formData.institutionOrCompany || 'Not provided'
      };
    } else if (role === 'scholars') {
      roleLabel = 'Scholar Track (1-on-1 Research & Thesis Consultation)';
      subjectTitle = `${formData.scholarService} (1-on-1 Meet)`;

      payload = {
        Track: roleLabel,
        'Service Requested': formData.scholarService,
        'Preferred 1-on-1 Discussion Mode': formData.scholarMeetPreference,
        'Research / Thesis Idea Details': formData.scholarIdea,
        'Scholar Name': formData.name,
        'Institution / University': formData.institutionOrCompany || 'Not provided',
        'Contact Phone / WhatsApp': formData.phone,
        'Official Email': formData.email || 'Not provided'
      };
    } else {
      roleLabel = 'Startup Founder Track (1-on-1 Engineering Feasibility Meet)';
      subjectTitle = `1-on-1 Founder Meet [${formData.startupStage}]`;

      payload = {
        Track: roleLabel,
        'Prototyping Stage': formData.startupStage,
        'Preferred 1-on-1 Meet Mode': formData.startupMeetPreference,
        'Hardware Idea & Target Scope': formData.startupIdea,
        'Founder Name': formData.name,
        'Company / Stealth Venture': formData.institutionOrCompany || 'Not provided',
        'Contact Phone / WhatsApp': formData.phone,
        'Work Email': formData.email || 'Not provided'
      };
    }

    try {
      await fetch('https://formsubmit.co/ajax/consultant.fsk@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          _subject: `New FSK Inquiry: [${role.toUpperCase()}] ${subjectTitle} - ${formData.name}`,
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
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: isHeroInline ? 'clamp(20px, 4vw, 36px)' : 'clamp(24px, 4vw, 40px)',
        boxShadow: '0 20px 45px -10px rgba(0, 82, 255, 0.08), 0 2px 10px rgba(15, 23, 42, 0.04)',
        position: 'relative'
      }}
    >
      {/* Track Selector Navigation Switcher */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
              Step 1 // Choose Track
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748b' }}>
            <Clock size={13} color="var(--accent)" />
            <span>Feasibility &amp; Meet Scheduling &lt; 2 hrs</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            background: '#f8fafc',
            padding: '6px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}
        >
          {[
            { id: 'students', num: '01', label: 'Students', sub: 'Capstones & Degrees', color: '#0052ff' },
            { id: 'scholars', num: '02', label: 'Scholars & PhDs', sub: '1-on-1 Research Meet', color: '#0284c7' },
            { id: 'startups', num: '03', label: 'Startup Founders', sub: '1-on-1 Founder Meet', color: '#059669' }
          ].map((item) => {
            const isActive = role === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setRole(item.id)}
                style={{
                  background: isActive ? '#ffffff' : 'transparent',
                  border: isActive ? `1.5px solid ${item.color}` : '1.5px solid transparent',
                  borderRadius: '9px',
                  padding: '10px 8px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.06)' : 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', fontWeight: 700, color: item.color }}>
                    {item.num}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: isActive ? 800 : 600, color: isActive ? '#090d16' : '#64748b' }}>
                    {item.label}
                  </span>
                </div>
                <div style={{ fontSize: '0.64rem', color: isActive ? item.color : '#94a3b8', fontWeight: isActive ? 600 : 500 }}>
                  {item.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submitted Success Confirmation Screen */}
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '36px 16px' }}>
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

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.85rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              margin: '0 0 10px'
            }}
          >
            {role === 'startups'
              ? '1-ON-1 FOUNDER MEET REQUESTED!'
              : role === 'scholars'
              ? '1-ON-1 SCHOLAR REVIEW REQUESTED!'
              : 'PROJECT INTAKE DISPATCHED!'}
          </h3>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.94rem',
              lineHeight: 1.6,
              maxWidth: '540px',
              margin: '0 auto 20px'
            }}
          >
            Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name || 'Innovator'}</strong>. Your inquiry has been securely dispatched to{' '}
            <strong>consultant.fsk@gmail.com</strong>.
          </p>

          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '16px 20px',
              maxWidth: '480px',
              margin: '0 auto 28px',
              textAlign: 'left',
              fontSize: '0.82rem',
              color: '#475569',
              lineHeight: 1.6
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600, color: '#090d16' }}>Track:</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'capitalize' }}>{role}</span>
            </div>
            {role !== 'students' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600, color: '#090d16' }}>Meet Mode:</span>
                <span style={{ fontWeight: 600, color: 'var(--accent)' }}>
                  {role === 'scholars' ? formData.scholarMeetPreference : formData.startupMeetPreference}
                </span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600, color: '#090d16' }}>Contact:</span>
              <span>{formData.phone || formData.email}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 600, color: '#090d16' }}>Next Step:</span>
              <span style={{ color: '#059669', fontWeight: 600 }}>Calendar meet link &amp; review in &lt; 2h</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  ...formData,
                  name: '',
                  phone: '',
                  studentCustomTitle: '',
                  studentCustomDescription: '',
                  studentNotes: '',
                  scholarIdea: '',
                  startupIdea: ''
                });
              }}
              className="btn-primary"
              style={{ cursor: 'pointer', padding: '12px 24px' }}
            >
              Submit Another Request
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="btn-ghost"
                style={{ cursor: 'pointer', padding: '12px 20px', border: '1px solid #cbd5e1' }}
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* ========================================================
              ROLE 1: STUDENTS (Major/Minor, Domain, Title, Description)
             ======================================================== */}
          {role === 'students' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Field 1: Major or Minor Project */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Project Classification *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {['Major Project', 'Minor Project'].map((type) => {
                    const isSelected = formData.studentProjectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, studentProjectType: type })}
                        style={{
                          background: isSelected ? 'rgba(0, 82, 255, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid var(--accent)' : '1px solid #cbd5e1',
                          color: isSelected ? 'var(--accent)' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '12px 14px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: isSelected ? 'var(--accent)' : '#cbd5e1'
                          }}
                        />
                        <span>{type}</span>
                        <span style={{ fontSize: '0.7rem', color: isSelected ? 'var(--accent)' : '#94a3b8' }}>
                          {type === 'Major Project' ? '(Final Year)' : '(Mini Project)'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 2: Domain (hardware, software, hybrid) */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Domain *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { id: 'Hardware', desc: 'Circuit & Sensors' },
                    { id: 'Software', desc: 'Code & ML/AI' },
                    { id: 'Hybrid', desc: 'Hardware + App' }
                  ].map((dom) => {
                    const isSelected = formData.studentDomain === dom.id;
                    return (
                      <button
                        type="button"
                        key={dom.id}
                        onClick={() => setFormData({ ...formData, studentDomain: dom.id })}
                        style={{
                          background: isSelected ? 'rgba(0, 82, 255, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid var(--accent)' : '1px solid #cbd5e1',
                          color: isSelected ? 'var(--accent)' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '10px 8px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.82rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        <div>{dom.id}</div>
                        <div style={{ fontSize: '0.66rem', color: isSelected ? 'var(--accent)' : '#94a3b8' }}>
                          {dom.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 3: Project Title */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Project Title *
                </label>
                <div style={{ position: 'relative', marginBottom: isStudentCustom ? '12px' : '0' }}>
                  <select
                    value={formData.studentTitleChoice}
                    onChange={(e) => {
                      const val = e.target.value;
                      const proj = STUDENT_PROJECTS.find(p => p.title === val);
                      setFormData({
                        ...formData,
                        studentTitleChoice: val,
                        studentDomain: proj ? proj.domain : formData.studentDomain
                      });
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '0.86rem',
                      outline: 'none',
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none'
                    }}
                  >
                    <optgroup label="Popular Verified Capstone Projects">
                      {STUDENT_PROJECTS.map((p, i) => (
                        <option key={i} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Custom Requirement">
                      <option value="Custom Title">✎ Custom Title (Type your own topic)</option>
                    </optgroup>
                  </select>
                  <ChevronDown
                    size={16}
                    style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: '#64748b'
                    }}
                  />
                </div>

                {isStudentCustom && (
                  <div style={{ marginTop: '8px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Enter your custom project title..."
                      value={formData.studentCustomTitle}
                      onChange={(e) => setFormData({ ...formData, studentCustomTitle: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid var(--accent)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.86rem',
                        outline: 'none',
                        boxShadow: '0 0 0 3px rgba(0, 82, 255, 0.08)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Field 4: Description */}
              <div>
                {!isStudentCustom && currentStudentProject ? (
                  <div
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FileText size={15} color="var(--accent)" />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          Project Description &amp; Deliverables
                        </span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600, background: 'rgba(5, 150, 105, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                        Hardware Rig + Full Thesis Included
                      </span>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {currentStudentProject.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {currentStudentProject.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            color: '#475569'
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div style={{ marginTop: '4px' }}>
                      <label
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          color: '#64748b',
                          display: 'block',
                          marginBottom: '4px'
                        }}
                      >
                        Additional Custom Requirements or College Viva Guidelines (Optional):
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Add special components you need, submission deadlines, or guide instructions..."
                        value={formData.studentNotes}
                        onChange={(e) => setFormData({ ...formData, studentNotes: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          color: 'var(--text-primary)',
                          fontSize: '0.82rem',
                          outline: 'none',
                          resize: 'vertical',
                          lineHeight: 1.5
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      Custom Project Description *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your custom project idea, components needed, expected deliverables, and college viva requirements..."
                      value={formData.studentCustomDescription}
                      onChange={(e) => setFormData({ ...formData, studentCustomDescription: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid var(--accent)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.86rem',
                        outline: 'none',
                        resize: 'vertical',
                        lineHeight: 1.5,
                        boxShadow: '0 0 0 3px rgba(0, 82, 255, 0.08)'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================
              ROLE 2: SCHOLARS & PHDS (Streamlined 1-on-1 Review)
             ======================================================== */}
          {role === 'scholars' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  background: 'rgba(2, 132, 199, 0.05)',
                  border: '1px solid rgba(2, 132, 199, 0.2)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Users size={22} color="#0284c7" />
                <div style={{ fontSize: '0.84rem', color: '#0369a1', lineHeight: 1.4 }}>
                  <strong>1-on-1 Scholar Engineering Review:</strong> Connect directly with our research project leads for thesis documentation, dissertation structuring, or applied capstone systems.
                </div>
              </div>

              {/* Service Needed */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Service / Document Requirement *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {[
                    'Thesis Writing & Document Preparation',
                    'Dissertation Documentation',
                    'Capstone Project (Applied System)',
                    'Research Paper Preparation'
                  ].map((srv) => {
                    const isSelected = formData.scholarService === srv;
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData({ ...formData, scholarService: srv })}
                        style={{
                          background: isSelected ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                          color: isSelected ? '#0284c7' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred 1-on-1 Meet Mode */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Preferred 1-on-1 Discussion Mode *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {[
                    { mode: '1-on-1 Google Meet / Screen-Share', icon: Video },
                    { mode: 'Direct Phone / WhatsApp Call', icon: PhoneCall },
                    { mode: 'Email Technical Review & Written Dossier', icon: Mail }
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.scholarMeetPreference === item.mode;
                    return (
                      <button
                        type="button"
                        key={item.mode}
                        onClick={() => setFormData({ ...formData, scholarMeetPreference: item.mode })}
                        style={{
                          background: isSelected ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                          color: isSelected ? '#0284c7' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          textAlign: 'left'
                        }}
                      >
                        <Icon size={15} color={isSelected ? '#0284c7' : '#64748b'} />
                        <span>{item.mode}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brief Idea & Thesis Scope Details */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Brief Details of Your Research Idea / Topic *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share your research paper topic, base paper DOI/link, target equations, or university thesis submission deadline..."
                  value={formData.scholarIdea}
                  onChange={(e) => setFormData({ ...formData, scholarIdea: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.86rem',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.5
                  }}
                />
              </div>
            </div>
          )}

          {/* ========================================================
              ROLE 3: STARTUP FOUNDERS (Streamlined 1-on-1 Founder Meet)
             ======================================================== */}
          {role === 'startups' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  background: 'rgba(5, 150, 105, 0.05)',
                  border: '1px solid rgba(5, 150, 105, 0.2)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Users size={22} color="#059669" />
                <div style={{ fontSize: '0.84rem', color: '#047857', lineHeight: 1.4 }}>
                  <strong>1-on-1 Engineering &amp; MVP Feasibility Meet:</strong> Skip bureaucratic menus. Share a few brief details of your idea, and we will schedule a confidential technical review with our senior hardware leads.
                </div>
              </div>

              {/* Prototyping Stage */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Venture Prototyping Stage *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                  {[
                    'Concept / PoC',
                    'Functional Demo Prototype',
                    'Production-Ready MVP'
                  ].map((stg) => {
                    const isSelected = formData.startupStage === stg;
                    return (
                      <button
                        type="button"
                        key={stg}
                        onClick={() => setFormData({ ...formData, startupStage: stg })}
                        style={{
                          background: isSelected ? 'rgba(5, 150, 105, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #059669' : '1px solid #cbd5e1',
                          color: isSelected ? '#059669' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '10px 10px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        {stg}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred 1-on-1 Discussion Mode */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Preferred 1-on-1 Discussion Mode *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {[
                    { mode: '1-on-1 Google Meet / Video Call', icon: Video },
                    { mode: 'Direct Phone / WhatsApp Call', icon: PhoneCall },
                    { mode: 'Written Feasibility & BOM Review', icon: Mail }
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.startupMeetPreference === item.mode;
                    return (
                      <button
                        type="button"
                        key={item.mode}
                        onClick={() => setFormData({ ...formData, startupMeetPreference: item.mode })}
                        style={{
                          background: isSelected ? 'rgba(5, 150, 105, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #059669' : '1px solid #cbd5e1',
                          color: isSelected ? '#059669' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          textAlign: 'left'
                        }}
                      >
                        <Icon size={15} color={isSelected ? '#059669' : '#64748b'} />
                        <span>{item.mode}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brief Details of Hardware Idea */}
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#475569',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Brief Details of Your Hardware Idea / Vision *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us briefly about your hardware concept, key target deliverables (e.g. PCB, 3D enclosure, firmware), or investor demo timeline..."
                  value={formData.startupIdea}
                  onChange={(e) => setFormData({ ...formData, startupIdea: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.86rem',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.5
                  }}
                />
              </div>
            </div>
          )}

          {/* ========================================================
              COMMON: Contact Information (Name, Phone/WhatsApp, Email/Inst)
             ======================================================== */}
          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--accent)', textTransform: 'uppercase' }}>
              Step 2 // Direct Contact Details
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                  {role === 'startups' ? 'Founder / Lead Name *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.86rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.86rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.86rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                  {role === 'students' ? 'College / University' : role === 'scholars' ? 'Institution / Lab' : 'Company / Project Name'}
                </label>
                <input
                  type="text"
                  placeholder={role === 'students' ? 'e.g. Anna University' : role === 'scholars' ? 'e.g. IIT Madras' : 'e.g. Stealth Venture'}
                  value={formData.institutionOrCompany}
                  onChange={(e) => setFormData({ ...formData, institutionOrCompany: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.86rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '14px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                boxShadow: '0 6px 20px -4px rgba(0, 82, 255, 0.35)'
              }}
            >
              {isSubmitting ? (
                <>Transmitting Request to consultant.fsk@gmail.com...</>
              ) : (
                <>
                  <Send size={16} />
                  <span>
                    {role === 'students'
                      ? 'Submit Student Project Specs'
                      : role === 'scholars'
                      ? 'Schedule 1-on-1 Scholar Review'
                      : 'Schedule 1-on-1 Founder Consultation (Under NDA)'}
                  </span>
                </>
              )}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '0.74rem', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} color="#059669" />
                <span>NDA &amp; 100% IP Ownership Guaranteed</span>
              </div>
              <span>•</span>
              <div>Direct Dispatch to consultant.fsk@gmail.com</div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
