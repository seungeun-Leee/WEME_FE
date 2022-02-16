function loadFile(input) {
    var file = input.files[0];	//선택된 파일 가져오기
    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);   

    // newImage.style.width = "70%";
    // newImage.style.height = "70%";
    newImage.style.visibility = "visible";   
    newImage.style.objectFit = "contain";

    //이미지를 image-show div에 추가
    var container = document.getElementById('photo');
    container.appendChild(newImage);

    var newImage = document.getElementById('photo').lastElementChild;
  
    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";
  
    //이미지 업로드 버튼은 숨겨진다
    document.getElementById('photo').style.visibility = 'hidden';

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
};
