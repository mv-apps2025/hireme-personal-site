import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, Cog, CheckCircle2, Mail, Phone, Linkedin, TrendingUp, Rocket, Target, Sparkles, Clock, DollarSign, Shield, Palette, Eye } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Luxury Consultancy
 * Copy Strategy: Visualization-first, founder-centric, credibility-backed
 * Section Order: Hero → Credibility → Problem → Solution → Services → Social Proof → CTA
 * 
 * KEY REBALANCE: Lead with visualization/presentation as primary value.
 * Manufacturing expertise is the credibility layer that makes renderings buildable.
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
              <span className="text-xs text-amber-400 font-semibold">Visual Strategist</span>
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

      {/* SECTION 1: HERO - Visualization-First Outcome */}
      <section className="relative pt-16 pb-0 overflow-hidden h-screen flex items-end">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-premium.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />

        <div className="container relative z-10 pb-20 max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">For Hardware Founders</p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Turn Your Concept Into
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Investor Gold</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              Most founders can't tell their product story visually. I create investor-grade renderings, pitch materials, and presentations that build confidence—backed by real manufacturing expertise so investors know it's actually buildable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-8 py-6 text-base font-semibold rounded-none flex items-center gap-2 group"
              >
                Schedule 30-Min Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-600/40 text-slate-300 hover:bg-slate-900 hover:border-amber-400 px-8 py-6 text-base font-semibold rounded-none"
              >
                See Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREDIBILITY - Proof Points (Visualization + Manufacturing) */}
      <section className="py-16 px-4 bg-slate-900/50 border-b border-amber-600/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold">Designed for Success</p>
              <p className="text-slate-300 font-light">BANQloop: Renderings + strategy that secured $4M seed funding</p>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold">Operating at Scale</p>
              <p className="text-slate-300 font-light">Design Conquest: 500+ production-ready images delivered daily</p>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-semibold">Credibility Through Manufacturing</p>
              <p className="text-slate-300 font-light">Virginia Tech ID + 10 years ensuring renderings are actually buildable</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM - Founder Pain Points (Visualization Gap) */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">The Reality</p>
              <h2 className="text-5xl font-bold leading-tight">Your prototype looks like a prototype</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                You've got a brilliant product. You've got early customer interest. But when you walk into a pitch meeting, you're showing investors a rough prototype or basic CAD. They see potential, but they don't see confidence. They see risk.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed font-light">
                What you need is a visual narrative. Investor-grade renderings that show your product as a finished, polished, market-ready solution. Pitch decks that tell a compelling story. Marketing materials that build trust. But here's the problem: most renderings are beautiful lies. They look amazing but aren't actually buildable. Investors know this. They ask hard questions: "Can this really be manufactured? What's the cost? What are the constraints?"
              </p>

              <p className="text-lg text-slate-300 leading-relaxed font-light">
                That's where most founders get stuck. They have beautiful renderings but no credible manufacturing story to back them up.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-amber-400">73%</div>
                  <p className="text-slate-300 text-sm leading-relaxed">of founders say their biggest challenge is communicating their product vision to investors</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-amber-400">$50K-$200K</div>
                  <p className="text-slate-300 text-sm leading-relaxed">typical cost of bad renderings that don't match manufacturing reality</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-amber-400">2-4 weeks</div>
                  <p className="text-slate-300 text-sm leading-relaxed">time lost iterating on visuals that don't align with manufacturing constraints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION - Visualization + Credibility */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-600/5 to-amber-600/0 border-y border-amber-600/10">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">How I Help</p>
              <h2 className="text-5xl font-bold leading-tight">Renderings backed by manufacturing reality</h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                I'm a rare combination: industrial designer + visualization expert + manufacturing engineer. I create investor-grade visuals that are beautiful AND credible because they're grounded in real manufacturing knowledge.
              </p>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-amber-600/20">
                      <Palette className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-50">Premium Visualization</h3>
                    <p className="text-slate-300 leading-relaxed">KeyShot renderings, VR experiences, AI-enhanced imagery, and pitch-ready presentations. Your product looks like a finished, polished solution—because it is.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-amber-600/20">
                      <Eye className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-50">Credible Manufacturing Story</h3>
                    <p className="text-slate-300 leading-relaxed">Every rendering is grounded in real manufacturing constraints. When investors ask "Can this actually be built?", you have a credible answer backed by 10+ years of DFM expertise.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-amber-600/20">
                      <TrendingUp className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-50">Investor Storytelling</h3>
                    <p className="text-slate-300 leading-relaxed">I've designed products that secured $4M in seed funding. I know exactly what investors need to see: a clear vision, de-risked manufacturing, and compelling visuals that build confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES - Three Tiers (Visualization-First) */}
      <section id="services" className="relative py-24 px-4 overflow-hidden">
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
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Service Packages</p>
            <h2 className="text-5xl font-bold leading-tight">Investor-grade visuals at every stage</h2>
            <p className="text-lg text-slate-300 font-light">From concept validation to Series A pitch decks, I create the visual narrative that wins funding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="space-y-6 group">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-600/20 rounded-sm flex items-center justify-center group-hover:bg-amber-600/40 transition-colors">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Visual Concept Sprint</h3>
                <p className="text-sm text-slate-400">1-2 weeks. Perfect for early-stage founders.</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-amber-400">$5K-$10K</p>
                <p className="text-slate-300 text-sm font-light">Flat rate. No surprises.</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>High-fidelity 3D CAD from your concept</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>50+ investor-grade KeyShot renderings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Manufacturing credibility brief</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Pitch deck template with visuals</span>
                </li>
              </ul>
            </div>

            {/* Service 2 - Featured */}
            <div className="space-y-6 bg-gradient-to-br from-amber-600/10 to-amber-600/5 p-8 border border-amber-600/30 relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-600 text-slate-950 text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-600/30 rounded-sm flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Pitch-Ready Package</h3>
                <p className="text-sm text-slate-400">3-4 weeks. For founders raising seed or Series A.</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-amber-400">$15K-$35K</p>
                <p className="text-slate-300 text-sm font-light">Scope-based pricing. Transparent.</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Everything in Visual Concept Sprint</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>500+ production-ready marketing images</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>VR/interactive experience (Gravity Sketch)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Full pitch deck + investor materials</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Manufacturing credibility documentation</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="space-y-6 group">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-600/20 rounded-sm flex items-center justify-center group-hover:bg-amber-600/40 transition-colors">
                  <Shield className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Embedded Visual Strategy</h3>
                <p className="text-sm text-slate-400">Ongoing. For teams scaling to Series B+.</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-amber-400">$3K-$5K/mo</p>
                <p className="text-slate-300 text-sm font-light">Retainer. Cancel anytime.</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Weekly visualization & design reviews</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Ongoing rendering & marketing asset creation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Investor pitch deck updates & optimization</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Manufacturing strategy & credibility support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF - Why Me */}
      <section id="why" className="relative py-24 px-4 overflow-hidden">
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
                <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Why Founders Choose Me</p>
                <h2 className="text-5xl font-bold leading-tight">I've walked the path you're on</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">I Designed for $4M in Seed Funding</h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    At BANQloop, I created the visual narrative that helped secure $4M in seed funding. I know exactly what investors need to see: compelling renderings, credible manufacturing strategy, and investor-grade storytelling.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">I Operate at Massive Scale</h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    Through Design Conquest, I've built systems delivering 500+ production-ready images in a single day. I've learned how to move fast without sacrificing quality or credibility.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">My Renderings Are Actually Buildable</h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    10+ years across sheet metal, plastics, CNC, rapid prototyping, and injection molding. My visualizations aren't beautiful lies—they're grounded in real manufacturing constraints. Investors know this. It builds confidence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-amber-400">I'm Invested in Your Success</h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    I don't just deliver renderings and disappear. I become a strategic partner in your visual narrative and manufacturing credibility. Your wins are my wins.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">$4M</div>
                <p className="text-slate-400 text-sm font-light">Seed funding designed for</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">500+</div>
                <p className="text-slate-400 text-sm font-light">Images delivered per day</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">10+</div>
                <p className="text-slate-400 text-sm font-light">Years in manufacturing</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-amber-400">5</div>
                <p className="text-slate-400 text-sm font-light">Visualization tools mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA - Final Call to Action */}
      <section id="cta" className="py-24 px-4 border-t border-amber-600/10">
        <div className="container max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Ready?</p>
              <h2 className="text-5xl font-bold leading-tight">Let's turn your concept into investor gold</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Schedule a 30-minute strategy call. We'll discuss your product vision, identify the visual story you need to tell, and map out a clear path to investor confidence.
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
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Visual Concept Sprint</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Pitch-Ready Package</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Embedded Visual Strategy</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50 text-sm uppercase tracking-widest">Expertise</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Visualization (KeyShot, VR)</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Pitch Storytelling</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Manufacturing Credibility</a></li>
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
