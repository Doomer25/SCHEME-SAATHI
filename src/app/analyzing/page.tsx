"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, CircleDashed, Loader2 } from "lucide-react";
import clsx from "clsx";

const steps = [
  "Understanding entrepreneur profile",
  "Identifying relevant schemes",
  "Checking eligibility criteria",
  "Comparing financial assistance",
  "Preparing personalized recommendations",
];

export default function AnalyzingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Sequence through the steps
    const timer1 = setTimeout(() => setCurrentStep(1), 800);
    const timer2 = setTimeout(() => setCurrentStep(2), 1600);
    const timer3 = setTimeout(() => setCurrentStep(3), 2400);
    const timer4 = setTimeout(() => setCurrentStep(4), 3200);
    
    // Navigate to recommendations after complete
    const finishTimer = setTimeout(() => {
      router.push("/recommendations");
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(finishTimer);
    };
  }, [router]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative w-24 h-24 mb-8">
            <Loader2 className="w-full h-full text-primary animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-brown">AI</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold text-brown mb-2">Analyzing Your Profile</h1>
          <p className="text-brown/70">We're finding schemes that may match your needs.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-honey/30 space-y-6">
          {steps.map((step, index) => {
            const isCompleted = currentStep > index;
            const isCurrent = currentStep === index;
            const isPending = currentStep < index;
            
            return (
              <div 
                key={index} 
                className={clsx(
                  "flex items-center gap-4 transition-all duration-500",
                  isPending ? "opacity-40" : "opacity-100"
                )}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-6 h-6 text-olive animate-spin shrink-0" />
                ) : (
                  <CircleDashed className="w-6 h-6 text-beige shrink-0" />
                )}
                <span className={clsx(
                  "text-sm font-medium",
                  isCompleted ? "text-brown" : isCurrent ? "text-olive" : "text-brown/50"
                )}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 h-2 bg-beige/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${Math.max(10, (currentStep / (steps.length - 1)) * 100)}%` }}
          />
        </div>
        <p className="text-center text-xs text-brown/50 mt-4">
          Prototype Mode: Simulating AI Matching...
        </p>

      </div>
    </div>
  );
}
