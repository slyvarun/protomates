import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export const routes = [
  {
    path: '/',
    pageId: 'home',
    title: 'FSK Prototyping Services | Hardware Prototypes & Scientific Research',
    desc: 'FSK builds physical working hardware, custom multi-layer PCBs, and publication-ready documentation for Students, Scholars, and Startup Founders.',
    canonical: 'https://fskps.tech/'
  },
  {
    path: '/about',
    pageId: 'about',
    title: 'About FSK Prototyping Services | Integrated Engineering R&D Lab',
    desc: 'Learn about FSK Genesis, our engineering tenets, lab infrastructure, and why we support Academic Students, Doctoral Scholars, and Hardware Startups.',
    canonical: 'https://fskps.tech/about/'
  },
  {
    path: '/services',
    pageId: 'services',
    title: 'Services & Our Proven Work Catalog | FSK | Turnkey Hardware & Documentation',
    desc: 'Explore real hardware prototypes across IoT, Edge AI, and custom PCBs alongside specialized service tracks and deliverables comparison.',
    canonical: 'https://fskps.tech/services/'
  },
  {
    path: '/contact',
    pageId: 'contact',
    title: 'Project Intake & Engineering Feasibility Review | FSK (<2 Hours)',
    desc: 'Submit your base paper title, project topic, or startup MVP requirements. Receive a fixed BOM quote and engineering feasibility review within 2 hours.',
    canonical: 'https://fskps.tech/contact/'
  }
];

export function render(pageId = 'home') {
  return renderToString(<App initialPage={pageId} />)
}
