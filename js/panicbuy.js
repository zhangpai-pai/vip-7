$(function () {
    $(".main img").each(function (i, dom) {
        $(".main img").eq(i).on("mouseover", function () {
            $(".main img").eq(i).animate({
                "opacity": 0.6
            }, function () {
                $(".main img").eq(i).animate({
                    "opacity": 1
                })
            })
        })
    })
    $(".main>li").each(function (i, dom) {
        $(".main>li").eq(i).on("mouseover", function () {
            $(".pcpPingPai").eq(i).css({
                display: "block"
            })
        })
        $(".main>li").eq(i).on("mouseout", function () {
            $(".pcpPingPai").eq(i).css({
                display: "none"
            })
        })
        $(".pcpPingPai").eq(i).on("mouseover",function(){
            $(".pcpPingPai span").eq(i).css({
                color:"#fff"
            })
        })
        $(".pcpPingPai").eq(i).on("mouseout",function(){
            $(".pcpPingPai span").eq(i).css({
                color:"#ff0080"
            })
        })
    })

})