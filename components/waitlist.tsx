"use client";

import React, { useState } from "react";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage({ type: "success", text: "Successfully joined! We'll notify you when we launch." });
      setEmail("");
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <section id="waitlist" className="relative z-20 flex h-full min-h-screen items-center justify-center overflow-hidden py-10">
        <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
          <h2 className="py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-4 lg:text-8xl bg-gradient-to-br from-[#156C97] via-[#1a8ec4] to-[#156C97] bg-clip-text text-transparent">
            Join the Waitlist
          </h2>
          <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
            Be among the first to experience AI-powered financial planning tailored for Sri Lanka.
            Get early access to personalized investment insights, multilingual financial education,
            and tools designed to help you achieve your financial goals.
          </p>
          <form onSubmit={handleSubmit} className="relative z-20 mt-6 w-full max-w-md">
            <div className="flex items-center gap-3 rounded-full p-1">
              <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="bg-muted h-10 w-full rounded-xl border-none shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-0 active:ring-0"
                  placeholder="Enter your email"
                  required
              />
              <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-10 rounded-xl bg-[#156C97] hover:bg-[#1a8ec4]"
              >
                {isLoading ? "Joining..." : "Join the Waitlist"}
              </Button>
            </div>
            {message && (
                <p className={`mt-3 text-center text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message.text}
                </p>
            )}
          </form>
          <div className="mt-6 flex items-center gap-2">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({ length: 6 }).map((_, index) => (
                <Avatar key={index} className="size-8">
                  <AvatarImage
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar${index + 1}.png`}
                      alt="placeholder"
                  />
                </Avatar>
            ))}
          </span>
            <p className="text-muted-foreground/80 tracking-tight">
              +1000 people already joined
            </p>
          </div>
        </BackgroundLines>
      </section>
  );
};

export { Waitlist };
