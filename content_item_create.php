<?php
require "models/Content_item.php";
require "models/User.php";
$config = require "config.php";
require "Database.php";
require "Flash.php";

$controller = "content_item_create";

require "controllers/" . $controller . ".controller.php";
?>
