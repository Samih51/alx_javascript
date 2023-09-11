#!/usr/bin/node

const req = require('request');
const url = process.argv[2];
const completed = {};

req.get(url, (err, res, body) => {
    if (err) 
    console.log(err);
    else{
      //  response =JSON.parse(body);

        for(let i=0;i<body.length;i++){
            let count = 0;
            
            for(let j=0;j<body.length;j++){
                if (body[j].userId == i && body[j].completed == 'true')
                    count++;

            }
            if (count !=0)
                completed[i]=count;
        }
        console.log(completed);
    }
  });