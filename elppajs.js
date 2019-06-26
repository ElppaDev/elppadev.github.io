function callbtn(){
    var fileter = "win16|win32|win64|mac|macintel";
    console.log("함수 수행");
    if(fileter.indexOf(navigator.platform.toLowerCase()) < 0){
        alert("모바일 화면 입니다");
       }else{
           alert("문의 전화 : 1644-0155");
       }
}