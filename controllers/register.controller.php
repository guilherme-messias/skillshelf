<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $database->query(
        "INSERT INTO users (name, email, password, avatar) VALUES (:name, :email, :password, :avatar)",
        null,
        [
            "name" => $_POST["name"],
            "email" => $_POST["email"],
            "password" => $_POST["password"],
            "avatar" => $_POST["avatar"],
        ],
    );
}
