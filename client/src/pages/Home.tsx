import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Wrench, Coffee, Zap, Factory, DollarSign, Clock, Lightbulb, PenTool, Sparkles, Rocket, Users, Search, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * BRAND-COMPLIANT VERSION
 * - Typography: Manrope for headlines, Inter for body
 * - Colors: Slate 950 bg, Amber 400 accent, Emerald 400 success
 * - Imagery: Portfolio images in Results section
 * - Whitespace: Generous padding throughout
 */

export default function Home() {
  const [activeCapability, setActiveCapability] = useState<'research' | 'design' | 'visualization' | 'production' | 'launch'>('design');
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
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-sm leading-tight tracking-tight">Martin Veldsman</span>
              <span className="text-slate-500 text-xs leading-tight">Product Designer</span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="text-sm text-slate-400 hover:text-white transition-colors">Challenges</a>
            <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm text-slate-400 hover:text-white transition-colors">Capabilities</a>
            <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="text-sm text-slate-400 hover:text-white transition-colors">Results</a>
            <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="text-sm text-slate-400 hover:text-white transition-colors">Work Together</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm h-9 px-5">
              Let's Talk
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800/50 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#challenges" onClick={(e) => scrollToSection(e, 'challenges')} className="text-sm text-slate-400 hover:text-white transition-colors py-2">Challenges</a>
              <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm text-slate-400 hover:text-white transition-colors py-2">Capabilities</a>
              <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="text-sm text-slate-400 hover:text-white transition-colors py-2">Results</a>
              <a href="#work-together" onClick={(e) => scrollToSection(e, 'work-together')} className="text-sm text-slate-400 hover:text-white transition-colors py-2">Work Together</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm text-slate-400 hover:text-white transition-colors py-2">Contact</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm h-10 w-full mt-2">
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 sm:pt-40 pb-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-premium.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="container max-w-4xl relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Take your product from
            <br />
            <span className="text-amber-400">idea to market.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            Whether you're launching something new, improving an existing product, or need to visualize a concept that wins investors—I help you move from where you are to where you need to be.
          </p>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl">
            <strong className="text-white">Research → Design → Visualization → Production → Launch.</strong> One person who can do it all, or plug into your team wherever you need help.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
                <MessageCircle className="w-4 h-4" />
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="/Martin-Veldsman-Resume.pdf" download>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-5 h-12 text-sm font-semibold gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Quick proof */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              12+ years product development
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              500+ products delivered
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Concept to manufacturing
            </span>
          </div>
        </div>
      </section>

      {/* ==================== CHALLENGES ==================== */}
      <section id="challenges" className="py-24 px-4 bg-slate-900/50 scroll-mt-20">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Common Challenges</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Product development is hard.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            Here's where teams usually get stuck—and where I can help.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors">
              <Lightbulb className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"We have an idea but don't know where to start"</h3>
              <p className="text-slate-400 text-sm">You need someone to turn a rough concept into something concrete—research, strategy, and a clear path forward.</p>
            </div>
            <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors">
              <Sparkles className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"We need visuals that sell"</h3>
              <p className="text-slate-400 text-sm">Investors, customers, or stakeholders need to see it to believe it. You need renderings, animations, or pitch materials that convince.</p>
            </div>
            <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors">
              <Factory className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"Design and manufacturing don't talk"</h3>
              <p className="text-slate-400 text-sm">Beautiful concepts that can't be built. Buildable products that lost their soul. You need someone who thinks in both languages.</p>
            </div>
            <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors">
              <Clock className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"We're moving too slow"</h3>
              <p className="text-slate-400 text-sm">Revisions drag on. Timelines slip. You need faster iteration without sacrificing quality.</p>
            </div>
            <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors">
              <DollarSign className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"Our costs are out of control"</h3>
              <p className="text-slate-400 text-sm">The design looks great but costs too much to produce. You need DFM optimization and cost engineering from the start.</p>
            </div>
            <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors">
              <Zap className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"We don't know how to launch"</h3>
              <p className="text-slate-400 text-sm">Product's ready but you need packaging, user guides, sell sheets, or a presales website to actually go to market.</p>
            </div>
          </div>

          <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <p className="text-slate-300 text-lg text-center">
              <strong className="text-amber-400">The common thread?</strong> You need someone who can see the whole picture—not just one piece of the puzzle.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section id="capabilities" className="py-24 px-4 scroll-mt-20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">What I Bring to the Table</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                End-to-end product development.
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                I can take you from initial research through market launch—or plug in wherever your team needs support.
              </p>

              {/* Capability Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {(['research', 'design', 'visualization', 'production', 'launch'] as const).map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setActiveCapability(cap)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCapability === cap ? 'bg-amber-500 text-slate-950' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'}`}
                  >
                    {cap === 'research' && 'Research & Strategy'}
                    {cap === 'design' && 'Design & CAD'}
                    {cap === 'visualization' && 'Visualization'}
                    {cap === 'production' && 'Production'}
                    {cap === 'launch' && 'Go-to-Market'}
                  </button>
                ))}
              </div>

              {/* Capability Content */}
              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                {activeCapability === 'research' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                        <Search className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Research & Strategy</h3>
                    </div>
                    <p className="text-slate-400 mb-5">Before designing anything, understand the market, users, and competition.</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['User research & interviews', 'Market analysis', 'Competitor teardowns', 'Product strategy', 'Brand positioning', 'Requirements definition'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeCapability === 'design' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                        <PenTool className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Design & CAD</h3>
                    </div>
                    <p className="text-slate-400 mb-5">From initial sketches to production-ready CAD. Industrial design that's both beautiful and buildable.</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['Concept ideation & sketching', '3D CAD (SolidWorks, Fusion, Rhino)', 'Form development', 'Color, material, finish (CMF)', 'User-centered design', 'Design for manufacturing (DFM)'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeCapability === 'visualization' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Visualization</h3>
                    </div>
                    <p className="text-slate-400 mb-5">Show investors and stakeholders exactly what they're buying into—before you spend a dollar on tooling.</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['Photorealistic renders (KeyShot)', 'CGI animations & turntables', 'VR/AR experiences', 'Digital twins', 'AI-accelerated workflows', 'Pitch deck visuals'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeCapability === 'production' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                        <Factory className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Production</h3>
                    </div>
                    <p className="text-slate-400 mb-5">Get from CAD to factory floor. Documentation, prototyping, and manufacturing support that actually works.</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['Dimensioned drawings', 'Assembly documentation', 'Bill of materials (BOM)', '3D printing & prototyping', 'Functional prototypes', 'Supplier vetting'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeCapability === 'launch' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Go-to-Market</h3>
                    </div>
                    <p className="text-slate-400 mb-5">Product's ready—now sell it. Everything you need to launch, from packaging to presales.</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['Packaging design', 'User guides & docs', 'Licensing sell sheets', 'Presales landing pages', 'Merchandise design', 'Go-to-market strategy'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Design Process Image */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-slate-700/50">
                <img 
                  src="/images/design-process.jpg" 
                  alt="Industrial design workspace with sketches, CAD, and prototypes" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-slate-500 text-sm mt-4 text-center">From concept sketches to production-ready CAD</p>
            </div>
          </div>

          {/* The differentiator */}
          <div className="mt-12 p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <p className="text-slate-300 text-lg text-center">
              <strong className="text-amber-400">The difference:</strong> Most teams hire separate researchers, designers, CAD engineers, visualization specialists, and manufacturing consultants. I can do all of it—or work alongside your existing team wherever you need the help.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== RESULTS ==================== */}
      <section id="results" className="py-24 px-4 bg-slate-900/50 scroll-mt-20">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            This approach delivers results.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            Real projects, real outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* BANQloop */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-amber-500/30 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/banqloop-kiosk.jpg" 
                  alt="BANQloop AI recycling kiosk" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full inline-block mb-4">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">~$4M Raised</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">BANQloop</h3>
                <p className="text-slate-400 text-sm mb-4">
                  AI recycling kiosks. Took rough concept to investor-ready product—design, visualization, and manufacturing strategy.
                </p>
                <p className="text-amber-400 text-sm font-semibold">Concept → Funded in 6 weeks</p>
              </div>
            </div>

            {/* Design Conquest */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-amber-500/30 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/product-portfolio.jpg" 
                  alt="Product portfolio showing diverse industrial design work" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full inline-block mb-4">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">500+ Deliverables</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Design Conquest</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Built a design-to-manufacturing service for DTCs and OEMs. Research, design, visualization, production docs.
                </p>
                <p className="text-amber-400 text-sm font-semibold">Avg 72-hour turnaround</p>
              </div>
            </div>

            {/* Velocity Sprints */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-amber-500/30 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl font-bold text-amber-400 mb-2">10x</div>
                  <div className="text-slate-400 text-sm">Faster than traditional</div>
                </div>
              </div>
              <div className="p-6">
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full inline-block mb-4">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">10x Faster</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Startup Sprints</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Rapid 0→1 product development for early-stage founders. AI-accelerated workflows compress months into weeks.
                </p>
                <p className="text-amber-400 text-sm font-semibold">3-6 months → 1-2 weeks</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <p className="text-slate-300 text-xl italic mb-4 leading-relaxed">
              "Martin delivered product designs for us that have clear advantages over anything on the market."
            </p>
            <p className="text-slate-500 text-sm">— Design Conquest Client</p>
          </div>
        </div>
      </section>

      {/* ==================== WORK TOGETHER ==================== */}
      <section id="work-together" className="py-24 px-4 scroll-mt-20">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Work Together</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Two ways to engage.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            Whether you need a full-time team member or project-based support.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full-Time */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-amber-500/30 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <span className="text-amber-400 text-xs font-semibold uppercase">Full-Time / Embedded</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join your team</h3>
              <p className="text-slate-400 mb-6">
                Looking for the right fit—a team building products that matter, where design thinking and manufacturing reality both have a seat at the table.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Day 1 contribution across the product pipeline</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Bridge between design, engineering, and business</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>AI-accelerated workflows (10-15 directions/day)</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Catch costly manufacturing mistakes early</span>
                </li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-11 px-5 text-sm gap-2 w-full">
                  <Users className="w-4 h-4" />
                  Let's Talk About Fit
                </Button>
              </a>
            </div>

            {/* Contract */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-amber-500/30 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <span className="text-amber-400 text-xs font-semibold uppercase">Contract / Project</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Solve a specific challenge</h3>
              <p className="text-slate-400 mb-6">
                Have a project that needs expertise? I can plug in wherever you need help—from quick concept sprints to full product development.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Concept Sprint:</strong> Idea → renderings + strategy (1-2 weeks)</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Design-to-Factory:</strong> Full CAD through production docs</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Visualization:</strong> Renderings, animations, pitch materials</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Launch Support:</strong> Packaging, guides, presales pages</span>
                </li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-11 px-5 text-sm gap-2 w-full">
                  <Rocket className="w-4 h-4" />
                  Discuss Your Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-amber-400" />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Tampa Bay</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            New to the area. Looking to connect.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-3xl">
            Just moved to Tampa Bay. Impressed by the innovation ecosystem—spARK Labs, Tampa Bay Wave, St. Pete Innovation District. Actively seeking full-time roles, contract work, and ways to contribute to the community.
          </p>

          <div className="p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">Free strategy session for Tampa Bay startups</h3>
            <p className="text-slate-300 mb-6">
              If you're affiliated with a local accelerator or innovation hub, let's grab coffee and talk through your product challenges. No pitch, no strings—just trying to be helpful.
            </p>
            <a href="mailto:martin@designconquest.com?subject=Coffee%20Chat%20-%20Tampa%20Bay%20Startup">
              <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
                <Coffee className="w-4 h-4" />
                Schedule a Coffee Chat
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-24 px-4 scroll-mt-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's figure out if I can help.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you're hiring, have a project, or just want to talk about product development—I'm happy to chat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Martin Veldsman</h3>
              <p className="text-slate-500 text-sm mb-6">Product Designer & Manufacturing Strategist</p>
              <div className="space-y-4">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 text-sm transition-colors">
                  <Mail className="w-5 h-5" />
                  martin@designconquest.com
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 text-sm transition-colors">
                  <Phone className="w-5 h-5" />
                  (540) 819-2005
                </a>
                <a href="https://linkedin.com/in/martinveldsman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 text-sm transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin className="w-5 h-5" />
                  Tampa Bay, FL
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a href="mailto:martin@designconquest.com?subject=Let's%20Talk%20-%20Product%20Development">
                <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 h-12 px-6 text-sm font-bold gap-2 w-full">
                  <MessageCircle className="w-4 h-4" />
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/Martin-Veldsman-Resume.pdf" download>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-6 text-sm gap-2 w-full">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href="https://designconquest.webflow.io" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-6 text-sm gap-2 w-full">
                  <Zap className="w-4 h-4" />
                  View Design Conquest
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING ==================== */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container max-w-3xl text-center">
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            Building something interesting? I'd love to hear about it—even if you're not ready to hire or don't have budget for a project yet.
          </p>
          <p className="text-amber-400 font-semibold text-lg">— Martin</p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-slate-600 text-sm">© 2025 Martin Veldsman</p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/martinveldsman" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:martin@designconquest.com" className="text-slate-500 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
