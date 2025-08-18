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


document.addEventListener("keydown",event=>{
    console.log(x)
})