"use client";

import { useState, useEffect } from "react";
import { Calculator, IndianRupee, Clock, Info, ShieldCheck } from "lucide-react";

export default function CalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(6.0); // e.g., 6% for NSFDC
  const [moratoriumMonths, setMoratoriumMonths] = useState(6);
  const [repaymentYears, setRepaymentYears] = useState(5);

  const [results, setResults] = useState({
    emi: 0,
    totalInterest: 0,
    totalRepayment: 0,
    principal: 0
  });

  useEffect(() => {
    // Standard EMI Calculation
    // P = Principal
    // r = Monthly Interest Rate
    // n = Total number of months for repayment
    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const r = annualRate / 12 / 100;
    const n = Number(repaymentYears) * 12;

    if (P > 0 && annualRate > 0 && n > 0) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalRepayment = emi * n;
      const totalInterest = totalRepayment - P;

      setResults({
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalRepayment: Math.round(totalRepayment),
        principal: P
      });
    } else {
      setResults({ emi: 0, totalInterest: 0, totalRepayment: 0, principal: P });
    }
  }, [loanAmount, interestRate, repaymentYears]);

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-brown mb-4 flex justify-center lg:justify-start items-center gap-3">
          <Calculator className="w-8 h-8 text-primary" />
          Financial Assistance Calculator
        </h1>
        <p className="text-lg text-brown/70 max-w-2xl mx-auto lg:mx-0">
          Estimate your monthly repayments based on scheme-specific loan limits, interest rates, and moratorium periods.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Section */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-honey/20">
          <h2 className="text-xl font-bold text-brown mb-6">Scheme Variables</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex justify-between text-sm font-bold text-brown">
                <span>Loan Amount (₹)</span>
                <span className="text-primary">{loanAmount.toLocaleString("en-IN")}</span>
              </label>
              <input 
                type="range" 
                min="50000" 
                max="1000000" 
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-primary" 
              />
              <div className="flex justify-between text-xs text-brown/50 font-medium">
                <span>50K</span>
                <span>10L</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex justify-between text-sm font-bold text-brown">
                <span>Interest Rate (p.a.)</span>
                <span className="text-primary">{interestRate}%</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-primary" 
              />
              <div className="flex justify-between text-xs text-brown/50 font-medium">
                <span>1% (Concessional)</span>
                <span>15%</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex justify-between text-sm font-bold text-brown">
                <span>Repayment Period</span>
                <span className="text-primary">{repaymentYears} Years</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={repaymentYears}
                onChange={(e) => setRepaymentYears(Number(e.target.value))}
                className="w-full accent-primary" 
              />
              <div className="flex justify-between text-xs text-brown/50 font-medium">
                <span>1 Yr</span>
                <span>10 Yrs</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex justify-between text-sm font-bold text-brown">
                <span>Moratorium Period (Months)</span>
                <span className="text-primary">{moratoriumMonths} Months</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="12" 
                step="1"
                value={moratoriumMonths}
                onChange={(e) => setMoratoriumMonths(Number(e.target.value))}
                className="w-full accent-primary" 
              />
              <p className="text-xs text-brown/60 leading-relaxed mt-1">
                A moratorium period defers your first EMI payment, giving your business time to generate revenue before repayment begins.
              </p>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-brown rounded-3xl p-6 lg:p-10 shadow-lg text-white flex flex-col justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full pointer-events-none"></div>
            
            <h2 className="text-honey/80 font-bold mb-2 uppercase tracking-wide text-sm relative z-10">Estimated Monthly EMI</h2>
            <div className="flex items-end gap-2 relative z-10 mb-8">
              <span className="text-5xl lg:text-7xl font-black text-honey">
                ₹{results.emi.toLocaleString("en-IN")}
              </span>
              <span className="text-honey/60 font-medium mb-2">/ month</span>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-white/60 text-xs font-bold uppercase mb-1">Principal Amount</p>
                <p className="text-xl font-bold text-white">₹{results.principal.toLocaleString("en-IN")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-white/60 text-xs font-bold uppercase mb-1">Estimated Interest</p>
                <p className="text-xl font-bold text-white">₹{results.totalInterest.toLocaleString("en-IN")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-white/60 text-xs font-bold uppercase mb-1">Total Repayment</p>
                <p className="text-xl font-bold text-white">₹{results.totalRepayment.toLocaleString("en-IN")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-white/60 text-xs font-bold uppercase mb-1">Moratorium</p>
                <p className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {moratoriumMonths} Months
                </p>
              </div>
            </div>
          </div>

          <div className="bg-honey/10 border-2 border-dashed border-honey/40 p-6 rounded-3xl flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-brown mb-1">Prototype Disclosure</h3>
              <p className="text-sm text-brown/70 leading-relaxed">
                The values calculated here are illustrative and designed for the SIH prototype demonstration. Real scheme limits, exact concessional interest rates, and moratorium interest capitalization rules vary dynamically based on the final channelizing agency.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
