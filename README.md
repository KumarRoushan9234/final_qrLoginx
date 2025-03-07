# QR-based Check-In System

## 🚀 Overview

The **QR-based Check-In System** allows users to check into various events and locations via QR code scanning. It includes three applications:

1. **Backend** - Handles API development, authentication, and database management.
2. **Partner App** - Allows partners to generate and manage QR codes for their locations.
3. **User App** - Allows users to scan QR codes, sign up/login, and submit their check-in details.

Built using **MERN** (MongoDB, Express.js, React, Node.js) stack, the system uses **JWT** for authentication and **QR code** generation and scanning.

## 🔧 Tech Stack

### **Backend** (Node.js + Express.js)

- **Node.js** + **Express.js** – API development, user authentication, database management.
- **MongoDB** – Database for storing user and partner data.
- **Firebase Auth** – Authentication management.
- **JWT** – Token-based authentication.
- **Multer** – File handling.
- **Qrcode** – For QR code generation.

### **Partner App** (Frontend for Partner)

- **React.js** – Frontend for partner management.
- **Tailwind CSS** – For responsive UI.
- **Axios** – API requests.
- **Qrcode.react** – For QR code generation.
- **Framer Motion** – Animations for smooth UI interactions.

### **User App** (Frontend for Users)

- **React.js** – Frontend for user management.
- **Tailwind CSS** – For responsive UI.
- **Qrcode.react** – For QR code generation.
- **Html5-qrcode** – For QR code scanning.
- **Zustand** – For state management.
- **JWT-decode** – For decoding JWT tokens.

---

## 📁 Folder Structure

The project is divided into three main folders:

### **1. Backend**

This folder contains the backend code for handling authentication, QR code generation, and database management.

**Dependencies**:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "dependencies": {
    "bcryptjs": "^3.0.2",
    "body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.12.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "qrcode": "^1.5.4"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.0.9"
  }
}
2. Partner App
This is the frontend application for partners to create and manage QR codes for their locations.

Dependencies:

json
Copy
Edit
{
  "name": "partner-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@headlessui/react": "^2.2.0",
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/postcss": "^4.0.9",
    "@tailwindcss/vite": "^4.0.9",
    "axios": "^1.8.1",
    "framer-motion": "^12.4.10",
    "html5-qrcode": "^2.3.8",
    "jsqr": "^1.4.0",
    "jwt-decode": "^4.0.0",
    "qrcode.react": "^4.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.2.0",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.0.9",
    "vite": "^6.2.0"
  }
}
3. User App
This is the frontend application for users to scan QR codes, sign up, log in, and submit their details.

Dependencies:

json
Copy
Edit
{
  "name": "user-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@headlessui/react": "^2.2.0",
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/postcss": "^4.0.9",
    "@tailwindcss/vite": "^4.0.9",
    "axios": "^1.8.1",
    "framer-motion": "^12.4.10",
    "html5-qrcode": "^2.3.8",
    "jsqr": "^1.4.0",
    "jwt-decode": "^4.0.0",
    "qrcode.react": "^4.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.2.0",
    "typewriter-effect": "^2.21.0",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.0.9",
    "vite": "^6.2.0"
  }
}
🚀 Installation & Setup
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/KumarRoushan9234/final_qrLoginx.git
cd final_qrLoginx
2. Install Backend Dependencies
bash
Copy
Edit
cd backend
npm install
npm start
3. Install Partner App (Frontend for Partners) Dependencies
bash
Copy
Edit
cd partner
npm install
npm run dev
4. Install User App (Frontend for Users) Dependencies
bash
Copy
Edit
cd user-app
npm install
npm run dev
🛠️ Features
1️⃣ Backend (Node.js + Express)
Authentication using JWT.
API development to handle QR code scanning and check-in.
MongoDB for storing user data and check-in records.
QR code generation for partner locations.
2️⃣ Partner App (Frontend for Partner)
QR code generation for partner locations.
Form to input partner details like name, email, location.
View check-ins of users at their locations.
3️⃣ User App (Frontend for Users)
Scan QR code to check in.
Sign-up/login system using JWT.
Submit details for check-in at partner locations.
```
