# Task Manager

## Overview

This project is a simple and effective Task Manager application that enables users to perform CRUD operations on tasks. The application provides a user-friendly interface for viewing and editing tasks, making task management intuitive and efficient.

## Frontend

The frontend is hosted at:

```
http://localhost:{port}/index.html
```

### Features

- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Clean and user-friendly interface for managing tasks.

## Backend Routes

The following routes are available for managing tasks:

### 1. Get All Tasks

- **Endpoint:** `http://localhost:{port}/api/v1/tasks/`
- **Method:** GET
- **Description:** Retrieves all tasks.

### 2. Create a Task

- **Endpoint:** `http://localhost:{port}/api/v1/tasks/`
- **Method:** POST
- **Description:** Creates a new task.

### 3. Get a Task by ID

- **Endpoint:** `http://localhost:{port}/api/v1/tasks/:id`
- **Method:** GET
- **Description:** Retrieves a specific task by its ID.

### 4. Update a Task by ID

- **Endpoint:** `http://localhost:{port}/api/v1/tasks/:id`
- **Method:** PUT
- **Description:** Updates a specific task by its ID.

### 5. Delete a Task by ID

- **Endpoint:** `http://localhost:{port}/api/v1/tasks/:id`
- **Method:** DELETE
- **Description:** Deletes a specific task by its ID.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arun6408/Node.js-Projects/edit/main/Task%20Manager
   ```

2. Navigate to the project directory:
   ```bash
   cd ./Task%20Manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file:
   ```env
   PORT=<your-port-number>
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:{port}/index.html`.
2. Use the application to create, view, update, and delete tasks as needed.

