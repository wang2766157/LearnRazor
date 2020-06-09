//1.0.0
"use strict";
!function (e) {
    e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector,
        e.closest = e.closest ||
        function (e) {
            return this ? this.matches(e) ? this : this.parentElement ? this.parentElement.closest(e) : null : null
        }
}(Element.prototype);

var demoMode = function () {
    var e, t, a, lbtn, ibtn,
        d = document.querySelector("#topbar"),
        u = document.querySelector("#sidebar"),
        f = document.querySelector("#sidebarSmall"),
        p = document.querySelector("#sidebarUser"),
        b = document.querySelector("#sidebarSmallUser"),
        h = document.querySelector("#sidebarSizeContainer"),
        m = document.querySelectorAll('[class^="container"]'),
        S = {
            colorScheme: localStorage.getItem("dashkitColorScheme") ? localStorage.getItem("dashkitColorScheme") : "light",
            navPosition: localStorage.getItem("dashkitNavPosition") ? localStorage.getItem("dashkitNavPosition") : "sidenav",
            navColor: localStorage.getItem("dashkitNavColor") ? localStorage.getItem("dashkitNavColor") : "default",
            sidebarSize: localStorage.getItem("dashkitSidebarSize") ? localStorage.getItem("dashkitSidebarSize") : "base"
        };
    lbtn = document.getElementById("Customize-List"),
        ibtn = document.getElementById("Customize-Icon");

    function C(e) { "topnav" == e ? $(h).collapse("hide") : $(h).collapse("show") }
    function k(e) {
        if (e != null)
            e.setAttribute("style", "display: none !important")
    };
    return function () {
        for (var e = window.location.search.substring(1).split("&"), t = 0; t < e.length; t++) {
            var a = e[t].split("="), o = a[0], l = a[1];
            "colorScheme" != o && "navPosition" != o && "navColor" != o && "sidebarSize" != o || (localStorage.setItem("dashkit" + o.charAt(0).toUpperCase() + o.slice(1), l), S[o] = l)
        }
    }(),
        "light" == (e = S.colorScheme) ? (e = "light") : "dark" == e && (e = "dark"),
        //这里控制topbar显示 和 container 对应的页面显示
        function (e) {
            if (d && u && f && p && b) {
                if ("topnav" == e) {
                    k(d), k(u), k(f);
                    for (var t = 0; t < m.length; t++)
                        m[t].classList.remove("container-fluid"), m[t].classList.add("container")
                } else if ("combo" == e) {
                    k(p), k(b);
                    for (t = 0; t < m.length; t++)
                        m[t].classList.remove("container"), m[t].classList.add("container-fluid")
                } else if ("sidenav" == e) {
                    k(d);
                    for (t = 0; t < m.length; t++)
                        m[t].classList.remove("container"), m[t].classList.add("container-fluid")
                }
            }
        }(S.navPosition),
        t = S.navColor,
        u && f && (
            "default" == t ? (u.classList.add("navbar-light"), f.classList.add("navbar-light"))
                : "inverted" == t ? (u.classList.add("navbar-dark"), f.classList.add("navbar-dark"))
                    : "vibrant" == t && (u.classList.add("navbar-dark", "navbar-vibrant"), f.classList.add("navbar-dark", "navbar-vibrant"))
        ),
        "base" == (a = S.sidebarSize) ? k(f) : "small" == a && k(u),
        C(S.navPosition),
        document.body.style.display = "block",
        lbtn != null ? lbtn.onclick = function () {
            var t = "base";
            localStorage.setItem("dashkitSidebarSize", t),
                window.location = window.location
        } : !0,
        ibtn != null ? ibtn.onclick = function () {
            var t = "small";
            localStorage.setItem("dashkitSidebarSize", t),
                window.location = window.location
        } : !0,
        !0
}();

$(function () {
    var t = document.querySelector(".btn-scroll-top");
    if (null != t) {
        var r = parseInt(100, 10);
        window.addEventListener("scroll", function (e) {
            e.currentTarget.pageYOffset > r ? t.classList.add("show") : t.classList.remove("show")
        })
    }
});