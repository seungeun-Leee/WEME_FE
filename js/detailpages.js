var a = document.querySelector("#js_tempo_detail_info_btn");
var b = document.querySelector("#js_tempo_detail_info");
//상세 정보 펼치기 기능
a.addEventListener("click", function() {

    if(b.style.display === 'none') {
        b.style.display = "block";
    }else {
        b.style.display = "none";
    }

});

// function newRegister() {
//     // 댓글 추가
//     var newP = document.createElement("p");
//     var newcomment = document.querySelector("#write_comment");
//     var newText = document.createTextNode(newcomment.value);
//     newP.appendChild(newText);

//     // 글을 쓰지 않고 '댓글쓰기'버튼 누른 경우
//     // if(newText.replace(/\s/g, "").length) {
//     //     newcomment.value="";
//     //     alert("안녕");
//     //     return false;
//     // }
//     if(newText.length==0) {
//         newcomment.value="";
//         return false;
//     }


//     // 삭제버튼 추가
//     var delBttn = document.createElement("span");
//     var delText = document.createTextNode("X");
//     delBttn.setAttribute("class","comment_del");
//     delBttn.setAttribute("onclick","delComments();return false;");
//     delBttn.appendChild(delText);
//     newP.appendChild(delBttn);

//     var commentList = document.querySelector("#detailpage_comments_content");
//     commentList.appendChild(newP);
//     newcomment.value="";    
// }

// function delComments() {
// // 댓글 삭제기능 (X표시 클릭시)
//     var removeBtn = document.querySelectorAll(".comment_del");

//     for (var i=0;i<removeBtn.length;i++) {
//         removeBtn[i].addEventListener("click",function() {
//             if(this.parentNode.parentNode)
//             this.parentNode.parentNode.removeChild(this.parentNode);
//         });
//     }
// }

