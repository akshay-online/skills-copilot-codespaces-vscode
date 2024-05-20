// Create web server
// 1. Create a new web server
// 2. Listen on a port
// 3. Handle requests
// 4. Read a file
// 5. Return a response

// 1. Create a new web server
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();
const port = 3000;

// 2. Listen on a port
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// 3. Handle requests
server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    // 4. Read a file
    if (path === '/comments') {
        fs.readFile('./comments.json', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(err));
                return;
            }
        });
    }
});