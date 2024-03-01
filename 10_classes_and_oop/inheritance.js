class User{
    constructor(username){
        this.username=username;
   }

   logme(){
    console.log(`Username is ${this.username}`)
   }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
        
}
  addcourses(){
    console.log(`Adding ${this.username}`);
  }
}

const chai=new Teacher("chai","chai@teacher.com","123")
chai.addcourses()

chai.logme()
const masalachai= new User("masalachai")

masalachai.logme()


// console.log(chai=== masalachai)
console.log(chai instanceof Teacher)
