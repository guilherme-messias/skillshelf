export default function Notes() {
    return (
        <main className="bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] min-h-screen font-sans relative p-2">
            <header className="flex flex-col gap-2 mb-4">
                <h1 className="text-2xl font-bold">Notas & Insights</h1>
                <input
                    className="w-full p-3 rounded-lg border border-[#A7C7F9] dark:border-[#475569] text-base bg-white dark:bg-[#1E2A35] dark:text-[#E2E8F0]"
                    type="text"
                    placeholder="Buscar por palavras-chave, curso ou tag"
                />
            </header>
            <aside className="flex gap-4 mb-4 items-center">
                <h2 className="text-base font-semibold mr-2">Filtrar</h2>
                <select className="p-2 rounded-md border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#1E2A35] dark:text-[#E2E8F0] text-sm">
                    <option>Por curso</option>
                </select>
                <select className="p-2 rounded-md border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#1E2A35] dark:text-[#E2E8F0] text-sm">
                    <option>Por tag</option>
                </select>
                <select className="p-2 rounded-md border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#1E2A35] dark:text-[#E2E8F0] text-sm">
                    <option>Por data</option>
                </select>
            </aside>
            <section className="flex flex-col gap-4 mb-20">
                <div className="bg-[#A7C7F9] dark:bg-[#475569] rounded-xl p-4 text-[#1E2A35] dark:text-[#E2E8F0] shadow-md flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Curso: React Essencial</h3>
                    <p className="text-base">"Como usar hooks para gerenciar estado..."</p>
                    <span className="text-sm text-[#3B82F6] dark:text-[#60A5FA]">12/10/25</span>
                    <button className="self-end bg-[#3B82F6] dark:bg-[#60A5FA] text-white rounded-lg px-4 py-2 text-sm">
                        Ver curso
                    </button>
                </div>
                <div className="bg-[#A7C7F9] dark:bg-[#475569] rounded-xl p-4 text-[#1E2A35] dark:text-[#E2E8F0] shadow-md flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Curso: Soft Skills</h3>
                    <p className="text-base">"Dicas para comunicação assertiva..."</p>
                    <span className="text-sm text-[#3B82F6] dark:text-[#60A5FA]">10/10/25</span>
                    <button className="self-end bg-[#3B82F6] dark:bg-[#60A5FA] text-white rounded-lg px-4 py-2 text-sm">
                        Ver curso
                    </button>
                </div>
            </section>
            <button className="fixed right-5 bottom-5 bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#E2E8F0] rounded-full w-16 h-16 text-base shadow-lg z-10 flex items-center justify-center">
                Nova nota independente
            </button>
        </main>
    );
}
