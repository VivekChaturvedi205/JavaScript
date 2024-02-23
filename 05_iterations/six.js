// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)


const myNums=[1,2,3,4,5,6,7,8,9,10]
// // const newnums=myNums.filter((num)=> (num>4))
// // const newnums=myNums.filter((num)=> {num>4}) return likhna adega
// const newnums=myNums.filter((num)=> num>4) //nhi likhne ki jarura
// console.log(newnums)


// const newnums=[];

// myNums.forEach((num)=>{
//     if (num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums)


const Books=[
    {'title':"Book One",genre:"Non-Fiction",publish:1981,edition:1989},
    {'title':"Book Two",genre:"History",publish:1989,edition:1989},
    {'title':"Book Three",genre:"Non-Fiction",publish:1981,edition:2000}   
]

let userBooks=Books.filter((bk)=>bk.genre==="History")
userBooks=Books.filter((bk)=>{ return (bk.publish>1981 && bk.edition===1989)} )
console.log(userBooks)

