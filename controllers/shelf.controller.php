<?php
$db = new DB();
$content_items = $db->content_items();

$view = "shelf";

require "views/template/app/app.php";
?>
