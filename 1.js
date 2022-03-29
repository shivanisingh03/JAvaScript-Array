a=[1,-2,3,-4,5,-6,2,-8,9,-1,10,11,-55,6]
b=[]
i=0
while (i<a.length){
    if(a[i]>0){
        b.unshift(a[i])
        l=b.length
        // console.log(l)
    }
    i++
}
console.log(b)
console.log("mid value is ",(parseInt(b.length)/2))












 



