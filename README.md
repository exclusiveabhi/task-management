# Task Management System 🚀

**Task Management System**! This system is designed to streamline task creation, approval, and tracking, with role-based authentication. Admin users can manage tasks, while regular users can only view them. Built with the **MERN stack** (MongoDB, Express, React, Node.js) for the backend and **Vite** for the frontend.

---

## Features ✨

### 1. **Task Creation & Listing**
- **Admin** users can create tasks with:
  - **Title**
  - **Description**
  - **Deadline**
- All tasks are listed with their status: **Pending** or **Approved**.

### 2. **Task Approval**
- **Admin** users can mark tasks as **Approved**.
- Captures an **audit log** with the time of approval and the approving user's name for transparency.

### 3. **Role-Based Authentication**
- **Admin** users can:
  - Create and approve tasks.
- **User** can:
  - Only view tasks.
- **In-memory storage** for user authentication (no database required).

### 4. **Responsive UI**
- A clean, modern, and responsive interface designed to work on all devices, from desktop to mobile.

---

## Tech Stack 💻

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express
- **Database**: In-memory (for demo purposes, no database required)
- **Authentication**: Basic role-based authentication using in-memory user storage

---

## Installation 🛠️

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed:
- **Node.js** and **npm** (or Yarn)
- **Git** for version control
- A **text editor** (VSCode recommended)

### Step 1: Clone the repository

```bash
git clone https://github.com/exclusiveabhi/task-management.git
cd task-management
```

### Step 2: Set up the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```

### Step 3: Set up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Step 4: Access the Application

Once both the frontend and backend are running, open the application in your browser:
- **Frontend**: [http://localhost:5173](http://localhost:5173)

#### Default User Credentials

- **Admin**:
  - Username: `admin`
  - Password: `admin`
  
- **User**:
  - Username: `user`
  - Password: `user`

---

## API Endpoints 📡

### **Authentication**

- **POST** `/api/auth/login`: Logs in the user and returns their role.

  **Request Body:**
  ```json
  { "username": "admin", "password": "admin" }
  ```

### **Tasks**

- **GET** `/api/tasks`: Fetch all tasks.
- **POST** `/api/tasks`: Creates a new task.

  **Request Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "deadline": "2025-01-31"
  }
  ```

- **PUT** `/api/tasks/:id/approve`: Marks a task as **Approved**.

  **Request Body:**
  ```json
  { "username": "admin" }
  ```

---

## Contributing 🤝

We encourage open-source contributions! If you'd like to enhance this project, please follow these steps:

1. **Fork** the repository.
2. **Clone** your fork: 
   ```bash
   git clone https://github.com/YOUR-USERNAME/task-management.git
   ```
3. **Create** a new branch: 
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Make changes**, then commit:
   ```bash
   git commit -am 'Add new feature'
   ```
5. **Push** to your fork:
   ```bash
   git push origin feature/your-feature
   ```
6. **Open a Pull Request**.

---

## Contact 📧

If you have any questions or feedback, feel free to open an issue on the GitHub repo, or reach out to me directly:

- [GitHub Profile](https://github.com/exclusiveabhi)

---