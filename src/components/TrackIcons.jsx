import React from 'react';

// Bespoke High-Tech SVG Icon for Students (Academic Capstones & Projects)
// Geometric Graduation Prism + Microchip Silicon Die + PCB Trace Nodes
export function StudentAcademicIcon({ size = 24, color = '#c8ff00', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Hexagonal Graduation Cap Diamond */}
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower Cap Brim & Foundation */}
      <path
        d="M6 9.5V15.5C6 17.5 8.686 19.5 12 19.5C15.314 19.5 18 17.5 18 15.5V9.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Microchip Core Die */}
      <rect
        x="9.5"
        y="6"
        width="5"
        height="5"
        rx="1"
        fill={`${color}22`}
        stroke={color}
        strokeWidth="1.2"
      />
      <circle cx="12" cy="8.5" r="1" fill={color} />
      {/* Academic Tassel with Sensor Beacon */}
      <path
        d="M20 8.5V16.5M18.5 16.5H21.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Circuit Trace Pins below */}
      <path
        d="M9 19.5V22M12 19.5V22M15 19.5V22"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Bespoke High-Tech SVG Icon for Professional Scholars (Research & Journal Papers)
// Quantum Optical Laser Microscope + Concentric Atomic Orbitals + Data Matrix
export function ScholarResearchIcon({ size = 24, color = '#00e5ff', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Precision Microscope Optical Cylinder */}
      <path
        d="M10 3L14 3M12 3V9M9 9H15L14 13H10L9 9Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Objective Lens Focus Turret */}
      <path
        d="M11 13L10.5 15.5H13.5L13 13"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Specimen Slide Stage with Fiber Laser Aperture */}
      <path
        d="M6 16.5H18"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.5" r="1.5" fill={color} />
      {/* Heavy Scientific Microscope Base Stand */}
      <path
        d="M16 11C17.5 12.5 18 15 17 19M5 21H19"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Quantum Orbital Ring Wave */}
      <ellipse
        cx="12"
        cy="9"
        rx="7"
        ry="2.5"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.75"
      />
      {/* Laser Coherent Beam */}
      <line
        x1="12"
        y1="13.5"
        x2="12"
        y2="15.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Bespoke High-Tech SVG Icon for Startup Founders (Commercial MVPs)
// Supersonic Orbital Booster Rocket + PCB Heatshield Traces + Propulsion Thrusters
export function StartupRocketIcon({ size = 24, color = '#ff3cac', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Aerodynamic Rocket Fuselage */}
      <path
        d="M12 2C15 5.5 16.5 9.5 16.5 14L12 17.5L7.5 14C7.5 9.5 9 5.5 12 2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={`${color}15`}
      />
      {/* Avionics Circular Viewport & Telemetry Sensor */}
      <circle
        cx="12"
        cy="9.5"
        r="2.2"
        stroke={color}
        strokeWidth="1.4"
      />
      <circle cx="12" cy="9.5" r="0.8" fill={color} />
      {/* Left & Right Delta Stabilizer Wings */}
      <path
        d="M7.5 12.5L4 15V17L7.5 15.5M16.5 12.5L20 15V17L16.5 15.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Propulsion Nozzle Engine */}
      <path
        d="M10 17.5L9.5 19.5H14.5L14 17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Plasma Flame Jet Exhaust */}
      <path
        d="M12 19.5V23M10.5 21L12 23L13.5 21"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hardware SMT Chip Icon for "What We Build"
export function HardwarePcbIcon({ size = 18, color = '#c8ff00' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="10" height="10" rx="1.5" stroke={color} strokeWidth="1.4" fill={`${color}15`} />
      <circle cx="10" cy="10" r="2" stroke={color} strokeWidth="1.2" />
      {/* Top and Bottom Pins */}
      <path d="M7 2V5M10 2V5M13 2V5M7 15V18M10 15V18M13 15V18" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      {/* Left and Right Pins */}
      <path d="M2 7H5M2 10H5M2 13H5M15 7H18M15 10H18M15 13H18" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Research Blueprint & LaTeX Document Icon for "What We Document"
export function ResearchDocIcon({ size = 18, color = '#00e5ff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3.5C4 2.67157 4.67157 2 5.5 2H12L16 6V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round" fill={`${color}12`} />
      <path d="M12 2V6H16" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
      {/* Mathematical & Text Lines */}
      <line x1="7" y1="9" x2="13" y2="9" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="7" y1="12" x2="13" y2="12" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="7" y1="15" x2="10.5" y2="15" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
