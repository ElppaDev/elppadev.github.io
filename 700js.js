function dday(y,m,d,id){
    setInterval(function(){
    var nowtime = new Date(); 
    var ddaytime = new Date(y,m-1,d);
    var dday2 = ddaytime.getTime() - nowtime.getTime();
    var day = Math.ceil(dday2 / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((dday2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    var min = Math.ceil((dday2 % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((dday2 % (1000 * 60)) / 1000);
    $(id).html(day+"일 "+hour+"시 "+min+"분 "+sec+"초");
        },1000);
    
}

$(function(){
    dday(2018,5,30,"#title")
});