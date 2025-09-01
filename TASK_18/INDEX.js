
// 1. fetch all post and print first 5 titles

/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>response.json())
.then(data=>{
    console.log("the full data of json is",data)
    console.log("the first 5 posts of json are", data.slice(0,5));
    
})

.catch(error=>{
    console.log("error", error)
})*/

// 2. fetching single post 

/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(post=>{
    console.log("the single post of the json ",post[0])
})
.catch(error=>{
    console.log("error occures",error)
})*/


//	3.	Try a wrong URL and handle error.


fetch("https://jsonplaceholder.typicddfdode.com/posts")
.then(response =>response.json())
.then(data=>{
    console.log("the full data of json is",data)
    console.log("the first 5 posts of json are", data.slice(0,5));
    
})

.catch(error=>{
    console.log("error", error)
})