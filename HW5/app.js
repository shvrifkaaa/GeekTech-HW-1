let betOnBelgium = document.querySelector('.bet-on-Belgium')
let betOnCanada = document.querySelector('.bet-on-Canada')
let betOnSpain = document.querySelector('.bet-on-Spain')
let betOnCostaRika = document.querySelector('.bet-on-Costarika')

let minusOnBelgium = document.querySelector('.minus-score-Belgium')
let minusOnCanada = document.querySelector('.minus-score-Canada')
let minusOnSpain = document.querySelector('.minus-score-Spain')
let minusOnCostaRika = document.querySelector('.minus-score-Costarika')

betOnBelgium.addEventListener('click', ()=>{
    let BelgiumBet = document.querySelector('.Belgium-bet')
    BelgiumBet.value++
})

minusOnBelgium.addEventListener('click', ()=>{
    let BelgiumBet = document.querySelector('.Belgium-bet')
    BelgiumBet.value--
})

betOnCanada.addEventListener('click', ()=>{
    let CanadaBet = document.querySelector('.Canada-bet')
    CanadaBet.value++
})

minusOnCanada.addEventListener('click', ()=>{
    let CanadaBet = document.querySelector('.Canada-bet')
    CanadaBet.value--
})

betOnSpain.addEventListener('click', ()=>{
    let SpainBet = document.querySelector('.Spain-bet')
    SpainBet.value++
})

minusOnSpain.addEventListener('click', ()=>{
    let SpainBet = document.querySelector('.Spain-bet')
    SpainBet.value--
})

betOnCostaRika.addEventListener('click', ()=>{
    let CostaRikaBet = document.querySelector('.CostaRika-bet')
    CostaRikaBet.value++
})

minusOnCostaRika.addEventListener('click', ()=>{
    let CostaRikaBet = document.querySelector('.CostaRika-bet')
    CostaRikaBet.value--
})