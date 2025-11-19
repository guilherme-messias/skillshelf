<?php
session_start(); ?>

<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Skillshelf</title>
  </head>
  <body>
      <?php require __DIR__ . "/../{$view}.view.php"; ?>
  </body>
</html>
