//IndexOf() and lastIndexOf()

l1=[10,20,30,40,50,60,10,70,80,10,90,100]
//   0 1   2  3  4  5  6  7  8  9 10  11
console.log(l1) //[10,20,30,40,50,60,10,70,80,10,90,100]
console.log(l1.length) //12

console.log(l1.indexOf(10)) //0
console.log(l1.lastIndexOf(10)) //9

console.log(l1.indexOf(10,3)) //6  // here '3' is index position from where indexOf() fun starts check from starting
console.log(l1.lastIndexOf(10,8)) //6  // here '8' is index position from where lastIndexOf() fun starts check from last