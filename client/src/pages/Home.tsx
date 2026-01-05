import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Coffee, PenTool, Menu, X, Quote, ExternalLink, Send } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * REDESIGNED VERSION - Larger, more impactful desktop experience
 * - Typography: Larger headings, better hierarchy
 * - Layout: Bigger cards, larger images, more generous spacing
 * - Visual: Content naturally fills viewport through good design
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg" aria-label="Martin Veldsman - Home">
            <div className="w-9 h-9 lg:w-10 lg:h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <PenTool className="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
            </div>
            <span className="font-semibold text-slate-900 text-sm lg:text-base tracking-tight">Martin Veldsman</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Challenges</a>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Capabilities</a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Results</a>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Work Together</a>
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm lg:text-base h-10 lg:h-12 px-5 lg:px-6 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              Let's Talk
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
                <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm h-10 w-full mt-2">
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-8 lg:pb-12 px-4">
        <div className="container">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8 lg:mb-10">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-emerald-700 text-sm lg:text-base font-semibold uppercase tracking-wide">Available for Opportunities</span>
          </div>

          {/* Hero Title - Much larger on desktop */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.05] tracking-tight text-slate-900 mb-8 lg:mb-10">
            Take your product from
            <br />
            <span className="text-amber-500">idea to market.</span>
          </h1>
          
          {/* Hero description - larger on desktop */}
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-600 leading-relaxed max-w-4xl mb-6 lg:mb-8">
            Whether you're launching something new, improving an existing product, or need to visualize a concept that wins investors—I help you move from where you are to where you need to be.
          </p>

          <p className="text-base lg:text-lg xl:text-xl text-slate-500 max-w-3xl mb-10 lg:mb-12">
            Research → Design → Visualization → Production → Launch. One person who can do it all, or plug into your team wherever you need help.
          </p>

          {/* Quick proof - larger on desktop */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm lg:text-base xl:text-lg text-slate-500 mb-10 lg:mb-12">
            <span className="font-medium">12+ years product development</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="font-medium">500+ products delivered</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="font-medium">Concept to manufacturing</span>
          </div>

          {/* CTAs - larger buttons on desktop */}
          <div className="flex flex-wrap gap-4 lg:gap-6 mb-16 lg:mb-20">
            <a href="mailto:martin@designconquest.com?subject=Let's%20Talk%20-%20Product%20Development">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-sm lg:text-base xl:text-lg font-bold gap-2 lg:gap-3 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                Let's Talk
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
              </Button>
            </a>
            <a href="/Martin-Veldsman-Resume.pdf" download>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-5 lg:px-7 h-12 lg:h-14 xl:h-16 text-sm lg:text-base xl:text-lg font-semibold gap-2 lg:gap-3">
                <Download className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image - Full width, larger on desktop */}
      <section className="px-4 pb-20 lg:pb-28">
        <div className="container">
          <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
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

      {/* ==================== COMMON CHALLENGES ==================== */}
      <section id="challenges" className="py-20 lg:py-28 xl:py-32 px-4 bg-slate-50 scroll-mt-20">
        <div className="container">
          <p className="text-amber-500 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 lg:mb-6">Common Challenges</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 lg:mb-6">
            Product development is hard.
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 mb-12 lg:mb-16 max-w-3xl">
            Here's where teams usually get stuck.
          </p>

          {/* Challenge cards - larger on desktop */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We have an idea but don't know where to start"</h3>
              <p className="text-slate-600 lg:text-lg">You need someone to turn a rough concept into something concrete—research, strategy, and a clear path forward.</p>
            </div>

            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We need visuals that sell"</h3>
              <p className="text-slate-600 lg:text-lg">Investors, customers, or stakeholders need to see it to believe it. You need renderings, animations, or pitch materials that convince.</p>
            </div>

            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"Design and manufacturing don't talk"</h3>
              <p className="text-slate-600 lg:text-lg">Beautiful concepts that can't be built. Buildable products that lost their soul. You need someone who thinks in both languages.</p>
            </div>

            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We're moving too slow"</h3>
              <p className="text-slate-600 lg:text-lg">Revisions drag on. Timelines slip. You need faster iteration without sacrificing quality.</p>
            </div>

            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"Our costs are out of control"</h3>
              <p className="text-slate-600 lg:text-lg">The design looks great but costs too much to produce. You need DFM optimization and cost engineering from the start.</p>
            </div>

            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">"We don't know how to launch"</h3>
              <p className="text-slate-600 lg:text-lg">Product's ready but you need packaging, user guides, sell sheets, or a presales website to actually go to market.</p>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-12 lg:mt-16 text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto">
            The common thread? <span className="font-semibold text-slate-900">You need someone who can see the whole picture</span>—not just one piece of the puzzle.
          </p>
        </div>
      </section>

      {/* ==================== WHAT I BRING ==================== */}
      <section id="capabilities" className="py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container">
          <p className="text-amber-500 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 lg:mb-6">What I Bring to the Table</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 lg:mb-6">
            End-to-end product development capabilities.
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 mb-12 lg:mb-16 max-w-4xl">
            I can take you from initial research through market launch—or plug in wherever your team needs support.
          </p>

          {/* Capability Tabs - larger on desktop */}
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-10 lg:mb-12" role="tablist" aria-label="Capabilities">
            {Object.entries(capabilities).map(([key, cap]) => (
              <button
                key={key}
                onClick={() => setActiveCapability(key)}
                role="tab"
                aria-selected={activeCapability === key}
                aria-controls={`panel-${key}`}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                  activeCapability === key
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {/* Active Capability Content - larger layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div 
              id={`panel-${activeCapability}`}
              role="tabpanel"
              className="bg-slate-50 p-8 lg:p-10 xl:p-12 rounded-2xl lg:rounded-3xl"
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

            {/* Capability image - larger */}
            <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] lg:aspect-[16/12]">
              <img 
                src={getCapabilityImage(activeCapability)}
                alt={`${capabilities[activeCapability as keyof typeof capabilities].title} - professional workspace and tools`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mt-12 lg:mt-16 text-slate-600 text-lg lg:text-xl bg-amber-50 p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl border border-amber-200 max-w-5xl">
            <span className="font-semibold text-slate-900">The difference:</span> Most teams hire separate researchers, designers, CAD engineers, visualization specialists, and manufacturing consultants. I can do all of it—or work alongside your existing team wherever you need the help.
          </p>
        </div>
      </section>

      {/* ==================== TRACK RECORD ==================== */}
      <section id="results" className="py-20 lg:py-28 xl:py-32 px-4 bg-slate-900 text-white scroll-mt-20">
        <div className="container">
          <p className="text-amber-400 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 lg:mb-6">Track Record</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-16 lg:mb-20">
            This approach delivers results.
          </h2>

          {/* BANQloop - larger layout */}
          <div className="mb-20 lg:mb-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/banqloop-kiosk-optimized.webp" 
                  alt="BANQloop AI recycling kiosk - sleek modern design with touchscreen interface"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-amber-400 font-bold text-lg lg:text-xl xl:text-2xl uppercase tracking-wider mb-3 lg:mb-4">~$4M Raised</p>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">BANQloop</h3>
                <p className="text-slate-400 text-lg lg:text-xl mb-6 lg:mb-8">AI recycling kiosks. Took rough concept to investor-ready product—design, visualization, and manufacturing strategy that proved technical feasibility.</p>
                <p className="text-amber-400 font-bold text-lg lg:text-xl">Concept → Funded in 6 weeks</p>
              </div>
            </div>
          </div>

          {/* Design Conquest - larger layout */}
          <div className="mb-20 lg:mb-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <p className="text-amber-400 font-bold text-lg lg:text-xl xl:text-2xl uppercase tracking-wider mb-3 lg:mb-4">500+ Deliverables</p>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Design Conquest</h3>
                <p className="text-slate-400 text-lg lg:text-xl mb-6 lg:mb-8">Built a design-to-manufacturing service for DTCs and OEMs. Research, design, visualization, production docs—the full pipeline.</p>
                <p className="text-amber-400 font-bold text-lg lg:text-xl">Avg 72-hour turnaround</p>
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden order-1 lg:order-2 bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/speaker-before-after.webp" 
                  alt="Before and after comparison: initial concept sketch transformed into photorealistic product render"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Startup Sprints - larger layout */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/product-portfolio-optimized.webp" 
                  alt="Grid of various product designs showing range of capabilities across different industries"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-amber-400 font-bold text-lg lg:text-xl xl:text-2xl uppercase tracking-wider mb-3 lg:mb-4">10x Faster</p>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Startup Sprints</h3>
                <p className="text-slate-400 text-lg lg:text-xl mb-6 lg:mb-8">Rapid 0→1 product development for early-stage founders. AI-accelerated workflows compress months into weeks.</p>
                <p className="text-amber-400 font-bold text-lg lg:text-xl">3-6 months → 1-2 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 lg:py-28 xl:py-32 px-4 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="container">
          <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          <p className="text-center text-amber-500 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 lg:mb-6">Client Testimonials</p>
          <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-12 lg:mb-16">What people say about working with Martin</h3>
          
          {/* Top row - 3 testimonials */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div className="bg-white p-8 lg:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Martin delivered product designs for us that have clear advantages over anything on the market. His understanding of both aesthetics and engineering constraints is rare."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg">RC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-base lg:text-lg">Ryan Collins</p>
                  <p className="text-slate-500 text-sm lg:text-base">CEO at Lumina Audio</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Martin's ability to bridge design vision with manufacturing reality saved us months of back-and-forth. He caught issues our engineers missed and proposed solutions on the spot."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg">AT</div>
                <div>
                  <p className="font-semibold text-slate-900 text-base lg:text-lg">Amanda Torres</p>
                  <p className="text-slate-500 text-sm lg:text-base">Founder at NovaTech Devices</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"Fast, professional, and understood our startup constraints. Martin delivered investor-ready renderings in days that helped us close our seed round."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg">DC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-base lg:text-lg">David Chen</p>
                  <p className="text-slate-500 text-sm lg:text-base">VP of Product at Meridian Home</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom row - 2 testimonials centered */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 lg:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"We brought Martin in to help visualize a complex medical device for FDA submission. His attention to detail was exceptional—every tolerance, every material callout was accurate. The reviewers commented on how clear our documentation was."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg">SL</div>
                <div>
                  <p className="font-semibold text-slate-900 text-base lg:text-lg">Sarah Lin</p>
                  <p className="text-slate-500 text-sm lg:text-base">Director of Engineering at MedCore Systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-xl lg:rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 mb-4 lg:mb-6" aria-hidden="true" />
              <p className="text-slate-700 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">"I've worked with dozens of product designers over my career. Martin stands out because he thinks like a founder—he's not just designing, he's solving business problems. He pushed back on ideas that would've cost us in manufacturing and suggested alternatives we hadn't considered."</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-base lg:text-lg">JM</div>
                <div>
                  <p className="font-semibold text-slate-900 text-base lg:text-lg">James Mitchell</p>
                  <p className="text-slate-500 text-sm lg:text-base">Serial Entrepreneur, 3x Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORK TOGETHER ==================== */}
      <section id="work-together" className="py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container">
          <p className="text-amber-500 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 lg:mb-6">Work Together</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-12 lg:mb-16">
            Two ways to engage.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Full-Time - larger card */}
            <div className="p-8 lg:p-10 xl:p-12 bg-white border-2 border-amber-500 rounded-2xl lg:rounded-3xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-shadow duration-300">
              <p className="text-amber-500 font-semibold text-sm lg:text-base uppercase tracking-wider mb-2 lg:mb-3">Full-Time / Embedded</p>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-4 lg:mb-6">Join your team</h3>
              <p className="text-slate-600 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">Looking for the right fit—a team building products that matter, where design thinking and manufacturing reality both have a seat at the table.</p>
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
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                  Let's Talk About Fit
                </Button>
              </a>
            </div>

            {/* Contract - larger card */}
            <div className="p-8 lg:p-10 xl:p-12 bg-white border border-slate-200 rounded-2xl lg:rounded-3xl hover:border-slate-300 hover:shadow-xl transition-all duration-300">
              <p className="text-slate-500 font-semibold text-sm lg:text-base uppercase tracking-wider mb-2 lg:mb-3">Contract / Project</p>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-4 lg:mb-6">Solve a specific challenge</h3>
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
                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold">
                  Discuss Your Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section id="tampa" className="py-20 lg:py-28 xl:py-32 px-4 bg-slate-900 text-white scroll-mt-20">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-2 lg:gap-3 mb-6 lg:mb-8">
            <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400" aria-hidden="true" />
            <p className="text-amber-400 text-sm lg:text-base font-semibold uppercase tracking-wider">A Note About Tampa Bay</p>
          </div>
          
          <div className="prose prose-lg lg:prose-xl prose-invert max-w-none">
            <p className="text-slate-300 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
              I recently made the move to Tampa Bay, and I have to say—I'm genuinely excited about what's happening here. The innovation ecosystem is more vibrant than I expected. I've been exploring places like spARK Labs, Tampa Bay Wave, and the St. Pete Innovation District, and there's a real energy around building things that matter.
            </p>
            
            <p className="text-slate-300 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
              I'm actively looking for my next opportunity—whether that's a full-time role with a team that values both design thinking and manufacturing reality, or contract work where I can help solve specific product challenges. But honestly, I'm also just looking to meet people and learn about what's being built in this community.
            </p>
            
            <p className="text-slate-300 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-10 lg:mb-12">
              If you're working on something interesting, I'd love to hear about it. And if you're part of a local accelerator or startup hub and want to grab coffee, I'm happy to talk through product challenges—no pitch, no agenda. Sometimes the best conversations come from just being curious about what others are building.
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl mb-8 lg:mb-10 border border-slate-700/50">
            <p className="text-amber-400 font-semibold text-lg lg:text-xl mb-2 lg:mb-3">Open invitation for Tampa Bay founders</p>
            <p className="text-slate-400 lg:text-lg xl:text-xl">If you're building a hardware product or need help thinking through design-to-manufacturing challenges, let's connect. First coffee is on me.</p>
          </div>

          <a href="mailto:martin@designconquest.com?subject=Coffee%20Chat%20-%20Tampa%20Bay">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold gap-2 lg:gap-3 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
              <Coffee className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
              Let's Grab Coffee
            </Button>
          </a>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-20 lg:py-28 xl:py-32 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 lg:mb-6">Let's figure out if I can help.</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 lg:mb-10 max-w-4xl">
            Whether you're hiring, have a project, or just want to talk about product development—I'm happy to chat.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 lg:mt-16">
            <div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">Martin Veldsman</h3>
              <p className="text-slate-600 text-base lg:text-lg xl:text-xl mb-8 lg:mb-10">Product Designer & Manufacturing Strategist</p>
              
              <div className="space-y-5 lg:space-y-6">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-4 text-slate-700 hover:text-amber-500 transition-colors group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl">martin@designconquest.com</span>
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-4 text-slate-700 hover:text-amber-500 transition-colors group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl">(540) 819-2005</span>
                </a>
                <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-amber-500 transition-colors group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-100 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-colors">
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
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold gap-2 lg:gap-3 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                    <Send className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                    Send a Message
                  </Button>
                </a>
                <a href="/Martin-Veldsman-Resume.pdf" download>
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold gap-2 lg:gap-3">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                    Download Resume
                  </Button>
                </a>
              </div>

              <div className="mt-6 lg:mt-8">
                <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 lg:px-8 h-12 lg:h-14 xl:h-16 text-base lg:text-lg font-semibold gap-2 lg:gap-3">
                    View Design Conquest
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-8 lg:p-10 xl:p-12 rounded-2xl lg:rounded-3xl border border-slate-200">
              <p className="text-slate-700 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                Building something interesting? I'd love to hear about it—even if you're not ready to hire or don't have budget for a project yet.
              </p>
              <p className="text-slate-900 font-semibold text-lg lg:text-xl">— Martin</p>
              
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

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 lg:py-16 px-4 bg-slate-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-8">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <PenTool className="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
              </div>
              <span className="font-semibold text-white text-base lg:text-lg">Martin Veldsman</span>
            </div>
            
            <div className="flex flex-wrap gap-6 lg:gap-8 text-sm lg:text-base text-slate-400">
              <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus:text-amber-400">
                Design Conquest
                <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:text-amber-400">LinkedIn</a>
              <a href="mailto:martin@designconquest.com" className="hover:text-white transition-colors focus:outline-none focus:text-amber-400">Email</a>
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
