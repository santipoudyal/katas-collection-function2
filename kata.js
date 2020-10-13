console.log("HI SHANTI POUDYEL")
function add(a,b) {
    return a + b
}
let addition = add(6,4)
console.log(addition);

function multiply(a,b) {
    let result = 0;
    let counter = 0;
    while (counter<b) {
        result = add (a, result)
        counter++
    }
    return result;
}
console.log(multiply(6,4));


function power(a, b) {
    let result = 1;
    let counter = 0;
    while (counter<b) {
        result = multiply (a, result)
        counter++
    }
    return result;
}
    console.log(power(2,8))
    console.log(power(3,4))


    function factorial(a) {
        let result = 1;
        let counter = 0;
        while (counter<a) {
            result = multiply(a-counter, result)
            counter++
        }
        return result;
    }
    console.log(factorial(5))


