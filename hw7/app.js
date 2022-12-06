let startTime = document.querySelector('.start-timer')
let seconds = document.querySelector('.timer-seconds')
let resetTime = document.querySelector('.reset-timer')

let secondsRemaining

function TimerOn() {
    seconds.textContent = 5
    let timeCount = setInterval(() => {
        secondsRemaining = (seconds.textContent - 1)

        seconds.textContent = secondsRemaining
        if (secondsRemaining <= 0) {
            clearInterval(timeCount)
        }
    }, 1000);

}

startTime.addEventListener('click', () => {
    TimerOn()

})

resetTime.addEventListener('click', () => {
    seconds.textContent = 0
})
