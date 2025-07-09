const express = require('express');
const app = express();

app.use(express.json());

app.post('/sum',(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
})

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
})


// What is express.json?
// express.json() is a built-in Express middleware that parses incoming requests
// with JSON payloads and puts the parsed data into req.body.
// Without it, req.body will be undefined when sending JSON data.

// What is parsing?
// Parsing means converting raw input (e.g., a JSON string) into a usable data structure
// (e.g., a JavaScript object). Express parses the body to make it usable in your code.

// Why do we need to parse JSON using middleware?
// The body of an HTTP request is just a stream of raw data.
// express.json() parses that stream and gives you the actual data in req.body.
// Without this middleware, Express doesn’t know how to handle JSON request bodies.

// Why do we use JSON to communicate between servers?
// - Human-readable
// - Lightweight and less verbose than XML
// - Easily supported by all programming languages
// - Native to JavaScript (ideal for web apps and APIs)
// - Works well with REST APIs and frontend frameworks

// Are there other data formats? Why aren't they as popular?
// - XML: Too verbose, harder to read, mostly used in legacy systems
// - Form Data (x-www-form-urlencoded or multipart): Good for forms, but limited for APIs
// - YAML: Great for config files, but not ideal for API payloads
// - Protobuf / MsgPack: Compact and fast, but binary (not human-friendly), harder to debug

// Conclusion:
// JSON is the default choice for most APIs today because it balances readability,
// structure, and cross-language compatibility.
// Middleware like express.json() is critical to convert raw JSON into usable req.body objects.
