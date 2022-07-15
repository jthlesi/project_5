$("#bannerMenu div").on("click", function(){
    $(this).addClass("on").siblings().removeClass("on");
});

$(document).ready(function(){
    $("#bannerMenu div").eq(0).addClass("on");
})

//슬라이드
$(document).ready(function(){
    $(".slide").not(":first").css({"width":"48px"})
})

function prev() {
    $(".slide:last").prependTo("#slideWrap");
    $(".slide:first").stop().animate({"width":1024},"slow");
    $(".slide").eq(1).stop().animate({"width":48},"slow");
}

function next(){
    $(".slide:first").stop().animate({"width":0},"slow");
    $(".slide").eq(1).stop().animate({"width":1024},"slow",function(){
        $(".slide:first").appendTo("#slideWrap");
        $(".slide:last").css({"width":"48px"});
    });
}

var time = setInterval(next, 2000);

$("#prev").on("click", function(){
    clearInterval(time);
    prev();
    setTimeout(function(){
        time = setInterval(next, 2000);
    },1000);
})

$("#next").on("click", function(){
    clearInterval(time);
    next();
    setTimeout(function(){
        time = setInterval(next, 2000);
    },1000);
})

