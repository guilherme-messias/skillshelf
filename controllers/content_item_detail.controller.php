<?php

requireAuth();

$id = $_GET["id"];

$content_item = $database
    ->query("SELECT * FROM content_items WHERE id = :id", "Content_item", [
        ":id" => $id,
    ])
    ->fetch();

if (!$content_item || $content_item->user_id !== $_SESSION["user"]->id) {
    http_response_code(403);
    echo "Acesso negado.";
    exit();
}

$notes = $database
    ->query("SELECT * FROM user_item_notes WHERE user_item_id = :content_item_id", "User_item_note", [
        ":content_item_id" => $content_item->id,
    ])
    ->fetchAll();

$view = "content_item_detail";

require "views/template/app/app.php";
