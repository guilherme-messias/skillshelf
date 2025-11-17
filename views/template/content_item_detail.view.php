<main class="max-w-5xl mx-auto p-4 md:p-8">
  <header class="bg-white rounded-xl shadow overflow-hidden mb-6">
    <div class="relative">
      <img src="<?= $content_item->url ?>" alt="<?= $content_item->title ?>" class="w-full h-56 object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="text-white">
          <h1 class="text-lg md:text-2xl font-bold"><?= $content_item->title ?></h1>
          <p class="text-sm opacity-90"><?= $content_item->content_type ?? "Plataforma" ?></p>
          <div class="mt-2 flex items-center gap-2 text-sm">
            <span class="inline-block bg-white/20 px-2 py-1 rounded-full">Tags: <?= $content_item->content_type ?></span>
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
        <div class="flex gap-2">
          <form action="/user_item_notes" method="POST" class="space-y-3 w-full">
            <input type="hidden" name="content_item_id" value="<?= $content_item->id ?>" />

            <div>
              <label for="note-title" class="block text-sm text-gray-600">Título da Nota</label>
              <input
                id="note-title"
                name="note_title"
                type="text"
                class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Digite o título da nota" />
            </div>

            <div>
              <label for="note-body" class="block text-sm text-gray-600">Nota</label>
              <textarea
                id="note-body"
                name="note_body"
                rows="4"
                class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Escreva sua nota aqui..."></textarea>
            </div>

            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
    </header>
</main>
