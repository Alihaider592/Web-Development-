let a = ("Malik ali")
console.log(a + 7)
console.log(typeof a)
const b = "ali"
console.log(b + 1)
role = "web develapors"

let obj = {
    name:"ali haider",
    role:"web develapor",  
    req:"ali haider",
    role:"web develapor",
    name:"ali haider",
    role:"web develapor",
    name:"raza"
}
console.log(obj)

let c = 15
if (c > 10) {
    console.log("he is a younger man")
}
else{
    console.log("he is not a younger man")
}
if (c < 20) {
    console.log("he is a younger man");
}
else{
    console.log("he is not a younger man");
}
let d = 4
 if (d/2) {
    console.log("true")
 }
 else if (d/3) {
    console.log("this is good")
 }
 else{
    console.log(false);
 }
 let e = 15555
 if (5555/2) {
    console.log("it is divisible to 2");
 }
 else if (5555/3) {
    console.log("it is divisible to 3");   
 }
 else{
    console.log("it is not divisible to 2");
    console.log("it is not divisible to 3");
 }

 let f = 20  
 let g = 18
 f > g ? ("you can drive") : ("you cannot drive");

 let obj1 = {
    harry : 98,
    rohan : 100,
    rehaan : 50,
    malik  : 150,
   }
   for (const key in obj1) {
      const element = obj1[key];
      console.log(key,element);
   }
  let correctnumber = 3024227810;
while (true) {
   let userinput = prompt("enter your correct number");
   if (!isNaN(userinput)&& parseInt(userinput)===correctnumber) {
      alert("correct");
      break;
   }
   else{alert("try again")}
} 

   
  