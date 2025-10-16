export default function Tags() {
    return (
        <main className="bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] min-h-screen font-sans p-2">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Tags & Trilhas</h1>
                <button className="bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-5 py-2 text-base">
                    Criar nova tag manualmente
                </button>
            </header>
            <section className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#A7C7F9] dark:bg-[#475569] rounded-xl p-4 text-[#1E2A35] dark:text-[#E2E8F0] shadow-md flex flex-col items-start">
                    <span className="text-lg font-semibold mb-1">Frontend</span>
                    <span className="text-sm text-[#3B82F6] dark:text-[#60A5FA]">4 cursos — 67% concluídos</span>
                </div>
                <div className="bg-[#A7C7F9] dark:bg-[#475569] rounded-xl p-4 text-[#1E2A35] dark:text-[#E2E8F0] shadow-md flex flex-col items-start">
                    <span className="text-lg font-semibold mb-1">Soft Skills</span>
                    <span className="text-sm text-[#3B82F6] dark:text-[#60A5FA]">2 cursos — 50%</span>
                </div>
            </section>
            {/* Subpágina de tag (exemplo) */}
            <section className="bg-[#F5F8FA] dark:bg-[#0F172A] rounded-xl p-4 mt-4 shadow-md">
                <h2 className="text-xl font-bold mb-3">Frontend</h2>
                <div className="flex flex-col gap-2 mb-4">
                    <div className="bg-[#A7C7F9] dark:bg-[#475569] rounded-lg px-4 py-2 flex justify-between items-center text-sm">
                        React Essencial <span>67%</span>
                    </div>
                    <div className="bg-[#A7C7F9] dark:bg-[#475569] rounded-lg px-4 py-2 flex justify-between items-center text-sm">
                        Next.js Avançado <span>80%</span>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-1">Notas relacionadas</h3>
                    <ul className="pl-4 text-sm list-disc">
                        <li>Hooks customizados em React</li>
                        <li>SSR no Next.js</li>
                    </ul>
                </div>
                <div className="bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg p-3 text-center text-sm">
                    Gráfico de conclusão (placeholder)
                </div>
            </section>
        </main>
    );
}
