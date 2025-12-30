import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, Cog, CheckCircle2, Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Industrial Design Consultant
 * - Sophisticated, engineering-forward aesthetic
 * - Precision and clarity with subtle motion
 * - Asymmetric layout with generous whitespace
 * - Deep navy/slate with technical blue accents
 * - Bridge between digital design and physical manufacturing
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
              <Cog className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Productization Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#packages" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Services
            </a>
            <a href="#why" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Why Us
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
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-slate-950/30" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-cyan-400 text-sm font-semibold">From Concept to Commercial</p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Bridge the Gap Between
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Design & Manufacturing
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Hardware startups fail at the transition point. We provide the missing expertise: industrial design meets millwork engineering. From CAD to commercial success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-base font-semibold rounded-lg flex items-center gap-2 group"
              >
                Get Your Free Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-base font-semibold rounded-lg"
              >
                See Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Millwork Engineer + Industrial Designer</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Specializing in DFM (Design for Manufacturing)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Serving Tampa Bay's innovation ecosystem</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden lg:block">
            <div className="relative h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-slate-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Lightbulb className="w-24 h-24 text-cyan-400/40 mx-auto" />
                  <p className="text-slate-400 text-sm">CAD Concept</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem */}
            <Card className="bg-slate-800/50 border-slate-700 p-8 space-y-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-50">The Problem</h3>
              <p className="text-slate-300 leading-relaxed">
                Hardware startups have brilliant CAD files but no path to manufacturing. Design-for-Manufacturing (DFM) mistakes cost thousands and delay market entry.
              </p>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-cyan-400" />
            </div>

            {/* Solution */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/30 p-8 space-y-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-50">Our Solution</h3>
              <p className="text-slate-300 leading-relaxed">
                We bridge the gap with dual expertise: industrial design + millwork engineering. Your CAD becomes a production-ready, cost-optimized reality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Packages Section */}
      <section id="packages" className="py-20 px-4">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold">Our Innovation Packages</h2>
            <p className="text-lg text-slate-300">
              Three tiered offerings designed to meet your startup at any stage of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <Card className="bg-slate-800/50 border-slate-700 p-8 space-y-6 hover:border-slate-600 transition-colors">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-50">Concept Validation</h3>
                <p className="text-sm text-slate-400">Perfect for early-stage startups</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-cyan-400">$2,500</p>
                <p className="text-slate-300 text-sm">Starting price</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">High-fidelity 3D CAD models</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Material & finish specification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">DFM review report</span>
                </div>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50">
                Learn More
              </Button>
            </Card>

            {/* Package 2 - Featured */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/50 p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-2 bg-cyan-500 text-slate-950 text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-50">Product Launch Accelerator</h3>
                <p className="text-sm text-slate-400">For presales & seed funding</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-cyan-400">$5,500</p>
                <p className="text-slate-300 text-sm">Complete package</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Everything in Concept Validation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Marketing sell sheet content</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Patent filing strategy outline</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">GTM strategy framework</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Get Started
              </Button>
            </Card>

            {/* Package 3 */}
            <Card className="bg-slate-800/50 border-slate-700 p-8 space-y-6 hover:border-slate-600 transition-colors">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-50">Manufacturing Optimization</h3>
                <p className="text-sm text-slate-400">For scaling production</p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-cyan-400">$8,500+</p>
                <p className="text-slate-300 text-sm">Custom pricing</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Everything in Launch Accelerator</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">CNC/Robotic toolpath optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Supply chain vetting (Tampa Bay)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Production cost analysis report</span>
                </div>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">Dual Expertise</h3>
                  <p className="text-slate-300">
                    We're not just designers or engineers—we're both. This unique combination means your product is optimized for both aesthetics and manufacturability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">Local, Proven Track Record</h3>
                  <p className="text-slate-300">
                    Millwork engineer at Periwinklers (precision commercial interiors) + independent industrial designer. We understand Tampa Bay's manufacturing ecosystem.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">DFM Focus</h3>
                  <p className="text-slate-300">
                    Design for Manufacturing isn't an afterthought—it's baked into every project. We save you thousands in re-tooling and production delays.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-cyan-400">Startup-Friendly Packages</h3>
                  <p className="text-slate-300">
                    From early-stage concept validation to production scaling, we have a package that fits your stage and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <p className="text-slate-300 text-sm">Commercial projects completed</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <p className="text-slate-300 text-sm">Years in precision manufacturing</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <p className="text-slate-300 text-sm">DFM-optimized deliverables</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">3-5x</div>
                <p className="text-slate-300 text-sm">Faster time-to-market</p>
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
              <h2 className="text-3xl font-bold">Ready to Turn Your Concept Into Reality?</h2>
              <p className="text-lg text-slate-300">
                Get a free 30-minute productization review. We'll analyze your project and show you exactly how to bridge the gap from CAD to commercial success.
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
                  Schedule Review
                </Button>
              </div>
              {submitted && (
                <p className="text-center text-cyan-400 text-sm">
                  ✓ Thanks! We'll be in touch shortly.
                </p>
              )}
            </form>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-4 border-t border-slate-700">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(727) XXX-XXXX</span>
              </a>
              <a href="mailto:hello@productizationlabs.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">hello@productizationlabs.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
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
                <li><a href="#" className="hover:text-cyan-400 transition-colors">CAD Modeling</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">DFM Consulting</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Patent Strategy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">GTM Planning</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Industries</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Advanced Manufacturing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Marine & Yachting</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Commercial Interiors</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Hardware Startups</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-50">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Productization Labs. All rights reserved.</p>
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
