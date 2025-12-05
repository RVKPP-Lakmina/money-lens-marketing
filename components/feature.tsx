import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "./ui/container-text-flip";

interface Feature {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

interface Feature72Props {
  title: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
}

const Feature = ({
  title = "Everything You Need to Grow Your Wealth",
  description = "Powerful tools and intelligent insights to help you make smarter financial decisions",
  buttonUrl = "https://shadcnblocks.com",
  buttonText = "Book a demo",
  features = [
    {
      id: "feature-1",
      heading: "AI Driven Financial Advice",
      description:
        "Get personalized recommendations powered by advanced AI algorithms that learn from your financial habits and goals.",
      image: "/feature-1.png",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-2",
      heading: "Smart Investment Planning",
      description:
        "Discover the best investment opportunities in stocks and unit trusts with data-driven insights and real-time analysis.",
      image: "/feature-2.png",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-3",
      heading: "Credit Card Optimization",
      description:
        "Maximize your credit card rewards and benefits with intelligent suggestions tailored to your spending patterns.",
      image: "/feature-3.png",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-4",
      heading: "Personalized Portfolio Insights",
      description:
        "Track your investments with detailed analytics and get actionable insights to optimize your portfolio performance.",
      image: "/feature-4.png",
      url: "https://shadcnblocks.com",
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-14 text-center">
          <div>
            <h1 className="mb-4 text-pretty text-3xl font-medium lg:text-6xl">
              Everything You Need to Grow Your{" "}
              <ContainerTextFlip
                words={["Wealth", "Investments", "Savings", "Future"]}
              />
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-border flex flex-col overflow-clip rounded-xl border"
            >
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.heading}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
              <a href={feature.url}>
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature };
