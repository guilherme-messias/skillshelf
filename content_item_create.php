<?php
require "Database.php";
require "Validations.php";
require "/models/Content_item.php";

$controller = "content_item_create";

require "controllers/" . $controller . ".controller.php";
?>
