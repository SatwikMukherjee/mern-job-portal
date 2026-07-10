# 🚀 MERN Job Portal

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

A Full Stack **Placement Portal** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The portal provides separate dashboards for **Students** and **Admins**, allowing students to apply for jobs while administrators manage companies, job postings, and applications.

---

# ✨ Features

## 👨‍🎓 Student Module

- Student Registration & Login
- JWT Authentication
- Student Dashboard
- View Available Jobs
- View Companies
- Apply for Jobs
- Track Application Status
- Logout

---

## 👨‍💼 Admin Module

- Secure Admin Login
- Admin Dashboard
- Add Companies
- Add Job Openings
- Manage Student Applications
- Approve Applications
- Reject Applications

---

## 🔒 Authentication & Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Access Control (Student & Admin)

---

# 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js (Create React App), Bootstrap 5, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| Routing | React Router DOM |

---

# 📂 Project Structure

```text
mern-job-portal/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   ├── server.js
│   └── package.json
│
├── screenshots/
│
├── README.md
│
└── .gitignore
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/SatwikMukherjee/mern-job-portal.git
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 📸 Project Screenshots

## 🔐 Login Page

![Login](screenshots/login.png)

---

## 👨‍🎓 Student Dashboard

![Student Dashboard](screenshots/student-dashboard.png)

---

## 👨‍💼 Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

## 💼 Jobs Page

![Jobs](screenshots/jobs.png)

---

## 🏢 Companies Page

![Companies](screenshots/companies.png)

---

## 📄 My Applications

![Applications](screenshots/applications.png)

---

# 🔄 Project Workflow

```text
Student
   │
   ▼
Register / Login
   │
   ▼
Browse Companies & Jobs
   │
   ▼
Apply for Job
   │
   ▼
Application Stored in MongoDB
   │
   ▼
Admin Dashboard
   │
   ▼
Approve / Reject Application
   │
   ▼
Student Views Updated Status
```

---

# 📖 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register Student |
| POST | `/api/auth/login` | Login User |

---

## Student

| Method | Endpoint |
|---------|----------|
| GET | `/api/student/profile` |
| PUT | `/api/student/profile` |

---

## Jobs

| Method | Endpoint |
|---------|----------|
| GET | `/api/jobs` |
| POST | `/api/jobs` |

---

## Companies

| Method | Endpoint |
|---------|----------|
| GET | `/api/company` |
| POST | `/api/company` |

---

## Applications

| Method | Endpoint |
|---------|----------|
| POST | `/api/application` |
| GET | `/api/application/my` |
| GET | `/api/admin/applications` |
| PUT | `/api/admin/application/:id` |

---

# 🚀 Future Enhancements

- Resume Upload
- Company Logo Upload
- Email Notifications
- Forgot Password
- Search & Filter Jobs
- Pagination
- Admin Analytics Dashboard
- Student Profile Photo
- Interview Scheduling
- Placement Statistics
- Live Notifications

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a Pull Request.

---

# 💻 Author

**Satwik Mukherjee**

- GitHub: https://github.com/SatwikMukherjee

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

---

# 📜 License

This project is licensed under the **MIT License**.
