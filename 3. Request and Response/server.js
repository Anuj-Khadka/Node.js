const http = require('http')
const fs = require('fs')
const _ = require('lodash')

let server = http.createServer((req, res) => {
    // console.log('request made\n', req)
    console.log(req.url, req.method)

    // lodash
    const num = _.random(1,10)
    console.log(num)

    const great = _.once(()=>{         // run only once
        console.log('hello')    
    }
    )

    great()
    great()

    
    // text type
    // set header content type 
    // res.setHeader('Content-Type', 'text/plain')

    // send res to the browser
    // res.write("hello world.")


    // type html
    res.setHeader('Content-Type', 'text/html')

    // res.write('<h1>Hello world</h1>')

    // res.end()


    

    let path = './3. Request and Response/views/';

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;

        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;

        case '/contact':
            path += 'contact.html'
            res.statusCode = 200
            break;

        default:
            path += '404.html';
            res.statusCode = 404
            break;
    }

    // render html page 
    // fs.readFile('./views/index.html', (err, docs) => {
        fs.readFile(path, (err, docs) => {                          // multiple routes
            if (err) {
                console.log('error', err)
                res.end()
            }
            else {
                // res.write(docs)
                res.end(docs)           // shorthand
                console.log(res.statusCode)
            }
        })

})

server.listen(3000, 'localhost', () => {
    console.log('server has been listening')
})