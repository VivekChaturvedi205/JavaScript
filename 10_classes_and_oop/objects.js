function mutiplebly(nums){
    return nums*5
}

mutiplebly.power=3
console.log(mutiplebly(6))
console.log(mutiplebly.power)
console.log(mutiplebly.prototype)


function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`Current price this.score`);
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe()