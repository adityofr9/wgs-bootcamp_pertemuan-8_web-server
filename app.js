const http = require('http');
const fs = require('fs');

const page = (pageLink, res) => {
    fs.readFile(pageLink, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('Error : page not found');
        } else {
            res.write(data);
        }
        res.end();
    })
}

http
    .createServer((req, res) => {
        const url = req.url;
        console.log(url);

        res.writeHead(200, {'Content-Type': 'text/html'});

        if(url === '/about'){
            page('./about.html', res);
        } else if (url === '/contact') {
            page('./contact.html', res);
        } else {
            page('./index.html', res);
            
        }

    })
    .listen(3000, () => {
        console.log('Server is listening on port 3000');
    });