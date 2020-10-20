let interval=null;
function rainbow() {
    let colors = ["#FF0000", "#FFA500", "#FFFF00", "#7CFC00", "#00BFFF", "#0000FF", "#FF00FF"];
    let i = 0;
    interval = setInterval(()=> {
        if (i === colors.length) {
            i = 0;
        }
        elem = document.getElementById('col1');
        // var elem=$('#col1');
        elem.style.background = colors[i];
        i++;
    }, 500);
}
function stopRainbow() {
    clearInterval(interval);
    // elem = document.getElementById('col1');
    // elem.style.background="#FFF";
    $('#col1').css('background','#FFF');
}

function changeFont() {
    $('#text').css('font-family','Impact');
    // let elem=document.getElementById('text');
    // elem.style.fontFamily='Impact';
}

function changeSizeB() {
    $('#b4').css('width','auto');
    // let elem=document.getElementById('b4');
    // elem.style.width='auto';
}

function changeWidthColum2() {
    $('#col2').css('width','90%');
    // let elem=document.getElementById('col2');
    // elem.style.width='90%';
}

function createNewButton() {

 // $('#col3').html($('#col3').html()+"<button id='needHide'>New Button</button>");
// $('input').after("<button id='needHide'>New Button</button>");
    $('<button id=\'needHide\'>New Button</button>').insertAfter('input');
   // let newDiv=document.createElement('div');
   // newDiv.innerHTML="<button id='needHide'>New Button</button>";
   // let colum1=document.getElementById('col3');
   //  document.body-colum1.appendChild(newDiv);
}

function hidenButton() {

// let hide=document.getElementById('needHide');
if ($('#needHide').css('visibility')==='hidden'){
    alert('Кнопка уже скрыта');}
else{
    $('#needHide').css('visibility','hidden');
    // hide.style.visibility='hidden';}
}
}

function visibleButton() {
    // let visible=document.getElementById('needHide');
    if ($('#needHide').css('visibility')==='visible'){
        alert('кнопка не скрыта');}
    else if ($('#needHide').css('visibility')==='hidden'){
        $('#needHide').css('visibility','visible');
    // visible.style.visibility='visible';
    }
    else if ($('#col3').html()===$('#col3').html()){
        alert('Кнопка не создана');
    }

}
function refreshPage() {
  location.href=location.href;
}
function RemoveChar() {
    let str=document.getElementById('text');
str.innerHTML=str.innerHTML.substr(0,str.innerHTML.length-1);
}
function createCalculator() {
    let divPlus=document.createElement('div');
    let divMinus=document.createElement('div');
    let dinMultiplication=document.createElement('div');
    let divDivision=document.createElement('div');
    let divNumberOne=document.createElement('div');
    let divNumberTwo=document.createElement('div');
    let divResult=document.createElement('div');
    let newDivRefreshCalc=document.createElement('div');

    divNumberOne.innerHTML="<input id='inputN1' type='number' >число 1</input>";
    divNumberTwo.innerHTML="<input id='inputN2' type='number' value='' >число 2</input>";
    divResult.innerHTML="<input id='inputResult' type='text' >результат</input>";
    divPlus.innerHTML="<button id='+'>+</button>";
    divMinus.innerHTML="<button id='-'>-</button>";
    dinMultiplication.innerHTML="<button id='*'>*</button>";
    divDivision.innerHTML="<button id='/'>/</button>";

    newDivRefreshCalc.innerHTML="<button id='refr'>Refresh Calc</button>";

    let colum1=document.getElementById('col3');
    document.body-colum1.appendChild(divNumberOne);
    document.body-colum1.appendChild(divNumberTwo);
    document.body-colum1.appendChild(divPlus);
    document.body-colum1.appendChild(divMinus);
    document.body-colum1.appendChild(dinMultiplication);
    document.body-colum1.appendChild(divDivision);
    document.body-colum1.appendChild(divResult);
    document.body-colum1.appendChild(newDivRefreshCalc);

    let plus=document.getElementById('+');
    let minus=document.getElementById('-');
    let multiplication=document.getElementById('*');
    let division=document.getElementById('/');
    let RefrCalc=document.getElementById('refr');
    plus.onclick=()=>{

        let inputN1=document.getElementById('inputN1');

        let inputN2=document.getElementById('inputN2');

        if (inputN1.value==='' || inputN2.value==='')
            alert('Введите числа');
        else{
        let inputResult=document.getElementById('inputResult');
        inputResult.value=+inputN1.value+(+inputN2.value);
        }

    }
    minus.onclick=()=>{
        let inputN1=document.getElementById('inputN1');
        let inputN2=document.getElementById('inputN2');
        if (inputN1.value==='' || inputN2.value==='')
            alert('Введите числа');
        else {
            let inputResult = document.getElementById('inputResult');
            inputResult.value = +inputN1.value - (+inputN2.value);
        }
    }
    multiplication.onclick=()=>{
        let inputN1=document.getElementById('inputN1');
        let inputN2=document.getElementById('inputN2');
        if (inputN1.value==='' || inputN2.value==='')
            alert('Введите числа');
        else {
            let inputResult = document.getElementById('inputResult');
            inputResult.value = inputN1.value * inputN2.value;
        }
    }
    division.onclick=()=>{
        let inputN1=document.getElementById('inputN1');
        let inputN2=document.getElementById('inputN2');
        if (inputN1.value==='' || inputN2.value==='')
            alert('Введите число');
        else{
        let inputResult=document.getElementById('inputResult');
        inputResult.value=inputN1.value/inputN2.value;
        }
    }
    RefrCalc.onclick=()=>{
         inputN1.value=null;
         inputN2.value=null;
         inputResult.value=null;
    }

}
var lang='en';
function changeLang() {
    let arr=[{
        'name':'rainbow',
        'text':{'ru':'Радуга','en':'Rainbow'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Остановить радугу','en':'Stop Rainbow'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Измененить шрифт','en':'Change font'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Изменить размер кнопки','en':'Change size button'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Изменить ширину центральной колонки','en':'Change center column width'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Создать новую кнопку','en':'Create new button'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Создать калькулятор','en':'Create calculator'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Скрыть созданую кнопку','en':'Hide created button'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Отобразит спрятаую кнопку','en':'Show hidden button'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Обновить страницу','en':'Refresh the webpage'}
    }, {
        'name':'rainbow',
        'text':{'ru':'Удалить символ с конца текста','en':'Remove character from end of text'}
    },];
    if (lang==='en'){
        lang='ru';
    } else {
        lang='en';
    }
    document.getElementById('lang').value=lang;
    let textButton1=document.getElementById('b1');
    textButton1.textContent=arr[0].text[lang];
    let textButton2=document.getElementById('b2');
    textButton2.textContent=arr[1].text[lang];
    let textButton3=document.getElementById('b3');
    textButton3.textContent=arr[2].text[lang];
    let textButton4=document.getElementById('b4');
    textButton4.textContent=arr[3].text[lang];
    let textButton5=document.getElementById('b5');
    textButton5.textContent=arr[4].text[lang];
    let textButton6=document.getElementById('b6');
    textButton6.textContent=arr[5].text[lang];
    let textButton7=document.getElementById('b7');
    textButton7.textContent=arr[6].text[lang];
    let textButton8=document.getElementById('b8');
    textButton8.textContent=arr[7].text[lang];
    let textButton9=document.getElementById('b9');
    textButton9.textContent=arr[8].text[lang];
    let textButton10=document.getElementById('b10');
    textButton10.textContent=arr[9].text[lang];
    let textButton11=document.getElementById('b11');
    textButton11.textContent=arr[10].text[lang];
}





