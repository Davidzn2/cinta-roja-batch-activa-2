const request = require('request')
// Create = POST
// Read   = GET
// Update = PUT
// Delete = DELETE  

// GET == READ
request('https://rickandmortyapi.com/api/character/1', (error, response, body)=>{
    if(error){
        console.log(response.statusCode)
        console.log(error)
    }else{
        cc
        let rick = JSON.parse(body)
        console.log(rick.name)
    }
})
// POST == CREATE
request.post({url:'https://jsonplaceholder.typicode.com/posts', form: { title: "new title", body:'jejejeje'}}, 
(error, response, body)=>{
    console.log(response.statusCode)
        console.log(error)
        console.log(body)
})

// PUT == EDIT
request.put({url:'https://jsonplaceholder.typicode.com/posts/100', form: { title: "new title", body:'jejejeje'}}, 
(error, response, body)=>{
    console.log(response.statusCode)
        console.log(error)
        console.log(body)
})

// DELETE == DELETE
request.delete('https://jsonplaceholder.typicode.com/posts/99', 
(error, response, body)=>{
    console.log(response.statusCode)
        console.log(error)
        console.log(body)
})
