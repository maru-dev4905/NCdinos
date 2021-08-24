$(window).on("load",function(){
    var morning = $(".clock span");
    var clock = $(".clock p");
    
    
    var clock_func = setInterval(function(){
        var currentNow = new Date();
        
        var theHours = currentNow.getHours();
        var theMinutes = currentNow.getMinutes();
        var theSeconds = currentNow.getSeconds();
        
        if(theHours > 12){
            theHours = theHours - 12;
            morning.text("오후");
        }else{
            morning.text("오전")
        }
    
        theHours    = theHours      >= 10 ? theHours    : '0'+theHours;
        theMinutes  = theMinutes    >= 10 ? theMinutes  : '0'+theMinutes;
        theSeconds  = theSeconds    >= 10 ? theSeconds  : '0'+theSeconds;
    
        clock.text(`${theHours}:${theMinutes}:${theSeconds}`)
    },1000)
})