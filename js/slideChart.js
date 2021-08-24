var percent = $(".result-text span").text();
percent = percent.substr(0, percent.length -1);        

var graphWrap = $(".graph");

const swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,  
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
});

swiper.on("slideChange",function(){
    var r_idx = swiper.activeIndex;
    if(r_idx == 0){
        setTimeout(function(){
            graphWrap.eq(1).find("canvas").animate({
                opacity : 0
            },300,function(){
                graphWrap.eq(1).data('easyPieChart').update(0);
            })
        })
        graphWrap.eq(0).find("canvas").animate({
            opacity:1
        },0, function(){
            graphWrap.eq(0).data('easyPieChart').update(91)
        })
        var graph = graphWrap.eq(0).easyPieChart({
            barColor: "#5b89e8",
            trackColor: "#e3e4e8",
            scaleColor: "#fff",
            lineCap: 'round',
            lineWidth: 63,
            size:404,
            animate: 1000
        });
    }
    else if(r_idx == 1){
        setTimeout(function(){
            graphWrap.eq(0).find("canvas").animate({
                opacity : 0
            },300,function(){
                graphWrap.eq(0).data('easyPieChart').update(0);
            })
            graphWrap.eq(2).find("canvas").animate({
                opacity : 0
            },300,function(){
                graphWrap.eq(2).data('easyPieChart').update(0);
            })
        })
        graphWrap.eq(1).find("canvas").animate({
            opacity:1
        },0, function(){
            graphWrap.eq(1).data('easyPieChart').update(91)
        })
        var graph = graphWrap.eq(1).easyPieChart({
            barColor: "#5b89e8",
            trackColor: "#e3e4e8",
            scaleColor: "#fff",
            lineCap: 'round',
            lineWidth: 63,
            size:404,
            animate: 1000
        });
    }else if(r_idx == 2){
        setTimeout(function(){
            graphWrap.eq(1).find("canvas").animate({
                opacity : 0
            },300,function(){
                graphWrap.eq(1).data('easyPieChart').update(0);
            })
        })
        graphWrap.eq(2).find("canvas").animate({
            opacity:1
        },0, function(){
            graphWrap.eq(2).data('easyPieChart').update(91)
        })
        var graph = graphWrap.eq(2).easyPieChart({
            barColor: "#5b89e8",
            trackColor: "#e3e4e8",
            scaleColor: "#fff",
            lineCap: 'round',
            lineWidth: 63,
            size:404,
            animate: 1000
        });
        
    }
})

var graph = graphWrap.eq(0).easyPieChart({
    barColor: "#5b89e8",
    trackColor: "#e3e4e8",
    scaleColor: "#fff",
    lineCap: 'round',
    lineWidth: 63,
    size:404,
    animate: 1000
});