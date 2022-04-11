'use strict';
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dots = document.querySelector('.dots');
const maxSlide = slides.length;
let curSlide= 0;

const createDots = function(){
slides.forEach((_,i)=>dots.insertAdjacentHTML(
    'beforeend',
    `<button class="dot" data-slide="${i}"></button>`));
};
createDots();

const activeDot = function(slide){
    document.querySelectorAll('.dot').forEach(s=>s.classList.remove('active-dot'));
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active-dot');
};

const gotoSlide = function(slide){
    slides.forEach((s,i)=> (s.style.transform = `translateX(${100*(i-slide)}%)`)
    );
};
gotoSlide(0);

const nextSlide = function(){
if(curSlide === maxSlide-1){
    curSlide=0;
}
else{
    curSlide++;
}
gotoSlide(curSlide);
activeDot(curSlide);
};
const prevSlide = function(){
    if(curSlide=== 0){
        curSlide= maxSlide-1;
    }
    else{
        curSlide--;
    }
    gotoSlide(curSlide);
    activeDot(curSlide);
}
btnLeft.addEventListener('click',prevSlide);
btnRight.addEventListener('click',nextSlide);

document.addEventListener('keydown', function(e){
if(e.key === 'ArrowRight') nextSlide();
if(e.key === 'ArrowLeft') prevSlide();


});

dots.addEventListener('click',function(e){
    const {slide} = e.target.dataset;
    gotoSlide(slide);
    activeDot(slide);
})


const mode = document.querySelector('.mode');
const dark = document.querySelector('body');
mode.addEventListener('click',function(){
dark.classList.toggle('dark');
});

