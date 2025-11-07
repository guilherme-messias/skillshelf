<main class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="w-full max-w-lg">
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="flex items-center justify-between px-6 py-4 border-b">
                <h2 class="text-lg font-semibold text-gray-800">Acessar Skillshelf</h2>
                <div class="flex gap-2">
                    <button id="tab-login" class="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Login</button>
                    <button id="tab-register" class="px-3 py-1 rounded-md bg-white text-gray-700 border text-sm">Registrar</button>
                </div>
            </div>

            <div class="p-6">
                <form id="form-login" action="/login" method="POST" class="space-y-4">
                    <div>
                        <label for="login-email" class="block text-sm text-gray-600">Email</label>
                        <input id="login-email" name="email" type="email" required
                            class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>

                    <div>
                        <label for="login-password" class="block text-sm text-gray-600">Senha</label>
                        <input id="login-password" name="password" type="password" required
                            class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>

                    <div class="flex items-center justify-between text-sm text-gray-600">
                        <label class="flex items-center gap-2">
                            <input type="checkbox" name="remember" class="h-4 w-4" />
                            Lembrar
                        </label>
                        <a href="#" class="text-indigo-600 hover:underline">Esqueceu a senha?</a>
                    </div>

                    <div>
                        <button type="submit" class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            Entrar
                        </button>
                    </div>
                </form>

                <!-- Register -->
                <form id="form-register" action="/register" method="POST" class="space-y-4 hidden">
                    <div>
                        <label for="reg-name" class="block text-sm text-gray-600">Nome</label>
                        <input id="reg-name" name="name" type="text" required
                            class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>

                    <div>
                        <label for="reg-email" class="block text-sm text-gray-600">Email</label>
                        <input id="reg-email" name="email" type="email" required
                            class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="reg-password" class="block text-sm text-gray-600">Senha</label>
                            <input id="reg-password" name="password" type="password" required
                                class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label for="reg-password-confirm" class="block text-sm text-gray-600">Confirmar</label>
                            <input id="reg-password-confirm" name="password_confirm" type="password" required
                                class="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                            Criar conta
                        </button>
                    </div>
                </form>

                <p class="mt-4 text-xs text-center text-gray-500">
                    Ao continuar, você concorda com os termos de uso.
                </p>
            </div>
        </div>
    </div>
</main>