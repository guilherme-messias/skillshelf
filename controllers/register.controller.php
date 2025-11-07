<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $database->query(
        "INSERT INTO users (name, email, password, avatar_url) VALUES (:name, :email, :password, :avatar)",
        null,
        [
            "name" => $_POST["name"],
            "email" => $_POST["email"],
            "password" => $_POST["password"],
            "avatar" => $_POST["avatar"],
        ],
    );

    header("Location: /login?message=registrado com sucesso!");
    exit();
}
