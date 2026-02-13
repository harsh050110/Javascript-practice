const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let product = 1;
rl.question("Enter the value of n: ", function(n){
    n = Number.parseInt(n);
    for(let i = 2; i<=n; i++){
        product*= i;
    }
    console.log('Product of frist'+ n +'natural numbers is'+ product);
    rl.close();
});