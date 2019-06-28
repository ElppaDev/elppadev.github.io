function callbtn(key) {
    var fileter = "win16|win32|win64";
    console.log("함수 수행");
    if (fileter.indexOf(navigator.platform.toLowerCase()) < 0) {
        if (key == 1644) {
            console.log("1644연결");
            location.replace("tel://16440155");
        } else if (key == 80) {
            console.log("080연결");
            location.replace("tel://0800221155");
        } else {
            alert("핸드폰 및 MacOS에서 클릭시 바로 전화로 연결됩니다!\n윈도우 이용자는 전화 1644-0155로 연락주시면 감사하겠습니다!");
        }
    }
}
