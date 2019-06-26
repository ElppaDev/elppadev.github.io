function callbtn(){
    var fileter = "win16|win32|win64";
    console.log("함수 수행");
    if(fileter.indexOf(navigator.platform.toLowerCase()) < 0){
        location.replace("tel://16440155");
       }else{
           alert("문의 전화 : 1644-0155");
       }
}