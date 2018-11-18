
class Slider {

    constructor(itemImg, itemPage, itemBtn){
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
  
    inits(obj, style, index){
        obj[index].className = style;
    }

    classActiveImg(activeImg){
        this.activeImg = activeImg;
    }

    classActivePage(activePage){
        this.activePage = activePage;
    }

    classImg(img){
        this.img = img;
    }

    classPage(page){
        this.page = page;
    }

    mySetInterval(interval){
        this.interval = interval;
    }

    nextBtn(e, index, size){
        if(e.dataset.target === "prev"){
            --index;
            if(index < 0)
                index = size-1;
        }else if(e.dataset.target === "next"){
            ++index;
            if(index > size-1)
                index = 0;
        }else {
            index = parseInt(e.dataset.target);
        }
        return index;
    }
 
    start(){

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
       
        function move(){
            return window.setInterval(function(){
                inits(itemImg, img, index);
                inits(itemPage, page, index);
                ++index;
                if(index > itemImg.length-1)
                    index = 0;
                inits(itemImg,  img + " " + activeImg, index);
                inits(itemPage, page + " "  + activePage, index);
            }, interval);
        }
    
        var intervalMove = move();
     
        for(var i = 0; i < this.itemPage.length; i++)
            this.itemPage[i].addEventListener("click", function(e){
                e.stopPropagation();
                inits(itemImg, img, index);
                inits(itemPage, page, index);
                index = nextBtn(this, index);
                inits(itemImg, img + " " +  activeImg, index);
                inits(itemPage, page + " " + activePage, index);
            });

        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                inits(itemImg, img, index);
                inits(itemPage, page, index);
                index = nextBtn(this, index, itemImg.length);
                inits(itemImg, img + " "  + activeImg, index);
                inits(itemPage, page + " " + activePage, index);
            });
   
        for(var i = 0; i < this.itemPage.length; i++)
            this.itemPage[i].addEventListener("mouseover", function(){
                clearInterval(intervalMove);
            });
        for(var i = 0; i < this.itemPage.length; i++)
            this.itemPage[i].addEventListener("mouseout", function(){
                intervalMove = move();
            });
        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("mouseover", function(){
               clearInterval(intervalMove);
            });
        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("mouseout", function(){
                intervalMove = move();
            });
       
    }
}

var slider = new Slider(".sliderImg", ".sliderBtn__dot");

slider.mySetInterval(5000);

slider.classImg("sliderImg");
slider.classPage("sliderBtn__dot");
slider.classActiveImg("opacity");
slider.classActivePage("dot_active");

slider.start();

