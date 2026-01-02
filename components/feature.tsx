"use client";

import { ContainerTextFlip } from "./ui/container-text-flip";
import { WobbleCard } from "./ui/wobble-card";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Button } from "./ui/button";

interface Feature {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
  bgcolor?: string;
  fullContent?: string;
}

interface Feature72Props {
  title?: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
}

const Feature = ({
  description = "Powerful tools and intelligent insights to help you make smarter financial decisions",
  features = [
    {
      id: "feature-1",
      heading: "AI Driven Financial Advice",
      description:
        "Get personalized recommendations powered by advanced AI algorithms that learn from your financial habits and goals.",
      image: "/feature-1.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-sky-50",
      fullContent:
        "Our AI-driven financial advice platform leverages cutting-edge machine learning algorithms to provide you with personalized recommendations tailored to your unique financial situation. By analyzing your spending patterns, income streams, and long-term goals, our intelligent system identifies opportunities for growth and optimization. The platform continuously learns from your financial behavior, adapting its recommendations to ensure they remain relevant as your circumstances evolve. Whether you're planning for retirement, saving for a major purchase, or looking to optimize your investment strategy, our AI advisor provides actionable insights that help you make informed decisions with confidence.",
    },
    {
      id: "feature-2",
      heading: "Smart Investment Planning",
      description:
        "Discover the best investment opportunities in stocks and unit trusts with data-driven insights and real-time analysis.",
      image: "/feature-2.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-lime-50",
      fullContent:
        "Transform your investment approach with our smart planning tools that combine real-time market data with sophisticated analytics. Our platform monitors thousands of stocks and unit trusts, identifying opportunities that align with your risk tolerance and investment objectives. Receive timely alerts about market movements, portfolio rebalancing suggestions, and diversification recommendations. Our data-driven insights help you understand market trends, sector performance, and potential risks, enabling you to build a robust investment portfolio that grows with your financial goals.",
    },
    {
      id: "feature-3",
      heading: "Credit Card Optimization",
      description:
        "Maximize your credit card rewards and benefits with intelligent suggestions tailored to your spending patterns.",
      image: "/feature-3.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-yellow-100",
      fullContent:
        "Unlock the full potential of your credit cards with our intelligent optimization engine. By analyzing your spending categories, transaction history, and lifestyle preferences, we identify the best credit card combinations to maximize your rewards, cashback, and benefits. Our system tracks promotional offers, bonus categories, and anniversary rewards, ensuring you never miss an opportunity to earn more. Get personalized recommendations on which cards to use for specific purchases, how to optimize your redemptions, and strategies to minimize fees while maximizing value from your credit card portfolio.",
    },
    {
      id: "feature-4",
      heading: "Personalized Portfolio Insights",
      description:
        "Track your investments with detailed analytics and get actionable insights to optimize your portfolio performance.",
      image: "/feature-4.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-red-100",
      fullContent:
        "Gain comprehensive visibility into your investment portfolio with our advanced analytics dashboard. Track performance metrics across all your holdings, including stocks, bonds, mutual funds, and alternative investments. Our detailed reporting provides insights into asset allocation, sector exposure, geographic distribution, and risk metrics. Receive personalized recommendations for portfolio optimization, rebalancing strategies, and tax-efficient investment approaches. With real-time performance tracking and historical analysis, you can make data-driven decisions to improve returns and manage risk effectively.",
    },
  ],
}: Feature72Props) => {
  const [active, setActive] = useState<Feature | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  /*@ts-ignore */
  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container px-4 sm:px-6">
        {/* Modal Overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
            />
          )}
        </AnimatePresence>

        {/* Expanded Card Modal */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-6">
              <motion.button
                key={`button-${active.id}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 sm:top-4 sm:right-4 items-center justify-center bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 shadow-lg hover:bg-neutral-100 transition-colors z-[110]"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="w-full max-w-3xl h-full md:h-fit md:max-h-[85vh] flex flex-col bg-white rounded-lg sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.div layoutId={`image-${active.id}-${id}`}>
                  <img
                    src={active.image}
                    alt={active.heading}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-t-lg sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                  />
                </motion.div>

                <div className="flex-1 overflow-auto">
                  <div className="p-4 sm:p-6 md:p-8">
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3"
                    >
                      {active.heading}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-neutral-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6"
                    >
                      {active.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 }}
                      className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4"
                    >
                      <p>{active.fullContent}</p>
                      <div className="pt-3 sm:pt-4">
                        <Button asChild variant="default" size="lg">
                          <a
                            href={active.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-neutral-900 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-neutral-800 transition-colors"
                          >
                            Learn More →
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 sm:gap-10 md:gap-14 text-center">
          <div className="px-4">
            <h1 className="mb-3 sm:mb-4 text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Everything You Need to Grow Your{" "}
              <ContainerTextFlip
                className="text-gray-500"
                words={["Wealth", "Investments", "Savings", "Future"]}
              />
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm sm:text-base md:text-lg px-4">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16">
          {/* AI Driven Financial Advice - Large Card */}
          <motion.div
            layoutId={`card-${features[0].id}-${id}`}
            onClick={() => setActive(features[0])}
            className="cursor-pointer col-span-1 md:col-span-2 lg:col-span-2 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
          >
            <WobbleCard containerClassName="h-full bg-gradient-to-br from-sky-100 to-sky-200 border border-sky-300">
              <div className="max-w-full lg:max-w-lg p-4 sm:p-6 relative z-10">
                <motion.h2
                  layoutId={`title-${features[0].id}-${id}`}
                  className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(14,165,233,0.4)]"
                >
                  {features[0].heading}
                </motion.h2>
                <motion.p
                  layoutId={`description-${features[0].id}-${id}`}
                  className="mt-3 sm:mt-4 text-left text-sm sm:text-base lg:text-lg text-neutral-700"
                >
                  {features[0].description}
                </motion.p>
              </div>
              <motion.img
                layoutId={`image-${features[0].id}-${id}`}
                src={features[0].image}
                alt={features[0].heading}
                className="absolute -right-2 sm:-right-4 lg:-right-[20%] -bottom-2 lg:-bottom-[10%] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] object-contain rounded-2xl hidden md:block"
              />
            </WobbleCard>
          </motion.div>

          {/* Smart Investment Planning - Small Card */}
          <motion.div
            layoutId={`card-${features[1].id}-${id}`}
            onClick={() => setActive(features[1])}
            className="cursor-pointer col-span-1 min-h-[250px] sm:min-h-[300px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-lime-100 to-lime-200 border border-lime-300">
              <div className="max-w-full p-4 sm:p-6">
                <motion.h2
                  layoutId={`title-${features[1].id}-${id}`}
                  className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-lime-700 via-green-600 to-emerald-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(34,197,94,0.4)]"
                >
                  {features[1].heading}
                </motion.h2>
                <motion.p
                  layoutId={`description-${features[1].id}-${id}`}
                  className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-neutral-700"
                >
                  {features[1].description}
                </motion.p>
              </div>
            </WobbleCard>
          </motion.div>

          {/* Credit Card Optimization - Small Card */}
          <motion.div
            layoutId={`card-${features[2].id}-${id}`}
            onClick={() => setActive(features[2])}
            className="cursor-pointer col-span-1 min-h-[250px] sm:min-h-[300px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-300">
              <div className="max-w-full p-4 sm:p-6">
                <motion.h2
                  layoutId={`title-${features[2].id}-${id}`}
                  className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
                >
                  {features[2].heading}
                </motion.h2>
                <motion.p
                  layoutId={`description-${features[2].id}-${id}`}
                  className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-neutral-700"
                >
                  {features[2].description}
                </motion.p>
              </div>
            </WobbleCard>
          </motion.div>

          {/* Personalized Portfolio Insights - Full Width Card */}
          <motion.div
            layoutId={`card-${features[3].id}-${id}`}
            onClick={() => setActive(features[3])}
            className="cursor-pointer col-span-1 md:col-span-2 lg:col-span-2 min-h-[300px] sm:min-h-[350px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-red-100 to-red-200 border border-red-300">
              <div className="max-w-full lg:max-w-[60%] p-4 sm:p-6 relative z-10">
                <motion.h2
                  layoutId={`title-${features[3].id}-${id}`}
                  className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-red-700 via-rose-600 to-pink-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)]"
                >
                  {features[3].heading}
                </motion.h2>
                <motion.p
                  layoutId={`description-${features[3].id}-${id}`}
                  className="mt-3 sm:mt-4 text-left text-sm sm:text-base lg:text-lg text-neutral-700"
                >
                  {features[3].description}
                </motion.p>
              </div>
              <motion.img
                layoutId={`image-${features[3].id}-${id}`}
                src={features[3].image}
                alt={features[3].heading}
                className="absolute -right-2 sm:-right-4 md:-right-[10%] lg:-right-[10%] -bottom-4 sm:-bottom-8 md:-bottom-10 w-[150px] sm:w-[200px] md:w-[280px] lg:w-[380px] object-contain rounded-2xl hidden md:block"
              />
            </WobbleCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 sm:h-5 sm:w-5 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export { Feature };
