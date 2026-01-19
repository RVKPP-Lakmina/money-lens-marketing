"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface PricingFeature {
   text: string;
}

interface PricingPlan {
   id: string;
   name: string;
   description: string;
   monthlyPrice: string;
   yearlyPrice: string;
   features: PricingFeature[];
   button: {
      text: string;
      url: string;
   };
}

interface Pricing2Props {
   heading?: string;
   description?: string;
   plans?: PricingPlan[];
}

const Pricing = ({
   heading = "Pricing",
   description = "Start your financial journey with Money Lens",
   plans = [
      {
         id: "free",
         name: "Free",
         description: "Get started with essential tools",
         monthlyPrice: "LKR 0",
         yearlyPrice: "LKR 0",
         features: [
            { text: "FinEd Hub access" },
            { text: "Basic financial literacy content" },
            { text: "Community support" },
         ],
         button: {
            text: "Get Started",
            url: "#waitlist",
         },
      },
      {
         id: "pro",
         name: "Pro",
         description: "Unlock the full Money Lens experience",
         monthlyPrice: "LKR 500",
         yearlyPrice: "LKR 5,000",
         features: [
            { text: "AI-Driven Financial Advice" },
            { text: "Smart Investment Planning" },
            { text: "Full FinEd Hub Access (Sinhala, Tamil, English)" },
            { text: "Personalized Portfolio Insights" },
            { text: "Bank-Grade Security & Compliance" },
            { text: "Real-time market analysis" },
            { text: "Priority customer support" },
         ],
         button: {
            text: "Join Waitlist",
            url: "#waitlist",
         },
      },
   ],
}: Pricing2Props) => {
   const [isYearly, setIsYearly] = useState(false);
   return (
      <section id="pricing" className="py-32">
         <div className="container">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
               <h2 className="text-3xl p-4 font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  {heading}
               </h2>
               <p className="text-muted-foreground lg:text-xl">{description}</p>
               <div className="flex items-center gap-3 text-lg">
                  Monthly
                  <Switch
                     checked={isYearly}
                     onCheckedChange={() => setIsYearly(!isYearly)}
                  />
                  Yearly
               </div>
               <div className="flex flex-col items-stretch gap-6 md:flex-row">
                  {plans.map((plan) => (
                     <Card
                        key={plan.id}
                        className="flex w-80 flex-col justify-between text-left"
                     >
                        <CardHeader>
                           <CardTitle>
                              <p>{plan.name}</p>
                           </CardTitle>
                           <p className="text-muted-foreground text-sm">
                              {plan.description}
                           </p>
                           <div className="flex items-end">
                              <span className="text-4xl font-semibold bg-gradient-to-r from-[#156C97] to-[#1a8ec4] bg-clip-text text-transparent">
                                 {isYearly
                                    ? plan.yearlyPrice
                                    : plan.monthlyPrice}
                              </span>
                              <span className="text-muted-foreground text-2xl font-semibold">
                                 {plan.id === "free"
                                    ? ""
                                    : isYearly
                                      ? "/yr"
                                      : "/mo"}
                              </span>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <Separator className="mb-6" />
                           {plan.id === "pro" && (
                              <p className="mb-3 font-semibold">
                                 Everything in Free, and:
                              </p>
                           )}
                           <ul className="space-y-4">
                              {plan.features.map((feature, index) => (
                                 <li
                                    key={index}
                                    className="flex items-center gap-2 text-sm"
                                 >
                                    <CircleCheck className="size-4" />
                                    <span>{feature.text}</span>
                                 </li>
                              ))}
                           </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                           <Button
                              asChild
                              className="w-full bg-[#156C97] hover:bg-[#1a8ec4]"
                           >
                              <a href={plan.button.url}>{plan.button.text}</a>
                           </Button>
                        </CardFooter>
                     </Card>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export { Pricing };
