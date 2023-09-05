//indexOf()
l1=[10,20,30,40,50]
//   0  1  2  3  4 ----index positions of each elememt in array list

console.log(l1) //[ 10, 20, 30, 40, 50 ]
console.log(l1.indexOf(10)) //0
console.log(l1.indexOf(30)) //2
console.log(l1.indexOf(60)) //-1
console.log(l1.indexOf(50)) //4
console.log(l1.indexOf(70)) //-1

//includes() --- shows true is element is present in array list or shows false otherwise
l1=[10,20,30,40,50]
console.log(l1.includes(10)) //true
console.log(l1.includes(40)) //true
console.log(l1.includes(60)) //false

//push() --- appends new elements to the end of an array
l1=[10,20,30,40,50]
console.log(l1.length)
l1.push(60)
l1.push(70)
console.log(l1) //[10,20,30,40,50,60,70]

console.log(l1.push(80)) //8 --- by  writing in this type of statement it directly shows length of array after adding new element to it
console.log(l1) //[10,20,30,40,50,60,70,80]


//pop() --- removes the last element from an array
l1.pop()
console.log(l1) //[10,20,30,40,50,60,70]

l1=[10,20,30,40,50]
l1.pop()
console.log(l1) //[ 10, 20, 30, 40 ]
console.log(l1.pop()) //40 --- shows which element is removed by using this statement
console.log(l1) //[ 10, 20, 30 ]


//shift() --- removes first element in the array 
l1=[10,20,30,40,50]
l1.shift()
console.log(l1) //[ 20, 30, 40, 50 ]

console.log(l1.shift()) //20
console.log(l1) //[ 30, 40, 50 ]


//unshift() --- inserts new element at the start of an array
l1=[10,20,30,40,50]
l1.unshift(80)
console.log(l1) //[ 80, 10, 20, 30, 40, 50 ]

console.log(l1.unshift(100)) //7 --- total length of an array after adding new element to it
console.log(l1) //[100, 80, 10, 20, 30, 40, 50 ]

