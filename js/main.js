function updateClock(hours, minutes, seconds) {

  var hourDegrees = hours * 30;
  var minuteDegrees = minutes * 6;
  var secondDegrees = seconds * 6;

  $('.hour-hand').css({
    'transform': `rotate(${hourDegrees}deg)`
  });

  $('.minute-hand').css({
    'transform': `rotate(${minuteDegrees}deg)`
  });

  $('.second-hand').css({
    'transform': `rotate(${secondDegrees}deg)`
  });

}

setClockWithCurrentTime();

function setClockWithCurrentTime() {
  var date = new Date();

  var hours = ((date.getHours() + 11) % 12 + 1);
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  updateClock(hours, minutes, seconds);
}

setInterval(setClockWithCurrentTime, 1000);

// // Dependecies
//
// // truncateText method in 1 js file
// function truncateText(element){
//     if(element.innerHTML.length > 30){
//         return element.innerHTML.substring(0,30) ;
//     } else {
//         return element ;
//     }
// }
//
// // addTwoNumbers method in 1 js file
// function addTwoNumbers(a,b){
//     return a + b ;
// }
//
// // IIFE Immediately Invoked Function Expression
// (function(truncate,add){
//     // do something with those methods
// }(truncateText(),addTwoNumbers()))
