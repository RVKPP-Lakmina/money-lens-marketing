import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
             
            </p>
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
