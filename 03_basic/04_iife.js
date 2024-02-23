// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log("DB CONNECTED")
})();

(
    (name)=>{
        // IIFE
        console.log(`DB CONNECTED Two ${name}`)
    }
)('vivek');