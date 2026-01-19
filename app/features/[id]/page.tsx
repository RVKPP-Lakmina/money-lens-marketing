import { notFound } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";

interface FeatureDetailPageProps {
    params: {
        id: string;
    };
}

const features = {
    "feature-1": {
        heading: "Meet Your 'Robo-Analyst': Bridging the Gap Between Knowing and Doing",
        description: "The AI Advisory",
        image: "/feature-1.png",
        category: "AI Technology",
        content: `
            <div class="space-y-10">
                <section class="border-l-4 border-[#156C97] pl-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <h2 class="text-3xl font-bold text-neutral-900">The Problem: The "Knowledge-Behavior" Paradox</h2>
                    </div>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                        <p class="text-amber-900 font-semibold">⚠️ Key Issue: Analysis paralysis prevents action despite financial knowledge</p>
                    </div>
                    <p class="text-lg text-neutral-700 leading-relaxed">Knowing you should invest is different from knowing what to invest in. This is the "Knowledge-Behavior Gap." Even financially literate users often suffer from analysis paralysis or fear of risk. They hoard cash in low-interest savings accounts because they lack personalized guidance.</p>

                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#156C97]">
                            <div class="text-3xl font-bold text-[#156C97]">💡</div>
                            <div class="text-sm text-neutral-600 mt-2">Knowledge Gap</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-amber-500">
                            <div class="text-3xl font-bold text-amber-600">⚡</div>
                            <div class="text-sm text-neutral-600 mt-2">Action Gap</div>
                        </div>
                    </div>
                </section>

                <div class="relative">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#156C97] via-emerald-400 to-green-500"></div>
                    <section class="pl-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <h2 class="text-3xl font-bold text-neutral-900">The Solution: AI-Powered Personalization</h2>
                        </div>
                        <div class="bg-[#156C97]/10 border border-[#156C97]/30 p-6 rounded-xl mb-6">
                            <p class="text-lg text-[#156C97] font-semibold">💡 Money Lens features a proprietary AI Recommendation Engine (Robo-Analyst) that acts as a 24/7 financial advisor. It moves beyond generic advice to provide hyper-personalized insights.</p>
                        </div>

                        <div class="bg-gradient-to-br from-[#156C97] to-[#1a8ec4] p-6 rounded-2xl mb-6 text-white">
                            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <span class="text-3xl">🎯</span>
                                Key Features
                            </h3>
                            <div class="space-y-6">
                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🎮
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Dynamic Risk Profiling</h4>
                                            <p class="text-white/90">Upon onboarding, users undergo a gamified assessment of their financial goals, income, and risk tolerance. The AI uses this to assign a "Risk Score" that dictates future recommendations.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🧠
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Explainable AI (XAI)</h4>
                                            <p class="text-white/90">We don't just tell you what to buy; we tell you why. Our AI explains its logic (e.g., "This stock matches your high-risk tolerance and long-term growth goal"), educating the user while advising them.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🔔
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Behavioral Nudges</h4>
                                            <p class="text-white/90">The AI monitors user activity and sends personalized alerts. If a user's portfolio becomes too concentrated in one sector, the "Robo-Analyst" suggests diversification strategies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-[#156C97]/10 p-8 rounded-3xl border-2 border-[#156C97]/20">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-[#156C97]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            ✓
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-[#156C97] mb-4">The Impact</h2>
                            <p class="text-lg text-neutral-700 leading-relaxed">This feature solves the "last mile" problem of finance. It gives users the specific confidence they need to execute transactions, effectively closing the gap between financial literacy and financial action.</p>

                            <div class="mt-6 grid grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🤖</div>
                                    <div class="text-sm font-semibold text-[#156C97]">24/7 Advisory</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🎯</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Personalized</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">✅</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Action-Driven</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
    },
    "feature-2": {
        heading: "Real-Time Intelligence: Bringing the Colombo Stock Exchange to Your Pocket",
        description: "Aggregated Market Data",
        image: "/feature-2.png",
        category: "Market Intelligence",
        content: `
            <div class="space-y-10">
                <section class="border-l-4 border-[#156C97] pl-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <h2 class="text-3xl font-bold text-neutral-900">The Problem: The "Data Fragmentation" Gap</h2>
                    </div>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                        <p class="text-amber-900 font-semibold">⚠️ Key Challenge: Investors manage data across 3-5 different platforms daily</p>
                    </div>
                    <p class="text-lg text-neutral-700 leading-relaxed">For the average Sri Lankan investor, getting a clear picture of the market is a logistical nightmare. To check stock prices, you need the CSE app. To check gold rates, you visit a news site. To check exchange rates, you log into a bank. This fragmentation discourages real-time decision-making. Investors are often reacting to yesterday's news because they lack a centralized source of truth.</p>

                    <div class="grid grid-cols-3 gap-4 mt-6">
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#156C97]">
                            <div class="text-2xl font-bold text-[#156C97]">📱</div>
                            <div class="text-sm text-neutral-600 mt-2">CSE App</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-amber-500">
                            <div class="text-2xl font-bold text-amber-600">🌐</div>
                            <div class="text-sm text-neutral-600 mt-2">News Sites</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-green-500">
                            <div class="text-2xl font-bold text-green-600">🏦</div>
                            <div class="text-sm text-neutral-600 mt-2">Banking Apps</div>
                        </div>
                    </div>
                </section>

                <div class="relative">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#156C97] via-emerald-400 to-green-500"></div>
                    <section class="pl-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <h2 class="text-3xl font-bold text-neutral-900">The Solution: Aggregated Real-Time Market Data</h2>
                        </div>
                        <div class="bg-[#156C97]/10 border border-[#156C97]/30 p-6 rounded-xl mb-6">
                            <p class="text-lg text-[#156C97] font-semibold">💡 Money Lens serves as a single pane of glass for all essential market indicators. We integrate directly with third-party APIs to fetch and normalize data from multiple sources.</p>
                        </div>

                        <div class="bg-gradient-to-br from-[#156C97] to-[#1a8ec4] p-6 rounded-2xl mb-6 text-white">
                            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <span class="text-3xl">🎯</span>
                                Key Features
                            </h3>
                            <div class="space-y-6">
                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            📊
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Live CSE Feed</h4>
                                            <p class="text-white/90">View real-time securities data, market indices, and trade summaries from the Colombo Stock Exchange without needing a broker account.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            📈
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Macro-Economic Indicators</h4>
                                            <p class="text-white/90">Track fluctuating exchange rates and gold prices side-by-side with stock data, allowing users to see correlations (e.g., how the USD rate impacts their stock portfolio).</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            💰
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Fixed Deposit & Money Market Rates</h4>
                                            <p class="text-white/90">We aggregate rates from major banking institutions, allowing users to compare "risk-free" returns against market equities instantly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-[#156C97]/10 p-8 rounded-3xl border-2 border-[#156C97]/20">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-[#156C97]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            ✓
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-[#156C97] mb-4">The Impact</h2>
                            <p class="text-lg text-neutral-700 leading-relaxed">We replace speculation with data. By presenting complex market data in a user-friendly, mobile-first interface, we give retail investors the same visibility as institutional players.</p>

                            <div class="mt-6 grid grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">⚡</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Real-Time Data</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🎯</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Centralized Hub</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">📱</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Mobile-First</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
    },
    "feature-3": {
        heading: "Democratizing Finance with a Trilingual Learning Hub",
        description: "The Education Module",
        image: "/feature-education.png",
        category: "Financial Literacy",
        content: `
            <div class="space-y-10">
                <section class="border-l-4 border-[#156C97] pl-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <h2 class="text-3xl font-bold text-neutral-900">The Problem: The "Language Friction" Barrier</h2>
                    </div>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                        <p class="text-amber-900 font-semibold">⚠️ Key Insight: Language barrier affects 42% of potential investors</p>
                    </div>
                    <p class="text-lg text-neutral-700 leading-relaxed">Sri Lanka boasts a literacy rate of over 92%, yet our financial literacy rate hovers at just 57.9%. Why the disparity? A major culprit is the language barrier. Most sophisticated financial data, stock market analyses, and global economic news are gatekept behind complex English jargon. For the average Sri Lankan—whether a rural saver or a young professional fluent in Sinhala or Tamil—this creates "language friction," making the world of investment feel exclusive and inaccessible.</p>

                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#156C97]">
                            <div class="text-3xl font-bold text-[#156C97]">92%</div>
                            <div class="text-sm text-neutral-600">Literacy Rate</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-amber-500">
                            <div class="text-3xl font-bold text-amber-600">57.9%</div>
                            <div class="text-sm text-neutral-600">Financial Literacy</div>
                        </div>
                    </div>
                </section>

                <div class="relative">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#156C97] via-emerald-400 to-green-500"></div>
                    <section class="pl-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <h2 class="text-3xl font-bold text-neutral-900">The Solution: A Trilingual Financial Learning Hub</h2>
                        </div>
                        <div class="bg-[#156C97]/10 border border-[#156C97]/30 p-6 rounded-xl mb-6">
                            <p class="text-lg text-[#156C97] font-semibold">💡 Money Lens tears down this barrier with a dedicated Financial Learning Hub that operates natively in Sinhala, Tamil, and English.</p>
                        </div>

                        <div class="bg-gradient-to-br from-[#156C97] to-[#1a8ec4] p-6 rounded-2xl mb-6 text-white">
                            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <span class="text-3xl">🎯</span>
                                Key Features
                            </h3>
                            <div class="space-y-6">
                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            📚
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Structured Learning Paths</h4>
                                            <p class="text-white/90">Unlike scattered blog posts, our content is organized into logical progressions. Users start with "Savings Basics," move to "Understanding Inflation," and graduate to "Stock Market Fundamentals".</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🎥
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Multi-Modal Content</h4>
                                            <p class="text-white/90">Recognizing that everyone learns differently, we combine traditional articles with interactive lessons and video tutorials. Whether you prefer reading or watching, Money Lens adapts to you.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🇱🇰
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Localized Context</h4>
                                            <p class="text-white/90">We don't just translate Wall Street advice. Our content is tailored to the Sri Lankan context, covering local instruments like EPF (Employee Provident Fund) and ETF, ensuring the advice is legally and economically relevant to our users.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-[#156C97]/10 p-8 rounded-3xl border-2 border-[#156C97]/20">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-[#156C97]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            ✓
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-[#156C97] mb-4">The Impact</h2>
                            <p class="text-lg text-neutral-700 leading-relaxed">By removing the language barrier, we aren't just teaching finance; we are empowering a demographic previously ignored by traditional fintech. We are turning passive savers into active, informed participants in the economy.</p>

                            <div class="mt-6 grid grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🌍</div>
                                    <div class="text-sm font-semibold text-[#156C97]">3 Languages</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">👥</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Inclusive Access</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">📈</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Empowerment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
    },

    "feature-4": {
            heading: "The Unified Dashboard: Stop Managing Your Wealth in Spreadsheets",
            description: "The Unified Portfolio",
            image: "/feature-hero-image4.png",
            category: "Portfolio Management",
            content: `
            <div class="space-y-10">
                <section class="border-l-4 border-[#156C97] pl-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <h2 class="text-3xl font-bold text-neutral-900">The Problem: The "Invisibility" of Wealth</h2>
                    </div>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                        <p class="text-amber-900 font-semibold">⚠️ Key Issue: Scattered assets prevent clear visibility of total net worth</p>
                    </div>
                    <p class="text-lg text-neutral-700 leading-relaxed">Most Sri Lankans have a "scattered" net worth. They have an EPF balance they rarely check, a few fixed deposits in physical passbooks, perhaps some gold jewelry, and a savings account. There is no single place to see their total net worth. Without visibility, effective wealth management is impossible.</p>

                    <div class="grid grid-cols-4 gap-4 mt-6">
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#156C97]">
                            <div class="text-2xl font-bold text-[#156C97]">📊</div>
                            <div class="text-sm text-neutral-600 mt-2">EPF</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-amber-500">
                            <div class="text-2xl font-bold text-amber-600">🏦</div>
                            <div class="text-sm text-neutral-600 mt-2">Fixed Deposits</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-green-500">
                            <div class="text-2xl font-bold text-green-600">💰</div>
                            <div class="text-sm text-neutral-600 mt-2">Savings</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-yellow-500">
                            <div class="text-2xl font-bold text-yellow-600">🪙</div>
                            <div class="text-sm text-neutral-600 mt-2">Gold</div>
                        </div>
                    </div>
                </section>

                <div class="relative">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#156C97] via-emerald-400 to-green-500"></div>
                    <section class="pl-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <h2 class="text-3xl font-bold text-neutral-900">The Solution: A Holistic Portfolio Tracker</h2>
                        </div>
                        <div class="bg-[#156C97]/10 border border-[#156C97]/30 p-6 rounded-xl mb-6">
                            <p class="text-lg text-[#156C97] font-semibold">💡 Money Lens introduces the Unified Portfolio Dashboard, a tool designed to aggregate every asset class into a single, visualized interface.</p>
                        </div>

                        <div class="bg-gradient-to-br from-[#156C97] to-[#1a8ec4] p-6 rounded-2xl mb-6 text-white">
                            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <span class="text-3xl">🎯</span>
                                Key Features
                            </h3>
                            <div class="space-y-6">
                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            📊
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Multi-Asset Support</h4>
                                            <p class="text-white/90">Track Fixed Deposits, Equities, Treasury Bills, Mutual Funds, EPF, and ETF balances all in one place.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            📈
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Visual Analytics</h4>
                                            <p class="text-white/90">We use advanced data visualization to show users their asset allocation (e.g., "You are 80% in cash, 20% in stocks"). This visual feedback highlights dangerous over-exposure to inflation risk.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🎯
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Goal Tracking</h4>
                                            <p class="text-white/90">Users can map their assets against specific life goals (e.g., "Retirement," "Buying a Home"). The dashboard tracks progress toward these targets in real-time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-[#156C97]/10 p-8 rounded-3xl border-2 border-[#156C97]/20">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-[#156C97]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            ✓
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-[#156C97] mb-4">The Impact</h2>
                            <p class="text-lg text-neutral-700 leading-relaxed">By visualizing the "invisible," we motivate users. Seeing a total net worth grow provides the psychological positive reinforcement necessary to maintain good financial habits.</p>

                            <div class="mt-6 grid grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">👁️</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Full Visibility</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">📊</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Unified View</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🎯</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Goal-Oriented</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
        },

    "feature-5": {
            heading: "Trust by Design: Why Your Financial Data is Safe with Money Lens",
            description: "Security & Compliance",
            image: "/feature-5.png",
            category: "Security & Trust",
            content: `
            <div class="space-y-10">
                <section class="border-l-4 border-[#156C97] pl-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <h2 class="text-3xl font-bold text-neutral-900">The Problem: The "Trust Deficit"</h2>
                    </div>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                        <p class="text-amber-900 font-semibold">⚠️ Key Challenge: Fear of data leaks prevents fintech adoption</p>
                    </div>
                    <p class="text-lg text-neutral-700 leading-relaxed">In an era of digital scams and pyramid schemes, Sri Lankan users are rightfully wary of sharing financial data. A primary barrier to adoption for any fintech app is the fear of data leaks or misuse. Without guaranteed trust, the best features in the world won't be used.</p>

                    <div class="grid grid-cols-3 gap-4 mt-6">
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-red-500">
                            <div class="text-2xl font-bold text-red-600">🚨</div>
                            <div class="text-sm text-neutral-600 mt-2">Digital Scams</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-amber-500">
                            <div class="text-2xl font-bold text-amber-600">⚠️</div>
                            <div class="text-sm text-neutral-600 mt-2">Data Misuse</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#156C97]">
                            <div class="text-2xl font-bold text-[#156C97]">🔒</div>
                            <div class="text-sm text-neutral-600 mt-2">Trust Barrier</div>
                        </div>
                    </div>
                </section>

                <div class="relative">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#156C97] via-emerald-400 to-green-500"></div>
                    <section class="pl-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-block w-8 h-8 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <h2 class="text-3xl font-bold text-neutral-900">The Solution: Compliance-by-Design Security</h2>
                        </div>
                        <div class="bg-[#156C97]/10 border border-[#156C97]/30 p-6 rounded-xl mb-6">
                            <p class="text-lg text-[#156C97] font-semibold">💡 Security isn't an afterthought at Money Lens; it is the foundation. We have built our architecture to strictly adhere to the Personal Data Protection Act (PDPA) No. 9 of 2022 and Central Bank of Sri Lanka (CBSL) regulations.</p>
                        </div>

                        <div class="bg-gradient-to-br from-[#156C97] to-[#1a8ec4] p-6 rounded-2xl mb-6 text-white">
                            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <span class="text-3xl">🎯</span>
                                Key Features
                            </h3>
                            <div class="space-y-6">
                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🔍
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Data Minimization</h4>
                                            <p class="text-white/90">We only collect data that is absolutely necessary for profiling. We do not store banking login credentials or sensitive transaction passwords.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            🔐
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">Bank-Grade Encryption</h4>
                                            <p class="text-white/90">All user data, both in transit and at rest, is protected by industry-standard encryption protocols.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            👤
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-xl mb-2">User Sovereignty</h4>
                                            <p class="text-white/90">In full compliance with the PDPA, users retain full ownership of their data. We offer transparent tools for users to download their data or request a complete "right to be forgotten" deletion at any time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-6 mt-6">
                            <div class="bg-gradient-to-br from-blue-50 to-[#156C97]/10 p-6 rounded-xl border-2 border-[#156C97]/30">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="text-3xl">📜</span>
                                    <h4 class="font-bold text-lg text-[#156C97]">PDPA Compliance</h4>
                                </div>
                                <p class="text-sm text-neutral-700">Fully aligned with Personal Data Protection Act No. 9 of 2022</p>
                            </div>
                            <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border-2 border-green-500/30">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="text-3xl">🏛️</span>
                                    <h4 class="font-bold text-lg text-green-700">CBSL Standards</h4>
                                </div>
                                <p class="text-sm text-neutral-700">Adheres to Central Bank of Sri Lanka regulations</p>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-[#156C97]/10 p-8 rounded-3xl border-2 border-[#156C97]/20">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-[#156C97]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-[#156C97] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            ✓
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-[#156C97] mb-4">The Impact</h2>
                            <p class="text-lg text-neutral-700 leading-relaxed">We are building a fortress, not just an app. By aligning with national regulatory frameworks from Day 1, Money Lens positions itself as a legitimate, institutional-grade platform that users can trust with their financial future.</p>

                            <div class="mt-6 grid grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🛡️</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Fortress Security</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">✅</div>
                                    <div class="text-sm font-semibold text-[#156C97]">Regulatory Compliant</div>
                                </div>
                                <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div class="text-2xl mb-1">🤝</div>
                                    <div class="text-sm font-semibold text-[#156C97]">User Trust</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
        }
};

export default async function FeatureDetailPage({ params }: FeatureDetailPageProps) {
    const { id } = await params;
    const feature = features[id as keyof typeof features];

    if (!feature) {
        notFound();
    }

    return (
        <>
            <NavbarDemo />
            <article className="min-h-screen bg-gradient-to-b from-white via-[#156C97]/5 to-neutral-50 mt-30">
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Image with Overlay */}
                    <div className="relative -mt-8 mb-16">
                        <img
                            src={feature.image}
                            alt={feature.heading}
                            className="w-full h-[400px] md:h-[600px] object-cover rounded-b-3xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#156C97]/60 via-transparent to-transparent rounded-b-3xl"></div>

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                            <span className="bg-[#156C97] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                {feature?.category || "Feature"}
                            </span>
                        </div>
                    </div>

                    {/* Header Section */}
                    <header className="mb-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-[#156C97] via-emerald-500 to-green-600 bg-clip-text text-transparent">
                                    {feature.heading}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-600 font-medium mb-8">
                                {feature.description}
                            </p>
                        </div>
                    </header>

                    {/* Content Section */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div
                            className="prose prose-lg prose-neutral max-w-none leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: feature.content }}
                        />
                    </div>
                </div>
            </article>
        </>
    );
}
