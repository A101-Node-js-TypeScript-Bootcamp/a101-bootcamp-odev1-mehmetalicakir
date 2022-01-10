const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    console.log("Request sent.");
    res.write("<h1>Welcome to the server</h1>");
    res.end();
});




server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});