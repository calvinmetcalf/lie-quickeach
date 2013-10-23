function quickEach(arr,func){
    var len = arr.length;
    if(!len){
        return;
    }
 var i = -1;
 while(++i<len){
     func(arr[i]);
 }
}
module.exports = quickEach;
