$(function () {
    var public = {
        //设置本地存储
        setStorage: function (json, na) {
            localStorage.setItem(na, JSON.stringify(json))
        },
        //读取本地存储
        getStorage: function (na) {
            return JSON.parse(localStorage.getItem(na)) || []
        },
        renderCart: function () {
            var products = public.getStorage('list')
            if (products.length < 1) {
                $('#index-nav-right .render').html('')
            } else {
                var str = ''
                for (var i = 0; i < products.length; i++) {
                    str += `<div class="item">
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
        // time: function () {
        //     var now=new Date()  //当前时间
        //     var mmm=Math.floor(public.getStorage('min'))
        //     var date=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes()+mmm)
        //     cutTime=Math.floor((date-now)/1000)
        //     var m=Math.floor(cutTime/60)
        //     var s=Math.floor(cutTime%60)
        //     if(m<10){
        //         m='0'+m
        //     }
        //     if(s<10){
        //         s='0'+s
        //     }
        //     $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').find('p').html('商品将保留'+m+'分'+s+'秒') //右边栏倒计时
        //     if(s==0){
        //         mmm--
        //         public.setStorage(mmm,'min')
        //     }
        //     $('#main .box1 li:eq(0)').html('特卖商品 '+m+' ：'+s)  //购物车结算
        //     $('#nav .nav2 .con4').html('立即结算 '+m+'：'+s)       //购物车结算
        // }
    }
    if(public.getStorage('denglu')){
        $('#header .box .con1 li:eq(0)').html('你好，'+public.getStorage('denglu'))
    }
    function render() {
        var products = public.getStorage('list')
        if (products.length < 1) {
            $('#main .items').html('')
        } else {
            var str = ''
            for (var i = 0; i < products.length; i++) {
                str += `<div class="box4">
                <div class="box4-con1">
                    <img src="./img/spxiangqing/nanshi_03.jpg" alt="">
                </div>
                <div class="box4-con2">
                    <p class="p1">自营</p>
                    <p>${products[i].name}</p>
                    <p>${products[i].size}</p>
                    <p class="p2">${products[i].id}</p>
                </div>
                <div class="box4-con3">
                    <p class="p1">唯品价2980元，最后疯抢立减2486元</p>
                    <p class="p2">￥494元</p>
                    <p class="p3" style="text-decoration:line-through;">￥2980元</p>
                </div>
                <div class="box4-con4" style=" cursor: pointer;">
                    <div class="cut">-</div>
                    <div class="num">${products[i].num}</div>
                    <div class="add">+</div>
                </div>
                <div class="box4-con5">
                    ￥${products[i].price}元
                </div>
                <div class="box4-con6" style=" cursor: pointer;">
                    删除
                </div>
            </div>`
            }
            $('#main .items').html(str)
        }
    }

    var products = public.getStorage('list')
    var place = public.getStorage('place')
    if (!place.qu) {
        place.qu = '宝安区'
        place.jie = '西乡街道'
    }
    $('#main .box2 span:eq(0)').html('配送至' + place.qu + ' ' + place.jie)
    render()
    var n=0
    var Sn=0
    for(var i=0;i<products.length;i++){
        n+=Math.floor(products[i].num)
        Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
    }
    $('#nav .con2 .p1').html('共'+n+'件商品 ￥'+Sn+'元')
    $('#nav .con2 .p2').html('总金额（未含运费）￥'+Sn+'元')
    //public.time()
    // if(products.length>0){
    //     var mmm=public.getStorage('min')
    //     if(mmm.length<1){
    //         public.setStorage('20','min') 
    //     }
    //     window.test=setInterval(public.time,1000)
    // }

    //点击-
    $('#main .items .box4 .box4-con4 .cut').on('click', function () {
        var id = $(this).parent().parent().find('.box4-con2 .p2').html()
        console.log($(this).parent().parent().find('.box4-con2 .p2').html())
        var products = public.getStorage('list')
        for (var i = 0; i < products.length; i++) {
            if (id == products[i].id) {
                products[i].num--
                if (products[i].num <= 0) {
                    products.splice(i, 1)
                    public.setStorage(products, 'list')
                    public.setStorage(products,'list1')
                    $(this).parent().parent().remove()
                }else{
                    public.setStorage(products, 'list')
                    public.setStorage(products,'list1')
                    $(this).parent().find('.num').html(products[i].num)
                }

            }
        }
        var n=0
        var Sn=0
        for(var i=0;i<products.length;i++){
            n+=Math.floor(products[i].num)
            Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
        }
        $('#nav .con2 .p1').html('共'+n+'件商品 ￥'+Sn+'元')
        $('#nav .con2 .p2').html('总金额（未含运费）￥'+Sn+'元')
        if(products.length<1){
            location.reload(true)
        }
    })
    //点击+
    $('#main .items .box4 .box4-con4 .add').on('click', function () {
        var id = $(this).parent().parent().find('.box4-con2 .p2').html()
        var products = public.getStorage('list')
        for (var i = 0; i < products.length; i++) {
            if (id == products[i].id) {
                products[i].num++
                public.setStorage(products, 'list')
                public.setStorage(products,'list1')
                $(this).parent().find('.num').html(products[i].num)
            }
        }
        var n=0
        var Sn=0
        for(var i=0;i<products.length;i++){
            n+=Math.floor(products[i].num)
            Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
        }
        $('#nav .con2 .p1').html('共'+n+'件商品 ￥'+Sn+'元')
        $('#nav .con2 .p2').html('总金额（未含运费）￥'+Sn+'元')
        
    })
    //点击删除
    $('#main .items .box4 .box4-con6').on('click', function () {
        var id = $(this).parent().find('.box4-con2 .p2').html()
        var products = public.getStorage('list')
        for (var i = 0; i < products.length; i++) {
            if (id == products[i].id) {
                products.splice(i, 1)
                public.setStorage(products, 'list')
                public.setStorage(products,'list1')
                $(this).parent().remove()
            }
        }
        for(var i=0;i<products.length;i++){
            n+=Math.floor(products[i].num)
            Sn+=Math.floor(products[i].num)*Math.floor(products[i].price)
        }
        var n=0
        var Sn=0
        $('#nav .con2 .p1').html('共'+n+'件商品 ￥'+Sn+'元')
        $('#nav .con2 .p2').html('总金额（未含运费）￥'+Sn+'元')
        if(products.length<1){
            location.reload(true)
        }
    })
    $('.nav2>.con4').on('click',function(){
              
        $(location).attr('href', './index.html')
    })


        //index-header logo跳转首页
        $('#header img').on('click',function(){
            public.setStorage(1,'ff')
            $(location).attr('href', './index.html')
        })
})