/*
    Write a function that reverse all the word inn a sentence that start with perticular letter.
    word searches are super fun   "s"

    word eshcraes are repus fun

*/

function specialReverse(str1, str2){
    for(let i=0; i<str1.length; i++){
        if( str1[i] == str2 ){
            let rWord = "";
            let word = "";
            while(str1[i] != ' ' && (i-1) != str1.length-1 ){
                word = word + str1[i];
                i++;
            }
            for(let k=word.length-1; k>=0; k--){
                rWord +=word[k];
            }
            str1 = str1.replace(word, rWord);
        }
    }
    return str1;
}

var str1 = 'word searches are super fun';
var str2 = 's';
console.log(`specialReverse("${str1}", "${str2}") -->  ${specialReverse('word searches are super fun', 's')}`);

str1 = 'first man to walk on the moon';
str2 = 'm';
console.log(`specialReverse("${str1}", "${str2}") -->  ${specialReverse(str1, str2)}`);

str1 = 'peter piper picked pickled peppers';
str2 = 'p';
console.log(`specialReverse("${str1}", "${str2}") -->  ${specialReverse(str1, str2)}`);
