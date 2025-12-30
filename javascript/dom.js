// console.log(document.getElementById("world"))
// console.log(document.getElementsByClassName("hello")[2])
// console.log(document.getElementsByTagName("h1")[0])
// document.getElementById("world").innerHTML = "this is from <br> Dom in js"
// document.getElementsByClassName("hello")[1].innerText = "this is from <br> Dom in js"
// let box = document.getElementsByTagName("h1")[1]
// box.style.backgroundColor = "red"
// box.style.color = "green"
// box.style.borderRadius = "20PX"


let box = document.getElementById("main")
console.log(box.childNodes[0])

let newelement = document.createElement("u")
newelement.innerHTML = "this is our new alement";

box.appendChild(newelement);
// box.insertBefore(newelement,box.childNodes[2]);
// box.removeChild(box.childNodes[1]);
// box.replaceChild(newelement,box.childNodes[0]);
