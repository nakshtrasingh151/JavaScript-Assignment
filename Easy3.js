/*
    Create a function that takes a string and replaces the vowels with another character.
    a=1, e=2, i=3, o=4, u=5
*/

function replaceVowels(str){
    for(let i=0; i<str.length; i++){
        switch(str[i]){
            case 'a':
                str = str.replace('a', '1');
                break;
            case 'e':
                str = str.replace('e', '2');
                break;
            case 'i':
                str = str.replace('i', '3');
                break;
            case 'o':
                str = str.replace('o', '4');
                break;
            case 'u':
                str = str.replace('u', '5');
                break;
        }
    }
    return str;
}

var str = 'karachi';
console.log(`replaceVowels(${str}) --> ${replaceVowels(str)}`);

str = 'chembur';
console.log(`replaceVowels(${str}) --> ${replaceVowels(str)}`);

str = 'khandbari';
console.log(`replaceVowels(${str}) --> ${replaceVowels(str)}`);
