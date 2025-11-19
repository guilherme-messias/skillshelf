<?php
require "models/Content_item.php";
$config = require "config.php";
require "Database.php";
require "functions.php";
require "Validations.php";

$controller = "content_item_detail";

require "controllers/" . $controller . ".controller.php";
