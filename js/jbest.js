$.ajax({
    url: "./js/best.json",

    dataType: "json",

    success: function (data) {
        if (data.length > 0) {

            for (var i in data) {
                var btitle = data[i].btitle;
                var subtitle0 = data[i].bsubtitle;
                var bprice = data[i].bprice;
                var burl = data[i].burl;

                $(".box").eq(i).append('<div><a href="#">' + "<img src='" + data[i].burl + "'/>" + '</a></div>');
                $(".box").eq(i).append('<h4><a href="#">' + data[i].btitle + "</a><h4>");
                $(".box").eq(i).append('<h5><a href="#">' + data[i].bsubtitle + "</a></h5>");
                $(".box").eq(i).append("<span>" + data[i].bprice + "</span>");

                $(".box > div").attr("width", "300");
                $(".box > div").attr("height", "400");

                $(".box > div").css("overflow", "hidden");

                $(".box > div > a > img").attr("width", "300");
                $(".box > div > a > img").attr("height", "280");
                $(".box > div > a > img").attr("alt", "상품사진");

                $(".box > div > a > img").hover(function () {
                    $(this).attr("width", "300").attr("height", "280").css({"opacity": "0.6", "display": "inline" });
                }, function () {
                    $(this).attr("width", "300").attr("height", "280").css({"opacity": "1", "display": "inline" });
                });

                $(".box > h4 > a").css({ "font-size": "13px", "color": "#000", "width": "280px", "margin": "10px 0 10px 0", "text-align": "left", "float": "left", "text-decoration": "none", "display": "block" });

                $(".box > h5 > a").css({ "font-size": "12px", "color": "#000", "width": "280px", "margin": "0 0 10px 0", "text-align": "left", "float": "left", "text-decoration": "none", "display": "block" });

                $(".box > span").css({ "font-size": "13px", "width": "280px", "text-align": "left", "float": "left" });
            }
        }
    }
});