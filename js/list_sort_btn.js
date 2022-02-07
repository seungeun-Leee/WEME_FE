const body = document.querySelector('body');
const select = document.querySelector(`[data-role="selectBox"]`);
const values = select.querySelector(`[date-value="optValue"]`);
const option = select.querySelector('.hide');
const opts = option.querySelectorAll('.hide >li');


const select2 = document.querySelector(`[data-role="selectBox2"]`);
const values2 = select2.querySelector(`[date-value="optValue2"]`);
const option2 = select2.querySelector('.hide2');
const opts2 = option2.querySelectorAll('.hide2 >li');

/* 셀렉트영역 클릭 시 옵션 숨기기, 보이기 */
function selects(e){
    if(option2.classList.contains('show2')) {
        option2.classList.add('hide2');
        option2.classList.remove('show2');
    }
    e.stopPropagation();
    option.setAttribute('style',`top:${select.offsetHeight}px`)
    if(option.classList.contains('hide')){
        option.classList.remove('hide');
        option.classList.add('show');
    }else{
        option.classList.add('hide');
        option.classList.remove('show');
    }
    selectOpt();
}

function selects2(e){
    if(option.classList.contains('show')) {
        option.classList.add('hide');
        option.classList.remove('show');
    }
    e.stopPropagation();
    option2.setAttribute('style',`top:${select2.offsetHeight}px`)
    if(option2.classList.contains('hide2')){
        option2.classList.remove('hide2');
        option2.classList.add('show2');
    }else{
        option2.classList.add('hide2');
        option2.classList.remove('show2');
    }
    selectOpt2();
}

/* 옵션선택 */
function selectOpt(){
    opts.forEach(opt=>{
        const innerValue = opt.innerHTML;
        function changeValue(){
            values.innerHTML = innerValue;
        }
        opt.addEventListener('click',changeValue)
    });
}

function selectOpt2(){
    opts2.forEach(opt=>{
        const innerValue = opt.innerHTML;
        function changeValue(){
            values2.innerHTML = innerValue;
        }
        opt.addEventListener('click',changeValue)
    });
}

/* 렌더링 시 옵션의 첫번째 항목 기본 선택 */
function selectFirst(){
    const firstValue = opts[0].innerHTML;
    values.innerHTML = `${firstValue}`

    const firstValue2 = opts2[0].innerHTML;
    values2.innerHTML = `${firstValue2}`
}

/* 옵션밖의 영역(=바디) 클릭 시 옵션 숨김 */
function hideSelect(){
    if(option.classList.contains('show') || option2.classList.contains('show2')){
        option.classList.add('hide');
        option.classList.remove('show');

        option2.classList.add('hide2');
        option2.classList.remove('show2');
    }
}

selectFirst();
select.addEventListener('click',selects);
select2.addEventListener('click',selects2);
body.addEventListener('click',hideSelect);