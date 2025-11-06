<?php

$search = $_REQUEST["search"] ?? "";
$content_items = $database
    ->query("SELECT * FROM content_items WHERE title LIKE :search OR source LIKE :search", "Content_item", [
        ":search" => "%$search%",
    ])
    ->fetchAll();

$view = "shelf";

require "views/template/app/app.php";
?>
