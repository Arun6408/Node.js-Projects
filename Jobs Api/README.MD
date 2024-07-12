# Jobs API

## Project Overview

The **Jobs API** is a robust backend solution focused exclusively on managing job postings and user authentication, without any front-end components. This project aims to create a secure, scalable, and efficient API that supports user registration, login, and comprehensive job management functionalities. By employing a RESTful architecture and implementing JWT for authentication, this API ensures a high level of security and data integrity.

### Purpose and Goals

The primary purpose of this API is to streamline job management processes for users and employers. It facilitates the creation, retrieval, updating, and deletion of job listings, making it an essential tool for job-related applications. The goals include:

- **Security:** Implement strong authentication mechanisms to protect user data.
- **Scalability:** Design endpoints that can handle an increasing number of users and jobs seamlessly.
- **Efficiency:** Optimize database interactions for fast response times and minimal latency.

### Key Features

- **User Authentication:** Secure routes for user login and registration using Bearer tokens, ensuring that only authorized users can access job-related functionalities.
- **Job Management:** Complete CRUD (Create, Read, Update, Delete) operations for job listings, allowing users to manage their postings effectively.
- **RESTful Design:** Adherence to REST principles for clean and maintainable code, making it easy to extend and modify the API in the future.
- **Error Handling:** Comprehensive error handling to provide meaningful responses and improve the user experience.

### **Login Routes**

- **Login:**  
  `POST http://localhost:{port}/api/v1/auth/login/`  
  *Authenticate users and provide access tokens.*

- **Register:**  
  `POST http://localhost:{port}/api/v1/auth/register/`  
  *Create new user accounts securely.*

### **Authentication**

To access job routes, a Bearer token must be included in the headers. Ensure you set up your token correctly before attempting to access these routes. This token is essential for maintaining session integrity and user authentication throughout the API.

### **Job Routes**

- **Get All Jobs:**  
  `GET http://localhost:{port}/api/v1/jobs/`  
  *Retrieve all job listings associated with the authenticated user.*

- **Create a Job:**  
  `POST http://localhost:{port}/api/v1/jobs/`  
  *Submit a new job listing for the database.*

- **Get Job by ID:**  
  `GET http://localhost:{port}/api/v1/jobs/:id`  
  *Retrieve details of a specific job using its unique ID.*

- **Update Job by ID:**  
  `PUT http://localhost:{port}/api/v1/jobs/:id`  
  *Modify the details of a specific job.*

- **Delete Job by ID:**  
  `DELETE http://localhost:{port}/api/v1/jobs/:id`  
  *Remove a job listing from the database.*

---

## Project Setup

To set up the Jobs API on your local machine, follow these steps:

1. **Install Dependencies:**

   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```


  ### 2. **Setup the `.env` File**
  
  Create a `.env` file in your project root directory and add the following values:
  
  - **`MONGO_URI`**: The connection string for your MongoDB database.
    
  - **`PORT`**: The port number on which the server will run (e.g., `5000`).
  
  - **`JWT_SECRET`**: A secret key used for signing JWTs (ensure this is a strong, unique value).
  
  - **`JWT_LIFETIME`**: The expiration time for the JWT (e.g., `1h` for one hour).
  
  **Example of a `.env` file:**
  
  ```plaintext
  MONGO_URI=mongodb://your_mongo_uri_here
  PORT=5000
  JWT_SECRET=your_secret_key_here
  JWT_LIFETIME=1h
  ```

   ##Start your Project:
   ```bash 
   npm start
   ```
