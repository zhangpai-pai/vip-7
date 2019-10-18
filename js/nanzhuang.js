
		$(function () {
			var flag = true;

			// 目录
			$('.sps').on('mouseenter ', function () {
				if (flag == true) {
					$(this).stop(true, true).animate({ 'height': 490 }, 500);
					str = "<a href='#'><img src='./img/img-index-header/1536548648745.png' alt=''>商品分类 </a><div class='ul'><ul><li>首页</li> <li>男装/女装</li> <li>男鞋/女鞋</li><li>护肤彩妆</li><li>家电数码</li><li>居家用品</li><li>手表装饰</li><li>唯品生活</li><li>唯品国际</li></ul>"
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

			$(".zhanshi>.public>.z-1>ul>li:has('img')").mouseenter(function () {
				$(this).fadeTo(500, 0.5);
				$(this).fadeTo(500, 1);
			});

			$(".content>.public>.tuijian>.clother>.right>img").mouseenter(function () {
				$(this).fadeTo(500, 0.5);
				$(this).fadeTo(500, 1);
			});

           $('.zhanshi>.public>.z-1>ul>li').on('click',function(){
               location.href = 'nanzhuang2.html'
           })



			//	渐变效果	
			$(".content>.public>.tuijian>.content-left>ul>li").on("mouseenter", function () {
				// console.log($(this).attr("index"))
				var index = $(this).attr("index");
				var a = $(".a");
				//    console.log(index)
				if (index == 0) {
					$(".clother").animate({
						"top": 0
					}, 200)
					//    	$(".a").animate({
					//    		"top":60
					//    	},300)
					//    	
				}

				if (index == 1) {
					$(".clother").animate({
						"top": -250
					}, 200)


				}
				if (index == 2) {
					$(".clother").animate({
						"top": -490
					}, 200)

				}

				if (index == 3) {
					$(".clother").animate({
						"top": -740
					}, 200)

				}

			})

			//录播鼠标移动    
			var timer = null;
			var box = $(".clother");
			var index = 0;
			var li = $(".content>.public>.tuijian>.content-left>ul>li");
			timer = setInterval(function () {
				if (index == 3) {
					index = 0;
				} else {
					index++;
				}
				box.animate({
					"top": -250 * index
				})
			}, 3000)

			if (li.mouseenter(function () {
				clearInterval(timer);
			})) {

			}
			//自动轮播	

		})
	