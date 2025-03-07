# **MedicoMate: Nurturing Health, One Click Away**

**Compassionate care, innovative solutions - MedicoMate, your partner in wellness.**

![MedicoMate Banner](assets/images/Screenshot%202025-03-02%20165806.png)

## **🚀 Overview**

MedicoMate is an **AI-driven healthcare platform** offering:  
✅ **Real-time video consultations** with doctors 📞  
✅ **AI-powered disease prediction** 🏥  
✅ **Personalized diet & fitness recommendations** 🍏💪  
✅ **Mental health support (EmoBot, Online Psychiatrist)** 🧠  
✅ **Digital medicine marketplace (MedicoMart)** 💊  
✅ **Health insurance prediction** 📜

Built using **React (frontend), Node.js (backend), and Flask (AI models)**, MedicoMate integrates **Socket.io** for seamless **real-time video calls** and uses **FAISS vector search for efficient medical data retrieval.**

---

## **🔧 Tech Stack**

### **Frontend:**

- **React.js** – UI/UX design, authentication, and dashboard.
- **Redux Toolkit** – State management.
- **Tailwind CSS** – Responsive and modern styling.

### **Backend:**

- **Node.js + Express.js** – API development, authentication, and database handling.
- **MongoDB + Firebase Auth** – User authentication & database.
- **Socket.io** – Real-time video consultations.

### **AI Models (Flask-powered)**

- **Disease Predictor (LSTM + XGBoost)** – Predicts potential health risks based on symptoms.
- **Diet & Fitness Recommender (Clustering + Regression)** – Personalized nutrition & workout suggestions.
- **Medicine Predictor (FAISS + Vector Search + BERT embeddings)** – Retrieves optimal medication suggestions.
- **EmoBot (Sentiment Analysis + LLaMA-based NLP Model)** – AI-powered mental health chatbot.

---

## **📺 Features & Screenshots**

### **1️⃣ Expert Healthcare, Anywhere**

![Video Consultation](assets/images/Screenshot%202025-03-02%20165838.png)  
🔹 **Connect with doctors instantly via MedicoMate’s online video consultation** using **Socket.io** for real-time communication.

### **2️⃣ AI-Powered Disease Predictor**

![Disease Predictor](assets/images/Screenshot%202025-03-02%20165950.png)  
🔹 **Uses LSTM & XGBoost** to analyze health data and provide **personalized disease risk insights**.

### **3️⃣ AI-Driven Fitness & Nutrition Plans**

![Custom Fitness Plans](assets/images/Screenshot%202025-03-02%20170109.png)  
🔹 **Clustering & Regression models** generate customized **diet & exercise plans**.

### **4️⃣ FAISS-Based Medicine Predictor**

![FAISS Search](assets/images/Screenshot%202025-03-02%20170137.png)  
🔹 **Uses FAISS (Facebook AI Similarity Search) & BERT embeddings** to retrieve the best medicine recommendations based on patient history.

### **5️⃣ MedicoMart – Healthcare Marketplace**

![MedicoMart](assets/images/Screenshot%202025-03-02%20170359.png)  
🔹 **One-stop shop** for **prescriptions, health supplements, and insurance plans.**

### **6️⃣ EmoBot – AI-Powered Mental Health Chatbot**

![EmoBot](assets/images/Screenshot%202025-03-02%20170412.png)  
🔹 **Sentiment analysis-powered chatbot** that recommends **stress relief solutions, emotional support, and music therapy**.

### **7️⃣ Health Insurance Predictor**

![Health Insurance Predictor](assets/images/Screenshot%202025-03-02%20170439.png)  
🔹 **Uses predictive analytics to suggest the best insurance options based on health records**.

---

## **📡 AI Implementation – FAISS & Vector Search**

For **fast & efficient retrieval** of medical data, MedicoMate utilizes:

- **FAISS (Facebook AI Similarity Search)** for **high-speed vector-based searching**.
- **BERT embeddings** to convert **symptoms and medicine names into dense vectors**.
- **Vector Search**: When a user inputs symptoms, FAISS efficiently finds **similar past cases & best-matching treatments.**

This significantly **reduces response time** and provides **highly accurate AI-driven treatment suggestions.**

---

## **🚀 Installation & Setup**

### ** Clone the Repository**

```bash
git clone https://github.com/yourusername/MedicoMate.git
cd MedicoMate
```

### **Install Frontend Dependencies**

```bash
cd frontend
npm install
npm start

```

Install Backend (Node.js) Dependencies

```bash
cd backend
npm install
node server.js
```

4️⃣ Run AI Models (Flask)

```bash
cd ai_models
pip install -r requirements.txt
python app.py
```

Access the App
Open http://localhost:3000 in your browser.

Future Enhancements
🔹 Integrate GPT-powered Medical Chat Assistant 🤖
🔹 Enhance AI-driven personalized health coaching 🏋️
🔹 Improve real-time sentiment analysis for mental health chatbot 🧠
