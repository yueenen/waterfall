<?php
    header("Content-Type:application/json;charset=utf-8");

/**
3.1 读取 json 文件数据(字符串值)
3.2 将 json 字符串转换为 php 对象  //{}转换为PHP对象, []转换为PHP数组
3.3 获取html页面中传递的页码
3.4 获取开始位置
3.5 获取数组中从指定位置开始的指定数量的元素,返回一个数组
3.6 将PHP数组转换成 json 字符串
3.7 将数据输出到html页面中
**/
    $data=file_get_contents("data.json");

    $arr = json_decode($data);

    $page = $_GET["page"];

    $start = ($page - 1)*10;

    $arr = array_slice($arr,$start,10);

    $page++;

    $result = array(
        "items" => $arr,
        "page"=>$page
    );

    $jsonStr = json_encode($result);

    echo $jsonStr;

    sleep (1);
?>