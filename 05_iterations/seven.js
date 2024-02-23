const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=myNums.map((n)=>(n+10))  
// console.log(newnums)

// filter or map kudh return kar deta

const newNums=myNums.map((n)=>(n*10))
                    .map((n)=>(n+1)) // return array of numbers
                    .filter((n)=>(n>40)) // True False Game return
console.log(newNums)
