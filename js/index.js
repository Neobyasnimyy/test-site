$(document).ready(function(){
/*        $(".main-nav").find("li").mouseover(function(){
        $(this).find("a").css({"color":"#fff"});
        $(".main-naw-wrap").css({"display": "block"});
        console.log("kkk");
    });
    $(".main-nav").find("li").mouseout(function(){
        $(this).find("a").css({"color":"#45413e"});
        // $(".main-naw-wrap").css({"display": "none"});
        console.log("fff");
    });
    $(".main-naw-wrap").mouseout(function(){
        $(this).css({"display": "none"});
    });*/

    //при клике будет отрабатывать скрипт
    $('.categories').click(function () {
        // $('.categories').css({"background-color":"#45413e","color":"#fff"});
        $('.main-naw-wrap').toggle(); //тогл это переключатель, если display block он сделает none  и наоборот
    });

    $('.chetbox > div').click(function () {
        $(this).find('ul').toggle(); //тогл это переключатель, если display block он сделает none  и наоборот
    });

    $(".chetbox").find("div").mouseover(function(){
        $(this).css({"background-color":"#45413e","color":"#fff"});
        console.log("kkk");
    });
    $(".chetbox").find("div").mouseout(function(){
        $(this).css({"background-color":"white","color":"#b1b0b0"});
        console.log("kkk");
    });

});
