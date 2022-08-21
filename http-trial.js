const http = require('http')

const server = http.createServer((req, res) => {
//The req reprsent the request made by the user and res is the response which we are sending back to the user
    console.log(req)
    res.write('Welcome to the home page')
    res.end()
})

server.listen(5000)