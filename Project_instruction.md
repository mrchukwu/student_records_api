# STUDENT RECORDS

## Backend CRUD Application Challenge (MongoDB)
- Objective:
Build a simple RESTful CRUD service for managing Student records using MongoDB as the datastore. Your service should allow clients to create, read, update, and delete student entries, plus retrieve a count of how many records exist.

1. Data Model

Each Student record must include at least:

id (auto-generated unique identifier from MongoDB)

firstName (string)

lastName (string)

email (string, must be unique)

password : added for authentication 

age (integer)


2. Endpoints

Implement the following HTTP endpoints:

Endpoint	Method	Request Body	Response

/students	POST	{ firstName, lastName, email, age }	Newly created student document (with _id)
/students	GET	―	Array of all student documents
/students/:id	PUT	{ firstName?, lastName?, email?, age? }	Updated student document
/students/:id	DELETE	―	Success message / deleted student id
/students/count	GET	―	{ count: <number of student records> }


3. Validation & Error Handling

409 Conflict if the supplied email already exists in the collection.

400 Bad Request if required fields are missing or invalid on creation.

404 Not Found when updating, deleting, or fetching a non-existent _id.


4. Persistence (MongoDB)

Use MongoDB (local or cloud) as your database.

Include any schema definitions or setup scripts (e.g., collection creation, indexes for email uniqueness).


5. Documentation

Provide a Postman collection (or OpenAPI/Swagger spec) demonstrating calls to each endpoint with example requests and expected responses.

In your Postman collection, add tests to verify status codes and response payloads.


6. Submission

Deadline: Submit your GitHub repository URL and Postman documentation by Friday, June 27, 2025, 11:59 PM (Africa/Lagos time).

Include a README.md containing:

Setup and run instructions

How to import and execute the Postman collection

Any assumptions or design decisions you made


7. Assessment Review Session

We will hold a 2-hour review session on Saturday, June 28, 2025, during which each student will present and answer questions about their implementation.

A meeting link will be shared via class communication channels prior to the session.


8. Bonus (Optional)

Pagination: Add ?page=1&limit=10 support to the /students GET endpoint.

Filtering: Allow searching by lastName, e.g., /students?lastName=Smith.



---

Evaluation Criteria

Criterion	Weight

Correctness of CRUD operations	40%
Validation & error handling	20%
Quality of documentation	20%
Code organization & style	10%
Bonus features (if any)	10%
