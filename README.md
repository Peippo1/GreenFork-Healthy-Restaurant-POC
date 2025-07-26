
# 🥗 GreenFork — Healthy Restaurant Web App

<!-- Replace `your-workflow.yml` with your actual workflow filename -->
[![Build](https://github.com/Peippo1/GreenFork-Healthy-Restaurant-POC/actions/workflows/your-workflow.yml/badge.svg)](https://github.com/Peippo1/GreenFork-Healthy-Restaurant-POC/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![React](https://img.shields.io/badge/frontend-react-blue)
![FastAPI](https://img.shields.io/badge/backend-fastapi-green)
![Tailwind](https://img.shields.io/badge/css-tailwindcss-38b2ac)

GreenFork is a responsive full-stack proof-of-concept web app for a healthy food restaurant. It features a clean frontend built with Vite + React + Tailwind CSS, and a FastAPI backend for handling contact form submissions stored securely in a SQLite database.

## ✨ Features

- Hero section with animated intro
- Responsive menu and food gallery
- Contact form that posts to a FastAPI backend
- Anonymized data storage
- Clean, mobile-friendly design

## 🛠 Tech Stack

| Frontend        | Backend       | Styling       | Tooling       |
|----------------|---------------|---------------|---------------|
| React (Vite)   | FastAPI       | Tailwind CSS  | SQLite        |
| React Router   | Uvicorn       | Unsplash imgs | Python 3.12+  |

## 🚀 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/Peippo1/GreenFork-Healthy-Restaurant-POC.git
cd GreenFork-Healthy-Restaurant-POC
```

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Start the backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt  # or manually install
uvicorn main:app --reload
```

The backend will be available at `http://localhost:8000` and the frontend at `http://localhost:5173`.

## 📦 API Endpoint

- `POST /api/contact`: Accepts `{ name, email, message }` and stores anonymized entry

## 📸 Screenshots

_Add screenshots of the homepage, menu, and contact form here._

## 🙌 Credits

- Food & farm imagery by [Unsplash](https://unsplash.com)
- Created by Tim Finch for a POC project

---
🥬 Built with love for fresh, seasonal food 🌾

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
