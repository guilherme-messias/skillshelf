<?php

require "Validations.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $validation = new Validations();
    $validation->validate(
        [
            "name" => ["required"],
            "email" => ["required", "email"],
            "password" => ["required", "min:6", "confirmed"],
        ],
        $_POST,
    );

    if ($validation->fails()) {
        header("Location: /login");
        exit();
    }

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
