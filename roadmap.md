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
- [ ] Channel post images must feature the uploaded plush character (file_00000000071c8246b425b04574665609.png), clean bold text, no emojis
- [ ] Character images with pink + blue gradient backgrounds for: daily channel posts (3) AND the /start welcome image (telegram_admins.welcome_image_url)
- [ ] SUPERSEDES character/pink-blue: all post images + /start image in ASTRONAUT style (purple cosmic, reference IMG_20261004_062717_727.jpg), English bold text, no emojis; host in public bucket ads-tasks (user-images bucket does not exist -> fix uploadTelegramImage + store_image to use ads-tasks)

## Status
- [ ] Restore the originally intended animated background; restore Gram icon; show requested Nova coin icon; remove "TON market" label
- [ ] Investigate and fix mining not crediting real balances after completion
- [ ] Identify referral code owner safely for user-requested test
- [x] Remove "OPEN SOURCE DATA" label; use uploaded purple Gram symbol throughout; refresh bottom navigation symbols
- [x] Restore moving background inside Telegram with local MP4, WebM fallback, and visible poster
- [x] Prize removed (UI, DB, bot); tasks redesigned with images; /101 admin flow + delete-all
- [x] Astronaut images hosted in ads-tasks (p1-p3 + welcome-start); bot uses ads-tasks
- [x] Notifications every ~7h (03:00, 10:00, 17:00 UTC); old broken daily cron removed
- [x] Dark hero landing for browser visitors (inside Telegram the app opens)
- [ ] First channel post: blocked, bot must be added as admin of channel -1002616088306
- [x] Vercel deploy done via CLI (nova-app-beryl.vercel.app); animated video bg brighter + mp4 fallback
- [x] Undo browser-only landing; dark video + glass style applied to every page in the app
- [x] New bot token (TELEGRAM_BOT_TOKEN_SS) + webhook set; /start and /101 admin live
- [x] Daily post: new AI astronaut/dark-planet image every day (14 rotating scenes); first post sent (msg 332)
