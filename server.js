import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { url } from 'node:inspector'



const PORT = 8000
const server = http.createServer(async(req, res) => {
/*
  Challenge:
  1. Complete the two lines of code below.
     hint.md for help!
*/

  const urlObj =new URL(req.url,`http://localhost:${PORT}`)

  const queryObj = Object.fromEntries(urlObj.searchParams)
  

  console.log(queryObj)



  console.log(req.url)
  
  const destinations = await getDataFromDB()
  
  if (req.url === '/api' && req.method === 'GET') {
    sendJSONResponse(res,200,destinations)
  } else if(req.url.startsWith("/api/continent") && req.method === 'GET'){
    const continent=req.url.split('/').pop()
    const filteredData=getDataByPathParams(destinations,'continent',continent)
    sendJSONResponse(res,200,filteredData)


  } else if(req.url.startsWith("/api/country") && req.method === 'GET'){
    const country = req.url.split('/').pop()
    const filteredData = getDataByPathParams(destinations,'country',country)
    sendJSONResponse(res,200,filteredData)
    
  } else {
    sendJSONResponse(res,404,{error: "not found", message: "The requested route does not exist"})
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
