//Strings 
userName="Ujwala"
console.log(userName) //Ujwala
console.log(typeof(userName)) //String
console.log(userName[1]) //j

//here the values didn't change because String is "immutable" i.e it cannot be changed once it is created 
userName[1]="s"
console.log(userName) //Ujwala
console.log(userName[1]) //j

//In js, we can create String in two ways // using literals //using constructor

//this is constructor approach
var userName=String ("Ujwala Vadigi")
console.log(userName)