function primeiroGrau(a, b, x) {
  return a * x + b;
}
// calcula f(42) para f(x) = 3*x + 2
// console.log(primeiroGrau(3, 2, 42));


function calculaPrimeiroGrau(a){
  return function(b){
    return function(x){
      return a * x + b
    }
  }
}

console.log(calculaPrimeiroGrau(3)(2)(42));


const calculaPrimeiroGrauArrow = (a) => (b) => (x) => a * x + b

const primeiraChamada = calculaPrimeiroGrauArrow(3)

const segundaChamada = primeiraChamada(2)

const terceiraChamada = segundaChamada(42)


console.log(terceiraChamada);