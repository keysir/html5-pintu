/**
 * Created by 440S on 2014/12/17.
 */
var touchList=[];

var index_dian=0;
var index_hua=7;
var times;
$(function(){

    $(".btn").click(function(e){
        $(this).hide();
        $('.btn_s').hide();
        $(".btn_2").hide();
        $("#canvas").css('display','block');
        init();
        times= $(".digits").countdown({
            image: "images/time2.png",
            format: "mm:ss",
            startTime: "00:00",
            digitImages:1,
            digitWidth: 25,
            digitHeight:40,
            timerEnd: function(){

                //   alert("游戏结束");
            }
        });



    })

});
