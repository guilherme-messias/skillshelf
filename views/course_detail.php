<?php
require __DIR__ . "./../courses.php";

$id = $_GET["id"] ?? 1;

$course = array_pop(array_filter($courses, fn($c) => $c["id"] == $id));
?>


<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Detalhe do Curso — <?= $course["title"] ?></title>
  </head>
  <body class="min-h-screen bg-gray-50 text-gray-800">
    <main class="max-w-5xl mx-auto p-4 md:p-8">
      <header class="bg-white rounded-xl shadow overflow-hidden mb-6">
        <div class="relative">
          <img src="<?= $course["thumbnail"] ?>" alt="<?= $course["title"] ?>" class="w-full h-56 object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="text-white">
              <h1 class="text-lg md:text-2xl font-bold"><?= $course["title"] ?></h1>
              <p class="text-sm opacity-90"><?= $course["platform"] ?? "Plataforma" ?></p>
              <div class="mt-2 flex items-center gap-2 text-sm">
                <span class="inline-block bg-white/20 px-2 py-1 rounded-full">Tags: <?= $course["tag"] ?></span>
                <span class="inline-block bg-white/20 px-2 py-1 rounded-full">Progresso: <?= $course[
                    "progress"
                ] ?>%</span>
              </div>
            </div>
            <div class="flex gap-2">
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm">Editar informações</button>
            </div>
          </div>
        </div>
      </header>

      <section class="bg-white rounded-xl shadow p-4">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold">Progresso</h2>
              <p class="text-sm text-gray-500">Atualize seu progresso:</p>
            </div>
            <div class="text-sm text-gray-600">Atual: <strong><?= $course["progress"] ?>%</strong></div>
          </div>

          <div class="space-y-2">
            <input type="range" min="0" max="100" value="<?= $course[
                "progress"
            ] ?>" id="progressRange" class="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-indigo-600" />
            <div class="w-full bg-gray-200 h-2 rounded overflow-hidden">
              <div id="progressBar" class="bg-indigo-600 h-2" ></div>
            </div>

  </body>
</html>
