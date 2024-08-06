L = [6,7,4,10,3,8,1,9,5,2]
 
// Sort the list in ascending order
// for(let i=0; i<L.length; i++) {
//     for(let j=0; j<L.length; j++) {
//         if(L[i] < L[j]) {
//             let temp = L[i]
//             L[i] = L[j]
//             L[j] = temp
//         }
//     }
// }
 
L.sort((a,b)=> a-b)
console.log(L)

// Sort in descending order
L.sort((a,b)=> b-a)
L.sort((a,b)=> a-b).reverse();

console.log(L);