# 🚌 Smart City Transport Tracker
 
A full-stack web application for tracking Hyderabad public transport routes, built with Java Spring Boot and React.js. Live and deployed on Railway.
 
🌐 **Live Demo:** [transport-tracker-frontend-production.up.railway.app](https://transport-tracker-frontend-production.up.railway.app)
 
🔗 **Live API:** [transport-tracker-production.up.railway.app](https://transport-tracker-production.up.railway.app/api/routes)
 
---
 
## 🛠️ Tech Stack
 
| Layer | Technology |
|-------|-----------|
| Language | Java 17 |
| Backend | Spring Boot 3, Spring MVC |
| Security | Spring Security + JWT |
| ORM | Hibernate + Spring Data JPA |
| Database | MySQL |
| Frontend | React.js, Axios, React Router |
| Build Tool | Maven |
| Containerization | Docker + docker-compose |
| Deployment | Railway (CI/CD via GitHub) |
 
---
 
## ✨ Features
 
- 🔐 JWT-based User Authentication & Registration
- 🔒 BCrypt Password Encryption
- 👥 Role-based Access Control (Commuter / Admin)
- 🚌 View all Hyderabad Bus Routes
- ➕ Add / Edit / Delete Routes (Admin)
- 📡 Secured REST APIs with Spring Security
- 🐳 Dockerized for production deployment
- 🚀 Live deployment with Railway CI/CD
---
 
## 📁 Project Structure
 
```
Smart-City-Transport-Tracker/
├── backend/                  # Spring Boot Application
│   ├── src/main/java/
│   │   └── com/transport/transport_tracker/
│   │       ├── controller/   # REST API Controllers
│   │       ├── service/      # Business Logic
│   │       ├── repository/   # Database Layer
│   │       ├── model/        # Entity Classes
│   │       ├── JwtUtil.java  # JWT Token Handler
│   │       ├── JwtFilter.java
│   │       └── SecurityConfig.java
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── pom.xml
│
└── frontend/                 # React Application
    └── src/
        ├── pages/
        │   ├── Login.js
        │   ├── Register.js
        │   └── RoutesList.js
        ├── App.js
        └── App.css
```
 
---
 
## 📡 API Endpoints
 
| Method | URL | Description | Auth |
|--------|-----|-------------|------|
| POST | /api/auth/register | Register user | No |
| POST | /api/auth/login | Login & get JWT | No |
| GET | /api/routes | Get all routes | No |
| POST | /api/routes | Add new route | ✅ Yes |
| PUT | /api/routes/{id} | Update route | ✅ Yes |
| DELETE | /api/routes/{id} | Delete route | ✅ Yes |
 
---
 
## 🚀 How to Run Locally
 
### Backend
```bash
cd backend
.\mvnw.cmd spring-boot:run
```
 
### Frontend
```bash
cd frontend
npm install
npm start
```
 
### Using Docker
```bash
cd backend
docker-compose up
```
 
---
 
## 👨‍💻 Developer
 
**V Suresh Kumar**
- GitHub: [@Suresh-1116](https://github.com/Suresh-1116)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/suresh-kumar-43a458255/)
- Email: vsureshkumar1116@gmail.com
 