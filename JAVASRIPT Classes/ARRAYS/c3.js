//Slicing
l1=[10,20,30,40,50]
//   0  1  2  3  4
//  -5 -4 -3 -2 -1 
//slice(start,end(n-1))
console.log(l1.slice(0,5)) //[ 10, 20, 30, 40, 50 ]
console.log(l1.slice(0,4)) //[ 10, 20, 30, 40 ]
console.log(l1.slice(0,1)) //[10]
console.log(l1.slice(2,5)) //[30,40,50]

console.log(l1.slice(-1,-4)) //[]
console.log(l1.slice(-4,-1)) //[ 20, 30, 40 ] --- for negative values also it takes in forward direction only

console.log(l1.slice(-1)) //[50]

//Strings work?

