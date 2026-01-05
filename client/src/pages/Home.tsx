import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Coffee, PenTool, Menu, X, Quote, ExternalLink, Send } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * COMPREHENSIVE VERSION - Optimized for performance and UX
 * - Images: Optimized WebP format with lazy loading
 * - UX: Fixed contact section, improved CTAs
 * - Performance: Reduced image sizes from ~5MB to ~50-120KB each
 * - Accessibility: Improved alt text, focus states
 * - Mobile: Enhanced responsive design
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
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg" aria-label="Martin Veldsman - Home">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-semibold text-slate-900 text-sm tracking-tight">Martin Veldsman</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Challenges</a>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Capabilities</a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Results</a>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-amber-500">Work Together</a>
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm h-9 px-5 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
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
      <section className="pt-28 sm:pt-32 pb-8 px-4">
        <div className="container max-w-6xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
            Take your product from
            <br />
            <span className="text-amber-500">idea to market.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mb-6">
            Whether you're launching something new, improving an existing product, or need to visualize a concept that wins investors—I help you move from where you are to where you need to be.
          </p>

          <p className="text-base text-slate-500 max-w-2xl mb-8">
            Research → Design → Visualization → Production → Launch. One person who can do it all, or plug into your team wherever you need help.
          </p>

          {/* Quick proof */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-8">
            <span className="font-medium">12+ years product development</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">500+ products delivered</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">Concept to manufacturing</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="mailto:martin@designconquest.com?subject=Let's%20Talk%20-%20Product%20Development">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 h-12 text-sm font-bold gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Let's Talk
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="/Martin-Veldsman-Resume.pdf" download>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-5 h-12 text-sm font-semibold gap-2">
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-16">
        <div className="container max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
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
      <section id="challenges" className="py-20 px-4 bg-slate-50 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Common Challenges</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Product development is hard.
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            Here's where teams usually get stuck.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">"We have an idea but don't know where to start"</h3>
              <p className="text-slate-600">You need someone to turn a rough concept into something concrete—research, strategy, and a clear path forward.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">"We need visuals that sell"</h3>
              <p className="text-slate-600">Investors, customers, or stakeholders need to see it to believe it. You need renderings, animations, or pitch materials that convince.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">"Design and manufacturing don't talk"</h3>
              <p className="text-slate-600">Beautiful concepts that can't be built. Buildable products that lost their soul. You need someone who thinks in both languages.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">"We're moving too slow"</h3>
              <p className="text-slate-600">Revisions drag on. Timelines slip. You need faster iteration without sacrificing quality.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">"Our costs are out of control"</h3>
              <p className="text-slate-600">The design looks great but costs too much to produce. You need DFM optimization and cost engineering from the start.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">"We don't know how to launch"</h3>
              <p className="text-slate-600">Product's ready but you need packaging, user guides, sell sheets, or a presales website to actually go to market.</p>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-10 text-lg">
            The common thread? <span className="font-semibold text-slate-900">You need someone who can see the whole picture</span>—not just one piece of the puzzle.
          </p>
        </div>
      </section>

      {/* ==================== WHAT I BRING ==================== */}
      <section id="capabilities" className="py-20 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">What I Bring to the Table</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            End-to-end product development capabilities.
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            I can take you from initial research through market launch—or plug in wherever your team needs support.
          </p>

          {/* Capability Tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Capabilities">
            {Object.entries(capabilities).map(([key, cap]) => (
              <button
                key={key}
                onClick={() => setActiveCapability(key)}
                role="tab"
                aria-selected={activeCapability === key}
                aria-controls={`panel-${key}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                  activeCapability === key
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {/* Active Capability Content */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div 
              id={`panel-${activeCapability}`}
              role="tabpanel"
              className="bg-slate-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{capabilities[activeCapability as keyof typeof capabilities].title}</h3>
              <ul className="space-y-3">
                {capabilities[activeCapability as keyof typeof capabilities].items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3]">
              <img 
                src={getCapabilityImage(activeCapability)}
                alt={`${capabilities[activeCapability as keyof typeof capabilities].title} - professional workspace and tools`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mt-10 text-slate-600 text-lg bg-amber-50 p-6 rounded-xl border border-amber-200">
            <span className="font-semibold text-slate-900">The difference:</span> Most teams hire separate researchers, designers, CAD engineers, visualization specialists, and manufacturing consultants. I can do all of it—or work alongside your existing team wherever you need the help.
          </p>
        </div>
      </section>

      {/* ==================== TRACK RECORD ==================== */}
      <section id="results" className="py-20 px-4 bg-slate-900 text-white scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            This approach delivers results.
          </h2>

          {/* BANQloop */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="rounded-xl overflow-hidden bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/banqloop-kiosk-optimized.webp" 
                  alt="BANQloop AI recycling kiosk - sleek modern design with touchscreen interface"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">~$4M Raised</p>
                <h3 className="text-2xl font-bold text-white mb-4">BANQloop</h3>
                <p className="text-slate-400 mb-4">AI recycling kiosks. Took rough concept to investor-ready product—design, visualization, and manufacturing strategy that proved technical feasibility.</p>
                <p className="text-amber-400 font-semibold">Concept → Funded in 6 weeks</p>
              </div>
            </div>
          </div>

          {/* Design Conquest */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">500+ Deliverables</p>
                <h3 className="text-2xl font-bold text-white mb-4">Design Conquest</h3>
                <p className="text-slate-400 mb-4">Built a design-to-manufacturing service for DTCs and OEMs. Research, design, visualization, production docs—the full pipeline.</p>
                <p className="text-amber-400 font-semibold">Avg 72-hour turnaround</p>
              </div>
              <div className="rounded-xl overflow-hidden order-1 md:order-2 bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/speaker-before-after.webp" 
                  alt="Before and after comparison: initial concept sketch transformed into photorealistic product render"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Startup Sprints */}
          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="rounded-xl overflow-hidden bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/product-portfolio-optimized.webp" 
                  alt="Grid of various product designs showing range of capabilities across different industries"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">10x Faster</p>
                <h3 className="text-2xl font-bold text-white mb-4">Startup Sprints</h3>
                <p className="text-slate-400 mb-4">Rapid 0→1 product development for early-stage founders. AI-accelerated workflows compress months into weeks.</p>
                <p className="text-amber-400 font-semibold">3-6 months → 1-2 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 px-4 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="container max-w-6xl">
          <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <Quote className="w-10 h-10 text-amber-400 mb-4" aria-hidden="true" />
              <p className="text-slate-700 mb-6">"Martin delivered product designs for us that have clear advantages over anything on the market."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">RC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Ryan Collins</p>
                  <p className="text-slate-500 text-xs">CEO at Lumina Audio</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <Quote className="w-10 h-10 text-amber-400 mb-4" aria-hidden="true" />
              <p className="text-slate-700 mb-6">"His ability to bridge design vision with manufacturing reality saved us months of back-and-forth."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">AT</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Amanda Torres</p>
                  <p className="text-slate-500 text-xs">Founder at NovaTech Devices</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <Quote className="w-10 h-10 text-amber-400 mb-4" aria-hidden="true" />
              <p className="text-slate-700 mb-6">"Fast, professional, and understood our startup constraints. Delivered investor-ready renderings in days."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">DC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">David Chen</p>
                  <p className="text-slate-500 text-xs">VP of Product at Meridian Home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORK TOGETHER ==================== */}
      <section id="work-together" className="py-20 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Work Together</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Two ways to engage.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full-Time */}
            <div className="p-8 bg-white border-2 border-amber-500 rounded-2xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-shadow duration-300">
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-2">Full-Time / Embedded</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Join your team</h3>
              <p className="text-slate-600 mb-6">Looking for the right fit—a team building products that matter, where design thinking and manufacturing reality both have a seat at the table.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Day 1 contribution across the product pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Bridge between design, engineering, and business</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">AI-accelerated workflows (10-15 directions/day)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Catch costly manufacturing mistakes early</span>
                </li>
              </ul>
              <a href="mailto:martin@designconquest.com?subject=Full-Time%20Opportunity%20-%20Let's%20Talk">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                  Let's Talk About Fit
                </Button>
              </a>
            </div>

            {/* Contract */}
            <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider mb-2">Contract / Project</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Solve a specific challenge</h3>
              <p className="text-slate-600 mb-6">Have a project that needs expertise? I can plug in wherever you need help—from quick concept sprints to full product development.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Concept Sprint: Idea → renderings + strategy (1-2 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Design-to-Factory: Full CAD through production docs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Visualization: Renderings, animations, pitch materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Launch Support: Packaging, guides, presales pages</span>
                </li>
              </ul>
              <a href="mailto:martin@designconquest.com?subject=Project%20Inquiry%20-%20Let's%20Discuss">
                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 h-12 font-semibold">
                  Discuss Your Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section id="tampa" className="py-20 px-4 bg-slate-900 text-white scroll-mt-20">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-amber-400" aria-hidden="true" />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Tampa Bay</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            New to the area. Looking to connect.
          </h2>
          <p className="text-slate-400 text-lg mb-6 max-w-2xl">
            Just moved to Tampa Bay. Impressed by the innovation ecosystem—spARK Labs, Tampa Bay Wave, St. Pete Innovation District. Actively seeking full-time roles, contract work, and ways to contribute to the community.
          </p>

          <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Free strategy session for Tampa Bay startups</p>
            <p className="text-slate-400">If you're affiliated with a local accelerator or innovation hub, let's grab coffee and talk through your product challenges. No pitch, no strings—just trying to be helpful.</p>
          </div>

          <a href="mailto:martin@designconquest.com?subject=Coffee%20Chat%20-%20Tampa%20Bay">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 h-12 font-semibold gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
              <Coffee className="w-4 h-4" aria-hidden="true" />
              Schedule a Coffee Chat
            </Button>
          </a>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-20 px-4 scroll-mt-20">
        <div className="container max-w-5xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Let's figure out if I can help.</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Whether you're hiring, have a project, or just want to talk about product development—I'm happy to chat.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Martin Veldsman</h3>
              <p className="text-slate-600 mb-6">Product Designer & Manufacturing Strategist</p>
              
              <div className="space-y-4">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-3 text-slate-700 hover:text-amber-500 transition-colors group">
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-amber-50 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>martin@designconquest.com</span>
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-3 text-slate-700 hover:text-amber-500 transition-colors group">
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-amber-50 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>(540) 819-2005</span>
                </a>
                <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-amber-500 transition-colors group">
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-amber-50 rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>Tampa Bay, FL</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="mailto:martin@designconquest.com?subject=Let's%20Connect">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 h-12 font-semibold gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send a Message
                  </Button>
                </a>
                <a href="/Martin-Veldsman-Resume.pdf" download>
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 h-12 font-semibold gap-2">
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download Resume
                  </Button>
                </a>
              </div>

              <div className="mt-6">
                <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 h-12 font-semibold gap-2">
                    View Design Conquest
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-8 rounded-2xl border border-slate-200">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Building something interesting? I'd love to hear about it—even if you're not ready to hire or don't have budget for a project yet.
              </p>
              <p className="text-slate-900 font-semibold">— Martin</p>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-3">Quick response guaranteed</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-slate-600">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-semibold text-white">Martin Veldsman</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus:text-amber-400">
                Design Conquest
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:text-amber-400">LinkedIn</a>
              <a href="mailto:martin@designconquest.com" className="hover:text-white transition-colors focus:outline-none focus:text-amber-400">Email</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">© 2025 Martin Veldsman. Product Designer & Manufacturing Strategist.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
