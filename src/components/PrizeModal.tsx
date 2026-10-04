import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";

const SEEN_KEY = "starmine-7777-prize-seen";

const PrizeModal = () => {
  const { user } = useApp();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SEEN_KEY) === "1") setOpen(false);
    } catch {
      // Keep the announcement visible when a Telegram webview disables storage.
    }
  }, []);

  const close = () => {
    try {
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Dismissal still works when storage is unavailable.
    }
    setOpen(false);
  };

  if (!open) return null;

  const displayName =
    [user.telegramUser.first_name, user.telegramUser.last_name].filter(Boolean).join(" ").trim() ||
    user.telegramUser.username ||
    "Player";

  return (
    <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/20 px-5 py-8 backdrop-blur-[8px]" role="dialog" aria-modal="true" aria-labelledby="prize-title">
      <section className="relative w-full max-w-[470px] overflow-hidden border border-white/35 bg-slate-950/[0.28] text-white shadow-[0_30px_90px_-24px_rgba(0,0,0,0.86)] backdrop-blur-[22px]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.16] via-transparent to-cyan-200/[0.06] pointer-events-none" aria-hidden="true" />
        <div className="relative flex items-center justify-between border-b border-white/20 px-6 py-5 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">StarMine / Welcome campaign</p>
          <button onClick={close} className="text-[11px] font-medium text-white/60 transition-colors hover:text-white" aria-label="Close prize announcement">Close</button>
        </div>

        <div className="relative px-6 pb-7 pt-8 sm:px-10 sm:pb-9 sm:pt-10">
          <div className="inline-flex h-9 items-center gap-3 border border-white/30 bg-white/[0.08] px-3 text-[12px] font-medium tracking-[-0.01em] text-white/90">
            <span className="h-3.5 w-3.5 border-2 border-cyan-200 bg-transparent" aria-hidden="true" />
            A private reward for {displayName}
          </div>

          <h2 id="prize-title" className="mt-8 max-w-[8ch] text-[clamp(3.4rem,15vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
            $7,777
          </h2>
          <p className="mt-5 max-w-[34ch] text-[15px] font-light leading-6 tracking-[-0.01em] text-white/72">
            Your StarMine welcome prize is ready. Start your first mining cycle to continue.
          </p>

          <div className="mt-9 border-t border-white/20 pt-5">
            <p className="max-w-[42ch] text-[12px] leading-5 text-white/72">
              Reward availability and eligibility may vary by campaign terms.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button onClick={() => { close(); navigate({ to: "/wallet" }); }} className="h-12 flex-1 bg-[#006cd2] px-5 text-left text-[13px] font-medium text-white transition-colors hover:bg-[#0053a3]">View reward in wallet</button>
              <button onClick={close} className="h-12 border border-white/30 bg-white/[0.08] px-5 text-[13px] font-medium text-white transition-colors hover:border-white/60 hover:bg-white/[0.14]">Maybe later</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrizeModal;
