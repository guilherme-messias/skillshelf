<?php
$db = new DB();

$search = $_REQUEST["search"] ?? "";
$content_items = $db->content_items($search);

$view = "shelf";

require "views/template/app/app.php";
?>
