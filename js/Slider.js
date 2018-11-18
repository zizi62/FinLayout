"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(itemImg, itemPage, itemBtn) {
    _classCallCheck(this, Slider);

    this.itemImg = document.querySelectorAll(itemImg);
    this.itemPage = document.querySelectorAll(itemPage);
    this.itemBtn = document.querySelectorAll(itemBtn);
    this.index = 0;
    this.interval = 5000;
    this.activeImg = null;
    this.activePage = null;
    this.img = null;
    this.page = null;
  }

  _createClass(Slider, [{
    key: "inits",
    value: function inits(obj, style, index) {
      obj[index].className = style;
    }
  }, {
    key: "classActiveImg",
    value: function classActiveImg(activeImg) {
      this.activeImg = activeImg;
    }
  }, {
    key: "classActivePage",
    value: function classActivePage(activePage) {
      this.activePage = activePage;
    }
  }, {
    key: "classImg",
    value: function classImg(img) {
      this.img = img;
    }
  }, {
    key: "classPage",
    value: function classPage(page) {
      this.page = page;
    }
  }, {
    key: "mySetInterval",
    value: function mySetInterval(interval) {
      this.interval = interval;
    }
  }, {
    key: "nextBtn",
    value: function nextBtn(e, index, size) {
      if (e.dataset.target === "prev") {
        --index;
        if (index < 0) index = size - 1;
      } else if (e.dataset.target === "next") {
        ++index;
        if (index > size - 1) index = 0;
      } else {
        index = parseInt(e.dataset.target);
      }

      return index;
    }
  }, {
    key: "start",
    value: function start() {
      var inits = this.inits;
      var itemImg = this.itemImg;
      var itemBtn = this.itemBtn;
      var index = this.index;
      var itemPage = this.itemPage;
      var nextBtn = this.nextBtn;
      var interval = this.interval;
      var activeImg = this.activeImg;
      var activePage = this.activePage;
      var img = this.img;
      var page = this.page;

      function move() {
        return window.setInterval(function () {
          inits(itemImg, img, index);
          inits(itemPage, page, index);
          ++index;
          if (index > itemImg.length - 1) index = 0;
          inits(itemImg, img + " " + activeImg, index);
          inits(itemPage, page + " " + activePage, index);
        }, interval);
      }

      var intervalMove = move();

      for (var i = 0; i < this.itemPage.length; i++) {
        this.itemPage[i].addEventListener("click", function (e) {
          e.stopPropagation();
          inits(itemImg, img, index);
          inits(itemPage, page, index);
          index = nextBtn(this, index);
          inits(itemImg, img + " " + activeImg, index);
          inits(itemPage, page + " " + activePage, index);
        });
      }

      for (var i = 0; i < this.itemBtn.length; i++) {
        this.itemBtn[i].addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          inits(itemImg, img, index);
          inits(itemPage, page, index);
          index = nextBtn(this, index, itemImg.length);
          inits(itemImg, img + " " + activeImg, index);
          inits(itemPage, page + " " + activePage, index);
        });
      }

      for (var i = 0; i < this.itemPage.length; i++) {
        this.itemPage[i].addEventListener("mouseover", function () {
          clearInterval(intervalMove);
        });
      }

      for (var i = 0; i < this.itemPage.length; i++) {
        this.itemPage[i].addEventListener("mouseout", function () {
          intervalMove = move();
        });
      }

      for (var i = 0; i < this.itemBtn.length; i++) {
        this.itemBtn[i].addEventListener("mouseover", function () {
          clearInterval(intervalMove);
        });
      }

      for (var i = 0; i < this.itemBtn.length; i++) {
        this.itemBtn[i].addEventListener("mouseout", function () {
          intervalMove = move();
        });
      }
    }
  }]);

  return Slider;
}();

var slider = new Slider(".sliderImg", ".sliderBtn__dot");
slider.mySetInterval(5000);
slider.classImg("sliderImg");
slider.classPage("sliderBtn__dot");
slider.classActiveImg("opacity");
slider.classActivePage("dot_active");
slider.start();