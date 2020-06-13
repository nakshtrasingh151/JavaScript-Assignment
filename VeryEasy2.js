/*
    Given two integers a and b, return true if a can divided evenly by  b. Return false otherwise.

*/

function dividesEvenly(x, y){
    if(x<y){
        return('A must be greater than or equal to B!!!!');
    }
    else if( (x%y) == 0 ){
        return true;
    }
    else{
        return false;
    }
}

var a=98;
var b=7;
console.log(`divides(${a},${b}) -> ${dividesEvenly(a,b)}`);

a=8; b=14;
console.log(`divides(${a},${b}) -> ${dividesEvenly(a,b)}`);

a=39; b=2;
console.log(`divides(${a},${b}) -> ${dividesEvenly(a,b)}`);
