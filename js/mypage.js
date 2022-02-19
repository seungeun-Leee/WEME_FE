var mynav1 = document.querySelector("#my_nav1");
var mynav2 = document.querySelector("#my_nav2");
var mynav3 = document.querySelector("#my_nav3");
var mynav4 = document.querySelector("#my_nav4");

mynav1.addEventListener("mouseover",function() {
    document.querySelector("#my_nav1 > img").style.visibility="visible";
});
mynav1.addEventListener("mouseout",function() {
    document.querySelector("#my_nav1 > img").style.visibility="hidden";
});

mynav2.addEventListener("mouseover",function() {
    document.querySelector("#my_nav2 > img").style.visibility="visible";
});
mynav2.addEventListener("mouseout",function() {
    document.querySelector("#my_nav2 > img").style.visibility="hidden";
});
mynav3.addEventListener("mouseover",function() {
    document.querySelector("#my_nav3 > img").style.visibility="visible";
});
mynav3.addEventListener("mouseout",function() {
    document.querySelector("#my_nav3 > img").style.visibility="hidden";
});
mynav4.addEventListener("mouseover",function() {
    document.querySelector("#my_nav4 > img").style.visibility="visible";
});
mynav4.addEventListener("mouseout",function() {
    document.querySelector("#my_nav4 > img").style.visibility="hidden";
});