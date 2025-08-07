# Competitive Coding Platform - LeetCode Inspired

This project is a full-stack, LeetCode-inspired competitive programming platform that allows users to solve coding problems, view solutions, and track their submissions in real time. The platform supports multiple programming languages using the Judge0 API for code execution and provides both user and admin functionalities with proper role-based access control.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [Usage Instructions](#usage-instructions)
- [Future Improvements](#future-improvements)
- [Author](#author)

## About the Project

This platform is developed as a real-world full-stack application to emulate the core functionality of well-known coding practice websites such as LeetCode and HackerRank. The goal is to provide users with a seamless interface to solve coding challenges in various programming languages, get instant feedback, and learn through editorial solutions and videos.

Admins can manage the entire content of the platform including problem creation, editorial uploads, and user submission tracking.

This project showcases practical skills in system design, backend APIs, frontend UI/UX, secure authentication, role-based access control, and integration of third-party APIs like Judge0.

## Features

### User Features

- User registration and login with JWT-based authentication.
- Code editor to solve problems in multiple languages (C++, Java, JavaScript, etc.).
- Real-time code execution using the Judge0 API.
- View submission history and track individual problem status.
- Watch editorial videos or read written solutions after attempting problems.

### Admin Features

- Admin login with secure access control.
- Create, edit, or delete coding problems.
- Add video explanations and editorial notes for problems.
- View user submissions and manage platform content.

### Middleware and Security

- JWT-based authentication using cookies.
- Role-based access control with middleware (`userMiddleware.js` and `adminMiddleware.js`).
- Redis integration (for token/session optimization if used).

## Tech Stack

### Frontend

- ReactJS
- JavaScript (ES6+)
- HTML5 & CSS3
- React-Redux (Global State Management)
- React Reducer (Local State Management)
- Axios for API communication

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT) for authentication
- Redis (for caching or token storage)
- Judge0 API for code execution

### Dev Tools and Others

- Visual Studio Code
- Git and GitHub
- Postman for API testing
- Prettier for code formatting
- Environment variables using `.env`
