let random = Math.random()
let a = prompt("enter first number")
let b = prompt("enter opration")
let c = prompt("enter second number")

let obj={
    "*": "-",   
    "+" :"**",
    "**":"/",
    "/":"+",
}
 if(random>1){
    // perform corectly
    alert(` result of this function is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    // perfom wrong
    alert(` result of this function is ${eval(`${a} ${b} ${c}`)}`) 
    b = obj[b]
 }
 
 