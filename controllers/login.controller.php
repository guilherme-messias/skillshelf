<?php

session_start();

$view = "login";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"] ?? "";
    $rawPassword = $_POST["password"] ?? "";

    $user = $database
        ->query("SELECT * FROM users WHERE email = :email", "User", [
            "email" => $email,
        ])
        ->fetch();

    if ($user && password_verify($rawPassword, $user->password)) {
        $_SESSION["user"] = $user;
        // (new Flash())->push("user", $user);
        header("Location: /index");
        exit();
    } else {
        (new Flash())->push("loginError", "Email ou senha inválidos.");
        header("Location: /login");
        exit();
    }
}

require "views/template/app/app.php";

