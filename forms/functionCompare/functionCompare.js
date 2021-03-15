let password1 = prompt("Enter your password")
let password2 = prompt("Enter your password again")
let similar = ""

function compare(pass1, pass2){
let similar = (pass1 ==  pass2)
if (similar)
console.log("Similar")
else
console.log("Not similar")

return similar
}

console.log(`${password1} and ${password2} is ${compare(password1, password2)}`)