"use client";

import { CheckCircle2, Clock, CircleDashed, Info } from "lucide-react";
import clsx from "clsx";

const roadmapSteps = [
  { id: 1, title: "Complete Profile", status: "Completed", description: "Provide personal and business details." },
  { id: 2, title: "AI Scheme Matching", status: "Completed", description: "Platform identifies relevant schemes." },
  { id: 3, title: "Check Eligibility", status: "In Review", description: "Verify official guidelines and criteria." },
  { id: 4, title: "Prepare Documents", status: "3/6 Prepared", description: "Gather required documents for submission." },
  { id: 5, title: "Submit Application", status: "Upcoming", description: "Apply through the official portal." },
  { id: 6, title: "Agency Verification", status: "Upcoming", description: "Review by authorized agency." },
  { id: 7, title: "Assistance Processing", status: "Upcoming", description: "Final approval and assistance dispersal." },
];

export default function RoadmapPage() {
  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-brown mb-4">Your Application Roadmap</h1>
        <p className="text-lg text-brown/70">
          A step-by-step guide to securing your scheme benefits.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-honey/20 mb-8 relative">
        <div className="absolute left-8 lg:left-12 top-10 bottom-10 w-0.5 bg-honey/30 z-0"></div>
        
        <div className="space-y-10 relative z-10">
          {roadmapSteps.map((step, index) => {
            const isCompleted = step.status === "Completed";
            const isInProgress = step.status === "In Review" || step.status === "3/6 Prepared";
            const isUpcoming = step.status === "Upcoming";
            
            return (
              <div key={step.id} className="flex items-start gap-6">
                <div className="relative mt-1 shrink-0">
                  <div className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center bg-white border-4 z-10 relative",
                    isCompleted ? "border-green-500" : isInProgress ? "border-primary" : "border-beige"
                  )}>
                    {isCompleted ? (
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    ) : isInProgress ? (
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    ) : (
                      <div className="w-3 h-3 bg-beige rounded-full" />
                    )}
                  </div>
                </div>
                
                <div className={clsx(
                  "flex-1 bg-background border rounded-2xl p-5 transition-colors",
                  isCompleted ? "border-green-200/50 hover:border-green-300" : 
                  isInProgress ? "border-primary/40 shadow-sm bg-primary/5" : 
                  "border-honey/20 opacity-70"
                )}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-brown text-lg flex items-center gap-2">
                      <span className="text-brown/40 text-sm font-black mr-1">
                        {String(step.id).padStart(2, '0')}
                      </span>
                      {step.title}
                    </h3>
                    <span className={clsx(
                      "text-xs font-bold px-3 py-1 rounded-full w-fit",
                      isCompleted ? "bg-green-100 text-green-800" : 
                      isInProgress ? "bg-primary text-brown" : 
                      "bg-beige/30 text-brown/60"
                    )}>
                      {step.status}
                    </span>
                  </div>
                  <p className="text-brown/70 text-sm mb-3">{step.description}</p>
                  
                  {step.id === 5 && (
                    <a 
                      href="/locator"
                      className="inline-flex items-center gap-2 px-4 py-2 mt-1 rounded-xl bg-primary text-brown font-bold text-sm hover:bg-primary-hover hover:text-white transition-colors"
                    >
                      Find Channel Partner
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-start gap-3 bg-olive/10 p-5 rounded-2xl border border-olive/20">
        <Info className="w-6 h-6 text-olive shrink-0 mt-0.5" />
        <p className="text-sm text-brown/80 font-medium leading-relaxed">
          SchemeSaathi helps you prepare and discover relevant schemes. Actual applications and approvals are handled by the applicable government authority / authorized agency.
        </p>
      </div>
    </div>
  );
}
