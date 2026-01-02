"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "motion/react";
import { ImagesSlider } from "./ui/images-slider";

interface HeroModernProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  images?: string[];
}

const Hero = ({
  badge = "✨ 🇱🇰 AI-Powered Financial Intelligence",
  heading = "See Your Financial Future Clearly",
  description = "ශ්‍රී ලාංකික ආයෝජකයින් සඳහා AI බලයෙන් යුත් මූල්‍ය මග පෙන්වීම, තත්‍ය කාලීන වෙළඳපල දත්ත සහ පුද්ගලාරෝපිත නිර්දේශ. Bridge knowledge to action with confidence.",
  buttons = {
    primary: {
      text: "Get Started Free",
      url: "#",
    },
    secondary: {
      text: "See How It Works",
      url: "#",
    },
  },
  images = [
    // "/modern-financial-dashboard-with-charts.png",
    // "/ai-technology-innovation-abstract-light.jpg",
    "/investment-growth-chart-financial-data.jpg",
    "/hero.png",
  ],
}: HeroModernProps) => {
  return (
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw]">
      <ImagesSlider
        images={images}
        className="h-screen w-screen"
        autoplay={true}
        direction="up"
        overlayClassName="bg-black/25"
      >
        {/* Animated content overlay */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="z-50 flex h-full w-full items-center justify-center"
        >
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex max-w-2xl flex-col items-center text-center space-y-6">
              {/* Badge */}
              <div className="group rounded-full border border-emerald-300/40 bg-white/20 backdrop-blur-sm transition-all ease-in hover:border-emerald-400/60 hover:bg-white/30">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 transition ease-out group-hover:text-emerald-700 font-semibold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  <span>{badge}</span>
                  <ArrowRight className="ml-2 size-3.5 transition-transform duration-500 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>

              {/* Heading */}
              <h1 className="text-pretty text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                {heading}
              </h1>

              {/* Description */}
              <div className="max-w-xl">
                <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed drop-shadow">
                  {description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                {buttons.primary && (
                  <Button
                    asChild
                    className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-700 hover:to-teal-700"
                  >
                    <a
                      href={buttons.primary.url}
                      className="flex items-center justify-center"
                    >
                      {buttons.primary.text}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    asChild
                    className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                  >
                    <a
                      href={buttons.secondary.url}
                      className="flex items-center justify-center"
                    >
                      {buttons.secondary.text}
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export { Hero };
