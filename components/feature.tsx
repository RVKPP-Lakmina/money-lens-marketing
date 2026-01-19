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
      heading: "Meet Your Personal Investment Strategist",
      description:
        "Get personalized recommendations powered by advanced AI algorithms that learn from your financial habits and goals.",
      image: "/feature-1.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-sky-50",
      fullContent:
        "Navigate the financial world with a smart companion. Our proprietary AI Recommendation Engine doesn't just give generic advice; it analyzes your unique income, risk tolerance, and financial goals to provide personalized, explainable investment strategies. It’s like having a financial analyst working for you 24/7.\n"},
    {
      id: "feature-2",
      heading: "The Pulse of the Market, Live in Your Pocket",
      description:
        "Discover the best investment opportunities in stocks and unit trusts with data-driven insights and real-time analysis.",
      image: "/feature-2.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-lime-50",
      fullContent:
        "Stop guessing and start knowing. Get direct, real-time access to the Colombo Stock Exchange (CSE), along with up-to-the-minute updates on Treasury bills, fixed deposit rates, gold prices, and foreign exchange rates. We turn raw data into clear, actionable insights so you can spot opportunities the moment they happen."},
    {
      id: "feature-3",
      heading: "Financial Fluency in Your Native Tongue",
      description:
        "Our comprehensive financial library is available in Sinhala, Tamil, and English to ensure everyone can learn and grow.",
      image: "/feature-hero-image3.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-yellow-100",
      fullContent:
        "Break down language barriers with our comprehensive financial library available in Sinhala, Tamil, and English. Inspired by the DhanaMaga initiative, our structured modules guide you from basic budgeting to complex investing, ensuring that financial literacy is accessible to everyone, regardless of the language they speak.",
    },
    {
      id: "feature-4",
      heading: "Your Entire Net Worth, Visualized",
      description:
        "Track your investments with detailed analytics and get actionable insights to optimize your portfolio performance.",
      image: "/feature-hero-image4.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-red-100",
      fullContent:
        "Say goodbye to scattered spreadsheets and multiple banking logins. Track every single asset—from Fixed Deposits and EPF/ETF balances to stocks and mutual funds—in one unified view. Monitor your diversification, analyze risk, and see the full picture of your financial health at a glance.\n"},
    {
      id: "feature-5",
      heading: " Bank-Grade Security, Built on Trust",
      description:
          "Your financial data is protected with bank-grade encryption and full regulatory compliance.",
      image: "/feature-5.png",
      url: "https://shadcnblocks.com",
      bgcolor: "bg-blue-50",
      fullContent:
          "Security isn't an afterthought at Money Lens; it is the foundation. We have built our architecture to strictly adhere to the Personal Data Protection Act (PDPA) No. 9 of 2022 and Central Bank of Sri Lanka (CBSL) regulations. We employ data minimization, bank-grade encryption, and give users full sovereignty over their data.",
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
                              href={`/features/${active.id}`}
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
                  className="text-[#156C97]"
                words={["Wealth", "Investments", "Savings", "Future"]}
              />
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm sm:text-base md:text-lg px-4">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-12">
          {/* AI Driven Financial Advice - Large Card */}
          <motion.div
              layoutId={`card-${features[0].id}-${id}`}
              onClick={() => setActive(features[0])}
              className="cursor-pointer col-span-1 md:col-span-2 lg:col-span-2 min-h-[250px] sm:min-h-[280px] lg:min-h-[320px]"
          >
            <WobbleCard containerClassName="h-full bg-gradient-to-br from-sky-100 to-sky-200 border border-sky-300">
              <div className="max-w-full lg:max-w-lg p-3 sm:p-4 md:p-5 relative z-10">
                <motion.h2
                    layoutId={`title-${features[0].id}-${id}`}
                    className="text-left text-balance text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(14,165,233,0.4)]"
                >
                  {features[0].heading}
                </motion.h2>
                <motion.p
                    layoutId={`description-${features[0].id}-${id}`}
                    className="mt-2 sm:mt-3 text-left text-xs sm:text-sm lg:text-base text-neutral-700"
                >
                  {features[0].description}
                </motion.p>
              </div>
              <motion.img
                  layoutId={`image-${features[0].id}-${id}`}
                  src={features[0].image}
                  alt={features[0].heading}
                  className="absolute -right-2 sm:-right-4 lg:-right-[20%] -bottom-2 lg:-bottom-[10%] w-[180px] sm:w-[250px] md:w-[350px] lg:w-[500px] object-contain rounded-2xl hidden md:block"
              />
            </WobbleCard>
          </motion.div>

          {/* Smart Investment Planning - Small Card */}
          <motion.div
              layoutId={`card-${features[1].id}-${id}`}
              onClick={() => setActive(features[1])}
              className="cursor-pointer col-span-1 min-h-[200px] sm:min-h-[250px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-lime-100 to-lime-200 border border-lime-300">
              <div className="max-w-full p-3 sm:p-4 md:p-5">
                <motion.h2
                    layoutId={`title-${features[1].id}-${id}`}
                    className="text-left text-balance text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-lime-700 via-green-600 to-emerald-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(34,197,94,0.4)]"
                >
                  {features[1].heading}
                </motion.h2>
                <motion.p
                    layoutId={`description-${features[1].id}-${id}`}
                    className="mt-2 sm:mt-3 text-left text-xs sm:text-sm text-neutral-700"
                >
                  {features[1].description}
                </motion.p>
              </div>
            </WobbleCard>
          </motion.div>

          {/* Feature 3, 4, 5 in a single row */}
          <motion.div
              layoutId={`card-${features[2].id}-${id}`}
              onClick={() => setActive(features[2])}
              className="cursor-pointer col-span-1 min-h-[200px] sm:min-h-[250px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-300">
              <div className="max-w-full p-3 sm:p-4 md:p-5">
                <motion.h2
                    layoutId={`title-${features[2].id}-${id}`}
                    className="text-left text-balance text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
                >
                  {features[2].heading}
                </motion.h2>
                <motion.p
                    layoutId={`description-${features[2].id}-${id}`}
                    className="mt-2 sm:mt-3 text-left text-xs sm:text-sm text-neutral-700"
                >
                  {features[2].description}
                </motion.p>
              </div>
            </WobbleCard>
          </motion.div>

          <motion.div
              layoutId={`card-${features[3].id}-${id}`}
              onClick={() => setActive(features[3])}
              className="cursor-pointer col-span-1 min-h-[200px] sm:min-h-[250px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-red-100 to-red-200 border border-red-300">
              <div className="max-w-full p-3 sm:p-4 md:p-5">
                <motion.h2
                    layoutId={`title-${features[3].id}-${id}`}
                    className="text-left text-balance text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-red-700 via-rose-600 to-pink-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)]"
                >
                  {features[3].heading}
                </motion.h2>
                <motion.p
                    layoutId={`description-${features[3].id}-${id}`}
                    className="mt-2 sm:mt-3 text-left text-xs sm:text-sm text-neutral-700"
                >
                  {features[3].description}
                </motion.p>
              </div>
            </WobbleCard>
          </motion.div>

          <motion.div
              layoutId={`card-${features[4].id}-${id}`}
              onClick={() => setActive(features[4])}
              className="cursor-pointer col-span-1 min-h-[200px] sm:min-h-[250px]"
          >
            <WobbleCard containerClassName="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300">
              <div className="max-w-full p-3 sm:p-4 md:p-5">
                <motion.h2
                    layoutId={`title-${features[4].id}-${id}`}
                    className="text-left text-balance text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-900 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]"
                >
                  {features[4].heading}
                </motion.h2>
                <motion.p
                    layoutId={`description-${features[4].id}-${id}`}
                    className="mt-2 sm:mt-3 text-left text-xs sm:text-sm text-neutral-700"
                >
                  {features[4].description}
                </motion.p>
              </div>
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
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0, transition: {duration: 0.05}}}
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12"/>
        <path d="M6 6l12 12"/>
      </motion.svg>
  );
};

export {Feature};
