<?php

$view = "login";

$message = $_GET["message"] ?? null;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $email = $_POST["email"] ?? "";
  $password = $_POST["password"] ?? "";

  $user = $database->query(
    "SELECT * FROM users WHERE email = :email AND password = :password",
    true,
    [
      "email" => $email,
      "password" => $password,
    ],
  )-> fetch();

  if ($user) {
    $_SESSION["user"] = $user;
    header("Location: /dashboard");
    exit();
  } else {
    $_SESSION["loginError"] = "Email ou senha inválidos.";
    header("Location: /login");
    exit();
  }
}

require "views/template/app/app.php";
