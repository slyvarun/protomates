import React, { useState } from 'react';
import PrototypeModal from './PrototypeModal';
import { getAssetUrl } from '../utils/assetUrl';

const prototypes = [
  {
    id: 1,
    badge: 'EDA / PCB',
    watermark: 'PCB',
    cat: 'PCB Designing',
    title: 'High-Density Multi-Layer PCB Template',
    specs: 'Multi-layer routing • Impedance matching • SMD layout • Production Gerbers',
    img: getAssetUrl('pcb_design_template.jpg'),
    category: 'PCB Designing & EDA CAD',
    desc: 'Professional multi-layer high-speed PCB template featuring impedance-controlled routing, FPGA/SoC integration, gold surface plating, and production Gerber files.',
    chips: ['Altium Designer', 'Multi-Layer Stackup', 'Impedance Matched', 'Production Gerbers']
  },
  {
    id: 2,
    badge: 'ESP32 IoT',
    watermark: 'ESP32',
    cat: 'IoT Prototyping',
    title: 'ESP32 Smart Telemetry & Sensor Node',
    specs: 'Live OLED display • Dual-core Wi-Fi/BLE • Sensor bus • Real-time cloud sync',
    img: getAssetUrl('esp32_iot.jpg'),
    category: 'IoT Prototyping & Wireless',
    desc: 'Complete ESP32 IoT development prototype equipped with dual-core processing, OLED dashboard, I2C sensor fusion, Wi-Fi telemetry, and MQTT cloud sync.',
    chips: ['ESP32 WROOM', 'OLED Display', 'I2C Sensors', 'Wi-Fi & BLE', 'MQTT Cloud Sync']
  },
  {
    id: 3,
    badge: 'ARDUINO',
    watermark: 'ARDUINO',
    cat: 'Embedded Prototyping',
    title: 'Arduino Mechatronics & Automation Rig',
    specs: 'Sensor shield • Servo control • 16x2 Telemetry LCD • Modular breadboard',
    img: getAssetUrl('arduino_prototype.jpg'),
    category: 'Microcontroller Prototyping',
    desc: 'Precision Arduino Uno robotics and automation workbench featuring servo motors, digital sensor shields, telemetry LCD display, and real-time I/O control.',
    chips: ['Arduino Uno', 'Robotics Shield', 'Servo Actuator', 'Character LCD', 'Real-Time I/O']
  },
  {
    id: 4,
    badge: 'AI / ML',
    watermark: 'AI / ML',
    cat: 'AI/ML Hardware',
    title: 'Edge AI Vision & Neural Network Unit',
    specs: 'On-device neural inference • Smart camera • Bounding box detection • ARM NPU',
    img: getAssetUrl('aiml_hardware.jpg'),
    category: 'AI/ML Hardware Systems',
    desc: 'Real-time edge artificial intelligence prototype running deep neural network inference with integrated camera module, Jetson/ARM processor, and live video analysis.',
    chips: ['Jetson Nano / ARM', 'Camera Module', 'Neural Network', 'Edge AI Inference', 'OpenCV']
  },
  {
    id: 5,
    badge: 'ACADEMIC',
    watermark: 'CAPSTONE',
    cat: 'Academic Project',
    title: 'Autonomous Robotics Capstone & Documentation',
    specs: 'Autonomous chassis • Custom PCB layout • Full project documentation • Viva prep',
    img: getAssetUrl('academic_prototype.jpg'),
    category: 'Academic Final Year Project',
    desc: 'IEEE-standard autonomous mobile robotics system complete with obstacle navigation, custom circuit shield, telemetry dashboard, full thesis report, and viva guide.',
    chips: ['IEEE Publication Standard', 'Custom PCB Shield', 'Telemetry Screen', 'Full Thesis & Viva']
  },
  {
    id: 6,
    badge: 'ALL FIELDS',
    watermark: 'SYSTEM',
    cat: 'Multi-Field Prototype',
    title: 'Industrial Environmental Telemetry Unit',
    specs: 'Gas & climate probes • Rugged enclosure • Wireless RF module • Clean harness',
    img: getAssetUrl('multifield_prototype.jpg'),
    category: 'Cross-Domain Prototype',
    desc: 'Multi-domain engineering prototype designed for environmental sensing, smart agriculture, and industrial automation inside a custom ruggedized enclosure.',
    chips: ['Multi-Sensor Array', 'Wireless RF / GSM', 'Precision Enclosure', 'Industrial 4.0', 'Smart Agri']
  }
];

export default function Work() {
  const [selectedProto, setSelectedProto] = useState(null);

  return (
    <section id="work" style={{ background: 'var(--black)' }}>
      <div className="section-label">Cutting-Edge Prototypes</div>
      <h2 className="section-title">FEATURED<br />PROJECTS</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '60px'
        }}
      >
        {prototypes.map((proto) => (
          <div
            key={proto.id}
            onClick={() => setSelectedProto(proto)}
            style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '16/11',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              backgroundImage: `url("${proto.img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '2px',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.8), 0 0 20px rgba(200,255,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Dark Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(3,3,3,0.92) 15%, rgba(3,3,3,0.4) 60%, rgba(3,3,3,0.2) 100%)',
                zIndex: 1
              }}
            />

            {/* Top Badge */}
            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                zIndex: 2,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '2px',
                padding: '4px 10px',
                background: 'rgba(3,3,3,0.85)',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                backdropFilter: 'blur(4px)'
              }}
            >
              {proto.badge}
            </div>

            {/* Watermark */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '4px',
                color: 'rgba(200,255,0,0.12)',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            >
              {proto.watermark}
            </div>

            {/* Content Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '2.5px',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }} />
                {proto.cat}
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.65rem',
                  letterSpacing: '1.5px',
                  color: 'var(--white)',
                  lineHeight: 1.15,
                  marginBottom: '8px'
                }}
              >
                {proto.title}
              </h4>

              <div style={{ fontSize: '0.8rem', color: '#aaa', lineHeight: 1.5, marginBottom: '12px' }}>
                {proto.specs}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '2px',
                  color: 'var(--white)',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Click To Inspect Prototype <span>↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <PrototypeModal prototype={selectedProto} onClose={() => setSelectedProto(null)} />
    </section>
  );
}
