/**
*
* <pre>
* utils.js
* 잡다한거 그냥 모아놨습니다.
* 수정일    수정자     수정내용
* -------------------------------------------------
* 2021-04-02 최초생성
* </pre>
* @author been7
* @since 2021-04-02
* @version 1.0
*
* Copyright (C) by HNFincore All right Preserved.
*/

export const languageArr=[
    {code:"ko",title:"한국어", placement:"0"}
    ,{code:"en",title:"영어", placement:"1"}
    ,{code:"zh-CN",title:"중국어", placement:"3"}
    ,{code:"ja",title:"일본어", placement:"2"}
]

export const contextPath = "/api"

export const getLangCode = ()=>{
    if(localStorage.getItem("survey-lang") === null ){
        setLangCode("ko");
        return "ko";
    }else{
        localStorage.getItem("survey-lang")
    }
}
export const setLangCode = (lang)=>{
    let langTitle = "";
    for (let i = 0; i < languageArr.length; i++) {
        if(languageArr[i].code === lang){
            langTitle = languageArr[i].title;
        }
    }
    //설정된 언어가 없으면 리턴
    if(langTitle === ""){
        lang = "ko";
        langTitle = "한국어";
    }
    localStorage.setItem("survey-lang",lang);

    try{
        const iframe = document.querySelectorAll('iframe.goog-te-menu-frame')[0];
        const innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
        if (!innerDoc) {
            alert("알림 : 번역기와 연결이 원할하지 않습니다. 잠시후 다시시도해주세요.");
            return false;
        }
        if (lang === 'ko') {
            const iframeObj = document.querySelectorAll('iframe.goog-te-banner-frame')[0]
            const doc = (iframeObj.contentDocument) ? iframeObj.contentDocument : iframeObj.contentWindow.document;
            const btnArr = doc.querySelectorAll("button");
            for (let i = 0; i < btnArr.length; i++) {
                let idStr = btnArr[i].getAttribute("id")
                if (idStr.indexOf('restore') > 0) {
                    btnArr[i].click();
                    return false;
                }
            }

        } else {
            const langs = innerDoc.querySelectorAll('a');
            for (let i = 0; i < langs.length; i++) {
                if(langs[i].innerText.indexOf(langTitle)>0){
                    langs[i].click();
                }
            }
        }
    }catch (e) {
        console.error(e)
    }

}

