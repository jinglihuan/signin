$(function(){
   setInterval(function(){
       $.get("/sign/nowSysTime",function(res){
           $("#nowTime").text(res.nowTime);
       })
   },1000*60);
});