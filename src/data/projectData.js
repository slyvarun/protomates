// Comprehensive project data and catalog for Protomates Lab

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
    role: 'Professional Scholars',
    badge: 'Research Fellows & PhD Candidates',
    tagline: 'High-Rigor Scientific Simulations, Testbeds & Journal Manuscripts',
    icon: 'Microscope',
    accentColor: '#00e5ff',
    description:
      'We collaborate with PhD researchers, professors, and scientific scholars to translate theoretical mathematical formulations and novel algorithms into verifiable testbeds and camera-ready journal manuscripts.',
    whatWeBuild: [
      'MATLAB, Simulink & ANSYS multiphysics simulations',
      'PyTorch / TensorFlow novel architecture implementations',
      'Hardware-in-the-Loop (HIL) experimental validation rigs',
      'ROS2 autonomous robotics navigation algorithms',
      'Custom sensor calibration & high-speed data acquisition pipelines'
    ],
    whatWeDocument: [
      'SCI, Scopus & IEEE Transaction-ready research papers',
      'Camera-ready LaTeX manuscripts with formatted bibtex',
      'High-resolution vector schematics & algorithmic flowcharts',
      'Empirical benchmark datasets & comparative metric plots',
      'Peer-review response dossiers & reviewer rebuttal experiments'
    ],
    deliverablesBadge: 'Scopus / SCI Quality • Reproducible Code & LaTeX',
    sampleProjects: [
      'TinyML Wearable Health Telemetry with ECG Anomaly Detection',
      'Photovoltaic MPPT Algorithm with Hardware Simulation Rig',
      'Deep Reinforcement Learning Drone Trajectory Tracking'
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
    title: 'High-Density Multi-Layer PCB Template',
    targetAudience: 'Startup MVPs',
    audienceId: 'startups',
    cat: 'PCB Designing',
    category: 'PCB Designing & EDA CAD',
    badge: 'EDA / PCB',
    watermark: 'PCB',
    img: '/pcb_design_template.jpg',
    specs: 'Multi-layer routing • Impedance matching • SMD layout • Production Gerbers',
    desc: 'Professional multi-layer high-speed PCB template featuring impedance-controlled routing, FPGA/SoC integration, gold surface plating, and production Gerber files.',
    chips: ['Altium Designer', 'Multi-Layer Stackup', 'Impedance Matched', 'Production Gerbers', 'BOM Optimization'],
    deliverables: 'Gerber Files, Drill Files, Pick & Place, 3D STEP Model, Full Schematics, Sourcing BOM',
    featured: true
  },
  {
    id: 2,
    title: 'ESP32 Smart Telemetry & Sensor Gateway',
    targetAudience: 'Startup MVPs',
    audienceId: 'startups',
    cat: 'IoT Prototyping',
    category: 'IoT Prototyping & Wireless',
    badge: 'ESP32 IoT',
    watermark: 'ESP32',
    img: '/esp32_iot.jpg',
    specs: 'Live OLED display • Dual-core Wi-Fi/BLE • Sensor bus • Real-time cloud sync',
    desc: 'Complete ESP32 IoT development prototype equipped with dual-core processing, OLED dashboard, I2C sensor fusion, Wi-Fi telemetry, and MQTT cloud sync.',
    chips: ['ESP32 WROOM', 'OLED Display', 'I2C Sensors', 'Wi-Fi & BLE', 'MQTT Cloud Sync', 'AWS IoT Core'],
    deliverables: 'Fully Assembled Node, Custom Firmware, Cloud Dashboard Code, API Specs, Setup Manual',
    featured: true
  },
  {
    id: 3,
    title: 'Arduino Mechatronics & Automation Rig',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'Microcontroller Prototyping',
    category: 'Microcontroller Prototyping',
    badge: 'ARDUINO',
    watermark: 'ARDUINO',
    img: '/arduino_prototype.jpg',
    specs: 'Sensor shield • Servo control • 16x2 Telemetry LCD • Modular breadboard',
    desc: 'Precision Arduino Uno robotics and automation workbench featuring servo motors, digital sensor shields, telemetry LCD display, and real-time I/O control.',
    chips: ['Arduino Uno', 'Robotics Shield', 'Servo Actuator', 'Character LCD', 'Real-Time I/O'],
    deliverables: 'Working Hardware Rig, Arduino IDE Code, 80-Page Thesis Report, Seminar PPT, Viva Q&A Guide',
    featured: true
  },
  {
    id: 4,
    title: 'Edge AI Vision & Neural Network Unit',
    targetAudience: 'Professional Scholars',
    audienceId: 'scholars',
    cat: 'AI/ML Hardware',
    category: 'AI/ML Hardware Systems',
    badge: 'AI / ML',
    watermark: 'AI / ML',
    img: '/aiml_hardware.jpg',
    specs: 'On-device neural inference • Smart camera • Bounding box detection • ARM NPU',
    desc: 'Real-time edge artificial intelligence prototype running deep neural network inference with integrated camera module, Jetson/ARM processor, and live video analysis.',
    chips: ['Jetson Nano / ARM', 'Camera Module', 'Neural Network', 'Edge AI Inference', 'OpenCV', 'PyTorch'],
    deliverables: 'Hardware AI Unit, Trained Model Weights, Benchmark Notebook, Scopus Paper Draft, LaTeX Files',
    featured: true
  },
  {
    id: 5,
    title: 'Autonomous Robotics Capstone & IEEE Thesis',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'Academic Project',
    category: 'Academic Final Year Project',
    badge: 'ACADEMIC',
    watermark: 'CAPSTONE',
    img: '/academic_prototype.jpg',
    specs: 'Autonomous chassis • Custom PCB layout • Full project documentation • Viva prep',
    desc: 'IEEE-standard autonomous mobile robotics system complete with obstacle navigation, custom circuit shield, telemetry dashboard, full thesis report, and viva guide.',
    chips: ['IEEE Publication Standard', 'Custom PCB Shield', 'Telemetry Screen', 'Full Thesis & Viva', 'Ultrasonic Lidar'],
    deliverables: 'Complete Mobile Robot, Tested Codebase, 110-Page University Report, PPT Deck, 1-on-1 Viva Rehearsal',
    featured: true
  },
  {
    id: 6,
    title: 'Industrial Environmental Telemetry Unit',
    targetAudience: 'Startup MVPs',
    audienceId: 'startups',
    cat: 'Multi-Field Prototype',
    category: 'Multi-Domain Engineering',
    badge: 'ALL FIELDS',
    watermark: 'SYSTEM',
    img: '/multifield_prototype.jpg',
    specs: 'Multi-sensor array • Rugged IP65 enclosure • Solar battery management • LoRaWAN mesh',
    desc: 'End-to-end industrial IoT solution for environmental monitoring across agriculture, manufacturing plants, and smart cities with long-range telemetry.',
    chips: ['LoRaWAN / 4G', 'BME680 Environmental', 'Solar PMIC', 'Cloud Platform', 'IP65 Enclosure'],
    deliverables: 'Production MVP Prototype, Enclosure 3D CAD, Firmware Code, Cloud Broker Setup, Investor Tech Deck',
    featured: true
  },
  {
    id: 7,
    title: 'TinyML Wearable Health Telemetry & Research Paper',
    targetAudience: 'Professional Scholars',
    audienceId: 'scholars',
    cat: 'AI/ML Hardware',
    category: 'Biomedical & Edge AI Research',
    badge: 'HEALTH AI',
    watermark: 'RESEARCH',
    img: '/aiml_hardware.jpg',
    specs: 'Low-power ECG/PPG sensors • On-device TinyML anomaly classification • Bluetooth Low Energy',
    desc: 'Advanced wearable research prototype for real-time arrhythmia detection using quantized edge neural networks. Backed by reproducible data and peer-review ready IEEE paper.',
    chips: ['STM32 TinyML', 'MAX30102 Biosensor', 'TensorFlow Lite Micro', 'BLE 5.2', 'LaTeX Paper'],
    deliverables: 'Wearable Hardware Rig, Quantized Model Pipeline, IEEE Conference Manuscript, Dataset Files, Reviewer Rebuttal Pack',
    featured: false
  },
  {
    id: 8,
    title: 'Smart Agricultural LoRaWAN Soil Node & Capstone',
    targetAudience: 'Students (Academic)',
    audienceId: 'students',
    cat: 'IoT Prototyping',
    category: 'Academic Capstone Project',
    badge: 'AGRI IOT',
    watermark: 'ACADEMIC',
    img: '/esp32_iot.jpg',
    specs: 'NPK Soil sensors • LoRa long range • Deep sleep solar power • Mobile alert dashboard',
    desc: 'Turnkey final year agricultural automation project integrating NPK nutrient sensing, irrigation valve relay control, and cloud-synced Blynk/ThingsBoard telemetry.',
    chips: ['LoRa SX1278', 'Soil Moisture & NPK', 'ESP32 Low Power', 'Solar MPPT', 'Full Capstone Thesis'],
    deliverables: 'Working Field Sensor Node, Mobile Dashboard Config, 95-Page Capstone Book, Presentation Slides, Viva Audio Notes',
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
    text: 'Protomates built my final year ESP32 IoT capstone project from schematic to working hardware. Their viva guidance and 95-page thesis documentation helped me achieve the top grade in my college department!'
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
    text: 'Our startup needed a 4-layer custom PCB design and functional IoT MVP on an ultra tight deadline. Protomates delivered flawless KiCad schematics, Gerbers, and investor documentation in just 3 weeks!'
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
    text: 'Protomates engineered our smart agricultural LoRaWAN field node prototype, enclosure 3D model, and cloud telemetry dashboard. We used this exact MVP to close our angel pre-seed round!'
  },
  {
    initial: 'S',
    name: 'Saurabh Gupta',
    role: 'PhD Scholar, Biomedical Engineering',
    category: 'Professional Scholar',
    text: 'Best engineering support team! They implemented our novel ECG anomaly classification pipeline on embedded STM32 hardware and formatted our Scopus journal paper with zero revisions needed.'
  }
];
