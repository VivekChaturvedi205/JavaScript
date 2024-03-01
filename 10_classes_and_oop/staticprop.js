class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`Username:${this.username}`);
    }

    static createid(){
        return `123`
    }
}

const hitesh=new User("hitesh")
// console.log(hitesh.createid())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const iphone=new Teacher("iphone","iphone@com.apple")
// iphone.logme();
// iphone.createid()