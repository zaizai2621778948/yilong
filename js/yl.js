/*页面加载完成后*/
$(function(){
	showItems();
	hideItems();
	movePic();
});

/*弹出框*/
function showItems(){

	$('li.english').mouseover(function(){
		$('#english_items').css('display','block');
		$(this).addClass('hover');
	})

	/*手机二维码弹出框*/
	$('a.show').mouseover(function(){
		$('#count_items').css('display','block');
	})
	
	/*号码弹出框*/
	$('b.show').mouseover(function(){
		$('#tel_items').css('display','block');
	})
	/*登录弹出框*/

	$('#login').mouseover(function(){
		$('#login_items').css('display','block');

	})

}

function hideItems(){

	$('li.english').mouseout(function(){
		$('#english_items').css('display','none');
		$(this).removeClass('hover');
	})

	/*手机二维码弹出框*/
	$('a.show').mouseout(function(){
		$('#count_items').css('display','none');
	})
	
	/**/
	/*号码弹出框*/
	$('b.show').mouseout(function(){
		$('#tel_items').css('display','none');
	})
	/*登录弹出框*/

	$('#login').mouseout(function(){
		$('#login_items').css('display','none');
	})
}
	/*图片移动*/
	function movePic(){
	$('#hotel_pic').delegate('li','mouseover',function(){
		$(this).children('b').css('display','none');
		$(this).children('h4').css('display','none');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
		})

	/*mouseout*/
	$('#hotel_pic').delegate('li','mouseout',function(){
		$(this).children('b').css('display','block');
		$(this).children('h4').css('display','block');
		$(this).removeClass('active');
		$('li.hotel_pic1').addClass('active');
		})

	}

	/*图片旋转*/
	var  timer=null;
	var d=0;
	$('#section_b_right>ul').delegate('li','mouseover',function(){
			me=$(this);
			timer=setInterval(function(){
				d+=1;
			$(me).find('a').css('transform','rotatey('+d+'deg)');
			},10)
		
	})

	$('#section_b_right>ul').delegate('li','mouseout',function(){
		clearInterval(timer);
		$(this).find('a').css('transform','rotatey(0deg)');
		
		
		
	})
	
	/*旅游指南*/
	$('#tranval_guide>ul').delegate('li','mouseover',function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$(this).siblings().find('div').removeClass('active');
		$(this).find('div').addClass('active');
	
	})
	$('#tranval_guide>ul').delegate('li','mouseout',function(){
		$(this).removeClass('on');
		$(this).find('div').removeClass('active');
		$('#guide_pic1').parent().addClass('on');
		$('#guide_pic1').addClass('active');
	})
	/*图片轮播*/
	var curIndex=0;
	var count=$('#banner>ul>li').length;
	var task=setInterval(function(){
		if(curIndex<count-1){
			curIndex++;
		}else{
		curIndex=0;
		}
		run(curIndex);
	},3000)
	/*左箭头鼠标移入*/
	$('#prev').hover(
	function(){clearInterval(task);},
	function(){change(curIndex);});
	/*右箭头鼠标移入*/
	$('#next').hover(
	function(){clearInterval(task);},
	function(){change(curIndex);});
	/*点击按钮操作*/
	/*左箭头点击*/
	$('#prev').click(function(){
	curIndex=(curIndex>0)?(--curIndex):(count-1);
	 run(curIndex);
	})
	/*右箭头点击*/
	$('#next').click(function(){
	curIndex=(curIndex<count-1)?(++curIndex):0;
	 run(curIndex);
	})


	function run(n){
		var runLeft=n*1349;
		$('#banner>ul').animate({left:'-'+runLeft+'px'},500);
		$('#banner_scroll').find('li').removeClass('b_active').eq(n).addClass('b_active');
	}
	//清除定时器时候的重置定时器--封装
	function change(num){
	 task=setInterval(function(){
		if(curIndex<count-1){
			curIndex++;
		}else{
		curIndex=0;
		}
		run(curIndex);
	},3000)
	}
	/*箭头出现*/
	$('#banner').hover(function(){$('#prev,#next').show(300);},
	function(){$('#prev,#next').hide(300);});

	
	//对右下角按钮index进行事件绑定处理等
  $("#banner_scroll").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(task);
      run(item);
      curIndex = item;
    },function(){ 
      change(curIndex);
    });
  });
	

		
	
		
	
	
	
		
	
	
			
			
			
				
		