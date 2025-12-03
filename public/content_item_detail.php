<?php
require dirname(__DIR__) . "/models/Content_item.php";
require dirname(__DIR__) . "/models/User.php";
require dirname(__DIR__) . "/models/User_item_note.php";

$config = require dirname(__DIR__) . "/config.php";
require dirname(__DIR__) . "/Database.php";
require dirname(__DIR__) . "/Flash.php";
require dirname(__DIR__) . "/functions.php";

$controller = "content_item_detail";

require dirname(__DIR__) . "/controllers/" . $controller . ".controller.php";
