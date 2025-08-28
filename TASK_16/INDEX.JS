//leetcode problem 1

/*function api() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("weather api");
      resolve(200);
    }, 2000); 
  });
}

async function getAllData() {
  for (let i = 1; i <= 3; i++) {
    console.log(`fetching data${i}...`);
    await api();
  }
}

getAllData();*/


//leetcode problem 2

function asyncfun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully....");
    
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("fetching data1...");
    await asyncfun2();
    console.log("data 1....");

    console.log("fetching data2...");
    await asyncfun2();
    console.log("data 2.....");

    console.log("fetching data3...");
    await asyncfun2();
    console.log(" data 3.....");
  } catch (error) {
    console.log("error:", error);
  }
}

getData();