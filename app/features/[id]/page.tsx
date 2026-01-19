import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import {
   ArrowLeft,
   Clock,
   Tag,
   Share2,
   CheckCircle2,
   ChevronRight,
   Globe,
} from "lucide-react";

interface FeatureDetailPageProps {
   params: {
      id: string;
   };
}

const features = {
   "feature-1": {
      heading: "Meet Your 'Robo-Analyst'",
      subHeading: "Bridging the Gap Between Knowing and Doing",
      description: "The AI Advisory",
      image: "/feature-1.png",
      category: "AI Technology",
      readTime: "12 min read",
      author: "Money Lens AI Team",
      date: "Updated Today",
      content: `
      <div class="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div class="prose prose-lg prose-slate max-w-none">
          <p class="lead text-xl text-slate-600 mb-8 leading-relaxed">
            Knowing you should invest is different from knowing <em>what</em> to invest in. This is the 
            <strong class="text-[#156C97]">"Knowledge-Behavior Gap."</strong> Even financially literate users often suffer from analysis paralysis, hoarding cash in low-interest accounts simply because they lack the confidence to pull the trigger.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-red-50/50 p-8 rounded-3xl border border-red-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <h4 class="text-red-900 font-bold text-lg mb-4 flex items-center gap-2">
              <span class="text-2xl">🛑</span> The Problem
            </h4>
            <ul class="space-y-4 text-red-800/80">
              <li class="flex gap-3"><span class="font-bold">•</span> <strong>Decision Fatigue:</strong> Too many stocks, funds, and rates to choose from.</li>
              <li class="flex gap-3"><span class="font-bold">•</span> <strong>Emotional Bias:</strong> Buying high due to FOMO and selling low due to panic.</li>
              <li class="flex gap-3"><span class="font-bold">•</span> <strong>Generic Advice:</strong> "One-size-fits-all" tips that ignore your specific debts.</li>
            </ul>
          </div>
          <div class="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
             <h4 class="text-emerald-900 font-bold text-lg mb-4 flex items-center gap-2">
              <span class="text-2xl">✅</span> The Solution
            </h4>
            <ul class="space-y-4 text-emerald-800/80">
              <li class="flex gap-3"><span class="font-bold">•</span> <strong>Curated Options:</strong> The AI filters thousands of assets down to the top 3.</li>
              <li class="flex gap-3"><span class="font-bold">•</span> <strong>Rational Logic:</strong> Data-driven decisions devoid of emotional interference.</li>
              <li class="flex gap-3"><span class="font-bold">•</span> <strong>Hyper-Personalization:</strong> Strategies that adapt to your age and risk appetite.</li>
            </ul>
          </div>
        </div>

        <div>
           <h3 class="text-3xl font-bold text-slate-900 mb-8">The Science Behind the AI</h3>
           <p class="text-slate-600 mb-8 text-lg">We utilize Modern Portfolio Theory (MPT) combined with behavioral finance algorithms to construct your portfolio.</p>
           
           <div class="grid gap-6">
              <div class="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#156C97]/30 transition-all group hover:shadow-md">
                <div class="shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">🎮</div>
                <div>
                  <h4 class="font-bold text-slate-900 text-xl mb-2">1. Gamified Profiling</h4>
                  <p class="text-slate-600 leading-relaxed">We present scenarios (e.g., "The market drops 20%, what do you do?") to determine your <em>actual</em> psychological tolerance for loss.</p>
                </div>
              </div>

               <div class="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#156C97]/30 transition-all group hover:shadow-md">
                <div class="shrink-0 w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">🧠</div>
                <div>
                  <h4 class="font-bold text-slate-900 text-xl mb-2">2. The "Why" Engine (XAI)</h4>
                  <p class="text-slate-600 leading-relaxed">Black-box AI is dangerous. Our XAI module generates a plain-English explanation for every recommendation so you learn while you invest.</p>
                </div>
              </div>

               <div class="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#156C97]/30 transition-all group hover:shadow-md">
                <div class="shrink-0 w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">⚖️</div>
                <div>
                  <h4 class="font-bold text-slate-900 text-xl mb-2">3. Dynamic Rebalancing</h4>
                  <p class="text-slate-600 leading-relaxed">If one asset class outperforms and skews your portfolio risk, the Robo-Analyst suggests a rebalance to lock in profits.</p>
                </div>
              </div>
           </div>
        </div>

        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Real World Scenario</h3>
            <div class="flex flex-col md:flex-row gap-8">
                <div class="flex-1 bg-white p-6 rounded-2xl shadow-sm">
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">User Profile</div>
                    <h4 class="font-bold text-lg mb-2">Sandeepa (24)</h4>
                    <p class="text-sm text-slate-600">Software Engineer, High Income. Wants to buy a car in 3 years.</p>
                    <div class="mt-4 pt-4 border-t border-slate-100">
                        <span class="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-bold">High Risk Capacity</span>
                    </div>
                </div>
                <div class="flex-2 bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#156C97]">
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">AI Recommendation</div>
                    <h4 class="font-bold text-lg mb-2">The "Growth Aggressive" Strategy</h4>
                    <p class="text-slate-600 mb-4">Because Sandeepa has a stable income, the AI suggests an aggressive equity split to maximize growth.</p>
                    <ul class="grid grid-cols-2 gap-2 text-sm">
                        <li class="flex items-center gap-2">🟦 <strong>60%</strong> Equities</li>
                        <li class="flex items-center gap-2">🟩 <strong>20%</strong> Unit Trusts</li>
                        <li class="flex items-center gap-2">🟨 <strong>15%</strong> Fixed Deposits</li>
                        <li class="flex items-center gap-2">⬜ <strong>5%</strong> Gold</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="bg-slate-900 rounded-3xl p-10 text-white text-center relative overflow-hidden group">
           <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div class="relative z-10 transition-transform duration-700 group-hover:scale-105">
             <h3 class="text-2xl font-bold mb-4">Stop Guessing. Start Investing.</h3>
             <p class="text-slate-300 mb-8 max-w-2xl mx-auto">Join the beta users who have already optimized over LKR 50M in assets using our AI engine.</p>
           </div>
        </div>
      </div>
    `,
   },
   "feature-2": {
      heading: "Real-Time Intelligence",
      subHeading: "Bringing the Colombo Stock Exchange to Your Pocket",
      description: "Aggregated Market Data",
      image: "/feature-2.png",
      category: "Market Intelligence",
      readTime: "10 min read",
      author: "Data Team",
      date: "Live Feed",
      content: `
      <div class="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
         <div class="prose prose-lg prose-slate max-w-none">
          <p class="lead text-xl text-slate-600 mb-8 leading-relaxed">
            In the fast-paced world of finance, seconds matter. Yet, for the average Sri Lankan investor, getting a clear picture of the market is a logistical nightmare. You check the CSE app for stocks, reload a news site for gold prices, and log into your bank app for exchange rates. This 
            <strong class="text-[#156C97]">Data Fragmentation</strong> discourages real-time decision making.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-stretch">
            <div class="p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">The Old Way</div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">App Fatigue & Latency</h3>
                <p class="text-slate-600 mb-8 text-sm grow">You are constantly switching contexts, remembering multiple passwords, and dealing with outdated data.</p>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm opacity-60">
                        <span class="text-2xl">📱</span> CSE Mobile App (Stocks Only)
                    </div>
                     <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm opacity-60">
                        <span class="text-2xl">📰</span> Daily News Papers (Old Data)
                    </div>
                     <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm opacity-60">
                        <span class="text-2xl">🏦</span> 3 Different Bank Logins
                    </div>
                </div>
            </div>

             <div class="p-8 rounded-3xl bg-linear-to-br from-[#156C97] to-[#0d4f70] text-white shadow-xl flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                <div class="text-xs font-bold text-blue-200 uppercase tracking-widest mb-4">The Money Lens Way</div>
                <h3 class="text-2xl font-bold text-white mb-4">One Central Command</h3>
                <p class="text-blue-100 mb-8 text-sm grow">A holistic dashboard that aggregates every financial signal you need into one synchronized view.</p>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                        <span class="text-2xl">🚀</span> All Assets in One Dashboard
                    </div>
                     <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                        <span class="text-2xl">⚡</span> < 200ms API Latency
                    </div>
                     <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                        <span class="text-2xl">🔔</span> Instant Price Alerts
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Powered by Institutional-Grade Pipelines</h3>
            <p class="text-slate-600 mb-8">We don't scrape websites. We integrate directly with official APIs to ensure accuracy. Here is what we track for you:</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="text-3xl mb-2">📈</div>
                    <div class="font-bold text-slate-900">CSE Data</div>
                    <div class="text-xs text-slate-500">ASPI & S&P SL20</div>
                </div>
                 <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="text-3xl mb-2">💵</div>
                    <div class="font-bold text-slate-900">Forex</div>
                    <div class="text-xs text-slate-500">USD, GBP, EUR</div>
                </div>
                 <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="text-3xl mb-2">🧈</div>
                    <div class="font-bold text-slate-900">Commodities</div>
                    <div class="text-xs text-slate-500">22K & 24K Gold</div>
                </div>
                 <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="text-3xl mb-2">🔐</div>
                    <div class="font-bold text-slate-900">T-Bills</div>
                    <div class="text-xs text-slate-500">3M, 6M, 12M Rates</div>
                </div>
            </div>
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-inner transition-shadow">
            <h3 class="text-2xl font-bold text-[#156C97] mb-4">Why Real-Time Matters</h3>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                     <h4 class="font-bold text-slate-900 mb-2">The "Inflation Hedge"</h4>
                     <p class="text-slate-600 text-sm">When the LKR depreciates against the USD, gold prices usually spike. Money Lens alerts you to these correlations instantly.</p>
                </div>
                <div>
                     <h4 class="font-bold text-slate-900 mb-2">Opportunity Cost</h4>
                     <p class="text-slate-600 text-sm">Banking FD rates change frequently. We track the top 10 banks daily, ensuring you never lock your money in a low-interest account.</p>
                </div>
            </div>
        </div>
      </div>
    `,
   },
   "feature-3": {
      heading: "Democratizing Finance",
      subHeading: "A Trilingual Learning Hub for Every Sri Lankan",
      description: "The Education Module",
      image: "/FinancialFluencyInYourNativeTongue.png",
      category: "Financial Literacy",
      readTime: "9 min read",
      author: "Content Team",
      date: "Updated Weekly",
      content: `
      <div class="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div class="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100 flex flex-col md:flex-row gap-10 items-center">
           <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-bold uppercase mb-4">The Gap</div>
              <h3 class="text-3xl font-bold text-amber-950 mb-4">The "Language Friction" Barrier</h3>
              <p class="text-amber-900/80 text-lg leading-relaxed">
                Sri Lanka boasts a literacy rate of 92%, yet financial literacy is only 57.9%. Why? 
                Because sophisticated financial data is often gatekept behind complex English jargon.
              </p>
           </div>
           <div class="flex flex-row gap-6">
              <div class="text-center bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:scale-105 transition-transform duration-300">
                <div class="text-4xl font-black text-[#156C97] mb-1">92%</div>
                <div class="text-xs text-slate-500 font-bold uppercase tracking-wide">Literacy</div>
              </div>
              <div class="text-center bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:scale-105 transition-transform duration-300">
                <div class="text-4xl font-black text-amber-600 mb-1">58%</div>
                <div class="text-xs text-slate-500 font-bold uppercase tracking-wide">Fin-Lit</div>
              </div>
           </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-900 mb-8">A Curriculum Built for You</h3>
          <div class="space-y-6">
             <div class="flex flex-col md:flex-row gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#156C97]/30">
                 <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-2xl">🌱</div>
                 <div>
                     <h4 class="text-lg font-bold text-slate-900">Level 1: The Foundation</h4>
                     <p class="text-slate-600 text-sm mt-1">Understanding Inflation, Compound Interest, SMART Goals, and Budgeting 101.</p>
                     <div class="mt-3 flex gap-2">
                        <span class="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Sinhala</span>
                        <span class="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Tamil</span>
                        <span class="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">English</span>
                     </div>
                 </div>
             </div>

             <div class="flex flex-col md:flex-row gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#156C97]/30">
                 <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🏗️</div>
                 <div>
                     <h4 class="text-lg font-bold text-slate-900">Level 2: Building Wealth</h4>
                     <p class="text-slate-600 text-sm mt-1">Introduction to CSE, Unit Trusts, Fixed Income Securities, and Risk Management.</p>
                 </div>
             </div>

             <div class="flex flex-col md:flex-row gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#156C97]/30">
                 <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">🚀</div>
                 <div>
                     <h4 class="text-lg font-bold text-slate-900">Level 3: Advanced Strategies</h4>
                     <p class="text-slate-600 text-sm mt-1">Portfolio Diversification, Hedging against Currency Devaluation, REITs, and Tax Planning.</p>
                 </div>
             </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <div class="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-[#156C97] hover:shadow-xl transition-all duration-300">
               <div class="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🇱🇰</div>
               <h4 class="text-xl font-bold text-slate-900 mb-3">Localized Context</h4>
               <p class="text-slate-600 leading-relaxed">We don't just translate Wall Street advice. We cover 
                  <span class="text-green-700 font-semibold">EPF, ETF, Fixed Deposits,</span> and local banking instruments.
               </p>
            </div>
             <div class="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-[#156C97] hover:shadow-xl transition-all duration-300">
               <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🎥</div>
               <h4 class="text-xl font-bold text-slate-900 mb-3">Multi-Modal Learning</h4>
               <p class="text-slate-600 leading-relaxed">Everyone learns differently. That is why we offer:
                  <ul class="mt-2 space-y-1 text-sm">
                    <li>• Short Video Explainers</li>
                    <li>• Interactive Quizzes</li>
                    <li>• Downloadable Checklists</li>
                  </ul>
               </p>
            </div>
        </div>
      </div>
    `,
   },
   "feature-4": {
      heading: "The Unified Dashboard",
      subHeading: "Your Entire Net Worth, Visualized",
      description: "The Unified Portfolio",
      image: "/YourEntireNetWorthVisualized.png",
      category: "Portfolio Management",
      readTime: "8 min read",
      author: "Product Team",
      date: "Version 2.0",
      content: `
      <div class="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div class="prose prose-lg prose-slate max-w-none">
          <p class="lead text-xl text-slate-600 mb-8 leading-relaxed">
            Most Sri Lankans have a <strong class="text-[#156C97]">"scattered" net worth.</strong> 
            EPF balances arrive in a yearly letter, Fixed Deposits sit in a physical passbook, and gold jewelry is locked in a safe. Without a single, unified view, effective wealth management is impossible.
          </p>
        </div>

        <div class="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
           <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#156C97] rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 group-hover:opacity-40 transition-opacity duration-1000"></div>
           
           <h3 class="text-3xl font-bold mb-10 relative z-10">Holistic Tracking Ecosystem</h3>
           
           <div class="grid md:grid-cols-2 gap-8 relative z-10">
              <div class="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                 <div class="text-4xl mb-4 text-blue-400">📊</div>
                 <h4 class="font-bold text-xl mb-2">Multi-Asset Support</h4>
                 <p class="text-slate-300 text-sm leading-relaxed">We support tracking for FDs, Equities, Treasury Bills, Mutual Funds, EPF, ETF, Real Estate, and Vehicles.</p>
              </div>
              <div class="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                 <div class="text-4xl mb-4 text-emerald-400">📈</div>
                 <h4 class="font-bold text-xl mb-2">Inflation vs Growth</h4>
                 <p class="text-slate-300 text-sm leading-relaxed">See your "Real Return." We automatically adjust your portfolio growth against the current Sri Lankan inflation rate.</p>
              </div>
              <div class="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                 <div class="text-4xl mb-4 text-purple-400">🎯</div>
                 <h4 class="font-bold text-xl mb-2">Goal Mapping</h4>
                 <p class="text-slate-300 text-sm leading-relaxed">Assign specific assets to life goals. Tag your "Commercial Bank FD" to your "Wedding Fund".</p>
              </div>
               <div class="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                 <div class="text-4xl mb-4 text-amber-400">⚖️</div>
                 <h4 class="font-bold text-xl mb-2">Health Check Score</h4>
                 <p class="text-slate-300 text-sm leading-relaxed">Our algorithm gives your portfolio a "Health Score" out of 100 based on diversification and risk.</p>
              </div>
           </div>
        </div>

        <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Two Ways to Track</h3>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="uppercase text-xs font-bold text-[#156C97] tracking-wider mb-2">Method 1</div>
                    <h4 class="text-xl font-bold mb-4">Manual Entry (Privacy Focused)</h4>
                    <p class="text-slate-600 mb-4">Perfect for users who prefer not to link accounts. Simply enter your asset balances manually. We update market values automatically.</p>
                    <ul class="text-sm text-slate-500 space-y-2">
                        <li>• No login credentials required</li>
                        <li>• Full control over data entry</li>
                        <li>• Offline capability</li>
                    </ul>
                </div>
                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="uppercase text-xs font-bold text-emerald-600 tracking-wider mb-2">Method 2</div>
                    <h4 class="text-xl font-bold mb-4">Automated Sync (Open Banking)</h4>
                    <p class="text-slate-600 mb-4">Connect your bank and CDS accounts via secure, read-only APIs. Your balances update in real-time.</p>
                     <ul class="text-sm text-slate-500 space-y-2">
                        <li>• Real-time accuracy</li>
                        <li>• Transaction categorization</li>
                        <li>• Bank-grade security encryption</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    `,
   },
   "feature-5": {
      heading: "Trust by Design",
      subHeading: "Bank-Grade Security & Regulatory Compliance",
      description: "Security & Trust",
      image: "/BankGradeSecurityBuiltOnTrust.png",
      category: "Security",
      readTime: "6 min read",
      author: "Security Team",
      date: "Certified",
      content: `
      <div class="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div class="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10 flex gap-6 items-start">
           <div class="shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl">🛡️</div>
           <div>
               <h3 class="text-red-900 font-bold text-xl mb-2">The "Trust Deficit"</h3>
               <p class="text-red-800/80 leading-relaxed">
                 In an era of digital scams and Ponzi schemes, fear of data leaks prevents fintech adoption in Sri Lanka. 
                 Money Lens was built on a "Security First" architecture.
               </p>
           </div>
        </div>

        <div>
           <h3 class="text-2xl font-bold text-slate-900 mb-8 text-center">Our 3-Layer Security Architecture</h3>
           <div class="grid md:grid-cols-3 gap-6">
              <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-all duration-300">
                 <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4 text-[#156C97]">🔐</div>
                 <h4 class="font-bold text-slate-900 mb-2">Layer 1: Encryption</h4>
                 <p class="text-sm text-slate-500">AES-256 bit encryption for data at rest. TLS 1.3 for data in transit. Even if compromised, your data looks like gibberish.</p>
              </div>
              <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-all duration-300">
                 <div class="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-3xl mb-4 text-green-600">🏛️</div>
                 <h4 class="font-bold text-slate-900 mb-2">Layer 2: Compliance</h4>
                 <p class="text-sm text-slate-500">Fully aligned with the Personal Data Protection Act (PDPA) No. 9 of 2022 and CBSL regulations.</p>
              </div>
              <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-all duration-300">
                 <div class="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-3xl mb-4 text-purple-600">👤</div>
                 <h4 class="font-bold text-slate-900 mb-2">Layer 3: Sovereignty</h4>
                 <p class="text-sm text-slate-500">Your data belongs to you. Export your entire history or perform a "hard delete" instantly.</p>
              </div>
           </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-center bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div class="flex-1">
                <h3 class="text-2xl font-bold mb-4">The Principle of Data Minimization</h3>
                <p class="text-slate-300 leading-relaxed mb-6">
                    We only collect what is absolutely necessary. We do not store:
                </p>
                <ul class="space-y-3">
                    <li class="flex items-center gap-3"><span class="text-green-400">✓</span> Your Bank Login Passwords</li>
                    <li class="flex items-center gap-3"><span class="text-green-400">✓</span> Your Transaction PINs</li>
                    <li class="flex items-center gap-3"><span class="text-green-400">✓</span> Your NIC Images (after verification)</li>
                </ul>
            </div>
             <div class="flex-1 bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <code class="text-xs text-blue-200 font-mono">
                    // Example of Tokenized Access<br/>
                    const bankConnection = {<br/>
                    &nbsp;&nbsp;provider: "SecureBank",<br/>
                    &nbsp;&nbsp;token: "enc_83js92...", // We store this<br/>
                    &nbsp;&nbsp;password: null // We NEVER store this<br/>
                    }
                </code>
            </div>
        </div>

        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-6">Security FAQ</h4>
            <div class="space-y-4">
                <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p class="font-bold text-slate-800 mb-2">Do you sell my data?</p>
                    <p class="text-slate-600 text-sm leading-relaxed">No. Our business model is based on subscriptions, not ad revenue.</p>
                </div>
                 <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p class="font-bold text-slate-800 mb-2">Is the app audited?</p>
                    <p class="text-slate-600 text-sm leading-relaxed">Yes, we undergo quarterly penetration testing by independent security firms.</p>
                </div>
            </div>
        </div>
      </div>
    `,
   },
};

