#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/'+id
const output='';

req.get(url,{ encoding:'utf-8' }).on('data',function(data){

    output +=data;
}).on('end',function(){
const response= JSON.parse(output);
console.log(response.title);
});