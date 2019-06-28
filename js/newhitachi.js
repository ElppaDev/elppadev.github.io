var coords; //이미지 좌표
var productlink; //제품 링크
var area = ['<area shape="rect" coords="', '" href="', '"/>'];

$(function () {
    coords = [
        "45,133,192,328",
        "210,133,367,320",
        "383,133,538,324",
        "555,132,719,321",
        "732,131,897,316",
        "909,131,1062,318",
        "49,439,189,613",
        "208,439,362,609",
        "373,439,533,612",
        "546,439,715,611",
        "727,438,883,606",
        "35,653,203,859",
        "214,653,371,856",
        "47,962,199,1151",
        "208,963,360,1150",
        "369,962,531,1156",
        "547,961,706,1149",
        "717,960,891,1152",
        "206,1269,355,1457",
        "371,1274,541,1462",
        "552,1274,707,1456",
        "722,1274,885,1459",
        "892,1273,1064,1459",
        "44,1573,202,1775",
        "209,1574,374,1775"
    ]; //신규 제품 등록시 좌표를 등록해주세요
    productlink = [
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=264",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=265",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=266",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=267",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=233",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=234",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=236",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=260",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=190",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=211",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=194",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=192",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=193",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=177",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=237",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=189",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=196",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=213",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=210",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=212",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=261",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=187",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=185",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=191",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=268",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=18&seq=269"
    ]; //신규 제품 등록시 링크를 등록해주세요
    $.each(coords, function (index) {
        $("#Map").append(area[0] + coords[index] + area[1] + productlink[index] + area[2]);
    }); //위의 좌표와 링크로 <area>태그를 추가하는 부분
});
