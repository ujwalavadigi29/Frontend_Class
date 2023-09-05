//isArray() method
l1=[10,20,30,40,50]
console.log(Array.isArray(l1)) //true

l2=1000
console.log(Array.isArray(l2)) //false

l3="hello"
console.log(Array.isArray(l3)) //false

l4=["java","js","python"]
console.log(Array.isArray(l4)) //true
console.log(l4.length) //3
console.log(l4[1]) //js


//here we will be getting character elements in the string given with those index no.
l5="name one"
console.log(l5[0]) //n
console.log(l5[4]) // 
console.log(l5[5]) //0