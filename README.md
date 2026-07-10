# 🚀 MERN Job Portal

A Full Stack **Placement Portal** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The portal provides separate dashboards for **Students** and **Admins**, allowing students to apply for jobs and administrators to manage companies, job postings, and applications.

---

## 📌 Features

### 👨‍🎓 Student Module
- Student Registration & Login
- JWT Authentication
- Student Dashboard
- View Available Jobs
- View Companies
- Apply for Jobs
- Track Application Status
- Logout

### 👨‍💼 Admin Module
- Secure Admin Login
- Admin Dashboard
- Add Companies
- Add Job Openings
- Manage Student Applications
- Approve / Reject Applications

### 🔒 Authentication & Security
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Access Control (Admin & Student)

---

## 🛠 Tech Stack

### Frontend
- React.js (Create React App)
- React Router DOM
- Axios
- Bootstrap 5

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt

---

## 📂 Project Structure

```
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
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/SatwikMukherjee/mern-job-portal.git
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

### Student Dashboard

![Student Dashboard](screenshots/student-dashboard.png)

### Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

### Jobs Page

![Jobs](screenshots/jobs.png)

### Companies Page

![Companies](screenshots/companies.png)

### My Applications

![Applications](screenshots/applications.png)

---

## 🚀 Future Enhancements

- Resume Upload
- Email Notifications
- Company Logo Upload
- Search & Filter Jobs
- Pagination
- Admin Analytics Dashboard
- Student Profile Photo
- Forgot Password
- Interview Scheduling
- Placement Statistics

---

## 📖 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register Student |
| POST | `/api/auth/login` | Login User |

### Student

| Method | Endpoint |
|---------|----------|
| GET | `/api/student/profile` |
| PUT | `/api/student/profile` |

### Jobs

| Method | Endpoint |
|---------|----------|
| GET | `/api/jobs` |
| POST | `/api/jobs` |

### Companies

| Method | Endpoint |
|---------|----------|
| GET | `/api/company` |
| POST | `/api/company` |

### Applications

| Method | Endpoint |
|---------|----------|
| POST | `/api/application` |
| GET | `/api/application/my` |
| GET | `/api/admin/applications` |
| PUT | `/api/admin/application/:id` |

---

## 💻 Author

**Satwik Mukherjee**

- GitHub: https://github.com/SatwikMukherjee

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

## 📜 License

This project is licensed under the MIT License.
