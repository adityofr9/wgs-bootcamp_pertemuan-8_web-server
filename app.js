const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        const url = req.url;
        console.log(url);

        // res.writeHead(200, {'Content-Type': 'text/plain'});

        const page = () => {
            
        }

        if(url === '/about'){
            // res.write('<h1>This is about page</h1>');
            fs.readFile('./about.html', (err, data) => {
                if(err){
                    res.writeHead(404);
                    res.write('Error : page not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
        } else if (url === '/contact') {
            // res.write('<h2>This is contact page</h2>');
            fs.readFile('./contact.html', (err, data) => {
                if(err){
                    res.writeHead(404);
                    res.write('Error : page not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
        } else {
            // res.write('Hello World!');
            fs.readFile('./index.html', (err, data) => {
                if(err){
                    res.writeHead(404);
                    res.write('Error : page not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
            
            
        }

    })
    .listen(3000, () => {
        console.log('Server is listening on port 3000');
    });