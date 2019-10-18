$(function(){

    //-----------------------index-header--------------------------


    //-----------------------轮播图--------------------------------------
    var arr=["./img/index/banner-1.jpg","./img/index/banner-2.jpg"]  //存储图片路径
    $('#index-banner img').attr('src',arr[0]) //初始图
    //自动播放函数
    var index=1
    var timer=null
    timer=setInterval(autoPlay,5000)
    function autoPlay(){
        $('#index-banner img').attr('src',arr[index]).css({opacity:0.5}).animate({opacity:1},1000)  //切图
        $('#index-banner>.banner-line>p').animate({left:445+index*286})  //线变化
        index++
        if(index>=2){
            index=0
        }
    }

    //轮播图的鼠标移入移出之定时器
    $('#index-banner>.banner').on('mouseenter',function(){
        clearInterval(timer)
    })
    $('#index-banner>.banner').on('mouseleave',function(){
        timer=setInterval(autoPlay,2000)
    })
    //轮播图的鼠标移入移出之左右箭头效果
    $('#index-banner>.banner>ul:eq(0)').on('mouseenter',function(){
        $('#index-banner .button-prev').animate({
            left:0
        },300)
        $('#index-banner .button-next').animate({
            left:1432-40
        },300)
    })
    $('#index-banner .button-prev').on('mouseenter',function(){
        $(this).animate({opacity: 1},300)
    })
    $('#index-banner .button-next').on('mouseenter',function(){
        $(this).animate({opacity: 1},300)
    })
    $('#index-banner .button-prev').on('mouseleave',function(){
        $(this).animate({opacity: 0.5},300)
    })
    $('#index-banner .button-next').on('mouseleave',function(){
        $(this).animate({opacity: 0.5},300)
    })
    $('#index-banner>.banner>ul:eq(0)').on('mouseleave',function(){
        $('#index-banner .button-prev').animate({
            left:-40
        },300)
        $('#index-banner .button-next').animate({
            left:1432
        },300)
    })
    //轮播图的鼠标移入移出之左右箭头点击
    $('#index-banner .button-prev').on('click',function(){
        autoPlay()
    })
    $('#index-banner .button-next').on('click',function(){
        autoPlay()
    })

    //轮播图的鼠标移入线
    $('#index-banner>.banner>ul:eq(1)>li:eq(0)').on('mouseenter',function(){
        $('#index-banner>.banner-line>p').animate({left:445})
        autoPlay()
    })
    $('#index-banner>.banner>ul:eq(1)>li:eq(1)').on('mouseenter',function(){
        $('#index-banner>.banner-line>p').animate({left:731})
        autoPlay()
    })
    //--------------------轮播图结束------------------------------------------


    //--------------------index-nav-list相关----------------------------------
    //通过遍历，创建$title+i的变量，分别赋值对应的位置
    $('#index-content>.brand-title').each(function(i){
        var name='$title'+i
        window[name]=$('#index-content>.brand-title').eq(i).offset().top
    })
    //index-nav-list 的初始位置  
    $('#index-nav-list').offset({top:$title0})
    var aa=$('#index-header .main-nav').offset().top   //记录$('#index-header .main-nav')的初始位置
    $(window).on('scroll',function(){
        //滚动超过index-header高度时，#index-header变为固定定位。小于时为初始位置
        if($(window).scrollTop()>$('#index-header').height()){
            $('#index-header .main-nav').css({position:'fixed',top:0,zIndex:99})
        }else{
            $('#index-header .main-nav').css({position:'static'}).offset({top:aa})   //static默认  无定位   回到初始位置
        }
        //滚动超过$title0时，#index-nav-list变为固定定位。小于时为初始位置
        if($(window).scrollTop()>$title0){
            $('#index-nav-list').css({position:'fixed',top:100})
        }else{
            $('#index-nav-list').css({position:'static'}).offset({top:$title0})
        }
        //滚动导致#index-nav-list>a的变化
        $('#index-content>.brand-title').each(function(i){
            if($(window).scrollTop()>window['$title'+i]-200){
                $('#index-nav-list>a').eq(i).css({background:'#f10180'}).children().css({color:'#fff'})
                $('#index-nav-list>a').eq(i).siblings().css({background:'#ffff'}).children().css({color:'#666666'})
            }
        })

    })
    //index-nav-list  的点击     hover效果有css完成
    $('#index-nav-list>a').each(function(i){
        $('#index-nav-list>a').eq(i).on('click',function(){
            $('#index-nav-list>a').eq(i).css({background:'#f10180'}).children().css({color:'#fff'})
            $('#index-nav-list>a').eq(i).siblings().css({background:'#ffff'}).children().css({color:'#666666'})
            //通过点击的i值，确定滚动距离
            var num=$('#index-content>.brand-title').eq(i).offset().top
            $(window).scrollTop(num-70)
        })
    })
    //--------------------------index-nav-list结束-----------------------------


    //--------------------------index-nav-right相关-----------------------------
    //index-nav-right的高度适应当前窗口
    $('#index-nav-right').css({height:$(document).height()})
    //index-nav-right  的在当前index-nav-right盒子的移入移出
    $('#index-nav-right ul>li').each(function(){
        $(this).on('mouseenter',function(){
            $(this).css({background: '#df147f'})
            $(this).siblings().css({background: ''})
            $(this).siblings().children('.move').css({display:'none',opacity:0})
            $(this).children('.move').css({display:'block'}).animate({opacity:1},500)

            // $(this).children('.zhanghao').css({display:'block'}).animate({opacity:1},500)
            // $(this).siblings().children('.zhanghao').css({display:'none',opacity:0})
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
        $(this).children('.cart').css({display:'block',top:-$(this).offset().top,height:$(document).height()}).animate({opacity:1},500)
        $(this).siblings().children('.cart').css({display:'none',opacity:0})
        console.log(1)
    })
    //点击关闭购物袋
    $('#index-nav-right .sidebar-act ul li:eq(1) strong').on('click',function(){
        $(this).parent().parent().css({display:'none',opacity:0})
        event.stopPropagation()
    })

    //-------------------------------index-nav-right结束--------------------------------


    //-------------------------------index-content相关----------------------------------
    //精选品牌的倒计时
    function time(){
        var now=new Date()  //当前时间
        var date=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,10)  //明天早上十点
        var cutTime=Math.floor((date-now)/1000)
        var h=Math.floor(cutTime/60/60)
        var m=Math.floor(cutTime/60-h*60)
        var s=Math.floor(cutTime%60)   
        if(h<10){
            h='0'+h
        }
        if(m<10){
            m='0'+m
        }
        if(s<10){
            s='0'+s
        }
        $('#index-content .time>.time-H').html(h)   //时
        $('#index-content .time>.time-M').html(m)   //分
        $('#index-content .time>.time-S').html(s)   //秒
    }
    time()
    setInterval(time,1000)

    //移入brand-item时出现品牌收藏
    $(this).addClass('trueCollect')
    
    $('#index-content .brand-item').on('mouseenter',function(){
        $(this).find('img').css({opacity:0.6}).animate({opacity:1},2000)  //透明度动画
        //如果该brand-item没有trueCollect,即没有被收藏
        var $that=$(this)
        if(!$(this).hasClass('trueCollect')){
            var $div=$('<div class="collect"><span class="iconfont icon-love"></span><span>收藏品牌</span></div>')
            $(this).css({position:'relative'}).append($div)
            $div.css({position:'absolute',width:116,height:25,borderRadius: 12,background:'#fff',left:580,top:300,textAlign:'center',paddingTop:3,fontSize:14,cursor: 'pointer',color:'#000'})
            $div.children().eq(0).css({color:'#f10180',fontSize:14,marginRight:5,fontWeight:'bolder'})
            
            $div.on('mouseenter',function(){    //移出品牌收藏
                //如果没有收藏标记
                if(!$that.hasClass('trueCollect')){
                    $div.css({background:'#f10180',color:'#fff'})
                    $div.children().eq(0).css({color:'#fff'})
                }else{  //如果有收藏标记
                    $div.css({background:'#b3b3b3',color:'#fff',marginLeft:75})
                    $div.animate({width:116,marginLeft:0},function(){
                        $div.children().eq(1).css({display:'inline-block'})
                    })
                    $div.children().eq(0).css({marginRight:5})
                }

            })
            
            //品牌收藏的点击
            $div.on('click',function(){
                //如果该brand-item没有trueCollect,即没有被收藏
                if(!$that.hasClass('trueCollect')){
                    $that.addClass('trueCollect')  //加上收藏标记
                    var $div1=$('<div class="collect-move"><span class="iconfont icon-love"></span></div>')
                    $('body').append($div1)
                    $div1.css({position:'absolute',left:$div.offset().left+18,top:$div.offset().top+3.6,color:'#f10180',fontWeight:'bolder'})
                    $div1.children().css({fontSize:24})
                    //心的移动动画
                    $div1.animate({left:$('#index-nav-right').find('.icon-love').offset().left+9,top:$('#index-nav-right').find('.icon-love').offset().top+7},1000,function(){
                        $div1.remove()
                        $div2=$('<div class="dot"></div>')
                        $('#index-nav-right').find('.icon-love').append($div2)
                        $div2.css({position:'absolute',height:8,width:8,borderRadius: 4,background:'red',left:32,top:1})
                    })
                    $div.css({background:'#b3b3b3',color:'#fff'})
                    $div.children().eq(0).css({color:'#fff'})
                    $div.children().eq(1).html('取消收藏')
                    //生成品牌收藏的点击事件，点击后清除小圆点
                    $('#index-nav-right>.sidebar-act').find('.icon-love').on('click',function(){
                        $(this).children('.dot').remove()
                    })
                }else{  //有trueCollect,即需要取消收藏
                    $that.removeClass('trueCollect')  //清除收藏标记
                    $div.css({background:'#f10180',color:'#fff'})
                    $div.children().eq(0).css({color:'#fff'})
                    $div.children().eq(1).html('收藏品牌')
                }
            })

            $div.on('mouseleave',function(){    //移出品牌收藏
                //如果没有收藏标记
                if(!$that.hasClass('trueCollect')){
                    $div.css({background:'#fff',color:'#000'})
                    $div.children().eq(0).css({color:'#f10180'})
                }else{  //如果有收藏标记
                    $div.children().eq(1).css({display:'none'})
                    $div.children().css({marginRight:0})
                    $div.css({background:'#f10180',color:'#000'})
                    $div.animate({width:40,marginLeft:75})
                }

            })
        }else{ //如果有被收藏
            var $div=$('<div class="collect"><span class="iconfont icon-love"></span><span>取消收藏</span></div>')
            $(this).css({position:'relative'}).append($div)
            $div.children().eq(1).css({display:'none'})
            $div.css({position:'absolute',width:40,height:25,borderRadius: 12,background:'#f10180',left:580+75,top:300,textAlign:'center',paddingTop:3,fontSize:14,cursor: 'pointer',color:'#000'})
            $div.children().eq(0).css({color:'#fff',fontSize:14,fontWeight:'bolder'})
            
            $div.on('mouseenter',function(){    //移出品牌收藏
                //如果没有收藏标记
                if(!$that.hasClass('trueCollect')){
                    $div.css({background:'#f10180',color:'#fff'})
                    $div.children().eq(0).css({color:'#fff'})
                }else{  //如果有收藏标记
                    $div.css({background:'#b3b3b3',color:'#fff',marginLeft:0})
                    $div.animate({width:116,marginLeft:-75},function(){
                        $div.children().eq(1).css({display:'inline-block'})
                    })
                    $div.children().eq(0).css({marginRight:5})
                }

            })
            
            //品牌收藏的点击
            $div.on('click',function(){
                //如果该brand-item没有trueCollect,即没有被收藏
                if(!$that.hasClass('trueCollect')){
                    $that.addClass('trueCollect')  //加上收藏标记
                    var $div1=$('<div class="collect-move"><span class="iconfont icon-love"></span></div>')
                    $('body').append($div1)
                    $div1.css({position:'absolute',left:$div.offset().left+18,top:$div.offset().top+3.6,color:'#f10180',fontWeight:'bolder'})
                    $div1.children().css({fontSize:24})
                    //心的移动动画
                    $div1.animate({left:$('#index-nav-right').find('.icon-love').offset().left+9,top:$('#index-nav-right').find('.icon-love').offset().top+7},1000,function(){
                        $div1.remove()
                        $div2=$('<div class="dot"></div>')
                        $('#index-nav-right').find('.icon-love').append($div2)
                        $div2.css({position:'absolute',height:8,width:8,borderRadius: 4,background:'red',left:32,top:1})
                    })
                    $div.css({background:'#b3b3b3',color:'#fff'})
                    $div.children().eq(0).css({color:'#fff'})
                    $div.children().eq(1).html('取消收藏')
                    //生成品牌收藏的点击事件，点击后清除小圆点
                    $('#index-nav-right>.sidebar-act').find('.icon-love').on('click',function(){
                        $(this).children('.dot').remove()
                    })
                }else{  //有trueCollect,即需要取消收藏
                    $that.removeClass('trueCollect')  //清除收藏标记
                    $div.css({background:'#f10180',color:'#fff'})
                    $div.children().eq(0).css({color:'#fff'})
                    $div.children().eq(1).html('收藏品牌')
                }
            })

            $div.on('mouseleave',function(){    //移出品牌收藏
                //如果没有收藏标记
                if(!$that.hasClass('trueCollect')){
                    $div.css({background:'#fff',color:'#000'})
                    $div.children().eq(0).css({color:'#f10180'})
                }else{  //如果有收藏标记
                    $div.children().eq(1).css({display:'none'})
                    $div.children().css({marginRight:0})
                    $div.css({background:'#f10180',color:'#000'})
                    $div.animate({width:40,marginLeft:0})
                }

            })
        }
    })
    //移出brand-item
    $('#index-content .brand-item').on('mouseleave',function(){
        $(this).find('.collect').remove()
    })
    //-------------------------------index-content结束----------------------------------
    
})