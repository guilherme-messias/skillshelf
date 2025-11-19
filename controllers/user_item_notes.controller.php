<?php

if (!($_SERVER["REQUEST_METHOD"] === "POST")) {
    header("Location: /login");
    exit();
}

$content_item_id = $_POST["content_item_id"];
$note_title = $_POST["note_title"];
$note_body = $_POST["note_body"];
