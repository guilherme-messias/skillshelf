<?php
$id = $_GET["id"] ?? 1;

$content_item = (new DB())
    ->query("SELECT * FROM content_items WHERE id = :id", "Content_item", [
        ":id" => $id,
    ])
    ->fetch();

$view = "content_item_detail";

require "views/template/app/app.php";
