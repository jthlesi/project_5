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
    $("#prev_3").addClass("hide");
    $("#prev_4").addClass("hide");
    $("#prev_5").addClass("hide");
    $("#prev_6").addClass("hide");
    $("#prev_7").addClass("hide");
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
    $("#slide_1_"+i).css("background","url(img/banner_"+i+".webp)")
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

function slide(index) {
    $("#slidesWrap_2").stop().animate({"marginLeft": - 1134 * (index) + "px"},"slow","linear");
}

function slide_1(index) {
    $("#slidesWrap_2").stop().animate({"marginLeft": - ((1134/3) + (1134 * (index))) + "px"},"slow","linear");
}

function slide_1_2(index) {
    $("#slidesWrap_2").stop().animate({"marginLeft": - ((1134 * (index))-((1134/3)*2)) + "px"},"slow","linear");
}

$("#prev_2").click(function () {
    if (index==2){
        slide_1_2(index-1)
        index--;
        $("#next_2").removeClass("hide");
    } else if (index == 1) {
        slide(index - 1);
        index--;
        $("#next_2").removeClass("hide");
        $("#prev_2").addClass("hide");
    }
})

$("#next_2").click(function () {
    if (index < 1) {
        slide(index + 1);
        index++;
        $("#prev_2").removeClass("hide");
    } else if (index==1){
        slide_1(index);
        index++;
        $("#prev_2").removeClass("hide");
        $("#next_2").addClass("hide");
    }
})

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "베스트셀러", size: 18},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<16;i++){
        $(".cover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".title").eq(i).append("<p>"+msg.documents[i].title.substring(0,10)+"</p>");
        $(".writer").eq(i).append("<p>"+msg.documents[i].authors.slice(0,2)+"</p>");
        $(".rank").eq(i).append("<p>"+(i+1)+"</p>");
        var title=msg.documents[i].title;
        var author=msg.documents[i].authors;
        if(title.length>10){
            $(".title p").eq(i).append("...");
        }
        if(author.length>3) {
            $(".writer p").eq(i).append(" 외");
        }
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "계발", size: 18},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=16;i<19;i++){
        $(".cover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".title").eq(i).append("<p>"+msg.documents[i].title.substring(0,10)+"</p>");
        $(".writer").eq(i).append("<p>"+msg.documents[i].authors.slice(0,2)+"</p>");
        $(".rank").eq(i).append("<p>"+(i+1)+"</p>");
        var title=msg.documents[i].title;
        var author=msg.documents[i].authors;
        if(title.length>10){
            $(".title p").eq(i).append("...");
        }
        if(author.length>3) {
            $(".writer p").eq(i).append(" 외");
        }
        }
    });

var index_2 =0;

function slide_2(index_2){
    $("#slidesWrap_3").stop().animate({"marginLeft": - 1134 * (index_2) + "px"},"slow","linear");
};

$("#next_3").click(function () {
    if (index_2==0) {
        slide_2(index_2 + 1);
        index_2++;
        $("#prev_3").removeClass("hide");
        $("#next_3").addClass("hide");
    }
});

$("#prev_3").click(function () {
    if (index_2==1){
        slide_2(index_2-1)
        index_2--;
        $("#next_3").removeClass("hide");
        $("#prev_3").addClass("hide");
    }
});

$(document).ready(function(){
    $(".star").prepend("<i class='fa-solid fa-star'></i>")
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "시작", size: 20},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<21;i++){
        $(".thumb_4").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".title_4").eq(i).append("<p>"+msg.documents[i].title.substring(0,12)+"</p>");
        $(".author_4").eq(i).append("<p>"+msg.documents[i].authors.slice(0,2)+"</p>");
        var title=msg.documents[i].title;
        var author=msg.documents[i].authors;
        if(title.length>10){
            $(".title_4 p").eq(i).append("...");
        }
        if(author.length>3) {
            $(".author_4 p").eq(i).append(" 외");
        }
        }
    });

var index_4 =0;
var slideWidth = document.querySelector(".slide_4").offsetWidth
var slideNum =5;
var last=0

function slide_4(index_4){
    $("#slidesWrap_4").stop().animate({"marginLeft": - ((slideWidth * slideNum)+(slideWidth*last)) * (index_4)  + "px"},"slow","linear");
};

$("#next_4").click(function () {
    if(index_4==2){
        $("#next_4").addClass("hide");
        last= 2;
        slide_4(index_4);
        index_4++;
        last=0;
    } else if (index_4>=0) {
        slide_4(index_4 + 1);
        index_4++;
        $("#prev_4").removeClass("hide");
    } 
});

