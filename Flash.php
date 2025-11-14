<?php

class Flash {
    public static function push($key, $message) {
        $_SESSION[$key] = $message;
    }
}
