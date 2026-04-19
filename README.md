# 🏨 Hotel Room Booking Application (MERN Stack)

A full‑stack **Hotel Room Booking Application** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Stripe payment integration (Test Mode)**.

This project demonstrates real‑world concepts such as authentication, date‑based room filtering, bookings, payments, admin management, and secure handling of environment variables.

---

## 🚀 Features

- User registration & login
- Browse hotels by **location**, **room type**, and **date**
- Real‑time room availability
- Secure room booking
- Stripe payment integration (Test Mode)
- User booking history
- Admin dashboard
  - Add new rooms
  - View all bookings
  - Manage users
- Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- Bootstrap
- Stripe Checkout

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe API

---

## 📂 Project Structure
hotel-room-booking-mern/
├── client/                # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                # Express backend
│   ├── routes/
│   ├── models/
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md

---

## 🔐 Environment Variable Setup

Sensitive information such as database URLs and Stripe API keys are managed using **environment variables** to ensure security.

### ✅ Create `.env` file

Create a `.env` file **inside the `server/` folder**:


server/.env

### ✅ Add the following variables

```env
MONGO_URI=mongodb://127.0.0.1:27017/Hotelrooms
STRIPE_SECRET_KEY=sk_test_your_stripe_test_key_here

✅ Use Stripe TEST secret keys only
✅ Do NOT commit .env files to GitHub
✅ .env is ignored using .gitignore

⚙️ Using Environment Variables in Code
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

This prevents exposing secrets in the repository and follows industry standards.
💳 Stripe Payment (Test Mode)
This project uses Stripe Test Mode for payments.
✅ Test Card Details
Card Number : 4242 4242 4242 4242
Expiry Date : Any future date (e.g. 12/30)
CVC         : 123
ZIP Code    : 12345

✅ No real money is charged
✅ Safe for development & demo purposes

▶️ Run the Project Locally
1️⃣ Clone the repository
git clone https://github.com/Dineshkumar0186/hotel-room-booking-mern.gitgit clone https://github.com/Dineshk-booking-mern
2️⃣ Start Backend
cd server
npm install
npm start
Backend runs at:
http://localhost:5000
3️⃣ Start Frontend

cd client
npm install
npm start

Frontend runs at:
http://localhost:3000

✅ GitHub Security Practices Followed

Secrets removed from source code
.env files excluded using .gitignore
GitHub Push Protection enabled
No API keys committed publicly


🔮 Future Enhancements

Password hashing with bcrypt
Role‑based access control
Booking cancellation & refunds
Stripe Payment Intents (production‑ready)
Frontend & backend deployment


👨‍💻 Author
Dinesh Kumar
GitHub: https://github.com/Dineshkumar0186
