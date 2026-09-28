"use client";

import { Check, X, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

const schemes = [
  {
    id: "nsfdc",
    name: "NSFDC",
    match: "92%",
    purpose: "Financial assistance",
    businessSupport: true,
    financialAssistance: true,
    training: true,
    relevance: "High match for SC entrepreneur needing financial assistance.",
    highlight: true,
    link: "/scheme/nsfdc"
  },
  {
    id: "pmegp",
    name: "PMEGP",
    match: "78%",
    purpose: "Micro-enterprise creation",
    businessSupport: true,
    financialAssistance: true,
    training: false,
    relevance: "Relevant for new business setup.",
    highlight: false,
    link: "#"
  },
  {
    id: "pmdaksh",
    name: "PM-DAKSH",
    match: "64%",
    purpose: "Skill development",
    businessSupport: false,
    financialAssistance: false,
    training: true,
    relevance: "Useful for entrepreneurship training.",
    highlight: false,
    link: "#"
  }
];

export default function ComparePage() {
  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-brown mb-4">Compare Relevant Schemes</h1>
        <p className="text-lg text-brown/70 max-w-3xl leading-relaxed">
          Compare scheme benefits, eligibility criteria, and support options to understand how each scheme fits your needs.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-3xl shadow-sm border border-honey/20 overflow-hidden mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-honey/10">
              <th className="p-6 border-b border-honey/20 w-1/4">
                <span className="text-brown font-bold text-sm uppercase tracking-wider">Features</span>
              </th>
              {schemes.map((scheme) => (
                <th key={scheme.id} className={`p-6 border-b border-honey/20 w-1/4 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xl font-bold text-brown">{scheme.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-brown/80 text-sm">
            <tr>
              <td className="p-6 border-b border-honey/10 font-bold text-brown">Primary purpose</td>
              {schemes.map((scheme) => (
                <td key={scheme.id} className={`p-6 border-b border-honey/10 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  {scheme.purpose}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-honey/10 font-bold text-brown">Business support</td>
              {schemes.map((scheme) => (
                <td key={scheme.id} className={`p-6 border-b border-honey/10 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  {scheme.businessSupport ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-brown/30" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-honey/10 font-bold text-brown">Financial assistance</td>
              {schemes.map((scheme) => (
                <td key={scheme.id} className={`p-6 border-b border-honey/10 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  {scheme.financialAssistance ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-brown/30" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-honey/10 font-bold text-brown">Training / entrepreneurship support</td>
              {schemes.map((scheme) => (
                <td key={scheme.id} className={`p-6 border-b border-honey/10 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  {scheme.training ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-brown/30" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-honey/10 font-bold text-brown">Relevance to requirement</td>
              {schemes.map((scheme) => (
                <td key={scheme.id} className={`p-6 border-b border-honey/10 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  <p className="leading-relaxed">{scheme.relevance}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-honey/10 font-bold text-brown">Action</td>
              {schemes.map((scheme) => (
                <td key={scheme.id} className={`p-6 border-b border-honey/10 ${scheme.highlight ? 'bg-primary/5' : ''}`}>
                  <Link 
                    href={scheme.link}
                    className={`inline-flex items-center gap-1 font-bold text-sm ${scheme.highlight ? 'text-olive hover:text-brown' : 'text-primary hover:text-primary-hover'} transition-colors`}
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-6 mb-8">
        {schemes.map((scheme) => (
          <div 
            key={scheme.id} 
            className={`bg-white rounded-3xl p-6 shadow-sm border ${scheme.highlight ? 'border-primary shadow-md' : 'border-honey/30'}`}
          >
            <div className="mb-6 pb-4 border-b border-honey/20">
              <h2 className="text-2xl font-bold text-brown">{scheme.name}</h2>
            </div>
            
            <div className="space-y-4 text-sm mb-6">
              <div>
                <span className="block text-brown/60 font-bold mb-1 uppercase text-xs">Primary purpose</span>
                <span className="text-brown font-medium">{scheme.purpose}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-brown/60 font-bold uppercase text-xs">Business support</span>
                {scheme.businessSupport ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-brown/30" />}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-brown/60 font-bold uppercase text-xs">Financial assistance</span>
                {scheme.financialAssistance ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-brown/30" />}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-brown/60 font-bold uppercase text-xs">Training / support</span>
                {scheme.training ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-brown/30" />}
              </div>

              <div>
                <span className="block text-brown/60 font-bold mb-1 uppercase text-xs">Relevance</span>
                <span className="text-brown font-medium leading-relaxed block">{scheme.relevance}</span>
              </div>
            </div>

            <Link 
              href={scheme.link}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold ${scheme.highlight ? 'bg-brown text-white' : 'bg-honey/20 text-brown border border-honey/30'}`}
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 bg-beige/20 p-5 rounded-2xl border border-beige/40">
        <Info className="w-5 h-5 text-brown/60 shrink-0 mt-0.5" />
        <p className="text-sm text-brown/80 font-medium">
          These prototype scores are illustrative and are not official government scores.
        </p>
      </div>
    </div>
  );
}
