import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Wrench, Coffee, Calendar, Eye, Zap, Factory, DollarSign, Clock, Target, Rocket, XCircle, Award, Shield, Users, FileText, AlertTriangle, Palette, Cpu, Briefcase, Building2, Lightbulb, PenTool, Box, Layers, Image, MonitorPlay } from "lucide-react";
import { useState } from "react";

/**
 * MERGED VERSION: StoryBrand Framework + Interdisciplinary Value
 * 
 * StoryBrand Structure:
 * 1. Hero (Character) - Broader: anyone with a product vision (startups, businesses, manufacturers)
 * 2. Problem - Design/visualization/manufacturing gap
 * 3. Guide - Martin with full background, resume, interdisciplinary skills
 * 4. Plan - Clear engagement options
 * 5. Call to Action - Multiple paths
 * 6. Success - Transformation stories
 * 7. Tampa Bay Connection - Community focus
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
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#work" className="text-sm text-slate-400 hover:text-white transition-colors">Work</a>
            <a href="#services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</a>
            <a href="#tampa" className="text-sm text-slate-400 hover:text-white transition-colors">Tampa Bay</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm h-9 px-4">
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* ==================== 1. HERO (CHARACTER) ==================== */}
      <section className="pt-28 sm:pt-36 pb-20 px-4">
        <div className="container max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">Actively Exploring Opportunities</span>
          </div>

          {/* Hero Headline - Broader positioning */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            From Concept to Fundable,
            <br />
            Manufacturable Product—
            <span className="text-amber-400">Fast</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            I bridge the gap that kills most hardware companies: turning compelling visions into production-ready designs that win investor confidence and ship profitably.
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-8">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Virginia Tech Industrial Design
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              BANQloop (~$4M seed)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Design Conquest (500+ deliverables)
            </span>
          </div>

          {/* Tampa Bay callout */}
          <p className="flex items-center gap-2 text-slate-400 text-sm mb-10">
            <MapPin className="w-4 h-4 text-amber-400" />
            New to Tampa Bay. Available for full-time roles, contract projects, and collaborations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
              <MessageCircle className="w-4 h-4" />
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-5 h-12 text-sm font-semibold gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-5 h-12 text-sm font-semibold gap-2">
              <FileText className="w-4 h-4" />
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== 2. THE PROBLEM ==================== */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">The Critical Gap I Solve</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Most companies face this problem
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <Palette className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Designers</h3>
              <p className="text-slate-400 text-sm">Create beautiful concepts that cost $500/unit to manufacture</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <Cpu className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Engineers</h3>
              <p className="text-slate-400 text-sm">Make it buildable but kill the aesthetic appeal</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <Briefcase className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Founders</h3>
              <p className="text-slate-400 text-sm">Can't answer "what's your manufacturing strategy?" with confidence</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <Users className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Teams</h3>
              <p className="text-slate-400 text-sm">Waste months iterating between design and production reality</p>
            </div>
          </div>

          <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <p className="text-slate-300 text-lg text-center">
              <strong className="text-amber-400">I eliminate this friction.</strong> I think in both languages—design aesthetics and manufacturing constraints—from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 3. THE GUIDE (About Me) ==================== */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">What Makes Me Different</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Hybrid Capability Most Teams Need
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-3xl">
            I operate at the rare intersection of three critical disciplines:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Industrial Design */}
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industrial Design Thinking</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                B.S. Industrial Design, Virginia Tech (Cum Laude). Formal training in user-centered design, form language, and aesthetic development. I understand what makes products compelling to users and investors.
              </p>
            </div>

            {/* Manufacturing */}
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing Mastery</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deep DFM/DFA expertise across sheet metal, injection molding, CNC, rapid prototyping. I've negotiated tooling with factories, optimized production processes, and lived through the surprises that come up in manufacturing.
              </p>
            </div>

            {/* Startup Velocity */}
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Startup Velocity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Led industrial design at BANQloop (AI recycling kiosks → ~$4M seed funding). Built Design Conquest into a scalable design-to-factory service (500+ deliverables). I know how to move fast and de-risk manufacturing.
              </p>
            </div>
          </div>

          {/* Skills Tabs */}
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl mb-8">
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
                  <Box className="w-4 h-4 text-amber-400" />
                  SolidWorks, Fusion 360, Rhino
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Layers className="w-4 h-4 text-amber-400" />
                  User-centered design methodology
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <PenTool className="w-4 h-4 text-amber-400" />
                  Form language development
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Concept ideation & sketching
                </div>
              </div>
            )}

            {activeTab === 'visualization' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Image className="w-4 h-4 text-amber-400" />
                  KeyShot photorealistic rendering
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MonitorPlay className="w-4 h-4 text-amber-400" />
                  VR design (Gravity Sketch)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-amber-400" />
                  AI tools (Midjourney, VizCom)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Palette className="w-4 h-4 text-amber-400" />
                  Adobe Creative Suite
                </div>
              </div>
            )}

            {activeTab === 'manufacturing' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Factory className="w-4 h-4 text-amber-400" />
                  DFM/DFA optimization
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  Sheet metal, injection molding, CNC
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Box className="w-4 h-4 text-amber-400" />
                  Rapid prototyping & 3D printing
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  Cost optimization & supplier vetting
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <p className="text-slate-300 text-lg text-center italic">
              "I can sit in a design review, an engineering meeting, and an investor pitch—and contribute meaningfully to all three."
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 4. PROVEN IMPACT (Case Studies) ==================== */}
      <section id="work" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Proven Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Work That Delivered Results
          </h2>

          <div className="space-y-8">
            {/* BANQloop */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">BANQloop: AI Recycling Kiosks</h3>
                  <p className="text-amber-400 font-semibold">~$4M Seed Funding</p>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">Lead Industrial Designer</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Challenge</p>
                  <p className="text-slate-300 text-sm">Take AI-powered recycling concept from rough idea to investor-ready product</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">My Role</p>
                  <p className="text-slate-300 text-sm">Full product design, DFM optimization, investor visualization</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm">
                  <strong className="text-amber-400">Key Insight:</strong> Investors funded the vision because the design proved technical feasibility
                </p>
              </div>
            </div>

            {/* Design Conquest */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Design Conquest: Scalable Design-to-Factory</h3>
                  <p className="text-amber-400 font-semibold">500+ Deliverables</p>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">Founder / Lead Designer</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Challenge</p>
                  <p className="text-slate-300 text-sm">DTCs and OEMs need rapid design iteration with production-ready outputs</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">My Role</p>
                  <p className="text-slate-300 text-sm">Built complete design-to-manufacturing service</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm">
                  <strong className="text-amber-400">Key Insight:</strong> Speed and manufacturing accuracy are competitive advantages
                </p>
              </div>
            </div>

            {/* Velocity Sprints */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Startup Velocity Sprints</h3>
                  <p className="text-amber-400 font-semibold">10x Faster Iteration</p>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 text-xs font-semibold uppercase">Product Design Consultant</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Challenge</p>
                  <p className="text-slate-300 text-sm">Early-stage founders stuck between concept and buildable product</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">My Role</p>
                  <p className="text-slate-300 text-sm">Rapid 0→1 product development</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm">
                  <strong className="text-amber-400">Key Insight:</strong> AI-accelerated workflows + manufacturing knowledge = compressed 3-6 month cycles into 1-2 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. SERVICES ==================== */}
      <section id="services" className="py-20 px-4">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">What I Deliver</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Whether you need a full-time team member or project-based expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Full-Time */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase">Full-Time</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Full-Time Role Value</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Day 1 contribution:</strong> Manufacturing-optimized design thinking across your product pipeline</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Risk reduction:</strong> Catch costly mistakes before tooling investment</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Speed:</strong> AI-accelerated workflows (10-15 directions in a day, not weeks)</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Communication:</strong> Bridge between design, engineering, ops, and marketing</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Investor materials:</strong> Renderings and documentation that win stakeholder confidence</span>
                </li>
              </ul>
            </div>

            {/* Contract */}
            <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase">Contract</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contract/Project Value</h3>
              <ul className="space-y-3">
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
                <li className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Manufacturing Strategy:</strong> Supplier vetting, tooling specs, cost validation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Companies Hire Me */}
          <div className="p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Common challenges I solve</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-400 text-sm mb-2">"We need someone who understands both design and manufacturing"</p>
                <p className="text-amber-400 text-sm">→ I speak both languages fluently. I've been in design studios and on factory floors.</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">"Our designs look great but cost too much to produce"</p>
                <p className="text-amber-400 text-sm">→ I optimize for aesthetics AND target cost from the first sketch.</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">"We're moving fast and need someone who can keep up"</p>
                <p className="text-amber-400 text-sm">→ AI-accelerated workflows let me deliver in days what traditionally takes weeks.</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">"We need investor-grade materials to raise capital"</p>
                <p className="text-amber-400 text-sm">→ I've created renderings and documentation that helped secure millions in funding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. TAMPA BAY CONNECTION ==================== */}
      <section id="tampa" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Tampa Bay Connection</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why I'm Here + How I Want to Contribute
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-3xl">
            Just moved to Tampa Bay and genuinely impressed by the innovation ecosystem. spARK Labs, Tampa Bay Wave, SPID—there's real momentum here.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">I'm Actively Seeking</h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Full-time product design/engineering roles with Tampa Bay companies
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Contract relationships with local startups and manufacturers
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Connections within the innovation community
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Opportunities to contribute through workshops or office hours
                </li>
              </ul>
            </div>
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">What I Bring to Tampa's Ecosystem</h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Design and manufacturing expertise that's rare in one person
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Startup experience (know the fundraising journey, the scrappy execution)
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Willingness to share what I've learned (including expensive mistakes)
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  Energy to contribute, not just extract from the community
                </li>
              </ul>
            </div>
          </div>

          {/* Special Offer */}
          <div className="p-6 sm:p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Special Offer for Tampa Bay Innovation Community</h3>
            <p className="text-slate-300 mb-6">
              <strong className="text-amber-400">Free initial product strategy session</strong> for startups affiliated with spARK Labs, Tampa Bay Wave, or SPID. Let's discuss your product challenges—no strings attached.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
              <Coffee className="w-4 h-4" />
              Schedule a Coffee Chat
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== 7. CONTACT ==================== */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-5xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Let's Talk</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Available for Conversation About
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <Briefcase className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">If you're hiring</h3>
              <p className="text-slate-400 text-sm">I'd love to learn about your product challenges and see if I'm a fit for your team. Portfolio reviews available, references ready.</p>
            </div>
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <Rocket className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">If you have a project</h3>
              <p className="text-slate-400 text-sm">Let's discuss scope, timeline, and budget. I'll give you honest feedback on whether I'm the right resource.</p>
            </div>
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <Building2 className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">If you're in Tampa's innovation community</h3>
              <p className="text-slate-400 text-sm">Coffee meetings welcome. Happy to share what I've learned, hear about what you're building, and figure out how to be helpful.</p>
            </div>
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <Lightbulb className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">If you're just curious</h3>
              <p className="text-slate-400 text-sm">I'm genuinely interested in meeting people working on interesting physical products. No agenda, just good conversation.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Martin Veldsman</h3>
              <p className="text-slate-500 text-sm mb-4">Product Designer & Manufacturing Strategist</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                Tampa Bay, FL
              </div>
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
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-white text-sm font-semibold">Within 24 hours</p>
                </div>
                <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Coffee Meetings</p>
                  <p className="text-white text-sm font-semibold">Always available</p>
                </div>
                <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Portfolio Reviews</p>
                  <p className="text-white text-sm font-semibold">By appointment</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 h-10 px-4 text-sm font-semibold gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Let's Talk
                </Button>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-10 px-4 text-sm gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING MESSAGE ==================== */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container max-w-3xl text-center">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I'm not just looking for any job—I'm looking for teams building products that matter, where design thinking and manufacturing reality both have a seat at the table.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            If you need someone who can <strong className="text-white">design it beautifully</strong>, <strong className="text-white">build it profitably</strong>, and <strong className="text-white">help tell the story compellingly</strong>, let's talk.
          </p>
          <p className="text-amber-400 font-semibold text-lg">— Martin</p>
          <p className="text-slate-500 text-sm mt-6 italic">
            P.S. — Seriously, if you're working on interesting physical products in Tampa Bay, reach out. Even if you're not hiring or don't have budget for a project, I'd love to hear what you're building.
          </p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-slate-600 text-sm">© 2025 Martin Veldsman. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/martinveldsman" className="text-slate-500 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:martin@designconquest.com" className="text-slate-500 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors text-sm">
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
