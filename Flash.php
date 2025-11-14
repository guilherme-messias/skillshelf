<?php

class Flash {
    public static function push($key, $message) {
        $_SESSION[$key] = $message;
    }

    public static function get($key) {
        if (!$_SESSION[$key]) {
            return false;
        }

        $value = $_SESSION[$key];
        unset($_SESSION[$key]);
        return $value;
    }
}
