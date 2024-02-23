// function addtwonuber(a,b){ // Parameters
//     console.log(a+b);
// }

function addtwonuber(a,b){ // Parameters
    // let result= a+b
    // console.log("Vivek Chaubey")
    // return result;
    return a+b;
    
}


// addtwonuber(4,4) // arguments
const result = addtwonuber(3,5)
// console.log("Result:",result)

function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username")
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sunny"))

function calculatecartprice(va1,va2,...num1){ // ye rest operator hai or spread operator hota
    return num1
}

// console.log(calculatecartprice(200,400,500,600))

const user={
    username:'vivek',
    price:10
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)


const newarray=[200,400,100,600]
function returnArray(getaaray){
    return getaaray[1]
}

console.log(returnArray(newarray))