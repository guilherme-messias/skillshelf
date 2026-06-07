<?php

requireAuth();
require "Validations.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_id = $_SESSION["user"]->id;
    $source = $_POST["source"];
    $content_type = $_POST["content_type"];
    $file = $_FILES["file"];
    $title = $_POST["title"];

    $validation = new Validations();
    $validation->validate(
        [
            "source" => ["required"],
            "content_type" => ["required"],
            "title" => ["required"],
        ],
        $_POST,
    );

    if ($validation->fails()) {
        header("Location: /content_item_create.php");
        exit();
    }

    $allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    $extension = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    $mimeType = mime_content_type($file["tmp_name"]);
    $allowedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
    ];

    if (!in_array($extension, $allowedExtensions, true) || !in_array($mimeType, $allowedMimeTypes, true)) {
        (new Flash())->push("message", "Arquivo de imagem inválido.");
        header("Location: /content_item_create.php");
        exit();
    }

    $uploadFileName = uniqid() . "." . $extension;
    $upload_file = "uploads/" . $uploadFileName;

    if (!move_uploaded_file($file["tmp_name"], $upload_file)) {
        (new Flash())->push("message", "Não foi possível enviar o arquivo.");
        header("Location: /content_item_create.php");
        exit();
    }

    $database->query(
        "INSERT INTO content_items (user_id, source, content_type, url, title) VALUES (:user_id, :source, :content_type, :url, :title)",
        null,
        [
            "user_id" => $user_id,
            "source" => $source,
            "content_type" => $content_type,
            "url" => $upload_file,
            "title" => $title,
        ],
    );

    (new Flash())->push("message", "Conteúdo criado com sucesso!");

    header("Location: /shelf");
    exit();
}

$view = "content_item_create";

require "views/template/app/app.php";
