{
    let x = 10;
    var y = 20;
    console.log(x);  // 10
    console.log(y);  // 20
}
console.log(y);  // 20 (var is function-scoped or globally scoped)
console.log(x);  // ReferenceError: x is not defined (let is block-scoped)
