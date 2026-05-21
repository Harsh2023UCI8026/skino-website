import { useState, useEffect } from 'react'
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
  
  // Theme sync
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }, [])

  // Capability Data
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

  // Industry Data
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

  // Form Validation and Submission
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
    // Simulate API upload
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setName('')
      setEmail('')
      setCompany('')
      setPhone('')
      setMessage('')
      setDrawingFile(null)
    }, 2000)
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-brand-charcoal text-brand-offwhite' : 'bg-brand-light-bg text-brand-light-text'}`}>
      
      {/* 1. Header / Navigation */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isDark ? 'glass-header' : 'glass-header-light'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="/skino_logo.png" 
              alt="SKINO Logo" 
              className="h-22 sm:h-32 w-auto object-contain" 
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>About Us</a>
            <a href="#capabilities" className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>Capabilities</a>
            <a href="#industries" className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>Industries</a>
            <a href="#quality" className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>Quality</a>
            <a href="#facilities" className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>Facilities</a>
            <a href="#rfq" className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>RFQ Portal</a>
          </nav>

         

      
<div className="hidden lg:flex items-center flex-shrink-0 ml-4">
  <button
    onClick={() => setCurrentTab('rfq')}
    className="bg-[#1A1A1D] hover:bg-[#FF6B00] text-white hover:text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 transition-colors duration-300 shadow-sm cursor-pointer rounded-none border-none block"
    style={{ 
      backgroundColor: '#1A1A1D', 
      color: '#FFFFFF',
      opacity: 1,
      visibility: 'visible'
    }}
  >
    Request Quote
  </button>
</div>

 

          {/* Mobile Menu Controls */}
          <div className="flex sm:hidden items-center space-x-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-sm border border-black/10 text-brand-light-text"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`sm:hidden border-t ${isDark ? 'bg-brand-charcoal/95 border-white/5' : 'bg-brand-light-bg border-black/5'}`}
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wide">About Us</a>
                <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wide">Capabilities</a>
                <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wide">Industries</a>
                <a href="#quality" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wide">Quality</a>
                <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wide">Facilities</a>
                <a href="#rfq" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wide">RFQ Portal</a>
                <a 
                  href="#rfq" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="w-full text-center py-3 bg-brand-orange text-white uppercase tracking-wider font-mono text-xs rounded-sm font-bold"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Glow backdrop fallback representing molten metal */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,85,0,0.12),transparent_60%)] pointer-events-none" />
        
        {/* Abstract animated lines representation */}
        <div className={`absolute inset-0 opacity-10 pointer-events-none ${isDark ? 'blueprint-grid' : 'blueprint-grid-light'}`} />
        
        {/* Dynamic Canvas Spark Simulation / Metal Texture Fallback */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/70 dark:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-light-bg via-transparent to-brand-light-bg/70 dark:hidden" />
          
          {/* Loop-style industrial dynamic background simulation using CSS */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 dark:opacity-20 blur-[120px] rounded-full bg-gradient-to-tr from-brand-orange to-yellow-500 animate-pulse duration-10000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          {/* Small technical tag */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">ESTABLISHED 1965 | GLOBAL EXPORT-READY</span>
          </motion.div>

          {/* Hero Main Heading (French cinematic typography) */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight max-w-5xl leading-[1.05]"
          >
            PRECISION <span className="text-brand-orange font-extrabold">ALUMINIUM CASTINGS</span> FOR GLOBAL OEMs
          </motion.h1>

          {/* Taglines scroll */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`mt-8 text-base sm:text-xl font-medium tracking-wide max-w-3xl ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}
          >
            Built on Quality. Cast for Performance. We deliver technology-driven casting excellence and reliability into every critical industrial component.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#rfq" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white uppercase tracking-wider font-mono text-sm rounded-sm font-bold shadow-lg hover:bg-brand-orange-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Discuss Your Requirement <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#capabilities" 
              className={`inline-flex items-center justify-center px-8 py-4 border uppercase tracking-wider font-mono text-sm rounded-sm font-medium hover:bg-white/5 transition-all duration-300 ${isDark ? 'border-white/10 text-white' : 'border-black/10 text-brand-light-text hover:bg-black/5'}`}
            >
              View Capabilities
            </a>
          </motion.div>
        </div>

        {/* Cinematic scroll down arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10 pointer-events-none">
          <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 ${isDark ? 'border-white/30' : 'border-black/30'}`}>
            <span className="w-1.5 h-2 bg-brand-orange rounded-full animate-infinite" />
          </div>
        </div>
      </section>

      {/* 3. About us / Intro overlay tab */}
      <section id="about" className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className={`rounded-sm p-8 sm:p-12 border ${isDark ? 'glass-card border-white/5 shadow-2xl bg-brand-card/90' : 'glass-card-light border-black/5 shadow-xl bg-white/95'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Superkino Text and Stats */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-orange font-bold">THE SUPERKINO STANDARD</h2>
              <p className={`text-lg sm:text-2xl leading-relaxed font-normal tracking-wide font-display ${isDark ? 'text-gray-100' : 'text-brand-light-text'}`}>
                Superkino converts complex engineering requirements into precision aluminium castings. Combining advanced casting technologies, process expertise, and high-precision machining, we support global OEMs with reliable components for demanding industrial applications worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t pt-6 border-gray-500/25">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">ESTABLISHED</span>
                  <p className="text-3xl font-extrabold tracking-tight font-display">1965</p>
                  <p className={`text-[11px] ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>60+ Years of Quality</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">EXPORT READY</span>
                  <p className="text-3xl font-extrabold tracking-tight font-display">100%</p>
                  <p className={`text-[11px] ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>Global OEM Standards</p>
                </div>
              </div>
            </div>

            {/* Industrial B2B Image Showcase */}
            <div className="lg:col-span-5 relative overflow-hidden rounded-sm border border-gray-500/20 shadow-lg group">
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
              <img 
                src="/factory_turbine.jpg" 
                alt="SKINO Advanced Aerospace Turbine Assembly" 
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1.5 bg-brand-charcoal/85 backdrop-blur-sm border border-white/10 rounded-sm">
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-orange font-bold">Advanced Aerospace Assembly</span>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 4. Capabilities Grid */}
      <section id="capabilities" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-orange font-bold">OUR ENGINEERING RANGE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">MANUFACTURING CAPABILITIES</h2>
            <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
              End-to-end solutions from mold design, casting, thermal enhancements, machining to laboratory validation.
            </p>
          </div>

          {/* Capabilities 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => {
              const IconComp = cap.icon
              const isSelected = activeCapability === cap.id
              
              return (
                <motion.div 
                  key={cap.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => setActiveCapability(isSelected ? null : cap.id)}
                  className={`group relative overflow-hidden p-8 border rounded-sm cursor-pointer transition-all duration-500 glow-border ${
                    isDark 
                      ? 'bg-brand-card/30 border-white/5 hover:border-brand-orange/30' 
                      : 'bg-white/40 border-black/5 hover:border-brand-orange/30'
                  } ${isSelected ? 'ring-1 ring-brand-orange/40' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-brand-orange/5 border border-brand-orange/10 rounded-sm group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                      <IconComp className="w-6 h-6 text-brand-orange group-hover:text-white transition-all duration-500" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-orange tracking-widest uppercase font-bold">{cap.metric}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display mt-6 tracking-wide">{cap.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>{cap.desc}</p>
                  
                  {/* Bullet specs summary */}
                  <ul className="mt-4 space-y-2 border-t pt-4 border-gray-500/10">
                    {cap.specs.slice(0, 2).map((spec, sidx) => (
                      <li key={sidx} className="flex items-center text-xs font-mono">
                        <Check className="w-3 h-3 text-brand-orange mr-2 flex-shrink-0" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable panel for Swedish style detailing */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-500/10 text-xs space-y-3"
                      >
                        <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>{cap.detail}</p>
                        <div className="p-2.5 rounded-sm bg-brand-orange/5 border border-brand-orange/10">
                          <span className="font-semibold block text-[10px] uppercase font-mono tracking-wider text-brand-orange">Engineering Specs</span>
                          <ul className="mt-1.5 space-y-1 font-mono text-[10px] list-disc list-inside">
                            {cap.specs.map((spec, sidx) => (
                              <li key={sidx} className={`${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 flex items-center justify-between text-xs font-mono font-bold tracking-wider text-brand-orange group-hover:translate-x-1 transition-all duration-300">
                    <span>{isSelected ? 'COLLAPSE DETAILS' : 'EXPLORE SPECS'}</span>
                    <ChevronRight size={14} />
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 5. Industries Segment */}
      <section id="industries" className={`py-24 sm:py-32 border-t border-b ${isDark ? 'bg-brand-dark/50 border-white/5' : 'bg-white border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-brand-orange font-bold">SECTORS WE SERVE</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">APPLICATION INDUSTRIES</h2>
            </div>
            <p className={`max-w-md text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
              Delivering high-reliability casting components engineered to sustain chemical corrosion, thermal fatigue, and heavy stress.
            </p>
          </div>

          {/* Interactive list explorer style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* List side */}
            <div className="lg:col-span-5 space-y-3">
              {industries.map((ind) => {
                const IconComp = ind.icon
                const isActive = activeIndustry === ind.id
                return (
                  <div 
                    key={ind.id}
                    onClick={() => setActiveIndustry(isActive ? null : ind.id)}
                    className={`flex items-center justify-between p-5 border rounded-sm cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-orange text-white border-brand-orange' 
                        : isDark
                          ? 'bg-brand-card/40 border-white/5 hover:bg-brand-card/70'
                          : 'bg-brand-light-card border-black/5 hover:bg-brand-light-bg'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <IconComp className={`w-5 h-5 ${isActive ? 'text-white' : 'text-brand-orange'}`} />
                      <span className="text-sm font-bold tracking-wide font-display">{ind.name}</span>
                    </div>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                )
              })}
            </div>

            {/* Showcase side (Swedish elegance) */}
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
                        className={`h-full flex flex-col justify-between p-8 sm:p-12 border rounded-sm ${isDark ? 'bg-brand-card border-white/5' : 'bg-brand-light-card border-black/5'}`}
                      >
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3 text-brand-orange">
                            <IndIcon className="w-8 h-8" />
                            <span className="text-xs uppercase font-mono tracking-widest font-bold">Component Engineering Data</span>
                          </div>
                          
                          <h3 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">{currentInd.name}</h3>
                          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>{currentInd.desc}</p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-8 border-gray-500/15">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange font-bold">Primary Alloy Selection</span>
                            <p className="text-base font-bold font-mono">{currentInd.alloy}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange font-bold">Engineering Requirement</span>
                            <p className="text-base font-bold font-display">{currentInd.highlight}</p>
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
                    className={`h-full flex flex-col items-center justify-center text-center p-12 border border-dashed rounded-sm ${isDark ? 'border-white/10' : 'border-black/10'}`}
                  >
                    <Briefcase className="w-12 h-12 text-brand-orange mb-4 opacity-50" />
                    <h3 className="text-xl font-bold font-display">Select an Industry</h3>
                    <p className={`text-xs max-w-sm mt-2 leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
                      Select any sector on the left to reveal our component layouts, engineering alloy choices, and performance specifications.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Quality & Laboratory certifications */}
      <section id="quality" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Certifications badges */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs uppercase font-mono tracking-widest text-brand-orange font-bold">QUALITY ASSURANCE</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-none">CERTIFIED PROCESS RELIABILITY</h2>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
                Quality is in our foundation. We maintain strict compliance with global quality and environmental standards across all plant operations.
              </p>

              {/* ISO Certification Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((iso) => (
                  <div 
                    key={iso}
                    className={`p-5 border text-center rounded-sm ${isDark ? 'bg-brand-card/40 border-white/5' : 'bg-white border-black/5'}`}
                  >
                    <ShieldCheck className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                    <span className="text-lg font-bold font-display block">{iso}</span>
                    <span className="text-[10px] font-mono tracking-wider text-green-500 uppercase font-semibold">CERTIFIED</span>
                  </div>
                ))}
              </div>

              {/* In-progress counts */}
              <div className="space-y-4 pt-4">
                <h3 className="text-sm uppercase font-mono tracking-wider text-brand-orange font-bold">Roadmap Certifications</h3>
                
                {/* AS9100 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold">AS9100 (Aerospace & Defence Quality)</span>
                    <span className="text-brand-orange">In progress (Dec-2026 Target)</span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                    <div className="h-full bg-brand-orange rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                {/* IATF */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold">IATF 16949 (Automotive Quality Management)</span>
                    <span className="text-brand-orange">In progress (Mar-27 Target)</span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                    <div className="h-full bg-brand-orange rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

              </div>
            </div>

            {/* In-house Laboratory details */}
            <div className="lg:col-span-6">
              <div className={`p-8 border rounded-sm ${isDark ? 'bg-brand-card/60 border-white/5' : 'bg-white border-black/5 shadow-md'}`}>
                <h3 className="text-xl font-bold font-display mb-6 border-b pb-4 border-gray-500/15">In-House Laboratory & Testing Equipment</h3>
                
                <ul className="space-y-4">
                  {[
                    { name: 'Optical Emission Spectrometer', role: 'Ensures absolute chemical alloy composition compliance.' },
                    { name: 'Coordinate Measuring Machine (CMM)', role: 'Fully automated 3D dimensional tolerance mapping.' },
                    { name: 'X-Ray & Radiography Testing', role: 'Real-time internal density and blow-hole detection.' },
                    { name: 'Universal Testing Machine (UTM)', role: 'Verifies tensile parameters, elongation, and yield strength.' },
                    { name: 'Hardness & Microstructure Tester', role: 'Evaluates crystal structures and Brinell hardness levels.' }
                  ].map((eq, eidx) => (
                    <li key={eidx} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-[10px] font-mono text-brand-orange font-bold">
                        {eidx + 1}
                      </div>
                      <div>
                        <span className="text-sm font-bold block">{eq.name}</span>
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>{eq.role}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Facility Stats Segment */}
      <section id="facilities" className={`py-24 sm:py-32 border-t border-b ${isDark ? 'bg-brand-dark/50 border-white/5' : 'bg-white border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-orange font-bold">INFRASTRUCTURE CAPACITY</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">PLANT & FACILITY METRICS</h2>
            <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
              High-output manufacturing facilities engineered to fulfill demanding heavy-volume global OEM contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: 'FURNACE & POURING', val: '5,000 T', sub: 'Annum melting capacity', detail: '3x Inductotherm furnaces' },
              { label: 'CASTING WEIGHT', val: '0.1-150', sub: 'Kilograms per single component', detail: 'Micro parts to heavy casings' },
              { label: 'MACHINING CENTERS', val: '12x CNC', sub: 'Mazak & Haas centers', detail: '5-Axis precision lines' },
              { label: 'LEAK TESTING', val: '10 BAR', sub: 'Differential Pressure testing', detail: '100% defect containment' },
              { label: 'ANNUAL CAPACITY', val: '4,500 MT', sub: 'Finished casting parts', detail: 'Global delivery index' }
            ].map((stat, sidx) => (
              <div 
                key={sidx}
                className={`p-6 border rounded-sm flex flex-col justify-between min-h-[220px] ${
                  isDark ? 'bg-brand-card/40 border-white/5' : 'bg-brand-light-card border-black/5'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold block">{stat.label}</span>
                  <p className="text-3xl font-extrabold tracking-tight font-display mt-4">{stat.val}</p>
                </div>
                <div className="border-t pt-4 border-gray-500/10 mt-6">
                  <span className="text-xs font-bold block">{stat.sub}</span>
                  <span className={`text-[11px] block mt-0.5 ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>{stat.detail}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. RFQ Portal / Page Form */}
      <section id="rfq" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,85,0,0.08),transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-orange font-bold">DIGITAL ESTIMATION</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">REQUEST ENGINEERING QUOTE</h2>
            <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
              Upload your 2D/3D part drawings. Our metallurgical engineers will return a detailed casting and machining quote.
            </p>
          </div>

          <div className={`p-8 sm:p-12 border rounded-sm ${isDark ? 'bg-brand-card border-white/5 shadow-2xl' : 'bg-white border-black/5 shadow-lg'}`}>
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
                  
                  {/* Grid 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold">Contact Name *</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-sm border text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 ${
                          isDark ? 'bg-brand-dark border-white/10 text-white' : 'bg-brand-light-card border-black/10 text-brand-light-text'
                        }`}
                      />
                      {formErrors.name && <span className="text-[11px] text-red-500 font-mono flex items-center"><FileText size={12} className="mr-1" /> {formErrors.name}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold">Company Name *</label>
                      <input 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Siemens Gmbh"
                        className={`w-full px-4 py-3 rounded-sm border text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 ${
                          isDark ? 'bg-brand-dark border-white/10 text-white' : 'bg-brand-light-card border-black/10 text-brand-light-text'
                        }`}
                      />
                      {formErrors.company && <span className="text-[11px] text-red-500 font-mono flex items-center"><FileText size={12} className="mr-1" /> {formErrors.company}</span>}
                    </div>
                  </div>

                  {/* Grid 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold">Email Address *</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. purchasing@siemens.com"
                        className={`w-full px-4 py-3 rounded-sm border text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 ${
                          isDark ? 'bg-brand-dark border-white/10 text-white' : 'bg-brand-light-card border-black/10 text-brand-light-text'
                        }`}
                      />
                      {formErrors.email && <span className="text-[11px] text-red-500 font-mono flex items-center"><FileText size={12} className="mr-1" /> {formErrors.email}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +49 89 23456"
                        className={`w-full px-4 py-3 rounded-sm border text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 ${
                          isDark ? 'bg-brand-dark border-white/10 text-white' : 'bg-brand-light-card border-black/10 text-brand-light-text'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Grid 3: Alloy Selection & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-6 border-gray-500/10">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-bold">Aluminium Alloy Required</label>
                      <select 
                        value={alloy}
                        onChange={(e) => setAlloy(e.target.value)}
                        className={`w-full px-4 py-3 rounded-sm border text-sm font-mono focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 ${
                          isDark ? 'bg-brand-dark border-white/10 text-white' : 'bg-brand-light-card border-black/10 text-brand-light-text'
                        }`}
                      >
                        <option value="A356">AlSi7Mg0.3 (A356) - Structural / Electrical</option>
                        <option value="ADC12">ADC12 / AlSi9Cu3 - High Machinability</option>
                        <option value="LM6">LM6 / AlSi12 - High Corrosion Resistance</option>
                        <option value="LM25">LM25 / BS1490 - Heavy Load Fatigue</option>
                        <option value="other">Other / Custom Specifications</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-xs font-mono uppercase tracking-wider font-bold">Annual Quantity</label>
                        <span className="text-xs font-mono font-bold text-brand-orange">{quantity.toLocaleString()} Pcs</span>
                      </div>
                      <input 
                        type="range" 
                        min="1000" 
                        max="100000" 
                        step="1000"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-500/20 rounded-lg appearance-none cursor-pointer accent-brand-orange focus:outline-none"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-gray-500">
                        <span>1,000</span>
                        <span>50,000</span>
                        <span>100,000+</span>
                      </div>
                    </div>
                  </div>

                  {/* Drag and Drop Drawing Upload */}
                  <div className="space-y-2 border-t pt-6 border-gray-500/10">
                    <label className="text-xs font-mono uppercase tracking-wider font-bold">Engineering Drawing (PDF, STEP, DWG, ZIP) *</label>
                    
                    <div className={`relative border border-dashed rounded-sm p-8 text-center transition-all duration-300 ${
                      drawingFile 
                        ? 'border-brand-orange/40 bg-brand-orange/5' 
                        : isDark ? 'border-white/15 bg-brand-dark/30 hover:border-brand-orange/30' : 'border-black/15 bg-brand-light-card hover:border-brand-orange/30'
                    }`}>
                      <input 
                        type="file" 
                        id="drawing-file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.zip,.rar"
                      />
                      
                      <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                        <UploadCloud className={`w-8 h-8 ${drawingFile ? 'text-brand-orange' : 'text-gray-400'}`} />
                        {drawingFile ? (
                          <div className="text-center">
                            <span className="text-sm font-bold font-mono block text-brand-orange">{drawingFile.name}</span>
                            <span className="text-xs text-gray-400">({(drawingFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                          </div>
                        ) : (
                          <div>
                            <span className="text-sm font-bold block">Drag & drop files here, or click to browse</span>
                            <span className="text-xs text-gray-400 block mt-1">Accepts STEP, STP, DWG, DXF, PDF, ZIP (Max 25MB)</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {formErrors.file && <span className="text-[11px] text-red-500 font-mono flex items-center"><FileText size={12} className="mr-1" /> {formErrors.file}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider font-bold">Additional Technical Instructions</label>
                    <textarea 
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify heat treatment requirements (T6, etc.), pressure testing limits, surface finishes, or machining tolerances."
                      className={`w-full px-4 py-3 rounded-sm border text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 ${
                        isDark ? 'bg-brand-dark border-white/10 text-white' : 'bg-brand-light-card border-black/10 text-brand-light-text'
                      }`}
                    />
                  </div>

                  {/* Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-orange text-white font-mono uppercase tracking-widest font-bold text-sm rounded-sm hover:bg-brand-orange-hover shadow-lg hover:shadow-xl active:scale-99 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                        <span>PROCESSING ESTIMATION...</span>
                      </>
                    ) : (
                      <span>SUBMIT DESIGN DRAWINGS</span>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div 
                  key="rfq-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-brand-orange" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display">RFQ Drawings Submitted</h3>
                    <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-gray-300' : 'text-brand-light-text'}`}>
                      Thank you for submitting your designs to SKINO. Our estimating team has queued your files for alloy composition, casting density validation, and machining time analysis.
                    </p>
                  </div>

                  <div className={`p-4 border rounded-sm max-w-sm mx-auto font-mono text-xs ${isDark ? 'bg-brand-dark border-white/10' : 'bg-brand-light-card border-black/10'}`}>
                    <span className="text-brand-orange block font-bold">ESTIMATED RESPONSE</span>
                    <span className="text-lg font-bold block mt-1">Within 24 Hours</span>
                  </div>

                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-brand-orange/30 text-brand-orange hover:bg-brand-orange/5 text-xs font-mono uppercase tracking-wider rounded-sm font-bold transition-all duration-300"
                  >
                    Submit Another Drawing
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className={`border-t py-16 sm:py-24 ${isDark ? 'bg-brand-charcoal border-white/5' : 'bg-brand-light-bg border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Branding Column */}
            <div className="lg:col-span-2 space-y-6">
              <img src="/skino_logo.png" alt="SKINO Logo" className="h-20 w-auto object-contain" />
              <p className={`text-xs sm:text-sm max-w-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-light-muted'}`}>
                Superkino Equipments Pvt. Ltd. (SKINO) converts complex design criteria into high-stress, precision aluminium components serving global power, EV, defence, and aerospace OEMs since 1965.
              </p>
              
              {/* Copy */}
              <span className="text-xs font-mono block text-brand-orange">© {new Date().getFullYear()} www.skino.in. All Rights Reserved.</span>
            </div>

            {/* Sitemap Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-orange font-bold">Site Directory</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
                <li><a href="#capabilities" className="hover:text-brand-orange transition-colors">Engineering Range</a></li>
                <li><a href="#industries" className="hover:text-brand-orange transition-colors">Global Sectors</a></li>
                <li><a href="#quality" className="hover:text-brand-orange transition-colors">Quality Lab</a></li>
                <li><a href="#facilities" className="hover:text-brand-orange transition-colors">Plant Capacity</a></li>
              </ul>
            </div>

            {/* Engineering Materials */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-orange font-bold">Casting Alloys</h4>
              <ul className="space-y-2 text-xs font-mono text-gray-400">
                <li>A356.2 (AlSi7Mg0.3)</li>
                <li>ADC12 (AlSi9Cu3)</li>
                <li>LM6 (AlSi12)</li>
                <li>LM25 (BS1490)</li>
                <li>High Strength Custom</li>
              </ul>
            </div>

            {/* Address / Contact */}
            <div className="space-y-4 text-xs">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-orange font-bold">Headquarters</h4>
              <p className="leading-relaxed">
                Superkino Equipments Pvt. Ltd.<br />
                Industrial Area Phase-2,<br />
                Global Manufacturing Hub,<br />
                India
              </p>
              <div className="pt-2 border-t border-gray-500/10 space-y-1 font-mono">
                <span className="block">Email: engineering@skino.in</span>
                <span className="block">Phone: +91 98765 43210</span>
              </div>
            </div>

          </div>

          {/* Plant location index map overlay banner */}
          <div className="mt-16 pt-8 border-t border-gray-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe size={14} className="text-brand-orange" />
              <span>Plant Telemetry: Active | Online</span>
            </div>
            <div className="flex space-x-6">
              <a href="#rfq" className="text-brand-orange hover:underline font-bold">EXPORT CONTRACT PORTAL</a>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">ISO 9001:2015 REGISTERED</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App

















 
















 


