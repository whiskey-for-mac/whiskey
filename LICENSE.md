# Whisky for Mac — Run Windows Games & Apps on Apple Silicon Macs

> **Completely free** – Optimised for Apple Silicon Macs | Supports macOS Sonoma and later

Welcome to the **complete guide to Whisky** – the free, open‑source Mac app that finally kills the “Mac can’t run games” myth. Whisky is a modern graphical wrapper built on Wine and Apple’s Game Porting Toolkit. It lets Windows games and applications run smoothly on macOS – **no virtual machines, no dual‑booting, and no terminal commands**.

## [_Download Whisky for Mac_](https://whiskey-for-mac.github.io/whiskey/)

<img width="1672" height="941" alt="image" src="https://github.com/user-attachments/assets/f2cc0219-f7c5-4fd9-92c0-d23821c9da32" />

> 🚀 **Built for Mac gamers, explorers, and productivity‑focused users** – turn “can I run it?” into “just click and play”.

---

## 🥃 About Whisky

For years, the biggest pain point for Mac users has been the lack of native AAA games. Even though Apple Silicon (M1/M2/M3/M4) packs impressive graphics power, the macOS game library remains tiny. Whisky changes that completely.

Created by then‑17‑year‑old Isaac Marovitz, Whisky is a modern Wine wrapper built with SwiftUI. It combines the open‑source Wine compatibility layer with Apple’s official Game Porting Toolkit (GPTK), wrapping all complex setup into a clean, native macOS interface.

**Core mission:** Let Mac users run Windows games and apps with **zero technical knowledge** – just a few clicks.

- **100% free and open‑source** (GPL v3)
- **Optimised for Apple Silicon** (M‑series)
- **Supports DirectX 12 games**
- **15,000+ GitHub stars** – active community

---

## ✨ Why Whisky Stands Out

Whisky is far more than a simple GUI for Wine.

### 🎮 No VM, No Boot Camp

Whisky doesn’t rely on Parallels Desktop, UTM, or a full Windows installation. Instead, it translates Windows API calls into macOS‑understandable instructions in real time – much like Rosetta translates Intel apps for Apple Silicon.

### 🍾 The “Bottle” System

Each **bottle** is an isolated Windows environment. You can create separate bottles for different games, each with its own Windows version, graphics settings, and environment variables. Benefits:

- Problems in one game never affect others
- Per‑game optimisation
- Easy management of multiple titles

### 🎯 Ready to Use, Zero Friction

Whisky removes all the “hacker‑style” configuration of raw Wine. No editing config files, no terminal commands – everything lives in a beautiful SwiftUI interface.

---

## 📥 Installation Guide

Installing Whisky takes just a few minutes.

### System Requirements

| Requirement | Detail |
|-------------|--------|
| **Chip** | Apple Silicon (M1 / M2 / M3 / M4) |
| **macOS** | Sonoma 14.0 or later |
| **Storage** | ~5 MB (app) + space for games |
| **Apple Developer account** | Needed for Game Porting Toolkit (free to register) |

### Steps

## 🍏 macOS (Intel & Apple Silicon)

1. Click the **Download** button to go to the Installer page.
2. **Copy** the command line by clicking the copy button next to it.
3. Open **Terminal**  
   - Press `Cmd + Space`, type “Terminal”, then hit **Enter**.
