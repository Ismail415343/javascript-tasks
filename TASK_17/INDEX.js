
//lexical scoping


function outer(){

    let message ="hello world";

    function inner(){

   console.log("message",message)

   function innertwo(){

    console.log("message 2 ", message)
}
innertwo();
    }
    inner()
    
}
outer();