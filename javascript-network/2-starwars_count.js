#!/usr/bin/node

const { log } = require('console');
const req = require('request');
const url = process.argv[2];

req.get(url, (err, res, body) => {
    if (err) 
        console.log(err);
    else{
        let count =0;
        response =JSON.parse(body);
        let result =response.results;
        for(let i=0;i<result.length;i++){
            let character =result[i]['characters']
            for(let j=0;j<character.length;j++){
                if (character[j].includes('18'))
                    count++;
            }

        }
        console.log(count);
    }
  });