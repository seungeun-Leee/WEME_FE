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



// 댓글 추가버튼
function newRegister() {
    var newdiv1 = document.createElement("div");
    var newdiv2 = document.createElement("div");
    var profileicon = document.createElement("img");
    var newdiv3 = document.createElement("div");

    var h3 = document.createElement("h3");
    var newdiv4 = document.createElement("div");
    var h6 = document.createElement("h6");
    var replybtn = document.createElement("button");

    var newdiv5 = document.createElement("div");
    var editbtn = document.createElement("button");
    var editimg = document.createElement("img");
    var editdeldiv = document.createElement("img");
    var delbtn = document.createElement("button");
    var delimg = document.createElement("img");

    editimg.setAttribute("src","../source/comment_edit_btn.svg");
    editbtn.setAttribute("class","comment_edit_btn");
    editbtn.appendChild(editimg);

    editdeldiv.setAttribute("src","../source/comment_edit_delete_div_bar.svg");

    delimg.setAttribute("src","../source/comment_delete_btn.svg");
    delbtn.setAttribute("class","comment_delete_btn");
    delbtn.setAttribute("onclick","delComments();return false;");
    delbtn.appendChild(delimg);

    newdiv5.setAttribute("class","comment_edit_delete_btn");
    newdiv5.appendChild(editbtn);
    newdiv5.appendChild(editdeldiv);
    newdiv5.appendChild(delbtn);

    let today = new Date();
    let year = today.getFullYear(); 
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (month < 10) {
         month = "0" + month; 
    };
    if (date < 10) {
        date = "0" + date;
    };
    if (hours < 10) {
        hours = "0" + hours;
    };
    if (minutes < 10) {
        minutes = "0" + minutes;
    };

    h6.innerHTML=(year + '.' + month + '.' + date+'&nbsp;&nbsp;&nbsp;'+hours+':'+minutes);
    replybtn.setAttribute("onclick","replyComments();return false;");
    replybtn.setAttribute("class","replybtn");
    replybtn.innerHTML = "답글";

    newdiv4.setAttribute("class","comments_date_reply_btn");
    newdiv4.appendChild(h6);
    newdiv4.appendChild(replybtn);



    // 글 입력받는 곳
    var newcomment = document.querySelector("#write_comment");
    var newText = document.createTextNode(newcomment.value);

    // 댓글 입력하지 않고 버튼 누를 경우
    if(newText.length==0) {
        newcomment.value="";
        return false;
    }

    h3.appendChild(newText);
    newdiv3.setAttribute("class","comments");
    newdiv3.appendChild(h3);
    newdiv3.appendChild(newdiv4);

    profileicon.setAttribute("src","../source/comments_profile_icon.svg");
    profileicon.setAttribute("class","comments_profile_img");

    newdiv2.setAttribute("class","comment_profile_text");
    newdiv2.appendChild(profileicon);
    newdiv2.appendChild(newdiv3);


    newdiv1.setAttribute("class","comments_box");
    newdiv1.appendChild(newdiv2);
    newdiv1.appendChild(newdiv5);

    // 최종적으로 추가되는 곳
    var commentList = document.querySelector("#detailpage_comments_content");
    commentList.appendChild(newdiv1);
    newcomment.value="";

};


