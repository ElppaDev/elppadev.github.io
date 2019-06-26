function slidopen(linkid) {
    if (linkid == "hita") {
        location.href = "http://nec.mooviccom.co.kr/images/sub/projector_hitachi.jpg";
    }
    if (linkid == "nec") {
        location.href = "http://nec.mooviccom.co.kr/images/sub/projector_nec.jpg";
    }
}

function product(productcode) {
    var link = "http://nec.mooviccom.co.kr/upload/editor/"+productcode;
    $(function () {
        $('.product').css('display','none');
        $('#test1').css('display','block');
    });
}

function callbtn(){
    var fileter = "win16|win32|win64|mac|macintel";
    console.log("함수 수행");
    if(fileter.indexOf(navigator.platform.toLowerCase()) < 0){
        location.open("tel://16440155");
       }else{
           alert("문의 전화 : 1644-0155");
       }
}