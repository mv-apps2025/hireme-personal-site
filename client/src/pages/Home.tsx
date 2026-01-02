import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle2, Mail, Phone, Linkedin, MapPin, Wrench, Coffee, Calendar, Eye, Zap, Factory, DollarSign, Clock, Target, Rocket, XCircle, Award, Shield, Users, FileText, AlertTriangle } from "lucide-react";

/**
 * STORYBRAND FRAMEWORK STRUCTURE:
 * 1. Hero (Character) - The visitor with a hardware vision
 * 2. Problem - External, Internal, Philosophical problems they face
 * 3. Guide - Martin with empathy + authority
 * 4. Plan - Clear 3-step process
 * 5. Call to Action - Direct + Transitional CTAs
 * 6. Failure - What happens if they don't act (stakes)
 * 7. Success - The transformation they'll achieve
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-4 h-4 text-slate-950" />
            </div>
            <span className="font-semibold text-white">Martin Veldsman</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-slate-400 hover:text-white transition-colors">The Problem</a>
            <a href="#guide" className="text-sm text-slate-400 hover:text-white transition-colors">Why Me</a>
            <a href="#plan" className="text-sm text-slate-400 hover:text-white transition-colors">The Plan</a>
            <a href="#success" className="text-sm text-slate-400 hover:text-white transition-colors">Success</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm h-9 px-4">
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* ==================== 1. CHARACTER (HERO) ==================== */}
      <section className="pt-28 sm:pt-36 pb-20 px-4">
        <div className="container max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">Available for Projects & Full-Time</span>
          </div>

          {/* Hero Headline - Speaks to the CHARACTER'S desire */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            You have a hardware vision.
            <br />
            <span className="text-amber-400">Let's make it fundable.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            You're building something real—a physical product that could change your industry. But turning that vision into something investors fund and factories build? That's where most hardware startups get stuck.
          </p>

          {/* Direct CTA + Transitional CTA */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 h-12 text-sm font-bold gap-2">
              <MessageCircle className="w-4 h-4" />
              Schedule a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-6 h-12 text-sm font-semibold gap-2">
              <Eye className="w-4 h-4" />
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== 2. PROBLEM ==================== */}
      <section id="problem" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-4xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The gap between "great idea" and "fundable product" kills most hardware startups.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            You know the feeling. You've got a compelling vision, maybe even a prototype. But something's not clicking.
          </p>

          {/* Three Levels of Problem */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* External Problem */}
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">External Problem</p>
              <h3 className="text-lg font-bold text-white mb-2">Designers and engineers don't speak the same language</h3>
              <p className="text-slate-400 text-sm">Beautiful concepts that cost $500/unit to manufacture. Or buildable designs that look like medical equipment.</p>
            </div>

            {/* Internal Problem */}
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Internal Problem</p>
              <h3 className="text-lg font-bold text-white mb-2">You feel stuck and uncertain</h3>
              <p className="text-slate-400 text-sm">"Can we actually build this profitably?" "Will investors take us seriously?" "Are we wasting time and money?"</p>
            </div>

            {/* Philosophical Problem */}
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Philosophical Problem</p>
              <h3 className="text-lg font-bold text-white mb-2">Great products deserve to exist</h3>
              <p className="text-slate-400 text-sm">It's not right that promising hardware visions die because founders can't find someone who speaks both design and manufacturing.</p>
            </div>
          </div>

          {/* Villain Statement */}
          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
            <p className="text-slate-300 text-lg">
              <strong className="text-white">The villain isn't you.</strong> It's the broken system that forces you to hire separate designers, engineers, and manufacturing consultants who don't communicate—burning your runway while you play translator.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 3. GUIDE (Empathy + Authority) ==================== */}
      <section id="guide" className="py-20 px-4">
        <div className="container max-w-4xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Your Guide</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            I've been where you are. And I've helped others get through it.
          </h2>

          {/* Empathy */}
          <div className="mb-12">
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I've watched founders burn through months and hundreds of thousands of dollars because their designer didn't understand manufacturing, or their engineer killed the product's soul. It's painful. And it's preventable.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              That's why I built my career at the intersection of industrial design and manufacturing—so founders like you don't have to choose between beautiful and buildable.
            </p>
          </div>

          {/* Authority - Credentials */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">~$4M</p>
              <p className="text-slate-400 text-sm">Helped raise at BANQloop</p>
              <p className="text-slate-500 text-xs mt-2">Lead Industrial Designer</p>
            </div>
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">500+</p>
              <p className="text-slate-400 text-sm">Production deliverables</p>
              <p className="text-slate-500 text-xs mt-2">Design Conquest</p>
            </div>
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">Virginia Tech</p>
              <p className="text-slate-400 text-sm">Industrial Design, Cum Laude</p>
              <p className="text-slate-500 text-xs mt-2">Formal training</p>
            </div>
          </div>

          {/* One-liner positioning */}
          <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <p className="text-slate-300 text-lg text-center">
              <strong className="text-amber-400">I speak both languages fluently</strong>—design aesthetics and manufacturing constraints—so you don't have to play translator between your team and your factory.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 4. THE PLAN ==================== */}
      <section id="plan" className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-4xl">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">The Plan</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Three simple steps to a fundable, manufacturable product
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl">
            No matter where you are in your journey, here's how we'll work together:
          </p>

          {/* 3-Step Plan */}
          <div className="space-y-6 mb-12">
            <div className="flex gap-6 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-slate-950 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">We talk about your vision</h3>
                <p className="text-slate-400">Free 30-minute strategy call. You tell me what you're building, where you're stuck, and what success looks like. I'll give you honest feedback on the path forward—whether or not we work together.</p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-slate-950 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">I create a clear roadmap</h3>
                <p className="text-slate-400">Based on your goals and timeline, I'll propose the right engagement: a focused sprint, a full design-to-factory package, or an embedded role on your team. Clear scope, clear deliverables, no surprises.</p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-slate-950 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">You get a fundable, buildable product</h3>
                <p className="text-slate-400">Walk into investor meetings with confidence. Hand your factory a complete package. Ship a product that looks as good as it works—and costs what you planned.</p>
              </div>
            </div>
          </div>

          {/* Engagement Options */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <Rocket className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Project-Based</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Concept Sprint (1-2 weeks)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Design-to-Factory (4-8 weeks)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />DFM Optimization</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Investor Visualization</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <Users className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Full-Time / Embedded</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Ongoing design leadership</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Manufacturing strategy</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Cross-functional collaboration</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Investor communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. CALL TO ACTION ==================== */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to turn your vision into reality?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's start with a conversation. 30 minutes, no obligation. I'll give you honest feedback on your product and the path forward.
          </p>

          {/* Direct CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 h-14 text-base font-bold gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Transitional CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-11 px-5 text-sm gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-11 px-5 text-sm gap-2">
              <FileText className="w-4 h-4" />
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== 6. FAILURE (Stakes) ==================== */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container max-w-4xl">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-4">What's at Stake</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Without the right guide, hardware startups fail in predictable ways.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Burned runway</h3>
              <p className="text-slate-400 text-sm">Months of iteration between designers and engineers who don't understand each other. $50K+ in tooling mistakes.</p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Lost investor confidence</h3>
              <p className="text-slate-400 text-sm">"What's your manufacturing strategy?" becomes the question that kills your pitch.</p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Compromised product</h3>
              <p className="text-slate-400 text-sm">Either beautiful but unbuildable, or buildable but ugly. Neither wins in the market.</p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Missed window</h3>
              <p className="text-slate-400 text-sm">Your competitor ships while you're still iterating. The market moves on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. SUCCESS (Transformation) ==================== */}
      <section id="success" className="py-20 px-4">
        <div className="container max-w-4xl">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">Success</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Imagine walking into your next investor meeting with complete confidence.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Investor-ready materials</h3>
              <p className="text-slate-400 text-sm">Photorealistic renderings and documentation that prove you can actually build this—profitably.</p>
            </div>
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Clear manufacturing path</h3>
              <p className="text-slate-400 text-sm">You know exactly how it gets built, what it costs, and which suppliers to use.</p>
            </div>
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Beautiful AND buildable</h3>
              <p className="text-slate-400 text-sm">A product that looks premium and ships without surprises. No compromises.</p>
            </div>
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Speed to market</h3>
              <p className="text-slate-400 text-sm">Weeks instead of months. Ship before your competitors catch up.</p>
            </div>
          </div>

          {/* Success Story */}
          <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              "BANQloop had a compelling vision for AI-powered recycling kiosks. But investors needed proof it could actually be built. I created production-optimized designs with photorealistic renderings that proved technical feasibility. The design work became central to their pitch deck."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-bold">Result: ~$4M seed round funded</p>
                <p className="text-slate-500 text-sm">6 weeks from concept to investor-ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-20 px-4 bg-amber-500">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mb-6">
            Your hardware vision deserves to exist.
          </h2>
          <p className="text-slate-800 text-lg mb-10 max-w-2xl mx-auto">
            Let's make sure it does. Schedule a free strategy call and let's talk about turning your concept into a fundable, manufacturable product.
          </p>
          <Button className="bg-slate-950 hover:bg-slate-900 text-white px-8 h-14 text-base font-bold gap-2">
            <Calendar className="w-5 h-5" />
            Schedule Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-16 px-4 bg-slate-950 border-t border-slate-800">
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
                <a href="mailto:martin@designconquest.com" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  martin@designconquest.com
                </a>
                <a href="tel:+15408192005" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  <Phone className="w-4 h-4" />
                  (540) 819-2005
                </a>
                <a href="https://linkedin.com/in/martinveldsman" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <div className="p-5 bg-slate-900 rounded-xl mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-emerald-400 text-sm font-semibold">Available for new projects</span>
                </div>
                <p className="text-slate-500 text-sm">Open to full-time roles, contract projects, and collaborations with Tampa Bay startups and manufacturers.</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building something interesting? I'd love to hear about it—even if you're not ready to hire or don't have budget yet.
              </p>
              <p className="text-amber-400 font-semibold mt-4">— Martin</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-600 text-sm">
            © 2025 Martin Veldsman
          </div>
        </div>
      </footer>
    </div>
  );
}
