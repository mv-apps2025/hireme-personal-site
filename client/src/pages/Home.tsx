import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Briefcase, Wrench, Lightbulb, Users, Coffee, FileText, ExternalLink, Rocket, Factory, DollarSign, Clock, Target, Gem, X, Calendar, Eye, Zap, Package, Globe, Palette, Box, Award, Building2, Handshake, Star, HelpCircle, Send } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern, Clean, Professional but Approachable
 * Color Scheme: Navy/Dark Blue Primary, Yellow/Gold Accent, White/Light Gray Backgrounds
 * Typography: Sans-serif headlines (bold, confident), readable body
 * 
 * 11 Sections:
 * 1. Hero / Above the Fold
 * 2. The Critical Gap I Solve
 * 3. What Makes Me Different
 * 4. Proven Impact (Case Studies)
 * 5. Portfolio Preview
 * 6. What I Deliver (Two Ways to Work)
 * 7. Why Companies Hire Me
 * 8. Tampa Bay Connection
 * 9. Core Capabilities
 * 10. Let's Talk (Four Paths)
 * 11. Contact & Footer
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 leading-tight">Martin Veldsman</span>
              <span className="text-xs text-slate-500">Product Designer</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-slate-600 hover:text-amber-600 transition-colors text-sm font-medium">About</a>
            <a href="#work" className="text-slate-600 hover:text-amber-600 transition-colors text-sm font-medium">Case Studies</a>
            <a href="#services" className="text-slate-600 hover:text-amber-600 transition-colors text-sm font-medium">Services</a>
            <a href="#tampa" className="text-slate-600 hover:text-amber-600 transition-colors text-sm font-medium">Tampa Bay</a>
            <a href="#contact" className="text-slate-600 hover:text-amber-600 transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wide">Available for Full-Time Roles & Contract Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
                I Turn Hardware Visions Into
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Fundable, Manufacturable Products</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                Most startups die in the gap between "great idea" and "can we build this profitably?" I eliminate that friction with <strong className="text-slate-900">industrial design thinking</strong> + <strong className="text-slate-900">manufacturing mastery</strong> + <strong className="text-slate-900">startup velocity</strong>.
              </p>
            </div>

            {/* Credentials Bar */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
              <span className="font-medium text-slate-700">Virginia Tech Industrial Design</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-slate-700">BANQloop (~$4M seed round)</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-slate-700">Design Conquest (500+ deliverables)</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-amber-600">New to Tampa Bay</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-base font-semibold rounded-lg flex items-center gap-2 group shadow-lg shadow-amber-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-6 text-base font-semibold rounded-lg flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View My Work
              </Button>
              <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 text-sm font-medium">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: THE CRITICAL GAP ==================== */}
      <section id="about" className="py-16 sm:py-24 px-4 bg-slate-900 text-white">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">The Problem That Kills Hardware Startups</h2>
            </div>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Gem className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Designers</h3>
                </div>
                <p className="text-slate-300 text-sm">Create beautiful concepts</p>
                <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                  <X className="w-4 h-4" />
                  <span>$500/unit to manufacture</span>
                </div>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Engineers</h3>
                </div>
                <p className="text-slate-300 text-sm">Make it buildable</p>
                <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                  <X className="w-4 h-4" />
                  <span>Kill aesthetic appeal</span>
                </div>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Founders</h3>
                </div>
                <p className="text-slate-300 text-sm">Can't answer confidently</p>
                <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                  <X className="w-4 h-4" />
                  <span>"What's your manufacturing strategy?"</span>
                </div>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Teams</h3>
                </div>
                <p className="text-slate-300 text-sm">Waste months iterating</p>
                <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                  <X className="w-4 h-4" />
                  <span>Between design and production reality</span>
                </div>
              </div>
            </div>

            {/* Solution Statement */}
            <div className="p-8 bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">I eliminate this friction.</h3>
              <p className="text-lg text-slate-200 leading-relaxed">
                I think in both languages—<strong className="text-white">design aesthetics AND manufacturing constraints</strong>—from day one. No translation needed. No surprises at the factory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: WHAT MAKES ME DIFFERENT ==================== */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">The Hybrid Capability Most Teams Need</h2>
              <p className="text-lg text-slate-600">I operate at the rare intersection of three critical disciplines:</p>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-amber-600">01</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Industrial Design Thinking</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  B.S. Industrial Design, Virginia Tech (Cum Laude). Formal training in user-centered design, form language, and aesthetic development. I understand what makes products compelling to users and investors.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-amber-600">02</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Manufacturing Mastery</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Deep DFM/DFA expertise across sheet metal, injection molding, CNC, rapid prototyping. I've negotiated tooling with factories, optimized production processes, and lived through the surprises that come up in manufacturing.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-amber-600">03</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Startup Velocity</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Led industrial design at BANQloop (AI recycling kiosks → ~$4M seed funding). Built Design Conquest into a scalable design-to-factory service (500+ deliverables). I know how to move fast and de-risk manufacturing.
                </p>
              </div>
            </div>

            {/* Translation Quote */}
            <div className="p-6 bg-slate-100 rounded-xl text-center">
              <p className="text-slate-700 text-lg italic">
                <strong className="text-slate-900 not-italic">Translation:</strong> I can sit in a design review, an engineering meeting, and an investor pitch—and contribute meaningfully to all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: PROVEN IMPACT (CASE STUDIES) ==================== */}
      <section id="work" className="py-16 sm:py-24 px-4 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">From Napkin Sketch to Funded Product</h2>
            </div>

            {/* Case Study 1: BANQloop */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                <img 
                  src="/images/banqloop-kiosk.jpg" 
                  alt="BANQloop AI Recycling Kiosk" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-wider">AI Recycling Kiosks</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Helped Secure ~$4M Seed Funding</h3>
                </div>
                <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>BANQloop had a compelling vision: AI-powered recycling kiosks that could identify materials and incentivize proper disposal. Great idea—but investors needed proof it could actually be built.</p>
                  <p><strong className="text-slate-900">My role:</strong> Lead industrial designer. I took their rough concept and created production-optimized designs with photorealistic renderings that proved technical feasibility.</p>
                  <p><strong className="text-slate-900">The outcome:</strong> The design work became central to their investor presentations. Funded.</p>
                </div>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-2 text-lg sm:text-xl text-slate-700 italic">
                  "Investors funded the vision because the design proved we could actually build it."
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Timeline</p>
                      <p className="text-sm font-semibold text-slate-900">6 weeks concept to funded</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Capital Raised</p>
                      <p className="text-sm font-semibold text-slate-900">~$4M seed round</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Key Deliverable</p>
                      <p className="text-sm font-semibold text-slate-900">3D renders + DFM docs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: Design Conquest */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                <img 
                  src="/images/design-conquest-products.jpg" 
                  alt="Design Conquest Product Portfolio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-wider">Scalable Design-to-Factory Service</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">500+ Production-Ready Deliverables</h3>
                </div>
                <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>Direct-to-consumer brands and OEMs face the same problem: they need design iteration speed without sacrificing manufacturing accuracy.</p>
                  <p><strong className="text-slate-900">My solution:</strong> Built Design Conquest as a complete design-to-factory service. Not just pretty pictures—production-ready CAD, technical documentation, and supplier-ready files.</p>
                  <p><strong className="text-slate-900">The scale:</strong> 500+ deliverables across dozens of clients. Recurring relationships because the work ships without surprises.</p>
                </div>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-2 text-lg sm:text-xl text-slate-700 italic">
                  "Speed and manufacturing accuracy are competitive advantages when your competitors take months to iterate."
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Deliverables</p>
                      <p className="text-sm font-semibold text-slate-900">500+ CAD models & renders</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Scope</p>
                      <p className="text-sm font-semibold text-slate-900">Global clients, Asia mfg</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Speed</p>
                      <p className="text-sm font-semibold text-slate-900">Days, not weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: Velocity Sprints */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <div className="grid grid-cols-2 aspect-[2/1]">
                <div className="bg-slate-100 relative overflow-hidden">
                  <img 
                    src="/images/velocity-sprint-before.jpg" 
                    alt="Concept Sketch - Before" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded">BEFORE</div>
                </div>
                <div className="bg-slate-100 relative overflow-hidden">
                  <img 
                    src="/images/velocity-sprint-after.jpg" 
                    alt="Final Rendering - After" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded">AFTER</div>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-wider">Rapid 0→1 Product Development</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">10x Faster Design Cycles</h3>
                </div>
                <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>Early-stage founders are stuck. They have a concept that excites them, but turning it into something buildable feels like a 6-month journey. By the time they have investor-ready materials, their runway is burned.</p>
                  <p><strong className="text-slate-900">My approach:</strong> 1-2 week velocity sprints using AI-accelerated workflows. Explore 10-15 design directions in days. Create investor-grade renderings in hours. Deliver manufacturing strategy before expensive commitments.</p>
                  <p><strong className="text-slate-900">The transformation:</strong> Compressed 3-6 month design cycles into 1-2 weeks.</p>
                </div>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-2 text-lg sm:text-xl text-slate-700 italic">
                  "AI tools + manufacturing knowledge = I can show you 15 design options in a day, not a month."
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Timeline</p>
                      <p className="text-sm font-semibold text-slate-900">1-2 weeks (vs 3-6 months)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Exploration</p>
                      <p className="text-sm font-semibold text-slate-900">10-15 directions/sprint</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-slate-500">Outcome</p>
                      <p className="text-sm font-semibold text-slate-900">Investor + mfg ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: PORTFOLIO PREVIEW ==================== */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">See the Work</h2>
              <p className="text-lg text-slate-600">From concept sketches to photorealistic renderings to factory-ready documentation—here's what the process actually looks like.</p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer">
                <img src="/images/banqloop-kiosk.jpg" alt="BANQloop Kiosk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">BANQloop Kiosk - Investor presentation rendering</p>
                </div>
              </div>
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer">
                <img src="/images/velocity-sprint-after.jpg" alt="Consumer Electronics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">Consumer electronics - KeyShot rendering</p>
                </div>
              </div>
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer">
                <img src="/images/cad-screenshot.jpg" alt="CAD Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">Production-ready CAD with DFM annotations</p>
                </div>
              </div>
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer">
                <img src="/images/velocity-sprint-before.jpg" alt="Concept Sketches" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">Early ideation sketches - concept exploration</p>
                </div>
              </div>
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer col-span-2">
                <img src="/images/design-conquest-products.jpg" alt="Product Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">Design Conquest portfolio - diverse product categories</p>
                </div>
              </div>
            </div>

            {/* Portfolio CTA */}
            <div className="text-center space-y-4">
              <p className="text-slate-600">Want to see more detailed case studies with process documentation?</p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 text-sm font-semibold rounded-lg">
                Request Full Portfolio Access
              </Button>
              <p className="text-slate-500 text-sm">I'll send you a password-protected link with complete project breakdowns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: WHAT I DELIVER ==================== */}
      <section id="services" className="py-16 sm:py-24 px-4 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">Two Ways to Work Together</h2>
              <p className="text-lg text-slate-600">Whether you need a full-time team member or project-based expertise—both paths get you the same rare combination of design thinking + manufacturing mastery.</p>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Full-Time */}
              <div className="bg-white rounded-2xl border-2 border-emerald-200 overflow-hidden shadow-lg">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Available Immediately
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Embedded Design & Manufacturing Expertise</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Week 1 Impact</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Deep dive into your product pipeline and manufacturing relationships</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Identify quick-win DFM optimizations (often 20-40% cost reduction)</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Establish design-to-manufacturing workflow improvements</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ongoing Value</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Catch costly mistakes before tooling investment (save 6+ months and $50K+)</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> AI-accelerated workflows: explore 10-15 directions in a day</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Bridge communication between design, engineering, ops, and marketing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Roles I'm Interested In</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Product Designer</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Industrial Designer</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Product Engineer</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Design Lead</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-5 text-sm font-semibold rounded-lg flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule Interview
                    </Button>
                    <Button variant="outline" className="border-slate-300 text-slate-700 px-6 py-5 text-sm font-semibold rounded-lg flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contract */}
              <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden shadow-lg">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide">
                    Starting at 1-2 Weeks
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Strategic Design Sprints</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-slate-900">Concept Sprint</h4>
                        <span className="text-xs text-slate-500 ml-auto">1-2 weeks</span>
                      </div>
                      <p className="text-sm text-slate-600">Perfect for pre-seed startups approaching investors. Walk into meetings with materials that prove technical feasibility.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <Factory className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-slate-900">Design-to-Factory</h4>
                        <span className="text-xs text-slate-500 ml-auto">4-8 weeks</span>
                      </div>
                      <p className="text-sm text-slate-600">Full CAD through supplier-ready documentation. Hand your factory a complete package that eliminates costly revision cycles.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-slate-900">DFM Optimization</h4>
                        <span className="text-xs text-slate-500 ml-auto">1-3 weeks</span>
                      </div>
                      <p className="text-sm text-slate-600">Reduce production costs 20-40% without sacrificing design intent on existing designs.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-slate-900">Investor Visualization</h4>
                        <span className="text-xs text-slate-500 ml-auto">3-7 days</span>
                      </div>
                      <p className="text-sm text-slate-600">Photorealistic renderings and animations for pitch decks. Show investors exactly what you're building.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 text-sm font-semibold rounded-lg flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Discuss Your Project
                    </Button>
                    <Button variant="outline" className="border-slate-300 text-slate-700 px-6 py-5 text-sm font-semibold rounded-lg flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      See Pricing Guide
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Helper */}
            <div className="bg-slate-100 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Not sure which path fits?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <p className="font-bold text-slate-900">Choose Full-Time If:</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> You're building multiple products or product lines</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> You need ongoing design leadership and manufacturing expertise</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Your product development is continuous (not one-off projects)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> You want someone who can grow with the company</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-slate-900">Choose Contract If:</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> You have a specific product that needs design/manufacturing optimization</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> You're approaching an investor milestone and need materials fast</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> You want to "try before you buy" (many contracts convert to full-time)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Your budget is project-based rather than headcount-based</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-slate-600 mt-6">
                <strong className="text-slate-900">Not Sure?</strong> Let's talk. I'll give you honest feedback on which approach makes sense for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: WHY COMPANIES HIRE ME ==================== */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">Common Challenges I Solve</h2>
            </div>

            <div className="space-y-4">
              {[
                { challenge: "We need someone who understands both design and manufacturing", solution: "I speak both languages fluently. I've been in design studios and on factory floors." },
                { challenge: "Our designs look great but cost too much to produce", solution: "I optimize for aesthetics AND target cost from the first sketch." },
                { challenge: "We're moving fast and need someone who can keep up", solution: "AI-accelerated workflows let me deliver in days what traditionally takes weeks." },
                { challenge: "We need investor-grade materials to raise capital", solution: "I've created renderings and documentation that helped secure millions in funding." },
                { challenge: "We're getting quotes that don't match what we expected", solution: "I've negotiated with factories and know how to specify designs that get accurate quotes." },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-xl">
                  <p className="text-slate-900 font-medium mb-2">"{item.challenge}"</p>
                  <p className="text-amber-600 font-medium flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: TAMPA BAY CONNECTION ==================== */}
      <section id="tampa" className="py-16 sm:py-24 px-4 bg-slate-900 text-white">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">New to Tampa Bay—Here to Build With You</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I just moved to Tampa Bay specifically because of the innovation ecosystem I saw building here. spARK Labs, Tampa Bay Wave, SPID, the hardware startups, the energy—this isn't just another Sun Belt city. There's something real happening.
              </p>
              <p className="text-slate-400">I'm not here to extract value. I'm here to contribute and build long-term relationships.</p>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold">Full-Time Opportunities</h3>
                </div>
                <p className="text-slate-400 text-sm">Ideal Companies:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Hardware startups (seed to Series A)</li>
                  <li>• Tampa Bay manufacturers exploring new products</li>
                  <li>• Innovation labs (Jabil, Tech Data, etc.)</li>
                  <li>• Consumer product companies with design teams</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold">Contract Projects</h3>
                </div>
                <p className="text-slate-400 text-sm">Perfect for:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Innovation hub portfolio companies</li>
                  <li>• Startups approaching investor milestones</li>
                  <li>• One-off product development needs</li>
                  <li>• Teams that want to "test drive" first</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold">Community Integration</h3>
                </div>
                <p className="text-slate-400 text-sm">What I want to contribute:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Free office hours at spARK / Wave / SPID</li>
                  <li>• "Design for Manufacturing" workshops</li>
                  <li>• Portfolio reviews for fellow designers</li>
                  <li>• Mentorship for students/early-career</li>
                </ul>
              </div>
            </div>

            {/* Special Offer */}
            <div className="p-8 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Free Product Strategy Session</h3>
                  <p className="text-amber-300 text-sm">For Tampa Bay innovation community members</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Who Qualifies</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Members of spARK Labs, Tampa Bay Wave, or SPID</li>
                    <li>• Tampa Bay-based hardware startups (pre-seed to Series A)</li>
                    <li>• Student teams working on physical products</li>
                    <li>• Non-profits developing products for social impact</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">What You Get (60 minutes)</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Honest feedback on your product design approach</li>
                    <li>• Identification of potential cost/timeline risks</li>
                    <li>• Recommendations on manufacturing strategy</li>
                    <li>• No sales pitch, no strings attached</li>
                  </ul>
                </div>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-5 text-base font-semibold rounded-lg flex items-center gap-2 group">
                <Calendar className="w-5 h-5" />
                Schedule Free Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: CORE CAPABILITIES ==================== */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">Skills & Expertise</h2>
            </div>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {["Design & Engineering", "Visualization", "Manufacturing", "Startup Mindset"].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === index
                        ? "bg-amber-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6 bg-slate-50 rounded-xl">
                {activeTab === 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Industrial Design (user-centered, aesthetic development)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> CAD: SolidWorks, Fusion 360</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> DFM/DFA analysis and optimization</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Multi-process manufacturing knowledge</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Technical documentation and drawings</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Material selection and finish specification</li>
                  </ul>
                )}
                {activeTab === 1 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Photorealistic rendering: KeyShot, Blender</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> VR sketching: Gravity Sketch</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> AI-accelerated design: Midjourney, VizCom</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Investor presentations and stakeholder materials</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Animation and product storytelling</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Marketing asset creation</li>
                  </ul>
                )}
                {activeTab === 2 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Supplier collaboration and factory communication</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Tooling specification and cost negotiation</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> First article inspection and quality control</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Lean manufacturing principles (5S, Kaizen)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Bill of materials development</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Cost optimization strategies</li>
                  </ul>
                )}
                {activeTab === 3 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Rapid iteration and fast decision-making</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Working with constrained budgets and timelines</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Cross-functional collaboration</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Investor communication and fundraising support</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Comfortable with ambiguity and changing requirements</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Strategic thinking beyond executing designs</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 10: LET'S TALK (FOUR PATHS) ==================== */}
      <section id="contact" className="py-16 sm:py-24 px-4 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">Ready to Talk? Choose Your Path</h2>
            </div>

            {/* Four Paths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Path 1: Hiring */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">You're Hiring</h3>
                </div>
                <p className="text-slate-600 text-sm">Evaluating me for a full-time role? Let's discuss your product challenges, team structure, and what you're looking for.</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase">You'll Get From Me:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Full resume with references</li>
                    <li>• Portfolio access (including NDA-protected work)</li>
                    <li>• Honest assessment of fit</li>
                  </ul>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-4 text-sm font-semibold rounded-lg flex-1">
                    Schedule Interview
                  </Button>
                  <Button variant="outline" className="border-slate-300 px-4 py-4 text-sm rounded-lg">
                    Resume
                  </Button>
                </div>
              </div>

              {/* Path 2: Project */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">You Have a Project</h3>
                </div>
                <p className="text-slate-600 text-sm">Need design or manufacturing expertise? Let's discuss scope, timeline, and budget. I'll send a detailed proposal within 24-48 hours.</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase">You'll Get From Me:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Honest assessment: Is this a good fit?</li>
                    <li>• Realistic timeline and transparent pricing</li>
                    <li>• Alternative recommendations if needed</li>
                  </ul>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-4 text-sm font-semibold rounded-lg flex-1">
                    Discuss Project
                  </Button>
                  <Button variant="outline" className="border-slate-300 px-4 py-4 text-sm rounded-lg">
                    Examples
                  </Button>
                </div>
              </div>

              {/* Path 3: Community */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Tampa's Innovation Community</h3>
                </div>
                <p className="text-slate-600 text-sm">Let's build the ecosystem together. Coffee meetings welcome—no agenda, just conversation about what you're building.</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase">You'll Get From Me:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Genuine curiosity (not a sales pitch)</li>
                    <li>• Insights and introductions if relevant</li>
                    <li>• Free product strategy feedback</li>
                  </ul>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 text-sm font-semibold rounded-lg flex-1">
                    Schedule Coffee
                  </Button>
                  <Button variant="outline" className="border-slate-300 px-4 py-4 text-sm rounded-lg">
                    Free Session
                  </Button>
                </div>
              </div>

              {/* Path 4: Curious */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Just Curious</h3>
                </div>
                <p className="text-slate-600 text-sm">Exploring or just want to chat? I'm pretty easy to talk to. Response within 24 hours (usually same day).</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase">Good Reasons to Reach Out:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Researching design resources for future needs</li>
                    <li>• Student/early-career looking for advice</li>
                    <li>• You just moved to Tampa too!</li>
                  </ul>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-4 text-sm font-semibold rounded-lg flex-1">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="border-slate-300 px-4 py-4 text-sm rounded-lg">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 11: CONTACT & FOOTER ==================== */}
      <section className="py-16 sm:py-24 px-4 bg-white border-t border-slate-200">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Martin Veldsman</h3>
                <p className="text-slate-600">Product Designer & Manufacturing Strategist</p>
                <p className="text-slate-500 text-sm flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4" />
                  Tampa Bay, Florida
                </p>
              </div>
              
              <div className="space-y-3">
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-3 text-slate-700 hover:text-amber-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>martin@designconquest.com</span>
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-3 text-slate-700 hover:text-amber-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>(540) 819-2005</span>
                </a>
                <a href="https://www.linkedin.com/in/martinveldsman" className="flex items-center gap-3 text-slate-700 hover:text-amber-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-600"><strong>Email:</strong> Within 24 hours (usually same day)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-600"><strong>Coffee meetings:</strong> Available weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-600"><strong>Portfolio reviews:</strong> By appointment</span>
                </div>
              </div>
            </div>

            {/* Closing Note */}
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-xl space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-emerald-700 font-semibold">Actively Exploring Opportunities</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Interviewing with companies and taking new project inquiries</li>
                  <li>• Respond to all serious inquiries within 24 hours</li>
                  <li>• Selective about fit (looking for long-term relationships)</li>
                  <li>• Building connections in Tampa Bay, not just job hunting</li>
                </ul>
                <p className="text-xs text-slate-400">Last Updated: December 31, 2025</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900">One More Thing...</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If you've read this far, you're probably the kind of person I want to work with—thoughtful, detail-oriented, actually reads things.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Don't overthink which button to click. Just reach out. We'll figure out the right path together.
                </p>
                <p className="text-amber-600 font-bold">— Martin</p>
                <p className="text-slate-500 text-sm italic">
                  P.S. — Seriously, if you're working on interesting physical products in Tampa Bay, reach out. Even if you're not hiring or don't have budget for a project, I'd love to hear what you're building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
              <a href="#work" className="hover:text-amber-600 transition-colors">Case Studies</a>
              <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
              <a href="#tampa" className="hover:text-amber-600 transition-colors">Tampa Bay</a>
              <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
            </div>
            <p className="text-sm text-slate-400">© 2025 Martin Veldsman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
