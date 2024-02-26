// const myNums=[1,2,3]

// const total=myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`)
//     return acc+curval
// },0);


// const total=myNums.reduce((acc,curval)=>(acc+curval),3);

// console.log(total)


const shoppingList =[
    {
        itemname:'js_course',
        price:2999
    },
    {
        itemname:'python',
        price:500
    },
    {
        itemname:'mobiledev',
        price:19999
    },
    {
        itemname:'datascience',
        price:25000
    }
]

const total= shoppingList.reduce((acc,item)=>(item.price+acc),0);
console.log(total);

