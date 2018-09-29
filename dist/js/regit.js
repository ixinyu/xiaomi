"use strict";

$(document).ready(function () {
    $("#btn").click(function () {
        var oldlogin = getCookie("login");
        oldlogin = JSON.parse(oldlogin);
        for (var i = 0; i < oldlogin.length; i++) {
            if ($("#usn").val() == oldlogin[i]["username"] && $("#psw").val() == oldlogin[i]["password"]) {
                location.href = "../index.html";
            } else {
                $(".info").html("账号密码不匹配");
                $(".info").addClass("active");
            }
        }
    });
});