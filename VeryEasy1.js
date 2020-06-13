/*
    Write a function thak takes an integer minutes and converts it to seconds.
    Ex:  convert(5) ->  300
         convert(3) ->  180
*/

const convert = minutes => 60 * minutes;

console.log(`5 minutes -> ${convert(5)} seconds`);
console.log(`3 minutes -> ${convert(5)} seconds`);
console.log(`80 minutes -> ${convert(5)} seconds`);