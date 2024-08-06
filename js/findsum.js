L = [1,2,3,4,5,6,7,8,9,10]
 
let sum = 0
 
for(let i=0; i<L.length; i++) {
    sum += L[i]
}
 
console.log(sum)
 
let sum2 = 0
 
// Full form fonction
function add(a,b) {
    return a + b
}
sum2 = L.reduce(add)
 
// Arrow (Annoymous) function
sum2 = L.reduce((a, b) => a + b)
 
console.log(sum2)
 
// Find total multiplication value of the list
let total = 1
for(let i=0; i<L.length; i++) {
    total *= L[i]
    }