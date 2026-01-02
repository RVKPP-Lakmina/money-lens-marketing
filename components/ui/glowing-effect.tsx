"use client";

export function GlowingEffect() {
  return (
    <>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none delay-1000" />
      <div className="fixed inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm pointer-events-none" />
    </>
  );
}
