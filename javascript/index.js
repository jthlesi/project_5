$("#bannerMenu div").on("click", function(){
    $(this).addClass("on").siblings().removeClass("on");
});

$(document).ready(function(){
    $("#bannerMenu div").eq(0).addClass("on");
})

//슬라이드
$(document).ready(function(){
    $(".slide").not(":first").css({"width":"48px"});
    $(".pageWrap").eq(0).show();
    $(".bannerTxt").eq(0).show();
})

function prev() {
    $(".slide:last").prependTo("#slideWrap").css({"width":0});
    $(".slide:first").stop().animate({"width":1024},"slow","linear");
    $(".slide").eq(1).stop().animate({"width":48},"slow","linear");
    $(".bannerTxt").eq(1).fadeOut("slow");
    $(".bannerTxt").eq(0).fadeIn("slow");
    $(".pageWrap").eq(1).fadeOut("slow");
    $(".pageWrap").eq(0).fadeIn("slow");
}

function next(){
    $(".slide:first").stop().animate({"width":0},"slow","linear");
    $(".slide").eq(1).stop().animate({"width":1024},"slow","linear",function(){
        $(".slide:first").appendTo("#slideWrap");
        $(".slide:last").css({"width":"48px"});
    });
    $(".bannerTxt").eq(0).fadeOut("slow");
    $(".bannerTxt").eq(1).fadeIn("slow");
    $(".pageWrap").eq(0).fadeOut("slow");
    $(".pageWrap").eq(1).fadeIn("slow");
}

// var time = setInterval(next, 4000);

// $("#slides ul").hover(function(){
//     clearInterval(time);
// }, function(){
//     time = setInterval(next, 4000);
// })

$("#prev").on("click", function(){
    prev();
})

$("#next").on("click", function(){
    next();
})

for(i=1; i<11; i++){
    $("#slide_"+i).css("background","url(img/banner_"+i+".webp)")
}

