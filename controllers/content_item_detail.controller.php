<?php

require "functions.php";

$id = $_GET["id"];

$content_item = $database
    ->query("SELECT * FROM content_items WHERE id = :id", "Content_item", [
        ":id" => $id,
    ])
    ->fetch();

$view = "content_item_detail";

require "views/template/app/app.php";
