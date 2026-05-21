'use client';
import React, { useState, useEffect } from 'react'
import { 
  Compass, Flame, Layers, Gauge, Cpu, Sun, Moon, 
  Sparkles, Activity, ShieldCheck, UploadCloud, 
  ChevronRight, Menu, X, Check, FileText, 
  Zap, Compass as Wind, Globe, Shield, Train, 
  HeartPulse, Hammer, Droplets, Briefcase, FileCheck2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() { 
  const isDark = false
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCapability, setActiveCapability] = useState(null)
  const [activeIndustry, setActiveIndustry] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // RFQ Form States
  const [alloy, setAlloy] = useState('A356')
  const [quantity, setQuantity] = useState(5000)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [drawingFile, setDrawingFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  
  // Real-time Event Scroll Listener Sync to Prevent Dynamic Opacity Intersections
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict Global Theme Environment Reset Override
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }, [])

  // Master Architectural Capability Data Matrix
  const capabilities = [
    {
      id: 'tooling',
      title: 'Tool Design & Manufacturing',
      icon: Compass,
      desc: 'Precision CAD/CAM integration for high-performance molds.',
      specs: ['In-house high-end Toolroom', 'H13/1.2344 Hot Work Die Steel', 'SolidWorks & PowerMILL workflows'],
      metric: 'Lead time: 7-10 Days',
      detail: 'Our engineering department converts complex 3D parts into robust, production-ready die-casting molds, optimized for thermal balance and longevity.'
    },
    {
      id: 'sand',
      title: 'Sand Casting',
      icon: Flame,
      desc: 'Flexible manufacturing system for heavy structural components.',
      specs: ['Resin Sand & No-Bake systems', 'Complex geometries with inner cores', 'Low tooling setup costs'],
      metric: 'Pouring limit: 150 kg',
      detail: 'Perfect for low-to-medium volumes and heavy parts like refinery valve bodies, actuator housings, and industrial pump components.'
    },
    {
      id: 'gdc',
      title: 'Gravity Die Casting (GDC)',
      icon: Layers,
      desc: 'Controlled pouring processes delivering sound grain structure.',
      specs: ['Tiltable automated gravity rigs', 'Excellent surface finish', 'Optimized tensile strength'],
      metric: 'Tolerance: ISO 8062 CT7',
      detail: 'Also known as permanent mold casting, GDC is highly suited for automotive manifolds, structural brackets, and electric mobility housings.'
    },
    {
      id: 'lpdc',
      title: 'Low Pressure Die Casting (LPDC)',
      icon: Gauge,
      desc: 'Under-pressure metal feeding system for low porosity parts.',
      specs: ['Controlled bottom-up filling', 'Minimal oxide inclusions', 'High structural density'],
      metric: 'Pressure: up to 1.5 Bar',
      detail: 'Highly suitable for premium structural components like GIS chambers and high-stress electric vehicle engine components.'
    },
    {
      id: 'cnc',
      title: 'CNC Machining',
      icon: Cpu,
      desc: 'State-of-the-art post-casting precision machining.',
      specs: ['3-Axis, 4-Axis, and 5-Axis VMCs', 'Mazak & Haas vertical/horizontal centers', 'High repeatability index'],
      metric: 'Precision: +/- 0.005 mm',
      detail: 'We provide fully finished components direct to assembly lines, maintaining geometric tolerances down to micron-level accuracy.'
    },
    {
      id: 'heat',
      title: 'Heat Treatment',
      icon: Sun,
      desc: 'Enhances tensile properties and hardness parameters.',
      specs: ['T6 Solutionizing & Aging', 'T4 and T5 thermal cycles', 'Microstructure monitoring'],
      metric: 'Hardness range: 75-90 BHN',
      detail: 'Our in-house heat treatment furnace ensures uniform hardness distribution, improving the tensile strength of the casting parts.'
    },
    {
      id: 'surface',
      title: 'Surface Treatment',
      icon: Sparkles,
      desc: 'Full-spectrum finish configurations for harsh environments.',
      specs: ['Steel/Glass bead shot blasting', 'Anodizing & Chromating (Trivalent)', 'Powder coating (RAL color match)'],
      metric: 'Salt Spray: 500+ Hours',
      detail: 'Protection against atmospheric corrosion, oil damage, and chemical wear, matching international automotive and defence criteria.'
    },
    {
      id: 'leak',
      title: 'Leak Testing',
      icon: Droplets,
      desc: 'Integrity checking for pressure-retaining components.',
      specs: ['Differential pressure decay tests', 'Air-under-water bubble testing', 'Integrated tooling fixtures'],
      metric: 'Test limits: up to 10 Bar',
      detail: '100% leak detection for Gas Insulated Switchgear enclosures, pumps, valves, and automotive cooling jackets.'
    },
    {
      id: 'quality',
      title: 'Quality Testing & Inspection',
      icon: Activity,
      desc: 'Metallurgical validation and coordinate inspection controls.',
      specs: ['Coordinate Measuring Machine (CMM)', 'Optical Emission Spectrometer', 'Digital X-Ray Radiography'],
      metric: 'Accuracy: 1.2µm precision',
      detail: 'Our laboratory conducts chemical composition checks, mechanical stress tests, and 3D dimension checks to guarantee absolute quality compliance.'
    }
  ]

  // Master Global Enterprise Sectors Matrix
  const industries = [
    {
      id: 'power',
      name: 'Power Transmission & Distribution',
      icon: Zap,
      desc: 'High-voltage GIS switchgear enclosures, busbars, support brackets, and insulator flanges.',
      alloy: 'AlSi7Mg0.3 (A356) / AlSi10Mg',
      highlight: 'Gas-tight structures with zero micro-porosity.'
    },
    {
      id: 'ev',
      name: 'Electric Mobility Solutions',
      icon: Cpu,
      desc: 'Liquid-cooled battery shells, motor frames, charging sockets, and lightweight chassis elements.',
      alloy: 'A356.2 (T6) / ADC12',
      highlight: 'Highly optimized structural-weight ratios.'
    },
    {
      id: 'refineries',
      name: 'Refineries Pumps & Valves',
      icon: Droplets,
      desc: 'Explosion-proof actuator boxes, pump bodies, multi-port valve manifolds, and impeller rings.',
      alloy: 'LM6 / LM25 (A356) / AlSi12',
      highlight: 'Extreme corrosion resilience in saline/petrochemical climates.'
    },
    {
      id: 'renewables',
      name: 'Renewable Energy Systems',
      icon: Wind,
      desc: 'Solar tracker gear couplers, wind turbine stator enclosures, and heavy bracket hubs.',
      alloy: 'LM25-M / A356-T6',
      highlight: 'UV and thermal cycle fatigue resistant engineering.'
    },
    {
      id: 'aerospace',
      name: 'Aerospace Components',
      icon: Globe,
      desc: 'Aircraft brackets, avionic chassis frames, ventilation manifolds, and cabin seating joints.',
      alloy: 'AMS Class Alloys / A356.2 T6',
      highlight: 'Fully compliant with AS9100 track traceability (Target Dec-2026).'
    },
    {
      id: 'defence',
      name: 'Defence Systems',
      icon: Shield,
      desc: 'Tactical radio modules, weapon chassis mounts, missile wing stabilizers, and vehicle joints.',
      alloy: 'AlSi7Mg / LM25-T6 / High-Zn alloys',
      highlight: 'Ruggedized shock-absorption and shielding properties.'
    },
    {
      id: 'locomotive',
      name: 'Locomotive Solutions',
      icon: Train,
      desc: 'Air brake manifolds, cooling radiators, gearboxes, engine link bars, and suspension caps.',
      alloy: 'AlSi12 / LM6 / A356',
      highlight: 'Tested under high vibration frequency standards.'
    },
    {
      id: 'healthcare',
      name: 'Health Care Equipments',
      icon: HeartPulse,
      desc: 'Medical-grade diagnostic arm hinges, X-Ray housing shells, and structural bases.',
      alloy: 'ADC12 / A356',
      highlight: 'Hygienic, ultra-smooth surfaces for sterilization.'
    },
    {
      id: 'machinery',
      name: 'Heavy Machinery',
      icon: Hammer,
      desc: 'Hydraulic gear block manifolds, lubrication housings, joint linkages, and oil sumps.',
      alloy: 'LM25-T6 / ADC12',
      highlight: 'High pressure resistance parameters.'
    }
  ]

  // File Validation and Submission Handling Pipelines
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const fileExt = file.name.split('.').pop().toLowerCase()
      const allowedExts = ['pdf', 'dwg', 'dxf', 'step', 'stp', 'igs', 'zip', 'rar']
      
      if (!allowedExts.includes(fileExt)) {
        setFormErrors(prev => ({ ...prev, file: 'Invalid file format. Please upload PDF, DWG, STEP, STP, IGS, or ZIP.' }))
        setDrawingFile(null)
      } else if (file.size > 25 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, file: 'File exceeds 25MB size limit.' }))
        setDrawingFile(null)
      } else {
        setFormErrors(prev => ({ ...prev, file: null }))
        setDrawingFile(file)
      }
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!name.trim()) errors.name = 'Contact name is required'
    if (!company.trim()) errors.company = 'Company name is required'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      errors.email = 'Email address is required'
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email'
    }
    
    if (!drawingFile) {
      errors.file = 'Please upload a drawing file for alloy estimation'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleRFQSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setName('')
      setEmail('')
      setCompany('')
      setPhone('')
      setMessage('')
      setDrawingFile(null)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1A1A1D] antialiased">
      
      {/* ================================================================= */}
      {/* 1. SOLID LAYER FIXED NAVBAR (PREVENTS TEXT INTERSECTIONS AND OVERLAPS) */}
      {/* ================================================================= */}
      <header 
        className={`fixed top-0 left-0 w-full border-b select-none nav-transition ${
          isScrolled 
            ? 'bg-white shadow-md border-gray-200 h-22' 
            : 'bg-[#F5F1EB] border-gray-200/40 h-26'
        }`}
        style={{
          zIndex: 9999, // Overrides any common card or canvas structure
          position: 'fixed',
          isolation: 'isolate'
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center justify-between gap-x-8 relative z-50">
          
          {/* SGI Large Scale Branding Container Block */}
          <div className="flex items-center flex-shrink-0 cursor-pointer group py-2 pr-8">
            <div className="relative h-18 w-56 sm:w-64 flex items-center justify-start overflow-visible">
              <img 
                src="/skino_logo.png" 
                alt="SUPERKINO EQUIPMENTS" 
                className="h-full w-auto object-contain object-left scale-125 origin-left transition-transform duration-300" 
              />
            </div>
          </div>

          {/* Opaque Protected Link Layout Rows - Anti-wrapping active */}
          <nav className="hidden xl:flex items-center justify-center gap-x-6 xl:gap-x-8 2xl:gap-x-10 h-full ml-auto">
            <a href="#about" className="text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#4B5563] hover:text-[#1A1A1D] no-underline transition-colors">About Us</a>
            <a href="#capabilities" className="text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#4B5563] hover:text-[#1A1A1D] no-underline transition-colors">Capabilities</a>
            <a href="#industries" className="text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#4B5563] hover:text-[#1A1A1D] no-underline transition-colors">Industries</a>
            <a href="#quality" className="text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#4B5563] hover:text-[#1A1A1D] no-underline transition-colors">Quality</a>
            <a href="#facilities" className="text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#4B5563] hover:text-[#1A1A1D] no-underline transition-colors">Facilities</a>
            <a href="#rfq" className="text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#4B5563] hover:text-[#1A1A1D] no-underline transition-colors">RFQ Portal</a>
          </nav>

          {/* High Visibility Pure Solid Contrast Action CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-4">
            <a
              href="#rfq"
              className="bg-[#1A1A1D] hover:bg-[#FF6B00] text-white hover:text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-300 shadow-sm cursor-pointer rounded-none border-none text-center no-underline block"
              style={{ backgroundColor: '#1A1A1D', color: '#FFFFFF', opacity: 1, visibility: 'visible' }}
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Display Controllers */}
          <div className="flex xl:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-[#1A1A1D] bg-transparent cursor-pointer border-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile View Responsive Sheet Grid */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t bg-white border-gray-200"
            >
              <div className="px-6 py-6 space-y-4 flex flex-col">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold tracking-wider uppercase text-[#4B5563] no-underline">About Us</a>
                <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold tracking-wider uppercase text-[#4B5563] no-underline">Capabilities</a>
                <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold tracking-wider uppercase text-[#4B5563] no-underline">Industries</a>
                <a href="#quality" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold tracking-wider uppercase text-[#4B5563] no-underline">Quality</a>
                <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold tracking-wider uppercase text-[#4B5563] no-underline">Facilities</a>
                <a href="#rfq" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold tracking-wider uppercase text-[#4B5563] no-underline">RFQ Portal</a>
                <a 
                  href="#rfq" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="w-full text-center py-4 bg-[#FF6B00] text-white uppercase tracking-widest font-mono text-xs font-bold no-underline"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================== */}
      {/* 2. BRIGHT SCANDINAVIAN HERO CONTEXT       */}
      {/* ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F1EB] pt-24">
        
        {/* Soft layout aesthetic print - NO multiply or dark filters */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80" 
            alt="Foundry Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-[#F5F1EB]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold">ESTABLISHED 1965 | GLOBAL EXPORT-READY</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#1A1A1D] max-w-5xl leading-[1.05]">
            PRECISION <span className="text-[#FF6B00] font-extrabold">ALUMINIUM CASTINGS</span> FOR GLOBAL OEMs
          </h1>

          <p className="mt-8 text-base sm:text-xl font-light tracking-wide max-w-3xl text-[#4B5563]">
            Built on Quality. Cast for Performance. We deliver technology-driven casting excellence and reliability into every critical industrial component.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#rfq" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] hover:bg-[#1A1A1D] text-white uppercase tracking-wider font-mono text-sm rounded-none font-bold shadow-xs no-underline transition-colors duration-300"
            >
              Discuss Your Requirement <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#capabilities" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A1A1D] border border-gray-300 hover:bg-gray-50 uppercase tracking-wider font-mono text-sm rounded-none font-medium shadow-2xs no-underline transition-all duration-300"
            >
              View Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. THE SUPERKINO POSITIONING SUMMARY       */}
      {/* ========================================== */}
      <section id="about" className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-none p-8 sm:p-12 border border-gray-200 shadow-xl bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#FF6B00] uppercase block">// THE SUPERKINO STANDARD</span>
              <p className="text-lg sm:text-2xl leading-relaxed font-light tracking-wide text-[#1A1A1D]">
                Superkino converts complex engineering requirements into precision aluminium castings. Combining advanced casting technologies, process expertise, and high-precision machining, we support global OEMs with reliable components for demanding industrial applications worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t智能 division pt-6 border-gray-100">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF6B00] font-bold">ESTABLISHED</span>
                  <p className="text-3xl font-extrabold tracking-tight text-[#1A1A1D]">1965</p>
                  <p className="text-[11px] text-[#4B5563] font-light">60+ Years of Quality</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF6B00] font-bold">EXPORT READY</span>
                  <p className="text-3xl font-extrabold tracking-tight text-[#1A1A1D]">100%</p>
                  <p className="text-[11px] text-[#4B5563] font-light">Global OEM Standards</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative overflow-hidden rounded-none border border-gray-200 shadow-md group">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                alt="SKINO Structural Metallurgy" 
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90" 
              />
            </div>

          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* 4. ECO-GRID CAPABILITIES LAYOUT            */}
      {/* ========================================== */}
      <section id="capabilities" className="py-24 sm:py-32 relative bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF6B00] font-bold">OUR ENGINEERING RANGE</span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#1A1A1D]">MANUFACTURING CAPABILITIES</h2>
            <p className="text-sm sm:text-base text-[#4B5563] font-light">
              End-to-end solutions from mold design, casting, thermal enhancements, machining to laboratory validation profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => {
              const IconComp = cap.icon
              const isSelected = activeCapability === cap.id
              
              return (
                <div 
                  key={cap.id}
                  onClick={() => setActiveCapability(isSelected ? null : cap.id)}
                  className={`group relative overflow-hidden p-8 border rounded-none cursor-pointer transition-all duration-500 bg-white border-gray-200 hover:border-[#FF6B00] ${
                    isSelected ? 'ring-1 ring-[#FF6B00]/40' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[#FF6B00]/5 border border-[#FF6B00]/10 rounded-none group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-500">
                      <IconComp className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-all duration-500" />
                    </div>
                    <span className="text-[10px] font-mono text-[#FF6B00] tracking-widest uppercase font-bold">{cap.metric}</span>
                  </div>

                  <h3 className="text-xl font-bold mt-6 tracking-wide text-[#1A1A1D]">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563] font-light">{cap.desc}</p>
                  
                  <ul className="mt-4 space-y-2 border-t pt-4 border-gray-100 list-none p-0">
                    {cap.specs.slice(0, 2).map((spec, sidx) => (
                      <li key={sidx} className="flex items-center text-xs font-mono">
                        <Check className="w-3 h-3 text-[#FF6B00] mr-2 flex-shrink-0" />
                        <span className="text-[#4B5563]">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-100 text-xs space-y-3"
                      >
                        <p className="leading-relaxed text-[#4B5563] font-light">{cap.detail}</p>
                        <div className="p-2.5 rounded-none bg-[#FF6B00]/5 border border-[#FF6B00]/10">
                          <span className="font-semibold block text-[10px] uppercase font-mono tracking-wider text-[#FF6B00]">Engineering Data Grid</span>
                          <ul className="mt-1.5 space-y-1 font-mono text-[10px] list-disc list-inside text-[#4B5563] p-0">
                            {cap.specs.map((spec, sidx) => (
                              <li key={sidx}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 flex items-center justify-between text-xs font-mono font-bold tracking-wider text-[#FF6B00] group-hover:translate-x-1 transition-all duration-300">
                    <span>{isSelected ? 'COLLAPSE DETAILS' : 'EXPLORE SPECS'}</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 5. INTERACTIVE TARGET INDUSTRIES PLATFORM  */}
      {/* ========================================== */}
      <section id="industries" className="py-24 sm:py-32 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF6B00] font-bold">SECTORS WE SERVE</span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#1A1A1D]">APPLICATION INDUSTRIES</h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#4B5563] font-light leading-relaxed">
              Delivering high-reliability casting components engineered to sustain chemical corrosion, thermal fatigue, and continuous load factors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-3">
              {industries.map((ind) => {
                const IconComp = ind.icon
                const isActive = activeIndustry === ind.id
                return (
                  <div 
                    key={ind.id}
                    onClick={() => setActiveIndustry(isActive ? null : ind.id)}
                    className={`flex items-center justify-between p-5 border rounded-none cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#FF6B00] text-white border-[#FF6B00]' 
                        : 'bg-[#F9FAFB] border-gray-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <IconComp className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#FF6B00]'}`} />
                      <span className={`text-sm font-bold tracking-wide ${isActive ? 'text-white' : 'text-[#1A1A1D]'}`}>{ind.name}</span>
                    </div>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90 text-white' : 'text-gray-400'}`} />
                  </div>
                )
              })}
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeIndustry ? (
                  (() => {
                    const currentInd = industries.find(i => i.id === activeIndustry)
                    const IndIcon = currentInd.icon
                    return (
                      <motion.div 
                        key={currentInd.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col justify-between p-8 sm:p-12 border rounded-none bg-[#FFFDF9] border-gray-200 shadow-2xs"
                      >
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3 text-[#FF6B00]">
                            <IndIcon className="w-8 h-8" />
                            <span className="text-xs uppercase font-mono tracking-widest font-bold">Component Engineering Data</span>
                          </div>
                          
                          <h3 className="text-2xl sm:text-4xl font-light text-[#1A1A1D] leading-tight">{currentInd.name}</h3>
                          <p className="text-base sm:text-lg leading-relaxed text-[#4B5563] font-light">{currentInd.desc}</p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-8 border-gray-200">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF6B00] font-bold">Primary Alloy Selection</span>
                            <p className="text-base font-bold font-mono text-[#1A1A1D]">{currentInd.alloy}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF6B00] font-bold">Engineering Requirement</span>
                            <p className="text-base font-bold text-[#1A1A1D]">{currentInd.highlight}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })()
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-12 border border-dashed rounded-none border-gray-300 bg-[#F9FAFB]"
                  >
                    <Briefcase className="w-12 h-12 text-[#FF6B00] mb-4 opacity-50" />
                    <h3 className="text-xl font-bold text-[#1A1A1D]">Select an Industry</h3>
                    <p className="text-xs max-w-sm mt-2 leading-relaxed text-[#4B5563] font-light">
                      Select any sector on the left to reveal our component configurations, choose alloys, and operational specs layouts.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 6. SYSTEMATIC QUALITY CERTIFICATION LAB    */}
      {/* ========================================== */}
      <section id="quality" className="py-24 sm:py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#FF6B00]">QUALITY ASSURANCE</span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#1A1A1D] leading-none">CERTIFIED PROCESS RELIABILITY</h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#4B5563] font-light">
                Quality is in our foundation. We maintain strict compliance with global quality and environmental standards across all plant operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((iso) => (
                  <div key={iso} className="p-5 border text-center rounded-none bg-[#F9FAFB] border-gray-200 shadow-2xs">
                    <ShieldCheck className="w-8 h-8 text-[#FF6B00] mx-auto mb-3" />
                    <span className="text-lg font-bold block text-[#1A1A1D]">{iso}</span>
                    <span className="text-[10px] font-mono tracking-wider text-green-600 uppercase font-semibold">CERTIFIED</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-sm uppercase font-mono tracking-wider text-[#FF6B00] font-bold">Roadmap Certifications</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#4B5563]">
                    <span className="font-bold">AS9100 (Aerospace & Defence Quality Framework)</span>
                    <span className="text-[#FF6B00]">In progress (Dec-2026 Target)</span>
                  </div>
                  <div className="h-2 w-full rounded-none overflow-hidden bg-gray-200">
                    <div className="h-full bg-[#FF6B00]" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#4B5563]">
                    <span className="font-bold">IATF 16949 (Automotive Quality Management)</span>
                    <span className="text-[#FF6B00]">Planned (Mar-2027 Target)</span>
                  </div>
                  <div className="h-2 w-full rounded-none overflow-hidden bg-gray-200">
                    <div className="h-full bg-[#FF6B00]" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 border rounded-none bg-white border-gray-200 shadow-md">
                <h3 className="text-xl font-bold mb-6 border-b pb-4 border-gray-200 text-[#1A1A1D]">In-House Laboratory & Testing Equipment</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {[
                    { name: 'Optical Emission Spectrometer', role: 'Ensures absolute chemical alloy composition compliance metrics.' },
                    { name: 'Coordinate Measuring Machine (CMM)', role: 'Fully automated 3D dimensional tolerance mapping down to microns.' },
                    { name: 'X-Ray & Radiography Testing', role: 'Real-time structural density and blow-hole detection profiles.' },
                    { name: 'Universal Testing Machine (UTM)', role: 'Verifies tensile parameters, elongation, and structural yield stability.' },
                    { name: 'Hardness & Microstructure Verification', role: 'Evaluates boundary structures and Brinell parameters.' }
                  ].map((eq, eidx) => (
                    <li key={eidx} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-none bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[10px] font-mono text-[#FF6B00] font-bold">
                        {eidx + 1}
                      </div>
                      <div>
                        <span className="text-sm font-bold block text-[#1A1A1D]">{eq.name}</span>
                        <span className="text-xs text-[#4B5563] font-light">{eq.role}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. FACILITIES INFRASTRUCTURE RUNTIME STATS */}
      {/* ========================================== */}
      <section id="facilities" className="py-24 sm:py-32 bg-[#F9FAFB] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF6B00] font-bold">INFRASTRUCTURE CAPACITY</span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#1A1A1D]">PLANT & FACILITY METRICS</h2>
            <p className="text-sm sm:text-base text-[#4B5563] font-light">
              High-output industrial spaces engineered to support continuous heavy contractual scopes without downtime logs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: 'FURNACE & POURING', val: '5,000 T', sub: 'Annum melting capacity', detail: '3x Inductotherm units' },
              { label: 'CASTING WEIGHT RANGE', val: '0.1-150', sub: 'Kilograms per part', detail: 'Micro items to heavy casings' },
              { label: 'MACHINING INSTALLATIONS', val: '12x CNC', sub: 'Mazak & Haas centers', detail: 'Precision 5-Axis tooling' },
              { label: 'LEAK CONTAINER TESTING', val: '10 BAR', sub: 'Differential decay checking', detail: '100% diagnostic track' },
              { label: 'ANNUAL PLANT THROUGHPUT', val: '4,500 MT', sub: 'Finished casting output', detail: 'Global OEM delivery chain' }
            ].map((stat, sidx) => (
              <div key={sidx} className="p-6 border rounded-none flex flex-col justify-between min-h-[220px] bg-white border-gray-200 shadow-2xs hover:border-[#FF6B00] transition-colors duration-300">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF6B00] font-bold block">{stat.label}</span>
                  <p className="text-3xl font-extrabold tracking-tight text-[#1A1A1D] mt-4">{stat.val}</p>
                </div>
                <div className="border-t pt-4 border-gray-100 mt-6">
                  <span className="text-xs font-bold block text-[#1A1A1D]">{stat.sub}</span>
                  <span className="text-[11px] block mt-0.5 text-[#4B5563] font-light">{stat.detail}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 8. PROCUREMENT RFQ SUBMISSION ENGINE       */}
      {/* ========================================== */}
      <section id="rfq" className="py-24 sm:py-32 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF6B00] font-bold">DIGITAL SOURCING</span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#1A1A1D]">REQUEST ENGINEERING QUOTE</h2>
            <p className="text-sm sm:text-base max-w-xl mx-auto text-[#4B5563] font-light">
              Transmit your technical CAD blueprints below. SGI technical desks complete process tooling feasibility tracking within 24 hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 border rounded-none bg-white border-gray-200 shadow-lg">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="rfq-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleRFQSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Contact Name *</label>
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B00] bg-[#F9FAFB]"
                      />
                      {formErrors.name && <span className="text-[11px] text-red-500 font-mono flex items-center">{formErrors.name}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Company Legal Name *</label>
                      <input 
                        required
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Siemens AG"
                        className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B00] bg-[#F9FAFB]"
                      />
                      {formErrors.company && <span className="text-[11px] text-red-500 font-mono flex items-center">{formErrors.company}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Corporate Email *</label>
                      <input 
                        required
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B00] bg-[#F9FAFB]"
                      />
                      {formErrors.email && <span className="text-[11px] text-red-500 font-mono flex items-center">{formErrors.email}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Phone Number</label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B00] bg-[#F9FAFB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-6 border-gray-100">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Aluminium Alloy Profile</label>
                      <select 
                        value={alloy}
                        onChange={(e) => setAlloy(e.target.value)}
                        className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm font-mono focus:outline-none focus:border-[#FF6B00] bg-white"
                      >
                        <option value="A356">AlSi7Mg0.3 (A356) - Structural Subsystems</option>
                        <option value="ADC12">ADC12 / AlSi9Cu3 - High Scalability Output</option>
                        <option value="LM6">LM6 / Galvanic Salt Cavitation Proof</option>
                        <option value="LM25">LM25 / Heavy solutions parameter framework</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Annual Volume target</label>
                        <span className="text-xs font-mono font-bold text-[#FF6B00]">{quantity.toLocaleString()} Pcs</span>
                      </div>
                      <input 
                        type="range" 
                        min="1000" 
                        max="100000" 
                        step="1000"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#FF6B00] bg-gray-200 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-6 border-gray-100">
                    <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Attach Print Schematics (PDF, STEP, ZIP) *</label>
                    <div className="relative border border-dashed rounded-none p-8 text-center bg-[#F9FAFB] border-gray-300 hover:border-[#FF6B00] transition-colors">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.zip,.rar"
                      />
                      <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                        <UploadCloud className={`w-8 h-8 ${drawingFile ? 'text-[#FF6B00]' : 'text-gray-400'}`} />
                        {drawingFile ? (
                          <div>
                            <span className="text-sm font-bold font-mono text-[#FF6B00] block">{drawingFile.name}</span>
                            <span className="text-xs text-gray-400">({(drawingFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                          </div>
                        ) : (
                          <div>
                            <span className="text-sm font-bold text-[#1A1A1D] block">Drag & drop files here, or explore folders</span>
                            <span className="text-xs text-gray-400 block mt-1">Accepts STEP, STP, DWG, DXF, PDF, ZIP (Max 25MB)</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {formErrors.file && <span className="text-[11px] text-red-500 font-mono flex items-center">{formErrors.file}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1D]">Technical Directives / Notes</label>
                    <textarea 
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify critical solutions, surface coatings or leak verification criteria drops..."
                      className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B00] bg-[#F9FAFB] resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1A1A1D] hover:bg-[#FF6B00] text-white font-mono uppercase tracking-widest font-bold text-sm rounded-none transition-all duration-300 shadow-md cursor-pointer border-none disabled:opacity-50"
                  >
                    {isSubmitting ? 'PROCESSING ESTIMATION...' : 'SUBMIT DESIGN BLUEPRINTS'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="rfq-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1D]">RFQ Blueprint Synced</h3>
                    <p className="text-sm max-w-md mx-auto text-[#4B5563] font-light leading-relaxed">
                      SGI systems have registered your project metrics. Feasibility reference payload allocated code: <span className="font-mono font-bold text-[#1A1A1D]">#SGI-{Math.floor(4000 + Math.random() * 5000)}</span>.
                    </p>
                  </div>

                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-[#FF6B00]/30 text-[#FF6B00] hover:bg-[#FF6B00]/5 text-xs font-mono uppercase tracking-wider rounded-none font-bold transition-all duration-300 bg-transparent cursor-pointer"
                  >
                    Submit Another Profile
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 9. GLOBAL SYSTEM LIGHT FOOTER CONNECTOR    */}
      {/* ========================================== */}
      <footer className="border-t py-16 sm:py-24 bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <img src="/skino_logo.png" alt="SKINO Logo" className="h-16 w-auto object-contain" />
              <p className="text-xs sm:text-sm max-w-sm leading-relaxed text-[#4B5563] font-light">
                Superkino Equipments Pvt. Ltd. (SKINO) converts complex design criteria into high-stress, precision aluminium components serving global power distribution and electric vehicle grids since 1965.
              </p>
              <span className="text-xs font-mono block text-[#FF6B00]">&copy; {new Date().getFullYear()} www.skino.in. All Rights Reserved.</span>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-bold">Site Directory</h4>
              <ul className="space-y-2 text-xs font-bold list-none p-0 m-0">
                <li><a href="#about" className="hover:text-[#FF6B00] text-[#4B5563] no-underline transition-colors">About Us</a></li>
                <li><a href="#capabilities" className="hover:text-[#FF6B00] text-[#4B5563] no-underline transition-colors">Engineering Range</a></li>
                <li><a href="#industries" className="hover:text-[#FF6B00] text-[#4B5563] no-underline transition-colors">Global Sectors</a></li>
                <li><a href="#quality" className="hover:text-[#FF6B00] text-[#4B5563] no-underline transition-colors">Quality Lab</a></li>
                <li><a href="#facilities" className="hover:text-[#FF6B00] text-[#4B5563] no-underline transition-colors">Plant Capacity</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-bold">Casting Alloys</h4>
              <ul className="space-y-2 text-xs font-mono text-[#4B5563] list-none p-0 m-0 font-light">
                <li>A356.2 (AlSi7Mg0.3)</li>
                <li>ADC12 (AlSi9Cu3)</li>
                <li>LM6 (AlSi12 Variant Matrix)</li>
                <li>LM25 (BS1490 Framework)</li>
              </ul>
            </div>

            <div className="space-y-4 text-xs">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-bold">Headquarters</h4>
              <p className="leading-relaxed text-[#4B5563] font-light">
                Superkino Equipments Pvt. Ltd.<br />
                Industrial Area Phase-2, IMT Manesar,<br />
                Gurugram Sourcing Region, Haryana,<br />
                India
              </p>
              <div className="pt-2 border-t border-gray-100 space-y-1 font-mono text-gray-400">
                <span className="block">Email: engineering@skino.in</span>
                <span className="block">Phone: +91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
            <div className="flex items-center space-x-2">
              <Globe size={14} className="text-[#FF6B00]" />
              <span>Plant Telemetry: Connected Network | Active Operations</span>
            </div>
            <div className="flex space-x-6">
              <a href="#rfq" className="text-[#FF6B00] hover:underline font-bold no-underline">EXPORT CONTRACT PORTAL</a>
              <span>|</span>
              <span>ISO 9001:2015 MANAGEMENT CODES</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App

















 
















 


