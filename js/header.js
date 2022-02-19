var headerView = document.querySelector(".header");
// var home = document.querySelector(".intro_text");

headerView.addEventListener("mousemove",function() {
    document.querySelector("#weme_subnav").style.display="block";
    document.querySelector("#temp_subnav").style.display="block";
    document.querySelector("#adop_subnav1").style.display="block";
    document.querySelector("#adop_subnav2").style.display="block";
    document.querySelector("#adop_subnav3").style.display="block";
    document.querySelector("#info_subnav").style.display="block";
    document.querySelector(".header").style.boxShadow="none";
    document.querySelector(".nav_bott").style.visibility="visible";
    document.querySelector(".weme").style.height="280px";
    document.querySelector(".temp").style.height="280px";
    document.querySelector(".adop").style.height="280px";
    document.querySelector(".info").style.height="280px";
    document.querySelector(".user").style.height="280px";
});

headerView.addEventListener("mouseleave",function() {
    document.querySelector("#weme_subnav").style.display="none";
    document.querySelector("#temp_subnav").style.display="none";
    document.querySelector("#adop_subnav1").style.display="none";
    document.querySelector("#adop_subnav2").style.display="none";
    document.querySelector("#adop_subnav3").style.display="none";
    document.querySelector("#info_subnav").style.display="none";
    document.querySelector(".header").style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)";
    document.querySelector(".nav_bott").style.visibility="hidden";
    document.querySelector(".weme").style.height="50px";
    document.querySelector(".temp").style.height="50px";
    document.querySelector(".adop").style.height="50px";
    document.querySelector(".info").style.height="50px";
    document.querySelector(".user").style.height="50px";
});

