import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, Cog, CheckCircle2, Mail, Phone, Linkedin, TrendingUp, Rocket, Target, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Luxury Consultancy
 * - High-end, sophisticated aesthetic
 * - Warm gold/champagne accents with deep navy/charcoal
 * - Asymmetric, editorial layout (not centered)
 * - Premium typography with generous whitespace
 * - Cinematic imagery with warm lighting
 * - Emphasis on craftsmanship and strategic thinking
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
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-600/20">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-sm flex items-center justify-center">
              <Rocket className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-50 leading-tight">Martin Veldsman</span>
              <span className="text-xs text-amber-400 font-semibold">Product Strategist</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#why" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Why Me
            </a>
            <a href="#cta" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Bleed Image */}
      <section className="relative pt-16 pb-0 overflow-hidden h-screen flex items-end">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-premium.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />

        {/* Content */}
        <div className="container relative z-10 pb-20 max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Strategic Product Development</p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                From Concept to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Investor Confidence</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              I help hardware startups navigate the critical transition that kills most companies: turning compelling concepts into manufacturable, fundable, market-ready products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-8 py-6 text-base font-semibold rounded-none flex items-center gap-2 group"
              >
                Schedule Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-600/40 text-slate-300 hover:bg-slate-900 hover:border-amber-400 px-8 py-6 text-base font-semibold rounded-none"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 px-4 bg-slate-900/50 border-b border-amber-600/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold">Credentials</p>
              <p className="text-slate-300">Virginia Tech Industrial Design (Cum Laude)</p>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold">Proof Point</p>
              <p className="text-slate-300">BANQloop: Designed AI kiosks → $4M seed funding</p>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold">Scale</p>
              <p className="text-slate-300">Design Conquest: 500+ production images/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">The Challenge</p>
              <h2 className="text-5xl font-bold leading-tight">Hardware startups fail at the transition point</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-amber-400">87%</div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  of hardware startups fail due to manufacturing challenges, not market fit
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-amber-400">6-12 mo</div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  typical time from CAD to production, often with costly design revisions
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-amber-400">$50K-$500K</div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  average cost of manufacturing mistakes that could have been caught earlier
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-amber-600/10">
              <p className="text-slate-300 leading-relaxed">
                Founders have compelling product visions and working prototypes. But they lack the expertise to answer critical questions: Can this actually be manufactured at scale? What's the optimal process? How do we reduce costs without sacrificing quality? How do we tell this story to investors in a way that de-risks the manufacturing uncertainty?
              </p>
              <p className="text-amber-400 font-semibold">
                That's where I come in. I bridge the gap between vision and market reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background Image */}
      <section id="services" className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/section-manufacturing.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />

        <div className="container relative z-10 space-y-16">
          <div className="space-y-4 max-w-2xl">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">My Services</p>
            <h2 className="text-5xl font-bold leading-tight">Three ways to work together</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="space-y-6 group">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-600/20 rounded-sm flex items-center justify-center group-hover:bg-amber-600/40 transition-colors">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Concept Sprint</h3>
                <p className="text-sm text-slate-400">1-2 weeks, rough idea to investor-ready</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-amber-400">$5K-$10K</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>High-fidelity 3D CAD models</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Investor-grade renderings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Manufacturing strategy</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>DFM review & insights</span>
                </li>
              </ul>
            </div>

            {/* Service 2 - Featured */}
            <div className="space-y-6 bg-gradient-to-br from-amber-600/10 to-amber-600/5 p-8 border border-amber-600/30 relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-600 text-slate-950 text-xs font-bold">
                POPULAR
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-600/30 rounded-sm flex items-center justify-center">
                  <Cog className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Design-to-Factory</h3>
                <p className="text-sm text-slate-400">Full journey from concept to supplier handoff</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-amber-400">$15K-$35K</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Everything in Concept Sprint</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Production-ready CAD with DFM</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Supplier vetting & roadmap</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>BOM & technical drawings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>500+ marketing images</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="space-y-6 group">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-600/20 rounded-sm flex items-center justify-center group-hover:bg-amber-600/40 transition-colors">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Embedded Strategy</h3>
                <p className="text-sm text-slate-400">Ongoing partnership for scaling teams</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-amber-400">$3K-$5K/mo</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Weekly strategy reviews</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time problem-solving</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Supplier negotiation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Investor storytelling support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section with Background */}
      <section id="why" className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/section-investor.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Why I'm Different</p>
                <h2 className="text-5xl font-bold leading-tight">I'm not just a designer or engineer</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">Design Thinking</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Most engineers optimize for cost. I combine aesthetics with manufacturability—your product is beautiful AND profitable.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">Manufacturing Reality</h3>
                  <p className="text-slate-300 leading-relaxed">
                    10+ years across sheet metal, plastics, CNC, rapid prototyping, and injection molding. I know what works at scale.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">Investor Storytelling</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I've designed products that helped secure $4M in seed funding. I understand what investors need to see.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">Operational Excellence</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Through Design Conquest, I've built systems delivering 500+ production images in a single day. Speed without sacrificing quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">$4M</div>
                <p className="text-slate-400 text-sm">Seed funding secured</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">500+</div>
                <p className="text-slate-400 text-sm">Images per day</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">10+</div>
                <p className="text-slate-400 text-sm">Years experience</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">5</div>
                <p className="text-slate-400 text-sm">Manufacturing processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-4 border-t border-amber-600/10">
        <div className="container max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Next Step</p>
              <h2 className="text-5xl font-bold leading-tight">Ready to bridge vision and market?</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Let's schedule a 30-minute strategy call to discuss your product vision and how I can help you get to market faster, smarter, and with less risk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-4 bg-slate-900 border border-amber-600/20 rounded-none text-slate-50 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-8 py-4 font-semibold rounded-none whitespace-nowrap"
                >
                  Schedule Call
                </Button>
              </div>
              {submitted && (
                <p className="text-center text-amber-400 text-sm">
                  ✓ Thanks! I'll be in touch within 24 hours.
                </p>
              )}
            </form>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8 border-t border-amber-600/10">
              <a href="tel:+15408192005" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(540) 819-2005</span>
              </a>
              <a href="mailto:martinveldsman@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">martinveldsman@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-amber-600/10 bg-slate-900/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Concept Sprint</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Design-to-Factory</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Embedded Strategy</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50 text-sm uppercase tracking-widest">Expertise</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Industrial Design</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">DFM Strategy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Investor Storytelling</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50 text-sm uppercase tracking-widest">Featured</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">BANQloop ($4M)</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Design Conquest</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50 text-sm uppercase tracking-widest">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.linkedin.com/in/martinveldsman" className="hover:text-amber-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://www.martinveldsman.com/designconquest" className="hover:text-amber-400 transition-colors">Portfolio</a></li>
                <li><a href="mailto:martinveldsman@gmail.com" className="hover:text-amber-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-600/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Martin Veldsman. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
