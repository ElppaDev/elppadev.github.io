var coords; //이미지 좌표
var productlink; //제품 링크
var area = ['<area shape="rect" coords="', '" href="', '"/>'];

$(function () {
    coords = [
        "143,3,272,95",
        "276,3,411,95",
        "416,3,541,95",
        "148,108,271,193",
        "274,107,412,193",
        "416,107,541,193",
        "145,207,273,293",
        "276,207,405,291",
        "409,207,542,292"
    ]; //신규 제품 등록시 좌표를 등록해주세요
    productlink = [
        "http://www.nswin.co.kr/product/projector_nec.asp",
        "http://www.nswin.co.kr/product/event_nec.asp",
        "https://www.nec-display.com/ap/simulator2/index.html",
        "http://www.nswin.co.kr/product/projector_hitachi.asp",
        "http://www.nswin.co.kr/product/event_hitachi.asp",
        "http://www.hitachidigitalmedia.com/en-gb/throw-distance-calculator",
        "/html/company.html",
        "https://pf.kakao.com/_xbDTxbj/chat",
        "tel:16440155"
    ]; //신규 제품 등록시 링크를 등록해주세요
    $.each(coords, function (index) {
        $("#Map").append(area[0] + coords[index] + area[1] + productlink[index] + area[2]);
    }); //위의 좌표와 링크로 <area>태그를 추가하는 부분
});
