/*
    Create a function that takes an array  of items, removes all duplicate items
    and returns a new array in the same sequential order as the old array.
*/

const removeDups = (arr) => {
    let newArr = [];
    let j=0;
    for(let i=0; i<arr.length; i++){
        if( newArr.includes(arr[i])){
            continue;
        }
        else{
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
    
}


let arr = ["John", "Taylor", "John"];
console.log(`removeDups(${arr}) --> ${removeDups(arr)}`);

arr = ["The", "big", "cat"];
console.log(`removeDups(${arr}) --> ${removeDups(arr)}`);

arr = [1, 0, 1, 0];
console.log(`removeDups(${arr}) --> ${removeDups(arr)}`);

arr = ['John', 10, 'big', 'John', 10];
console.log(`removeDups(${arr}) --> ${removeDups(arr)}`);
