<?php

$db = new DB();
$content_items = $db->content_items();

$id = $_GET["id"] ?? 1;

$content_item = array_pop(array_filter($content_items, fn($c) => $c["id"] == $id));

$view = "content_item_detail";

require "views/template/app/app.php";

?>
