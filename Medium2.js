/*
    Create a function that takes in array(slot machine outcome) and returns true 
    if all elements in the array are identical, and false otherwise. the array will 4 elements.

*/

const testJackpot = (sample) => {
    var ans;
    for(let i=0; i<sample.length-1; i++){
        if( sample[i] == sample[i+1] ){
            ans = true;
        }else{
            ans = false;
            break;
        }
    }
    return ans;

}

let sample = ["SS", "SS", "SS", "SS"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);

sample = ["&&", "&", "&&&", "&&&&"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);

sample = ["@", "@", "@", "@"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);

sample = ["abc", "abc", "abc", "abc"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);

sample = ["SS", "SS", "SS", "Ss"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);


