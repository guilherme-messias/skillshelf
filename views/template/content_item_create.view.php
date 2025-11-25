<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Cadastrar Livro</h2>
    <form action="/book/create" method="POST" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
        <input type="text" id="title" name="title" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div>
        <label for="author" class="block text-sm font-medium text-gray-700">Autor</label>
        <input type="text" id="author" name="author" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea id="description" name="description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
      </div>
      <div>
        <label for="year" class="block text-sm font-medium text-gray-700">Ano de Publicação</label>
        <input type="number" id="year" name="year" min="0" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Cadastrar</button>
      </div>
    </form>
  </div>
</div>
