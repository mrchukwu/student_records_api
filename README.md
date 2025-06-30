# STUDENT RECORD API

- The Student Record REST API is a simple, secure, and scalable API that enables you to manage student records stored in a MongoDB database. It supports basic CRUD operations along with authentication and pagination features. This API is built using Node.js, Express.js, and MongoDB (via Mongoose), supporting full student lifecycle management including authentication, profile updates, and status tracking (present, absent, suspended, expelled).

This API allows developers or administrators to:
Register new students
Log in and authenticate students
View, update, and delete student records
Track student attendance status (present, absent, suspended, expelled)
Securely update passwords
Manage sessions with login/logout functionality

### Features
 User authentication (signup/login)
 JWT-based authentication
 Full CRUD operations for student records
 Password update functionality
 Pagination for student listings
 MongoDB database integration

## API Endpoints

### Authentication
POST /signup - Create a new user account
 POST /login - Authenticate and receive an access token

### Student Operations:
- GET /students - Get all students (with optional pagination ?page=1)
- GET /students - Get students count
- GET /students?page=1 - Pagination query
- GET /students/:id - Get a specific student by ID
- PATCH /students/:id - Update student information
- PATCH /students/:id/password - Update student password
- DELETE /students/:id - Delete a student record

## Getting Started
 Prerequisites
- Node.js (v14 or later)
- MongoDB (v4 or later)
- npm or yarn    

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- JWT (JSON Web Tokens for authentication)
- Bcrypt (password hashing)

## Installation
1. Clone the repository:
   - git clone https://github.com/mrchukwu/student_records_api.git
   - cd student-records-api
    
2. Install dependencies
   - npm install

