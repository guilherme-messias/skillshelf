<?php

require "Validations.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_id = $_POST["user_id"];
    $source = $_POST["source"];
    $content_type = $_POST["content_type"];
    $url = $_POST["url"];
    $title = $_POST["title"];

    $validation = new Validations();
    $validation->validate(
        [
            "source" => ["required"],
            "content_type" => ["required"],
            "url" => ["required"],
            "title" => ["required"],
        ],
        $_POST,
    );

    if ($validation->fails()) {
        header("Location: /content_item_create.php");
        exit();
    }

    $database->query(
        $query =
            "INSERT INTO content_items (user_id, source, content_type, url, title) VALUES (:user_id, :source, :content_type, :url, :title)",
        $class = null,
        $params = [
            "user_id" => $user_id,
            "source" => $source,
            "content_type" => $content_type,
            "url" => $url,
            "title" => $title,
        ],
    );

    (new Flash())->push("message", "Conteúdo criado com sucesso!");

    header("Location: /shelf");
    exit();
}

$view = "content_item_create";

require "views/template/app/app.php";