export default async function FeatureDetailPage({
   params,
}: FeatureDetailPageProps) {
   const { id } = await params;
   const feature = features[id as keyof typeof features];

   if (!feature) {
      notFound();
   }

   return (
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
         <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <NavbarDemo />
         </div>

         <div className="h-20"></div>

         <main className="container max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <header className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
               <div className="order-2 lg:order-1 animate-in slide-in-from-left-8 fade-in duration-1000">
                  <Link
                     href="/#features"
                     className="inline-flex items-center gap-2 text-slate-500 hover:text-[#156C97] transition-colors mb-8 group font-medium"
                  >
                     <div className="p-2 rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                     </div>
                     Back to Features
                  </Link>

                  <div className="flex flex-wrap items-center gap-3 mb-8">
                     <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#156C97] text-xs font-bold tracking-wide uppercase border border-blue-100 shadow-sm">
                        <Tag className="w-3 h-3" />
                        {feature.category}
                     </span>
                     <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase border border-slate-200 shadow-sm">
                        <Clock className="w-3 h-3" />
                        {feature.readTime}
                     </span>
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                     {feature.heading}
                  </h1>
                  <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-lg">
                     {feature.subHeading}
                  </p>
               </div>

               <div className="order-1 lg:order-2 relative group animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
                  <div className="absolute inset-0 bg-[#156C97] rounded-[2.5rem] rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform duration-700 ease-out"></div>

                  <div className="relative w-full aspect-video lg:aspect-16/10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 bg-slate-100">
                     <Image
                        src={feature.image}
                        alt={feature.heading}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                     />
                     <div className="absolute inset-0 bg-linear-to-tr from-slate-900/20 to-transparent pointer-events-none"></div>
                  </div>
               </div>
            </header>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
               <div className="lg:col-span-8">
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 animate-in fade-in zoom-in-95 duration-700 delay-300">
                     <div
                        className="prose prose-lg md:prose-xl prose-slate max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-bold
                    prose-p:text-slate-600 prose-p:leading-8
                    prose-li:text-slate-600 prose-li:marker:text-[#156C97]
                    prose-strong:text-[#156C97] prose-strong:font-bold
                    [&_ul]:list-none [&_ul]:pl-0"
                        dangerouslySetInnerHTML={{ __html: feature.content }}
                     />
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-8 sticky top-28 animate-in slide-in-from-right-4 fade-in duration-1000 delay-500">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white ring-1 ring-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                     <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                        At a Glance
                     </h3>

                     <div className="space-y-8">
                        <div className="flex items-start gap-5 group">
                           <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#156C97] group-hover:bg-[#156C97] group-hover:text-white transition-colors duration-300">
                              <CheckCircle2 className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                 Status
                              </p>
                              <p className="text-slate-900 font-bold text-lg">
                                 {feature.date}
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                           <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                              <Globe className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                 Availability
                              </p>
                              <p className="text-slate-900 font-bold text-lg">
                                 Web & Mobile
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                           <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                              <Share2 className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                 Share
                              </p>
                              <div className="flex gap-3 mt-1">
                                 <button className="text-slate-600 hover:text-[#156C97] text-sm font-semibold transition-colors">
                                    LinkedIn
                                 </button>
                                 <span className="text-slate-300">/</span>
                                 <button className="text-slate-600 hover:text-[#156C97] text-sm font-semibold transition-colors">
                                    Twitter
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="my-8 border-t border-slate-100"></div>

                     <button className="w-full group bg-[#156C97] hover:bg-[#115a7f] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/10 transition-all hover:shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-3">
                        Try Feature
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>

                  <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#156C97] rounded-full blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                     <h4 className="font-bold text-xl mb-3 relative z-10">
                        Ready to level up?
                     </h4>
                     <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
                        Join thousands of Sri Lankans mastering their financial
                        future with Money Lens.
                     </p>
                     <Link
                        href="/signup"
                        className="inline-flex items-center text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors text-sm font-semibold relative z-10"
                     >
                        Create free account &rarr;
                     </Link>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}
