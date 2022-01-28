const arr=["J","A","V","A","S","C","R","I","P","T"]
var string=""
var j=0
var i=0
for(var i=0;i<arr.length;i++){
    j=0

    for(const value of arr){
        
        if(j<=i){

            string=string+value
        }

        j=j+1
    }

    string=string+"\n"
        
}
console.log(string)