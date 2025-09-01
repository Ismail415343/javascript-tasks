//Using Fetch with Promises

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data=>{
console.log("the first 5 posts of ",data.slice(0,4))
})
.catch(error=>{
    console.log("error",error)
});