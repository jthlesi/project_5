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
        }
    });

