"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, UserCircle, Briefcase, IndianRupee, CheckCircle } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  
  // Default values matching Rahul Patil persona for the demo
  const [formData, setFormData] = useState({
    name: "Rahul Patil",
    age: "28",
    state: "Goa",
    district: "North Goa",
    category: "SC",
    annualIncome: "320000",
    education: "12th Pass",
    businessType: "Food Processing",
    businessStatus: "New Business",
    projectCost: "450000",
    ownContribution: "50000",
    fundingPurpose: {
      machinery: true,
      rawMaterials: true,
      businessSetup: true,
    },
    description: "I want to start a small food-processing unit producing packaged local food products."
  });

  const handleCheckboxChange = (field: keyof typeof formData.fundingPurpose) => {
    setFormData(prev => ({
      ...prev,
      fundingPurpose: {
        ...prev.fundingPurpose,
        [field]: !prev.fundingPurpose[field]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd save this to state/context/DB here
    router.push("/analyzing");
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-10">
        <p className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Registration & Discovery • Step 01 of 03</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brown mb-4 tracking-tight">Tell Us About Yourself</h1>
        <p className="text-lg text-brown/70 max-w-2xl">
          The more we know about your business, the more relevant your recommendations can be. Every field calibrates subsidized interest limits and non-collateral capital.
        </p>
      </div>

      {/* Modern Stepper Hierarchy */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-honey/20 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-honey/10 transition-all border border-primary/20">
            <div className="w-12 h-12 rounded-full bg-primary text-brown flex items-center justify-center shrink-0 shadow-sm">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-primary font-bold uppercase tracking-wider">Step 01</span>
                <span className="text-[10px] bg-primary/20 text-brown px-2 py-0.5 rounded-full font-bold">In Progress</span>
              </div>
              <p className="font-bold text-brown text-lg truncate">Profile Details</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 rounded-2xl opacity-60">
            <div className="w-12 h-12 rounded-full bg-honey/20 text-brown/50 flex items-center justify-center shrink-0 font-bold text-xl">
              02
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-brown/50 font-bold uppercase tracking-wider">Step 02</span>
              </div>
              <p className="font-bold text-brown text-lg truncate">AI Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 rounded-2xl opacity-60">
            <div className="w-12 h-12 rounded-full bg-honey/20 text-brown/50 flex items-center justify-center shrink-0 font-bold text-xl">
              03
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-brown/50 font-bold uppercase tracking-wider">Step 03</span>
              </div>
              <p className="font-bold text-brown text-lg truncate">Action Plan</p>
            </div>
          </div>
          
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Personal Info */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-honey/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-honey/30 flex items-center justify-center text-brown">
              <UserCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-brown">Personal Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Age</label>
              <input 
                type="number" 
                value={formData.age}
                onChange={e => setFormData({...formData, age: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">State</label>
              <input 
                type="text" 
                value={formData.state}
                onChange={e => setFormData({...formData, state: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">District</label>
              <input 
                type="text" 
                value={formData.district}
                onChange={e => setFormData({...formData, district: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Social & Economic Info */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-honey/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-honey/30 flex items-center justify-center text-brown">
              <IndianRupee className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-brown">Social & Economic Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Social Category</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
              >
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Annual Family Income</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-brown/50">₹</span>
                <input 
                  type="text" 
                  value={formData.annualIncome}
                  onChange={e => setFormData({...formData, annualIncome: e.target.value})}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Education</label>
              <select 
                value={formData.education}
                onChange={e => setFormData({...formData, education: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
              >
                <option value="8th Pass">8th Pass</option>
                <option value="10th Pass">10th Pass</option>
                <option value="12th Pass">12th Pass</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Business Information */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-honey/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-honey/30 flex items-center justify-center text-brown">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-brown">Business Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Business Type</label>
              <select 
                value={formData.businessType}
                onChange={e => setFormData({...formData, businessType: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Services">Services</option>
                <option value="Retail">Retail</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Business Status</label>
              <select 
                value={formData.businessStatus}
                onChange={e => setFormData({...formData, businessStatus: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
              >
                <option value="New Business">New Business</option>
                <option value="Existing Business">Existing Business</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Estimated Project Cost</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-brown/50">₹</span>
                <input 
                  type="text" 
                  value={formData.projectCost}
                  onChange={e => setFormData({...formData, projectCost: e.target.value})}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brown">Own Contribution</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-brown/50">₹</span>
                <input 
                  type="text" 
                  value={formData.ownContribution}
                  onChange={e => setFormData({...formData, ownContribution: e.target.value})}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <label className="block text-sm font-medium text-brown">Funding Purpose</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-3 p-4 rounded-xl border border-honey/40 cursor-pointer hover:bg-honey/5 transition-colors">
                <input 
                  type="checkbox" 
                  checked={formData.fundingPurpose.machinery}
                  onChange={() => handleCheckboxChange('machinery')}
                  className="w-5 h-5 rounded border-honey/50 text-primary focus:ring-primary accent-primary" 
                />
                <span className="text-brown">Machinery</span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-xl border border-honey/40 cursor-pointer hover:bg-honey/5 transition-colors">
                <input 
                  type="checkbox" 
                  checked={formData.fundingPurpose.rawMaterials}
                  onChange={() => handleCheckboxChange('rawMaterials')}
                  className="w-5 h-5 rounded border-honey/50 text-primary focus:ring-primary accent-primary" 
                />
                <span className="text-brown">Raw Materials</span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-xl border border-honey/40 cursor-pointer hover:bg-honey/5 transition-colors">
                <input 
                  type="checkbox" 
                  checked={formData.fundingPurpose.businessSetup}
                  onChange={() => handleCheckboxChange('businessSetup')}
                  className="w-5 h-5 rounded border-honey/50 text-primary focus:ring-primary accent-primary" 
                />
                <span className="text-brown">Business Setup</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-brown">Describe your business (Optional)</label>
            <textarea 
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" 
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-brown font-bold text-lg hover:bg-primary-hover hover:text-white transition-all shadow-md hover:shadow-lg"
          >
            Analyze My Eligibility
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
