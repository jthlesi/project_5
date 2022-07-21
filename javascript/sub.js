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
    $.get("txt/introduce.txt", function (data) {
        $("#introduce").html(data);
    });
    $.get("txt/publish_coment.txt", function (data) {
        $("#publish_coment").html(data);
    })
})

$(".open").click(function(){
    var openIdx = $(".open").index(this);
    console.log(openIdx)
    $(".toggle").eq(openIdx).stop().slideDown("fast");
    $(this).removeClass("on");
    $(".close").eq(openIdx).addClass("on");
})

$(".close").click(function(){
    var closeIdx = $(".close").index(this);
    $(".toggle").eq(closeIdx).stop().slideUp("fast");
    $(this).removeClass("on");
    $(".open").eq(closeIdx).addClass("on");
});

$(".open_div").click(function(){
    var divIdx = $(".open_div").index(this);
    console.log(divIdx)
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
