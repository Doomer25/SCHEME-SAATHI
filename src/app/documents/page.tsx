"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, FileCheck2, MessageSquare } from "lucide-react";
import clsx from "clsx";

const initialDocuments = [
  { id: "aadhaar", title: "Aadhaar / KYC", prepared: true },
  { id: "caste", title: "Caste Certificate", prepared: true },
  { id: "income", title: "Income Certificate / income proof", prepared: false },
  { id: "bank", title: "Bank details", prepared: true },
  { id: "business", title: "Business / project details", prepared: false },
  { id: "proposal", title: "Project proposal / business plan", prepared: false },
];

export default function DocumentsPage() {
  const [documents, setDocuments] = useState(initialDocuments);

  const preparedCount = documents.filter(d => d.prepared).length;
  const totalCount = documents.length;
  const progressPercent = (preparedCount / totalCount) * 100;

  const toggleDocument = (id: string) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, prepared: !doc.prepared } : doc
    ));
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-10 text-center lg:text-left">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-honey/30 text-brown mb-6">
          <FileCheck2 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-brown mb-4">Your Application Checklist</h1>
        <p className="text-lg text-brown/70 max-w-2xl">
          Prepare the information and documents that may be required. Final requirements must be verified with the applicable authority.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-honey/20 mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-brown text-lg">Progress</span>
          <span className="font-bold text-brown bg-honey/20 px-3 py-1 rounded-lg">
            {preparedCount} of {totalCount} documents prepared
          </span>
        </div>
        
        <div className="h-3 bg-beige/30 rounded-full overflow-hidden mb-8">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="space-y-4">
          {documents.map(doc => (
            <button
              key={doc.id}
              onClick={() => toggleDocument(doc.id)}
              className={clsx(
                "w-full flex items-center justify-between p-5 rounded-2xl border transition-all text-left",
                doc.prepared 
                  ? "bg-primary/5 border-primary shadow-sm" 
                  : "bg-white border-honey/40 hover:border-honey hover:bg-honey/5"
              )}
            >
              <div className="flex items-center gap-4">
                {doc.prepared ? (
                  <CheckCircle2 className="w-7 h-7 text-green-600 shrink-0" />
                ) : (
                  <Circle className="w-7 h-7 text-beige shrink-0" />
                )}
                <span className={clsx(
                  "font-bold text-lg",
                  doc.prepared ? "text-brown" : "text-brown/80"
                )}>
                  {doc.title}
                </span>
              </div>
              <span className={clsx(
                "text-sm font-bold px-3 py-1 rounded-full",
                doc.prepared ? "bg-green-100 text-green-800" : "bg-beige/20 text-brown/60"
              )}>
                {doc.prepared ? "Prepared" : "Pending"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-brown to-brown/90 rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Need help with documents?</h3>
          <p className="text-honey/80">Our AI assistant can guide you on how to prepare these.</p>
        </div>
        <Link 
          href="/assistant"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-brown font-bold hover:bg-primary-hover hover:text-white transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          Ask AI Assistant
        </Link>
      </div>
    </div>
  );
}
