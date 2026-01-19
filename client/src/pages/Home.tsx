import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Coffee, PenTool, Menu, X, ExternalLink, Send, Lightbulb, Image, GitMerge, Zap, DollarSign, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DISCIPLINED VERSION - Professional quality through restraint
 * 
 * Principles applied:
 * - Typography hierarchy through size and weight only
 * - High contrast for readability (WCAG AA)
 * - Generous whitespace
 * - Amber accent for CTAs only
 * - No decorative animations or gradients
 * - Consistent spacing
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState('design');

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
    <div className="min-h-screen bg-white text-slate-800">
      {/* ==================== NAVIGATION ==================== */}
      <nav className="fixed top-0 w-full z-50 bg-white/98 border-b border-slate-200">
        <div className="container flex items-center justify-between h-16 lg:h-18">
          <a href="#" className="flex items-center gap-3" aria-label="Martin Veldsman - Home">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-semibold text-slate-900 text-sm lg:text-base">Martin Veldsman</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="nav-link text-sm text-slate-600 hover:text-slate-900">Challenges</a>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="nav-link text-sm text-slate-600 hover:text-slate-900">Capabilities</a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="nav-link text-sm text-slate-600 hover:text-slate-900">Results</a>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="nav-link text-sm text-slate-600 hover:text-slate-900">Work Together</a>
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden md:block">
            <Button className="cta-primary h-10 px-5 text-sm font-semibold rounded-lg">
              Get in Touch
            </Button>
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-6">
            <div className="flex flex-col gap-4">
              <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="text-sm text-slate-600 hover:text-slate-900 py-2">Challenges</a>
              <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm text-slate-600 hover:text-slate-900 py-2">Capabilities</a>
              <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="text-sm text-slate-600 hover:text-slate-900 py-2">Results</a>
              <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="text-sm text-slate-600 hover:text-slate-900 py-2">Work Together</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button className="cta-primary w-full h-10 text-sm font-semibold mt-2 rounded-lg">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="hero-gradient pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 px-4">
        <div className="container max-w-4xl">
          {/* Status Badge */}
          <div className="status-badge mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></span>
            <span>Available for Full-Time & Contract in Tampa Bay</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
            Bring your product ideas to life.
            <br />
            <span className="hero-title-gradient">Without the costly headaches.</span>
          </h1>
          
          {/* Target audience */}
          <p className="text-base lg:text-lg text-slate-600 font-medium mb-6">
            For startups, brands, and product teams building physical products who need to move fast.
          </p>
          
          {/* Value proposition */}
          <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 max-w-3xl">
            I've delivered 500+ designs to manufacturing—catching costly DFM issues before they become $100K problems. From napkin sketch to factory floor, I bridge the gap between beautiful design and production reality.
          </p>

          <p className="text-base text-slate-500 mb-10 max-w-3xl">
            Research → Design → Visualization → Production → Launch. One designer who handles the full pipeline, or plugs into your team wherever you need help.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="stat-card">
              <span className="text-2xl lg:text-3xl font-bold text-slate-900 block">12+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="text-2xl lg:text-3xl font-bold text-slate-900 block">500+</span>
              <span className="text-sm text-slate-500">Designs Delivered</span>
            </div>
            <div className="stat-card stat-card-highlight">
              <span className="text-2xl lg:text-3xl font-bold text-amber-700 block">$4M+</span>
              <span className="text-sm text-amber-700">Raised by Clients</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="mailto:martin@designconquest.com?subject=Let's%20Talk%20-%20Product%20Development">
              <Button className="cta-primary h-12 px-6 text-base font-semibold gap-2 rounded-lg">
                <MessageCircle className="w-4 h-4" />
                Start a Conversation
              </Button>
            </a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')}>
              <Button variant="outline" className="cta-secondary h-12 px-6 text-base font-medium gap-2 rounded-lg">
                See My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          
          <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
            <span>See how I helped BANQloop raise $4M+</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-16 lg:pb-24 bg-white">
        <div className="container">
          <div className="hero-image-container">
            <img 
              src="/images/hero-idea-to-product-optimized.webp" 
              alt="Product design journey from sketch to CAD model to finished product"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ==================== CHALLENGES ==================== */}
      <section id="challenges" className="section-challenges py-16 lg:py-24 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label mb-3">Common Challenges</p>
          <h2 className="section-heading text-3xl lg:text-4xl font-bold mb-4">
            Product development is hard.
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            Here's where teams usually get stuck.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="challenge-card">
              <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">"We have an idea but don't know where to start"</h3>
              <p className="text-slate-600">You need someone to turn a rough concept into something concrete—research, strategy, and a clear path forward.</p>
            </div>

            <div className="challenge-card">
              <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                <Image className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">"We need visuals that sell"</h3>
              <p className="text-slate-600">Investors, customers, or stakeholders need to see it to believe it. You need renderings, animations, or pitch materials that convince.</p>
            </div>

            <div className="challenge-card">
              <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                <GitMerge className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">"Design and manufacturing don't talk"</h3>
              <p className="text-slate-600">Beautiful concepts that can't be built. Buildable products that lost their soul. You need someone who thinks in both languages.</p>
            </div>

            <div className="challenge-card">
              <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">"We're moving too slow"</h3>
              <p className="text-slate-600">Revisions drag on. Timelines slip. You need faster iteration without sacrificing quality.</p>
            </div>

            <div className="challenge-card">
              <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">"Our costs are out of control"</h3>
              <p className="text-slate-600">The design looks great but costs too much to produce. You need DFM optimization and cost engineering from the start.</p>
            </div>

            <div className="challenge-card">
              <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">"We don't know how to launch"</h3>
              <p className="text-slate-600">Product's ready but you need packaging, user guides, sell sheets, or a presales website to actually go to market.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              The common thread? <span className="font-semibold text-slate-900">You need someone who can see the whole picture</span>—not just one piece of the puzzle.
            </p>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium">
              <span>Here's how I solve these challenges</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section id="capabilities" className="section-capabilities py-16 lg:py-24 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label mb-3">What I Bring to the Table</p>
          <h2 className="section-heading text-3xl lg:text-4xl font-bold mb-4">
            End-to-end product development capabilities.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            I can take you from initial research through market launch—or plug in wherever your team needs support.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist">
            {Object.entries(capabilities).map(([key, cap]) => (
              <button
                key={key}
                onClick={() => setActiveCapability(key)}
                role="tab"
                aria-selected={activeCapability === key}
                className={`capability-tab ${activeCapability === key ? 'capability-tab-active' : ''}`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="capability-panel p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">
                {capabilities[activeCapability as keyof typeof capabilities].title}
              </h3>
              <ul className="space-y-3">
                {capabilities[activeCapability as keyof typeof capabilities].items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden bg-slate-100 aspect-[4/3]">
              <img 
                src={getCapabilityImage(activeCapability)}
                alt={`${capabilities[activeCapability as keyof typeof capabilities].title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-10 bg-white p-6 lg:p-8 rounded-lg border border-slate-200 max-w-4xl">
            <p className="text-slate-700 text-base lg:text-lg mb-4">
              <span className="font-semibold text-slate-900">The difference:</span> Most teams hire separate researchers, designers, CAD engineers, visualization specialists, and manufacturing consultants. I can do all of it—or work alongside your existing team wherever you need the help.
            </p>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium">
              <span>See how this approach delivers results</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TRACK RECORD ==================== */}
      <section id="results" className="section-results py-16 lg:py-24 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label mb-3">Track Record</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16">
            This approach delivers results.
          </h2>

          {/* BANQloop */}
          <div className="mb-16 lg:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/banqloop-kiosk-optimized.webp" 
                  alt="BANQloop AI recycling kiosk"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-amber-500 font-semibold text-lg uppercase tracking-wide mb-2">$4M+ Raised</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">BANQloop</h3>
                <p className="text-slate-400 text-lg mb-4">AI recycling kiosks. Took rough concept to investor-ready product—design, visualization, and manufacturing strategy that proved technical feasibility.</p>
                <p className="text-amber-500 font-medium">Concept → Funded in 6 weeks</p>
              </div>
            </div>
          </div>

          {/* Design Conquest */}
          <div className="mb-16 lg:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-amber-500 font-semibold text-lg uppercase tracking-wide mb-2">500+ Deliverables</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Design Conquest</h3>
                <p className="text-slate-400 text-lg mb-4">Built a design-to-manufacturing service for DTCs and OEMs. Research, design, visualization, production docs—the full pipeline.</p>
                <p className="text-amber-500 font-medium">Avg 72-hour turnaround</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-slate-800 aspect-[4/3] order-1 lg:order-2">
                <img 
                  src="/images/speaker-before-after.webp" 
                  alt="Before and after: concept sketch to product render"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Startup Sprints */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden bg-slate-800 aspect-[4/3]">
                <img 
                  src="/images/product-portfolio-optimized.webp" 
                  alt="Product design portfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-amber-500 font-semibold text-lg uppercase tracking-wide mb-2">10x Faster</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Startup Sprints</h3>
                <p className="text-slate-400 text-lg mb-4">Rapid 0→1 product development for early-stage founders. AI-accelerated workflows compress months into weeks.</p>
                <p className="text-amber-500 font-medium">3-6 months → 1-2 weeks</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-700">
            <p className="text-slate-400 mb-4">Don't just take my word for it.</p>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-white hover:text-slate-300 font-medium">
              <span>Hear from clients</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="py-16 lg:py-24 px-4 bg-white scroll-mt-20">
        <div className="container">
          <p className="section-label text-center mb-3">Client Testimonials</p>
          <h3 className="text-center text-3xl lg:text-4xl font-bold text-slate-900 mb-12">
            What people say about working with Martin
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="testimonial-card">
              <p className="text-slate-700 mb-6">"Martin delivered product designs that have <span className="font-semibold text-slate-900">clear advantages over anything on the market</span>. His understanding of both aesthetics and engineering constraints is rare."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium text-sm">RC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Ryan Collins</p>
                  <p className="text-slate-500 text-sm">CEO at Lumina Audio</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-slate-700 mb-6">"Martin's ability to bridge design and manufacturing <span className="font-semibold text-slate-900">saved us months of back-and-forth</span>. He caught issues our engineers missed and proposed solutions on the spot."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium text-sm">AT</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Amanda Torres</p>
                  <p className="text-slate-500 text-sm">Founder at NovaTech Devices</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-slate-700 mb-6">"Fast, professional, and understood our startup constraints. Martin delivered <span className="font-semibold text-slate-900">investor-ready renderings in days</span> that helped us close our seed round."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium text-sm">DC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">David Chen</p>
                  <p className="text-slate-500 text-sm">VP of Product at Meridian Home</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="testimonial-card">
              <p className="text-slate-700 mb-6">"Martin helped us visualize a medical device for FDA submission. <span className="font-semibold text-slate-900">Every tolerance and material callout was accurate</span>. The reviewers commented on how clear our documentation was."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium text-sm">SL</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Sarah Lin</p>
                  <p className="text-slate-500 text-sm">Director of Engineering at MedCore</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-slate-700 mb-6">"Martin <span className="font-semibold text-slate-900">thinks like a founder</span>—he's not just designing, he's solving business problems. He pushed back on ideas that would've cost us in manufacturing."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium text-sm">JM</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">James Mitchell</p>
                  <p className="text-slate-500 text-sm">Serial Entrepreneur, 3x Founder</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-slate-700 mb-6">"We needed to <span className="font-semibold text-slate-900">go from concept to production-ready in 8 weeks</span>. Martin made it happen. His DFM expertise saved us from costly tooling revisions."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium text-sm">KP</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Kevin Park</p>
                  <p className="text-slate-500 text-sm">CTO at Helix Robotics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Ready to get similar results?</p>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium">
              <span>Let's work together</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WORK TOGETHER ==================== */}
      <section id="work-together" className="section-work-together py-16 lg:py-24 px-4 scroll-mt-20">
        <div className="container">
          <p className="section-label mb-3">Work Together</p>
          <h2 className="section-heading text-3xl lg:text-4xl font-bold mb-12">
            Two ways to engage.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Full-Time */}
            <div className="work-card work-card-highlight">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-2">Full-Time / Embedded</p>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">I'll join your team</h3>
              <p className="text-sm text-slate-500 mb-4">Ideal for: Companies building physical products who need ongoing design & manufacturing expertise</p>
              <p className="text-slate-600 mb-6">Looking for the right fit—a team building products that matter, where design thinking and manufacturing reality both have a seat at the table.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Day 1 contribution across the product pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Bridge between design, engineering, and business</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">AI-accelerated workflows (10-15 directions/day)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Catch costly manufacturing mistakes early</span>
                </li>
              </ul>
              <a href="mailto:martin@designconquest.com?subject=Full-Time%20Opportunity">
                <Button className="cta-primary w-full h-12 text-base font-semibold rounded-lg">
                  Let's Talk About Fit
                </Button>
              </a>
            </div>

            {/* Contract */}
            <div className="work-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Contract / Project</p>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">I'll solve specific challenges</h3>
              <p className="text-sm text-slate-500 mb-4">Ideal for: Startups, founders, or teams with a specific project or milestone to hit</p>
              <p className="text-slate-600 mb-6">Have a project that needs expertise? I can plug in wherever you need help—from quick concept sprints to full product development.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Concept Sprint: Idea → renderings + strategy (1-2 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Design-to-Factory: Full CAD through production docs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Visualization: Renderings, animations, pitch materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Launch Support: Packaging, guides, presales pages</span>
                </li>
              </ul>
              <a href="mailto:martin@designconquest.com?subject=Project%20Inquiry">
                <Button variant="outline" className="cta-secondary w-full h-12 text-base font-semibold rounded-lg">
                  Discuss Your Project
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600 mb-4">Not sure which is right for you?</p>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium">
              <span>Let's chat and figure it out together</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section id="tampa" className="section-tampa py-16 lg:py-24 px-4 scroll-mt-20">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-amber-700" />
            <p className="text-amber-800 text-sm font-semibold uppercase tracking-wide">A Note About Tampa Bay</p>
          </div>
          
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <p>
              I recently made the move to Tampa Bay, and I have to say—I'm genuinely excited about what's happening here. The innovation ecosystem is more vibrant than I expected. I've been exploring places like spARK Labs, Tampa Bay Wave, and the St. Pete Innovation District, and there's a real energy around building things that matter.
            </p>
            
            <p>
              I'm actively looking for my next opportunity—whether that's a full-time role with a team that values both design thinking and manufacturing reality, or contract work where I can help solve specific product challenges. But honestly, I'm also just looking to meet people and learn about what's being built in this community.
            </p>
            
            <p>
              If you're working on something interesting, I'd love to hear about it. And if you're part of a local accelerator or startup hub and want to grab coffee, I'm happy to talk through product challenges—no pitch, no agenda. Sometimes the best conversations come from just being curious about what others are building.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-amber-300 mt-8 mb-8">
            <p className="text-amber-800 font-semibold mb-2">Open invitation for Tampa Bay founders</p>
            <p className="text-slate-700">If you're building a physical product or need help thinking through design-to-manufacturing challenges, let's connect. First coffee is on me.</p>
          </div>

          <a href="mailto:martin@designconquest.com?subject=Coffee%20Chat%20-%20Tampa%20Bay">
            <Button className="cta-primary h-12 px-6 text-base font-semibold gap-2 rounded-lg">
              <Coffee className="w-4 h-4" />
              Let's Grab Coffee
            </Button>
          </a>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="section-contact py-16 lg:py-24 px-4 scroll-mt-20">
        <div className="container max-w-5xl">
          <p className="section-label mb-3">Let's figure out if I can help.</p>
          <h2 className="section-heading text-3xl lg:text-4xl font-bold mb-8 max-w-3xl">
            Whether you're hiring, have a project, or just want to talk about product development—I'm happy to chat.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Martin Veldsman</h3>
              <p className="text-slate-500 mb-8">Product Designer & Manufacturing Strategist</p>
              
              <div className="space-y-4">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-4 text-slate-700 hover:text-slate-900">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-slate-500" />
                  </div>
                  <span>martin@designconquest.com</span>
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-4 text-slate-700 hover:text-slate-900">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-slate-500" />
                  </div>
                  <span>(540) 819-2005</span>
                </a>
                <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-slate-900">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-slate-500" />
                  </div>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <span>Tampa Bay, FL</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href="mailto:martin@designconquest.com?subject=Let's%20Connect">
                  <Button className="cta-primary h-12 px-6 text-base font-semibold gap-2 rounded-lg">
                    <Send className="w-4 h-4" />
                    Send a Message
                  </Button>
                </a>
                <a href="/Martin-Veldsman-Resume.pdf" download>
                  <Button variant="outline" className="cta-secondary h-12 px-6 text-base font-medium gap-2 rounded-lg">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </a>
              </div>

              <div className="mt-6">
                <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="cta-secondary h-12 px-6 text-base font-medium gap-2 rounded-lg">
                    View Design Conquest
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Building something interesting? I'd love to hear about it—even if you're not ready to hire or don't have budget for a project yet.
              </p>
              <p className="text-slate-900 font-semibold">— Martin</p>
              
              <div className="mt-10 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Quick response guaranteed</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span className="text-sm text-slate-600">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer-enhanced py-12 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-white text-sm">Martin Veldsman</span>
              </div>
              <p className="text-slate-400 text-sm">Helping teams ship physical products faster, without the expensive mistakes.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Design Conquest
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:martin@designconquest.com">Email</a>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">© 2025 Martin Veldsman. Product Designer & Manufacturing Strategist.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
