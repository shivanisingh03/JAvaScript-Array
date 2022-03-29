// binary to decimal


let readlinesync=require("readline-sync");
let a=readlinesync.questionInt("enter the number: ")
let add=0
let info=1
while(a){
    let last_digit=a%10;
    a=Math.floor(a/10);
    add+=last_digit*info;

    info=info*2;
    // console.log(add)
    
}
console.log(add)



