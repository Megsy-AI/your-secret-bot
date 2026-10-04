import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/StakingPage";

export const Route = createFileRoute("/staking")({
  component: Page,
  head: () => ({
    meta: [
      { title: "StarMine — TON Staking" },
      { name: "description", content: "Explore live TON prices and staking offers from 100 gram." },
    ],
  }),
});
