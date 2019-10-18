$(function () {


    var flag = true;
    // 目录
    $('.sps').on('mouseenter mouseleave', function () {
        if (flag == true) {
            $(this).stop(true, true).animate({ 'height': 490 }, 500);
            str = "<a href='#'><img src='./img/img-index-header/1536548648745.png' alt=''>商品分类 </a><div class='ul'><ul><li>首页</li> <li>男装/女装</li> <li>男鞋/女鞋</li><li>护肤彩妆</li><li>家电数码</li><li>手表装饰</li><li>唯品生活</li><li>唯品国际</li></ul>"
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
        time:function (){
            ss--
            public.setStorage(mm,'mm')
            public.setStorage(ss,'ss')
            var m=mm
            var s=ss
            if(mm<10){
                m='0'+mm
            }
            if(ss<10){
                s='0'+ss
            }
            $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').find('p').html('商品将保留'+m+'分'+s+'秒')
            $('#main .box1 li:eq(0)').html('特卖商品 '+m+' ：'+s)  //购物车结算
            $('#nav .nav2 .con4').html('立即结算 '+m+'：'+s)       //购物车结算
            if(ss==0){
                mm--
                ss=60
            }
        },
        time1:function (){
            // var mm=public.getStorage('mm')
            // var ss=public.getStorage('ss')
            ss--
            public.setStorage(mm,'mm')
            public.setStorage(ss,'ss')
            var m=mm
            var s=ss
            if(mm<10){
                m='0'+mm
            }
            if(ss<10){
                s='0'+ss
            }
            $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').find('p').html('商品将保留'+m+'分'+s+'秒')
            $('#main .box1 li:eq(0)').html('特卖商品 '+m+' ：'+s)  //购物车结算
            $('#nav .nav2 .con4').html('立即结算 '+m+'：'+s)       //购物车结算
            if(ss==0){
                mm--
                ss=60
            }
        }
    }
    function hidden(str,frontLen,endLen) { //截取
        var len = str.length-frontLen-endLen;
        var xing = '';
        for (var i=0;i<len;i++) {
            xing+='*';
        }
        return str.slice(0,frontLen)+xing+str.slice(str.length-endLen);
    }
    //登录信息
    if(public.getStorage('denglu').length==11){
        if(public.getStorage('list1').length>0){  //list1有内容将内容给list
            public.setStorage(public.getStorage('list1'),'list')
        }
        var un=public.getStorage('denglu')
        var newUn=hidden(un,3,4)
        $('#index-nav-right .sidebar-act ul li:eq(0) .zhanghao p span').html(newUn)  //右边栏个人信息
        $('#index-header .select ul>div').css({display:'block'})
        $('#index-header .select ul>div p:eq(0)').html(newUn)
        $('#index-header .select ul .login').css({display:'none'})
        $('#index-header .select ul>div').on('mouseenter',function(){
            $('#index-header .select ul>div p:eq(1)').css({display:'block'})
            $('#index-header .select ul>div p:eq(1)').on('click',function(){
                $('#index-header .select ul>div').css({display:'none'})
                public.setStorage('','denglu')
                location.reload(true)  //退出后刷新页面
            })
        })
        $('#index-header .select ul>div').on('mouseleave',function(){
            $('#index-header .select ul>div p:eq(1)').css({display:"none"})
        })
        
    }else{   //没有登录
        var sss=public.getStorage('list')
        if(sss.length>0){
            public.setStorage(sss,'list1')
        }
        
        public.setStorage('','list')  //将list的内容给list1,清空list，所以购物车渲染为空
        $('#index-header .select ul .login').css({display:'block'})  //显示登录注册
        $('#index-nav-right .sidebar-act ul li:eq(0) .zhanghao p span').html('')  //隐藏个人信息
    }
    //刷新页面更新
    var products=public.getStorage('list')
    var place=public.getStorage('place')
    var n=0
    var Sn=0
    public.renderCart()
    for(var i=0;i<products.length;i++){
        n+=Math.floor(products[i].num)
        Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
    }
    $('#index-nav-right>.sidebar-act>ul>li:eq(1) a span:eq(2)').html(n)
    $('#index-header .shop-box .num').html(n)
    if(!place.jie){
        place.jie='西乡街道'
    }
    $('#index-nav-right .cart .bott .song').html(n+'件商品配送至'+place.jie)
    $('#index-nav-right .cart .bott .qian').html('￥'+Sn)
    if(!place.shi){
        place.shi='深圳市'
    }
    $('#index-header .area a').html(place.shi)   //头部  市

    // if(products.length>0){
    //     var min=public.getStorage('min')
    //     var now=new Date()
    //     if(min.length<1){
    //         var date=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes()+20)
    //     }
    //     else{
    //         //var s=Math.floor(public.getStorage('s'))
    //         var date=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes()+Math.floor(min))
    //     }
    //     window.test=setInterval(public.time,1000)
    // }
    if(products.length>0){
        var mm=public.getStorage('mm')
        //var ss=public.getStorage('ss')
        if(mm.length<1){
            public.setStorage(19,'mm')
            public.setStorage(60,'ss')
            var mm=19
            var ss=59
            window.test=setInterval(public.time,1000)
        }
        else{
            var mm=public.getStorage('mm')
            var ss=public.getStorage('ss')
            window.test=setInterval(public.time1,1000)
        }
        
    }else{
        clearInterval(window.test)
        public.setStorage(19,'mm')
        public.setStorage(60,'ss')
    }
    $('.content .addCart').on('click',function(){
        clearInterval(window.test)
        public.setStorage(19,'mm')
        public.setStorage(60,'ss')
        var mm=19
        var ss=59
        window.test=setInterval(function (){
            ss--
            public.setStorage(mm,'mm')
            public.setStorage(ss,'ss')
            var m=mm
            var s=ss
            if(mm<10){
                m='0'+mm
            }
            if(ss<10){
                s='0'+ss
            }
            $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').find('p').html('商品将保留'+m+'分'+s+'秒')
            $('#main .box1 li:eq(0)').html('特卖商品 '+m+' ：'+s)  //购物车结算
            $('#nav .nav2 .con4').html('立即结算 '+m+'：'+s)       //购物车结算
            if(ss==0){
                mm--
                ss=60
            }
        },1000)
        console.log(location.href)
        
    })

    //-------------------------------#index-header   .dizhi 相关------------------------------
    var shi
    $('#index-header .area').on('click', function () {
        $('#index-header .area .dizhi-main').css({ display: 'block' })
        //$(this).children('p').css({ borderBottom: '1px solid #fff' })
        $('#index-header .area .conn-1>li').on('click', function () {
            sheng = $(this).html()
            $(this).css({ background: '#f10180', color: '#fff' })
            $(this).siblings().css({ background: '#fff', color: '#000' })
            $('#index-header .area .title .sheng').css({ border: '1px solid #ccc' })
            $('#index-header .area .title .shi').css({ display: 'block', borderBottom: '1px solid #fff' })
            $('#index-header .area .conn-1').css({ display: 'none' })
            $('#index-header .area .conn-2').css({ display: 'block' })
            $('#index-header .area .line').css({ left: 89 })
        })
        $('#index-header .area .conn-2>li').on('click', function () {
            shi = $(this).html()
            $(this).css({ background: '#f10180', color: '#fff' })
            $(this).siblings().css({ background: '#fff', color: '#000' })
            $('#index-header .area .title .shi').css({ border: '1px solid #ccc' })
            $('#index-header .area .title .qu').css({ display: 'block', borderBottom: '1px solid #fff' })
            $('#index-header .area .conn-2').css({ display: 'none' })
            $('#index-header .area .conn-3').css({ display: 'block' })
            $('#index-header .area .line').css({ left: 178 })
        })
        $('#index-header .area .conn-3>li').on('click', function () {
            qu = $(this).html()
            $(this).css({ background: '#f10180', color: '#fff' })
            $(this).siblings().css({ background: '#fff', color: '#000' })
            $('#index-header .area .title .qu').css({ border: '1px solid #ccc' })
            $('#index-header .area .title .jie').css({ display: 'block', borderBottom: '1px solid #fff' })
            $('#index-header .area .conn-3').css({ display: 'none' })
            $('#index-header .area .conn-4').css({ display: 'block' })
            $('#index-header .area .line').css({ left: 267 })
        })
        $('#index-header .area .conn-4>li').on('click', function () {
            jie = $(this).html()
            $(this).css({ background: '#f10180', color: '#fff' })
            $(this).siblings().css({ background: '#fff', color: '#000' })
            $('#index-header .area .dizhi-main').css({ display: 'none' })       //选择街道后自动关闭
            var pla={'sheng':sheng,'shi':shi,'qu':qu,'jie':jie}
            public.setStorage(pla,'place')
            var place=public.getStorage('place')
            var main=place.sheng+'&nbsp'+place.shi+'&nbsp'+place.qu+'&nbsp'+place.jie+'<i></i>'   //给shangpinxq.html使用
            $('.content .dizhi p').html(main)   //详细   /给shangpinxq.html使用
            $('#index-header .area a').html(place.shi)   //头部  市
            $('#index-nav-right .cart .bott .song').html(n+'件商品配送至'+place.jie)

            event.stopPropagation();
        })
        $('#index-header .area .title .sheng').on('click', function () {
            $('#index-header .area .line').css({ left: 0 })
            $('#index-header .area .title .sheng').css({ borderBottom: '1px solid #fff' })
            $('#index-header .area .title .sheng').siblings('.dd').css({ border: '1px solid #ccc' })
            $('#index-header .area .conn .conn-1').css({ display: 'block' })
            $('#index-header .area .conn .conn-1').siblings().css({ display: 'none' })
        })
        $('#index-header .area .title .shi').on('click', function () {
            $('#index-header .area .line').css({ left: 89 })
            $('#index-header .area .title .shi').css({ borderBottom: '1px solid #fff' })
            $('#index-header .area .title .shi').siblings('.dd').css({ border: '1px solid #ccc' })
            $('#index-header .area .conn .conn-2').css({ display: 'block' })
            $('#index-header .area .conn .conn-2').siblings().css({ display: 'none' })
        })
        $('#index-header .area .title .qu').on('click', function () {
            $('#index-header .area .line').css({ left: 178 })
            $('#index-header .area .title .qu').css({ borderBottom: '1px solid #fff' })
            $('#index-header .area .title .qu').siblings('.dd').css({ border: '1px solid #ccc' })
            $('#index-header .area .conn .conn-3').css({ display: 'block' })
            $('#index-header .area .conn .conn-3').siblings().css({ display: 'none' })
        })
        $('#index-header .area .title .jie').on('click', function () {
            $('#index-header .area .line').css({ left: 267 })
            $('#index-header .area .title .jie').css({ borderBottom: '1px solid #fff' })
            $('#index-header .area .title .jie').siblings('.dd').css({ border: '1px solid #ccc' })
            $('#index-header .area .conn .conn-4').css({ display: 'block' })
            $('#index-header .area .conn .conn-4').siblings().css({ display: 'none' })
        })
        $('#index-header .area .clean').on('click', function () {  //关闭按钮
            $('#index-header .area .dizhi-main').css({ display: 'none' })
            $('#index-header .area p').css({ border: '1px solid #ccc' })
            event.stopPropagation();
        })
        $('#index-header .area a').html(shi)
    })
    //-------------------------------#index-header   .dizhi 结束------------------------------

    //-------------------------------#index-header-right 相关------------------------------
    
    //index-nav-right的高度适应当前窗口
    $('#index-nav-right').css({height:$(window).height()})
    $('#index-nav-right .cart').css({height:$(window).height(),top:-($('#index-nav-right>.sidebar-act>ul>li:eq(1)').offset().top-$(document).scrollTop())})


    //index-nav-right  的在当前index-nav-right盒子的移入移出
    $('#index-nav-right ul>li').each(function(){
        $(this).on('mouseenter',function(){
            $(this).css({background: '#df147f'})
            $(this).siblings().css({background: ''})
            $(this).siblings().children('.move').css({display:'none',opacity:0})
            $(this).children('.move').css({display:'block'}).animate({opacity:1},500)

        })
    })
    //index-nav-right  的在页面的移入移出
    $('#index-nav-right .sidebar-act').on('mouseleave',function(){
        $(this).find('.move').css({display:'none',opacity:0})
        $(this).find('.zhanghao').css({display:'none',opacity:0})
        $(this).find('li').css({background:''})
    })

    //点击关闭个人账号信息
    $('#index-nav-right .sidebar-act ul li:eq(0) strong').on('click',function(){
        $(this).parent().css({display:'none',opacity:0})
    })

    //index-nav-right 返回顶部按钮
    $('#index-nav-right>.sidebar-act>ul>li:eq(7) .move').on('click',function(){
        $('body,html').animate({scrollTop:0},1000);
    })

    //index-nav-right 购物袋按钮
    $('#index-nav-right>.sidebar-act>ul>li:eq(1)').on('click',function(){
        $(this).children('.cart').css({display:'block'}).animate({opacity:1},500)
        $(this).siblings().children('.cart').css({display:'none',opacity:0})
        public.renderCart()
    })
    //点击关闭购物袋
    $('#index-nav-right .sidebar-act ul li:eq(1) strong').on('click',function(){
        $(this).parent().parent().css({display:'none',opacity:0})
        event.stopPropagation()
    })


    //--------------------------#index-nav-right结束-----------------------------



    //index-nav-right  跳转shopping
    $('#index-nav-right .sidebar-act ul li:eq(1) .aad').on('click',function(){
          
        $(location).attr('href', './shopping.html')
    })
    //index-header  跳转shopping
    $('#index-header .head-search .shop-wrap a').on('click',function(){
              
        $(location).attr('href', './shopping.html')
    })
    //index-header logo跳转首页
    $('#index-header .head-search .logo').on('click',function(){
        $(location).attr('href', './index.html')
    })

    //点击每一个页面，该标题变色
    var fff
    $('#index-header .main-nav ul li').each(function(i){
        $('#index-header .main-nav ul li').eq(i).children().on('click',function(){
            fff=i
            public.setStorage(fff,'ff')
        })
    })
    var ff=public.getStorage('ff')
    $('#index-header .main-nav ul li').each(function(j){
        $('#index-header .main-nav ul li').eq(j).children().css({color:'#333',fontWeight:'normal'})
    })
    $('#index-header .main-nav ul li').eq(ff).children().css({color:'#f10180',fontWeight:700})
})