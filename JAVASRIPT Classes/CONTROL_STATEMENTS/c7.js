//do while --- if we want the iteration atleast one time then we use do while

do{
    console.log("do while")
}while(false) //here if while(true), then the next statements won't be executed because of unreachable code detection as it will be infinite loop

var a=10
console.log(a)

var i=1
do{
    console.log("do while "+ i)
    i++
}while(i<=10)
