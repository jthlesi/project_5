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
    $("#prev_2").addClass("hide");
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

var time = setInterval(next, 4000);

$("#banner .wrap ul").hover(function(){
    clearInterval(time);
}, function(){
    setTimeout(time = setInterval(next, 4000),2000);
})

$("#prev").on("click", function(){
    prev();
})

$("#next").on("click", function(){
    next();
})

for(i=1; i<11; i++){
    $("#slide_"+i).css("background","url(img/banner_"+i+".webp)")
}

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "추천", size: 7},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<8;i++){
        $(".thumb").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".bookTxt").eq(i).append("<h2>"+msg.documents[i].contents.substring(0,30)+"...</h2>","<p>"+msg.documents[i].title.substring(0,15)+"</p>");
        var title=msg.documents[i].title;
        if(title.length>15){
            $(".bookTxt p").eq(i).append("...");
        }
        }
    });



var index = 0;

function next_2(index) {
    $("#slidesWrap_2").stop().animate({"marginLeft": - 1134 * (index) + "px"},"slow","linear");
}

function next_2_1(index) {
    $("#slidesWrap_2").stop().animate({"marginLeft": - ((1134/3) + (1134 * (index))) + "px"},"slow","linear");
}

function next_2_2(index) {
    $("#slidesWrap_2").stop().animate({"marginLeft": - ((1134 * (index))-((1134/3)*2)) + "px"},"slow","linear");
}

$("#next_2").click(function () {
    if (index < 1) {
        next_2(index + 1);
        index++;
        $("#prev_2").removeClass("hide");
    } else if (index==1){
        next_2_1(index);
        index++;
        $("#next_2").addClass("hide");
    }
})

$("#prev_2").click(function () {
    if (index==2){
        next_2_2(index-1)
        index--;
        $("#next_2").removeClass("hide");
    } else if (index == 1) {
        next_2(index - 1);
        index--;
        $("#next_2").removeClass("hide");
        $("#prev_2").addClass("hide");
    }
})


