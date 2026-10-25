// Comprehensive project data and catalog for FSK Prototyping Services
import { getAssetUrl } from '../utils/assetUrl';

export const AUDIENCE_PILLARS = [
  {
    id: 'students',
    role: 'Students',
    badge: 'Academic Capstones & Final Year',
    tagline: 'Flawless Working Hardware + University-Grade Thesis & Viva Defense',
    icon: 'GraduationCap',
    accentColor: '#c8ff00',
    description:
      'We empower B.Tech, M.Tech, and Diploma students with fully functional, custom-built hardware and software projects paired with comprehensive IEEE-standard documentation and rigorous 1-on-1 viva coaching.',
    whatWeBuild: [
      'Custom Multi-layer or Double-layer PCBs',
      'ESP32, Arduino, STM32 & Raspberry Pi IoT rigs',
      'Edge AI, Computer Vision & Deep Learning models',
      'Robotics, Mechatronics & Automation setups',
      'Clean, commented, production-ready GitHub repositories'
    ],
    whatWeDocument: [
      'Comprehensive 80–120+ page University Thesis & Project Reports',
      'IEEE Publication Standard Paper formatting',
      'Complete Synopses, Project Proposals & Abstract dossiers',
      'Professional PowerPoint (PPT) Slide Decks for seminars',
      'Line-by-line code explanation guides & Viva Defense cheat sheets'
    ],
    deliverablesBadge: '100% Viva Ready • Working Hardware Delivered',
    sampleProjects: [
      'Autonomous Agricultural Crop Disease Detection Rover',
      'Smart Grid Telemetry & LoRaWAN Energy Metering',
      'IoT Quadcopter Telemetry with Edge AI Camera'
    ]
  },
  {
    id: 'scholars',
    role: 'Scholars & PhDs',
    badge: 'Thesis, Dissertation & Capstones',
    tagline: 'Thesis Writing, Dissertation Documentation & Applied Capstone Projects',
    icon: 'Microscope',
    accentColor: '#00e5ff',
    description:
      'We provide specialized thesis writing document preparation, doctoral dissertation documentation, and applied capstone practical systems with camera-ready LaTeX formatting, IEEE compliance, and university-standard rigor.',
    whatWeBuild: [
      'Applied Capstone practical working systems and functional rigs',
      'Mathematical modeling & algorithmic simulations (MATLAB, Python)',
      'Clean firmware & software repositories with setup manuals',
      'Reproducible benchmark data and comparative experimental graphs',
      'Plagiarism-free code with line-by-line documentation'
    ],
    whatWeDocument: [
      "Comprehensive Master's & PhD Thesis documentation (80–150+ pages)",
      'Doctoral Dissertation documentation formatted to institutional standards',
      'Applied Capstone system architecture reports and engineering dossiers',
      'SCI, Scopus & IEEE Conference/Journal research paper manuscripts',
      'Viva defense presentation decks (PPT) & examiner Q&A cheat sheets'
    ],
    deliverablesBadge: 'Thesis & Dissertation Docs • Applied Capstones • <10% Plagiarism',
    sampleProjects: [
      'Deep Learning Edge AI Telemetry (Dissertation & Capstone)',
      'Renewable Energy Microgrid & Inverter (Thesis Documentation)',
      'Autonomous Robotics & SLAM (Applied Capstone & Thesis)'
    ]
  },
  {
    id: 'startups',
    role: 'Startup Founders',
    badge: 'Early-Stage Founders & Tech Innovators',
    tagline: 'Turnkey Commercial MVPs in 2–4 Weeks + Investor Technical Dossiers',
    icon: 'Rocket',
    accentColor: '#ff3cac',
    description:
      'We help hardware and deep-tech startups build functional Minimum Viable Products (MVPs) and investor-ready proof-of-concepts at lightning speed, complete with production manufacturing files and IP transfer.',
    whatWeBuild: [
      'Production-ready Multi-layer PCB Gerber & BOM files',
      'Custom 3D CAD Enclosure prototypes (Resin & FDM 3D printing)',
      'Industrial-grade low-power firmware (STM32, ESP32, nRF52 BLE)',
      'Real-time Cloud IoT Dashboards & WebSocket APIs',
      'Cross-platform companion mobile and web apps'
    ],
    whatWeDocument: [
      'Investor-ready Technical Whitepapers & Product Architecture Dossiers',
      'Optimized Bill of Materials (BOM) with LCSC & Mouser component sourcing',
      'Fabrication & Pick-and-Place (PnP) manufacturing packs',
      'System API Documentation & Firmware flasher guides',
      'Patent & Intellectual Property (IP) technical disclosure drafts'
    ],
    deliverablesBadge: 'Investor-Ready • 100% IP & Source Code Ownership',
    sampleProjects: [
      'Industrial Smart Factory LoRa Environmental Monitor',
      'Commercial Battery Management System (BMS) with Cloud Telemetry',
      'Smart Smart-Lock BLE Gateway with Over-The-Air (OTA) Updates'
    ]
  }
];

