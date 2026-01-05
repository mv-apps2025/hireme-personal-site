import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Coffee, Zap, Factory, DollarSign, Clock, Lightbulb, PenTool, Sparkles, Rocket, Users, Search, Menu, X, Quote, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * MERGED VERSION - Best of both worlds
 * - Imagery: Real photos from new version
 * - Copy: Visitor-focused structure from current version
 * - Theme: Light with navy accent sections
 * - Testimonials: 3 client quotes
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-slate-900 text-sm tracking-tight">Martin Veldsman</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Work</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#tampa" onClick={(e) => scrollToSection(e, 'tampa')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Tampa Bay</a>
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm h-9 px-5">
              Schedule a Call
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2">Work</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2">Services</a>
              <a href="#tampa" onClick={(e) => scrollToSection(e, 'tampa')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors py-2">Tampa Bay</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm h-10 w-full mt-2">
                  Schedule a Call
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
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Available Now</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
            Hardware visions →
            <br />
            <span className="text-amber-500">fundable products</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            Industrial design + manufacturing expertise + startup speed. I bridge the gap that kills most hardware companies.
          </p>

          {/* Quick proof */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-8">
            <span>Virginia Tech ID</span>
            <span>•</span>
            <span>BANQloop → $4M raised</span>
            <span>•</span>
            <span>500+ deliverables</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 h-12 text-sm font-bold gap-2">
                <MessageCircle className="w-4 h-4" />
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-5 h-12 text-sm font-semibold gap-2">
                View Work
              </Button>
            </a>
            <a href="/Martin-Veldsman-Resume.pdf" download>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-5 h-12 text-sm font-semibold gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-16">
        <div className="container max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/hero-cad-workspace.webp" 
              alt="CAD workspace showing product design process" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==================== THE PROBLEM ==================== */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Designers make unbuildable things.
            <br />
            <span className="text-amber-400">Engineers kill the magic.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            I speak both languages fluently. Design intent stays intact. Manufacturing works from day one.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">20-40%</p>
              <p className="text-slate-400 text-sm">Cost reduction via DFM</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">10x</p>
              <p className="text-slate-400 text-sm">Faster design cycles</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$4M</p>
              <p className="text-slate-400 text-sm">Helped raise at BANQloop</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</p>
              <p className="text-slate-400 text-sm">Production deliverables</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SELECTED WORK ==================== */}
      <section id="work" className="py-20 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            From sketch to funded
          </h2>

          {/* BANQloop */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src="/images/banqloop-kiosk.jpg" 
                  alt="BANQloop AI recycling kiosk render" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src="/images/design-process.jpg" 
                  alt="BANQloop exploded engineering view" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-amber-500 font-semibold mb-1">BANQloop</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">AI recycling kiosks → $4M seed</h3>
                <p className="text-slate-600 max-w-xl">Led industrial design from concept to investor-ready. Created production-optimized designs with detailed engineering documentation and technical feasibility. The visual materials helped secure seed funding.</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-xs mb-1">Timeline</p>
                  <p className="font-semibold text-slate-900">6 weeks</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-xs mb-1">Outcome</p>
                  <p className="font-semibold text-slate-900">~$4M seed round</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Conquest */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src="/images/speaker-before-after.webp" 
                  alt="Before and after: sketch to photorealistic render" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src="/images/workspace-flatlay.webp" 
                  alt="Design workspace with materials and tools" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-amber-500 font-semibold mb-1">Design Conquest</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Scalable design-to-factory service</h3>
                <p className="text-slate-600 max-w-xl">Built a complete design-to-factory pipeline. Not just renderings—production-ready CAD, technical docs, and supplier-ready files. 500+ deliverables across dozens of clients.</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-xs mb-1">Scale</p>
                  <p className="font-semibold text-slate-900">500+ deliverables</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-xs mb-1">Speed</p>
                  <p className="font-semibold text-slate-900">Days, not weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Velocity Sprints */}
          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src="/images/product-portfolio.jpg" 
                  alt="Product design variations grid" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-amber-500 mb-2">10x</p>
                  <p className="text-slate-600 font-medium">Faster than traditional process</p>
                  <p className="text-slate-400 text-sm mt-2">15 directions in 24 hours</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-amber-500 font-semibold mb-1">Velocity Sprints</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Accelerated design exploration</h3>
                <p className="text-slate-600 max-w-xl">Rapid concept development for startups who need to move fast. AI-assisted workflows deliver investor-ready renderings in hours, not weeks. Manufacturing strategy before expensive commitments.</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-xs mb-1">Deliverable</p>
                  <p className="font-semibold text-slate-900">15+ directions</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-xs mb-1">Timeline</p>
                  <p className="font-semibold text-slate-900">24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">What Clients Say</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Trusted by founders
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Quote className="w-10 h-10 text-amber-400 mb-4" />
              <p className="text-slate-700 mb-6">"Martin's designs were critical to our seed round. He understood both the vision and the manufacturing constraints—rare combination."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-semibold text-sm">JC</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Jennifer Chen</p>
                  <p className="text-slate-500 text-xs">CEO, FlowTech Systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Quote className="w-10 h-10 text-amber-400 mb-4" />
              <p className="text-slate-700 mb-6">"Saved us 6 months and $200K by catching DFM issues before tooling. His manufacturing knowledge is unmatched."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-semibold text-sm">RP</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Robert Park</p>
                  <p className="text-slate-500 text-xs">Founder, Apex Innovations</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Quote className="w-10 h-10 text-amber-400 mb-4" />
              <p className="text-slate-700 mb-6">"Fast, professional, and understood our startup constraints. Delivered investor-ready renderings in 3 days."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-semibold text-sm">SM</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Sarah Martinez</p>
                  <p className="text-slate-500 text-xs">CTO, NexGen Hardware</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TWO WAYS TO WORK ==================== */}
      <section id="services" className="py-20 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Two Ways to Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Full-time or project-based
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full-Time */}
            <div className="p-8 bg-white border-2 border-amber-500 rounded-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-4">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-700 text-xs font-semibold uppercase">Available Now</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Full-Time Role</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Embedded design + manufacturing expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Week 1: DFM audit, quick wins identified</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Month 1: Process improvements, cost reductions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Ongoing: Design leadership, team mentorship</span>
                </li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 font-semibold">
                  Schedule Interview
                </Button>
              </a>
            </div>

            {/* Project Sprint */}
            <div className="p-8 bg-white border border-slate-200 rounded-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full mb-4">
                <span className="text-slate-600 text-xs font-semibold uppercase">Starting 1-2 Weeks</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Sprint</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Concept Sprint: 1-2 weeks, investor-ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Design to Factory: 4-8 weeks, full CAD</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Manufacturing Support: Ongoing advisory</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Fixed scope, clear deliverables, fast turnaround</span>
                </li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 h-12 font-semibold">
                  Discuss Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            End-to-end expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src="/images/capability-research-strategy.webp" 
                  alt="Research and strategy workspace" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Research & Strategy</h3>
              <p className="text-slate-600">Market research, user insights, competitive analysis, and product strategy</p>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src="/images/capability-visualization.webp" 
                  alt="Visualization and rendering workspace" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visualization</h3>
              <p className="text-slate-600">Photorealistic renderings, animations, pitch materials, and investor presentations</p>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src="/images/capability-production.webp" 
                  alt="Production and manufacturing facility" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Production</h3>
              <p className="text-slate-600">DFM optimization, supplier coordination, quality control, and cost optimization</p>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src="/images/capability-go-to-market.webp" 
                  alt="Go-to-market materials and packaging" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Go-to-Market</h3>
              <p className="text-slate-600">Marketing materials, user guides, packaging design, and go-to-market strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section id="tampa" className="py-20 px-4 bg-slate-900 text-white scroll-mt-20">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-amber-400" />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Tampa Bay Area</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            New to the area.
            <br />
            <span className="text-amber-400">Ready to contribute.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            Recently relocated to Pinellas Park. Looking to connect with Tampa Bay's innovation community—startups, manufacturers, accelerators. Let's grab coffee and talk product.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:martin@designconquest.com?subject=Coffee%20Chat%20-%20Tampa%20Bay">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 h-12 font-semibold gap-2">
                <Coffee className="w-4 h-4" />
                Schedule a Coffee Chat
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 h-12 font-semibold gap-2">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-20 px-4 scroll-mt-20">
        <div className="container max-w-6xl">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Let's Talk</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Ready to start?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hiring */}
            <div className="p-8 bg-amber-50 border border-amber-200 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hiring for a full-time role?</h3>
              <p className="text-slate-600 mb-6">Let's discuss how I can contribute to your team's product development capabilities.</p>
              <a href="mailto:martin@designconquest.com?subject=Full-Time%20Opportunity">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 font-semibold">
                  Schedule Interview
                </Button>
              </a>
            </div>

            {/* Project */}
            <div className="p-8 bg-white border border-slate-200 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Have a project in mind?</h3>
              <p className="text-slate-600 mb-6">From concept sprints to full design-to-factory, let's scope your project.</p>
              <a href="mailto:martin@designconquest.com?subject=Project%20Inquiry">
                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 h-12 font-semibold">
                  Discuss Project
                </Button>
              </a>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm mb-4">Or reach out directly:</p>
            <div className="flex flex-wrap gap-6">
              <a href="mailto:martin@designconquest.com" className="flex items-center gap-2 text-slate-700 hover:text-amber-500 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">martin@designconquest.com</span>
              </a>
              <a href="tel:+17274001928" className="flex items-center gap-2 text-slate-700 hover:text-amber-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(727) 400-1928</span>
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-amber-500 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
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
                <PenTool className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white">Martin Veldsman</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                Design Conquest
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:martin@designconquest.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">© 2025 Martin Veldsman. Tampa Bay, Florida.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
