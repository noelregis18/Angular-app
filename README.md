
## Overview
This project is a full-stack demo application featuring:
- **Backend:** Node.js/Express server for authentication and user/record management.
- **Frontend:** Angular app (structure present, but missing Angular CLI config files).

## Backend (Express Server)
- Location: `angular-app/assets/server/server.js`
- Features:
  - User authentication (`/api/login`)
  - Fetch user records (`/api/records`)
  - Fetch all users (admin) (`/api/users`)
- Uses hardcoded users and records for demonstration.

### Running the Backend
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node angular-app/assets/server/server.js
   ```
3. The server will run on `http://localhost:3000`.

## Frontend (Angular App)
- Structure is present in `angular-app/src/app/`, but `angular.json` and `package.json` for Angular CLI are missing.
- To run the frontend, you would need to set up Angular CLI and the required configuration files.

## API Endpoints
- `POST /api/login` — Authenticate user
- `GET /api/records?userId=...` — Get records for a user
- `GET /api/users` — Get all users (admin)

## Notes
- This project is for demonstration/assignment purposes.
- The backend uses CORS and accepts JSON requests.
- You can test the backend using Postman, curl, or any HTTP client.
