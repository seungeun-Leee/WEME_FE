// home 상단 화살표(4개씩 보이는 것)
$(function(){
    $('.home_emergency_bott').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow : $('.prevArrow'), 
    nextArrow : $('.nextArrow'), 
    draggable: false,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    
    });
});
// 하단 화살표 기능
$(function() {
    $('.home_review_choose').slick({
        infinite: false,
        prevArrow : $('.prevArrow2'), 
        nextArrow : $('.nextArrow2'), 
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false
    });
});

// 입양&임시보호 버튼 색 바꾸기
var a1 = document.querySelector("#emergency_btn1");
var a2 = document.querySelector("#emergency_btn1 > h4");
var b1 = document.querySelector("#emergency_btn2");
var b2 = document.querySelector("#emergency_btn2 > h4");

function emergency_btn1() {
    a1.style.backgroundColor="#93A761";
    a2.style.color="white";

    b1.style.backgroundColor="white";
    b2.style.color="#A3A3A3";
}

function emergency_btn2() {
    a1.style.backgroundColor="white";
    a2.style.color="#A3A3A3";

    b1.style.backgroundColor="#93A761";
    b2.style.color="white";
}