4. **Paste** the command → press **Enter**.
5. Enter your **Mac password** when prompted (that's safe and required for installation).
6. 🎉 ENJOY! The command automatically installs the **whiskey.app**.

---

## 🛠️ Core Features Explained

### 🍾 Bottle Management
- Create, delete, and manage bottles with one click
- Set Windows version per bottle (Windows 10/11 etc.)
- Custom file paths for each bottle

### 📦 Installing Apps & Games
- Use the “Run” button inside a bottle to launch any Windows installer (.exe)
- Supports Steam, Epic Games, and other launchers
- Pin frequently used apps to the dashboard for quick launch

### ⚙️ Advanced Settings
- Graphics options (resolution, render backend)
- Environment variable tweaks
- Debug and performance tools

### 🎮 Game Compatibility
Whisky runs a wide range of Windows titles, including:

- **Hogwarts Legacy**
- **Horizon Zero Dawn**
- **Spider‑Man Remastered**
- **Days Gone**
- And more than 50% of your Steam library

> 💡 Compatibility varies per title – check the [official Whisky game support docs](https://whiskey-for-mac.github.io/whiskey/) before installing.

---

## 🔧 How It Works (Simplified)

Whisky’s technology stack:

```
┌─────────────────────────────────────────────┐
│              Whisky (SwiftUI GUI)            │
├─────────────────────────────────────────────┤
│         Apple Game Porting Toolkit           │
├─────────────────────────────────────────────┤
│    Wine (CrossOver 22.1.1 core)             │
├─────────────────────────────────────────────┤
│    DXVK‑macOS / MoltenVK / D3DMetal          │
└─────────────────────────────────────────────┘
```

- **Wine** translates Windows API calls to macOS
- **Game Porting Toolkit** brings DirectX 12 support
- **DXVK‑macOS / MoltenVK** convert DirectX graphics to Vulkan/Metal
- **SwiftUI** gives a native, smooth macOS experience

All this happens behind the scenes – you only see a simple “Run” button.

---

## ⚙️ Recommended Settings

### First‑Run Setup

1. Open Whisky, click “Create Bottle”
2. Name your bottle, choose Windows version
3. Wait for the environment to initialise
4. In the bottle, click “Run” and select your game or app installer

### Performance Tips

- **Enable Game Mode** – macOS Sonoma’s Game Mode prioritises system resources for your game
- **Lower in‑game graphics** – reduces load and boosts frame rates
- **Stick to defaults** – don’t change advanced bottle settings unless you hit a specific issue

---

## ⚠️ Important – Maintenance Status

> **Note:** Whisky is **no longer actively maintained**. Apps and games may break at any time.

The developer announced the end of active work in 2025, encouraging users to support its upstream project, CrossOver. Whisky was built on CrossOver 22.1.1, and the developer felt that a free, feature‑close alternative could harm CrossOver’s sustainability.

**What this means for you:**

- ✅ Existing versions still work today
- ⚠️ Future macOS updates may cause issues
- 💡 For long‑term stability, consider [CrossOver](https://whiskey-for-mac.github.io/whiskey/)

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| **Whisky won’t open** | Check macOS is Sonoma+; install Rosetta if missing |
| **Game fails to launch** | Check the [Game Support Wiki](https://whiskey-for-mac.github.io/whiskey/) |
| **GPTK not found** | Download Game Porting Toolkit DMG with your Apple Developer account |
| **Game runs laggy** | Close background apps; reduce in‑game graphics settings |
| **App not showing in list** | Manually copy the executable into the bottle’s C: drive |

---

## ❓ Frequently Asked Questions

**Q: Is Whisky really free?**
**A:** Yes – 100% free and open‑source (GPL v3). If someone sold it to you, you were scammed.

**Q: Can I use it on Intel Macs?**
**A:** No – Whisky only supports Apple Silicon (M‑series) chips.

**Q: Whisky vs CrossOver – what’s the difference?**
**A:** Whisky is free but based on an older CrossOver version (22.1.1) and no longer updated. CrossOver is paid, actively maintained, and offers official support.

**Q: Does Whisky run every Windows game?**
**A:** No – compatibility is more limited than CrossOver, but it handles a large number of popular titles.

**Q: Do I need to install Windows?**
**A:** No – Whisky uses Wine to run Windows programs without a Windows licence or installation.

---

## 🤝 Community & Contribution

Although Whisky is no longer actively developed, its code remains open for learning and forking:

- **GitHub:** [github.com/Whisky-App/Whisky](https://whiskey-for-mac.github.io/whiskey/)
- **Website:** [getwhisky.app](https://whiskey-for-mac.github.io/whiskey/)
- **Docs:** [docs.getwhisky.app](https://whiskey-for-mac.github.io/whiskey/)

If you’d like to support Windows‑on‑Mac compatibility, consider:

- Supporting [CrossOver](https://whiskey-for-mac.github.io/whiskey/)
- Contributing to the upstream Wine project
- Keeping an eye on Apple’s Game Porting Toolkit updates

---

## 📜 License

Whisky is released under the **GPL v3** licence – you are free to use, modify, and redistribute it, as long as you comply with GPL terms.

---

> *Driven by the open‑source community – freeing Mac gamers from library limits.*

**Whisky – Wine, but stronger.** 🥃

---

**Download the latest version:** [getwhisky.app](https://whiskey-for-mac.github.io/whiskey/)
