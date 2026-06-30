# Academic Researcher Website

A simple, good-looking one-page academic site for a finance researcher (asset pricing & bond term structure). No coding tools or installs needed to run it — it's just three files your browser already understands.

**Live site:** https://khnam-crypto.github.io/mediakit-website/

---

## 👀 See it on your computer right now

Double-click **`index.html`**. It opens in your web browser. That's it — no setup.

---

## ✏️ How to change the text (you do NOT need to know how to code)

Everything you'd want to change is marked in the files with a comment that says **`EDIT ME`**.

1. Open **`index.html`** with any text editor (Notepad works, or [VS Code](https://code.visualstudio.com/) is nicer and free).
2. Use **Find** (`Ctrl + F`) and search for `EDIT ME`. Each one points to the next thing you can change.
3. Replace the placeholder words (like **Your Name**, the sample papers, the fake numbers) with your real info.
4. Save the file and refresh your browser to see the change.

### The main things to replace
| What | Where to look |
|------|----------------|
| Your name | top of `index.html` (title, nav, hero, footer) |
| Position & institution | the **Hero** (`hero__role`, `hero__inst`) |
| Research statement | the **Hero** intro paragraph (`lead`) |
| At-a-glance numbers | the dark **strip** (`data-count="..."`: publications, citations, etc.) |
| Research interests | the three **Research interests** cards |
| Working papers | the **Work in progress** section (each `<details>` block — title, coauthors, status, abstract, links) |
| Publications | the **Peer-reviewed** numbered list |
| Teaching | the **Courses** cards |
| Your email & office | the **Contact** section (`mailto:you@university.edu`) |
| Academic links | replace every `href="#"` with your real Google Scholar / SSRN / ORCID / GitHub links |

### Add your photo
Drop a photo named **`profile.jpg`** into this folder. It appears automatically in the hero. (If there's no photo, a blue placeholder with your initials shows instead.)

### Add your CV
Drop a file named **`cv.pdf`** into this folder — the "Download CV" buttons link to it automatically.

### Add a paper
To add another working paper, copy one whole `<details class="pub ...">…</details>` block in `index.html` and edit the text. For a published article, copy one `<li class="pub pub--static ...">…</li>` block.

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
