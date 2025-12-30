import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <HeroHighlight>
        <div className="flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-2 mb-8 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Zero-Cost Vibe Lab
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-tight leading-tight">
            Build Everything for <br />
            <Highlight className="text-white">
              Zero Dollars.
            </Highlight>
          </h1>

          <p className="mt-8 text-neutral-400 text-center max-w-2xl text-lg md:text-xl leading-relaxed">
            The next generation of development isn&apos;t about more code.
            It&apos;s about more vibe. Integrated Web, Mobile, and Cloud—all for free.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition duration-200">
              Read the Manual
            </button>
            <button className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-2xl hover:bg-neutral-800 transition duration-200">
              Open Vibe Board
            </button>
          </div>
        </div>
      </HeroHighlight>
    </main>
  );
}
