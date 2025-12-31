import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, Cog, CheckCircle2, Mail, Phone, Linkedin, TrendingUp, Rocket, Target } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Product Strategist
 * - Sophisticated, strategic positioning
 * - Bridge between vision, manufacturing, and investor confidence
 * - Premium pricing and outcome-focused messaging
 * - Deep navy/slate with technical cyan accents
 * - Emphasis on BANQloop success and Design Conquest track record
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Martin Veldsman</span>
            <span className="text-xs text-slate-400 ml-2">Product Strategist</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Services
            </a>
            <a href="#why" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Why Me
            </a>
            <a href="#cta" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950/20" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-cyan-400 text-sm font-semibold">Vision → Market in Weeks, Not Months</p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                From Concept to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Investor Confidence
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                I'm a Product Strategist specializing in the critical transition that kills most hardware startups: turning compelling concepts into manufacturable, fundable, market-ready products. Design thinking meets manufacturing reality meets investor storytelling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-base font-semibold rounded-lg flex items-center gap-2 group"
              >
                Schedule Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-base font-semibold rounded-lg"
              >
                View Case Studies
              </Button>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm"><strong>Virginia Tech</strong> Industrial Design (Cum Laude)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm"><strong>BANQloop:</strong> Designed AI recycling kiosks → $4M seed funding</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm"><strong>Design Conquest:</strong> Global design-to-factory service (500+ production images/day)</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden lg:block">
            <div className="relative h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-slate-700 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                <div className="text-center space-y-2">
                  <Lightbulb className="w-12 h-12 text-cyan-400/60 mx-auto" />
                  <p className="text-slate-400 text-xs">Concept</p>
                </div>
                <ArrowRight className="w-6 h-6 text-cyan-400/40 rotate-90" />
                <div className="text-center space-y-2">
                  <Cog className="w-12 h-12 text-cyan-400/60 mx-auto" />
                  <p className="text-slate-400 text-xs">Manufacturing</p>
                </div>
                <ArrowRight className="w-6 h-6 text-cyan-400/40 rotate-90" />
                <div className="text-center space-y-2">
                  <TrendingUp className="w-12 h-12 text-cyan-400/60 mx-auto" />
                  <p className="text-slate-400 text-xs">Investor Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">The Hardware Startup Paradox</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3">
                <div className="text-3xl font-bold text-red-400">87%</div>
                <p className="text-slate-300 text-sm">of hardware startups fail due to manufacturing challenges, not market fit</p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3">
                <div className="text-3xl font-bold text-orange-400">6-12 months</div>
                <p className="text-slate-300 text-sm">typical time from CAD to production—often with costly design revisions</p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3">
                <div className="text-3xl font-bold text-yellow-400">$50K-$500K</div>
                <p className="text-slate-300 text-sm">average cost of manufacturing mistakes that could have been caught earlier</p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-50">The Gap Most Founders Face</h3>
              <p className="text-slate-300 leading-relaxed">
                Founders have a compelling product vision and a working prototype. But they lack the expertise to answer critical questions: Can this actually be manufactured at scale? What's the optimal process? How do we reduce costs without sacrificing quality? How do we tell this story to investors in a way that de-risks the manufacturing uncertainty?
              </p>
              <p className="text-slate-300 leading-relaxed">
                That's where I come in. I bridge the gap between vision and market reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="py-20 px-4">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold">My Three Core Services</h2>
            <p className="text-lg text-slate-300">
              Tailored to where you are in your product journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="bg-slate-800/50 border-slate-700 p-8 space-y-6 hover:border-slate-600 transition-colors">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Concept Sprint</h3>
                <p className="text-sm text-slate-400">1-2 weeks, rough idea to investor-ready</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-cyan-400">$5K-$10K</p>
                <p className="text-slate-300 text-sm">Perfect for early-stage founders</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">High-fidelity 3D CAD models from your concept</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Investor-grade renderings (KeyShot, VR, AI)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Manufacturing strategy & process recommendations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">DFM review & cost optimization insights</span>
                </div>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50">
                Learn More
              </Button>
            </Card>

            {/* Service 2 - Featured */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/50 p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-2 bg-cyan-500 text-slate-950 text-xs font-bold rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Cog className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Design-to-Factory</h3>
                <p className="text-sm text-slate-400">Full journey from concept to supplier handoff</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-cyan-400">$15K-$35K</p>
                <p className="text-slate-300 text-sm">For founders raising seed or Series A</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Everything in Concept Sprint</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Production-ready CAD with DFM optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Supplier vetting & manufacturing roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">BOM, technical drawings, assembly documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">500+ production-ready marketing images</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Get Started
              </Button>
            </Card>

            {/* Service 3 */}
            <Card className="bg-slate-800/50 border-slate-700 p-8 space-y-6 hover:border-slate-600 transition-colors">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Embedded Strategy</h3>
                <p className="text-sm text-slate-400">Ongoing partnership for scaling teams</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-cyan-400">$3K-$5K/month</p>
                <p className="text-slate-300 text-sm">For teams navigating production scale-up</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Weekly strategy & design reviews</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Real-time manufacturing problem-solving</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Supplier negotiation & process optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Investor storytelling & pitch support</span>
                </div>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why" className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Why I'm Different</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">I'm Not Just a Designer</h3>
                  <p className="text-slate-300">
                    Most industrial designers create beautiful products that are expensive to manufacture. I combine design thinking with manufacturing reality—every design decision is optimized for both aesthetics and profitability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">I'm Not Just an Engineer</h3>
                  <p className="text-slate-300">
                    Most manufacturing engineers optimize for cost and efficiency, but lose the market appeal. I bridge both worlds: your product is beautiful AND manufacturable AND profitable.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">I've Helped Raise $4M in Seed Funding</h3>
                  <p className="text-slate-300">
                    At BANQloop, I designed AI-enabled recycling kiosks that helped the company secure ~$4M in seed funding. I understand what investors need to see: a clear product vision, de-risked manufacturing, and compelling storytelling.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">I Operate at Scale</h3>
                  <p className="text-slate-300">
                    Through Design Conquest, I operate a global design-to-factory service delivering 500+ production-ready images in a single day. I've built systems and processes that work at speed without sacrificing quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">$4M</div>
                <p className="text-slate-300 text-sm">Seed funding secured (BANQloop)</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <p className="text-slate-300 text-sm">Production images/day (Design Conquest)</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">10+ years</div>
                <p className="text-slate-300 text-sm">Industrial design + manufacturing</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">5 processes</div>
                <p className="text-slate-300 text-sm">Sheet metal, plastics, CNC, 3D, injection</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4">
        <div className="container max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/50 p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Ready to Bridge Vision and Market?</h2>
              <p className="text-lg text-slate-300">
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
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 font-semibold rounded-lg whitespace-nowrap"
                >
                  Schedule Call
                </Button>
              </div>
              {submitted && (
                <p className="text-center text-cyan-400 text-sm">
                  ✓ Thanks! I'll be in touch within 24 hours.
                </p>
              )}
            </form>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-4 border-t border-slate-700">
              <a href="tel:+15408192005" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(540) 819-2005</span>
              </a>
              <a href="mailto:martinveldsman@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">martinveldsman@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/martinveldsman" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Concept Sprint</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Design-to-Factory</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Embedded Strategy</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Expertise</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Industrial Design</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">DFM/DFA Strategy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Investor Storytelling</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Featured Work</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">BANQloop ($4M)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Design Conquest</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.linkedin.com/in/martinveldsman" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://www.martinveldsman.com/designconquest" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="mailto:martinveldsman@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Martin Veldsman. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
