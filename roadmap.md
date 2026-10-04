# Roadmap

- [x] Import project from GitHub (same backend)
- [ ] Remove $7,777 prize box + zero reward balances for all users + stop re-granting (DB trigger/functions, bot, UI)
- [ ] Redesign Tasks page: clean list, each task with its image
- [ ] Bot: /start message + admin panel via /101; add task = name -> link -> image; delete-tasks button
- [ ] Bot token secret with SS suffix (TELEGRAM_BOT_TOKEN_SS) so projects don't mix
- [ ] Redesign landing/hero per the pasted dark video hero spec
- [ ] Deploy on Vercel with provided token and update all links (bot webhook, app URL, TON manifest)
- [ ] Daily auto channel post at 03:00 UTC (channel -1002616088306), English, clean image, Open App button, no emojis; scheduled from Supabase pg_cron; send first post now
- [ ] Auto notifications to users every 7 hours (Supabase pg_cron -> telegram-bot auto_notify)
