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
