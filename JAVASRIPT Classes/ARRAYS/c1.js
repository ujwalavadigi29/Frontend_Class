var l1=[10,20,30,40,50,10,20]
//       0  1  2  3  4  5  6 --- starts with index no. 0

console.log(l1)  //[10,20,30,40,50,10,20] i.e Arrays is accepting duplicate values and also it maintains insertion order
console.log(l1.length)
console.log(l1[0]) //10
console.log(l1[1]) //20
console.log(l1[2]) //30
console.log(l1[3]) //40
console.log(l1[4]) //50
console.log(l1[5]) //10
console.log(l1[6]) //20
console.log(l1[7]) //undefined

l1[0]=100
console.log(l1) //[100,20,30,40,50,10,20] i.e it dynamically changes value of index position ('0')

l1[7]=700
console.log(l1) //[100,20,30,40,50,10,20,700]

l1[8]=800
console.log(l1) //[100,20,30,40,50,10,20,700,800]

l1[10]=1000
console.log(l1) //[ 100, 20, 30, 40, 50, 10, 20, 700, 800, <1 empty item>, 1000 ]

l1[9]=900
console.log(l1) //[ 100, 20, 30, 40, 50, 10, 20, 700, 800, 900, 1000 ]

console.log(l1.length)

//printing all elements without calling every element individually
//By uisng iterations
for(var i=0;i<l1.length;i++){
    console.log(l1[i])
}
