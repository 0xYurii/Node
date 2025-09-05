import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSON } from './utils/sendJSON.js'
import { send } from 'node:process'

/*
Challenge:
  1. Add an 'api/country/<country>' route.
*/


const PORT = 8000
const server = http.createServer(async(req, res) => {
  console.log(req.url)
  
  const destinations = await getDataFromDB()
  
  if (req.url === '/api' && req.method === 'GET') {
    sendJSON(res,200,destinations)
  }else if(req.url.startsWith("/api/continent") && req.method === 'GET'){
    const continent=req.url.split('/').pop()
    const continentArray=destinations.filter(el=>el.continent.toLowerCase()===continent.toLowerCase())
    sendJSON(res,200,continentArray)


  }else if(req.url.startsWith("/api/country") && req.method === 'GET'){
    const country=req.url.split('/').pop()
    const countryArray=destinations.filter(el=>el.country.toLowerCase()===country.toLowerCase())
    sendJSON(res,200,countryArray)
  } else {
    sendJSON(res,404,{error: "not found", message: "The requested route does not exist"})
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
