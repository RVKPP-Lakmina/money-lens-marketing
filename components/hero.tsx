// typescript
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface HeroProps {
    badge?: string;
    heading?: string;
    description?: string;
    image?: string | string[];
    buttons?: {
        primary?: { text: string; url: string };
        secondary?: { text: string; url: string };
    };
}

const Hero = ({
                  badge = "✨ 🇱🇰 AI-Powered Financial Intelligence",
                  heading = "See your financial future clearly !",
                  description =
                  "Make informed decisions with confidence, stay ahead of market movements, and build a smarter financial future by joining hands with Money Lens, with tools designed for the local market and global opportunities alike.",
                  image = [
                      "/hero-image1.png",
                      "/hero-image2.png",
                      "/hero-image3.png",
                      "/hero-image4.png"
                  ],
                  buttons = {
                      primary: { text: "Get Started Free", url: "#" },
                      secondary: { text: "See How It Works", url: "#" },
                  },
              }: HeroProps) => {
    const ref = useRef<HTMLDivElement>(null);

    /* 🎥 Parallax */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

    // Carousel state
    const images = Array.isArray(image) ? image : [image];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
        return () => clearInterval(id);
    }, [images.length]);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (
        <section ref={ref} className="relative bg-white text-neutral-900 md:mt-12">
            <div
                className="
          mx-auto max-w-7xl
          grid min-h-[90svh]
          grid-cols-1 lg:grid-cols-2
          items-center
          gap-6
          px-4 lg:px-6
        "
            >
                {/* 📝 LEFT — TEXT */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3">
                        <div className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5">
                            <AnimatedShinyText className="text-sm font-medium text-sky-700">
                                AI Powered
                            </AnimatedShinyText>
                        </div>

                        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
                            <AnimatedShinyText className="text-sm font-medium text-emerald-700">
                                Financial Literacy
                            </AnimatedShinyText>
                        </div>

                        <div className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1.5">
                            <AnimatedShinyText className="text-sm font-medium text-yellow-700">
                                Growth Targeted
                            </AnimatedShinyText>
                        </div>
                    </div>

                    {/* Heading — BIG Apple-style */}
                    <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                        {heading.split(/(financial future)/i).map((part, idx) =>
                                /financial future/i.test(part) ? (
                                    <span
                                        key={idx}
                                        className="bg-gradient-to-br from-emerald-700 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-extrabold"
                                    >{part}
                                    </span>
                                ) : (
                                    <span
                                        key={idx}
                                        className="bg-gradient-to-br from-neutral-900 via-emerald-700 to-teal-600 bg-clip-text text-transparent"
                                    >{part}
                                    </span>
                                )
                        )}
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-lg sm:text-xl text-neutral-600 leading-relaxed">
                        {description}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {buttons.primary && (
                            <Button
                                asChild
                                className="
                  px-8 py-4 text-base font-medium
                  bg-gradient-to-r from-emerald-600 to-teal-600
                  text-white shadow-lg
                  hover:shadow-xl transition
                "
                            >
                                <a href={buttons.primary.url} className="flex items-center">
                                    {buttons.primary.text}
                                    <ArrowRight className="ml-2 size-5"/>
                                </a>
                            </Button>
                        )}

                        {buttons.secondary && (
                            <Button asChild variant="outline" className="px-8 py-4 text-base">
                                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="relative w-full flex items-center justify-center">
                    <motion.div
                        style={{y: imageY}}
                        className="relative w-full flex justify-center"
                    >
                        <div
                            className="
                                            relative
                                            w-full
                                            max-w-[1920px]
                                            aspect-[16/9]
                                            rounded-3xl
                                            overflow-hidden
                                            shadow-2xl
                                            bg-neutral-50
                                          "
                        >
                            {images.map((src, i) => {
                                const isActive = i === index;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                            scale: isActive ? 1 : 0.98,
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className={`absolute inset-0 ${
                                            isActive ? "z-10" : "z-0 pointer-events-none"
                                        }`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`slide-${i}`}
                                            fill
                                            priority={i === 0}
                                            className="object-contain scale-[1.03]"
                                            sizes="(max-width: 1024px) 100vw, 1920px"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {images.length > 1 && (
                        <>
                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`h-2 w-8 rounded-full transition-all ${i === index ? "bg-emerald-600" : "bg-white/60"}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export {Hero};
