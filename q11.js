
// Palindrome is the string or number if we reverse it will be same as number or string.


var Name=['m','n','n'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
for (var j=0; j<new_array.length;j++){
   if (new_array[j]===Name[j]){
   }
   count++;
}
if(count===Name.length){
   console.log("This is palindrome");
}else{
   console.log("This is not a palindrome");
}




// var Name=['m','o','m'];
// var new_array=[];
// i=Name.length-1
// while(i>=0){
//    new_array.push(Name[i]);
//    i--
// }
// var count=0
// j=0
// while (j<new_array.length){
//    if(new_array[j]===Name[j]){
//    }
//    count++
//    j++
// }
// if(count===Name.length){
//    console.log("this is palindrome")
// }
// else{
//    console.log("This is not a palindrome");

// }




// var Name='malayalam'
// var new_array='';
// for (var i=Name.length-1; i>=0;i--){
//    new_array+=Name[i];
// }
// if(new_array===Name){
//    console.log("This is palindrome");
// }else{
//    console.log("This is not a palindrome");
// }



