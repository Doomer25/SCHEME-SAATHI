"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
  Lightbulb, 
  CheckCircle, 
  IndianRupee, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Zap, 
  ChevronRight,
  BadgeCheck,
  Search,
  BarChart3,
  Rocket,
  Scale,
  ClipboardCheck,
  Brain,
  Languages,
  ExternalLink
} from "lucide-react";
import clsx from "clsx";

/* ───── Mock scheme data for the interactive filter widget ───── */
const schemes = [
  { id: 1, cat: "sc-st", ministry: "MoSJE / NSFDC", name: "Credit Enhancement Guarantee Scheme (CEGSSC)", desc: "Guarantees collateral-free credit extended by Member Lending Institutions up to ₹5 Crore.", fit: 96, fitLabel: "High Fit", highlight: true, benefit: "Max ₹5.00 Cr Support" },
  { id: 2, cat: "women", ministry: "Ministry of MSME", name: "Mahila Coir Yojana (Self-Employment)", desc: "Provides 75% subsidy on motorized spinning ratts alongside 2-month certified stipend training.", fit: 88, fitLabel: "Fit", highlight: false, benefit: "75% Equipment Subsidy" },
  { id: 3, cat: "skilling", ministry: "Central Social Justice", name: "PM-DAKSH Short Term Skilling", desc: "NSQF-aligned training with wage compensation and post-training job placement facilitation.", fit: 82, fitLabel: "Fit", highlight: false, benefit: "100% Free + ₹3,000/mo Stipend" },
  { id: 4, cat: "sc-st", ministry: "NSKFDC Corporation", name: "General Term Loan Scheme (GTL)", desc: "Term credit for any commercially viable income generating venture up to 90% project cost.", fit: 91, fitLabel: "High Fit", highlight: true, benefit: "Up to ₹15.00 Lakhs at 6%" },
];

