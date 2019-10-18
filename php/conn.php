<?php
header('content-type:text/html;charset=utf-8');
//1 连接数据库
$conn = mysqli_connect('localhost','root','root','userdb','3306');
//2 判断数据库是连接错误
if(mysqli_connect_error()){
	die('数据库连接出错!');
}
?>
