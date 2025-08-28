// async function hello(){
//     console.log("hello")
// }

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data",)
            resolve(200)
        }, 2000);
    })
}
api();

async function getweather (){
await api();
await api(  )
}


function getdata(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId)
resolve("sucess")
        }, 2000);
    }
)}

async function data() {
    console.log("getting data1.....")
    await getdata(1);
    console.log("getting data2....")
    await getdata(2)
 console.log("getting data3....")
    await getdata(3)
 console.log("getting data4....")
    await getdata(4)
 console.log("getting data5....")
    await getdata(5)

}