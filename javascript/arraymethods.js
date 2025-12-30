// let a = [3, 6, 8, 4, 74, 686,  685, 45, 23, 12]
// console.log(a.length)
// console.log(a.toString())
// console.log(a.join("web"))
// console.log(a.at(5))
// console.log(a[5])
// // a.pop()
// // a.push("new added")
// //a.shift()
// a.unshift("added at first")
// console.log(a)
// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2= [9,7,64,5]
// let c = arr.concat(arr2)
// console.log(arr.flat())
// console.log(arr.slice(3,6))
// console.log(arr.splice(2,5, "new", 10,11,12,13))
// console.log(arr.toSpliced(2,5,"new", 10,11,12,13))
// console.log(arr)
let arr = [1,2,3,4,5,74,75,86,90];

let maparr = arr.map((item, num) => {
    return (item*3);
})

 let eacharr = arr.forEach((item, num) => {
        return item * 3;
})
let filterarr = arr.filter((item, num) => {
        return item > 5;
})

    console.log(maparr);
    console.log(eacharr);
    console.log(filterarr);