// 답글 추가버튼
function replyComments() {
    var newdiv1 = document.createElement("div");
    var newdiv2 = document.createElement("div");
    var replydiv = document.createElement("img");
    var profileicon = document.createElement("img");
    var newdiv3 = document.createElement("div");

    var h3 = document.createElement("h3");
    var newdiv4 = document.createElement("div");
    var h6 = document.createElement("h6");
    var replybtn = document.createElement("button");

    var newdiv5 = document.createElement("div");
    var editbtn = document.createElement("button");
    var editimg = document.createElement("img");
    var editdeldiv = document.createElement("img");
    var delbtn = document.createElement("button");
    var delimg = document.createElement("img");

    editimg.setAttribute("src","../source/comment_edit_btn.svg");
    editbtn.setAttribute("class","comment_edit_btn");
    editbtn.appendChild(editimg);

    editdeldiv.setAttribute("src","../source/comment_edit_delete_div_bar.svg");

    delimg.setAttribute("src","../source/comment_delete_btn.svg");
    delbtn.setAttribute("class","comment_delete_btn");
    delbtn.setAttribute("onclick","delComments();return false;");
    delbtn.appendChild(delimg);

    newdiv5.setAttribute("class","comment_edit_delete_btn");
    newdiv5.appendChild(editbtn);
    newdiv5.appendChild(editdeldiv);
    newdiv5.appendChild(delbtn);

    let today = new Date();
    let year = today.getFullYear(); 
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();



    h6.innerHTML=(year + '.' + month + '.' + date+'   '+hours+':'+minutes);
    replybtn.setAttribute("onclick","replyComments();return false;");
    replybtn.setAttribute("class","replybtn");
    replybtn.innerHTML = "답글";

    newdiv4.setAttribute("class","comments_date_reply_btn");
    newdiv4.appendChild(h6);
    newdiv4.appendChild(replybtn);



    // 글 입력받는 곳
    var newcomment = document.querySelector("#write_comment");
    var newText = document.createTextNode(newcomment.value);

    // 댓글 입력하지 않고 버튼 누를 경우
    if(newText.length==0) {
        newcomment.value="";
        return false;
    }

    h3.appendChild(newText);
    newdiv3.setAttribute("class","comments");
    newdiv3.appendChild(h3);
    newdiv3.appendChild(newdiv4);

    profileicon.setAttribute("src","../source/comments_profile_icon.svg");
    profileicon.setAttribute("class","comments_profile_img");
    replydiv.setAttribute("src","../source/comments_reply_div_bar.svg");
    replydiv.setAttribute("class","comments_reply_div_bar")

    newdiv2.setAttribute("class","comment_profile_text");
    newdiv2.appendChild(replydiv);
    newdiv2.appendChild(profileicon);
    newdiv2.appendChild(newdiv3);

    newdiv1.setAttribute("class","comments_reply_box");
    newdiv1.appendChild(newdiv2);
    newdiv1.appendChild(newdiv5);

    // 최종적으로 추가되는 곳 


    var addloca = document.querySelectorAll(".replybtn");
    // addloca.parentNode.parentNode.appendChild(newdiv1);
    // newcomment.value="";
    



    // for (var i=0;i<addloca.length;i++) {
    //     addloca[i].addEventListener("click",function() {
    //         this.parentNode.parentNode.parentNode.parentNode.innerText='추가된 메시지';
    //     });
    // }
    // newcomment.value="";
}


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
//     var removeBtn = document.querySelectorAll(".comment_delete_btn");

//     for (var i=0;i<removeBtn.length;i++) {
//         removeBtn[i].addEventListener("click",function() {
//             if(this.parentNode.parentNode.parentNode)
//             this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
//         });
//     }
// }

function delComments() {
// 댓글 삭제기능 (X표시 클릭시)
    var removeBtn = document.querySelectorAll(".comment_delete_btn");
    
    // var delBttn = document.createElement("div");
    // var delText = document.createTextNode("삭제된 메시지 입니다.11");
    // var delprofile = document.createElement("img");
    // delBttn.setAttribute("class","comment_del");
    // delBttn.appendChild(delText);

    // delprofile.setAttribute("width","39px");
    // delprofile.setAttribute("height","39px");
    // delprofile.setAttribute("borderRadius","100%");
    // delprofile.setAttribute("color","burlywood;");
    // delprofile.setAttribute("border","none");

    for (var i=0;i<removeBtn.length;i++) {
        removeBtn[i].addEventListener("click",function() {
            this.parentNode.parentNode.style.background='#A3A3A3';
            this.parentNode.parentNode.style.color='lightgray';
            this.parentNode.parentNode.style.height='60px';
            this.parentNode.parentNode.style.borderRadius='15px';
            this.parentNode.parentNode.style.textIndent='20px';
            this.parentNode.parentNode.style.lineHeight = '60px';
            
            this.parentNode.parentNode.innerHTML=('삭제된 메시지입니다.');
            // this.parentNode.parentNode.parentNode.appendChild(delprofile);
        });
    }
}

