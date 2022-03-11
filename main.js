// Dark Mode Function 
function darkMode() {
   var element = document.body;
   element.classList.toggle("dark");
}

// h1 animations
document.addEventListener('DOMContentLoaded', function (event) {

   var dataText = ["Hello Dear!"];

   function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {

         document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
         setTimeout(function () {
            typeWriter(text, i + 1, fnCallback)
         }, 100);
      } else if (typeof fnCallback == 'function') {
         setTimeout(fnCallback, 1000);
      }
   }

   function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
         setTimeout(function () {
            StartTextAnimation(0);
         }, 3000);
      }
      if (i < dataText[i].length) {
         typeWriter(dataText[i], 0, function () {
            StartTextAnimation(i + 1);
         });
      }
   }
   // start the text animation
   StartTextAnimation(0);
});
