//find() ---- these are dependent on functions concept
l1=[10,20,30,40,50]

//function
function checkValues(l1){
    return l1>40
}

//call function
console.log(l1.find(checkValues)) //50

//findIndex() ---- these are dependent on functions concept
l1=[10,20,30,40,50]
//   0  1  2  3  4

//function
function checkValues(l1){
    return l1>40
}

//call function
console.log(l1.findIndex(checkValues)) //4
