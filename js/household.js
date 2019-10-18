$(function () {
    //点击移动位置
    //HotCategories-Main-nav ul li:eq(0)的点击事件
    //判断点击的li是原来li的位置来移动位置
    var $HotLi = $(".HotCategories-Main-nav ul li");
    var $HotLiSpan = $(".HotCategories-Main-nav ul li span");
    var $Hotbox = $(".HotCategories-Main-coment");
    $HotLi.eq(0).css({
        background:"#ffffff"
    })
    $HotLi.each(function (i, dom) {
        $HotLiSpan.css({
            opacity: 0,
            left: 160
        })
        // 列表的轮播导航移入移出点击
        $HotLi.eq(i).on("click mouseenter mouseleave", function (event) {
            // 列表导航的移入事件
            if (event.type == "mouseenter") {
                $HotLi.eq(i).css({
                    color: "#e9af46"
                });
                $HotLiSpan.eq(i).css({
                    opacity: 1
                });
                $HotLiSpan.eq(i).animate({
                    "left": 180
                });
                 // 列表导航的移出事件
            } else if (event.type == "mouseleave") {
                $HotLi.eq(i).css({
                    color: "#666666"
                })
                $HotLiSpan.eq(i).css({
                    opacity: 0
                })
                $HotLiSpan.eq(i).animate({
                    "left": 160
                })
                event.stopPropagation()
            } else {
                // 列表导航的点击事件
                $HotLi.eq(i).css({
                    background: "#ffffff",
                    color: "#e9af46"
                });
                $HotLi.eq(i).siblings().css({
                    background: "#f4f4f4",
                    color: "#666666"
                });
                if (i == 1) {
                    $Hotbox.animate({
                        "top": -386
                    }, 500)
                }
                if (i == 2) {
                    $Hotbox.animate({
                        "top": -772
                    }, 500)
                }
                if (i == 0) {
                    $Hotbox.animate({
                        "top": 0
                    }, 500)
                }
            }
        })
    })
    $(".shopList-coment dl").each(function (i, dom) {
        // ---------移入图片透明度的变化和品牌图标的变化
        $(".shopList-coment dl").eq(i).on("mouseenter", function () {
            $(".shopList-coment dt").eq(i).animate({
                "opacity": 0.6
            },200, function () {
                $(".shopList-coment dt").eq(i).animate({
                    "opacity": 1
                },200)
            })
            //品牌图标的有
            $(".housePingPai").eq(i).css({
                display: "block"
            })
        })
        // 移出品牌图标的无
        $(".shopList-coment dl").eq(i).on("mouseleave", function () {
            $(".housePingPai").eq(i).css({
                display: "none"
            })
        })
        // 移入品牌图标的心形图标
        $(".housePingPai").eq(i).on("mouseenter",function(){
            $(".housePingPai span").eq(i).css({
                color: "#fff"
            })
        })
        $(".housePingPai").eq(i).on("mouseleave",function(){
            $(".housePingPai span").eq(i).css({
                color: "#ff0080"
            })
        })
    })
    // 轮播
    $('.flexslider').flexslider({
        animation: "slide",
        direction: "horizontal",
        easing: "swing"

    });

})