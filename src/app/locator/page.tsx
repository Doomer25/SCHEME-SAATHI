"use client";

import { useState } from "react";
import { MapPin, Search, Navigation2, Building2, Phone, CheckCircle2, ChevronRight, Navigation } from "lucide-react";
import clsx from "clsx";

const mockPartners = [
  {
    id: 1,
    name: "Goa State Scheduled Castes and OBC Finance and Development Corporation (GSSCOBCFDC)",
    type: "State Channelizing Agency (SCA)",
    address: "Patto Centre, Panaji, North Goa, 403001",
    distance: "12 km",
    contact: "+91 832 243 XXXX",
    recommended: true
  },
  {
    id: 2,
    name: "Bank of India - Panaji Branch",
    type: "Public Sector Bank (PSB) Channel",
    address: "Dr. A.B. Road, Panaji, North Goa, 403001",
    distance: "14 km",
    contact: "+91 832 222 XXXX",
    recommended: false
  },
  {
    id: 3,
    name: "Regional Rural Bank - Goa Rural",
    type: "Regional Rural Bank (RRB) Channel",
    address: "Mapusa Municipal Market, North Goa, 403507",
    distance: "22 km",
    contact: "+91 832 225 XXXX",
    recommended: false
  }
];

export default function LocatorPage() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(1);
  const [routed, setRouted] = useState(false);

  const handleRouteApplication = () => {
    setRouted(true);
    setTimeout(() => {
      setRouted(false);
      alert("Application successfully routed to the authorized Channel Partner in the prototype!");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-brown mb-4 flex items-center gap-3">
          <MapPin className="w-8 h-8 text-primary" />
          Channel Partner Locator
        </h1>
        <p className="text-lg text-brown/70 max-w-3xl">
          Identify the appropriate authorized channelizing agency to submit your application, preventing misrouted applications and delays.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Left Column: Search & Results */}
        <div className="lg:col-span-1 space-y-6 flex flex-col h-full">
          
          {/* Search Box */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-honey/20">
            <h2 className="font-bold text-brown mb-4">Location Criteria</h2>
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-brown/70 font-medium mb-1">State</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary">
                  <option>Goa</option>
                </select>
              </div>
              <div>
                <label className="block text-brown/70 font-medium mb-1">District</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary">
                  <option>North Goa</option>
                </select>
              </div>
              <div>
                <label className="block text-brown/70 font-medium mb-1">Target Scheme</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-honey/40 bg-background text-brown focus:outline-none focus:border-primary">
                  <option>NSFDC</option>
                  <option>PMEGP</option>
                  <option>PM-DAKSH</option>
                </select>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-honey/20 text-brown font-bold border border-honey/50 hover:bg-honey/30 transition-colors">
                <Search className="w-4 h-4" />
                Find Partners
              </button>
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1 bg-white rounded-3xl p-2 shadow-sm border border-honey/20 overflow-y-auto min-h-[300px]">
            <div className="p-3">
              <h2 className="font-bold text-brown mb-2">3 Authorized Partners Found</h2>
              <p className="text-xs text-brown/50 mb-4">Sorted by relevance and proximity</p>
            </div>
            
            <div className="space-y-2">
              {mockPartners.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner.id)}
                  className={clsx(
                    "w-full text-left p-4 rounded-2xl transition-all border",
                    selectedPartner === partner.id 
                      ? "bg-primary/5 border-primary shadow-sm" 
                      : "bg-white border-transparent hover:bg-honey/5 hover:border-honey/20"
                  )}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-brown text-sm pr-2">{partner.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-olive bg-olive/10 px-2 py-1 rounded-full shrink-0">
                      <Navigation2 className="w-3 h-3" />
                      {partner.distance}
                    </div>
                  </div>
                  <p className="text-xs text-brown/60 mb-2">{partner.type}</p>
                  {partner.recommended && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-black tracking-wider text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Primary Agency
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Map & Details */}
        <div className="lg:col-span-2 space-y-6 flex flex-col">
          
          {/* Mock Map Area */}
          <div className="bg-beige/20 rounded-3xl h-[350px] lg:h-[400px] border border-honey/30 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4F3D35 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Map styling elements to look like a map */}
            <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-white/40 rotate-45"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-2 bg-white/60 -rotate-12"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-3 bg-blue-400/20 rounded-full blur-md"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-brown w-fit shadow-sm border border-white">
                Interactive Map Prototype
              </div>
              
              {/* Map Pins */}
              <div className="relative flex-1">
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-primary text-brown font-bold text-xs px-3 py-1 rounded-full shadow-lg mb-1 relative whitespace-nowrap z-10">
                    GSSCOBCFDC
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                  </div>
                  <div className="w-4 h-4 bg-brown rounded-full border-2 border-white shadow-md z-0"></div>
                </div>

                <div className="absolute top-[30%] left-[70%] flex flex-col items-center opacity-60">
                  <div className="w-3 h-3 bg-olive rounded-full border border-white shadow-sm"></div>
                </div>

                <div className="absolute top-[60%] left-[20%] flex flex-col items-center opacity-60">
                  <div className="w-3 h-3 bg-olive rounded-full border border-white shadow-sm"></div>
                </div>

                {/* User Location Pin */}
                <div className="absolute bottom-[20%] left-[45%] flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-50"></div>
                  </div>
                  <span className="text-[10px] font-bold text-brown/70 mt-1 bg-white/50 px-1 rounded">You</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Partner Details */}
          {selectedPartner && (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-honey/20">
              {mockPartners.filter(p => p.id === selectedPartner).map(partner => (
                <div key={partner.id}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-brown mb-1">{partner.name}</h2>
                      <p className="text-sm font-medium text-primary">{partner.type}</p>
                    </div>
                    {partner.recommended && (
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 shrink-0">
                        Primary Routing Agency
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-honey/20 p-2 rounded-lg shrink-0">
                        <Building2 className="w-4 h-4 text-brown" />
                      </div>
                      <div>
                        <p className="text-xs text-brown/60 font-bold uppercase mb-0.5">Address</p>
                        <p className="text-sm text-brown/80 leading-relaxed">{partner.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-honey/20 p-2 rounded-lg shrink-0">
                        <Phone className="w-4 h-4 text-brown" />
                      </div>
                      <div>
                        <p className="text-xs text-brown/60 font-bold uppercase mb-0.5">Contact</p>
                        <p className="text-sm text-brown/80">{partner.contact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 border-t border-honey/20 pt-6">
                    <button 
                      onClick={handleRouteApplication}
                      disabled={routed}
                      className={clsx(
                        "flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all shadow-md",
                        routed 
                          ? "bg-green-500 text-white" 
                          : "bg-primary text-brown hover:bg-primary-hover hover:text-white"
                      )}
                    >
                      {routed ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          Application Routed
                        </>
                      ) : (
                        <>
                          <Navigation className="w-5 h-5" />
                          Route Application Here
                        </>
                      )}
                    </button>
                    <button className="sm:w-auto w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-honey/50 text-brown font-bold text-lg hover:bg-honey/10 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
