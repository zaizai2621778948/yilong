/*登录弹出模态框*/
$('#login_items .btn_load').click(function(){
$('#model').css('display','block');
})
/*登录*/
$('#btn').click(function(){
var uname=$('#login_form [type="text"]').val();
var upwd=$('#login_form [type="password"]').val();
var data={uname:uname,upwd:upwd};
if(!uname||!upwd){
return;
}
$.get('login.php',data,function(txt){
	if(txt==="登录成功"){
		$('#model').css('display','none');
		alert("欢迎主人回来  "+uname);
	}else if(txt==="您的用户名或密码错误"){
	  alert("用户名或密码错误");
	}
})
})
/*退出登录*/
$('#login_header>b').click(function(){
$('#model').css('display','none');
})