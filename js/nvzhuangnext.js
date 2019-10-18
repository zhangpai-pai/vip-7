
$(function(){
  $('.product>.main>dl').on('click',function(){
      location.href = './shangpinxq.html';

  })

})

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

window.onload = function () {
    document.getElementsByTagName("table").item(0).style.cursor = "pointer";
    //需求分析:
    //1 页面滚动,如果滚动的距离超过top的高度,nav就添加类名fixed
    //2 页面滚动,如果滚动的距离小于top的高度,nav就移除类名
    //获取相关元素
    var topHeight = document.getElementById('index-header').offsetHeight; //top的高度
    var nav = document.getElementById('nav'); //nav元素
    //页面滚动
    window.onscroll = function () {
        //获取页面被卷曲的上部
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop > topHeight) {
            //如果滚动的距离超过top的高度,nav就添加类名fixed
            nav.className = 'fixed'
        } else {
            // 如果滚动的距离小于top的高度,nav就移除类名
            nav.className = '';

        }
    }
}
