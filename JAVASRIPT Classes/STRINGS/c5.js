//split() and join() methods
//split() --- takes string input and returns output as array
var courses = "java python javascript node"
console.log(courses) //java python javascript node
console.log(courses.split(" ")) //[ 'java', 'python', 'javascript', 'node' ]
console.log(courses.split("")) 
// [
//     'j', 'a', 'v', 'a', ' ', 'p',
//     'y', 't', 'h', 'o', 'n', ' ',
//     'j', 'a', 'v', 'a', 's', 'c',
//     'r', 'i', 'p', 't', ' ', 'n',
//     'o', 'd', 'e'
//   ]



//join()--- it takes input as array type and returns output as string type
var courses = [ 'java', 'python', 'javascript', 'node' ]
console.log(courses) //[ 'java', 'python', 'javascript', 'node' ]
console.log(courses.join(" ")) //java python javascript node
console.log(courses.join(" hi ")) //java hi python hi javascript hi node