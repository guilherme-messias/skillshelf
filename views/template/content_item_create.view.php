<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Cadastrar Novo Conteúdo</h2>
    <form action="content_item_create" method="POST" class="space-y-4" enctype="multipart/form-data">


      <?php if ($validationErrors = (new Flash())->get("validationErrors")): ?>
        <p class="text-sm font-bold text-red-600">Erro ao realizar criação da nota.</p>
      <?php endif; ?>

      <input type="hidden" id="user_id" name="user_id" value="<?= $_SESSION["user"]->id ?>" />
      <div>
        <label for="source" class="block text-sm font-medium text-gray-700">Fonte</label>
        <input type="text" id="source" name="source" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div>
        <label for="content_type" class="block text-sm font-medium text-gray-700">Tipo de Conteúdo</label>
        <input type="text" id="content_type" name="content_type" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div>
        <label for="file" class="block text-sm font-medium text-gray-700">Imagem</label>
        <input type="file" id="file" name="file" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
        <input type="text" id="title" name="title" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Cadastrar</button>
      </div>
    </form>
  </div>
</div>