var coords; //이미지 좌표
var productlink; //제품 링크
var area = ['<area shape="rect" coords="', '" href="', '"/>'];

$(function () {
    coords = [
        "43,170,183,336",
        "212,171,357,337",
        "379,170,529,343",
        "34,455,189,643",
        "205,456,362,642",
        "375,458,535,638",
        "548,456,711,642",
        "729,443,891,635",
        "548,456,711,642",
        "26,741,181,926",
        "203,741,363,931",
        "375,741,537,925",
        "545,741,712,927",
        "36,1035,176,1206",
        "200,1032,353,1216",
        "377,1033,527,1216",
        "545,1033,703,1210",
        "36,1316,174,1493",
        "198,1315,353,1493",
        "373,1315,526,1491",
        "543,1314,704,1493",
        "726,1312,877,1500",
        "896,1312,1050,1492",
        "32,1606,191,1806",
        "203,1605,371,1810",
        "382,1605,533,1808",
        "547,1605,694,1812"
    ]; //신규 제품 등록시 좌표를 등록해주세요
    productlink = [
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=259",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=19&seq=224",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=19&seq=225",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=179",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=15&seq=182",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=19&seq=226",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=19&seq=227",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=19&seq=258",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=19&seq=258",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=220",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=5&seq=218",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=5&seq=217",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=5&seq=215",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=198",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=223",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=5&seq=219",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=5&seq=216",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=3&seq=165",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=3&seq=232",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=3&seq=208",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=238",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=4&seq=222",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=5&seq=214",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=17&seq=161",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=17&seq=205",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=17&seq=174",
        "http://nec.mooviccom.co.kr/product/detail.asp?category_top=1&category_sub=3&seq=172"
    ]; //신규 제품 등록시 링크를 등록해주세요
    $.each(coords, function (index) {
        $("#Map").append(area[0] + coords[index] + area[1] + productlink[index] + area[2]);
    }); //위의 좌표와 링크로 <area>태그를 추가하는 부분
});
