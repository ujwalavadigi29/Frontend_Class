//charAt()
userName="HelloEveryone"
console.log(userName.charAt(0)) //H
console.log(userName.charAt(5)) //E
console.log(userName.charAt(13)) //Space

//charCodeAt()
userName="HelloEveryone"
console.log(userName.charCodeAt('0')) //72
console.log(userName.charCodeAt('4')) //111
console.log(userName.charCodeAt('5')) //69

//includes
userName="HelloEveryone"
console.log(userName.includes('H')) //true
console.log(userName.includes('e')) //true
console.log(userName.includes('h')) //false

//indexOf()
userName="HelloEveryone"
console.log(userName.indexOf('E')) //5
console.log(userName.indexOf('o')) //4

//lastIndexOf()