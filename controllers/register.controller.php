<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $validationErrors = [];

    if (empty($_POST["name"])) {
        $validationErrors[] = "O nome é obrigatório.";
    }
    if (empty($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $validationErrors[] = "Um email válido é obrigatório.";
    }
    if (empty($_POST["password"]) || strlen($_POST["password"]) < 6) {
        $validationErrors[] = "A senha deve ter pelo menos 6 caracteres.";
    }
    if ($_POST["password"] !== $_POST["password_confirm"]) {
        $validationErrors[] = "As senhas não coincidem.";
    }

    if (!empty($validationErrors)) {
        $_SESSION["validationErrors"] = $validationErrors;
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
