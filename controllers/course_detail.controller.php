<?php

require "courses.php";

$id = $_GET["id"] ?? 1;

$course = array_pop(array_filter($courses, fn($c) => $c["id"] == $id));

$view = "course_detail";

require "views/template/app/app.php";

?>
