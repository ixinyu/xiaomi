'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$(document).ready(function () {
    var arrs;
    $.ajax({
        type: "get",
        url: '../data/json.json',
        success: function success(data) {
            arrs = data['phone'].concat(data['redphone'], data['tv']);
        }
    });
    $(".nav").load("header.html", function () {
        if ($.cookie('user') && $.cookie('user') != "") {
            $(".right>li:first>a").html($.cookie("user"));
            $(".right>li:first").addClass("user").mouseenter(function () {
                $(this).find("ul").slideDown(200);
            }).mouseleave(function () {
                $(this).find("ul").slideUp(100);
            }).find("ul").children().eq(0).click(function () {
                $.cookie("user", "", { expires: 1, path: '/' });
                location.reload();
            });

            //cartLoad()
            var light = cartLoad();
            if (light) {
                $(".cartLi").css({ 'background': '#FF6700' }).children('a').css({
                    'color': 'white',
                    'border': 'none'
                });
                $(".cartLi").click(function () {
                    location.href = "cart.html";
                });
            }
        }
        $(".right>li.cartLi").mouseenter(function () {
            $(".cart").stop().slideDown(300);
        }).mouseleave(function () {
            $(".cart").stop().slideUp(300);
        });
        //加载购物车事件;
        //...
    });
    $(".navList").load("input.html", function () {
        $("#home").click(function () {
            location.href = "../index.html";
        });
        $("ul.pro").mouseover(function () {
            var datas;
            $.ajax({
                type: "get",
                url: "../data/json.json",
                success: function success(data) {
                    datas = data;
                }
            });
            $(".proListw").slideDown(500);
            $("ul.pro li").mouseover(function () {
                var attr = $(this).attr("class");
                $(".proList").html("");
                var arr = datas[attr];
                for (var i = 0; i < arr.length; i++) {
                    var str = "";
                    if (arr[i]["hot"]) {
                        str = '<li><div class="li-header"><span>\u65B0\u54C1</span></div><div class="li-img" style="background-image: url(\'' + arr[i]['url'] + '\')"></div><p class="name">' + arr[i]['name'] + '</p><p class="price">' + arr[i]['price'] + '\u5143\u8D77</p></li>';
                        $(".proList").append(str);
                    } else {
                        str = '<li><div class="li-header"></div><div class="li-img" style="background-image: url(\'' + arr[i]['url'] + '\')"></div><p class="name">' + arr[i]['name'] + '</p><p class="price">' + arr[i]['price'] + '\u5143\u8D77</p></li>';
                        $(".proList").append(str);
                    }
                }
            });
        });

        $("ul.pro").mouseleave(function () {
            $(".proListw").slideUp(500);
        });
    });
    $("footer").load("footer.html", function () {
        //尾部js
    });

    var mySwiper2 = new Swiper('#proSwiper', {
        autoplay: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        effect: 'fade'

    });

    //列表
    $.ajax({
        type: 'get',
        url: '../data/json.json',
        success: function success(data) {
            var arr = data['phone'];
            arr = arr.concat(data['redphone'], data['tv']);
            console.log(arr);
            for (var i = 0; i < 3; i++) {
                var str = '<div class="phoneList"><span class="id">' + arr[i]['id'] + '</span>\n                <img src="' + arr[i]['src'] + '" alt=""><p class="telName">' + arr[i]['name'] + '</p><p class="miaosu">\u5168\u7403\u9996\u6B3E\u53CC\u9891GPS\uFF0C\u9A81\u9F99845</p><span class="price">' + arr[i]['price'] + '\u5143\u8D77</span><span class="oldprice">' + (arr[i]['price'] + 100) + '\u5143</span><a href="detail.html" class="iconfont">\u4E86\u89E3\u4E00\u4E0B &#xe637;</a></div>\n                ';
                $("section:first").append(str);
            }
            for (var _i = 3; _i < 7; _i++) {
                var str = ' <div class="phoneList2"><span class="id">' + arr[_i]['id'] + '</span>\n <img src="' + arr[_i]['src'] + '" alt=""><p class="telName">' + arr[_i]['name'] + '</p><p>\u5C0F\u5C4F\u9AD8\u6027\u80FD\u7684\u53CC\u6444\u624B\u673A</p><span class="oldprice">' + (parseInt(arr[_i]['price']) + 100) + '\u5143</span><span class="price">' + arr[_i]['price'] + '\u5143\u8D77</span></div>\n                ';
                $("section:first").append(str);
            }
            var str1 = ' <div class="tvList"><span class="id">' + arr[12]['id'] + '</span>\n            <div class="img"><img src="' + arr[12]['src'] + '" alt=""></div>\n            <p class="tvName">' + arr[12]['name'] + '</p>\n            <p>\u9AD8\u6E05\u6DB2\u6676\u5C4F\uFF0C\u7B2C6\u4EE3\u753B\u8D28\u5F15\u64CE</p>\n            <span class="price">\xA5' + (arr[12]['price'] - 400) + '</span>\n            <span class="oldprice">\xA5' + arr[12]['price'] + '</span>\n            <a class="button">\u7ACB\u5373\u8D2D\u4E70</a>\n        </div>';
            $("section:nth-child(2)").append(str1);
            for (var _i2 = 13; _i2 < 17; _i2++) {
                var str = '<div class="tvList2"><span class="id">' + arr[_i2]['id'] + '</span><div class="img"><img src="' + arr[_i2]['src'] + '" alt=""></div><p class="tvName">' + arr[_i2]['name'] + '</p><p class="miaosu">\u9AD8\u6E05\u6DB2\u6676\u5C4F\uFF0C\u7B2C6\u4EE3\u753B\u8D28\u5F15\u64CE</p><div class="span"><span class="oldprice">\xA5' + arr[_i2]['price'] + '</span><span class="price">\xA5' + (arr[_i2]['price'] - 400) + '</span> <a class="button">\u7ACB\u5373\u8D2D\u4E70</a>';
                $("section:nth-child(2)").append(str);
            }
        }
    });
    $(document).ajaxComplete(function () {
        //ajax请求完成回调
        $(".tvList2,.tvList,.phoneList,.phoneList2").click(function () {
            $.cookie.raw = true;
            //var user = $.cookie("user");
            $.cookie("pro", $(this).find(".id").html(), { expires: 7, path: '/' });
            location.href = "detail.html";
        });
    });
    //  购物车加载事件
    function cartLoad() {
        var uu = $.cookie('user');
        var num = 0;
        var count = 0;
        if ($.cookie(uu) && $.cookie(uu) != "") {
            $(".cart").html("");
            var dat = $.cookie(uu);
            console.log(dat);
            console.log(typeof dat === 'undefined' ? 'undefined' : _typeof(dat));
            dat = JSON.parse(dat);
            for (var key in dat) {
                num = num + parseInt(dat[key]);
                count = count + parseInt(dat[key]) * arrs[parseInt(key) - 1]['price'];
                var str = '<div class="cartList"><img src="' + arrs[parseInt(key) - 1]['url'] + '" alt=""><span class="proName">' + arrs[parseInt(key) - 1]['name'] + '</span><span class="proPrice">' + arrs[parseInt(key) - 1]['price'] + ' x ' + dat[key] + '</span></div>';
                $(".cart").append(str);
            }
            var fot = '<div class="totalCart"><span class="totalPro">\u5171' + num + '\u4EF6\u5546\u54C1</span><a href="cart.html">\u53BB\u8D2D\u7269\u8F66\u7ED3\u7B97</a><span class="totalPrice">' + count + '\u5143</span></div>';
            $(".cart").append(fot);
            $(".cartLi").find('b').html(num);
            return true;
        }
    }
});