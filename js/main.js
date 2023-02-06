let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')


// let timeOut = setTimeout((e)=>{
//     console.log('ok');
// },1000*30)




// elForm.addEventListener('submit', (i)=>{
//     i.preventDefault()
//     let a = elInp.value
//     const timeInt = setInterval((e)=>{
//         console.log(a);
//         a -= 1
//         if (a == 0){
//             clearInterval(timeInt)
//         }
//     },1000)
// })


let a = 10

const setTime = setInterval((e)=>{
    console.log(a);
    a -= 1
    if (a < 0 ){
        clearInterval(setTime)
        
        b = 10
        const setTime2 = setInterval(()=>{
        console.log(b);
        b -= 1
        if (b < 0){
        clearInterval(setTime2)
    }

},1000)
    }

},1000)



