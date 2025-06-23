## STUDENTS RECORD PROJECT BUILD PROCESS

## Objective 
- Build a simple RESTful CRUD service for managing Student records using MongoDB as the datastore. Your service should allow clients to create, read, update, and delete student entries, plus retrieve a count of how many records exist.


## STEP 1

### Project setup
    - npm i express mongoose validator jsonwebtoken bcrypt
        - express => Nodejs framework for building scalable Nodejs application
        - Mongoose => For working with MongoDB database
        - Validator => To validate the schema data
        - jsonwebtoken => To create login process
        - bcrypt => To encrypt user password login details
    
    - created Proje_instruction markdown file for the project guideline
    - created Project_build_process markdown file for documenting thought building proces
    - created a git repository for the project https://github.com/mrchukwu/students_record_api

### Setting up MongoDB database

- Setup a database
- Created a cluster ( cluster password : jOsLQX0mBf3CQxtx)
- Created a config directory and created a database file for MongoDB database connection
- created the app.js project entry execution file

### Authentication

- Signup created 
    - Student's can signup : create account
        - fileds required : firstname, lastname, email, age
        - firstname and lastname field cannot be empty string ("") or null
        - email must be a valid email. Check passed on email with Validator npm package
        - password must be a str
        - age must be a number.
    - Student's can login
    - 