// builtin functions

//timeout

console.log("this is before the function")
setTimeout(()=>{
    console.log("this is inside the function")
},8000);

console.log("this is after the function")


// if we don't use secondes then wie use a sync function or fetch the file from API

console.log("this is before the function")
async function fetchdata() {
    console.log("this is inside the function")
    fetch("http://jsonplaceholder.typicode.com/todos/1")
}


// set interval

// let a = 0;
// let b = setInterval(()=>{
//     console.log("this is inside the function", a)
//     a++
//     if (a == 7) {
//         clearInterval(b)
//     }
// },3000);

// console.log("this is after the function")



