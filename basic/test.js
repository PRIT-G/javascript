console.log("hello prit")
const id=123
var password="ABCD"       // for variable in javascript we can use let and var both
var hint="2123"
let email="yahoo@gmail.com"  // but in javascript issue with scope "{   }" we use generally let 
city="surat" // variable
let state;  // undefined value 
// (;) no change 
console.log(id)
console.log(password)
console.log(hint)
console.log(email)
console.log(city)
//   for single line comment 
/*        
         multi line comment
*/


//const  does not  allow to change value
password="1234"
console.log(password)
hint="prit"
email="prit@gmail.com"
console.log(hint)
console.log(email)
console.log("table")
console.table([id,password,hint,email,city,state])
