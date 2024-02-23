//  if statement


// const isUserloggedIn =true

// if (isUserloggedIn){
//     console.log("Run")
// }
// else{
//     console.log("not Run")
// }
// >,<,<=,>=,==,!=, ===,!==,

// const score=200
// if (score>100){
//     const power ="fly"
//     console.log(`User power:${power}`)
// }


const balance=1000

// if (balance>500) console.log(`Balance: ${balance}`);

// if (balance<500){
//     console.log("less than 500");
// }else if (balance>750) {
//     console.log("less than 750");
// }else if (balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userloggedin=true;
const debitcard=true;
const loggedingoogle=false;
const loggedinemail=true;

if (userloggedin && debitcard){
    console.log("Allow two buy course")
}

if(loggedinemail || loggedingoogle){
    console.log("User Logged In")
}