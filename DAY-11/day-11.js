/*let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}*/


/*let div = document.querySelector("div")
div.onmousemove = (e)=>{
    console.log(e)
console.log(e.type)
console.log(e.target)
console.log(e.clientX, e.clientY)
    console.log("you are inside div")
}*/

/*let btn1 = document.querySelector("#btn1")
btn1.onclick = (e) =>{
console.log(e)
console.log(e.type)
console.log(e.target)
console.log(e.clientX, e.clientY)
}*/

// EVENTLISTNER

/*let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", (e)=>{
    console.log("the button was clicked - HANDLER-1")
    //console.log(e)
})
btn1.addEventListener("click", (evt)=>{
    //console.log(evt.type)
   console.log("the button was clicked - HANDLER-2")
})

const handler3 =   ()=>{
     console.log("the button was clicked - HANDLER-3")
    
}
btn1.addEventListener("click",handler3)

btn1.addEventListener("click", ()=>{
 console.log("the button was clicked - HANDLER-4")
    
})

btn1.removeEventListener("click",handler3) */

/*let btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", ()=>{
    console.log("handler 1")
})

let handler2 = ()=>{
    console.log("handler 2")
}
btn1.addEventListener("click", handler2)

btn1.addEventListener("click", ()=>{
    console.log("handler 3")
})

btn1.removeEventListener("click", handler2)*/

/*let modebtn = document.querySelector("#mode")
let currentmode = "light"


modebtn.addEventListener("click", ()=>{
    if(currentmode == "light"){
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black"
    } else{
        currentmode = "light"
         document.querySelector("body").style.backgroundColor = "white"
    }

    console.log(currentmode)
})*/


//keyboard event

/*const box = document.getElementById("mybox");

document.addEventListener("keydown", event => {
    console.log(`key down = ${event.key}`);
    box.style.backgroundColor = "white";   
    box.style.color = "black";             
});

document.addEventListener("keyup", event => {
    console.log(`key up = ${event.key}`);
    box.style.backgroundColor = "black";   
    box.style.color = "white";             
});*/


/*let username;

username = window.prompt("whats your name ")
console.log(username)*/



/*const form = document.getElementById("myfor");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;


  output.innerText = `Submitted! Name: ${name}, Email: ${email}`;


  console.log("Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
});*/


/*function data(){

var a = document.getElementById("n1").value;
var b = document.getElementById("n2").value;
var c = document.getElementById("n3").value;
var d = document.getElementById("n4").value;

if(a==""|| b==""|| c==""|| d==""){
    alert("all fields are mendatory")
    return false;
} else {
    true;
}



}*/



const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  
  const li = document.createElement("li");
  li.textContent = taskText;

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  
  li.addEventListener("dblclick", function() {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

 
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});