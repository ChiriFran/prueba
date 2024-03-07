const newScrollTextContainer = document.getElementsByClassName('scrollContainer');

newScrollTextContainer[1].style.background = 'yellow';


const newColorText = document.querySelectorAll('.scrollContainer');

newColorText[1].children[0].style.color = 'black';
newColorText[1].children[0].innerText = "NOT FOUND NOT FOUND";

const newUrl = document.getElementById('cardContainer');

newUrl.lastElementChild.setAttribute('href', 'https://www.twitch.tv/forg1');
console.log(newUrl.lastElementChild.innerHTML);
newUrl.lastElementChild.setAttribute('target', 'blank');

console.log( newUrl.firstElementChild.getAttribute('color') );

const newTittle = document.getElementById('cardContainer');

newTittle.firstElementChild.innerText = 'NOT FOUND'
newTittle.firstElementChild.style.color = 'green';

const verClase = document.querySelectorAll('.scrollText');

console.log( verClase[1].classList.contains('scrollText') );

verClase[1].classList.remove('scrollText');


//Eventos 
const errores = document.getElementsByClassName('evento');

for (const error of errores){
    error.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    
    });
}