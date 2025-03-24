# React + Vite

🚀 Space Travel Planner

An interactive React app to simulate space mission planning — build spacecraft, assign them to planets, and track active missions. Built using React, React Router, and Material UI.

---

## 🛠 Features

- 🛠 Build spacecraft with name, capacity, description, and image
- 🌍 Assign spacecraft to specific planets via Mission Control
- 📋 View current assignments on the Planets page
- ❌ Unassign or cancel missions per planet
- 💾 Persistent state via localStorage

---

## 🧑‍💻 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm run dev
```

Then open your browser to:  
👉 `http://localhost:5173`

---

## ⚙️ Tech Stack

- React (via Vite)
- React Router
- Material UI (MUI)
- localStorage for state persistence

---

## 📁 Folder Structure

```
src/
  ├── assets/              # Spacecraft images and visuals
  ├── components/          # Reusable UI components (FormFields, VehiclePreview, etc.)
  ├── data/                # Planet data (JSON)
  ├── pages/               # Main views: Planets, PlanetDetail, Construction
  ├── archived/            # Unused components kept for future reference
```

---
## 🤔 Why No API or Backend?

This project was intentionally built as a front-end-only React app.

- No Express.js or MongoDB
- No API call needed

This kept the focus on:
- Component structure and layout
- State handling with React hooks and localStorage
- Building a fully interactive UI without external dependencies

## ✨ Author

Created by Mike Thompson as part of a personal React training project.  
Focus: Front-end component architecture, routing, and state management using browser APIs.
_This project was submitted via pull request from dev to main at 8:24 ib 3/24/2025