<?php
    header("Content-Type:application/json;charset=utf-8");

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