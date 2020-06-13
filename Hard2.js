/*
    Create a function that takes an array of strings and returns an array with only 
    the strings that have numbers in them. If there are no strings containing numbers, 
    return an empty array.
    	numInStr (["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
*/

function numInStr(arr){
    let newArr = [];
    let flag = 0, k = 0;
    for(let j=0; j<arr.length; j++){
        let x = arr[j];
        for(let i=0; i<x.length; i++){
            if( x[i]==0 || x[i]==1 || x[i]==2 || x[i]==3 || x[i]==4 || 
                x[i]==5 || x[i]==6 || x[i]==7 || x[i]==8 || x[i]==9 )
            {
                flag=1;
                break;
            }
        } 
        if(flag == 1){ newArr[k] = x; 
                        k++; }
        flag=0;
    }
    return newArr;
}

let arr = ["abc", "ab10c", "a10bc", "bcd"];
console.log(`numInStr("${arr}") --> ${numInStr(arr)}`);

arr = ["1a", "a", "2b", "b"];
console.log(`numInStr("${arr}") --> ${numInStr(arr)}`);

arr =["abc", "abc10"];
console.log(`numInStr("${arr}") --> ${numInStr(arr)}`);

arr = ["this is a test", "test1"];
console.log(`numInStr("${arr}") --> ${numInStr(arr)}`);
