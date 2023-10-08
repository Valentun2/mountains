

const parallax =document.querySelector(".parallax")
const content = document.querySelector('.parallax__container')
const clouds=document.querySelector('.images-parallax__clouds')
const mountains = document.querySelector('.images-parallax__mountains')
const human = document.querySelector('.images-parallax__human')

const forClouds = 40;
const forMountains = 20;
const forHuman = 10;

const speed = 0.05

let positsonX = 0, positsonY = 0;
let coordXprocent = 0, coordYprocent = 0; 

window.onload = function (){
    if(parallax){
setMouseParallaxStyle()

parallax.addEventListener("mousemove", hadleMouseMove)

let thresholdSets = [];
for (let i = 0; i <=1; i+=0.005) {
    thresholdSets.push(i)
    
}

const observer = new IntersectionObserver(setParallaxItemsStyle, {
    threshold: thresholdSets
});

observer.observe(document.querySelector('.content'));


}



function setMouseParallaxStyle(){
    const distX = coordXprocent - positsonX
    const distY = coordYprocent - positsonY;


    positsonX = positsonX +(distX*speed);
    positsonY = positsonY +(distY*speed);


    clouds.style.cssText = `transform: translate(${positsonX / forClouds}%,${positsonY / forClouds}%)`
    mountains.style.cssText = `transform: translate(${positsonX / forMountains}%,${positsonY / forMountains}%)`
    human.style.cssText = `transform: translate(${positsonX / forHuman}%,${positsonY / forHuman}%)`
    requestAnimationFrame(setMouseParallaxStyle)

}


function hadleMouseMove(e){
    const parallaxWidth = parallax.offsetWidth;
    const parallaxHeight = parallax.offsetHeight;

const coordX = e.pageX - parallaxWidth/2;
const coordY = e.pageY - parallaxHeight/2;

coordXprocent = coordX / parallaxWidth * 100;
coordYprocent = coordY / parallaxHeight * 100;
}





function setParallaxItemsStyle(){
    const scrollTopProcent = window.scrollY / parallax.offsetHeight * 100;

    content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
    mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
    human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
}
}

