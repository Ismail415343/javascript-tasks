//document.getelementbyid

/*let heading = document.getElementById("heading");
console.dir(heading)*/


//document.getelementbyclassname

/*let headings = document.getElementsByClassName("heading-class")
console.dir(headings)
console.log(headings)*/

// document.getelementbytagname

/*let parahs = document.getElementsByTagName("p");
console.dir(parahs);*/

//query selector


/*let First_Element = document.querySelector("p");
console.dir(First_Element)*/


/*let all = document.querySelectorAll("p");
console.dir(all)*/

/*let c = document.querySelector(".heading-class")
console.dir(c);

let b = document.querySelectorAll(".headig-class");
console.dir(b);*/

/*let p = document.querySelector("#myid");
console.dir(p);*/

 
/*let title = document.getElementById("mainTitle");
console.log("By ID:", title.innerText);


let desc = document.getElementsByClassName("description")[0];
console.log("By Class:", desc.innerText);


let paragraphs = document.getElementsByTagName("p");
console.log("By Tag Name (second p):", paragraphs[1].innerText);


let firstItem = document.querySelector(".item");
console.log("querySelector (first item):", firstItem.innerText);


let allItems = document.querySelectorAll(".item");
allItems.forEach(item => console.log("querySelectorAll:", item.innerText));*/


/*let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function() {
    let taskText = input.value.trim();

    if(taskText !== "") {
      
        let li = document.createElement("li");
        li.textContent = taskText;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = " remove";

        removeBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        input.value = "";
    }
});*/



/*let form = document.getElementById("myForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        message.textContent = "⚠️ Please fill all fields!";
        message.style.color = "red";
    } else {
        message.textContent = " Form submitted successfully!";


        form.reset();
    }
});*/


/*let count = 0;
const counter = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", function() {
  count++;
  counter.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function() {
  count--;
  counter.textContent = count;
});

document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  counter.textContent = count;
});*/