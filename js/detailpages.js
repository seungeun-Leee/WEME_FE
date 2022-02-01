var a = document.querySelector("#js_tempo_detail_info_btn");
var b = document.querySelector("#js_tempo_detail_info");

a.addEventListener("click", function() {

    if(b.style.display === 'none') {
        b.style.display = "block";
    }else {
        b.style.display = "none";
    }

});

function newRegister() {
    // 댓글 추가
    var newP = document.createElement("p");
    var newcomment = document.querySelector("#write_comment");
    var newText = document.createTextNode(newcomment.value);
    newP.appendChild(newText);

    // 글을 쓰지 않고 '댓글쓰기'버튼 누른 경우
    // if(newText.replace(/\s/g, "").length) {
    //     newcomment.value="";
    //     alert("안녕");
    //     return false;
    // }
    if(newText.length==0) {
        newcomment.value="";
        return false;
    }


    // 삭제버튼 추가
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class","comment_del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var commentList = document.querySelector("#detailpage_comments_content");
    commentList.appendChild(newP);
    newcomment.value="";
    
}

function delComments() {
// 댓글 삭제기능 (X표시 클릭시)
    var removeBtn = document.querySelectorAll(".comment_del");

    for (var i=0;i<removeBtn.length;i++) {
        removeBtn[i].addEventListener("click",function() {
            if(this.parentNode.parentNode)
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}

// var newComment = document.createElement("p");
// var newText = document.createTextNode("새로운 댓글입니다.");

// newComment.appendChild(newText);
// document.body.appendChild(newComment);

// if(div.style.visibility === 'hidden')  {
//     div.style.visibility = 'visible';
//   }else {
//     div.style.visibility = 'hidden';
//   }

// if(".detail_info_contents > div")


// window.addEventListener('load', function(){
//     let contentHeight = document.querySelector('.pets_explain_contents_detail_info').offsetHeight; //컨텐츠 높이 얻기
//     if(contentHeight <= 300){
//         document.querySelector('.detailinfo').classList.remove('showstep1'); // 초기값보다 작으면 전체 컨텐츠 표시
//         document.querySelector('.js_tempo_detail_info_btn').classList.add('hide'); // 버튼 감춤
//     }
// });

