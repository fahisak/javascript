
function findLarge(num1,num2){
    if(num1>num2){
        return("Largest",num1)
    }
    else if(num1<num2) {
        return("Largest=",num2)
    }
    else{
        return("Both Number are Same")
    }

}
var largest=findLarge(10,20)
console.log(largest)