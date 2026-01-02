import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Wrench, Coffee, Calendar, Eye, Zap, Factory, DollarSign, Clock, Target, Rocket, XCircle, Award, Shield, Users, FileText, AlertTriangle, Palette, Cpu, Briefcase, Building2, Lightbulb, PenTool, Box, Layers, Image, MonitorPlay } from "lucide-react";
import { useState } from "react";

/**
 * VISITOR-FOCUSED STRUCTURE:
 * Lead with THEIR problems and opportunities
 * Position Martin as the solution
 * Less "about me" → more "about what you need"
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<'design' | 'visualization' | 'manufacturing'>('design');

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-4 h-4 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-sm leading-tight">Martin Veldsman</span>
              <span className="text-slate-500 text-xs leading-tight">Product Designer</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-slate-400 hover:text-white transition-colors">The Challenge</a>
            <a href="#solution" className="text-sm text-slate-400 hover:text-white transition-colors">The Solution</a>
            <a href="#results" className="text-sm text-slate-400 hover:text-white transition-colors">Results</a>
            <a href="#work-together" className="text-sm text-slate-400 hover:text-white transition-colors">Work Together</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm h-9 px-4">
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* ==================== HERO: Their Opportunity ==================== */}
      <section className="pt-28 sm:pt-36 pb-20 px-4">
        <div className="container max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">Available Now</span>
          </div>

          {/* Hero - Visitor focused */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your product vision deserves
            <br />
            <span className="text-amber-400">to actually get built.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            You have a compelling concept. Maybe a prototype. But somewhere between "great idea" and "shipping product," things get stuck. Design and manufacturing don't talk to each other. Timelines slip. Costs balloon. Investors ask questions you can't answer.
          </p>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl">
            <strong className="text-white">It doesn't have to be this hard.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
              <MessageCircle className="w-4 h-4" />
              Let's Fix This Together
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-5 h-12 text-sm font-semibold gap-2">
              <Eye className="w-4 h-4" />
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== THE PROBLEM: Their Pain ==================== */}
      <section id="problem" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Sound Familiar?</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The gap between "great concept" and "shipped product" is where most hardware companies get stuck.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-3xl">
            You've probably experienced at least one of these:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"The design looks amazing, but it costs $500/unit to make"</h3>
              <p className="text-slate-400 text-sm">Your designer created something beautiful. Your manufacturer says it's impossible—or insanely expensive. Back to square one.</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"Engineering made it buildable, but now it looks like medical equipment"</h3>
              <p className="text-slate-400 text-sm">The soul of your product got lost somewhere between the concept and the CAD file. It works, but nobody wants to buy it.</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"Investors keep asking about our manufacturing strategy"</h3>
              <p className="text-slate-400 text-sm">You have a great pitch deck. But when they dig into how you'll actually produce this thing at scale, you're not confident in your answers.</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">"We've been iterating for months and still aren't production-ready"</h3>
              <p className="text-slate-400 text-sm">Your designer and engineer keep going back and forth. Every revision creates new problems. The timeline keeps slipping.</p>
            </div>
          </div>

          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <p className="text-slate-300 text-lg">
              <strong className="text-white">The root cause?</strong> Most teams have to hire separate designers, engineers, and manufacturing consultants who don't speak the same language. You end up playing translator—burning runway while everyone talks past each other.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THE SOLUTION: What They Need ==================== */}
      <section id="solution" className="py-20 px-4">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">What If...</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            You had one person who speaks both languages fluently?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-3xl">
            Someone who thinks about aesthetics AND manufacturing constraints from day one. Who can sit in a design review, an engineering meeting, and an investor pitch—and contribute meaningfully to all three.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design That Sells</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Products that look compelling to users and investors. Form language that communicates your brand. Renderings that win funding rounds.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Image className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visualization That Convinces</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Photorealistic renderings, VR experiences, pitch deck assets. Show investors and customers exactly what they're buying into—before you spend a dollar on tooling.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing That Works</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                DFM-optimized from the first sketch. Supplier relationships. Cost targets you can actually hit. No surprises when you go to production.
              </p>
            </div>
          </div>

          {/* Skills - framed as capabilities for THEM */}
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">The toolkit I bring to your project:</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('design')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'design' ? 'bg-amber-500 text-slate-950' : 'bg-slate-700/50 text-slate-400 hover:text-white'}`}
              >
                Design
              </button>
              <button
                onClick={() => setActiveTab('visualization')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'visualization' ? 'bg-amber-500 text-slate-950' : 'bg-slate-700/50 text-slate-400 hover:text-white'}`}
              >
                Visualization
              </button>
              <button
                onClick={() => setActiveTab('manufacturing')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'manufacturing' ? 'bg-amber-500 text-slate-950' : 'bg-slate-700/50 text-slate-400 hover:text-white'}`}
              >
                Manufacturing
              </button>
            </div>

            {activeTab === 'design' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  SolidWorks, Fusion 360, Rhino
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  User-centered design methodology
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Form language development
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Rapid concept ideation & sketching
                </div>
              </div>
            )}

            {activeTab === 'visualization' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  KeyShot photorealistic rendering
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  VR design (Gravity Sketch)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  AI-accelerated workflows (Midjourney, VizCom)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Adobe Creative Suite
                </div>
              </div>
            )}

            {activeTab === 'manufacturing' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  DFM/DFA optimization
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sheet metal, injection molding, CNC
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Rapid prototyping & 3D printing
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Cost optimization & supplier vetting
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== RESULTS: Proof It Works ==================== */}
      <section id="results" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">This Approach Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Here's what happens when design and manufacturing work together from day one.
          </h2>

          <div className="space-y-8">
            {/* BANQloop - framed as their success */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-slate-500 text-sm mb-1">Hardware Startup → Seed Funding</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">BANQloop raised ~$4M because investors believed they could actually build it</h3>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">~$4M Raised</span>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                They had a compelling vision for AI-powered recycling kiosks. But investors needed proof it could actually be manufactured at scale. I created production-optimized designs with photorealistic renderings that proved technical feasibility. The design work became central to their pitch deck.
              </p>
              <p className="text-amber-400 text-sm font-semibold">
                Result: Concept to investor-ready in 6 weeks. Seed round funded.
              </p>
            </div>

            {/* Design Conquest - framed as client success */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-slate-500 text-sm mb-1">DTCs & OEMs → Production-Ready Outputs</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">500+ products shipped through Design Conquest</h3>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">500+ Deliverables</span>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Brands and manufacturers needed rapid design iteration with outputs their factories could actually use. I built a design-to-manufacturing service that delivers production-ready files—not just pretty pictures.
              </p>
              <p className="text-amber-400 text-sm font-semibold">
                Result: Speed and manufacturing accuracy as competitive advantages.
              </p>
            </div>

            {/* Velocity Sprints - framed as founder success */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-slate-500 text-sm mb-1">Early-Stage Founders → Buildable Products</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">3-6 month timelines compressed into 1-2 weeks</h3>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">10x Faster</span>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Founders stuck between "I have an idea" and "I have something I can show investors." AI-accelerated workflows combined with manufacturing knowledge let me compress what typically takes months into focused sprints.
              </p>
              <p className="text-amber-400 text-sm font-semibold">
                Result: From napkin sketch to investor-ready in days, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW TO WORK TOGETHER ==================== */}
      <section id="work-together" className="py-20 px-4">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">How We Can Work Together</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Whatever stage you're at, there's a way to move forward.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Project-Based */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase">Project-Based</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You have a specific challenge to solve</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Concept Sprint (1-2 weeks):</strong> Rough idea → investor-grade renderings + manufacturing strategy</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Design-to-Factory (4-8 weeks):</strong> Full CAD through supplier-ready documentation</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>DFM Optimization:</strong> Reduce production costs 20-40% on existing designs</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Investor Visualization:</strong> Photorealistic renderings for pitch decks</span>
                </li>
              </ul>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-10 px-4 text-sm gap-2 w-full">
                <Rocket className="w-4 h-4" />
                Discuss Your Project
              </Button>
            </div>

            {/* Full-Time */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase">Full-Time / Embedded</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You need ongoing design + manufacturing leadership</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Day 1 contribution:</strong> Manufacturing-optimized design thinking across your pipeline</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Risk reduction:</strong> Catch costly mistakes before tooling investment</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Speed:</strong> AI-accelerated workflows (10-15 directions in a day)</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Communication:</strong> Bridge between design, engineering, ops, and investors</span>
                </li>
              </ul>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-10 px-4 text-sm gap-2 w-full">
                <Users className="w-4 h-4" />
                Let's Talk About Fit
              </Button>
            </div>
          </div>

          {/* Quick Proof Points */}
          <div className="flex flex-wrap justify-center gap-8 p-6 bg-slate-800/20 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Virginia Tech</p>
              <p className="text-slate-500 text-sm">Industrial Design, Cum Laude</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">~$4M</p>
              <p className="text-slate-500 text-sm">Helped raise at BANQloop</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-slate-500 text-sm">Production deliverables</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TAMPA BAY ==================== */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Tampa Bay</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            New to the area. Looking to contribute.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-3xl">
            Just moved to Tampa Bay and genuinely impressed by the innovation ecosystem—spARK Labs, Tampa Bay Wave, SPID. I'm actively seeking full-time roles, contract relationships, and ways to be useful to the community.
          </p>

          <div className="p-6 sm:p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">Free Strategy Session for Tampa Bay Startups</h3>
            <p className="text-slate-300 mb-6">
              If you're affiliated with spARK Labs, Tampa Bay Wave, or SPID, let's grab coffee and talk through your product challenges. No pitch, no strings—just trying to be helpful and meet interesting people building physical products.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
              <Coffee className="w-4 h-4" />
              Schedule a Coffee Chat
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's figure out if I can help.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you're hiring, have a project, or just want to talk about interesting physical products—I'm happy to chat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Martin Veldsman</h3>
              <p className="text-slate-500 text-sm mb-6">Product Designer & Manufacturing Strategist</p>
              <div className="space-y-3">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  martin@designconquest.com
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 text-sm transition-colors">
                  <Phone className="w-4 h-4" />
                  (540) 819-2005
                </a>
                <a href="https://linkedin.com/in/martinveldsman" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 text-sm transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  Tampa Bay, FL
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 h-12 px-6 text-sm font-bold gap-2 w-full">
                <MessageCircle className="w-4 h-4" />
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-12 px-6 text-sm gap-2 w-full">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-12 px-6 text-sm gap-2 w-full">
                <FileText className="w-4 h-4" />
                View Case Studies
              </Button>
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
              <a href="https://linkedin.com/in/martinveldsman" className="text-slate-500 hover:text-amber-400 transition-colors">
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
