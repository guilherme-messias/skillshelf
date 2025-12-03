<?php
require dirname(__DIR__) . "/models/Content_item.php";
require dirname(__DIR__) . "/models/User.php";
$config = require dirname(__DIR__) . "/config.php";
require dirname(__DIR__) . "/Database.php";
require dirname(__DIR__) . "/Flash.php";

$controller = "content_item_create";

require dirname(__DIR__) . "/controllers/" . $controller . ".controller.php";
?>
