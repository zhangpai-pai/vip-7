
            window.onload=function(){
            	var btn1=document.getElementById("btn1");
	            var btn2=document.getElementById("btn2");
	 			//先获取相对应的元素
	            btn1.style.background='#ee3094';
	            //刚开始的初始颜色是紫色
	            btn1.onclick=function(){
	            	this.style.background='#ee3094';
	           		 btn2.style.background='#fff'; 	
//	            	this.style.color='#fff';
            }
	            //点击必抢的按钮还显示紫色,点击开抢的按钮的话会必抢这个按钮会显示白色
	            btn2.onclick=function(){
	            	this.style.background='#ee3094' ;
	           		 btn1.style.background='#fff';       
//	            	this.style.color='#fff';
				//点击开抢的按钮还显示紫色,点击必抢的按钮的话会这个按钮会显示白色
            }
	            
            }
		