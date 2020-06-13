/*
    Create a function that takes a number as an arguments. Add up all the numbers from 1 to 
    the number you passed to the function. For example, if the input is 4 then your function
    should return 10 because 1+2+3+4=10.
*/

function addUp(n){
    var add = 0;
    for(let i=1; i<=n; i++){
        add = add+i;
    } 
    return add;
}

var n=5;
console.log(`addUp(${n}) --> ${addUp(n)}`);

n=20;
console.log(`addUp(${n}) --> ${addUp(n)}`);

n=600;
console.log(`addUp(${n}) --> ${addUp(n)}`);
