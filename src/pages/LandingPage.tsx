import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";
import { ArrowRight, Sparkles } from "lucide-react";

const VIDEO_SRC = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";
const APP_URL = "https://t.me/Noveaibot/App";
const COMMUNITY_URL = "https://t.me/noveall";

function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let hls: Hls | null = null;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
    }
    video.play().catch(() => {});
    return () => hls?.destroy();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video ref={ref} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-100" />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-20 px-6 py-6 w-full">
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg">Nova</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
            <a href="#mine" className="hover:text-white transition-colors duration-300">Mining</a>
            <a href="#tasks" className="hover:text-white transition-colors duration-300">Tasks</a>
            <a href={COMMUNITY_URL} className="hover:text-white transition-colors duration-300">Community</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href={COMMUNITY_URL} className="text-white hover:text-white/80 transition-colors text-sm font-medium cursor-pointer">
            Join
          </a>
          <a href={APP_URL} className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer">
            Open App
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
          >
            Mine NOVA, TON and USDT every 8 hours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
          >
            Mine, battle and earn
            <br className="hidden md:block" /> right inside Telegram
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="min-h-[50px] mt-2"
          >
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer"
            >
              Open in Telegram
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
        <motion.a
          href={COMMUNITY_URL}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide"
        >
          Join the community
        </motion.a>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      <BackgroundVideo />
      <Navbar />
      <Hero />
    </main>
  );
}
