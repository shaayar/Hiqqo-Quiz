# Hiqqo Quiz App Platform

Hiqqo Quiz App is a platform that allows users to take quizzes, track their progress, and challenge friends in an engaging and interactive way. This project is built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and is open-source.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

---

## About

Hiqqo Quiz App is designed to provide users with a seamless and fun quiz experience. Users can take multiple-choice quizzes, view their results, and improve their scores over time. As an open-source project, it welcomes contributions and is a great example of a full-stack application built with the MERN stack.

---

## Features

- User authentication (sign up, login, and logout)
- Create, update, and delete quizzes
- Take quizzes and see results
- View leaderboards and compare scores
- Admin panel for managing quizzes and users
- Responsive design for all devices

---

## Tech Stack

This app is built using the following technologies:

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Tailwind CSS

---

## Getting Started

To get started with the Hiqqo Quiz App Platform, follow the instructions below to set up your local development environment.

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local instance or MongoDB Atlas for cloud storage)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/hiqqo-quiz-app.git
   cd hiqqo-quiz-app
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   npm run install-both
   ```

3. Create a `.env` file in the `server` directory and add the following environment variables:

   ```env
   MONGO_URI=
   JWT_SECRET=
   SMTP_HOST=
   SMTP_PORT=
   SMTP_MAIL=
   SMTP_PASSWORD=
   ```

4. Start the development server:

   ```bash
   npm run dev-both
   ```

5. Open your browser and go to `http://localhost:5173` to access the frontend.

6. The backend will run on `http://localhost:5000` (or any configured port in your server).

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

---

## License

This project is licensed under the MIT License.

