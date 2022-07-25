$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "행성", size: 7},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<1;i++){
        $("#sideCover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "추리", size: 10},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {

        for (var i=0;i<11;i++){ 
            
            $("#bestRank li").eq(i).children("span:last").text(msg.documents[i].title.substring(0,14));
            $("#bestRank li").eq(i).children("span:first").text((i+1)+"위");
            var title = msg.documents[i].title;
            if(title.length > 14){
                $("#bestRank li").eq(i).children("span:last").append("...")
            }
        }
   });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점", size: 7},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})

    .done(function (msg) {
        for (var i=0;i<10;i++){
        $("#cover_img").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $("#info_title").eq(i).text(msg.documents[i].title);
        $("#info_author").eq(i).prepend("<span>"+msg.documents[i].authors+"</span>");
        $("#info_publisher").eq(i).prepend("<span>"+msg.documents[i].publisher+"</span>");
        $("#book_price").eq(i).text(msg.documents[i].price+"원");
        $("#isbn").eq(i).text(msg.documents[i].isbn.substring(0,10));
        $("#date").eq(i).text(msg.documents[i].datetime.replaceAll('-','.').substring(0,10)+". 종이책 출간");
        $("h4").eq(i).text(msg.documents[i].authors);
        }
    });

$(document).ready(function(){
    $(".open").addClass("on");
    $("#tab_1").addClass("tab_on");
    $("#sort_1").addClass("sort_on");
    $.get("txt/introduce.txt", function (data) {
        $("#introduce").html(data);
    });
    $.get("txt/publish_coment.txt", function (data) {
        $("#publish_coment").html(data);
    })
    $.get("txt/author.txt", function (data) {
        $("#intro_author").html(data);
    })
    $.get("txt/content.txt", function (data) {
        $("#book_content").html(data);
    })
    for(var i=0;i<20;i++){
        (function(i){
            $.get("txt/review_"+i+".txt", function (data) {
                $(".review_txt .text").eq(i).html(data);
            })
        })(i)
    }
    $.get("txt/buyer.txt", function (data) {
        $("#buyer_toggle").html(data);
    })
});

$(".open").click(function(){
    var openIdx = $(".open").index(this);
    $(".close").eq(openIdx).addClass("on");
    $(".open").eq(openIdx).removeClass("on");
    $(".toggle").eq(openIdx).stop().slideDown("fast");
})

$(".close").click(function(){
    var closeIdx = $(".close").index(this);
    $(".toggle").eq(closeIdx).stop().slideUp("fast");
    $(this).removeClass("on");
    $(".open").eq(closeIdx).addClass("on");
});

$(".open_div").click(function(){
    var divIdx = $(".open_div").index(this);
    if($(".open").eq(divIdx).hasClass("on")){
        $(".toggle").eq(divIdx).stop().slideDown("fast");
        $(".open").eq(divIdx).removeClass("on");
        $(".close").eq(divIdx).addClass("on");
    } else {
        $(".toggle").eq(divIdx).stop().slideUp("fast");
        $(".close").eq(divIdx).removeClass("on");
        $(".open").eq(divIdx).addClass("on");
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "김호연", size: 5},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})
    .done(function (msg) {
        for (var i=0;i<6;i++){
        $(".other_cover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".other_title").eq(i).text(msg.documents[i].title.substring(0,7));
        }
    });

$("#star_selec span").on("mouseenter", function(){
    var starIdx = $("#star_selec span").index(this);
    $(this).prevUntil().addBack().html("★").css({"color":"#f37121"});
    $("#star_text_0").hide();
    $("#star_text_"+(starIdx+1)).prevAll().hide();
    $("#star_text_"+(starIdx+1)).show();
}).on("mouseout", function(){
    $("#star_selec span").html("☆").css({"color":"#999999"})
    $("#star_text_0").show();
    $(".star_text").hide()
})

$(document).ready(function(){
    for (i=0;i<20;i++){
        var char = Math.random().toString(36).substring(2,5);
        const d = new Date();
        let writeDay = d.toLocaleDateString();
        $(".writer_id").eq(i).text(char+"***");
        $(".writer_date").eq(i).text(writeDay);
    }
    $(".text").eq(3).hide();
    $(".text_hide").eq(3).show();
    $(".text").eq(5).hide();
    $(".text_hide").eq(5).show();
});

$(".text_hide span").on("click", function(){
    var hideIdx = $(".text_hide span").index(this);
    $(".text").eq(hideIdx).show();
    $(".text_hide").eq(hideIdx).hide();
});

$(".tab_menu").on("click", function(){
    $(this).addClass("tab_on").siblings().removeClass("tab_on");
    if($("#tab_2").hasClass("tab_on")) {
        $("#sort_3, #sort_4").hide();
    } else {
        $("#sort_3, #sort_4").show();
    }
});

$(".sort").on("click", function(){
    $(this).addClass("sort_on").siblings().removeClass("sort_on");
});

$("#more_btn").on("click", function(){
    $("#review_list_2").stop().slideDown();
});

$("#buyer_more").on("click", function(){
    $("#buyer_toggle").stop().slideToggle();
    if($("i",this).hasClass("fa-angles-down")){
        $("i",this).removeClass("fa-angles-down").addClass("fa-angles-up");
    } else {
        $("i",this).removeClass("fa-angles-up").addClass("fa-angles-down");
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설", size: 10},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})
    .done(function (msg) {
        for (var i=0;i<10;i++){
        $(".differ_cover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".differ_title").eq(i).text(msg.documents[i].title.substring(0,15));
        $(".differ_author").eq(i).text(msg.documents[i].authors);
        var t =msg.documents[i].title;
        if (t.length >15){
            $(".differ_title").eq(i).append("...");
        }
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "문학", size: 10},
    headers: { Authorization: "KakaoAK ddf7da74924187d0c803e6910e6b67bc" }
})
    .done(function (msg) {
        for (var i=0;i<10;i++){
        $(".another_cover").eq(i).append("<img src="+msg.documents[i].thumbnail+">");
        $(".another_title").eq(i).text(msg.documents[i].title.substring(0,15));
        $(".another_author").eq(i).text(msg.documents[i].authors.slice(0,2));
        var t =msg.documents[i].title;
        var au =msg.documents[i].authors;
        if (t.length >15){
            $(".another_title").eq(i).append("...");
        }
        if (au.length >3){
            $(".another_author").eq(i).append(" 외");
        }
        }
    });