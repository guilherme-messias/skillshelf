<?php
require "models/Content_item.php";
$config = require "config.php";
require "database.php";

$controller = "content_item_detail";

require "controllers/" . $controller . ".controller.php";
