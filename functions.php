<?php

function requireAuth() {
    if (!isset($_SESSION["user"])) {
        header("Location: /login");
        exit();
    }
}