const filterTabs = [
  { label: "All Programs", value: "all" },
  { label: "SC/ST Enterprise", value: "sc-st" },
  { label: "Women Entrepreneurs", value: "women" },
  { label: "Skill Development", value: "skilling" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? schemes : schemes.filter(s => s.cat === activeFilter);

  return (
    <div className="flex flex-col min-h-dvh bg-background">

      {/* ═══════ NAVIGATION ═══════ */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <ShieldCheck className="w-5 h-5 text-brown" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-brown tracking-tight flex items-center gap-1.5">
              SchemeSaathi
              <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
            </span>
            <span className="text-[11px] font-bold text-brown/50 tracking-widest uppercase">Civic Empowerment AI</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold text-brown/60 hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
          <Link className="text-sm font-semibold text-brown/60 hover:text-primary transition-colors" href="/scheme/compare">Government Schemes</Link>
        </nav>
        <Link
          href="/profile"
          className="px-5 py-2.5 rounded-lg bg-primary text-brown font-bold text-sm shadow-sm hover:shadow-md hover:bg-primary-hover hover:text-white transition-all duration-200"
        >
          Get Started
        </Link>
      </header>

      {/* ═══════ HERO SECTION — 2-Column Layout ═══════ */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-24 lg:py-20 overflow-hidden">
        {/* Ambient glowing orbs */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-honey/25 blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/15 blur-[100px] pointer-events-none -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left Content Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey/15 border border-honey/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-bold tracking-widest text-brown/70 uppercase">AI-Powered Government Scheme Discovery</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brown tracking-tight leading-[1.1]">
              Find Government Schemes You&apos;re Eligible For{" "}
              <span className="text-primary italic">— In Minutes.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-brown/70 max-w-2xl leading-relaxed">
              Tell us about yourself and your business. SchemeSaathi helps identify government schemes that may match your needs and explains what to do next with transparent criteria and zero bureaucracy.
            </p>

            {/* CTA Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/profile"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-brown font-bold text-lg shadow-md hover:shadow-xl hover:bg-primary-hover hover:text-white transition-all duration-200"
              >
                Find My Schemes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-beige/20 text-brown font-bold text-lg hover:bg-beige/40 transition-all duration-200 border border-beige/50"
              >
                How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-brown/60 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-primary" />
                Direct Ministry Guidelines
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Private & Anonymous Profile
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Instant Eligibility Scan
              </div>
            </div>
          </div>

          {/* ── Right Column: Floating Scheme Preview Card ── */}
          <div className="lg:col-span-5 relative">
            {/* Backdrop glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-honey/30 to-primary/10 rounded-3xl blur-xl opacity-75"></div>

            <div className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-honey/10">
              <div className="flex items-center justify-between pb-5 border-b border-honey/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-honey/20 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-brown" />
                  </div>
                  <div>
                    <h2 className="font-bold text-brown">Why it works</h2>
                    <p className="text-[11px] font-semibold text-brown/50">Core product capabilities</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-honey/10 text-brown text-[11px] font-bold border border-honey/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Live Sync
                </span>
              </div>

              <div className="flex flex-col gap-3.5 mt-5">
                <div className="p-4 rounded-xl bg-gradient-to-r from-honey/5 to-beige/10 shadow-sm border border-honey/15">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <BadgeCheck className="w-4 h-4 text-brown" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown text-[15px]">Intelligent Profiler</h3>
                      <p className="text-xs text-brown/60 mt-1 leading-relaxed">Matches demographics against cross-departmental eligibility matrices automatically.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-honey/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Languages className="w-4 h-4 text-brown" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown text-[15px]">Bilingual Conversational Clarity</h3>
                      <p className="text-xs text-brown/60 mt-1 leading-relaxed">Explains eligibility and document requirements in simple, plain-language answers.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-honey/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Search className="w-4 h-4 text-brown" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown text-[15px]">Smart Scheme Discovery</h3>
                      <p className="text-xs text-brown/60 mt-1 leading-relaxed">Surfaces relevant central and state government schemes based on your profile.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-honey/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-brown" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown text-[15px]">Application Readiness</h3>
                      <p className="text-xs text-brown/60 mt-1 leading-relaxed">Helps users understand required documents, eligibility gaps, and the next steps.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between text-brown/50 text-[11px] font-semibold">
                <span>Built for real-world clarity</span>
                <Link href="/scheme/compare" className="text-primary font-bold hover:underline flex items-center gap-1">
                  Explore Schemes
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ METRIC BANNER ═══════ */}
      <section className="w-full bg-honey/5 py-12 px-6 border-y border-honey/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl lg:text-5xl text-primary font-black leading-none mb-2">350+</span>
            <span className="font-bold text-brown">Central & State Schemes</span>
            <span className="text-xs text-brown/50 mt-1">Verified by MoSJE guidelines</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl lg:text-5xl text-primary font-black leading-none mb-2">&lt; 3 min</span>
            <span className="font-bold text-brown">Average Discovery Time</span>
            <span className="text-xs text-brown/50 mt-1">Fast, guided profiling</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl lg:text-5xl text-primary font-black leading-none mb-2">94%</span>
            <span className="font-bold text-brown">Precision Accuracy</span>
            <span className="text-xs text-brown/50 mt-1">Rule-based AI engine</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl lg:text-5xl text-primary font-black leading-none mb-2">12+</span>
            <span className="font-bold text-brown">Regional Languages</span>
            <span className="text-xs text-brown/50 mt-1">Accessible to every citizen</span>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS — 3 Steps ═══════ */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24" id="how-it-works">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-primary uppercase mb-2">Three Steps to Empowerment</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brown tracking-tight">
            How SchemeSaathi Works
          </h2>
          <p className="text-brown/70 mt-3">
            From initial discovery to preparing your bank dossier, we guide you every step of the journey without bureaucratic clutter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: "01", icon: BadgeCheck, title: "Build Your Profile", desc: "Input basic demographics, location, business category, and funding goals through a quick 2-minute conversation or structured form.", note: "No Aadhaar linking required for preliminary search" },
            { num: "02", icon: BarChart3, title: "Find Your Matches", desc: "Our recommendation engine screens hundreds of schemes across central ministries, evaluating percentage alignment and interest subsidies.", note: "Instant fit scores with transparent rationale" },
            { num: "03", icon: Rocket, title: "Take the Next Step", desc: "Receive a personalized application readiness pack: required affidavits, branch contact points, and direct links to authorized state portals.", note: "Step-by-step document readiness kit" },
          ].map((step) => (
            <div key={step.num} className="relative bg-white rounded-3xl p-8 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all border border-honey/10">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-6xl font-extrabold text-beige/60 group-hover:text-primary transition-colors">{step.num}</span>
                  <div className="w-12 h-12 rounded-2xl bg-honey/10 flex items-center justify-center text-primary">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">{step.title}</h3>
                <p className="text-brown/60 leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-honey/15">
                <div className="flex items-center gap-2 text-brown/60 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {step.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ FINAL CTA BANNER ═══════ */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl bg-brown overflow-hidden p-10 sm:p-16 flex flex-col items-center text-center shadow-lg">
          {/* Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>

          <span className="text-[11px] font-bold tracking-widest text-primary uppercase mb-3 relative z-10">Begin Your Evaluation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl leading-tight relative z-10">
            Ready to discover your opportunities?
          </h2>
          <p className="text-lg text-honey/80 max-w-xl mt-4 relative z-10">
            Join thousands of micro-entrepreneurs and artisans who found their rightful financial schemes with SchemeSaathi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Link
              href="/profile"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-brown font-bold text-lg shadow-md hover:shadow-xl hover:bg-primary-hover hover:text-white transition-all"
            >
              Find My Schemes
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all border border-white/10"
            >
              Schedule Assisted Walkthrough
            </a>
          </div>
          {/* CSC pill */}
          <div className="mt-10 flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-honey/70 text-[11px] font-semibold relative z-10 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available via Common Service Centres (CSCs) across 400+ districts
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="w-full bg-white border-t border-honey/20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-brown" />
            </div>
            <span className="font-extrabold text-brown tracking-tight text-lg">SchemeSaathi</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-brown/60 text-xs font-semibold">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Reference</a>
            <a className="hover:text-primary transition-colors" href="#">Ministry Integration Directives</a>
            <a className="hover:text-primary transition-colors" href="#">Citizen Helpdesk</a>
          </div>
          <div className="max-w-3xl pt-4 border-t border-honey/15 text-brown/50 text-[11px] leading-relaxed">
            <p>
              <strong>Prototype Demonstration Notice:</strong> Match scores and recommendations shown here are illustrative and meant for concept testing. SchemeSaathi is an affirmative civic initiative designed to simplify scheme discovery for underrepresented entrepreneurs. Final sanction of any loan, grant, or subsidy is subject to official verification by respective State Channelizing Agencies (SCAs), partner banks, and governing ministry nodal desks.
            </p>
            <p className="mt-2 text-brown/30">
              © 2026 SchemeSaathi. Next-Generation Civic Access Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
