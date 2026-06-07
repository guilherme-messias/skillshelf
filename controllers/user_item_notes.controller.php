<?php

requireAuth();
require "Validations.php";

if (!($_SERVER["REQUEST_METHOD"] === "POST")) {
    header("Location: /content_item_detail.php?id=" . $_POST["content_item_id"]);
    exit();
}

$content_item_id = $_POST["content_item_id"];
$note_title = $_POST["note_title"];
$note_body = $_POST["note_body"];

$content_item = $database
    ->query("SELECT * FROM content_items WHERE id = :id", "Content_item", [
        ":id" => $content_item_id,
    ])
    ->fetch();

if (!$content_item || $content_item->user_id !== $_SESSION["user"]->id) {
    http_response_code(403);
    echo "Acesso negado.";
    exit();
}

$validation = new Validations();
$validation->validate(
    [
        "note_title" => ["required"],
        "note_body" => ["required"],
    ],
    $_POST,
);

if ($validation->fails()) {
    header("Location: /content_item_detail.php?id=" . $content_item_id);
    exit();
}

$database->query(
    "INSERT INTO user_item_notes (user_id, user_item_id, title, body) VALUES (:user_id, :content_item_id, :note_title, :note_body)",
    null,
    [
        "user_id" => $_SESSION["user"]->id,
        "content_item_id" => $content_item_id,
        "note_title" => $note_title,
        "note_body" => $note_body,
    ],
);

(new Flash())->push("message", "Nota criada com sucesso!");

header("Location: /content_item_detail.php?id=" . $content_item_id);
exit();
