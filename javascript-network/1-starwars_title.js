#!/usr/bin/node

const req = require('request');
const url = `https://swapi-api.alx-tools.com/api/films/${id}`
const id =process.argv[2];

req.get(url,{encoding:'utf-8'}).on('data',function(data){
    const response= JSON.parse(data);
    console.log(response.title);
});