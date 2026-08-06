# WEB-II

A full-stack web application developed as part of the **Web Engineering-II** course. This project demonstrates a modern DevOps workflow using React, Express, Docker, GitHub Actions, and Microsoft Azure Virtual Machine.

---

## Project Overview

The goal of this project is to build a production-ready web application while learning industry-standard development and deployment practices.

The project currently includes:

- React Frontend
- Express.js Backend
- Docker Containerization
- Docker Compose
- Git Version Control
- GitHub Repository
- GitHub Actions CI/CD
- GitHub Self-Hosted Runner
- Microsoft Azure Virtual Machine Deployment

Future updates will include:

- MySQL Database Integration
- Nginx Reverse Proxy
- HTTPS with SSL
- Custom Domain
- Production Deployment

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js |
| Backend | Express.js |
| Runtime | Node.js |
| Language | JavaScript |
| Package Manager | npm |
| Version Control | Git |
| Repository | GitHub |
| Containerization | Docker |
| Container Orchestration | Docker Compose |
| CI/CD | GitHub Actions |
| Deployment Runner | GitHub Self-Hosted Runner |
| Cloud Platform | Microsoft Azure Virtual Machine |
| Operating System | Ubuntu Server 24.04 LTS |
| Development Environment | Windows 11 |
| Code Editor | Visual Studio Code |

---

## Project Structure

```
WEB-II/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## Features

- React frontend
- Express REST API
- Dockerized frontend
- Dockerized backend
- Docker Compose support
- GitHub version control
- Automated deployment using GitHub Actions
- Azure Virtual Machine deployment
- Self-hosted GitHub Actions Runner

---

## System Architecture

```
                GitHub Repository
                        │
                        ▼
              GitHub Actions Workflow
                        │
                        ▼
          Self-Hosted Runner (Azure VM)
                        │
                git pull latest code
                        │
                        ▼
           docker compose up --build
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
 React Frontend                 Express Backend
   Port 3000                      Port 5000
```

---

## Running the Project Locally

### Clone Repository

```bash
git clone https://github.com/Soumitra-32/WEB-II.git
```

```bash
cd WEB-II
```

---

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## Running with Docker

Build containers

```bash
docker compose build
```

Run containers

```bash
docker compose up -d
```

Stop containers

```bash
docker compose down
```

---

## API Endpoint

### Health Check

```
GET /
```

Example Response

```json
{
    "message": "Backend is running successfully."
}
```

---

## CI/CD Pipeline

The project uses **GitHub Actions** with a **Self-Hosted Runner** installed on a Microsoft Azure Virtual Machine.

Deployment process:

1. Push code to GitHub
2. GitHub Actions workflow starts
3. Self-hosted runner receives the job
4. Latest code is pulled from GitHub
5. Docker images are rebuilt
6. Docker containers are restarted automatically

---

## Cloud Deployment

Cloud Provider:

- Microsoft Azure

Operating System:

- Ubuntu Server 24.04 LTS

Deployment Method:

- Docker Compose

Current Services

| Service | Port |
|----------|------|
| React Frontend | 3000 |
| Express Backend | 5000 |

---

## Current Progress

Completed

- Project initialization
- React application setup
- Express backend setup
- Docker configuration
- Docker Compose configuration
- GitHub repository setup
- Azure Virtual Machine setup
- SSH configuration
- GitHub Self-Hosted Runner
- GitHub Actions CI/CD pipeline

In Progress

- React page development
- Express API development





## Authors

### Soumitra Saha
- Role: Project Manager
- GitHub: https://github.com/Soumitra-32

### Sukonya Dutta
- Role: Frontend Engineer
- GitHub: https://github.com/Dutta-Pushpa

### Sadikur Rahman Khan
- Role: Backend Engineer
- GitHub: https://github.com/Sadik-khan077

### Wasik Ahmed
- Role: Software Quality Assurance (SQA) Engineer
- GitHub: https://github.com/WasikAhmed00

Department of Computer Science and Engineering

Jahangirnagar University

---

## License

This project is developed for academic and learning purposes.
