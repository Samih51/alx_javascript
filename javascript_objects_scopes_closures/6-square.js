#!/usr/bin/node
module.exports =class Square extends require('./5-square.js'){
    constructor(size){
        super(size,size);

    }

    charPrint(c){
        for(let i=0;i<this.height;i++){
            for(let i=0;i<this.width;i++){
                process.stdout.write(c);
            }
           console.log(); 
        }
    }
    charPrint(){
        super.print()
    }
}