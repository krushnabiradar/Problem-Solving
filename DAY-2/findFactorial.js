function Factorial(n){
    let fact= 1;
    for (let i = 2; i<=n; i++) {
        fact *=i ;
    }
    return fact
}

console.log(Factorial(5))