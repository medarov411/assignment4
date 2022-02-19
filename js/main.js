$(".my_audio").trigger('load');
function play_audio(task) {
    if(task == 'play'){
         $(".my_audio").trigger('play');
    }
    if(task == 'stop'){
         $(".my_audio").trigger('pause');
         $(".my_audio").prop("currentTime",0);
    }
}

$(".hiddenBtn").click(function(){
    $(".myForm").removeClass("hidden");
    $(".myForm").css("text-align","left");

})

$(".for-shadow").mouseover(function(){
    $(".for-shadow").css("box-shadow", "0 0 5px #00fdf0, 0 0 10px #00fdf0, 0 0 15px #00fdf0");
});

$(".for-shadow").mouseover(function(){
    $(".for-shadow").css("box-shadow", "0 0 5px #00fdf0, 0 0 10px #00fdf0, 0 0 15px #00fdf0");
});

$(".for-shadow").mouseout(function(){
    $(".for-shadow").css("box-shadow", "none");
});
$(document).ready(function(){
    $("body").keypress(function(){
      $(".card").css("box-shadow","0 0 5px #ebaf23, 0 0 10px #ebaf23, 0 0 15px #ebaf23");
    });
  });