"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

export function Counter({ value, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Extract numeric value and suffix/prefix
  const extractValue = (str: string) => {
    const match = str.match(/(\d+\.?\d*)/);
    const numericValue = match ? parseFloat(match[0]) : 0;
    const prefix = str.slice(0, str.indexOf(match?.[0] || ""));
    const suffix = str.slice((str.indexOf(match?.[0] || "") + (match?.[0]?.length || 0)));
    return { numericValue, prefix, suffix };
  };

  const { numericValue, prefix, suffix } = extractValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(numericValue * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, numericValue, duration]);

  const formatCount = (num: number) => {
    // Preserve decimal places if original value had them
    const decimalPlaces = (numericValue.toString().split(".")[1] || "").length;
    return decimalPlaces > 0 ? num.toFixed(decimalPlaces) : Math.floor(num).toString();
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatCount(count)}
      {suffix}
    </span>
  );
}
