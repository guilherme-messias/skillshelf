<?php
$db = new DB();
$content_items = $db->content_items();

$view = "index";

require "views/template/app/app.php";
?>
