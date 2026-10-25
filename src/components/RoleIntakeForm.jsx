import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, Sparkles, Send, ShieldCheck, Clock, Layers, Cpu, FileText } from 'lucide-react';

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

export const SCHOLAR_PROJECTS = [
  {
    title: 'Deep Learning & Edge AI Telemetry (Dissertation & Capstone)',
    domain: 'AI, ML & Edge AI',
    desc: 'Comprehensive dissertation and applied capstone package: embedded edge computer vision model on ARM/Jetson with complete 120+ page doctoral dissertation documentation, experimental latency benchmarks, IEEE LaTeX manuscript, and viva defense slides.',
    specs: ['Applied Capstone Working Rig', '120+ Page Dissertation Dossier', 'IEEE LaTeX Manuscript', 'Plagiarism Report <10%', 'Defense Presentation PPT']
  },
  {
    title: 'Renewable Energy Microgrid & Inverter (Thesis Documentation)',
    domain: 'Power Electronics & Energy',
    desc: 'High-rigor thesis writing and simulation dossier for solar PV / battery microgrids with bidirectional converters. Includes mathematical formulation, MATLAB Simulink verification, empirical efficiency plots, and university-formatted thesis report.',
    specs: ["Master's / PhD Thesis Report", 'MATLAB / Simulink Files', 'Mathematical Equations Dossier', 'Reviewer Response Prep', 'Turnkey LaTeX Sources']
  },
  {
    title: 'Autonomous Robotics & SLAM (Applied Capstone & Thesis)',
    domain: 'Robotics & Automation',
    desc: 'Applied capstone practical system and master’s thesis documentation: ROS2 multi-sensor mobile robot with 2D LiDAR and IMU telemetry, full source code repository, system architecture diagrams, and 90+ page formatted thesis manuscript.',
    specs: ['Working Mobile Robotic Rig', 'ROS2 Telemetry Package', '90+ Page Thesis Manuscript', 'Circuit Schematics & BOM', 'Viva Rehearsal Q&A']
  },
  {
    title: 'Non-Invasive Biosignal Denoising (PhD Dissertation & Analysis)',
    domain: 'Biomedical Signal Processing',
    desc: 'Doctoral dissertation documentation and data analysis covering analog front-end (AFE) biosignal acquisition, wavelet denoising algorithms, and signal-to-noise ratio benchmarking formatted strictly to institutional guidelines.',
    specs: ['Dissertation Chapters 1-6', 'MATLAB Signal Processing', 'SNR Benchmark Analysis', 'IEEE Transactions Format', 'Viva Presentation Deck']
  },
  {
    title: 'LoRaWAN Multi-Hop Telemetry Mesh (Capstone & Research Docs)',
    domain: 'IoT & Wireless Telemetry',
    desc: 'Applied research capstone and technical documentation: multi-hop sub-GHz LoRa mesh telemetry network with packet delivery ratio evaluations, comprehensive thesis documentation, and experimental testbed data.',
    specs: ['Functional Hardware Testbed', 'Firmware Codebase', 'Complete Capstone Report', 'Empirical Telemetry Graphs', 'Publication Draft']
  }
];

