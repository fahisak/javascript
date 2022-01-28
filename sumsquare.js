const arr=[1,2,3,4,5]
var sum=0
var square=0
for(var i=0;i<arr.length;i++){
    square=arr[i]*arr[i]
    console.log("square of ",arr[i] ,"=",square)
    sum=sum+square

}
console.log("sum of square of an array elements is =",sum)