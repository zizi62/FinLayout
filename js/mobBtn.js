"use strict";

+function () {
  var btn = document.querySelector('.mob-btn');
  var lineTop = document.querySelector('.mob-btn__line_top');
  var lineMiddle = document.querySelector('.mob-btn__line_middle');
  var lineDown = document.querySelector('.mob-btn__line_down');
  var mobNav = document.querySelector('.mob-nav');
  btn.addEventListener('click', function () {
    lineTop.classList.toggle('mob-btn__line_1');
    lineMiddle.classList.toggle('mob-btn__line_2');
    lineDown.classList.toggle('mob-btn__line_3');
    mobNav.classList.toggle('height');
  });
}();