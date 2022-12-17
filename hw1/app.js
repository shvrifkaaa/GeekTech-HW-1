// const box = document.querySelector('.box')

// let positionX = 440
// let positionY =  0

// const move = () => {
//     if (positionX <= 440) {
//         positionX += 16;
//         box.style.left = `${positionX}px`;
//         setTimeout(move, 100)
//         move()
//     }else if (positionX >= 400 && positionY <= 400) {
//             positionY += 16;
//             box.style.top = `${positionY}px`;
//             setTimeout(move, 100);
//             move();
//           }
// }
// move()

// создать Интервал который будет выводить в консоль колтчество секунд, 
// прошедших с момента запуска программы и останавливать его после 60. 
let secondsRemaining

function Timer() {
  let seconds = 0
   let timeCount = setInterval(() => {
      secondsRemaining = (seconds + 1)
      seconds = secondsRemaining
      if (secondsRemaining >= 60) {  //меняем 60 на любое число
         clearInterval(timeCount)  // стоп для секундомера
      }
      console.log(seconds);
   }, 1000);
}
Timer()