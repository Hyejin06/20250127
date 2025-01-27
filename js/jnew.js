$.ajax({
    url: "./js/new.json",

    dataType: "json",

    success: function (data) {
        if (data.length > 0) {

            for (var i in data) {
                var ntitle = data[i].ntitle;
                var nsubtitle2 = data[i].nsubtitle;
                var nprice = data[i].nprice;
                var nurl = data[i].nurl;

                $(".nbox").eq(i).append('<div><a href="#">' + "<img src='" + data[i].nurl + "'/>" + '</a></div>');
                $(".nbox").eq(i).append('<h4><a href="#">' + data[i].ntitle + "</a><h4>");
                $(".nbox").eq(i).append('<h5><a href="#">' + data[i].nsubtitle + "</a></h5>");
                $(".nbox").eq(i).append("<span>" + data[i].nprice + "</span>");

                $(".nbox > div").attr("width", "300");
                $(".nbox > div").attr("height", "400");

                $(".nbox > div").css("overflow", "hidden");

                $(".nbox > div > a > img").attr("width", "300");
                $(".nbox > div > a > img").attr("height", "280");
                $(".nbox > div > a > img").attr("alt", "상품사진");

                $(".nbox > div > a > img").hover(function () {
                    $(this).attr("width", "300").attr("height", "280").css({ "opacity": "0.6", "display": "inline" });
                }, function () {
                    $(this).attr("width", "300").attr("height", "280").css({ "opacity": "1", "display": "inline" });
                });

                $(".nbox > h4 > a").css({ "font-size": "13px", "color": "#000", "width": "280px", "margin": "10px 0 10px 0", "text-align": "left", "float": "left", "text-decoration": "none", "display": "block" });

                $(".nbox > h5 > a").css({ "color": "#000", "width": "280px", "margin": "0 0 10px 0", "text-align": "left", "float": "left", "text-decoration": "none", "display": "block" });

                $(".nbox > span").css({ "font-size": "13px", "width": "280px", "text-align": "left", "float": "left" });
            }
        }
    }
});