# Task Manager Web Application

## Overview

This project is a full-stack web application implementing user authentication and task management functionality. It includes:

- **Frontend:** React.js with Bootstrap for responsive UI.
- **Backend:** Django REST Framework with JWT authentication.
- **Database:** PostgreSQL for data persistence.
- **Features:** User registration, login, profile view, and a dashboard to create/read/update/delete (CRUD) tasks.

---

## Features

### Frontend
- Built using React.js.
- Responsive design with Bootstrap.
- Registration and Login forms with client-side validation.
- Protected dashboard routes (only accessible after login).
- Task CRUD operations with real-time updates.
- JWT token stored in local storage and sent with requests for authentication.

### Backend
- Django REST Framework API with JWT authentication using Simple JWT.
- User registration endpoint with password hashing.
- Login endpoint providing JWT tokens.
- Protected endpoints for profile data and task CRUD operations.
- PostgreSQL database integration.
- CORS enabled to allow React frontend to communicate with backend.

---

## Installation and Setup

### Prerequisites

- Python 3.10+
- Node.js and npm/yarn
- PostgreSQL database

### Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

   
### Create and activate a Python virtual environment:

```bash
python -m venv venv
source venv/bin/activate   # On Windows use: venv\Scripts\activate
pip install -r requirements.txt   #Install backend dependencies
```


### Setup PostgreSQL database with the following credentials (adjust settings.py if needed):

- DB Name: yourdbname

- User: yourusername

- Password: yourpassword

- Host: localhost

- Port: 5432

**Apply migrations:**
```bash
python manage.py migrate
```

**Run the backend server:**

```bash
python manage.py runserver
```

### Frontend Setup

Navigate to the frontend folder:
```bash
cd frontend
```

**Install frontend dependencies:**

```bash
npm install
# or
yarn install
```

**Run the React development server:**

```bash
npm start
# or
yarn start
```

The frontend will start on http://localhost:3000 and the backend on http://127.0.0.1:8000.

**API Endpoints**

| Endpoint             | Method | Description                   | Auth Required |
|----------------------|--------|-------------------------------|----------------|
| /api/register/       | POST   | Register a new user           | No             |
| /api/token/          | POST   | Obtain JWT token (login)      | No             |
| /api/token/refresh/  | POST   | Refresh JWT token             | No             |
| /api/profile/        | GET    | Get logged-in user profile    | Yes            |
| /api/tasks/          | GET    | Get list of user tasks        | Yes            |
| /api/tasks/          | POST   | Create a new task             | Yes            |
| /api/tasks/<id>/     | PUT    | Update a task                 | Yes            |
| /api/tasks/<id>/     | DELETE | Delete a task                 | Yes            |




**Frontend Routes**
| Route        | Component      | Description                     |
|--------------|----------------|---------------------------------|
| /register    | Register Page  | User signup form                |
| /login       | Login Page     | User login form                 |
| /dashboard   | Dashboard      | User profile & task manager     |


### How to Use

1. Register a new account on /register. 
2. Login with your credentials on /login.

3. Access the dashboard to view your profile and manage tasks.

4. Create, update, delete tasks. Tasks marked completed will appear visually distinct.

5. Logout to clear session.

### Security & Scalability Notes

- Passwords are securely hashed using Django's built-in hashing system.

- JWT tokens are used for stateless authentication.

- CORS is configured to allow frontend requests from localhost:3000.

- API endpoints are protected with JWT authentication middleware.



### Postman Collection

A Postman collection (postman_collection.json) is provided to test all backend API endpoints with ready-made requests including registration, login, profile fetching, and task CRUD operations.

### Project Structure

```bash
root/
├── backend/
│   ├── backend/          # Django project config
│   ├── app/              # Django app with models, views, serializers
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/              # React source code
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md             # Project documentation
```
