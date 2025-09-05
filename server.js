import http from 'node:http'
import { getDataFromDB } from './ds.js'
import { sendJSON } from './sendJSON.js'

/*
Challenge:
  1. Create a utility function to make this code DRYer.
  2. Delete unnecessary code.
*/


const PORT = 8000
const server = http.createServer(async(req, res) => {
  console.log(req.url)
  
  const destinations = await getDataFromDB()
  
  if (req.url === '/api' && req.method === 'GET') {
    sendJSON(res,destinations)
  }else if(req.url.startsWith("/api/continent") && req.method === 'GET'){
    const continent=req.url.split('/').pop()
    const continentArray=destinations.filter(el=>el.continent.toLowerCase()===continent.toLowerCase())
    sendJSON(res,continentArray)


  } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode=404
    res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
