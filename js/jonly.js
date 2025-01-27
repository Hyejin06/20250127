$.ajax({
    url: "./js/only.json",

    dataType: "json",

    success: function (data) {
        if (data.length > 0) {

            for (var i in data) {
                var otitle = data[i].otitle;
                var osubtitle2 = data[i].osubtitle;
                var oprice = data[i].oprice;
                var ourl = data[i].ourl;

                $(".obox").eq(i).append('<div><a href="#">' + "<img src='" + data[i].ourl + "'/>" + '</a></div>');
                $(".obox").eq(i).append('<h4><a href="#">' + data[i].otitle + "</a><h4>");
                $(".obox").eq(i).append('<h5><a href="#">' + data[i].osubtitle + "</a></h5>");
                $(".obox").eq(i).append("<span>" + data[i].oprice + "</span>");

                $(".obox > div").attr("width", "230");
                $(".obox > div").attr("height", "400");

                $(".obox > div").css("overflow", "hidden");

                $(".obox > div > a > img").attr("width", "230");
                $(".obox > div > a > img").attr("height", "230");
                $(".obox > div > a > img").attr("alt", "상품사진");

                $(".obox > div > a > img").hover(function () {
                    $(this).attr("width", "230").attr("height", "230").css({ "opacity": "0.6", "display": "inline" });
                }, function () {
                    $(this).attr("width", "230").attr("height", "230").css({ "opacity": "1", "display": "inline" });
                });

                $(".obox > h4 > a").css({ "font-size": "13px", "color": "#000", "width": "230px", "margin": "10px 0 10px 0", "text-align": "left", "float": "left", "text-decoration": "none", "display": "block" });

                $(".obox > h5 > a").css({ "font-size": "12px", "color": "#000", "width": "230px", "margin": "0 0 10px 0", "text-align": "left", "float": "left", "text-decoration": "none", "display": "block" });

                $(".obox > span").css({ "font-size": "13px", "width": "170px", "text-align": "left", "float": "left" });
            }
        }
    }
});