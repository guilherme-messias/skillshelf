<?php
$id = $_GET["id"] ?? 1;

$content_item = (new DB())->content_item($id);

$view = "content_item_detail";

require "views/template/app/app.php";
