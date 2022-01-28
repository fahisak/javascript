const str="The Quick Brown Fox"
var res =" "
for(var i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){
        res=res+str[i].toLowerCase()
        
    }
    
    else{
        res=res+str[i].toUpperCase()
    }
}
console.log(str)
console.log(res)