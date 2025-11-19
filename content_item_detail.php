<?php
require "models/Content_item.php";
$config = require "config.php";
require "Database.php";
require "functions.php";

$controller = "content_item_detail";

require "controllers/" . $controller . ".controller.php";
