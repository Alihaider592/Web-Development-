let button = document.getElementById("btn")
button.addEventListener("click",()=>{
    document.getElementById("event").innerHTML = "hey you click your bright future button now your future will be bright"
})

let button2 = document.getElementById("bt")
button2.addEventListener("click",()=>{
    alert("hey my dear you use my browser")
})

let button3 = document.getElementById("b")
button3.addEventListener("click",()=>{
    confirm(" hey you realy want to see the dark links of website like dark web ")
})

function getRandomcolor() {
    let val1 = Math.ceil(0 + Math.random()* 255 )
    let val2 = Math.ceil(0 + Math.random()* 255 )
    let val3 = Math.ceil(0 + Math.random()* 255 )
    return `rgb( ${val1},${val2},${val3})`
}
setInterval(() => {
    Document.getElementById("container").style.background = getRandomcontent()
}, 5000);
