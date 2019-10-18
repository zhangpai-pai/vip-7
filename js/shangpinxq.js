$(function(){

    //-------------------------------content   .dizhi 相关------------------------------
    //公共函数
    var public = {
        //设置本地存储
        setStorage: function (json,na) {
            localStorage.setItem(na, JSON.stringify(json))
        },
        //读取本地存储
        getStorage: function (na) {
            return JSON.parse(localStorage.getItem(na)) || []
        },
        renderCart:function(){
            var products=public.getStorage('list')
            if(products.length<1){
                $('#index-nav-right .render').html('')
            }else{
                var str=''
                for(var i=0;i<products.length;i++){
                    str+=`<div class="item">
                        <img src="./img/spxiangqing/nanshi_03.jpg" alt="">
                        <div class="item-n">
                            <div class="item-name">凯迪东尼男士<br>羊毛桑蚕丝亲</div>
                            <div class="item-size">${products[i].size}</div>
                        </div>
                        <div class="item-num">${products[i].num}</div>
                        <div class="item-price">${products[i].price}</div>
                        </div>`
                }
                $('#index-nav-right .render').html(str)
            }
        },
        // time:function (){
        //     var now=new Date()  //当前时间
        //     cutTime=Math.floor((date-now)/1000)
        //     var m=Math.floor(cutTime/60)
        //     var s=Math.floor(cutTime%60)
        //     var ms=m+1
        //     public.setStorage(ms,'min')
        //     //public.setStorage(s,'s')
        //     if(m<10){
        //         m='0'+m
        //     }
        //     if(s<10){
        //         s='0'+s
        //     }
        //     $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').find('p').html('商品将保留'+m+'分'+s+'秒')
        // }
    }
    var jie
    //刷新页面更新地点
    var place=public.getStorage('place')
    var main=place.sheng+'&nbsp'+place.shi+'&nbsp'+place.qu+'&nbsp'+place.jie+'<i></i>'
    if(!place.sheng){
        main='请选择省市区'
    }
    $('.content .dizhi p').html(main)  //详细

    $('.content .dizhi').on('click',function(){
        $('.content .dizhi .dizhi-main').css({display:'block'})
        $(this).children('p').css({borderBottom:'1px solid #fff'})
        $('.content .dizhi .conn-1>li').on('click',function(){
            sheng=$(this).html()
            $(this).css({background:'#f10180',color:'#fff'})
            $(this).siblings().css({background:'#fff',color:'#000'})
            $('.content .dizhi .title .sheng').css({border:'1px solid #ccc'})
            $('.content .dizhi .title .shi').css({display:'block',borderBottom:'1px solid #fff'})
            $('.content .dizhi .conn-1').css({display:'none'})
            $('.content .dizhi .conn-2').css({display:'block'})
            $('.content .dizhi .line').css({left:89})
        })
        $('.content .dizhi .conn-2>li').on('click',function(){
            shi=$(this).html()
            $(this).css({background:'#f10180',color:'#fff'})
            $(this).siblings().css({background:'#fff',color:'#000'})
            $('.content .dizhi .title .shi').css({border:'1px solid #ccc'})
            $('.content .dizhi .title .qu').css({display:'block',borderBottom:'1px solid #fff'})
            $('.content .dizhi .conn-2').css({display:'none'})
            $('.content .dizhi .conn-3').css({display:'block'})
            $('.content .dizhi .line').css({left:178})
        })
        $('.content .dizhi .conn-3>li').on('click',function(){
            qu=$(this).html()
            $(this).css({background:'#f10180',color:'#fff'})
            $(this).siblings().css({background:'#fff',color:'#000'})
            $('.content .dizhi .title .qu').css({border:'1px solid #ccc'})
            $('.content .dizhi .title .jie').css({display:'block',borderBottom:'1px solid #fff'})
            $('.content .dizhi .conn-3').css({display:'none'})
            $('.content .dizhi .conn-4').css({display:'block'})
            $('.content .dizhi .line').css({left:267})
        })
        $('.content .dizhi .conn-4>li').on('click',function(){
            jie=$(this).html()
            $(this).css({background:'#f10180',color:'#fff'})
            $(this).siblings().css({background:'#fff',color:'#000'})
            $('.content .dizhi .dizhi-main').css({display:'none'})    //选择街道后自动关闭
            $('.content .dizhi p').css({border:'1px solid #ccc'})
            var pla={'sheng':sheng,'shi':shi,'qu':qu,'jie':jie}
            public.setStorage(pla,'place')
            var place=public.getStorage('place')
            var main=place.sheng+'&nbsp'+place.shi+'&nbsp'+place.qu+'&nbsp'+place.jie+'<i></i>'
            $('.content .dizhi p').html(main)   //详细
            $('#index-header .area a').html(place.shi)   //头部  市
            var products=public.getStorage('list')
            var n=0
            var Sn=0
            for(var i=0;i<products.length;i++){
                n+=Math.floor(products[i].num)
                Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
            }
            $('#index-nav-right .cart .bott .song').html(n+'件商品配送至'+place.jie)   //购物袋街
            var now=new Date()
            var num=now.getDate()+3
            $('.content .peisong').css({opacity:'1'}).html('现在付款，预计10月'+num+'日送达')
            event.stopPropagation(); 
        })
        $('.content .dizhi .title .sheng').on('click',function(){
            $('.content .dizhi .line').css({left:0})
            $('.content .dizhi .title .sheng').css({borderBottom:'1px solid #fff'})
            $('.content .dizhi .title .sheng').siblings('.dd').css({border:'1px solid #ccc'})
            $('.content .dizhi .conn .conn-1').css({display:'block'})
            $('.content .dizhi .conn .conn-1').siblings().css({display:'none'})
        })
        $('.content .dizhi .title .shi').on('click',function(){
            $('.content .dizhi .line').css({left:89})
            $('.content .dizhi .title .shi').css({borderBottom:'1px solid #fff'})
            $('.content .dizhi .title .shi').siblings('.dd').css({border:'1px solid #ccc'})
            $('.content .dizhi .conn .conn-2').css({display:'block'})
            $('.content .dizhi .conn .conn-2').siblings().css({display:'none'})
        })
        $('.content .dizhi .title .qu').on('click',function(){
            $('.content .dizhi .line').css({left:178})
            $('.content .dizhi .title .qu').css({borderBottom:'1px solid #fff'})
            $('.content .dizhi .title .qu').siblings('.dd').css({border:'1px solid #ccc'})
            $('.content .dizhi .conn .conn-3').css({display:'block'})
            $('.content .dizhi .conn .conn-3').siblings().css({display:'none'})
        })
        $('.content .dizhi .title .jie').on('click',function(){
            $('.content .dizhi .line').css({left:267})
            $('.content .dizhi .title .jie').css({borderBottom:'1px solid #fff'})
            $('.content .dizhi .title .jie').siblings('.dd').css({border:'1px solid #ccc'})
            $('.content .dizhi .conn .conn-4').css({display:'block'})
            $('.content .dizhi .conn .conn-4').siblings().css({display:'none'})   
        })
        $('.content .dizhi .clean').on('click',function(){  //关闭按钮
            $('.content .dizhi .dizhi-main').css({display:'none'})
            $('.content .dizhi p').css({border:'1px solid #ccc'})
            event.stopPropagation(); 
        })
        
    })
        $('.content .jiage del').css({textDecoration:'line-through'})  //删除线
    //-------------------------------content   .dizhi 结束------------------------------

    //-------------------------------content   购物车 相关------------------------------
    //刷新页面购物袋内容更新
    //位于头部JS
    

    $('.content .shuliang .cut').on('mouseenter',function(){   //数量为1时，禁止
        if($('.content .shuliang .num').html()==1){
            $('.content .shuliang .cut').css({cursor: 'not-allowed'})
        }
    })
    $('.content .shuliang .cut').on('click',function(){  //减
        var number=$('.content .shuliang .num').html()
        number--
        if($('.content .shuliang .num').html()==1){
            $('.content .shuliang .cut').css({cursor: 'not-allowed'})
            return
        }
        $('.content .shuliang .num').html(number)
    })
    $('.content .shuliang .add').on('click',function(){  //加
        var number=$('.content .shuliang .num').html()
        number++
        $('.content .shuliang .cut').css({cursor: 'pointer'})
        $('.content .shuliang .num').html(number)
    })
    //选择尺码
    
    var size1='S'
    var id1=815115010009+size1
    $('.content .chima div').on('click',function(){
        $(this).css({border:'1px solid #f10180'})
        $(this).siblings('div').css({border:'1px solid #999'})
        size1=$(this).html()
        id1=815115010009+size1
    })
    $('.content .addCart').on('click',function(){  //点击加入购物车
        if(public.getStorage('denglu').length<11){
            alert('请先登录')
            return
        }


        $('.content .addCart').css({color:'#999',background:'#ccc'})
        var $span1=$('<span class="iconfont icon-daizi"></span>')
        $('body').append($span1)
        $span1.css({fontSize:30,color:'#f10180',position:'absolute'}).offset({left:$('.content .addCart span').offset().left,top:$('.content .addCart span').offset().top})

        var products=public.getStorage('list')
        var fl=false
        for(var i=0;i<products.length;i++){
            if(products[i].id==id1){
                products[i].num+=Math.floor($('.content .num').html())
                public.setStorage(products,'list')
                public.setStorage(products,'list1')
                fl=true
            }
        }
        if(fl){
        }else{
            var product={
                id:id1,
                src:'./img/spxiangqing/nanhsi_03.jpg',
                name:$('.content .spname').html(),
                size:size1,
                num:Math.floor($('.content .num').html()),
                price:$('.content .jiage p:eq(0) span').html()
            }
            products.push(product)
            public.setStorage(products,'list')
            public.setStorage(products,'list1')
        }
        //购物车
        public.renderCart()
        var products=public.getStorage('list')
        var place=public.getStorage('place')
        var n=0
        var Sn=0
        for(var i=0;i<products.length;i++){
            n+=Math.floor(products[i].num)
            Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
        }
        $('#index-nav-right .cart .bott .song').html(n+'件商品配送至'+place.jie)
        $('#index-nav-right .cart .bott .qian').html('￥'+Sn)
        
        $span1.animate({
            left:$('#index-nav-right').find('.icon-daizi').offset().left,
            top:$('#index-nav-right').find('.icon-daizi').offset().top
            
        },1000,function(){
            $span1.remove()
            $('.content .addCart').css({color:'#fff',background:'#f10180'})
            $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').css({display:'block',top:-$('#index-nav-right>.sidebar-act>ul>li:eq(1)').offset().top,height:$(window).height()}).animate({opacity:1},500)
            //购物袋数量更新
            $('#index-nav-right>.sidebar-act>ul>li:eq(1) a span:eq(2)').html(n)
            $('#index-header .shop-box .num').html(n) 
        })
        //倒计时
        // public.setStorage('20','min')
        // window.test=setInterval(public.time,1000)
        //7s后关闭
        // function off(){
        //     $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').css({display:'none',top:-$('#index-nav-right>.sidebar-act>ul>li:eq(1)').offset().top,height:$(document).height(),opacity:0})
        // }
        // setTimeout(off,7000)
    })
    



    //-------------------------------content   购物车 结束------------------------------

    //-------------------------------content   放大镜 相关------------------------------
    $('.content .minul li').on('mouseenter',function(){
        $(this).css({border:'1px solid #f10180'})
        $(this).siblings().css({border:'1px solid #fff'})
    })
    var index=1
    $('.content .minul li').on('click',function(){
        $('.content .bigimg img').attr({src:'./img/spxiangqing/big'+$(this).attr('index')+'.jpg'})
        index=$(this).attr('index')
    })
    
    $('.content .bigimg').on('mouseenter',function(){
        $('.content .bigimg img').attr({src:'./img/spxiangqing/max'+index+'.jpg'})
        $('.content .bigimg img').css({width:'auto',height:'auto'})
        $('.content .bigimg').on('mousemove',function(){
            var x=event.pageX-$('.content .bigimg').offset().left
            var y=event.pageY-$('.content .bigimg').offset().top
            var bei=($('.content .bigimg img').width()-$('.content .bigimg').width())/$('.content .bigimg').width()
            $('.content .bigimg img').css({
                marginLeft:-x*bei,
                marginTop:-y*bei
            })
    
        })
        $('.content .bigimg').on('mouseleave',function(){
            $('.content .bigimg img').attr({src:'./img/spxiangqing/big'+index+'.jpg'})
            $('.content .bigimg img').css({width:'525',height:'525',marginLeft:0,marginTop:0})
        })
    })
    
})