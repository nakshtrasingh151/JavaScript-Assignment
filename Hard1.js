/*
    Create a function that takes a value as an argument and returns the type of this value. 
    You should get the real type of a value (JavaScript typeof doesn't return the real 
    object type of values and you need to fix that).

    realType (1) ➞ "number"
	realType("a") ➞ "string"
 	realType(true) ➞ "boolean"
 	realType ([]) ➞ "array"

*/

function realType(abc){
    return (typeof abc);
}
function realType1(abc){
    return (Object.prototype.toString.call(abc));
}
let abc = 6545465;
console.log(`realType(${abc}) --> ${realType(abc)}`);
console.log(`realType1(${abc}) --> ${realType1(abc)}`);

abc = 'fjjjhsd';
console.log(`realType(${abc}) --> ${realType(abc)}`);
console.log(`realType1(${abc}) --> ${realType1(abc)}`);

abc = true;
console.log(`realType(${abc}) --> ${realType(abc)}`);
console.log(`realType1(${abc}) --> ${realType1(abc)}`);

abc = [];
console.log(`realType(${abc}) --> ${realType(abc)}`);
console.log(`realType1(${abc}) --> ${realType1(abc)}`);



