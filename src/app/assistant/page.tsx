"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Sparkles, MessageSquare } from "lucide-react";
import clsx from "clsx";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const exampleQuestions = [
  "What schemes may support my food-processing business?",
  "What documents should I prepare?",
  "Why was I matched with NSFDC?",
  "What should I do next?"
];

const mockResponses: Record<string, string> = {
  "What schemes may support my food-processing business?": "For a food-processing business, particularly as a new entrepreneur, schemes like NSFDC and PMEGP may be relevant. NSFDC provides support for income-generating activities for SC entrepreneurs, while PMEGP specifically targets new micro-enterprise creation across various sectors.",
  "What documents should I prepare?": "Based on standard requirements, you should begin preparing your Aadhaar/KYC documents, Caste Certificate, Income Certificate, Bank details, and a detailed Project Proposal or Business Plan for your food-processing unit.",
  "Why was I matched with NSFDC?": "Based on the profile entered in this prototype, your SC category, family income information and proposed income-generating business make NSFDC potentially relevant. Final eligibility should be verified against the latest official scheme criteria and the applicable authority.",
  "What should I do next?": "Your next step is to review the required documents in the 'Documents' checklist and start gathering them. Once your documents are ready, you can proceed to submit your application through the official scheme portal."
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello Rahul! I'm your SchemeSaathi AI Assistant. How can I help you with your scheme applications today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responseText = mockResponses[text] || "This is a prototype demonstration. In a full version, I would connect to a knowledge base to answer this question. For now, try asking one of the suggested questions!";
      
      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: "assistant", content: responseText };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100dvh-140px)] flex flex-col pb-4">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-brown mb-2 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          SchemeSaathi AI Assistant
        </h1>
        <p className="text-brown/70">
          Ask questions about schemes, eligibility and application preparation.
        </p>
      </div>

      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-honey/30 flex flex-col overflow-hidden relative">
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 bg-gradient-to-b from-white to-background/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={clsx(
                "flex gap-4 max-w-[85%]",
                msg.role === "user" ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                msg.role === "user" ? "bg-primary text-brown" : "bg-honey text-brown"
              )}>
                {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              
              <div className={clsx(
                "p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm",
                msg.role === "user" 
                  ? "bg-primary text-brown rounded-tr-sm" 
                  : "bg-honey/20 text-brown border border-honey/30 rounded-tl-sm"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-10 h-10 rounded-full bg-honey text-brown flex items-center justify-center shrink-0 shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-honey/20 border border-honey/30 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-brown/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-brown/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-brown/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 lg:p-6 bg-white border-t border-honey/20">
          
          {/* Example Questions */}
          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {exampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-4 py-2 bg-background border border-honey/40 hover:bg-honey/10 text-brown text-sm rounded-full transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="relative flex items-center">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
              placeholder="Ask about a government scheme..."
              className="w-full pl-6 pr-16 py-4 rounded-2xl border-2 border-honey/40 bg-background text-brown focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
            />
            <button 
              onClick={() => handleSend(inputValue)}
              disabled={!inputValue.trim()}
              className="absolute right-2 p-3 bg-primary text-brown rounded-xl hover:bg-primary-hover hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-primary disabled:hover:text-brown"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-xs text-brown/40 mt-3">
            Prototype mode: AI connects to predefined mock responses.
          </p>
        </div>
      </div>
    </div>
  );
}
