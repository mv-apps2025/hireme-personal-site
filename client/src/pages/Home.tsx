import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Briefcase, Wrench, Users, Coffee, Calendar, Eye, Zap, Factory, DollarSign, Clock, Target, Rocket, Building2, Handshake, Star, Send, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium, Editorial, Confident
 * - Strong visual hierarchy with bold typography
 * - Generous whitespace
 * - Warm amber accents on clean backgrounds
 * - Concise, punchy copy
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900">Martin Veldsman</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Work</a>
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#tampa" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Tampa Bay</a>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white text-sm px-5 h-9">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-3">
            <a href="#work" className="block text-slate-600 py-2">Work</a>
            <a href="#services" className="block text-slate-600 py-2">Services</a>
            <a href="#tampa" className="block text-slate-600 py-2">Tampa Bay</a>
            <Button className="w-full bg-slate-900 text-white mt-2">Let's Talk</Button>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="pt-28 sm:pt-36 pb-20 px-4">
        <div className="container max-w-4xl">
          {/* Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Available Now</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Hardware visions →
            <br />
            <span className="text-amber-500">fundable products</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            Industrial design + manufacturing expertise + startup speed. I bridge the gap that kills most hardware companies.
          </p>

          {/* Proof Points */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-10">
            <span>Virginia Tech ID</span>
            <span className="text-slate-300">•</span>
            <span>BANQloop → $4M raised</span>
            <span className="text-slate-300">•</span>
            <span>500+ deliverables</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 h-12 text-sm font-semibold gap-2">
              <MessageCircle className="w-4 h-4" />
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-slate-200 text-slate-700 px-6 h-12 text-sm font-semibold gap-2">
              <Eye className="w-4 h-4" />
              View Work
            </Button>
            <Button variant="ghost" className="text-slate-500 px-4 h-12 text-sm gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== THE GAP ==================== */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container max-w-4xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Designers make unbuildable things.<br />
            Engineers kill the magic.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            I speak both languages fluently. Design intent stays intact. Manufacturing works from day one.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "20-40%", label: "Cost reduction via DFM" },
              { stat: "10x", label: "Faster design cycles" },
              { stat: "$4M", label: "Helped raise at BANQloop" },
              { stat: "500+", label: "Production deliverables" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">{item.stat}</p>
                <p className="text-slate-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDIES ==================== */}
      <section id="work" className="py-20 px-4">
        <div className="container max-w-5xl">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">From sketch to funded</h2>

          {/* Case Study 1 */}
          <div className="mb-16">
            <div className="aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden mb-6">
              <img src="/images/banqloop-kiosk.jpg" alt="BANQloop Kiosk" className="w-full h-full object-cover" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-amber-600 text-sm font-semibold mb-2">BANQloop</p>
                <h3 className="text-2xl font-bold mb-3">AI recycling kiosks → $4M seed</h3>
                <p className="text-slate-600 leading-relaxed">
                  Led industrial design from concept to investor-ready. Created production-optimized designs and photorealistic renderings that proved technical feasibility. The visuals became central to their pitch deck.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-slate-900 font-medium">6 weeks</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-slate-900 font-medium">~$4M seed round</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Deliverables</p>
                  <p className="text-slate-900 font-medium">CAD, renders, DFM docs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="mb-16">
            <div className="aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden mb-6">
              <img src="/images/design-conquest-products.jpg" alt="Design Conquest Portfolio" className="w-full h-full object-cover" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-amber-600 text-sm font-semibold mb-2">Design Conquest</p>
                <h3 className="text-2xl font-bold mb-3">Scalable design-to-factory service</h3>
                <p className="text-slate-600 leading-relaxed">
                  Built a complete design-to-factory pipeline. Not just renderings—production-ready CAD, technical docs, and supplier-ready files. 500+ deliverables across dozens of clients.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Scale</p>
                  <p className="text-slate-900 font-medium">500+ deliverables</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Scope</p>
                  <p className="text-slate-900 font-medium">Global clients</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Speed</p>
                  <p className="text-slate-900 font-medium">Days, not weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative">
                <img src="/images/velocity-sprint-before.jpg" alt="Before" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
              </div>
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative">
                <img src="/images/velocity-sprint-after.jpg" alt="After" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-amber-600 text-sm font-semibold mb-2">Velocity Sprints</p>
                <h3 className="text-2xl font-bold mb-3">1-2 weeks instead of 3-6 months</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI-accelerated workflows let me explore 10-15 directions in days. Investor-grade renderings in hours. Manufacturing strategy before expensive commitments.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Compression</p>
                  <p className="text-slate-900 font-medium">10x faster</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Exploration</p>
                  <p className="text-slate-900 font-medium">15 directions/sprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="container max-w-5xl">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4">Two Ways to Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Full-time or project-based</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full-Time */}
            <div className="bg-white rounded-2xl p-8 border-2 border-emerald-200">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-700 text-xs font-bold uppercase">Available Now</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Time Role</h3>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />Embedded design + manufacturing expertise</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />Week 1: DFM audit, quick wins identified</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />Catch costly mistakes before tooling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />Bridge design, engineering, and ops</li>
              </ul>
              <div className="flex gap-3">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1 h-11">
                  <Calendar className="w-4 h-4 mr-2" />
                  Interview
                </Button>
                <Button variant="outline" className="border-slate-200 h-11">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contract */}
            <div className="bg-white rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-amber-700 text-xs font-bold uppercase">Starting 1-2 Weeks</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Project Sprint</h3>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                <li className="flex gap-2"><Rocket className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><strong>Concept Sprint:</strong> 1-2 weeks, investor-ready</li>
                <li className="flex gap-2"><Factory className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><strong>Design-to-Factory:</strong> 4-8 weeks, full CAD</li>
                <li className="flex gap-2"><DollarSign className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><strong>DFM Optimization:</strong> 20-40% cost reduction</li>
                <li className="flex gap-2"><Eye className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><strong>Investor Visuals:</strong> 3-7 days, pitch-ready</li>
              </ul>
              <div className="flex gap-3">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white flex-1 h-11">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discuss Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section id="tampa" className="py-20 px-4 bg-slate-900 text-white">
        <div className="container max-w-4xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Tampa Bay</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">New here. Building with you.</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            Moved to Tampa Bay for the innovation ecosystem. Not here to extract—here to contribute.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <Building2 className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="font-bold mb-2">Full-Time</h3>
              <p className="text-slate-400 text-sm">Hardware startups, manufacturers, innovation labs</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <Handshake className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="font-bold mb-2">Contract</h3>
              <p className="text-slate-400 text-sm">Innovation hub portfolio companies, milestone sprints</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <Star className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-slate-400 text-sm">Free office hours, DFM workshops, mentorship</p>
            </div>
          </div>

          {/* Free Session */}
          <div className="p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free 60-min strategy session</h3>
                <p className="text-slate-400 text-sm mb-4">For Tampa Bay innovation community members. Honest feedback, no pitch.</p>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white h-10 px-5 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">The toolkit</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Design", "Visualization", "Manufacturing", "Startup"].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === i ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 bg-slate-50 rounded-xl">
            {activeTab === 0 && (
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <p>• Industrial Design (user-centered)</p>
                <p>• CAD: SolidWorks, Fusion 360</p>
                <p>• DFM/DFA optimization</p>
                <p>• Material selection</p>
                <p>• Technical documentation</p>
                <p>• Multi-process manufacturing</p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <p>• KeyShot, Blender rendering</p>
                <p>• VR sketching (Gravity Sketch)</p>
                <p>• AI tools: Midjourney, VizCom</p>
                <p>• Investor presentations</p>
                <p>• Animation & storytelling</p>
                <p>• Marketing assets</p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <p>• Supplier collaboration</p>
                <p>• Tooling & cost negotiation</p>
                <p>• First article inspection</p>
                <p>• Lean manufacturing (5S, Kaizen)</p>
                <p>• BOM development</p>
                <p>• Cost optimization</p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <p>• Rapid iteration</p>
                <p>• Constrained budgets</p>
                <p>• Cross-functional collaboration</p>
                <p>• Investor communication</p>
                <p>• Comfortable with ambiguity</p>
                <p>• Strategic thinking</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container max-w-4xl">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Let's talk</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Briefcase className="w-6 h-6 text-emerald-600 mb-3" />
              <h3 className="font-bold mb-2">Hiring</h3>
              <p className="text-slate-500 text-sm mb-4">Full-time role discussion</p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-10 text-sm">Interview</Button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Rocket className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="font-bold mb-2">Project</h3>
              <p className="text-slate-500 text-sm mb-4">Scope & proposal in 24h</p>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white h-10 text-sm">Discuss</Button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Users className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-slate-500 text-sm mb-4">Coffee, no agenda</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 text-sm">Meet</Button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Mail className="w-6 h-6 text-slate-600 mb-3" />
              <h3 className="font-bold mb-2">Curious</h3>
              <p className="text-slate-500 text-sm mb-4">Reply within 24h</p>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-10 text-sm">Email</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="container max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-1">Martin Veldsman</h3>
              <p className="text-slate-500 text-sm mb-4">Product Designer & Manufacturing Strategist</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                Tampa Bay, Florida
              </div>
              <div className="space-y-2">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-2 text-slate-600 hover:text-amber-600 text-sm">
                  <Mail className="w-4 h-4" />
                  martin@designconquest.com
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-2 text-slate-600 hover:text-amber-600 text-sm">
                  <Phone className="w-4 h-4" />
                  (540) 819-2005
                </a>
                <a href="https://linkedin.com/in/martinveldsman" className="flex items-center gap-2 text-slate-600 hover:text-amber-600 text-sm">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <div className="p-5 bg-slate-50 rounded-xl mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-emerald-700 text-sm font-semibold">Actively exploring opportunities</span>
                </div>
                <p className="text-slate-500 text-sm">Interviewing + taking project inquiries. Selective about fit—looking for long-term relationships.</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you're building interesting physical products in Tampa Bay, reach out. Even without budget or a role—I'd love to hear what you're working on.
              </p>
              <p className="text-amber-600 font-semibold mt-4">— Martin</p>
            </div>
          </div>
          <div className="border-t border-slate-100 mt-12 pt-8 text-center text-slate-400 text-sm">
            © 2025 Martin Veldsman
          </div>
        </div>
      </footer>
    </div>
  );
}
