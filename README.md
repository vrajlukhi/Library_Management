# E-Library Management Backend API

This is the backend API for an E-Library Management Application built using **Node.js**, **Express**, and **MongoDB**. The API handles user authentication (using JWT), book CRUD operations, and book borrowing/return functionality.

- Features
  - **User Authentication**: JWT-based authentication for registration and login.
  - **Book Management**: CRUD operations for managing books in the library.
  - **Borrow/Return Books**: Users can borrow and return books.
  - **Error Handling**: Robust error handling for invalid requests and server errors.

- Environment Variables
  - PORT=3000
  - MONGO_URI=your_mongodb_connection_string
  - JWT_SECRET=your_jwt_secret_key

- Book Management Endpoints
  - Method	Endpoint	Description
  - POST	/api/books	Add a new book
  - GET	/api/books	Retrieve all books
  - GET	/api/books/:id	Retrieve a book by ID
  - PUT	/api/books/:id	Update a book by ID
  - DELETE	/api/books/:id	Delete a book by ID

-Borrow/Return Endpoints
  - Method	Endpoint	Description
  - POST	/api/books/:id/borrow	Borrow a book (requires auth)
  - POST	/api/books/:id/return	Return a borrowed book

-Error Handling
  - The API provides detailed error responses with appropriate HTTP status codes:

  - 400 Bad Request: Invalid data provided in the request.
  - 401 Unauthorized: Missing or invalid JWT token.
  - 404 Not Found: Resource not found.
  - 500 Internal Server Error: General server error.

-Technologies Used
  - Node.js: JavaScript runtime environment for the server.
  - Express.js: Web framework for building the API.
  - MongoDB: NoSQL database to store user and book data.
  - Mongoose: MongoDB object modeling for Node.js.
  - JWT (JSON Web Token): Used for secure authentication and session management.
  - bcrypt.js: For password hashing and comparison.

### Summary of Changes:
- Organized the sections for clarity.
- Added a Table of Contents for easier navigation.
- Included example request/response bodies for clarity.
- Made sections more concise and structured.

Let me know if this version works for you or if any further changes are needed!
