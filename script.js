let textTag = document.querySelector(' .sekcija1 h1');
let text = textTag.textContent;

textTag.className = 'fadeMove';
let splittedText = text.split('');

textTag.innerHTML = '';

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == " ") {
        splittedText[i] = "&nbsp;";
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}
let k = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];
    singleSpan.className = 'fadeMove';
    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }

}, 70);



let textTag2 = document.querySelector(' .sekcija1 h2');

let text2 = textTag2.textContent;

textTag2.className = 'fadeMove2';
let splittedText2 = text2.split('');


textTag2.innerHTML = '';

for (let i = 0; i < splittedText2.length; i++) {
    if (splittedText2[i] == " ") {
        splittedText2[i] = "&nbsp;";
    }
    textTag2.innerHTML += `<span>${splittedText2[i]}</span>`;

}

let k2 = 0;
let interval2 = setInterval(() => {
    let spans2 = textTag2.querySelectorAll('span');
    let singleSpan2 = spans2[k2];
    console.log(spans2[k2]);
    singleSpan2.className = 'fadeMove2';
    k2++;

    if (k2 === spans2.length) {
        clearInterval(interval2);
    }

}, 200);


window.onscroll = () => {
    imageAnimation();


}
const imageAnimation = () => {
    let sekcijaZaAnimaciju = document.querySelector('.sekcija2 .images');
    let sekcijaZaPoziciju = sekcijaZaAnimaciju.getBoundingClientRect().top;
    let pozicijaEkrana = window.innerHeight / 1.9;


    let leftImage = document.querySelector('.slajdSLeva');
    let rightImage = document.querySelector('.slajdSDesna');


    if (sekcijaZaPoziciju < pozicijaEkrana) {


        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }


}
const racunanjeBMI = () => {
    let masa = parseInt(document.querySelector('#prvi').value);
    let visina = parseInt(document.querySelector('#drugi').value);

    let BMI = (masa / (visina / 100 * visina / 100)).toFixed(2);


    let par = document.querySelector('p');

    if (BMI <= 18.5) {
        par.innerText = (`Neuhranjenost  
        BMI je = ${BMI}`);
    }
    else if (BMI > 18.5 && BMI <= 25) {
        par.innerText = (`Normalna uhranjenost 
        BMI je = ${BMI}`);
    }
    else if (BMI > 25 && BMI <= 30) {
        par.innerText = (`Predgojaznost !!! 
        BMI je = ${BMI}`);
    }
    else if (BMI > 30) {
        par.innerText = (`Gojaznost ! 
        BMI je = ${BMI}`);
    }
    else {
        alert(`Popunite prazna polja!`);
    }
}

const p = document.querySelector('p');
    p.addEventListener("mouseover", function(e){   
    let x = e.offsetX;
    let y = e.offsetY;
    p.style.backgroundColor = `rgb(${x%255}, ${y%255}, ${(x + y)%255})`; 
    
});
