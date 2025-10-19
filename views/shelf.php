<?php
require __DIR__ . "./../courses.php"; ?>


<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <title>Prateleira — Skill Shelf</title>
    </head>
    <body class="min-h-screen bg-gray-50">
        <main class="max-w-6xl mx-auto p-4 md:p-8">
            <header class="mb-6">
                <div class="flex items-center justify-between">
                    <h1 class="text-2xl font-bold text-gray-800">Prateleira de Cursos</h1>
                    <div class="flex items-center gap-3">
                        <a href="#" class="text-sm text-indigo-600 hover:underline">Dashboard</a>
                    </div>
                </div>

                <form class="mt-4 flex flex-col md:flex-row md:items-center gap-3" onsubmit="return false;">
                    <div class="flex items-center gap-2" role="tablist" aria-label="Filtros">
                        <button class="px-3 py-2 rounded-lg bg-indigo-600 text-white">Todos</button>
                        <button class="px-3 py-2 rounded-lg bg-white text-gray-700 shadow-sm">Em andamento</button>
                        <button class="px-3 py-2 rounded-lg bg-white text-gray-700 shadow-sm">Concluídos</button>
                    </div>

                    <div class="ml-auto flex items-center gap-3">
                        <label for="sort" class="sr-only">Ordenar por</label>
                        <select id="sort" name="sort" class="bg-white rounded-lg shadow-sm px-3 py-2 text-sm">
                            <option value="recent">Adicionado recentemente</option>
                            <option value="name">Nome</option>
                            <option value="progress">Progresso</option>
                        </select>

                        <div class="flex items-center bg-white rounded-lg shadow-sm px-3 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.817A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                id="q"
                                placeholder="Buscar cursos, tags..."
                                class="ml-2 w-44 text-sm bg-transparent outline-none"
                            />
                            <button type="button" class="ml-2 text-sm text-indigo-600">Buscar</button>
                        </div>
                    </div>
                </form>
            </header>

            <section class="space-y-8">
                <div>
                    <div class="flex gap-4 overflow-x-auto pb-2">
                      <?php foreach ($courses as $course): ?>
                        <article class="min-w-[220px] bg-white rounded-xl shadow-sm overflow-hidden">
                            <div class="relative">
                                <img
                                    src="<?= $course["thumbnail"] ?>"
                                    alt="Título do curso"
                                    class="w-full h-36 object-cover"
                                />
                                <div
                                    class="absolute top-2 left-2 flex items-center gap-2 bg-white/80 rounded-full px-2 py-1 text-xs"
                                >
                                    <span class="text-gray-700"><?= $course["platform"] ?></span>
                                </div>
                            </div>

                            <div class="p-3">
                                <h3 class="text-sm font-semibold text-gray-800 line-clamp-2">
                                    <a href="/course_detail.php?id=<?= $course[
                                        "id"
                                    ] ?>" class="text-gray-800"><?= $course["title"] ?></a>
                                </h3>
                                <div class="mt-2 flex items-center justify-between">
                                    <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                        ><?= $course["tag"] ?></span
                                    >
                                    <span class="text-xs text-gray-500"><?= $course["progress"] ?>%</span>
                                </div>

                                <div class="mt-3">
                                    <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div class="h-2 bg-indigo-500 rounded-full" style="width: <?= $course[
                                            "progress"
                                        ] ?>%"></div>
                                    </div>
                                </div>

                                <div class="mt-3 flex items-center gap-2">
                                    <button
                                        class="flex-1 text-xs text-center bg-white border border-gray-200 rounded-md px-2 py-2 hover:bg-gray-50"
                                    >
                                        📝 Notas
                                    </button>
                                    <button
                                        class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                                    >
                                        ⏱
                                    </button>
                                    <button
                                        class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                                    >
                                        🏷
                                    </button>
                                </div>
                            </div>
                        </article>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>

            <button
                class="fixed right-6 bottom-6 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700"
            >
                + Adicionar conteúdo
            </button>
        </main>
    </body>
</html>
