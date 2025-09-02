
// task 


//1.	Convert previous fetch examples into async/await.

// async function getposts() {
//      try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     });

//     let data = await response.json();
//     console.log(data);

//   } catch (error) {
//     console.log("Error:", error);
//   }
// }


//	2.	Create a function getUserPosts(userId) that fetches posts of a specific user.

async function getuser(userid){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
        let data = await response.json();
        console.log("data",data)
    }catch(error){
        console.log("error",error)
    }
}

getuser(5)