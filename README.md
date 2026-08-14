# WEB-II

A full-stack web application developed as part of the **Web Engineering-II** course at the **Department of Computer Science and Engineering, Jahangirnagar University**.

The project demonstrates modern web application development and deployment using **React, Express.js, MongoDB, Docker, GitHub Actions, and Microsoft Azure**.

---

## Project Overview

The project is a **University Bus Seat Booking System** designed to provide a structured platform for managing university bus-related information and seat bookings.

The application follows a full-stack architecture with a React frontend, Express.js backend, MongoDB database, and Docker-based deployment.

The project also implements a CI/CD workflow using GitHub Actions and a self-hosted runner deployed on a Microsoft Azure Virtual Machine.

---

## Technology Stack

| Category          | Technology                |
| ----------------- | ------------------------- |
| Frontend          | React.js                  |
| Backend           | Express.js                |
| Runtime           | Node.js                   |
| Language          | JavaScript                |
| Database          | MongoDB                   |
| Database Driver   | Mongoose                  |
| API               | REST API                  |
| API Testing       | Postman                   |
| Version Control   | Git                       |
| Repository        | GitHub                    |
| Containerization  | Docker                    |
| Orchestration     | Docker Compose            |
| CI/CD             | GitHub Actions            |
| Deployment Runner | GitHub Self-Hosted Runner |
| Cloud Platform    | Microsoft Azure           |
| Server OS         | Ubuntu Server             |
| Development OS    | Windows 11                |
| Code Editor       | Visual Studio Code        |

---

## Architecture

```text
                    Developer Laptop
                       Windows 11
                           │
                       Git Push
                           │
                           ▼
                  ┌─────────────────┐
                  │     GitHub      │
                  │   WEB-II Repo   │
                  └────────┬────────┘
                           │
                    GitHub Actions
                           │
                           ▼
                ┌─────────────────────┐
                │ Self-Hosted Runner  │
                │      Azure VM       │
                └──────────┬──────────┘
                           │
                    Docker Compose
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
           React       Express.js    MongoDB
         Frontend       Backend      Database
          :3000          :5000
```

---

## Project Structure

```text
WEB-II/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
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

## Backend Architecture

The Express.js backend follows the **MVC architecture** to maintain a clean separation of responsibilities.

### Model

Defines the MongoDB data structures using Mongoose and handles database-related operations.

### Controller

Contains the application logic for processing requests and generating responses.

### Routes

Defines the REST API endpoints and connects them with the appropriate controllers.

### Configuration

Contains application and database configuration required by the backend.

This structure makes the backend easier to maintain, test, and extend.

---

## Database

The application uses **MongoDB** as its database.

MongoDB is integrated with the Express.js backend through **Mongoose**.

The database is containerized as part of the Docker Compose environment, allowing the frontend, backend, and database to run as separate services.

---

## Core Features

* React-based frontend
* Express.js REST API
* MongoDB database
* Mongoose integration
* MVC backend architecture
* Models and controllers
* REST API routes
* CRUD operations
* Dockerized frontend
* Dockerized backend
* Dockerized MongoDB
* Docker Compose orchestration
* GitHub version control
* GitHub Actions CI/CD
* GitHub Self-Hosted Runner
* Microsoft Azure VM deployment
* Postman API testing

---

## CI/CD and Deployment

The project uses **GitHub Actions** with a **self-hosted runner** installed on the Azure Virtual Machine.

The deployment workflow is:

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    │ GitHub Actions
    ▼
Azure VM Self-Hosted Runner
    │
    │ Pull latest source
    ▼
Docker Compose
    │
    ├── React Frontend
    ├── Express Backend
    └── MongoDB
```

The development and deployment workflow follows two environments:

**Development Environment**

Windows 11 laptop where project files are developed and updated.

**Deployment Environment**

Ubuntu Server running on a Microsoft Azure Virtual Machine where the application is deployed using Docker Compose.

---

## Deployment Services

| Service  | Technology | Port  |
| -------- | ---------- | ----- |
| Frontend | React.js   | 3000  |
| Backend  | Express.js | 5000  |
| Database | MongoDB    | 27017 |


---

## Authors

### Soumitra Saha

**Project Manager**

GitHub: https://github.com/Soumitra-32

### Sukonya Dutta

**Frontend Engineer**

GitHub: https://github.com/Dutta-Pushpa

### Sadikur Rahman Khan

**Backend Engineer**

GitHub: https://github.com/Sadik-khan077

### Wasik Ahmed

**Software Quality Assurance (SQA) Engineer**

GitHub: https://github.com/WasikAhmed00

---

## Academic Information

**Department of Computer Science and Engineering**
**Jahangirnagar University**

**Course:** Web-II

---

## License

This project is developed for academic and educational purposes.
