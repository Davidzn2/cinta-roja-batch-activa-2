const request = require('request');
const cowsay = require('cowsay')

request('https://swapi.dev/api/people/',function(error, response, body){
    console.log(error)
    console.log(response.statusCode)
    var data = JSON.parse(body)
    for(let character of data.results){
        console.log(character.name)
    }
})

request('https://swapi.dev/api/people/1',function(error, response, body){
    console.log(error)
    console.log(response.statusCode)
    var data = JSON.parse(body)
    console.log(cowsay.say({
        text:data.name
    }))
})

console.log(cowsay.say({
    text:'Holaaaa'
}))