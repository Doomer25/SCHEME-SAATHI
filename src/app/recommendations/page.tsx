"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Info, CheckCircle2, AlertTriangle, AlertCircle, Sparkles, Plus, X } from "lucide-react";
import clsx from "clsx";

export default function RecommendationsPage() {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-honey/20 text-olive text-sm font-semibold mb-4 border border-honey/50">
            <Sparkles className="w-4 h-4" />
            <span>4 potentially relevant schemes found</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-brown mb-2">Your Personalized Scheme Recommendations</h1>
          <p className="text-lg text-brown/70">Based on the profile you provided</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Left Column - Primary Match */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-md border-2 border-primary/40 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-brown">NSFDC</h2>
                  <p className="text-brown/70 font-medium">National Scheduled Castes Finance and Development Corporation</p>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="inline-flex items-center justify-center bg-primary px-4 py-2 rounded-2xl shadow-sm">
                    <span className="text-2xl font-black text-brown">92%</span>
                    <span className="text-sm font-bold text-brown/80 ml-1">Match</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                    Strong Match
                  </span>
                </div>
              </div>

              <p className="text-brown/80 mb-6 leading-relaxed">
                Financial assistance and related support for eligible Scheduled Caste beneficiaries undertaking income-generating activities.
              </p>

              <div className="bg-honey/10 border border-honey/30 rounded-2xl p-5 mb-8">
                <h3 className="font-bold text-brown mb-4 text-sm uppercase tracking-wide">Why you matched</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm font-medium">SC category</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm font-medium">Family income within the represented criterion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm font-medium">Income-generating business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm font-medium">New entrepreneurial activity</span>
                  </li>
                  <li className="flex items-start gap-3 mt-4 pt-3 border-t border-honey/30">
                    <AlertTriangle className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm font-medium italic">Final eligibility requires verification</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  href="/scheme/nsfdc"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brown text-white font-bold hover:bg-brown/90 transition-colors"
                >
                  View Scheme
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button 
                  onClick={() => setShowExplanation(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-brown font-bold border-2 border-honey/50 hover:bg-honey/10 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Why This Match?
                </button>
              </div>
              <p className="text-xs text-brown/40 mt-4 text-center sm:text-left">Prototype recommendation</p>
            </div>
          </div>
        </div>

        {/* Right Column - Secondary Matches */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-brown">Other Recommendations</h3>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-honey/20 hover:border-honey transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-brown">PMEGP</h4>
              <div className="bg-beige/40 px-3 py-1 rounded-lg text-brown font-bold text-sm">
                78% Match
              </div>
            </div>
            <p className="text-sm text-brown/70 mb-4 line-clamp-2">
              Potentially relevant for new micro-enterprise creation, subject to detailed eligibility requirements.
            </p>
            <Link 
              href="#"
              className="text-primary hover:text-primary-hover font-bold text-sm flex items-center gap-1"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-honey/20 hover:border-honey transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-brown">PM-DAKSH</h4>
              <div className="bg-beige/40 px-3 py-1 rounded-lg text-brown font-bold text-sm">
                64% Match
              </div>
            </div>
            <p className="text-sm text-brown/70 mb-4 line-clamp-2">
              Potentially relevant for skill development and entrepreneurship training.
            </p>
            <Link 
              href="#"
              className="text-primary hover:text-primary-hover font-bold text-sm flex items-center gap-1"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-honey/10 border-2 border-dashed border-honey/50 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-honey/20 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-honey/30 flex items-center justify-center mb-3">
              <Plus className="w-5 h-5 text-brown" />
            </div>
            <h4 className="text-base font-bold text-brown mb-1">Explore More Schemes</h4>
            <div className="bg-beige/30 px-2 py-0.5 rounded text-xs font-semibold text-brown/60 mb-2 uppercase">Coming Soon</div>
            <p className="text-xs text-brown/60">
              Future versions can connect to a larger government scheme knowledge base.
            </p>
          </div>
        </div>
      </div>

      {/* Explanation Modal */}
      {showExplanation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-brown mb-2">Why did you get this recommendation?</h2>
                  <p className="text-brown/70">Here's how your profile compares with the scheme criteria represented in our prototype.</p>
                </div>
                <button 
                  onClick={() => setShowExplanation(false)}
                  className="p-2 bg-beige/20 text-brown rounded-full hover:bg-beige/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-honey/30 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-honey/10 border-b border-honey/30 text-sm font-bold text-brown">
                      <th className="p-4">Requirement</th>
                      <th className="p-4">Your Information</th>
                      <th className="p-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-honey/10">
                      <td className="p-4 font-medium text-brown">SC beneficiary</td>
                      <td className="p-4 text-brown/80">SC</td>
                      <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 inline-block" /></td>
                    </tr>
                    <tr className="border-b border-honey/10">
                      <td className="p-4 font-medium text-brown">Family income criterion</td>
                      <td className="p-4 text-brown/80">₹3.2 lakh</td>
                      <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 inline-block" /></td>
                    </tr>
                    <tr className="border-b border-honey/10">
                      <td className="p-4 font-medium text-brown">Income-generating activity</td>
                      <td className="p-4 text-brown/80">Food processing</td>
                      <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 inline-block" /></td>
                    </tr>
                    <tr className="border-b border-honey/10">
                      <td className="p-4 font-medium text-brown">New business</td>
                      <td className="p-4 text-brown/80">Yes</td>
                      <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 inline-block" /></td>
                    </tr>
                    <tr className="border-b border-honey/10 bg-olive/5">
                      <td className="p-4 font-medium text-brown">Project requirement</td>
                      <td className="p-4 text-brown/80">₹4.5 lakh</td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-1 text-olive text-xs font-bold">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Verify limit</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-olive/5">
                      <td className="p-4 font-medium text-brown">Documents</td>
                      <td className="p-4 text-brown/80">Not uploaded</td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-1 text-olive text-xs font-bold">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Pending</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-br from-honey/20 to-white border border-honey/40 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-bold text-brown">AI Explanation</h3>
                </div>
                <p className="text-sm text-brown/80 leading-relaxed">
                  Your profile matches several key criteria currently represented in the scheme database. Your SC category, income information and proposed income-generating activity make this scheme potentially relevant to your stated requirement. Final eligibility and financial assistance are subject to verification by the applicable authorized agency.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-honey/20 bg-beige/10 flex justify-end">
              <button 
                onClick={() => setShowExplanation(false)}
                className="px-6 py-2.5 rounded-xl bg-brown text-white font-bold hover:bg-brown/90 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
