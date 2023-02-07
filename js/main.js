let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')
let elTitle = document.querySelectorAll('title')
let elMinutes = document.querySelector('.minutes')
let elSeconds = document.querySelector('.seconds')
let elDiv = document.querySelector('.date')

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


function times(){
    let nov = new Date()
    let elHourse = document.createElement('h3')
    elHourse.innerHTML = nov.getHours()
    elDiv.appendChild(elHourse)
    console.log(elHourse);
}


elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let a = elInp.value * 60
    
    const setTime = setInterval((e)=>{
        console.log(a)    
        a -= 1
        if (a < 0 ){
            clearInterval(setTime)
            
            b = 59
            const setTime2 = setInterval(()=>{
            console.log(b);
            b -= 1
            if (b < 0){
            clearInterval(setTime2)
            alert('Vaqt tugadi')
        }
    
    },1000)
        }
    
    },1000)
})


