

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Setting Up the Backend](#setting-up-the-backend)
  - [Setting Up the Frontend](#setting-up-the-frontend)
- [Running the Project](#running-the-project)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Introduction
This project consists of a frontend built with Vite and React.js and a backend built with Node.js and Express.js. The following instructions will guide you through setting up and running the project.

## Prerequisites
- Node.js (>= 16.x.x)
- npm (>= 6.x.x)
- Visual Studio Code (VS Code)

## Getting Started

### Setting Up the Backend
1. **Navigate to the main project folder** and open it in Visual Studio Code.
2. **Open a new terminal** in VS Code.
3. **Navigate to the backend folder** by running:
    ```bash
    cd backend
    ```
4. **Install the backend dependencies** by running:
    ```bash
    npm install
    ```

### Setting Up the Frontend
1. **Open another terminal** in VS Code.
2. **Navigate to the frontend folder** by running:
    ```bash
    cd frontend
    ```
3. **Install the frontend dependencies** by running:
    ```bash
    npm install
    ```

## Running the Project

### Running the Backend
1. **Navigate to the backend folder** (if not already there):
    ```bash
    cd backend
    ```
2. **Run the backend**:
    - If you have nodemon installed globally:
        ```bash
        npm run dev
        ```
    - If you don't have nodemon installed, install it globally:
        ```bash
        npm install -g nodemon
        ```
        Then run the backend:
        ```bash
        npm run dev
        ```
    - Alternatively, you can run the backend without nodemon:
        ```bash
        npm start
        ```

### Running the Frontend
1. **Navigate to the frontend folder** (if not already there):
    ```bash
    cd frontend
    ```
2. **Run the frontend**:
    ```bash
    npm run dev
    ```

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: Vite, React.js

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


