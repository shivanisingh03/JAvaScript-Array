

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max_num=0;
var second_max=0;
for(var i=0; i<numbers.length;i++){
    if(numbers[i]>max_num){
        if(max_num>second_max){
            second_max=max_num
    }
    max_num=numbers[i];
   }
   else{
       if (second_max<numbers[i]){
           second_max=numbers[i];
       }
   }
}
console.log(second_max)



var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max_num=0;
var second_max=0;
i=0
while(i<numbers.length){
    if(numbers[i]>max_num){
    if(max_num>second_max){
        second_max=max_num
    }
    max_num=numbers[i]
    }
    else{
        if(second_max<numbers[i]){
            second_max=numbers[i];
        }
    }
    i++
}

console.log(second_max)








