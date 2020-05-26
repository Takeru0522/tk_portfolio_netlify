console.log('Hello World');


// Nav
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();




const nav1 = document.getElementById("nav-1"); // Home
const nav2 = document.getElementById("nav-2"); // About
const nav3 = document.getElementById("nav-3"); // Work
const nav4 = document.getElementById("nav-4"); // Skill
const nav5 = document.getElementById("nav-5"); // Contact

// const header = document.getElementById("header");
const nav = document.getElementById('nav');
const sectionA = document.getElementById("section-a"); // About
const sectionZ = document.getElementById("section-z"); // History
const sectionB = document.getElementById("section-b"); // Hobby
const sectionC = document.getElementById("section-c"); // Contact
const sectionD = document.getElementById("section-d");

console.log(nav.offsetTop)

nav1.addEventListener('click', () => {
    console.log('clicked')

    nav.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        inline: "nearest"
    });
})
nav2.addEventListener('click', () => {
    sectionA.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
nav3.addEventListener('click', () => {
    sectionB.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
nav4.addEventListener('click', () => {
    sectionC.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
nav5.addEventListener('click', () => {
    sectionD.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})


// const test = document.querySelector('.test');
// console.log(test.innerHTML);

// let num = 1
// console.log(num)

// function func(){
//     num = 2
//     console.log(num)
//     test.innerHTML = 'changed'
// }

// test.addEventListener('show', func)

// const element =  document.querySelector('.my-element')
// element.classList.add('animated', 'zoomIn', )

const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
// function play(){
//     animeSample.classList.add('play-animation');
//     animeSample.classList.remove('pause-animation');
// }
// function pause(){
//     animeSample.classList.remove('play-animation');
//     animeSample.classList.add('pause-animation');
// }
// const animeSample = document.querySelector('.anime-sample');
// const playBtn = document.querySelector('.play-btn');
// const pauseBtn = document.querySelector('.pause-btn');

// playBtn.addEventListener('click', play)
// pauseBtn.addEventListener('click', pause)
