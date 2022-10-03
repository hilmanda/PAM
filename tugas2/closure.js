function multiplyBy(x) {
    function multipleByX(y) {
        return x * y;
    }
    return multipleByX;
}
var multiplyBy2 = multiplyBy(2);
var multiplyBy10 = multiplyBy(10);
console.log(multiplyBy2(3)); // menghasilkan output 6
console.log(multiplyBy10(5)); // menghasilkan output 50