export const ALL_PROTOTYPES = [
  {
    id: 1,
    title: 'Custom Double-Layer PCB & Sensor Shield',
    targetAudience: 'Startup MVPs & Students',
    audienceId: 'startups',
    cat: 'PCB Designing',
    category: 'PCB Designing & Layout',
    badge: 'EDA / PCB',
    watermark: 'PCB',
    specs: 'Double-layer routing • Breadboard to PCB transfer • SMD / THT components • Standard Gerber files',
    desc: 'Clean 2-layer printed circuit board designed to convert messy breadboard wiring into a compact, reliable hardware shield with labeled test points, power filtering, and standard fabrication Gerbers.',
    chips: ['KiCad / EasyEDA', '2-Layer Routing', 'Breadboard-to-PCB', 'Gerber Files', 'BOM Sourcing'],
    deliverables: 'Gerber Files, Drill Files, Schematic PDF, Bill of Materials (BOM), 3D STEP Preview',
    featured: true
  },
  {
    id: 2,
    title: 'IoT Smart Agriculture & Automated Irrigation System',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'IoT Prototyping',
    category: 'IoT Prototyping & Wireless',
    badge: 'ESP32 IOT',
    watermark: 'ESP32',
    specs: 'Capacitive soil moisture sensor • 5V relay water pump • ESP32 Wi-Fi • Blynk cloud dashboard',
    desc: 'Automated irrigation and soil telemetry prototype that continuously reads soil moisture, automatically activates a water pump when thresholds drop, and sends live readings to a mobile phone dashboard.',
    chips: ['ESP32 Wi-Fi', 'Soil Moisture Sensor', '5V Relay Module', 'Blynk Mobile Dashboard', 'Arduino IDE Code'],
    deliverables: 'Assembled Hardware Rig, Tested Arduino Code, 85-Page Project Report, Circuit Diagram, Viva Q&A Guide',
    featured: true
  },
  {
    id: 3,
    title: 'Autonomous Obstacle Avoidance & Ultrasonic Rover',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'Microcontroller Hardware',
    category: 'Microcontroller & Robotics',
    badge: 'ARDUINO',
    watermark: 'ARDUINO',
    specs: 'HC-SR04 ultrasonic sonar • L298N motor driver • SG90 servo panning • 4WD smart chassis',
    desc: 'Practical mobile robotics rover using an Arduino Uno and ultrasonic sensor mounted on a micro-servo to scan for obstacles, automatically steer around barriers, and display telemetry on a 16x2 LCD.',
    chips: ['Arduino Uno', 'Ultrasonic Sonar', 'L298N Motor Driver', 'SG90 Servo', '16x2 LCD Display'],
    deliverables: 'Working 4WD Rover, Commented Arduino Sketch, 80-Page Thesis Report, Seminar PPT Slides, Viva Defense Notes',
    featured: true
  },
  {
    id: 4,
    title: 'Smart Face & Object Recognition Attendance Rig',
    targetAudience: 'Professional Scholars',
    audienceId: 'scholars',
    cat: 'AI/ML Hardware',
    category: 'AI/ML & Computer Vision',
    badge: 'AI / VISION',
    watermark: 'AI / ML',
    specs: 'Raspberry Pi / ESP32-CAM • Python & OpenCV • Local web attendance UI • SQLite logging',
    desc: 'Vision-based automated attendance prototype utilizing a Raspberry Pi camera module running OpenCV Haar-cascades and LBPH face recognition to log verified students directly into a local database and web UI.',
    chips: ['Raspberry Pi / ESP32-CAM', 'OpenCV Python', 'Haar-Cascade Classifiers', 'Local Web Dashboard', 'SQLite Database'],
    deliverables: 'Configured Hardware Unit, Python OpenCV Scripts, Experimental Accuracy Data, Research Documentation, Viva Guide',
    featured: true
  },
  {
    id: 5,
    title: 'IoT Digital Energy Meter with Tamper Detection',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'IoT Prototyping',
    category: 'Power & IoT Telemetry',
    badge: 'ENERGY IOT',
    watermark: 'TELEMETRY',
    specs: 'SCT-013 current transformer • ZMPT101B voltage sensor • 16x2 I2C LCD • Cloud energy billing',
    desc: 'Academic IoT single-phase energy monitoring rig using an ESP32 to calculate real-time RMS voltage, current, active power (kWh), and detect magnetic or wiring tamper events with cloud telemetry alerts.',
    chips: ['ESP32 Dual-Core', 'SCT-013 CT Clamp', 'ZMPT101B Voltage', 'Cloud Telemetry', '16x2 I2C Display'],
    deliverables: 'Safety-Isolated Rig, Calibration Guide, ESP32 Codebase, 95-Page Capstone Thesis, Presentation Deck',
    featured: true
  },
  {
    id: 6,
    title: 'Smart Home Automation & Gesture Appliance Controller',
    targetAudience: 'Startup MVPs & Students',
    audienceId: 'startups',
    cat: 'IoT Hardware',
    category: 'Smart Home & Automation',
    badge: 'HOME IOT',
    watermark: 'SMART HOME',
    specs: 'APDS-9960 gesture sensor • 4-channel optocoupled relay board • Local Wi-Fi web switch • AC load control',
    desc: 'Touchless smart home control prototype combining optical gesture recognition (swipe left/right/up/down) with a responsive local web interface to safely switch household lights, fans, and appliances.',
    chips: ['ESP32 / NodeMCU', 'APDS-9960 Gesture', '4-Channel Relay', 'HTML5 Web Interface', 'Optoisolation Safety'],
    deliverables: 'Working Demo Rig, Enclosure Blueprint, Source Code, User Operating Manual, Technical Dossier',
    featured: true
  },
  {
    id: 7,
    title: 'Wearable Health Vitals Monitor with Fall Alert',
    targetAudience: 'Professional Scholars',
    audienceId: 'scholars',
    cat: 'AI/ML Hardware',
    category: 'Biomedical & Sensor Systems',
    badge: 'HEALTH SENSOR',
    watermark: 'BIOMED',
    specs: 'MAX30102 pulse oximeter • MPU6050 6-axis accelerometer • Threshold fall detection • BLE / Wi-Fi alerts',
    desc: 'Compact wearable prototype reading pulse rate (BPM) and blood oxygen (SpO2) with an integrated 6-axis accelerometer that detects sudden falls and triggers an audible alarm and SMS/cloud emergency alert.',
    chips: ['ESP32 Mini', 'MAX30102 Biosensor', 'MPU6050 IMU', 'Emergency Buzzer', 'Paper Documentation'],
    deliverables: 'Wearable Prototype Hardware, Sensor Fusion Firmware, Benchmark Experimental Graphs, IEEE Format Paper Draft',
    featured: false
  },
  {
    id: 8,
    title: 'RFID & Biometric Security Access Control Rig',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'Microcontroller Hardware',
    category: 'Embedded Security Systems',
    badge: 'RFID / ACCESS',
    watermark: 'SECURITY',
    specs: 'RC522 13.56MHz RFID • R307 optical fingerprint scanner • 12V solenoid door lock • Event logging',
    desc: 'Dual-factor door access prototype using an Arduino/ESP32, high-frequency RFID card reader, optical fingerprint sensor, and relay-driven solenoid deadbolt with authorized passcard verification and event logging.',
    chips: ['Arduino / ESP32', 'RC522 RFID Reader', 'R307 Fingerprint', '12V Solenoid Lock', 'Event Log Dashboard'],
    deliverables: 'Fully Wired Access Rig, Arduino Sketch, 90-Page Capstone Book, Circuit Schematic, Viva Q&A Guide',
    featured: false
  }
];

