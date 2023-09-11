#!/usr/bin/node

const req = require('request');
const url = process.argv[2];
const completed = {};

req.get(url, (err, res, body) => {
    if (err) 
    console.log(err);
    else{
        response =JSON.parse(body);

        for(let i=0;i<response.length;i++){
            let count = 0;
            for(let j=0;j<response.length;j++){
                if (response[j]['user']==i && response[j]['completed'] == 'true')
                    count++;

            }
            completed[i]=count;
        }
        console.log(completed);
    }
  });