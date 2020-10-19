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


    function fibonacci(n) {
        let total = 0;
        let result1 = 0; result2 = 1;
        if (n=== 1) {
        return 0;
    }
if (n=== 2) {
    return 1;
}
let counter = 2;
while (counter < n) {
    total = add(result1, result2)
    result1 = result2
    result2 = total
    counter += 1
}
return total
    }
    console.log(fibonacci(8))


