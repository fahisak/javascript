function truncatestring(str,start,end){
    if(str.length>start & str.length>=end){
        return str.substring(start,end)


    }
}
var truncatedstring=truncatestring("welcome to javascript",0,7)
console.log(truncatedstring)
