import { ArrowRight, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

interface Hero1Props {
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
  image?: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  badge = "✨ 🇱🇰 AI-Powered Financial Intelligence",
  heading = "See Your Financial Future Clearly",
  description = "ශ්‍රී ලාංකික ආයෝජකයින් සඳහා AI බලයෙන් යුත් මූල්‍ය මග පෙන්වීම, තත්‍ය කාලීන වෙළඳපල දත්ත සහ පුද්ගලාරෝපිත නිර්දේශ. Bridge knowledge to action with confidence.",
  buttons = {
    primary: {
      text: "Get Started Free",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "See How It Works",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "/hero.png",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )} */}
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-semibold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                <span>{badge}</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>

            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {heading}
            </h1>
            <div className="mb-8 max-w-xl">
              <TextGenerateEffect
                words={description}
                className="text-muted-foreground font-normal lg:text-xl"
              />
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