$("#prev_4").click(function () {
    if(index_4==1){   
        slide_4(index_4-1);
        index_4--;     
        $("#prev_4").addClass("hide");
    } else if(index_4<3){
        slide_4(index_4-1);
        index_4--;
    } else if (index_4==3){
        last=4;
        slide_4(index_4-2);
        index_4--;
        last=0;
        $("#next_4").removeClass("hide");
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고전", size: 18},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<19;i++){
        $(".slide_5 .cover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".textWrap_5 .title").eq(i).append("<p>"+msg.documents[i].title.substring(0,10)+"</p>");
        $(".textWrap_5 .writer").eq(i).append("<p>"+msg.documents[i].authors.slice(0,2)+"</p>");
        $(".slide_5 .rank").eq(i).append("<p>"+(i+1)+"</p>");
        var title=msg.documents[i].title;
        var author=msg.documents[i].authors;
        if(title.length>10){
            $(".textWrap_5 .title p").eq(i).append("...");
        }
        if(author.length>3) {
            $(".textWrap_5 .writer p").eq(i).append(" 외");
        }
        }
    });

var index_5 =0;

function slide_5(index_5){
    $("#slidesWrap_5").stop().animate({"marginLeft": - 1134 * (index_5) + "px"},"slow","linear");
};

$("#next_5").click(function () {
    if (index_5==0) {
        slide_5(index_5 + 1);
        index_5++;
        $("#prev_5").removeClass("hide");
        $("#next_5").addClass("hide");
    }
});

$("#prev_5").click(function () {
    if (index_5==1){
        slide_5(index_5-1)
        index_5--;
        $("#next_5").removeClass("hide");
        $("#prev_5").addClass("hide");
    }
});
    
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "선택", size: 20},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<21;i++){
        $(".thumb_6").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".title_6").eq(i).append("<p>"+msg.documents[i].title.substring(0,12)+"</p>");
        $(".author_6").eq(i).append("<p>"+msg.documents[i].authors.slice(0,2)+"</p>");
        var title=msg.documents[i].title;
        var author=msg.documents[i].authors;
        if(title.length>10){
            $(".title_6 p").eq(i).append("...");
        }
        if(author.length>3) {
            $(".author_6 p").eq(i).append(" 외");
        }
        }
    });

var index_6 =0;
var slideWidth_6 = document.querySelector(".slide_6").offsetWidth
var slideNum_6 =5;
var last_6=0

function slide_6(index_6){
    $("#slidesWrap_6").stop().animate({"marginLeft": - ((slideWidth_6 * slideNum_6)+(slideWidth*last_6)) * (index_6)  + "px"},"slow","linear");
};

$("#next_6").click(function () {
    if(index_6==2){
        $("#next_6").addClass("hide");
        last_6= 2;
        slide_6(index_6);
        index_6++;
        last_6=0;
    } else if (index_6>=0) {
        slide_6(index_6 + 1);
        index_6++;
        $("#prev_6").removeClass("hide");
    } 
});

$("#prev_6").click(function () {
    if(index_6==1){   
        slide_6(index_6-1);
        index_6--;     
        $("#prev_6").addClass("hide");
    } else if(index_6<3){
        slide_6(index_6-1);
        index_6--;
    } else if (index_6==3){
        last_6=4;
        slide_6(index_6-2);
        index_6--;
        last_6=0;
        $("#next_6").removeClass("hide");
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "자기", size: 20},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<21;i++){
            $(".thumb_7").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
            $(".title_7").eq(i).append("<p>"+msg.documents[i].title.substring(0,12)+"</p>");
            $(".author_7").eq(i).append("<p>"+msg.documents[i].authors.slice(0,2)+"</p>");
            var title=msg.documents[i].title;
            var author=msg.documents[i].authors;
            if(title.length>10){
                $(".title_7 p").eq(i).append("...");
            }
            if(author.length>3) {
                $(".author_7 p").eq(i).append(" 외");
            }
        }
    });

var index_7 =0;
var slideWidth_7 = document.querySelector(".slide_7").offsetWidth
var slideNum_7 =5;
var last_7=0

function slide_7(index_7){
    $("#slidesWrap_7").stop().animate({"marginLeft": - ((slideWidth_7 * slideNum_7)+(slideWidth*last_7)) * (index_7)  + "px"},"slow","linear");
};

$("#next_7").click(function () {
    if(index_7==2){
        $("#next_7").addClass("hide");
        last_7= 2;
        slide_7(index_7);
        index_7++;
        last_7=0;
    } else if (index_7>=0) {
        slide_7(index_7 + 1);
        index_7++;
        $("#prev_7").removeClass("hide");
    } 
});

$("#prev_7").click(function () {
    if(index_7==1){   
        slide_7(index_7-1);
        index_7--;     
        $("#prev_7").addClass("hide");
    } else if(index_7<3){
        slide_7(index_7-1);
        index_7--;
    } else if (index_7==3){
        last_7=4;
        slide_7(index_7-2);
        index_7--;
        last_7=0;
        $("#next_7").removeClass("hide");
    }
});

$("#top").click(function(){
   window.scrollTo(0,0);
});
