# Media Kit Website

A simple, good-looking one-page media kit. No coding tools or installs needed to run it — it's just three files your browser already understands.

**Live site:** https://khnam-crypto.github.io/mediakit-website/

---

## 👀 See it on your computer right now

Double-click **`index.html`**. It opens in your web browser. That's it — no setup.

---

## ✏️ How to change the text (you do NOT need to know how to code)

Everything you'd want to change is marked in the files with a comment that says **`EDIT ME`**.

1. Open **`index.html`** with any text editor (Notepad works, or [VS Code](https://code.visualstudio.com/) is nicer and free).
2. Use **Find** (`Ctrl + F`) and search for `EDIT ME`. Each one points to the next thing you can change.
3. Replace the placeholder words (like **Your Name**, the fake stats, the sample quotes) with your real info.
4. Save the file and refresh your browser to see the change.

### The main things to replace
| What | Where to look |
|------|----------------|
| Your name / brand | top of `index.html` (title, nav, hero, footer) |
| Your one-line pitch & bio | the **Hero** and **About** sections |
| Your real stats | the dark **stats strip** (`data-count="..."` numbers) |
| Audience percentages | the **Audience** bars (`width:XX%` and the `%` labels) |
| Featured work / brands | the **Featured work** cards and the "Trusted by" logos |
| Prices & packages | the **Services & packages** section |
| Testimonials | the **Kind words** section |
| Your email | the **Contact** section (`mailto:you@example.com`) |
| Social links | replace every `href="#"` with your real profile links |

### Add your photo
Drop a photo named **`profile.jpg`** into this folder. It appears automatically in the hero. (If there's no photo, a colored placeholder with initials shows instead.)

### Change the colors
Open **`styles.css`**, look near the top for `--accent` and the `--grad-*` lines, and swap in any hex color (e.g. `#0aa` for teal). Save and refresh.

---

## 🌍 The published website

This project is set up to be hosted free on **GitHub Pages**. Once published, anyone with the link can view it. Every time you change a file and push it to GitHub, the live site updates automatically.

> Tip: you don't have to understand Git to keep using the site — even just editing the files locally and double-clicking `index.html` works forever.

---

## 📁 What each file does

- **`index.html`** — all the words and structure (this is the one you'll edit most).
- **`styles.css`** — the colors, fonts, and layout.
- **`script.js`** — small touches: the year, the counting-up numbers, the fade-in effect.

You can ignore `script.js` entirely unless you want to tinker.
