<?php
require __DIR__ . "./../courses.php";

$id = $_GET["id"] ?? 1;

$course = array_pop(array_filter($courses, fn($c) => $c["id"] == $id));

include __DIR__ . "/template/course_detail.view.php";
?>
