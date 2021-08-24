var text2       = $(".main-title h1 img.text2");
var dino        = $(".main-title h1 img.dino");

var tl = new TimelineLite;

tl.to(text2,0.7,{
    opacity:1,
    top:"50%",
    delay:4.8,
    repeat:-1,
    repeatDelay:5.8,
    yoyo:true,
    ease: Power1.easeOut
})

tl.to(dino,0.7,{
    opacity:1,
    top:"50%",
    delay:5.8,
    repeat:-1,
    repeatDelay:5.8,
    yoyo:true,
    ease: Power1.easeOut
})