<main class="min-h-screen bg-gray-50 p-4 md:p-8">
    <div class="max-w-xl mx-auto">
        <header class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/48?img=6"
                    alt="perfil"
                    class="w-12 h-12 rounded-full ring-2 ring-indigo-500"
                />
                <?php if (isset($_SESSION["user"])): ?>
                <div>
                  <p class="text-sm text-gray-500">Olá,</p>
                  <p class="text-lg font-semibold text-gray-800"><?= htmlspecialchars(
                      $_SESSION["user"]["name"],
                  ) ?> <span>👋</span></p>
                </div>
                <?php endif; ?>
            </div>
        </header>

        <div class="mb-6">
            <label for="global-search" class="sr-only">Buscar</label>
            <div class="flex items-center bg-white rounded-lg shadow-sm px-3 py-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
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
                    id="global-search"
                    type="search"
                    placeholder="Buscar cursos, tags, notas..."
                    class="ml-2 w-full text-sm bg-transparent outline-none"
                />
            </div>
        </div>

        <section class="grid grid-cols-2 gap-3 mb-6">
            <div class="bg-white rounded-xl p-4 shadow-sm">
                <p class="text-xs text-gray-500">Cursos em andamento</p>
                <p class="text-2xl font-bold text-indigo-600">3</p>
            </div>
            <div class="bg-white rounded-xl p-4 shadow-sm">
                <p class="text-xs text-gray-500">Cursos concluídos</p>
                <p class="text-2xl font-bold text-green-600">12</p>
            </div>
            <div class="col-span-2 bg-white rounded-xl p-4 shadow-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <p class="text-xs text-gray-500">Progresso médio geral</p>
                        <p class="text-sm font-semibold text-gray-800">58%</p>
                    </div>
                    <div class="text-xs text-gray-500">Média</div>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div class="h-3 bg-indigo-500 rounded-full" style="width: 58%"></div>
                </div>
            </div>
            <div class="bg-white rounded-xl p-4 shadow-sm">
                <p class="text-xs text-gray-500">Horas totais</p>
                <p class="text-2xl font-bold text-gray-800">124h</p>
            </div>
            <div class="bg-white rounded-xl p-4 shadow-sm">
                <p class="text-xs text-gray-500">Tags mais estudadas</p>
                <div class="mt-3 flex flex-wrap gap-2">
                    <span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Frontend</span>
                    <span class="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">UX</span>
                    <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Inglês</span>
                    <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Outros</span>
                </div>
            </div>
        </section>

        <!-- <section class="bg-white rounded-xl p-4 shadow-sm mb-6">
<div class="flex items-center justify-between mb-3">
  <h3 class="text-sm font-semibold text-gray-800">Distribuição por tags</h3>
  <span class="text-xs text-gray-500">Visão geral</span>
</div>
<div class="space-y-3">
  <div>
    <div class="flex justify-between text-xs text-gray-600 mb-1">
      <span>Frontend</span><span>45%</span>
    </div>
    <div class="h-3 w-full bg-gray-100 rounded-full">
      <div class="h-3 bg-indigo-500 rounded-full" style="width:45%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-gray-600 mb-1">
      <span>UX</span><span>25%</span>
    </div>
    <div class="h-3 w-full bg-gray-100 rounded-full">
      <div class="h-3 bg-emerald-500 rounded-full" style="width:25%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-gray-600 mb-1">
      <span>Inglês</span><span>15%</span>
    </div>
    <div class="h-3 w-full bg-gray-100 rounded-full">
      <div class="h-3 bg-yellow-400 rounded-full" style="width:15%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-gray-600 mb-1">
      <span>Outros</span><span>15%</span>
    </div>
    <div class="h-3 w-full bg-gray-100 rounded-full">
      <div class="h-3 bg-gray-400 rounded-full" style="width:15%"></div>
    </div>
  </div>
</div>
</section>

<section class="bg-white rounded-xl p-4 shadow-sm">
<div class="flex items-center justify-between mb-3">
  <h3 class="text-sm font-semibold text-gray-800">Atividade recente</h3>
  <button class="text-xs text-indigo-600">Ver tudo</button>
</div>
<ul class="space-y-3">
  <li class="flex items-start gap-3">
    <div class="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">F</div>
    <div class="flex-1">
      <p class="text-sm font-medium text-gray-800">Frontend Moderno</p>
      <p class="text-xs text-gray-500">Atualizado há 2 dias</p>
    </div>
    <div class="text-xs text-gray-500">80%</div>
  </li>
  <li class="flex items-start gap-3">
    <div class="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600 font-semibold">U</div>
    <div class="flex-1">
      <p class="text-sm font-medium text-gray-800">Design de Interação</p>
      <p class="text-xs text-gray-500">Nota adicionada ontem</p>
    </div>
    <div class="text-xs text-gray-500">45%</div>
  </li>
  <li class="flex items-start gap-3">
    <div class="w-10 h-10 rounded-md bg-yellow-50 flex items-center justify-center text-yellow-600 font-semibold">I</div>
    <div class="flex-1">
      <p class="text-sm font-medium text-gray-800">Inglês para devs</p>
      <p class="text-xs text-gray-500">Novo módulo disponível</p>
    </div>
    <div class="text-xs text-gray-500">10%</div>
  </li>
</ul>
</section> -->
    </div>
</main>
