const http = require('http'); // Load http module
const port = 3000; // Define the port number
const server = http.createServer((req, res) => { // Configure http server
    console.log("Request sent.");
    res.write("<h1>Welcome to the server</h1>");
    res.end();
});
server.listen(port, () => { //Listen the server
    console.log(`Server running on port ${port}`);
});