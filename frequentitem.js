const arr=[1,2,5,"a","d","e","a","a",3,3,"a","b","b"]
var previous_count=0
var str=" "
for(i=0;i<=arr.length-1;i++){
    
    for(j=0;j<=arr.length-1;j++){
        if(arr[i]===arr[j]){
            count=count+1
        }
        
    }
    if(count>previous_count){
        previous_count=count
        str=arr[i]
    }
    
    var count=0   

}
console.log(str,"is most frequent  (",str," Repeat ", previous_count,"times )")