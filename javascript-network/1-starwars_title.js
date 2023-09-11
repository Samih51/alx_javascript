#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`

req.get(url,{ encoding:'utf-8' }).on('data',function(data){
   
    try {
        const response= JSON.parse(data);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
    console.log(response.title);
});