

//POST Request with Fetch

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data));


fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body:JSON.stringify({
        title : "hello",
        body:"bar",
        userid:4
    }),
    headers: {
        "content-type": "application/json; charset=utf-8"
    }
})
.then(response=>response.json())
.then(data=> console.log(data))