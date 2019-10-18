<?php
 
if(empty($_POST)){
    //接收get请求参数，并将数据格式化为json字符串返回给ajax
    echo json_encode($_GET);
}else{
    //接收post请求参数，并将数据格式化为json字符串返回给ajax
    echo json_encode($_POST);
}
 
 
?>