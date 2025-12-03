<?php
require dirname(__DIR__) . "/models/Content_item.php";
require dirname(__DIR__) . "/models/User.php";

session_start();

$config = require dirname(__DIR__) . "/config.php";
require dirname(__DIR__) . "/functions.php";
require dirname(__DIR__) . "/Flash.php";
require dirname(__DIR__) . "/Database.php";
require dirname(__DIR__) . "/routes.php";
