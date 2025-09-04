import http from 'node:http'

const PORT = 8000


const server = http.createServer( (req, res)=> {

  console.log(req.url)

/*
Challenge:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/ api’.
*/

  {req.url==="/api" ?res.end('This is from the server'):res.end('Not found')}

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
