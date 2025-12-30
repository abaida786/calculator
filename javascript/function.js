// function abaida( num=20 , name="Salar Ahmad"){
//     for(let a = 0 ; a < num ; a++){
//         console.log(a , name);
//     }
// }
// abaida(10);


// annonymous function with no name

// function(){}
// let b = function(){}  // anonymous function assigned to variable b
// let c = num => console.log("hello from arrow function")


// function hello( name = "abaida ejaz" , age = 20){
//     console.log("my name is", name ,"my age is", age )
// }
// hello()

// function hello(a , b) {
//    return a + b;
// }
// console.log(hello(5,3))


// function string(a){
//    console.log("these are vowels:", a)
//    return string;
// }
// string("a,e,i,o,u")


// function countvowels(str) {
//    let count = 0;
//    for (const char of str) {
//       if (
//          char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//       ) {
//       count++;
//       }
//    }
//    console.log(count)
//    // return count;
// }
// countvowels("abaida")



const countvowels = (str) => {
   let count = 0;
   for (const char of str) {
      if (
         char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
      ) {
      count++;
      }
   }
   console.log(count)
   // return count;
}
countvowels("momina")
  