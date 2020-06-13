/*
    Create a function that takes two strings as arguments and returns the numbers of times
    the first string(the single character) is found in the second string.
*/

function charCount(str1, str2){
    var count = 0;
    for( let i=0; i<str2.length; i++){
        if(str1 == str2[i]){
            count++;
        }
    }
    return count;
}

var str1 = 'a';
var str2 = 'edabit';
console.log(`charCount("${str1}", "${str2}") -->  ${charCount(str1, str2)}`);

str1 = 'b';  str2 = 'big fat bubble';
console.log(`charCount("${str1}", "${str2}") -->  ${charCount(str1, str2)}`);

str1 = 'B'; str2 = 'big fat bubble';
console.log(`charCount("${str1}", "${str2}") -->  ${charCount(str1, str2)}`);

