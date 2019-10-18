
            window.onload=function(){
            	var btn1=document.getElementById("btn1");
	            var btn2=document.getElementById("btn2");
	 
	            btn2.style.background='#ee3094' ;
	            btn1.onclick=function(){
	            	this.style.background='#ee3094';
	           		 btn2.style.background='#fff'; 	
	            	this.style.color='#fff';
            }
	            btn2.onclick=function(){
	            	this.style.background='#ee3094' ;
	           		 btn1.style.background='#fff';       
	            	this.style.color='#fff';
            }
	            
            }
	