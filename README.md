# Express.js Middleware Project

A collection of Express.js middleware examples, each demonstrating a different concept:
- Logging request details
- Counting requests
- Handling JSON POST requests

## TL;DR

**What is Middleware?** Functions that run between the request and response in Express.js. They can:
- Modify request/response objects
- End the request-response cycle
- Call the next middleware function

**What this project does:** Demonstrates three middleware patterns: logging, request counting, and JSON body parsing.

---

## Middleware 1: Logging Request Details

**Purpose:** Log every HTTP request's method, URL, and timestamp.

**How it works:**
- Runs for all requests
- Logs method, URL, and current time
- Calls `next()` to continue

**Code Summary:**
```js
app.use((req, res, next) => {
    console.log("HTTP Method:", req.method);
    console.log("URL:", req.url);
    console.log(new Date().toISOString());
    next();
});
```

---

## Middleware 2: Request Counter

**Purpose:** Count and expose the total number of requests handled by the server.

**How it works:**
- Increments a global counter on every request
- Exposes `/requests` endpoint to get the current count

**Code Summary:**
```js
let totalRequestCount = 0;
app.use((req, res, next) => {
  totalRequestCount++;
  next();
});
app.get('/requests', (req, res) => {
  res.json({ totalRequests: totalRequestCount });
});
```

---

## Middleware 3: POST/JSON Parsing

**Purpose:** Demonstrate how to handle JSON POST requests and why parsing is needed.

**What is JSON?**
- JSON (JavaScript Object Notation) is a lightweight data-interchange format, easy for humans to read and write, and easy for machines to parse and generate.

**Why is parsing needed?**
- HTTP requests send data as raw text. To access JSON data in `req.body`, Express needs to parse it into a JavaScript object. This is done using the `express.json()` middleware.

**How it works:**
- `app.use(express.json())` parses incoming JSON requests
- POST `/sum` endpoint reads `a` and `b` from the request body and returns their sum

**Code Summary:**
```js
app.use(express.json());
app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
});
```

---

## Project Structure

```
Backend-02/
├── Middleware-1/   # Logging middleware
│   └── index.js
├── Middleware-2/   # Request counter middleware
│   └── index.js
├── Middleware-3/   # JSON POST middleware
│   └── index.js
├── README.md
└── ...
```

## How to Run Each Example

1. **Middleware 1:**
   - `cd Middleware-1 && node index.js`
   - Visit `http://localhost:3000/sum?a=5&b=3`
2. **Middleware 2:**
   - `cd Middleware-2 && node index.js`
   - Visit `http://localhost:3000/requests` to see the request count
3. **Middleware 3:**
   - `cd Middleware-3 && node index.js`
   - Send a POST request to `http://localhost:3002/sum` with JSON body `{ "a": 5, "b": 3 }`

## What I Learned

- How to use middleware to log requests
- How to use middleware to count requests
- How to parse JSON in POST requests and why it's necessary
- The general role of middleware: modify req/res, end the cycle, or call next()

## License

This project is open source and available under the MIT License.

## Pushing to GitHub

To push your local repository to GitHub, use the following commands:

```bash
git remote add origin https://github.com/Amitanshuuu/Backend-02
git branch -M main
git push -u origin main
```