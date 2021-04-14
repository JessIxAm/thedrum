var counter;
var numberOfDrums = document.querySelectorAll('.drum').length

for (counter = 0; counter < numberOfDrums; counter++){
     document.querySelectorAll('.drum')[counter].addEventListener('click', handleClick);

     
     function handleClick() {
     alert('I got clicked 🥳');
     // document.querySelector('.drum')[counter].style.color = "blue";
     }
}
