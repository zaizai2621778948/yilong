<?php
header('Content-Type:text/plain');
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$conn=mysqli_connect('127.0.0.1','root','','login',3306);
mysqli_query($conn,'SET NAMES UTF8');
$sql="SELECT uid FROM users WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
if($result===false){
echo 'SQL语句错误'.$sql;
}else{
$row=mysqli_fetch_assoc($result);
if($row===null){
echo '您的用户名或密码错误';
}else{
echo '登录成功';
}
}
?>