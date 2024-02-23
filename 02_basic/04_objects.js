// const tinderuser=new Object()  // Singleton object hai
const tinderuser={}   // Non Singleton object hai

tinderuser.id="123abc"
tinderuser.name="sunny"
tinderuser.isloggedIn=false
// console.log(tinderuser);

const regularUser={
    email:'abc@gmail.com',
    fullname:
    {
        userfullname:{
            firstname:"vivek",
            lastname:"chaubey"
        }
    }
}

// console.log(regularUser);

const obj1={1:"a",2:"b",3:"c",4:"d",5:"e"}
const obj2={6:"f",7:"g",8:"h",9:"i"}
// const obj3= Object.assign({}, obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

const user=[
    {
        id:"1",
        email:"abc@gmail.com"
    },
    {
        id:"1",
        email:"abc@gmail.com"
    },
    {
        id:"1",
        email:"abc@gmail.com"
    }

]

// console.log(user[0].email)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('isloggedIn'))


const course= {
    courseName:"js",
    courseDescription:"learning js"
}

// const {courseName}=course
const {courseName:cname}=course
console.log(cname)