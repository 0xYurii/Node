import http from 'node:http'
import { getDataFromDB } from './ds.js'
 
const PORT = 8000
/*
Challenge:
  1. If the client tries to access a route that isn’t covered by the above, send this object: 
      {error: "not found", message: "The requested route does not exist"}
  Think: what do we need to send along with the data?
*/
const server = http.createServer(async(req, res) => {
  console.log(req.url)
  
  const destinations = await getDataFromDB()
  
  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode=200
    res.end(JSON.stringify(destinations))
    
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode=404
    res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
