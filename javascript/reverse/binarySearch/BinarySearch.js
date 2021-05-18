'use strict';

function BinarySearch(arr,key){
    let mid =Math.ceil( arr.length/2);
    let low=0,high=arr.length;
    let found = false
    while (!found) {
        
        if(arr[mid]===key){
            found=true;
        }
        else if(arr[mid]>key){
            high=mid;
            mid= (low+high)/2;
        }
        else if(arr[mid]<key){
            low=mid;
            mid= (low+high)/2;
        }
        else{
            mid=-1;
            break;
        }
    }
        
    return mid;
}
module.exports= BinarySearch;