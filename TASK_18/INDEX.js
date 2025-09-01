//fetch api

/*const url ="https://cat-fact.herokuapp.com/facts" // give no response because the api is block

// fetch api using async 
console.log("getting data...")
const getfacts = async()=>{
    let response = await fetch(url)
    console.log(response)
}
getfacts();*/

/*const url ="https://jsonplaceholder.typicode.com/posts " // give no response because the api is block

// fetch api using async 

const getfacts = async()=>{
    console.log("getting data...")
    let response = await fetch(url)
    console.log(response)
    let data = await response.json();
    console.log(data);
    
}*/

const url ="https://jsonplaceholder.typicode.com/posts " // give no response because the api is block



const getfacts = async()=>{
    console.log("getting data...")
    let response = await fetch(url)
    console.log(response)
    let data = await response.json();
    console.log(data[0]);
    console.log(data[1].id)
}