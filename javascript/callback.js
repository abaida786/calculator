// callback function
function greet (name, hello){
    console.log('Hello',(name));
    console.log(hello() * 5)
    hello();
}
// callback function
function sayGoodbye() {
    console.log("Goodbye!");
    return 10 + 7;
}

//calling the greet function with the sayGoodbye function as a callback
greet("Abaida", sayGoodbye);