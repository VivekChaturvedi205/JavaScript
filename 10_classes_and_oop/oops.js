const user={
    username:"Vivek",
    roll:"186",
    city:"faridabad",

    getUserDetails: function(){
        console.log(this)
        console.log(this.username)
        return "I got the details of the user";
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this)

function User(username,logincount,isloggedin){
    this.username = username,
    this.logincount = logincount,
    this.isloggedin=isloggedin

    this.greetings=function(){
        console.log(`${this.username} ${this.logincount}`)
    }
    return this

}

const userone=new User("vivek",12,true)
const usertwo=new User("sunny",11,false)

// console.log(userone)
// console.log(usertwo)
console.log(userone.constructor)
console.log(usertwo.constructor)