export function numComma(x){
    if (x === undefined || x === null) {
        return '';
    }
    return ('' + x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function jsonFetch(url,sendData,processFn,method="POST"){
    let myHeaders = new Headers();
    if(isAuthorized()) {
        myHeaders.append("miraeTkn", token());
    }
    myHeaders.append("Content-Type", "application/json");

    let parsedJson;
    try {
        parsedJson = JSON.stringify(sendData)
    }catch (exception) {
        console.error(exception);
        parsedJson = null;
    }

    let requestOptions = {
        method: method
        ,headers: myHeaders
        ,body: parsedJson
    };

    console.log(url,JSON.stringify(sendData));
    // console.log(requestOptions);

    fetch( url,requestOptions)
        .then(response => response.json())
        .then(processFn).catch(error => {console.error(error)});
}

export function paramFetch(url,sendData,processFn,method="POST"){
    let myHeaders = new Headers();
    if(isAuthorized()){
        myHeaders.append("miraeTkn", token());
    }

    let sendParam = "";
    for (const key in sendData) {
        if(sendParam !== "")sendParam += "&";
        sendParam += key+"="+sendData[key];
    }

    let requestOptions = {
        method: method
        ,headers: myHeaders
    };

    url += "?"+sendParam;
    //console.log(contextPath+url)
    fetch( contextPath+url,requestOptions)
        .then(response => response.json())
        .then(processFn).catch(error => {console.error(error)});
}

export function token(){
    let returnTkn = localStorage.getItem("miraeTkn");
    return returnTkn;
}

export function isAuthorized(){
    if(token() !=="" && token() !== null){
        return true;
    }else{
        return false;
    }
}

//이메일 정규식
export function isEmail(asValue) {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);// 형식에 맞는 경우 true 리턴
}

//아이디 정규식
export function isLoginId(asValue) {
    if(!isCelluar(asValue)){
        const regExp = /^[a-z0-9.]{5,49}$/g;
        return regExp.test(asValue);// 형식에 맞는 경우 true 리턴
    }else{
        return true;
    }
}

//비밀번호 체크 정규식
export function isJobPassword(asValue) {
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/;
    return regExp.test(asValue);// 형식에 맞는 경우 true 리턴
}

// 핸드폰 번호 체크 정규식
export function isCelluar(asValue) {
    const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    return regExp.test(asValue);// 형식에 맞는 경우 true 리턴
}
// 생년월일 체크 정규식
export function isBirthDay(asValue) {
    const regExp = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return regExp.test(asValue);// 형식에 맞는 경우 true 리턴
}
// 핸드폰 번호 체크 정규식
export function setCelluar(asValue) {
    if(asValue === undefined || asValue === "" || asValue === null){
        return ""
    }else{
        return asValue.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    }
}

export function dateFomat(date,formatStr){
    const moment = require('moment');

    const returnDate = moment(date).format(formatStr)
    return returnDate
}

export function nowDate(formatStr){
    const moment = require('moment');

    const returnDate = moment().format(formatStr)
    return returnDate
}

export function dateAddMonth(formatStr,addMonth){
    const moment = require('moment');

    const returnDate = moment().add(addMonth, 'month').format(formatStr)
    return returnDate
}

//전화번호 마스킹
export function maskTell(tell){
    if( tell === undefined || tell === null ) return "";
    let maskingData = "";
    let phoneMatchValue = tell.match(/\d{2,3}-\d{3,4}-\d{4}/gi);
    if(/-[0-9]{3}-/.test(phoneMatchValue)){
        // 000-000-0000 형태인 경우
        maskingData = tell.toString().replace(phoneMatchValue, phoneMatchValue.toString().replace(/-[0-9]{3}-/g, "-***-"));
    }else if(/-[0-9]{4}-/.test(phoneMatchValue)){
        // 000-0000-0000 형태인 경우
        maskingData = tell.toString().replace(phoneMatchValue, phoneMatchValue.toString().replace(/-[0-9]{4}-/g, "-****-"));
    }else{
        // - 없을 경우
        phoneMatchValue = tell.length < 11 ? tell.length < 10 ? tell.match(/\d{9}/gi) : tell.match(/\d{10}/gi) : tell.match(/\d{11}/gi);
        if(phoneMatchValue === null) {
            return "";
        }
        if(tell.length < 11){
            if(tell.length < 10){
                maskingData = tell.toString().replace(phoneMatchValue, phoneMatchValue.toString().replace(/(\d{2})(\d{3})(\d{4})/gi,'$1-***-$3'));
            }else{
                if(tell.indexOf('02') < 0){
                    maskingData = tell.toString().replace(phoneMatchValue, phoneMatchValue.toString().replace(/(\d{3})(\d{3})(\d{4})/gi,'$1-***-$3'));
                }else{
                    maskingData = tell.toString().replace(phoneMatchValue, phoneMatchValue.toString().replace(/(\d{2})(\d{4})(\d{4})/gi,'$1-****-$3'));
                }
            }
        }else{
            maskingData = tell.toString().replace(phoneMatchValue, phoneMatchValue.toString().replace(/(\d{3})(\d{4})(\d{4})/gi,'$1-****-$3'));
        }
    }
    return maskingData;
}

//이름 마스킹
export function maskName(name){
    if(name === null || name === undefined) return "";
    return setCharAt(name , 1 , '*');
}

//이메일 마스킹
export function maskEmail(email){
    if(email === null || email === undefined) return "";
    var temp = email.split('@');
    var maskEmail;
    //아이디 뒤 세자리
    if(temp[0].length > 3){
        maskEmail = temp[0].substring(0 , temp[0].length - 3) + '***';
    }else{
        maskEmail = '***';
    }
    if(temp[1] !== undefined){
        return maskEmail + '@' + temp[1];
    }else{
        return maskEmail;
    }
}

//특정 위치 문자열 교체
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

export function getBankName(fnCd){
    let bankName = ""
    switch (fnCd){
        case "003" :  bankName="기업은행";break;
        case "004" :  bankName="국민은행";break;
        case "005" :  bankName="외환은행";break;
        case "011" :  bankName="농협은행";break;
        case "020" :  bankName="우리은행";break;
        case "023" :  bankName="SC제일은행";break;
        case "032" :  bankName="부산은행";break;
        case "034" :  bankName="광주은행";break;
        case "071" :  bankName="우체국";break;
        case "088" :  bankName="신한은행";break;
        case "089" :  bankName="케이뱅크";break;
        case "045" :  bankName="새마을금고";break;
        default : bankName = "은행이름 알수없음";
    }
    return bankName
}