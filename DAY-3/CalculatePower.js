function CalculatePower(base, exponent){
    if(exponent===0){
        return 1
    }
return base * CalculatePower(base, exponent-1)

}

console.log(CalculatePower(2,3))