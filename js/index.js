$(document).ready(function(){

    $(document).mousemove(function(e){
        $('#status').html(e.pageX +', '+ e.pageY);
        $(".box").css("width", e.pageX);
        $(".box").css("height", e.pageY);
     });
       


})
