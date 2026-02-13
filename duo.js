let str = "hello world people";
// console.log(str.split("").reverse().join(""));
// this is oneline reverse code 
let words = str.split("");
let result =""

for(let i=words.length-1; i>=0; i-- ){
    result += words[i]+" ";
}

console.log(result.trim());