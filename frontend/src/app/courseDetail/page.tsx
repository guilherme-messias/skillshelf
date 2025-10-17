export default function CourseDetail() {
    return (
        <main className="bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] min-h-screen font-sans">
            {/* Header com capa do curso */}
            <header className="flex flex-col items-center pt-6 px-4 pb-2">
                <div className="w-full max-w-xs h-32 bg-[#A7C7F9] dark:bg-[#475569] rounded-xl mb-4" />
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Título do Curso</h1>
                    <span className="text-base text-[#3B82F6] dark:text-[#60A5FA] block mb-2">Plataforma: Udemy</span>
                    <a
                        className="text-[#FACC15] dark:text-[#EAB308] underline text-sm block mb-2"
                        href="#"
                        target="_blank"
                    >
                        Abrir na Udemy
                    </a>
                    <div className="flex justify-center gap-2 mb-2">
                        <span className="bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-md px-3 py-1 text-xs">
                            #frontend
                        </span>
                        <span className="bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-md px-3 py-1 text-xs">
                            #react
                        </span>
                    </div>
                    <div className="mb-3 text-base">Progresso: 45%</div>
                    <button className="bg-[#3B82F6] dark:bg-[#60A5FA] text-white rounded-lg px-5 py-2 text-base mt-2">
                        Editar informações
                    </button>
                </div>
            </header>
            {/* Abas */}
            <section className="mt-6">
                <nav className="flex justify-center gap-4 mb-2">
                    <button className="bg-[#3B82F6] dark:bg-[#60A5FA] text-white rounded-lg px-4 py-2 text-base">
                        Progresso
                    </button>
                    <button className="bg-transparent text-[#1E2A35] dark:text-[#E2E8F0] px-4 py-2 text-base rounded-lg">
                        Notas
                    </button>
                    <button
                        className="bg-transparent text-[#A7C7F9] dark:text-[#475569] px-4 py-2 text-base rounded-lg"
                        disabled
                    >
                        Insights
                    </button>
                </nav>
                <div className="px-4">
                    {/* Progresso */}
                    <div className="flex flex-col items-center">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={45}
                            readOnly
                            className="w-11/12 max-w-xs mb-4 accent-[#3B82F6] dark:accent-[#60A5FA]"
                        />
                        <div className="flex gap-3 mb-4">
                            <button className="bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 text-sm">
                                +10%
                            </button>
                            <button className="bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 text-sm">
                                +25%
                            </button>
                            <button className="bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 text-sm">
                                Concluir
                            </button>
                        </div>
                        <ul className="text-sm text-[#A7C7F9] dark:text-[#475569]">
                            <li>Progresso atualizado em 12/10/25</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