export const CORE_OFFERINGS = [
  {
    num: '01',
    badge: 'Hardware EDA',
    iconName: 'Cpu',
    title: 'PCB Designing & Layout',
    desc: 'Complete printed circuit board engineering from schematic capture to multi-layer routing, impedance matching, power plane optimization, and production-ready Gerber & BOM generation.',
    tags: ['Altium & KiCad', 'Multi-Layer Stackups', 'Gerber & Pick-and-Place', 'High-Speed Signals', 'SMD / THT']
  },
  {
    num: '02',
    badge: 'Smart Connected',
    iconName: 'Wifi',
    title: 'IoT Prototyping & Telemetry',
    desc: 'Smart connected devices engineered with ESP32, Arduino, Raspberry Pi, LoRaWAN, BLE, and 4G telemetry. Integrating real-time sensor arrays with modern cloud dashboards.',
    tags: ['ESP32 & STM32', 'Sensor Fusion', 'MQTT & WebSockets', 'Cloud Dashboards', 'LoRaWAN & BLE']
  },
  {
    num: '03',
    badge: 'Academic Excellence',
    iconName: 'GraduationCap',
    title: 'Academic Projects & Capstones',
    desc: 'End-to-end execution of B.Tech, M.Tech, and diploma capstone projects based on IEEE publications and custom problem statements. Fully functioning hardware, tested code, and university-grade thesis.',
    tags: ['Final Year Capstone', 'IEEE Publications', 'Working Hardware', 'Thesis & Reports', 'PPT & Viva Training']
  },
  {
    num: '04',
    badge: 'Edge Intelligence',
    iconName: 'Brain',
    title: 'AI/ML & Edge Computing',
    desc: 'Cutting-edge machine learning and computer vision architectures deployed on edge hardware like NVIDIA Jetson Nano, Raspberry Pi 5, and embedded TinyML for real-time vision and edge inference.',
    tags: ['Computer Vision', 'TinyML / Edge AI', 'Jetson Nano', 'Deep Learning', 'PyTorch & OpenCV']
  },
  {
    num: '05',
    badge: 'Mentorship & Defense',
    iconName: 'Compass',
    title: '1-on-1 Guidance & Viva Prep',
    desc: 'Personalized 1-on-1 mentorship, line-by-line code walkthroughs, schematic analysis, hardware debugging sessions, and comprehensive viva preparation so you confidently ace project reviews.',
    tags: ['1-on-1 Mentorship', 'Viva Defense Prep', 'Code Walkthrough', 'Debugging Help', '100% Confidentiality']
  },
  {
    num: '06',
    badge: 'Commercial MVPs',
    iconName: 'Rocket',
    title: 'Startup MVPs & PoC Building',
    desc: 'Rapid transition from concept napkin to working prototype for tech startups. Production Gerbers, 3D CAD enclosure fabrication, firmware development, and investor-ready technical dossiers.',
    tags: ['2–4 Week Delivery', 'Investor Dossiers', '3D CAD Enclosures', 'BOM Sourcing', 'Full IP Transfer']
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    initial: 'R',
    name: 'Rahul Sharma',
    role: 'Final Year B.Tech, ECE',
    category: 'Student',
    text: 'FSK built my final year ESP32 IoT capstone project from schematic to working hardware. Their viva guidance and 95-page thesis documentation helped me achieve the top grade in my college department!'
  },
  {
    initial: 'D',
    name: 'Dr. Priya Menon',
    role: 'Postdoctoral Fellow, AI & Robotics',
    category: 'Professional Scholar',
    text: 'The Edge AI computer vision research testbed they implemented on Jetson Nano was mathematically rigorous and cleanly documented. The LaTeX manuscript and benchmark graphs sailed through IEEE reviewer evaluations.'
  },
  {
    initial: 'A',
    name: 'Arjun Reddy',
    role: 'Co-Founder & CEO, Nexus Hardware',
    category: 'Startup Founder',
    text: 'Our startup needed a 4-layer custom PCB design and functional IoT MVP on an ultra tight deadline. FSK delivered flawless KiCad schematics, Gerbers, and investor documentation in just 3 weeks!'
  },
  {
    initial: 'M',
    name: 'Meera Krishna',
    role: 'M.Tech Scholar, Power Electronics',
    category: 'Student / Scholar',
    text: 'The MPPT solar simulation and hardware rig was assembled with industrial-grade neatness. Every sensor calibration and viva question was covered in our 1-on-1 mock defense sessions. Truly unmatched!'
  },
  {
    initial: 'V',
    name: 'Vikram Joshi',
    role: 'Founder, AgriTech Solutions',
    category: 'Startup Founder',
    text: 'FSK engineered our smart agricultural LoRaWAN field node prototype, enclosure 3D model, and cloud telemetry dashboard. We used this exact MVP to close our angel pre-seed round!'
  },
  {
    initial: 'S',
    name: 'Saurabh Gupta',
    role: 'PhD Scholar, Biomedical Engineering',
    category: 'Professional Scholar',
    text: 'Best engineering support team! They implemented our novel ECG anomaly classification pipeline on embedded STM32 hardware and formatted our Scopus journal paper with zero revisions needed.'
  }
];
