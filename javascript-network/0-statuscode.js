#!/usr/bin/node

const { isUtf8 } = require('buffer');
const { log } = require('console');
const req = require('request');
const url = process.argv[2];

req.get(url,{encoding:'utf-8'}).on('status',function(status){
    console.log('code: '+status);
});