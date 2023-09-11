#!/usr/bin/node

const req = require('request');
const fs = require('fs');
const url = process.argv[2];
const file = process.argv[3]; 

req.get(url,{encoding: 'utf-8'} , (err, res, body) => {
    if (err) 
    console.log(err);
    else{
        fs.writeFile(process.argv[3], body, 'utf8');
    }
  });