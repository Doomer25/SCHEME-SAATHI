import Link from "next/link";
import { ArrowRight, ChevronLeft, Building, Users, Briefcase, GraduationCap, FileText, CheckCircle2, Calculator } from "lucide-react";

export default function NSFDCPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <Link 
        href="/recommendations"
        className="inline-flex items-center gap-1 text-sm font-bold text-brown/60 hover:text-brown mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Recommendations
      </Link>

      <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-honey/20 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-brown mb-2">NSFDC</h1>
            <p className="text-xl text-brown/80">National Scheduled Castes Finance and Development Corporation</p>
          </div>
          <div className="inline-flex items-center justify-center bg-primary/20 border border-primary px-4 py-2 rounded-2xl">
            <span className="text-xl font-black text-brown">92%</span>
            <span className="text-sm font-bold text-brown/80 ml-2">Prototype Match</span>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-brown mb-4 border-b border-honey/20 pb-2">Overview</h2>
            <p className="text-brown/80 leading-relaxed">
              NSFDC supports economic development and income-generating activities for eligible Scheduled Caste beneficiaries through financial and related assistance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brown mb-4 border-b border-honey/20 pb-2">Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-background border border-honey/30 rounded-2xl p-5 hover:border-honey transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-brown" />
                </div>
                <h3 className="font-bold text-brown mb-2">Financial Assistance</h3>
                <p className="text-sm text-brown/70">Scheme-specific financial assistance subject to applicable limits.</p>
              </div>
              
              <div className="bg-background border border-honey/30 rounded-2xl p-5 hover:border-honey transition-colors">
                <div className="w-10 h-10 rounded-xl bg-honey/40 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-brown" />
                </div>
                <h3 className="font-bold text-brown mb-2">Income-Generating Activities</h3>
                <p className="text-sm text-brown/70">Support for establishing sustainable businesses and livelihoods.</p>
              </div>
              
              <div className="bg-background border border-honey/30 rounded-2xl p-5 hover:border-honey transition-colors">
                <div className="w-10 h-10 rounded-xl bg-beige/40 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-brown" />
                </div>
                <h3 className="font-bold text-brown mb-2">Entrepreneurship Support</h3>
                <p className="text-sm text-brown/70">Guidance and resources for new and emerging entrepreneurs.</p>
              </div>
              
              <div className="bg-background border border-honey/30 rounded-2xl p-5 hover:border-honey transition-colors">
                <div className="w-10 h-10 rounded-xl bg-olive/20 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-brown" />
                </div>
                <h3 className="font-bold text-brown mb-2">Skill / Development Support</h3>
                <p className="text-sm text-brown/70">Training initiatives to improve employability and business skills.</p>
              </div>
              
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brown mb-4 border-b border-honey/20 pb-2">Eligibility Snapshot</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                "SC beneficiary",
                "Annual family income",
                "Business/activity purpose",
                "Applicable project/loan conditions",
                "Documentation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-brown/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-honey/10 border-l-4 border-olive p-4 rounded-r-xl">
            <p className="text-sm text-brown/80 font-medium">
              Eligibility and sanction subject to verification. Official information should always be checked before application.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <Link 
          href="/calculator"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-honey/50 text-brown font-bold text-lg hover:bg-honey/10 transition-colors shadow-sm hover:shadow-md"
        >
          <Calculator className="w-5 h-5" />
          Calculate Repayment
        </Link>
        <Link 
          href="/documents"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-brown font-bold text-lg hover:bg-primary-hover hover:text-white transition-all shadow-md hover:shadow-lg"
        >
          <FileText className="w-5 h-5" />
          Continue to Documents
          <ArrowRight className="w-5 h-5 ml-1" />
        </Link>
      </div>
    </div>
  );
}
