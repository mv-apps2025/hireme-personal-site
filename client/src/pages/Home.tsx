import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Briefcase, Wrench, Lightbulb, Users, Coffee, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Professional Personal Brand
 * Positioning: Product Designer & Manufacturing Strategist seeking opportunities
 * Tone: Approachable, confident, community-oriented
 * Dual Audience: Employers (full-time) + Project Clients (contract)
 * 
 * Core Message: "I bridge the gap that kills most hardware startups"
 * - Designer who speaks manufacturing
 * - Manufacturing expert who understands design
 * - Tampa Bay focused, community-oriented
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-sm flex items-center justify-center">
              <Wrench className="w-4 h-4 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-50 leading-tight">Martin Veldsman</span>
              <span className="text-xs text-slate-400">Product Designer</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">About</a>
            <a href="#work" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Work</a>
            <a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Services</a>
            <a href="#tampa" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Tampa Bay</a>
            <a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-emerald-400 text-xs sm:text-sm font-medium">Actively Exploring Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                From Concept to Fundable,
                <br />
                Manufacturable Product—
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Fast</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
                I bridge the gap that kills most hardware startups: turning compelling visions into production-ready designs that win investor confidence and ship profitably.
              </p>
            </div>

            {/* Credentials Line */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Virginia Tech Industrial Design
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                BANQloop (~$4M seed)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Design Conquest (500+ deliverables)
              </span>
            </div>

            {/* Tampa Bay Callout */}
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm sm:text-base">New to Tampa Bay. Available for full-time roles, contract projects, and collaborations.</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-6 py-5 text-sm font-semibold rounded-sm flex items-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4" />
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:border-slate-600 px-6 py-5 text-sm font-semibold rounded-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:border-slate-600 px-6 py-5 text-sm font-semibold rounded-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE CRITICAL GAP */}
      <section id="about" className="py-16 sm:py-24 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">The Critical Gap I Solve</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Most companies face this problem</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm space-y-2">
                <p className="text-amber-400 font-semibold">Designers</p>
                <p className="text-slate-300 text-sm">Create beautiful concepts that cost $500/unit to manufacture</p>
              </div>
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm space-y-2">
                <p className="text-amber-400 font-semibold">Engineers</p>
                <p className="text-slate-300 text-sm">Make it buildable but kill the aesthetic appeal</p>
              </div>
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm space-y-2">
                <p className="text-amber-400 font-semibold">Founders</p>
                <p className="text-slate-300 text-sm">Can't answer "what's your manufacturing strategy?" with confidence</p>
              </div>
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm space-y-2">
                <p className="text-amber-400 font-semibold">Teams</p>
                <p className="text-slate-300 text-sm">Waste months iterating between design and production reality</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-600/10 to-amber-600/5 border border-amber-600/20 rounded-sm">
              <p className="text-lg sm:text-xl text-slate-100 font-medium">
                <span className="text-amber-400">I eliminate this friction.</span> I think in both languages—design aesthetics and manufacturing constraints—from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES ME DIFFERENT */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">What Makes Me Different</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">The Hybrid Capability Most Teams Need</h2>
              <p className="text-slate-300 text-base sm:text-lg">I operate at the rare intersection of three critical disciplines:</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-amber-600/20 rounded-sm flex items-center justify-center">
                    <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-50">Industrial Design Thinking</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">B.S. Industrial Design, Virginia Tech (Cum Laude). Formal training in user-centered design, form language, and aesthetic development. I understand what makes products compelling to users and investors.</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-amber-600/20 rounded-sm flex items-center justify-center">
                    <Wrench className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-50">Manufacturing Mastery</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Deep DFM/DFA expertise across sheet metal, injection molding, CNC, rapid prototyping. I've negotiated tooling with factories, optimized production processes, and lived through the surprises that come up in manufacturing.</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-amber-600/20 rounded-sm flex items-center justify-center">
                    <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-50">Startup Velocity</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Led industrial design at BANQloop (AI recycling kiosks → ~$4M seed funding). Built Design Conquest into a scalable design-to-factory service (500+ deliverables). I know how to move fast and de-risk manufacturing.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm">
              <p className="text-slate-300 text-sm sm:text-base italic">
                <span className="text-amber-400 font-semibold not-italic">Translation:</span> I can sit in a design review, an engineering meeting, and an investor pitch—and contribute meaningfully to all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN IMPACT */}
      <section id="work" className="py-16 sm:py-24 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">Proven Impact</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Work That Delivered Results</h2>
            </div>

            <div className="space-y-8">
              {/* BANQloop */}
              <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-50">BANQloop: AI Recycling Kiosks</h3>
                  <span className="text-amber-400 font-semibold text-sm">~$4M Seed Funding</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500 uppercase text-xs tracking-wider mb-1">Challenge</p>
                    <p className="text-slate-300">Take AI-powered recycling concept from rough idea to investor-ready product</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-xs tracking-wider mb-1">My Role</p>
                    <p className="text-slate-300">Lead Industrial Designer - full product design, DFM optimization, investor visualization</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-slate-400 text-sm"><span className="text-amber-400 font-medium">Key Insight:</span> Investors funded the vision because the design proved technical feasibility</p>
                </div>
              </div>

              {/* Design Conquest */}
              <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-50">Design Conquest: Scalable Design-to-Factory</h3>
                  <span className="text-amber-400 font-semibold text-sm">500+ Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500 uppercase text-xs tracking-wider mb-1">Challenge</p>
                    <p className="text-slate-300">DTCs and OEMs need rapid design iteration with production-ready outputs</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-xs tracking-wider mb-1">My Role</p>
                    <p className="text-slate-300">Founder/Lead Designer - built complete design-to-manufacturing service</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-slate-400 text-sm"><span className="text-amber-400 font-medium">Key Insight:</span> Speed and manufacturing accuracy are competitive advantages</p>
                </div>
              </div>

              {/* Startup Velocity */}
              <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-50">Startup Velocity Sprints</h3>
                  <span className="text-amber-400 font-semibold text-sm">10x Faster Iteration</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500 uppercase text-xs tracking-wider mb-1">Challenge</p>
                    <p className="text-slate-300">Early-stage founders stuck between concept and buildable product</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-xs tracking-wider mb-1">My Role</p>
                    <p className="text-slate-300">Product Design Consultant - rapid 0→1 product development</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-slate-400 text-sm"><span className="text-amber-400 font-medium">Key Insight:</span> AI-accelerated workflows + manufacturing knowledge = compressed 3-6 month cycles into 1-2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DELIVER */}
      <section id="services" className="py-16 sm:py-24 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">What I Deliver</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Whether you need a full-time team member or project-based expertise</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Full-Time Role Value */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-amber-600/10 to-amber-600/5 border border-amber-600/20 rounded-sm space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-amber-600/20 rounded text-xs text-amber-400 font-medium">
                    <Briefcase className="w-3 h-3" />
                    FULL-TIME
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-50">Full-Time Role Value</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Day 1 contribution:</strong> Manufacturing-optimized design thinking across your product pipeline</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Risk reduction:</strong> Catch costly mistakes before tooling investment</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Speed:</strong> AI-accelerated workflows (10-15 directions in a day, not weeks)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Communication:</strong> Bridge between design, engineering, ops, and marketing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Investor materials:</strong> Renderings and documentation that win stakeholder confidence</span>
                  </li>
                </ul>
              </div>

              {/* Contract/Project Value */}
              <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-sm space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-medium">
                    <FileText className="w-3 h-3" />
                    CONTRACT
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-50">Contract/Project Value</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Concept Sprint</strong> (1-2 weeks): Rough idea → investor-grade renderings + manufacturing strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Design-to-Factory</strong> (4-8 weeks): Full CAD through supplier-ready documentation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">DFM Optimization:</strong> Reduce production costs 20-40% on existing designs</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Investor Visualization:</strong> Photorealistic renderings for pitch decks</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100">Manufacturing Strategy:</strong> Supplier vetting, tooling specs, cost validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COMPANIES HIRE ME */}
      <section className="py-16 sm:py-24 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">Why Companies Hire Me</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Common challenges I solve</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 sm:p-6 bg-slate-900 border border-slate-800 rounded-sm">
                <p className="text-slate-300 text-sm sm:text-base"><span className="text-slate-100 font-medium">"We need someone who understands both design and manufacturing"</span></p>
                <p className="text-amber-400 text-sm mt-2">→ I speak both languages fluently. I've been in design studios and on factory floors.</p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-900 border border-slate-800 rounded-sm">
                <p className="text-slate-300 text-sm sm:text-base"><span className="text-slate-100 font-medium">"Our designs look great but cost too much to produce"</span></p>
                <p className="text-amber-400 text-sm mt-2">→ I optimize for aesthetics AND target cost from the first sketch.</p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-900 border border-slate-800 rounded-sm">
                <p className="text-slate-300 text-sm sm:text-base"><span className="text-slate-100 font-medium">"We're moving fast and need someone who can keep up"</span></p>
                <p className="text-amber-400 text-sm mt-2">→ AI-accelerated workflows let me deliver in days what traditionally takes weeks.</p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-900 border border-slate-800 rounded-sm">
                <p className="text-slate-300 text-sm sm:text-base"><span className="text-slate-100 font-medium">"We need investor-grade materials to raise capital"</span></p>
                <p className="text-amber-400 text-sm mt-2">→ I've created renderings and documentation that helped secure millions in funding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAMPA BAY CONNECTION */}
      <section id="tampa" className="py-16 sm:py-24 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">Tampa Bay Connection</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Why I'm Here + How I Want to Contribute</h2>
              <p className="text-slate-300 text-base sm:text-lg">Just moved to Tampa Bay and genuinely impressed by the innovation ecosystem. spARK Labs, Tampa Bay Wave, SPID—there's real momentum here.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-50 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-400" />
                  I'm Actively Seeking
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Full-time product design/engineering roles with Tampa Bay companies
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Contract relationships with local startups and manufacturers
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Connections within the innovation community
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Opportunities to contribute through workshops or office hours
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-50 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  What I Bring to Tampa's Ecosystem
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Design and manufacturing expertise that's rare in one person
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Startup experience (know the fundraising journey, the scrappy execution)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Willingness to share what I've learned (including expensive mistakes)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    Energy to contribute, not just extract from the community
                  </li>
                </ul>
              </div>
            </div>

            {/* Special Offer */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-600/10 to-amber-600/5 border border-amber-600/20 rounded-sm space-y-4">
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-slate-50">Special Offer for Tampa Bay Innovation Community</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base">
                <strong className="text-slate-100">Free initial product strategy session</strong> for startups affiliated with spARK Labs, Tampa Bay Wave, or SPID. Let's discuss your product challenges—no strings attached.
              </p>
              <Button 
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-6 py-4 text-sm font-semibold rounded-sm flex items-center gap-2 group"
              >
                <Coffee className="w-4 h-4" />
                Schedule a Coffee Chat
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S TALK */}
      <section id="contact" className="py-16 sm:py-24 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">Let's Talk</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Available for Conversation About</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-sm space-y-3">
                <h3 className="text-lg font-bold text-amber-400">If you're hiring</h3>
                <p className="text-slate-300 text-sm">I'd love to learn about your product challenges and see if I'm a fit for your team. Portfolio reviews available, references ready.</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-sm space-y-3">
                <h3 className="text-lg font-bold text-amber-400">If you have a project</h3>
                <p className="text-slate-300 text-sm">Let's discuss scope, timeline, and budget. I'll give you honest feedback on whether I'm the right resource.</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-sm space-y-3">
                <h3 className="text-lg font-bold text-amber-400">If you're in Tampa's innovation community</h3>
                <p className="text-slate-300 text-sm">Coffee meetings welcome. Happy to share what I've learned, hear about what you're building, and figure out how to be helpful.</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-sm space-y-3">
                <h3 className="text-lg font-bold text-amber-400">If you're just curious</h3>
                <p className="text-slate-300 text-sm">I'm genuinely interested in meeting people working on interesting physical products. No agenda, just good conversation.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-50">Martin Veldsman</h3>
                  <p className="text-slate-400 text-sm">Product Designer & Manufacturing Strategist</p>
                  <p className="text-slate-400 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Tampa Bay, FL
                  </p>
                  
                  <div className="space-y-3 pt-4">
                    <a href="mailto:martin@designconquest.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">martin@designconquest.com</span>
                    </a>
                    <a href="tel:+15408192005" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">(540) 819-2005</span>
                    </a>
                    <a href="https://www.linkedin.com/in/martinveldsman" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Response time</p>
                    <p className="text-slate-300 text-sm">Within 24 hours</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Coffee meetings</p>
                    <p className="text-slate-300 text-sm">Always available</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Portfolio reviews</p>
                    <p className="text-slate-300 text-sm">By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL THOUGHT */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container max-w-3xl text-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I'm not just looking for any job—I'm looking for teams building products that matter, where design thinking and manufacturing reality both have a seat at the table.
            </p>
            <p className="text-slate-100 text-lg sm:text-xl font-medium">
              If you need someone who can design it beautifully, build it profitably, and help tell the story compellingly, let's talk.
            </p>
            <p className="text-amber-400 text-xl sm:text-2xl font-bold">— Martin</p>
            
            <p className="text-slate-500 text-sm pt-4 italic">
              P.S. — Seriously, if you're working on interesting physical products in Tampa Bay, reach out. Even if you're not hiring or don't have budget for a project, I'd love to hear what you're building.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 bg-slate-900/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2025 Martin Veldsman. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/martinveldsman" className="hover:text-amber-400 transition-colors">LinkedIn</a>
              <a href="mailto:martin@designconquest.com" className="hover:text-amber-400 transition-colors">Email</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Resume</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