export const STARTUP_PROJECTS = [
  {
    title: 'Ultra-Low-Power Asset Tracker with GPS & Cellular NB-IoT',
    domain: 'Connected Devices & Consumer IoT',
    desc: 'Commercial battery-powered asset tracker design featuring nRF9160 / SIM7080G cellular NB-IoT/LTE-M modem and Quectel GPS module. Deep sleep power consumption < 15µA with 3-year coin/LiPo battery life. Includes multi-layer PCB Gerber files, antenna impedance matching, 3D IP67 enclosure CAD, and cloud MQTT broker integration.',
    specs: ['nRF9160 / SIM7080G', 'Sub-15µA Deep Sleep', 'Multi-Layer PCB Gerbers', 'IP67 3D Enclosure CAD', 'Cloud MQTT API']
  },
  {
    title: 'Smart Industrial Vibration & Temperature Telemetry Gateway',
    domain: 'Industrial IoT & Telemetry',
    desc: 'Industrial condition monitoring node with high-bandwidth piezoelectric/MEMS vibration sensor, RS485 Modbus RTU interface, and isolated 24V industrial power supply. Transmits machine health telemetry to AWS IoT / Azure over Wi-Fi/Ethernet. Delivered with production BOM, enclosure, and firmware repository.',
    specs: ['Piezoelectric Sensor', 'RS485 Modbus RTU', '24V Industrial Isolation', 'AWS IoT Core Telemetry', 'Production Sourcing BOM']
  },
  {
    title: 'Battery Management System (BMS) with Active Cell Balancing & CAN Bus',
    domain: 'Clean Energy & EV Systems',
    desc: 'Automotive-grade 4S–16S lithium-ion BMS featuring TI/ADI analog front-end, active inductive cell balancing, high-side solid-state disconnect switch, and CAN 2.0B vehicle bus communication. Includes Altium design files, thermal simulation data, and safety certification dossier.',
    specs: ['4S–16S Active Balancing', 'CAN 2.0B Protocol', 'Solid-State Disconnect', 'Altium 365 CAD Files', 'Thermal Validation Pack']
  },
  {
    title: 'Smart Wearable Vitals Monitor with BLE & Cloud Dashboard',
    domain: 'Med-Tech & Wearables',
    desc: 'Miniaturized medical/fitness wearable prototype featuring Nordic nRF52840 BLE SoC, optical photoplethysmography (PPG), skin temperature sensor, and wireless Qi charging coil. Includes iOS/Android Bluetooth LE telemetry demo and biocompatible 3D resin enclosure.',
    specs: ['Nordic nRF52840 BLE', 'Optical PPG Sensor', 'Qi Wireless Inductive Charging', 'Biocompatible Resin CAD', 'Companion App Demo']
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

    // Scholar fields
    scholarLevel: 'Thesis Writing & Document Preparation',
    scholarDomain: 'AI, ML & Edge AI',
    scholarTitleChoice: SCHOLAR_PROJECTS[0].title,
    scholarCustomTitle: '',
    scholarCustomDescription: '',
    scholarDeliverables: 'Comprehensive Thesis / Dissertation (80–150+ Pages)',
    scholarNotes: '',

    // Startup fields
    startupStage: 'Functional Demo Prototype',
    startupDomain: 'Connected Devices & Consumer IoT',
    startupTitleChoice: STARTUP_PROJECTS[0].title,
    startupCustomTitle: '',
    startupCustomDescription: '',
    startupDeliverables: 'Turnkey Investor Demo Rig + Documentation',
    startupNotes: '',

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

  // Find active project details based on selected title
  const currentStudentProject = STUDENT_PROJECTS.find(p => p.title === formData.studentTitleChoice);
  const currentScholarProject = SCHOLAR_PROJECTS.find(p => p.title === formData.scholarTitleChoice);
  const currentStartupProject = STARTUP_PROJECTS.find(p => p.title === formData.startupTitleChoice);

  const isStudentCustom = formData.studentTitleChoice === 'Custom Title';
  const isScholarCustom = formData.scholarTitleChoice === 'Custom Title';
  const isStartupCustom = formData.startupTitleChoice === 'Custom Title';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name && !formData.phone) return;
    setIsSubmitting(true);

    let roleLabel = '';
    let projectTitle = '';
    let finalDescription = '';
    let payload = {};

    if (role === 'students') {
      roleLabel = 'Student Track (Capstones & Degrees)';
      if (isStudentCustom) {
        projectTitle = formData.studentCustomTitle || 'Custom Student Project';
        finalDescription = formData.studentCustomDescription || 'Custom project topic specified by student.';
      } else {
        projectTitle = formData.studentTitleChoice;
        finalDescription = currentStudentProject ? currentStudentProject.desc : '';
        if (formData.studentNotes) {
          finalDescription += `\n\n[Additional Student Notes / Viva Requirements]: ${formData.studentNotes}`;
        }
      }

      payload = {
        Track: roleLabel,
        'Project Classification': formData.studentProjectType,
        'Engineering Domain': formData.studentDomain,
        'Project Title': projectTitle,
        'Project Description': finalDescription,
        'Student Name': formData.name,
        'Contact Phone / WhatsApp': formData.phone,
        'Email Address': formData.email || 'Not provided',
        'College / University': formData.institutionOrCompany || 'Not provided'
      };
    } else if (role === 'scholars') {
      roleLabel = 'Scholar Track (Thesis, Dissertation & Capstone)';
      if (isScholarCustom) {
        projectTitle = formData.scholarCustomTitle || 'Custom Thesis / Dissertation Topic';
        finalDescription = formData.scholarCustomDescription || 'Custom topic specified by scholar.';
      } else {
        projectTitle = formData.scholarTitleChoice;
        finalDescription = currentScholarProject ? currentScholarProject.desc : '';
        if (formData.scholarNotes) {
          finalDescription += `\n\n[Additional Scholar Notes / Guidelines]: ${formData.scholarNotes}`;
        }
      }

      payload = {
        Track: roleLabel,
        'Service Classification': formData.scholarLevel,
        'Technical Domain': formData.scholarDomain,
        'Thesis / Capstone Topic': projectTitle,
        'Required Deliverables': formData.scholarDeliverables,
        'Thesis & Research Scope': finalDescription,
        'Scholar Name': formData.name,
        'Institution / University': formData.institutionOrCompany || 'Not provided',
        'Contact Phone / WhatsApp': formData.phone,
        'Official Email': formData.email || 'Not provided'
      };
    } else {
      roleLabel = 'Startup Founder Track (Commercial MVPs)';
      if (isStartupCustom) {
        projectTitle = formData.startupCustomTitle || 'Custom Venture Hardware MVP';
        finalDescription = formData.startupCustomDescription || 'Custom MVP vision specified by founder.';
      } else {
        projectTitle = formData.startupTitleChoice;
        finalDescription = currentStartupProject ? currentStartupProject.desc : '';
        if (formData.startupNotes) {
          finalDescription += `\n\n[Additional Founder Notes / BOM Scope]: ${formData.startupNotes}`;
        }
      }

      payload = {
        Track: roleLabel,
        'Prototype Stage': formData.startupStage,
        'Industry Domain': formData.startupDomain,
        'MVP Product Title': projectTitle,
        'Target Deliverables': formData.startupDeliverables,
        'Specifications & Timeline': finalDescription,
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
          _subject: `New FSK Project Intake: [${role.toUpperCase()}] ${projectTitle} - ${formData.name}`,
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

  const getActiveTitle = () => {
    if (role === 'students') {
      return isStudentCustom
        ? formData.studentCustomTitle || 'Custom Student Topic'
        : formData.studentTitleChoice;
    }
    if (role === 'scholars') {
      return isScholarCustom
        ? formData.scholarCustomTitle || 'Custom Research Paper'
        : formData.scholarTitleChoice;
    }
    return isStartupCustom
      ? formData.startupCustomTitle || 'Custom Venture MVP'
      : formData.startupTitleChoice;
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
            <span>Feasibility review in &lt; 2 hrs</span>
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
            { id: 'scholars', num: '02', label: 'Scholars & PhDs', sub: 'Thesis, Dissertation & Capstone', color: '#0284c7' },
            { id: 'startups', num: '03', label: 'Startup Founders', sub: 'Commercial MVPs', color: '#059669' }
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
            PROJECT INTAKE DISPATCHED!
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
            Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name || 'Engineer'}</strong>. Your project specifications for{' '}
            <strong style={{ color: 'var(--accent)' }}>"{getActiveTitle()}"</strong> have been securely transmitted to{' '}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600, color: '#090d16' }}>Project Title:</span>
              <span style={{ fontWeight: 600, color: '#090d16' }}>{getActiveTitle()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600, color: '#090d16' }}>Contact:</span>
              <span>{formData.phone || formData.email}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 600, color: '#090d16' }}>Next Step:</span>
              <span style={{ color: '#059669', fontWeight: 600 }}>Fixed BOM quote &amp; feasibility review in 2h</span>
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
                  scholarCustomTitle: '',
                  scholarCustomDescription: '',
                  scholarNotes: '',
                  startupCustomTitle: '',
                  startupCustomDescription: '',
                  startupNotes: ''
                });
              }}
              className="btn-primary"
              style={{ cursor: 'pointer', padding: '12px 24px' }}
            >
              Submit Another Project
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

              {/* Field 3: Project Title (Dropdown from provided list OR Custom Title) */}
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

                {/* If Custom Title is selected: show custom title input */}
                {isStudentCustom && (
                  <div style={{ marginTop: '8px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Enter your custom project title (e.g. Quadcopter Drone with Thermal Camera)..."
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

              {/* Field 4: Description — Auto-shows project description for provided titles, or custom description input for Custom Title */}
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

                    {/* Spec tags */}
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

                    {/* Additional Notes Textarea */}
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
              ROLE 2: SCHOLARS & PHDS
             ======================================================== */}
          {role === 'scholars' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Service Classification */}
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
                  Service / Document Classification *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {[
                    'Thesis Writing & Document Preparation',
                    'Dissertation Documentation',
                    'Capstone Project (Applied System)',
                    'Research Paper Preparation'
                  ].map((lvl) => {
                    const isSelected = formData.scholarLevel === lvl;
                    return (
                      <button
                        type="button"
                        key={lvl}
                        onClick={() => setFormData({ ...formData, scholarLevel: lvl })}
                        style={{
                          background: isSelected ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                          color: isSelected ? '#0284c7' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '10px 10px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        {lvl}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Domain */}
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
                  Technical Domain *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                  {[
                    'AI, ML & Edge AI',
                    'Power Electronics & Energy',
                    'Robotics & Automation',
                    'Biomedical Signal Processing',
                    'IoT & Wireless Telemetry'
                  ].map((dom) => {
                    const isSelected = formData.scholarDomain === dom;
                    return (
                      <button
                        type="button"
                        key={dom}
                        onClick={() => setFormData({ ...formData, scholarDomain: dom })}
                        style={{
                          background: isSelected ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                          color: isSelected ? '#0284c7' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '8px 10px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.75rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        {dom}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Research / Paper Title */}
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
                  Paper / Research Topic Title *
                </label>
                <div style={{ position: 'relative', marginBottom: isScholarCustom ? '12px' : '0' }}>
                  <select
                    value={formData.scholarTitleChoice}
                    onChange={(e) => {
                      const val = e.target.value;
                      const proj = SCHOLAR_PROJECTS.find(p => p.title === val);
                      setFormData({
                        ...formData,
                        scholarTitleChoice: val,
                        scholarDomain: proj ? proj.domain : formData.scholarDomain
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
                    <optgroup label="High-Impact Research Themes">
                      {SCHOLAR_PROJECTS.map((p, i) => (
                        <option key={i} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Custom Requirement">
                      <option value="Custom Title">✎ Custom Research Title / Base Paper DOI</option>
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

                {isScholarCustom && (
                  <div style={{ marginTop: '8px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Enter base paper DOI or custom research title..."
                      value={formData.scholarCustomTitle}
                      onChange={(e) => setFormData({ ...formData, scholarCustomTitle: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid #0284c7',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.86rem',
                        outline: 'none',
                        boxShadow: '0 0 0 3px rgba(2, 132, 199, 0.08)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Scholar Description: Auto-shows project description for provided titles, or custom description for Custom */}
              <div>
                {!isScholarCustom && currentScholarProject ? (
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
                        <FileText size={15} color="#0284c7" />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: '#0284c7', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          Research Scope &amp; Methodology
                        </span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#0284c7', fontWeight: 600, background: 'rgba(2, 132, 199, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                        Reproducible Data + LaTeX Manuscript
                      </span>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {currentScholarProject.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {currentScholarProject.specs.map((spec, sIdx) => (
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
                        Base Paper Equations / Target Journal / Notes (Optional):
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Paste base paper links, target journal (e.g. IEEE Transactions), or specific equation notes..."
                        value={formData.scholarNotes}
                        onChange={(e) => setFormData({ ...formData, scholarNotes: e.target.value })}
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
                        color: '#0284c7',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      Custom Research Description &amp; Equations *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your research objective, base paper methodology, target equations, and simulation/hardware requirements..."
                      value={formData.scholarCustomDescription}
                      onChange={(e) => setFormData({ ...formData, scholarCustomDescription: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid #0284c7',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.86rem',
                        outline: 'none',
                        resize: 'vertical',
                        lineHeight: 1.5,
                        boxShadow: '0 0 0 3px rgba(2, 132, 199, 0.08)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Deliverables Scope */}
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
                  Required Deliverables *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {[
                    'Full Thesis / Dissertation Documentation (80–150+ Pages)',
                    'Applied Capstone Working System + Documentation',
                    'Turnkey IEEE / Elsevier LaTeX Manuscript',
                    'Defense PPT, Code Files & Plagiarism Report (<10%)'
                  ].map((deliv) => {
                    const isSelected = formData.scholarDeliverables === deliv;
                    return (
                      <button
                        type="button"
                        key={deliv}
                        onClick={() => setFormData({ ...formData, scholarDeliverables: deliv })}
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
                          textAlign: 'left'
                        }}
                      >
                        {deliv}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              ROLE 3: STARTUP FOUNDERS
             ======================================================== */}
          {role === 'startups' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Prototype Stage */}
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
                    'Proof of Concept (PoC)',
                    'Functional Demo Prototype',
                    'Pre-Production MVP',
                    'Pilot Run (10-500 units)'
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
                          padding: '10px 8px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
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

              {/* Industry Domain */}
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
                  Industry Domain *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                  {[
                    'Connected Devices & Consumer IoT',
                    'Industrial IoT & Telemetry',
                    'Agri-Tech & Field Robotics',
                    'Med-Tech & Wearables',
                    'Clean Energy & EV Systems'
                  ].map((dom) => {
                    const isSelected = formData.startupDomain === dom;
                    return (
                      <button
                        type="button"
                        key={dom}
                        onClick={() => setFormData({ ...formData, startupDomain: dom })}
                        style={{
                          background: isSelected ? 'rgba(5, 150, 105, 0.08)' : '#ffffff',
                          border: isSelected ? '1.5px solid #059669' : '1px solid #cbd5e1',
                          color: isSelected ? '#059669' : 'var(--text-primary)',
                          borderRadius: '8px',
                          padding: '8px 10px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.75rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        {dom}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MVP Product Title */}
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
                  Product / MVP Name *
                </label>
                <div style={{ position: 'relative', marginBottom: isStartupCustom ? '12px' : '0' }}>
                  <select
                    value={formData.startupTitleChoice}
                    onChange={(e) => {
                      const val = e.target.value;
                      const proj = STARTUP_PROJECTS.find(p => p.title === val);
                      setFormData({
                        ...formData,
                        startupTitleChoice: val,
                        startupDomain: proj ? proj.domain : formData.startupDomain
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
                    <optgroup label="Turnkey Commercial MVP Archetypes">
                      {STARTUP_PROJECTS.map((p, i) => (
                        <option key={i} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Custom Requirement">
                      <option value="Custom Title">✎ Custom Hardware MVP (Type your product name)</option>
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

                {isStartupCustom && (
                  <div style={{ marginTop: '8px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Enter your product name or hardware vision..."
                      value={formData.startupCustomTitle}
                      onChange={(e) => setFormData({ ...formData, startupCustomTitle: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid #059669',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.86rem',
                        outline: 'none',
                        boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.08)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Startup Description: Auto-shows project description for provided titles, or custom description for Custom */}
              <div>
                {!isStartupCustom && currentStartupProject ? (
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
                        <FileText size={15} color="#059669" />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: '#059669', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          MVP Architecture &amp; Production Scope
                        </span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600, background: 'rgba(5, 150, 105, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                        100% IP Transfer &amp; NDA
                      </span>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {currentStartupProject.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {currentStartupProject.specs.map((spec, sIdx) => (
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
                        Specific Target Specs / BOM Budget / Timeline Notes (Optional):
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Add target unit BOM, battery life targets, investor demo date, or NDA notes..."
                        value={formData.startupNotes}
                        onChange={(e) => setFormData({ ...formData, startupNotes: e.target.value })}
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
                        color: '#059669',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      Custom MVP Description &amp; Technical Vision *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your hardware product concept, target unit cost, sensors/connectivity, enclosure requirements, and demo timeline..."
                      value={formData.startupCustomDescription}
                      onChange={(e) => setFormData({ ...formData, startupCustomDescription: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid #059669',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.86rem',
                        outline: 'none',
                        resize: 'vertical',
                        lineHeight: 1.5,
                        boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.08)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Target Deliverables */}
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
                  Deliverables Required *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {[
                    'Turnkey Investor Demo Rig + Documentation',
                    'Custom Multi-Layer PCB (Schematic + Gerber)',
                    '3D Enclosure CAD & Resin/FDM 3D Prints',
                    'Embedded Firmware (FreeRTOS) + Cloud API'
                  ].map((deliv) => {
                    const isSelected = formData.startupDeliverables === deliv;
                    return (
                      <button
                        type="button"
                        key={deliv}
                        onClick={() => setFormData({ ...formData, startupDeliverables: deliv })}
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
                          textAlign: 'left'
                        }}
                      >
                        {deliv}
                      </button>
                    );
                  })}
                </div>
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
                  {role === 'students' ? 'College / University' : role === 'scholars' ? 'Institution / Lab' : 'Company / Venture Name'}
                </label>
                <input
                  type="text"
                  placeholder={role === 'students' ? 'e.g. Anna University' : role === 'scholars' ? 'e.g. IIT Madras' : 'e.g. Protomates Tech'}
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
                <>Transmitting Specs to consultant.fsk@gmail.com...</>
              ) : (
                <>
                  <Send size={16} />
                  <span>
                    Submit {role === 'students' ? 'Student Project' : role === 'scholars' ? 'Research Intake' : 'Startup MVP'} Specs
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
              <div>Direct Lab Dispatch via consultant.fsk@gmail.com</div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
