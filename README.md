# Express.js Middleware Project

A simple Express.js server that demonstrates middleware usage and provides a basic API endpoint for mathematical operations.

## TL;DR

**What is Middleware?** Functions that run between the request and response in Express.js. They can:
- Modify request/response objects
- End the request-response cycle
- Call the next middleware function

**What this project does:** Logs every HTTP request with method, URL, and timestamp, plus provides a simple sum API.

## Features

- **Request Logging Middleware**: Logs HTTP method, URL, and timestamp for all incoming requests
- **Sum API Endpoint**: Calculates the sum of two numbers provided as query parameters
- **Real-time Request Monitoring**: See all incoming requests in the console

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Middleware-1
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Starting the Server

Run the server using Node.js:

```bash
node index.js
```

The server will start on port 3000. You should see:
```
Server is running on port 3000
```

### API Endpoints

#### GET /sum
Calculates the sum of two numbers provided as query parameters.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Example Request:**
```
GET http://localhost:3000/sum?a=5&b=3
```

**Response:**
```json
{
  "a": 5,
  "b": 3,
  "sum": 8
}
```

**Example with negative numbers:**
```
GET http://localhost:3000/sum?a=-10&b=15
```

**Response:**
```json
{
  "a": -10,
  "b": 15,
  "sum": 5
}
```

### Middleware Logging

The server includes middleware that logs every incoming request with:
- HTTP Method (GET, POST, etc.)
- Request URL
- Timestamp in ISO format

**Example Console Output:**
```
HTTP Method: GET
URL: /sum?a=5&b=3
2024-01-15T10:30:45.123Z
```

## Project Structure

```
Middleware-1/
├── index.js          # Main server file
├── package.json      # Project dependencies
├── package-lock.json # Locked dependency versions
└── README.md        # This file
```

## Dependencies

- **express**: Web framework for Node.js

## Testing the API

You can test the API using:

1. **Browser**: Navigate to `http://localhost:3000/sum?a=10&b=20`
2. **cURL**: 
   ```bash
   curl "http://localhost:3000/sum?a=10&b=20"
   ```
3. **Postman**: Send GET request to `http://localhost:3000/sum?a=10&b=20`

## Error Handling

- If query parameters are missing, they will be treated as `NaN`
- The server will still respond with the calculated values (which may be `NaN`)

## Development

To modify the middleware or add new endpoints, edit the `index.js` file. The server will need to be restarted to see changes.

## What I Learned

### Understanding Middleware

**Middleware** in Express.js are functions that have access to the request object (`req`), response object (`res`), and the next middleware function (`next`). They execute in a specific order and can perform various tasks.

#### General Role of Middleware:

1. **Modify Request/Response Objects**: Middleware can add properties to `req` or `res` objects that subsequent middleware or route handlers can use.

2. **End the Request-Response Cycle**: Middleware can send a response (using `res.send()`, `res.json()`, etc.) and stop the chain from proceeding further.

3. **Call the Next Middleware Function**: Using `next()` passes control to the next middleware function in the stack.

#### Key Concepts:

- **Order Matters**: Middleware executes in the order they're defined
- **Must Call `next()`**: If middleware doesn't end the cycle, it must call `next()` to continue
- **Error Handling**: `next(error)` passes errors to error handling middleware
- **Global vs Route-Specific**: Middleware can be applied globally or to specific routes

#### In This Project:

```javascript
app.use((req, res, next) => {
    console.log("HTTP Method:", req.method);
    console.log("URL:", req.url);
    console.log(new Date().toISOString());
    next(); // ← This is crucial!
})
```

This middleware:
- Logs request details (modifies nothing, just observes)
- Calls `next()` to continue to the next middleware/route handler
- Runs for ALL requests (global middleware)

#### Common Middleware Use Cases:
- **Logging** (like in this project)
- **Authentication** (checking if user is logged in)
- **Body parsing** (converting request body to JSON)
- **CORS** (handling cross-origin requests)
- **Static file serving** (serving CSS, images, etc.)

## License

This project is open source and available under the MIT License. 