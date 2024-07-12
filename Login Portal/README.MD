# Login Portal

## Overview

This project is a comprehensive Login Portal designed for user authentication and secure access to a dynamic dashboard. The application uses token-based authentication to ensure that only authorized users can access sensitive data.

## Frontend

The frontend is hosted at:

```
http://localhost:{port number from .env}/index.html
```

### Features

- User-friendly interface for seamless login.
- Dynamic dashboard accessible only with a valid token.

## Authentication Process

### Token Acquisition

After a successful login, users receive a token that is essential for accessing the dashboard.

## Backend Routes

### 1. Login Route

- **Endpoint:** `http://localhost:{port number from .env}/api/v1/login/`
- **Method:** POST
- **Description:** Processes user login requests and issues an authentication token upon success.

### 2. Dashboard Route

- **Endpoint:** `http://localhost:{port number from .env}/api/v1/dashboard/`
- **Method:** POST
- **Description:** Requires a valid token to access and retrieves data for the user's dashboard.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
   
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
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

1. Open your browser and navigate to `http://localhost:{port number from .env}/index.html`.
2. Enter your credentials to log in.
3. Upon successful login, you will receive a token.
4. Use this token to access the dashboard at `http://localhost:{port number from .env}/api/v1/dashboard/`.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Your Tech Stack or Libraries Used]
- [Any contributors or resources that helped you]
