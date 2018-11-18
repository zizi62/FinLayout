+(function(){
let btn =  document.querySelector('.mob-btn');
let lineTop = document.querySelector('.mob-btn__line_top');
let lineMiddle = document.querySelector('.mob-btn__line_middle');
let lineDown = document.querySelector('.mob-btn__line_down');
let mobNav = document.querySelector('.mob-nav');

btn.addEventListener('click', function(){

    lineTop.classList.toggle('mob-btn__line_1');
    lineMiddle.classList.toggle('mob-btn__line_2');
    lineDown.classList.toggle('mob-btn__line_3');
    mobNav.classList.toggle('height');
})

}())