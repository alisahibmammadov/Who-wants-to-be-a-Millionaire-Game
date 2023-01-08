const question = document.getElementById('question')
const prize = document.querySelector('.prize_1')
const prize2 = document.querySelector('.prize_2')

const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')

function questions(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions2()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions2(){
    question.innerText = 'Where is the capital of Russia?'
    a.innerText = 'A: Moscow'
    b.innerText = 'B: New York'
    c.innerText = 'C: Ankara'
    d.innerText = 'D: Baku'

    a.addEventListener('click',()=>{
        a.classList.add('true')
        prize2.classList.add('win')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        a.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        a.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        a.classList.add('true')
    })
}
questions()