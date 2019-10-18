$(function (){
   
        $(function () {
            var flag = true;
            str = "<a href='#'><img src='./img/img-index-header/1536548648745.png' alt=''>商品分类 </a>"
            // 目录
            $('.sps').on('mouseenter mouseleave', function () {
                if (flag == true) {
                    $(this).stop(true, true).animate({ 'height': 490 }, 500);
                    str += "<div class='ul'><ul><li>首页</li> <li>男装/女装</li> <li>男鞋/女鞋</li><li>护肤彩妆</li><li>家电数码</li><li>居家用品</li><li>手表装饰</li><li>唯品生活</li><li>唯品国际</li></ul>"
                    $(this).html(str)
                    flag = false;
                }
            }).on('mouseleave', function () {
                if (flag == false) {
                    var $that = $(this);
                    $(this).stop(true, true).animate({ 'height': 53.33 }, 500, function () {
                        $that.html("<a href='#'><img src='./img/img-index-header/1536548648745.png' alt=''>商品分类 </a>")
                    })

                    flag = true;
                }
            })


        })

    $(".nav ul li").eq(0).css(  {background :"#fff",
    color :"#ff6f8a"});
    $(".nav ul li").on("click",function(){
           //console.log($(this).attr("index"))
        $(this).css(  {background :"#fff",
                 color :"#ff6f8a"});
        $(this).siblings().css({background :"#ff6f8a",color :"#fff"});
        $(".min-list").animate({
            'top':-270*$(this).attr("index")
        })
        })
        $(".min-list>ol>li:has('img')").mouseenter(function(){
            $(this).fadeTo(500,0.5);
            $(this).fadeTo(500,1).css(  
               {background :"#fff",
                color :"#ff6f8a"});

        });

        $(".product>.main>ul>li>a:has('img')").mouseenter(function(){
            $(this).fadeTo(500,0.5);
            $(this).fadeTo(500,1)
        });

    }) 
