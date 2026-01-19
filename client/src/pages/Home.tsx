import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Coffee, PenTool, Menu, X, Quote, ExternalLink, Send, Lightbulb, Image, GitMerge, Zap, DollarSign, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * ENHANCED VERSION - Improved visual hierarchy, contrast, and aesthetics
 * - Hero: Gradient backgrounds, decorative elements, enhanced stats
 * - Sections: Better visual separation with gradients and accents
 * - Cards: Enhanced hover states, gradient borders, depth
 * - Typography: Better contrast and hierarchy
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState('design');
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleImageLoad = (imageId: string) => {
    setImageLoaded(prev => ({ ...prev, [imageId]: true }));
  };

  const capabilities = {
    research: {
      title: "Research & Strategy",
      items: ["User research & interviews", "Market research & analysis", "Competitor analysis", "Strategic planning", "Product branding"]
    },
    design: {
      title: "Design & CAD",
      items: ["Concept ideation & sketching", "3D CAD modeling (SolidWorks, Fusion, Rhino)", "Form development & refinement", "Color, material, finish (CMF)", "User-centered design", "Design for manufacturing (DFM)"]
    },
    visualization: {
      title: "Visualization",
      items: ["CGI product renders (KeyShot)", "CGI animations", "VR visualization (Gravity Sketch)", "AI-assisted visualization", "Pitch deck materials", "Investor presentations"]
    },
    production: {
      title: "Production",
      items: ["3D printing & rapid prototyping", "Functional prototypes", "Dimensioned drawings", "Assembly documents", "Bill of materials", "Supplier coordination"]
    },
    launch: {
      title: "Go-to-Market",
      items: ["Licensing sell sheets", "Presales websites", "Packaging design", "User guides", "Merchandise design", "Go-to-market guidance"]
    }
  };

  // Optimized image paths - using WebP format
  const getCapabilityImage = (capability: string) => {
    const images: Record<string, string> = {
      research: '/images/capability-research-strategy.webp',
      design: '/images/design-process-optimized.webp',
      visualization: '/images/cap-visualization-optimized.webp',
      production: '/images/cap-production-optimized.webp',
      launch: '/images/cap-go-to-market-optimized.webp'
    };
    return images[capability] || images.design;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navigation - Enhanced with better styling */}
      <nav className="fixed top-0 w-full z-50 nav-enhanced">
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg" aria-label="Martin Veldsman - Home">
            <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
              <PenTool className="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 text-sm lg:text-base tracking-tight leading-tight">Martin Veldsman</span>
              <span className="hidden lg:block text-xs text-slate-500 leading-tight">Product Design Engineer</span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="nav-link text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Challenges</a>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="nav-link text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Capabilities</a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="nav-link text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Results</a>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="nav-link text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Work Together</a>
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden md:block">
            <Button className="cta-primary bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm lg:text-base h-10 lg:h-12 px-5 lg:px-6 rounded-full">
              Start a Conversation
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2 focus:outline-none focus:text-amber-500">Challenges</a>
              <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2 focus:outline-none focus:text-amber-500">Capabilities</a>
              <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2 focus:outline-none focus:text-amber-500">Results</a>
              <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2 focus:outline-none focus:text-amber-500">Work Together</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button className="cta-primary bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm h-10 w-full mt-2 rounded-full">
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO - Enhanced with gradient background ==================== */}
      <section className="hero-gradient pt-28 sm:pt-32 lg:pt-40 pb-8 lg:pb-12 px-4 relative">
        {/* Decorative elements */}
        <div className="hero-decoration hero-decoration-1" aria-hidden="true"></div>
        <div className="hero-decoration hero-decoration-2" aria-hidden="true"></div>
        
        <div className="container relative z-10">
          {/* Status Badge - Enhanced */}
          <div className="status-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 lg:mb-10">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-emerald-700 text-sm lg:text-base font-semibold">Available for Full-Time & Contract in Tampa Bay</span>
          </div>

          {/* Hero Title - Enhanced with gradient text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.05] tracking-tight text-slate-900 mb-6 lg:mb-8 section-heading">
            Bring your product ideas to life.
            <br />
            <span className="hero-title-gradient">Without the costly headaches.</span>
          </h1>
          
          {/* Target audience qualifier */}
          <p className="text-base lg:text-lg text-amber-600 font-semibold mb-6 lg:mb-8 tracking-wide">
            For startups, brands, and product teams building physical products who need to move fast.
          </p>
          
          {/* Hero description - more concrete value */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-4xl mb-6 lg:mb-8">
            I've delivered 500+ designs to manufacturing—catching costly DFM issues before they become $100K problems. From napkin sketch to factory floor, I bridge the gap between beautiful design and production reality.
          </p>

          <p className="text-base lg:text-lg xl:text-xl text-slate-500 max-w-3xl mb-10 lg:mb-12">
            Research → Design → Visualization → Production → Launch. One designer who handles the full pipeline, or plugs into your team wherever you need help.
          </p>

          {/* Quick proof - Enhanced stats cards */}
          <div className="flex flex-wrap gap-4 lg:gap-6 mb-10 lg:mb-12">
            <div className="stat-card">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 block">12+</span>
              <span className="text-sm lg:text-base text-slate-600">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 block">500+</span>
              <span className="text-sm lg:text-base text-slate-600">Designs Delivered</span>
            </div>
            <div className="stat-card stat-card-highlight">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-600 block">$4M+</span>
              <span className="text-sm lg:text-base text-amber-700">Raised by Clients</span>
            </div>
          </div>

          {/* CTAs - Enhanced buttons */}
          <div className="flex flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-10">
            <a href="mailto:martin@designconquest.com?subject=Let's%20Talk%20-%20Product%20Development">
              <Button className="cta-primary bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-sm lg:text-base xl:text-lg font-bold gap-2 lg:gap-3 rounded-full">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                Start a Conversation
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
              </Button>
            </a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')}>
              <Button variant="outline" className="cta-secondary border-2 border-slate-300 text-slate-700 hover:border-amber-500 hover:bg-amber-50 px-5 lg:px-7 h-12 lg:h-14 xl:h-16 text-sm lg:text-base xl:text-lg font-semibold gap-2 lg:gap-3 rounded-full">
                See My Work
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
              </Button>
            </a>
          </div>
          
          {/* Tertiary CTA - scroll hint */}
          <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="inline-flex items-center gap-2 text-sm lg:text-base text-slate-500 hover:text-amber-600 transition-colors mb-16 lg:mb-20 group">
            <span>See how I helped BANQloop raise $4M+</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Hero Image - Enhanced container */}
      <section className="px-4 pb-20 lg:pb-28 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="hero-image-container rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
            <img 
              src="/images/hero-idea-to-product-optimized.webp" 
              alt="Product design journey from sketch to CAD model to finished product - showing a speaker design evolution"
              className={`w-full h-auto object-cover transition-opacity duration-500 ${imageLoaded['hero'] ? 'opacity-100' : 'opacity-0'}`}
              loading="eager"
              onLoad={() => handleImageLoad('hero')}
            />
          </div>
        </div>
      </section>

      {/* ==================== COMMON CHALLENGES - Enhanced section ==================== */}
      <section id="challenges" className="section-challenges py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label text-amber-500 text-sm lg:text-base font-bold uppercase tracking-wider mb-4 lg:mb-6">Common Challenges</p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 lg:mb-6">
            Product development is hard.
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 mb-12 lg:mb-16 max-w-3xl">
            Here's where teams usually get stuck.
          </p>

          {/* Challenge cards - Enhanced with new styling */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="challenge-card bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl group">
              <div className="icon-container w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5">
                <Lightbulb className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We have an idea but don't know where to start"</h3>
              <p className="text-slate-600 lg:text-lg">You need someone to turn a rough concept into something concrete—research, strategy, and a clear path forward.</p>
            </div>

            <div className="challenge-card bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl group">
              <div className="icon-container w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5">
                <Image className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We need visuals that sell"</h3>
              <p className="text-slate-600 lg:text-lg">Investors, customers, or stakeholders need to see it to believe it. You need renderings, animations, or pitch materials that convince.</p>
            </div>

            <div className="challenge-card bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl group">
              <div className="icon-container w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5">
                <GitMerge className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"Design and manufacturing don't talk"</h3>
              <p className="text-slate-600 lg:text-lg">Beautiful concepts that can't be built. Buildable products that lost their soul. You need someone who thinks in both languages.</p>
            </div>

            <div className="challenge-card bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl group">
              <div className="icon-container w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We're moving too slow"</h3>
              <p className="text-slate-600 lg:text-lg">Revisions drag on. Timelines slip. You need faster iteration without sacrificing quality.</p>
            </div>

            <div className="challenge-card bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl group">
              <div className="icon-container w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5">
                <DollarSign className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"Our costs are out of control"</h3>
              <p className="text-slate-600 lg:text-lg">The design looks great but costs too much to produce. You need DFM optimization and cost engineering from the start.</p>
            </div>

            <div className="challenge-card bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl group">
              <div className="icon-container w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We don't know how to launch"</h3>
              <p className="text-slate-600 lg:text-lg">Product's ready but you need packaging, user guides, sell sheets, or a presales website to actually go to market.</p>
            </div>
          </div>

          {/* Transition to solution */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-slate-600 text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto mb-8">
              The common thread? <span className="font-bold text-slate-900">You need someone who can see the whole picture</span>—not just one piece of the puzzle.
            </p>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-bold text-lg lg:text-xl transition-colors group">
              <span>Here's how I solve these challenges</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WHAT I BRING - Enhanced section ==================== */}
      <section id="capabilities" className="section-capabilities py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label text-amber-500 text-sm lg:text-base font-bold uppercase tracking-wider mb-4 lg:mb-6">What I Bring to the Table</p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 lg:mb-6">
            End-to-end product development capabilities.
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 mb-12 lg:mb-16 max-w-4xl">
            I can take you from initial research through market launch—or plug in wherever your team needs support.
          </p>

          {/* Capability Tabs - Enhanced */}
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-10 lg:mb-12" role="tablist" aria-label="Capabilities">
            {Object.entries(capabilities).map(([key, cap]) => (
              <button
                key={key}
                onClick={() => setActiveCapability(key)}
                role="tab"
                aria-selected={activeCapability === key}
                aria-controls={`panel-${key}`}
                className={`capability-tab px-4 lg:px-6 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                  activeCapability === key
                    ? 'capability-tab-active bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {/* Active Capability Content - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div 
              id={`panel-${activeCapability}`}
              role="tabpanel"
              className="capability-panel p-8 lg:p-10 xl:p-12"
            >
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 lg:mb-8">{capabilities[activeCapability as keyof typeof capabilities].title}</h3>
              <ul className="space-y-4 lg:space-y-5">
                {capabilities[activeCapability as keyof typeof capabilities].items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 lg:gap-4">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 lg:text-lg xl:text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capability image - Enhanced */}
            <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] lg:aspect-[16/12] shadow-xl">
              <img 
                src={getCapabilityImage(activeCapability)}
                alt={`${capabilities[activeCapability as keyof typeof capabilities].title} - professional workspace and tools`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 lg:mt-16 bg-gradient-to-r from-amber-50 to-amber-100/50 p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-amber-200 max-w-5xl">
            <p className="text-slate-700 text-lg lg:text-xl mb-6">
              <span className="font-bold text-slate-900">The difference:</span> Most teams hire separate researchers, designers, CAD engineers, visualization specialists, and manufacturing consultants. I can do all of it—or work alongside your existing team wherever you need the help.
            </p>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg transition-colors group">
              <span>See how this approach delivers results</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TRACK RECORD - Enhanced dark section ==================== */}
      <section id="results" className="section-results py-20 lg:py-28 xl:py-32 px-4 text-white scroll-mt-20">
        <div className="container relative z-10">
          <p className="section-label text-amber-400 text-sm lg:text-base font-bold uppercase tracking-wider mb-4 lg:mb-6">Track Record</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-16 lg:mb-20">
            This approach delivers results.
          </h2>

          {/* BANQloop - Enhanced */}
          <div className="mb-20 lg:mb-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3] shadow-2xl ring-1 ring-white/10">
                <img 
                  src="/images/banqloop-kiosk-optimized.webp" 
                  alt="BANQloop AI recycling kiosk - sleek modern design with touchscreen interface"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-amber-400 font-bold text-lg lg:text-xl xl:text-2xl uppercase tracking-wider mb-3 lg:mb-4">$4M+ Raised</p>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">BANQloop</h3>
                <p className="text-slate-300 text-lg lg:text-xl mb-6 lg:mb-8">AI recycling kiosks. Took rough concept to investor-ready product—design, visualization, and manufacturing strategy that proved technical feasibility.</p>
                <p className="text-amber-400 font-bold text-lg lg:text-xl">Concept → Funded in 6 weeks</p>
              </div>
            </div>
          </div>

          {/* Design Conquest - Enhanced */}
          <div className="mb-20 lg:mb-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <p className="text-amber-400 font-bold text-lg lg:text-xl xl:text-2xl uppercase tracking-wider mb-3 lg:mb-4">500+ Deliverables</p>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Design Conquest</h3>
                <p className="text-slate-300 text-lg lg:text-xl mb-6 lg:mb-8">Built a design-to-manufacturing service for DTCs and OEMs. Research, design, visualization, production docs—the full pipeline.</p>
                <p className="text-amber-400 font-bold text-lg lg:text-xl">Avg 72-hour turnaround</p>
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden order-1 lg:order-2 bg-slate-800 aspect-[4/3] shadow-2xl ring-1 ring-white/10">
                <img 
                  src="/images/speaker-before-after.webp" 
                  alt="Before and after comparison: initial concept sketch transformed into photorealistic product render"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Startup Sprints - Enhanced */}
          <div className="mb-16 lg:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3] hover:opacity-90 transition-opacity shadow-2xl ring-1 ring-white/10">
                <img 
                  src="/images/product-portfolio-optimized.webp" 
                  alt="Grid of various product designs showing range of capabilities across different industries"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-amber-400 font-bold text-xl lg:text-2xl xl:text-3xl uppercase tracking-wider mb-3 lg:mb-4">10x Faster</p>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Startup Sprints</h3>
                <p className="text-slate-300 text-lg lg:text-xl mb-6 lg:mb-8">Rapid 0→1 product development for early-stage founders. AI-accelerated workflows compress months into weeks.</p>
                <p className="text-amber-400 font-bold text-lg lg:text-xl">3-6 months → 1-2 weeks</p>
              </div>
            </div>
          </div>

          {/* Transition to testimonials */}
          <div className="text-center pt-8 border-t border-slate-700/50">
            <p className="text-slate-400 text-lg lg:text-xl mb-4">Don't just take my word for it.</p>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-lg transition-colors group">
              <span>Hear from clients</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS - Enhanced ==================== */}
      <section id="testimonials" className="py-20 lg:py-28 xl:py-32 px-4 bg-gradient-to-b from-slate-50 to-white scroll-mt-20" aria-labelledby="testimonials-heading">
        <div className="container">
          <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          <p className="section-label text-center text-amber-500 text-sm lg:text-base font-bold uppercase tracking-wider mb-4 lg:mb-6">Client Testimonials</p>
          <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-12 lg:mb-16 section-heading">What people say about working with Martin</h3>
          
          {/* 6 testimonials in 3x2 grid - Enhanced cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div className="testimonial-card">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Martin delivered product designs that have <span className="font-bold text-slate-900">clear advantages over anything on the market</span>. His understanding of both aesthetics and engineering constraints is rare."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg shadow-lg">RC</div>
                <div>
                  <p className="font-bold text-slate-900 text-base lg:text-lg">Ryan Collins</p>
                  <p className="text-slate-500 text-sm lg:text-base">CEO at Lumina Audio</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Martin's ability to bridge design and manufacturing <span className="font-bold text-slate-900">saved us months of back-and-forth</span>. He caught issues our engineers missed and proposed solutions on the spot."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg shadow-lg">AT</div>
                <div>
                  <p className="font-bold text-slate-900 text-base lg:text-lg">Amanda Torres</p>
                  <p className="text-slate-500 text-sm lg:text-base">Founder at NovaTech Devices</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Fast, professional, and understood our startup constraints. Martin delivered <span className="font-bold text-slate-900">investor-ready renderings in days</span> that helped us close our seed round."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg shadow-lg">DC</div>
                <div>
                  <p className="font-bold text-slate-900 text-base lg:text-lg">David Chen</p>
                  <p className="text-slate-500 text-sm lg:text-base">VP of Product at Meridian Home</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom row - 3 more testimonials */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="testimonial-card">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Martin helped us visualize a medical device for FDA submission. <span className="font-bold text-slate-900">Every tolerance and material callout was accurate</span>. The reviewers commented on how clear our documentation was."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg shadow-lg">SL</div>
                <div>
                  <p className="font-bold text-slate-900 text-base lg:text-lg">Sarah Lin</p>
                  <p className="text-slate-500 text-sm lg:text-base">Director of Engineering at MedCore</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Martin <span className="font-bold text-slate-900">thinks like a founder</span>—he's not just designing, he's solving business problems. He pushed back on ideas that would've cost us in manufacturing."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg shadow-lg">JM</div>
                <div>
                  <p className="font-bold text-slate-900 text-base lg:text-lg">James Mitchell</p>
                  <p className="text-slate-500 text-sm lg:text-base">Serial Entrepreneur, 3x Founder</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"We needed to <span className="font-bold text-slate-900">go from concept to production-ready in 8 weeks</span>. Martin made it happen. His DFM expertise saved us from costly tooling revisions."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg shadow-lg">KP</div>
                <div>
                  <p className="font-bold text-slate-900 text-base lg:text-lg">Kevin Park</p>
                  <p className="text-slate-500 text-sm lg:text-base">CTO at Helix Robotics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transition to Work Together */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-slate-600 text-lg lg:text-xl mb-4">Ready to get similar results?</p>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-bold text-lg transition-colors group">
              <span>Let's work together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WORK TOGETHER - Enhanced ==================== */}
      <section id="work-together" className="section-work-together py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label text-amber-500 text-sm lg:text-base font-bold uppercase tracking-wider mb-4 lg:mb-6">Work Together</p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-12 lg:mb-16">
            Two ways to engage.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Full-Time - Enhanced highlight card */}
            <div className="work-card work-card-highlight p-8 lg:p-10 xl:p-12">
              <p className="text-amber-600 font-bold text-sm lg:text-base uppercase tracking-wider mb-2 lg:mb-3">Full-Time / Embedded</p>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-3 lg:mb-4">I'll join your team</h3>
              <p className="text-slate-600 text-sm lg:text-base mb-4 lg:mb-5">Ideal for: Companies building physical products who need ongoing design & manufacturing expertise</p>
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">Looking for the right fit—a team building products that matter, where design thinking and manufacturing reality both have a seat at the table.</p>
              <ul className="space-y-4 lg:space-y-5 mb-8 lg:mb-10">
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Day 1 contribution across the product pipeline</span>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Bridge between design, engineering, and business</span>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">AI-accelerated workflows (10-15 directions/day)</span>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Catch costly manufacturing mistakes early</span>
                </li>
              </ul>
              <a href="mailto:martin@designconquest.com?subject=Full-Time%20Opportunity%20-%20Let's%20Talk">
                <Button className="cta-primary w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-bold rounded-full">
                  Let's Talk About Fit
                </Button>
              </a>
            </div>

            {/* Contract - Enhanced card */}
            <div className="work-card p-8 lg:p-10 xl:p-12">
              <p className="text-slate-500 font-bold text-sm lg:text-base uppercase tracking-wider mb-2 lg:mb-3">Contract / Project</p>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-3 lg:mb-4">I'll solve specific challenges</h3>
              <p className="text-slate-500 text-sm lg:text-base mb-4 lg:mb-5">Ideal for: Startups, founders, or teams with a specific project or milestone to hit</p>
              <p className="text-slate-600 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">Have a project that needs expertise? I can plug in wherever you need help—from quick concept sprints to full product development.</p>
              <ul className="space-y-4 lg:space-y-5 mb-8 lg:mb-10">
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Concept Sprint: Idea → renderings + strategy (1-2 weeks)</span>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Design-to-Factory: Full CAD through production docs</span>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Visualization: Renderings, animations, pitch materials</span>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 lg:text-lg">Launch Support: Packaging, guides, presales pages</span>
                </li>
              </ul>
              <a href="mailto:martin@designconquest.com?subject=Project%20Inquiry%20-%20Let's%20Discuss">
                <Button variant="outline" className="cta-secondary w-full border-2 border-slate-300 text-slate-700 hover:border-amber-500 hover:bg-amber-50 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-bold rounded-full">
                  Discuss Your Project
                </Button>
              </a>
            </div>
          </div>

          {/* Not sure fallback */}
          <div className="text-center mt-12 lg:mt-16 pt-8 lg:pt-10 border-t border-slate-200">
            <p className="text-slate-600 text-lg lg:text-xl mb-4">Not sure which is right for you?</p>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-bold text-lg transition-colors group">
              <span>Let's chat and figure it out together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY - Enhanced ==================== */}
      <section id="tampa" className="section-tampa py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20 relative">
        <div className="container max-w-5xl relative z-10">
          <div className="flex items-center gap-2 lg:gap-3 mb-6 lg:mb-8">
            <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" aria-hidden="true" />
            <p className="text-amber-700 text-sm lg:text-base font-bold uppercase tracking-wider">A Note About Tampa Bay</p>
          </div>
          
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-slate-800 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
              I recently made the move to Tampa Bay, and I have to say—I'm genuinely excited about what's happening here. The innovation ecosystem is more vibrant than I expected. I've been exploring places like spARK Labs, Tampa Bay Wave, and the St. Pete Innovation District, and there's a real energy around building things that matter.
            </p>
            
            <p className="text-slate-800 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
              I'm actively looking for my next opportunity—whether that's a full-time role with a team that values both design thinking and manufacturing reality, or contract work where I can help solve specific product challenges. But honestly, I'm also just looking to meet people and learn about what's being built in this community.
            </p>
            
            <p className="text-slate-800 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-10 lg:mb-12">
              If you're working on something interesting, I'd love to hear about it. And if you're part of a local accelerator or startup hub and want to grab coffee, I'm happy to talk through product challenges—no pitch, no agenda. Sometimes the best conversations come from just being curious about what others are building.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl mb-8 lg:mb-10 border border-amber-300 shadow-lg">
            <p className="text-amber-700 font-bold text-lg lg:text-xl mb-2 lg:mb-3">Open invitation for Tampa Bay founders</p>
            <p className="text-slate-700 lg:text-lg xl:text-xl">If you're building a physical product or need help thinking through design-to-manufacturing challenges, let's connect. First coffee is on me.</p>
          </div>

          <a href="mailto:martin@designconquest.com?subject=Coffee%20Chat%20-%20Tampa%20Bay">
            <Button className="cta-primary bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-bold gap-2 lg:gap-3 rounded-full">
              <Coffee className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
              Let's Grab Coffee
            </Button>
          </a>
        </div>
      </section>

      {/* ==================== CONTACT - Enhanced ==================== */}
      <section id="contact" className="section-contact py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="section-label text-amber-500 text-sm lg:text-base font-bold uppercase tracking-wider mb-4 lg:mb-6">Let's figure out if I can help.</p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 lg:mb-10 max-w-4xl">
            Whether you're hiring, have a project, or just want to talk about product development—I'm happy to chat.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 lg:mt-16">
            <div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">Martin Veldsman</h3>
              <p className="text-slate-600 text-base lg:text-lg xl:text-xl mb-8 lg:mb-10">Product Designer & Manufacturing Strategist</p>
              
              <div className="space-y-5 lg:space-y-6">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-4 text-slate-700 hover:text-amber-600 transition-colors group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 group-hover:bg-amber-100 rounded-xl flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl">martin@designconquest.com</span>
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-4 text-slate-700 hover:text-amber-600 transition-colors group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 group-hover:bg-amber-100 rounded-xl flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl">(540) 819-2005</span>
                </a>
                <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-amber-600 transition-colors group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 group-hover:bg-amber-100 rounded-xl flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 opacity-50" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl">Tampa Bay, FL</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-5 mt-10 lg:mt-12">
                <a href="mailto:martin@designconquest.com?subject=Let's%20Connect">
                  <Button className="cta-primary bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-bold gap-2 lg:gap-3 rounded-full">
                    <Send className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                    Send a Message
                  </Button>
                </a>
                <a href="/Martin-Veldsman-Resume.pdf" download>
                  <Button variant="outline" className="cta-secondary border-2 border-slate-300 text-slate-700 hover:border-amber-500 hover:bg-amber-50 px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-bold gap-2 lg:gap-3 rounded-full">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                    Download Resume
                  </Button>
                </a>
              </div>

              <div className="mt-6 lg:mt-8">
                <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:border-amber-500 hover:bg-amber-50 px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold gap-2 lg:gap-3 rounded-full">
                    View Design Conquest
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 via-amber-50/50 to-amber-100/30 p-8 lg:p-10 xl:p-12 rounded-2xl lg:rounded-3xl border border-slate-200 shadow-lg">
              <p className="text-slate-700 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                Building something interesting? I'd love to hear about it—even if you're not ready to hire or don't have budget for a project yet.
              </p>
              <p className="text-slate-900 font-bold text-lg lg:text-xl">— Martin</p>
              
              <div className="mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-200">
                <p className="text-sm lg:text-base text-slate-500 mb-3 lg:mb-4">Quick response guaranteed</p>
                <div className="flex items-center gap-2 lg:gap-3">
                  <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-sm lg:text-base text-slate-600">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER - Enhanced ==================== */}
      <footer className="footer-enhanced py-12 lg:py-16 px-4 bg-slate-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-8">
            <div>
              <div className="flex items-center gap-3 lg:gap-4 mb-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                  <PenTool className="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
                </div>
                <span className="font-bold text-white text-base lg:text-lg">Martin Veldsman</span>
              </div>
              <p className="text-slate-400 text-sm lg:text-base">Helping teams ship physical products faster, without the expensive mistakes.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 lg:gap-8 text-sm lg:text-base text-slate-400">
              <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1 focus:outline-none focus:text-amber-400">
                Design Conquest
                <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">LinkedIn</a>
              <a href="mailto:martin@designconquest.com" className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">Email</a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-12 pt-8 lg:pt-10 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm lg:text-base">© 2025 Martin Veldsman. Product Designer & Manufacturing Strategist.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
