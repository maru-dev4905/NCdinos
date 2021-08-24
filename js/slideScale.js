var slideWrap = $(".main-slide-wrap");
var slideItem = $(".slide-item");

var slideItemLength = slideItem.length;

var i = -1;
var num = 0;

setInterval(function(){
    itemScale();
}, 2000)

setInterval(function(){
    num += 20;

    slideWrap.css({
        left: 100 + num + 'vw' 
    });
}, 60000)

function itemScale(){
    if(i == 30){
        i = -1;
    }
    slideItem.removeClass("scale");
    i += 1;
    slideItem.eq(i).addClass("scale");
}