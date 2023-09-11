#!/usr/bin/node

const req = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/'+process.argv[2];

req.get(url, (err, res, body) => {
    if (err) 
    console.log(err);
    else{
        response =JSON.parse(body);
        let cast = response.charachters;
        for(let i = 0; i<cast.lenth; i++){

            req.get(cast[i], (error, res, bod) => {
                if (error) 
                console.log(error);
                else{
                    resp =JSON.parse(bod);
                    console.log(resp.name);
                }
            });

        }
    }
  });