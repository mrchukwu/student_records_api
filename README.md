# STUDENT RECORD API

- A simple RESTful CRUD service for managing Student records using MongoDB as the datastore. Your service should allow clients to create, read, update, and delete student entries, plus retrieve a count of how many records exist.

## Endpoints

- Authentication routes
    - POST /signup - input fields : {firstname, lastname, email, password, age} all required
    - POST /login - input fields : {email, password}

- Student routes
    - GET /students - Gets all the registered students.
    - GET /students?page=1 - Pagination query
    - GET /students/:id - Gets a student by ID
    - PATCH /students/:id - Updates a student by ID
    - PATCH /students/:id/password - Updates students password
    - DEL /students/:id - Deletes a student by ID

