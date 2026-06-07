<?php

requireAuth();

$search = $_REQUEST["search"] ?? "";
$user_id = $_SESSION["user"]->id;

$content_items = $database
    ->query("SELECT * FROM content_items WHERE (title LIKE :search OR source LIKE :search) AND user_id = :user_id", "Content_item", [
        ":search" => "%$search%",
        ":user_id" => $user_id,
    ])
    ->fetchAll();

$view = "shelf";

require "views/template/app/app.php";
?>
