function callbtn(key) {
    var fileter = "win16|win32|win64";
    console.log("함수 수행");
    if (fileter.indexOf(navigator.platform.toLowerCase()) < 0) {
        if (key == 1644) {
            console.log("1644연결");
            location.replace("tel://16440155");
        }else if(key == 80){
            console.log("080연결");
            location.replace("tel://0800221155");
        }else if(key == 2102){
            console.log("2102연결");
            location.replace("tel://0221023633");
        }
        else if(key == 841){
            console.log("841연결");
            location.replace("tel://028416860");
        }else if(key == 3272){
            console.log("3272연결");
            location.replace("tel://0232736121");
        }else if(key == 779){
            console.log("779연결");
            location.replace("tel://027794700");
        }else if(key == 535){
            console.log("535연결");
            location.replace("tel://025350425");
        }else if(key == 506){
            console.log("506연결");
            location.replace("tel://0325068281");
        }else if(key == 903){
            console.log("903연결");
            location.replace("tel://0319033147");
        }else if(key == 233){
            console.log("233연결");
            location.replace("tel://0312336627");
        }else if(key == 704){
            console.log("704연결");
            location.replace("tel://0317044694");
        }else if(key == 256){
            console.log("256연결");
            location.replace("tel://0422567337");
        }else if(key == 257){
            console.log("257연결");
            location.replace("tel://0422575223");
        }else if(key == 744){
            console.log("744연결");
            location.replace("tel://0337441721");
        }else if(key == 645){
            console.log("645연결");
            location.replace("tel://0336459677");
        }else if(key == 652){
            console.log("652연결");
            location.replace("tel://0336528336");
        }else if(key == 423){
            console.log("423연결");
            location.replace("tel://0534230202");
        }else if(key == 426){
            console.log("426연결");
            location.replace("tel://0534266177");
        }else if(key == 256){
            console.log("256연결");
            location.replace("tel://0552566417");
        }else if(key == 463){
            console.log("463연결");
            location.replace("tel://0514630941");
        }else if(key == 312){
            console.log("312연결");
            location.replace("tel://0513121369");
        }else if(key == 260){
            console.log("260연결");
            location.replace("tel://0522608868");
        }else if(key == 841){
            console.log("841연결");
            location.replace("tel://028416860");
        }else if(key == 223){
            console.log("223연결");
            location.replace("tel://0632235048");
        }else if(key == 350){
            console.log("350연결");
            location.replace("tel://0623506127");
        }else if(key == 224){
            console.log("224연결");
            location.replace("tel://0622242466");
        }else if(key == 350){
            console.log("350연결");
            location.replace("tel://0623506127");
        }else if(key == 1544){
            console.log("1544연결");
            location.replace("tel://0215442935");
        }else if(key == 752){
            console.log("752연결");
            location.replace("tel://0647524505");
        }else if(key == 758){
            console.log("758연결");
            location.replace("tel://0647583262");
        }
    } else {
        alert("핸드폰 및 MacOS에서 클릭시 바로 전화로 연결됩니다!\n윈도우 이용자는 전화 1644-0155로 연락주시면 감사하겠습니다!");
    }
}
