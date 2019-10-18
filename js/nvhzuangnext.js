$(function () {
    $(".product dl").on("mouseover", function () {
        $(this).css("cursor", "pointer").mouseout(function () {
            $(this).css("cursor", "default");
        });
    })
    $(".list ul li").on("click",function(){
        $(this).css("background-color","#f10180");
        $(this).css("color","#fff").mouseout(function(){
            $(this).css("background-color","#fff");
            $(this).css("color","#ccc")
        })
    })
})