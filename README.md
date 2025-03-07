# QR-based Check-In System

## 🚀 Overview

The **QR-based Check-In System** is a web and mobile application that allows users to check into locations or events using QR codes. It consists of three primary applications:

1. **Backend** - Manages authentication, QR code generation, and database storage.
2. **Partner App** - Enables partners to generate and manage QR codes for their locations.
3. **User App** - Allows users to scan QR codes, submit their details, and check in at locations.

The system leverages the **MERN** (MongoDB, Express.js, React, Node.js) stack for a complete full-stack solution with **JWT** for authentication and **QR code** generation and scanning capabilities.

### **Project Features**:

- **QR code generation** for partners to display at their locations.
- **QR code scanning** for users to check into events or locations.
- **JWT-based authentication** for secure login/signup.
- **Partner app** to manage location details and check-in approvals.
- **User app** for scanning QR codes and submitting check-in information.

---

## 📁 Folder Structure

The project is divided into three parts:

### **1. Backend**

Handles API endpoints for authentication, QR code generation, and data storage.

### **2. Partner App**

Provides the frontend for partners to create and manage QR codes for their locations.

### **3. User App**

Provides the frontend for users to scan QR codes, sign up, and submit their check-in information.

---

## 📷 Screenshots

Here are the screenshots of different parts of the project for better understanding:

### **1. Partner App - Dashboard View**

This screenshot shows the dashboard where partners can view and generate QR codes for their locations. They can input their business details such as name, location, and contact information.

![Partner App - Dashboard](./screenshots/Screenshot_2025-03-07_184059.png)

### **2. Partner App - QR Code Generation**

In this view, partners can generate QR codes for their location. After filling in the form, they click "Generate QR" to produce a unique QR code for check-ins.

![Partner App - QR Code Generation](./screenshots/Screenshot_2025-03-07_184318.png)

### **3. User App - Login Page**

The login page allows users to authenticate via email or Google OAuth, with simple options to sign up or log in. The user interface is clean and responsive.

![User App - Login Page](./screenshots/Screenshot_2025-03-07_184544.png)

### **4. User App - QR Code Scanning**

This screenshot shows the screen where users scan QR codes. Upon scanning a code, users are redirected to the check-in submission page.

![User App - QR Code Scanning](./screenshots/Screenshot_2025-03-07_184135.png)

### **5. User App - Check-In Form**

After scanning the QR code, users are shown this form to submit their personal details and confirm check-in information.

![User App - Check-In Form](./screenshots/Screenshot_2025-03-07_184330.png)

### **6. User App - Profile Page**

Users can modify their details and view their check-in history directly from their profile page.

![User App - Profile Page](./screenshots/Screenshot_2025-03-07_184555.png)

### **7. Partner App - Submitted User Details**

Partners can view the submitted details from users who scanned their QR codes, allowing them to approve or reject check-ins.

![Partner App - Submitted User Details](./screenshots/Screenshot_2025-03-07_184211.png)

### **8. Admin Dashboard**

The Admin dashboard enables the viewing of all user check-ins and status updates. Admins can approve or reject check-ins.

![Admin Dashboard](./screenshots/Screenshot_2025-03-07_184340.png)

### **9. Partner App - Location Management**

Partners can manage their locations, edit details, and update QR code generation for future check-ins.

![Partner App - Location Management](./screenshots/Screenshot_2025-03-07_184605.png)

### **10. User App - QR Code Scanning with Success**

This is an example of a successful QR code scan. Once the scan is completed, the user is automatically redirected to submit their information.

![User App - Successful QR Code Scan](./screenshots/Screenshot_2025-03-07_184221.png)

### **11. User App - History Page**

Users can access their check-in history and see all locations where they have checked in previously.

![User App - History Page](./screenshots/Screenshot_2025-03-07_184350.png)

### **12. User App - Check-In Confirmation**

This screenshot illustrates the confirmation screen where users finalize their check-in after entering details.

![User App - Check-In Confirmation](./screenshots/Screenshot_2025-03-07_184800.png)

### **13. User App - All Partners Page**

Users can view a list of all available partners for checking in. This list displays partner names and locations.

![User App - All Partners Page](./screenshots/Screenshot_2025-03-07_184246.png)

### **14. Admin Dashboard - Check-In Management**

Admins can manage user check-ins from this interface, approving or rejecting based on the details submitted.

![Admin Dashboard - Check-In Management](./screenshots/Screenshot_2025-03-07_184357.png)

### **15. Admin Dashboard - Detailed User View**

Admins can view detailed information about users who scanned their QR codes. This includes timestamps and approval status.

![Admin Dashboard - Detailed User View](./screenshots/Screenshot_2025-03-07_184956.png)

### **16. User App - Confirmation of Successful Check-In**

This is the success confirmation page for users once their check-in has been approved.

![User App - Confirmation of Check-In](./screenshots/Screenshot_2025-03-07_184301.png)

---

## 🛠️ Features

### **1️⃣ Backend (Node.js + Express)**

- **Authentication** via JWT.
- **API Development** to handle QR code scanning and check-ins.
- **MongoDB** for storing user data and check-ins.
- **QR Code Generation** for partner locations.

### **2️⃣ Partner App**

- **QR Code Generation** for partner locations.
- **Form** to input partner details like name, email, location.
- **Approval Management** for users who scanned their QR codes.

### **3️⃣ User App**

- **QR Code Scanning** for check-ins.
- **Sign-Up/Login** via email and Google OAuth.
- **Check-In Form** to submit details after scanning QR codes.

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KumarRoushan9234/final_qrLoginx.git
cd final_qrLoginx
```
