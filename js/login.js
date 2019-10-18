$(function(){
    //点击登录
    console.log($('.content .mainbb input').eq(0).val())
	 $('#btns').click(function(){
		var user=$('#uname').val();
		var pass=$('#pwd').val();
		var userl = user.replace(/\s+/g,'');
		var reg = /^(1|\+861)[3-9][0-9]{9}$/g; //判断手机格式
        var pa = pass.replace(/\s+/g,''); //去掉空格
        var pas = /^[\da-zA-z]{6,12}$/; //判断密码格式 6-12位
        var info = true;
       //判断手机号不能为空
       if($.trim(user)==''){  
            $('.error-z').html('请输入有效的邮箱或手机号码')
            $('#uname').css('border','1px solid red')
            $('#uname').keyup(function(){
                $('#uname').css('border','1px solid #cccccc')
                $('.error-z').html('');
            })
            info = false;
        }else if(!reg.test(userl)){
            $('.error-z').html('请输入有效的邮箱或手机号码')
            $('#uname').css('border','1px solid red')
            $('.#uname').keyup(function(){
                $('#uname').css('border','1px solid #cccccc')
                $('.error-z').html('');
            })
            info = false;
        }
        //判断密码不能为空
        if($.trim(pass)==''){
            $('.error-m').html('请输入你的密码');
            $('#pwd').css('border','1px solid red');
            $('#pwd').keyup(function(){
                $('#pwd').css('border','1px solid #cccccc')
                $('.error-m').html('');
            })
            info = false;
        }else if(!pas.test(pa)){
            $('.error-m').html('请输入你的密码');
            $('#pwd').css('border','1px solid red');
            $('#pwd').keyup(function(){
                $('#pwd').css('border','1px solid #cccccc')
                $('.error-m').html('');
            })
            info = false;
        }
         if(info){
        //     $.ajax({
        //         type: 'get',
        //         url: './php/login.php',
        //         data:'act=login&user='+user+'&pass='+pass,
        //         dataType: 'json',
        //         cache: false,//不使用缓存
        //         success: function (str) {
        //             if(str.err==0){
        //                 alert('登录成功')
        //                 window.location.href='./index.html';//登录成功跳转首页
        //             }
        //         }
        //     });
             var newDom=document.createElement("script");
             
            newDom.setAttribute("type","text/javascript");
            var str="http://10.36.144.137/VIP1/php/login.php?act=login&user=" + user + '&pass=' + pass+"&callback=fn"
            newDom.setAttribute("src",str);
            $("body").append($(newDom));
            
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
                time:function (){
                    var now=new Date()  //当前时间
                    cutTime=Math.floor((date-now)/1000)
                    var m=Math.floor(cutTime/60)
                    var s=Math.floor(cutTime%60)
                    var ms=m+1
                    public.setStorage(ms,'min')
                    //public.setStorage(s,'s')
                    if(m<10){
                        m='0'+m
                    }
                    if(s<10){
                        s='0'+s
                    }
                    $('#index-nav-right>.sidebar-act>ul>li:eq(1)').children('.cart').find('p').html('商品将保留'+m+'分'+s+'秒')
                }
            }
            public.setStorage(1,'ff')
            public.setStorage(user,'denglu')
       }
	})
	
})