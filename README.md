🔐 Environment Variable Setup
This project uses environment variables to securely manage sensitive configuration such as database connections and Stripe API keys.
Secrets are never committed to GitHub.

📁 Backend Environment Variables
Create a .env file inside the server/ folder.
✅ Path
Hotel-Room-Booking/
└── server/
    ├── .env
    ├── server.js
    ├── db.js
    └── package.json


✅ server/.env Example
Plain Textenv isn’t fully supported. Syntax highlighting is based on Plain Text.MONGO_URI=mongodb://127.0.0.1:27017/HotelroomsSTRIPE_SECRET_KEY=sk_test_your_stripe_test_key_hereShow more lines
🔒 Important

Use Stripe Test Secret Key (starts with sk_test_)
Never use real production keys
.env files are ignored via .gitignore


⚙️ How Variables Are Used in Code
In backend files such as server.js or routes:
JavaScriptrequire("dotenv").config();const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);Show more lines
✅ This ensures:

Keys are loaded securely at runtime
No secrets are hard‑coded


🚫 Files Excluded from GitHub
The .env file is intentionally excluded to protect secrets:
.ignore.envserver/.envclient/.envShow more lines
✅ This follows GitHub security and industry best practices.

💳 Stripe Test Mode (For Payments)
This project uses Stripe Test Mode.
Use the following test card for demo payments:
Card Number: 4242 4242 4242 4242
Expiry Date: Any future date (e.g. 12/30)
CVC: 123
ZIP: 12345

✅ No real money is charged
✅ Safe for development and demo

🧪 Running the Project Locally
Backend
Shellcd servernpm installnpm startShow more lines
Frontend
Shellcd clientnpm installnpm startShow more lines

✅ Summary

✔ Environment variables secure sensitive data
✔ .env is excluded from GitHub
✔ Stripe runs in test mode only
✔ Project follows modern security practices
