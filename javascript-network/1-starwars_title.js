#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/'+id
const output='';

req.get(url,(body) => {
    console.log(JSON.parse(body).title);
  });