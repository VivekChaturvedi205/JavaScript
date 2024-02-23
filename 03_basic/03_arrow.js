const user={
    username:"vivek",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sunny"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username="sunny"
//     console.log(this.username);
// }

// chai()

// const chai=function(){
//     let username="sunny"
//     console.log(this.username)
// }

// chai()

// const chai=()=>{
//         let username="sunny"
//         console.log(this)
//     }
// chai()

// () => {}  // Basic Arrow Functions

// const addtwo =(num1, num2)=>{
//     return num1+num2
// }

// console.log(addtwo(1, 2))

// const addtwo =(num1, num2)=>num1+num2 // Implicit return 
// const addtwo =(num1, num2)=>(num1+num2) // Implicit return 
// const addtwo =(num1, num2)=>({name: "vivek"})
// console.log(addtwo(1, 2))