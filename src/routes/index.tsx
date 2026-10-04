import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import MiningPage from "@/pages/MiningPage";
import LandingPage from "@/pages/LandingPage";

function Home() {
  // Inside Telegram the game opens; regular browsers get the landing page.
  const [mode, setMode] = useState<"pending" | "app" | "landing">("pending");

  useEffect(() => {
    let tries = 0;
    const check = () => {
      const wa = (window as any).Telegram?.WebApp;
      if (wa?.initData) return setMode("app");
      if (++tries >= 6) return setMode("landing");
      setTimeout(check, 100);
    };
    check();
  }, []);

  if (mode === "pending") return <div className="min-h-screen bg-black" />;
  return mode === "app" ? <MiningPage /> : <LandingPage />;
}

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Nova - Mine NOVA, TON and USDT in Telegram" },
      { name: "description", content: "Nova: mine NOVA, TON and USDT every 8 hours, complete tasks and invite friends, right inside Telegram." },
      { property: "og:title", content: "Nova - Mine NOVA, TON and USDT in Telegram" },
      { property: "og:description", content: "Mine every 8 hours, complete tasks and invite friends, right inside Telegram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
