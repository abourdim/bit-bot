# 🤖 Talking Robot V2

## Comprehensive Upgrade with 20 Enhancements!

A completely redesigned AI-powered robot companion for kids that connects to a BBC micro:bit via Bluetooth.

---

## ✨ What's New in V2

### 🎨 Design & UI Enhancements
1. **Animated Robot Avatar** - Expressive SVG robot face with glowing eyes, animated antenna, and state-based effects
2. **Chat Bubble Improvements** - Typing indicators, timestamps, smooth animations, and auto-scroll
3. **Dark/Light Theme Toggle** - Kid-friendly light theme by default with optional dark mode
4. **Mobile-First Redesign** - Thumb-friendly navigation, responsive layout, safe area support
5. **Micro:bit Mirror Widget** - Real-time 5x5 LED display showing current micro:bit face

### ⚡ New Features
6. **Conversation History** - Chat sessions saved locally (up to 20 sessions)
7. **Custom Robot Personality** - Name your robot + choose personality (Playful, Helpful, Pirate, Space Explorer)
8. **Voice Selection Preview** - "Test" button to hear voices before selecting
9. **Command Cheat Sheet Modal** - Click-to-try commands organized by category
10. **Parental Controls** - PIN-protected settings with AI restriction and usage timer options
11. **Offline Phrase Packs** - Expanded demo mode responses for multiple themes
12. **QR Code Pairing** - Easy link to MakeCode project for micro:bit setup

### 🐛 Bug Fixes & Quality
13. **Speech Recognition Reliability** - Visual feedback for no-speech detection + retry button
14. **API Key Validation** - Test button with clear success/error states
15. **Bluetooth Auto-Reconnect** - Automatic reconnection when page regains focus
16. **Rate Limit Handling** - Visual countdown, automatic fallback to demo mode

### 🔧 Code & Architecture
17. **Modular CSS** - CSS custom properties, organized sections, theme support
18. **Clean JavaScript** - Single state object, clear function organization
19. **PWA Ready** - Service worker hooks, manifest support, installable
20. **Accessibility (a11y)** - Skip links, ARIA labels, keyboard navigation, reduced motion support

---

## 🚀 Quick Start

### 1. Open the App
Open `index.html` in **Chrome** or **Edge** (required for Web Bluetooth & Speech APIs)

### 2. Connect Your Micro:bit
1. Click the **Disconnected** badge or go to Settings
2. Select your micro:bit from the Bluetooth popup
3. Wait for the happy face on your micro:bit! 😊

### 3. Start Talking!
- 🎤 **Voice**: Click the big blue mic button
- ⌨️ **Type**: Use the text input and press Enter

---

## 🎮 Supported Commands

| Category | Commands |
|----------|----------|
| **Emotions** | happy, sad, angry, surprised, love, sleepy, silly, crazy, wink, cool, wow, haha |
| **Animals** | cat, dog, duck, cow, pig, frog, monkey |
| **Actions** | wave, dance, spin, jump, blink, wiggle, bounce, nod |
| **Sounds** | fart, burp, beep, laugh, horn |
| **Party** | party, disco, rainbow, fireworks, confetti, yay |
| **Powers** | laser, freeze, fire, magic, rocket, explode |

Click 📋 to see all commands and try them!

---

## ⚙️ Settings

### 🌍 Languages
- 🇬🇧 English
- 🇫🇷 Français  
- 🇸🇦 العربية (RTL supported)

### 🧠 AI Modes
| Mode | Description | API Key |
|------|-------------|---------|
| 🎮 Demo | Offline preset responses | None |
| ⚡ Groq | Fast Llama 3.1 AI | Free at console.groq.com |
| 💎 Gemini | Google's AI | Free at aistudio.google.com |

### 🤖 Personalities
- **Playful** - Silly & fun (default)
- **Helpful** - Smart & kind
- **Pirate** - Arrr! 🏴‍☠️
- **Space Explorer** - Cosmic adventures! 🚀

---

## 📱 Mobile Support

The app is fully responsive:
- Collapsible navigation
- Touch-friendly buttons
- Safe area padding for notched phones
- PWA installable (add to home screen)

---

## 🔒 Parental Controls

In Settings > Parental Controls:
- Set a 4-digit PIN
- Restrict to Demo mode only
- Enable usage timer (30 min)

---

## 📁 Project Files

| File | Description |
|------|-------------|
| `index.html` | Complete app (open this!) |
| `microbit_makecode.js` | Code for your micro:bit |
| `wdi.svg` | Logo graphic |
| `README.md` | This file |

---

## 🛡️ Privacy & Safety

- **Demo Mode**: Works completely offline
- **AI Modes**: Messages sent to Groq/Google servers
- **Data Storage**: Settings saved locally in browser only
- **No Tracking**: No analytics or user data collection

---

## 🔧 Technical Details

### Browser Requirements
- Chrome 70+ or Edge 79+ (Web Bluetooth)
- Microphone permission (Speech Recognition)
- Speakers (Text-to-Speech)

### APIs Used
- Web Bluetooth API
- Web Speech API (Recognition + Synthesis)
- Local Storage API
- Groq API (Llama 3.1)
- Google Gemini API

---

## 📝 Changelog

### V2.0.0
- Complete UI redesign with modern aesthetics
- Added 20 new features and improvements
- Improved accessibility and mobile support
- Better error handling and user feedback

---

## 🌟 Credits

Made with ❤️ for kids who love robots!

---

**Have fun with your Talking Robot! 🤖💬**
