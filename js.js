$(function(){
    dday(2019,6,3,"#jh")
    dday(2019,7,16,"#jh2")//년,일,월,출력할 부분 ID값
    dday(2018,11,19,"#wo")
});

 

function dday(y,m,d,id){
    setInterval(function(){
    var nowtime = new Date(); 
    var ddaytime = new Date(y,m-1,d);
    var dday2 = ddaytime.getTime() - nowtime.getTime();
    var day = Math.ceil(dday2 / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((dday2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.ceil((dday2 % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((dday2 % (1000 * 60)) / 1000);
    $(id).html(day+"일 "+hour+"시 "+min+"분 "+sec+"초");
        },1000);
    
}