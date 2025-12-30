
// click eventlistener

document.getElementById("btn").addEventListener("click", function(){
    alert("Button was clicked");
})
document.getElementById("btn2").addEventListener("dblclick", function(){
    alert("Button was doubleclicked");
})

// contextmenu prevent default behaviour

document.getElementById("btn").addEventListener("contextmenu", function(e){
    console.log(e)
    e.preventDefault()
})

// copy eventlistener

document.getElementsByTagName("p")[0].addEventListener("copy",(e)=>{
    e.preventDefault()
    alert("baaaz aa jao!!");
})

// mouseover eventlistener

document.getElementById("btn3").addEventListener("mouseover", function(){
    alert("mouse over listener");
})

// mouseout eventlistener

document.getElementById("btn4").addEventListener("mouseout", function(){
    alert("mouse out listener");
})

// mouse up eventlistener

document.getElementById("btn5").addEventListener("mouseup", function(){
    alert("mouse up listener");
})

// mouse down eventlistener 

document.getElementById("btn6").addEventListener("mousedown", function(){
    alert("mouse down listener");
})