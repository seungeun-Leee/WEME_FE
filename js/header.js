var headerView = document.querySelector(".header");
var home = document.querySelector(".intro_text");

headerView.addEventListener("mousemove",function() {
    document.querySelector("#weme_subnav").style.display="block";
    document.querySelector("#temp_subnav").style.display="block";
    document.querySelector("#adop_subnav1").style.display="block";
    document.querySelector("#adop_subnav2").style.display="block";
    document.querySelector("#info_subnav").style.display="block";
    document.querySelector(".header").style.paddingBottom="138px";
    document.querySelector(".weme").style.height="200px";
    document.querySelector(".temp").style.height="200px";
    document.querySelector(".adop").style.height="200px";
    document.querySelector(".info").style.height="200px";
    document.querySelector(".user").style.height="200px";
    // home.style.marginTop="-138px";
});

headerView.addEventListener("mouseleave",function() {
    document.querySelector("#weme_subnav").style.display="none";
    document.querySelector("#temp_subnav").style.display="none";
    document.querySelector("#adop_subnav1").style.display="none";
    document.querySelector("#adop_subnav2").style.display="none";
    document.querySelector("#info_subnav").style.display="none";
    document.querySelector(".header").style.paddingBottom="0px";
    document.querySelector(".weme").style.height="50px";
    document.querySelector(".temp").style.height="50px";
    document.querySelector(".adop").style.height="50px";
    document.querySelector(".info").style.height="50px";
    document.querySelector(".user").style.height="50px";
    // home.style.marginTop="35px";
});

