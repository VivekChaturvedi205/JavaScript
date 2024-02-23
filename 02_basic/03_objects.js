// singleton
// object.create

// object literal

const mySym=Symbol("Key1")
const jsuser={
    name:"Vivek",
    age:18,
    [mySym]:"mykey1",
    location:"Jaipur",
    "email":"abc@gmail.com",
    isloggedIn:false,
    lastlogindays:["Monday","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[mySym]);
jsuser.email="bca@gmail.com";
// Object.freeze(jsuser);
jsuser.email="bca1@gmail.com";
// console.log(jsuser);

jsuser.greeting= function(){
    console.log("Hello Js user")
}

jsuser.greetingtwo=function(){
    console.log(`Hello Js user ${this.email}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


