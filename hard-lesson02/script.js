let num = 26621;
let newArray = num.toString().split('').reduce(function(a, b) {
    return (a * b);
});
let result = newArray**3;
console.log(result);