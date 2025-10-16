import React from "react";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#F5F8FA] dark:bg-[#0F172A] px-3 py-6 flex flex-col items-center">
            {/* Header */}
            <header className="w-full max-w-xl flex items-center gap-3 mb-6">
                <Image
                    src="/profile.png"
                    alt="Foto de perfil"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[#3B82F6] dark:border-[#60A5FA]"
                />
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-[#1E2A35] dark:text-[#E2E8F0]">Bom dia, Guilherme 👋</h2>
                    <input
                        type="text"
                        placeholder="Buscar cursos, notas..."
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA]"
                    />
                </div>
            </header>

            {/* Widgets */}
            <section className="w-full max-w-xl grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-[#0F172A] rounded-xl shadow p-4 flex flex-col items-center">
                    <span className="text-sm text-[#A7C7F9] dark:text-[#475569]">Em andamento</span>
                    <span className="text-2xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">5</span>
                </div>
                <div className="bg-white dark:bg-[#0F172A] rounded-xl shadow p-4 flex flex-col items-center">
                    <span className="text-sm text-[#A7C7F9] dark:text-[#475569]">Concluídos</span>
                    <span className="text-2xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">12</span>
                </div>
                <div className="bg-white dark:bg-[#0F172A] rounded-xl shadow p-4 flex flex-col items-center col-span-2">
                    <span className="text-sm text-[#A7C7F9] dark:text-[#475569] mb-2">Progresso médio</span>
                    <div className="w-full flex items-center gap-2">
                        <div className="flex-1 h-3 bg-[#A7C7F9] dark:bg-[#475569] rounded-full overflow-hidden">
                            <div
                                className="h-3 bg-[#3B82F6] dark:bg-[#60A5FA] rounded-full"
                                style={{ width: "65%" }}
                            ></div>
                        </div>
                        <span className="text-xs font-bold text-[#3B82F6] dark:text-[#60A5FA]">65%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#0F172A] rounded-xl shadow p-4 flex flex-col items-center">
                    <span className="text-sm text-[#A7C7F9] dark:text-[#475569]">Horas totais</span>
                    <span className="text-2xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">48h</span>
                </div>
                <div className="bg-white dark:bg-[#0F172A] rounded-xl shadow p-4 flex flex-col items-center">
                    <span className="text-sm text-[#A7C7F9] dark:text-[#475569] mb-2">Tags mais estudadas</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 rounded-full bg-[#3B82F6] text-white text-xs font-semibold">
                            Frontend
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#FACC15] text-[#1E2A35] text-xs font-semibold">
                            UX
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#A7C7F9] text-[#1E2A35] text-xs font-semibold">
                            Inglês
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#E2E8F0] text-[#1E2A35] text-xs font-semibold">
                            Outros
                        </span>
                    </div>
                </div>
            </section>

            {/* Gráfico global */}
            <section className="w-full max-w-xl bg-white dark:bg-[#0F172A] rounded-xl shadow p-5 mb-6 flex flex-col items-center">
                <span className="text-sm text-[#A7C7F9] dark:text-[#475569] mb-2">Distribuição por tags</span>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center">
                        <span className="w-24 text-xs text-[#3B82F6] font-bold">Frontend</span>
                        <div className="flex-1 h-3 bg-[#A7C7F9] rounded-full mx-2">
                            <div className="h-3 bg-[#3B82F6] rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-xs text-[#1E2A35] dark:text-[#E2E8F0]">45%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 text-xs text-[#FACC15] font-bold">UX</span>
                        <div className="flex-1 h-3 bg-[#A7C7F9] rounded-full mx-2">
                            <div className="h-3 bg-[#FACC15] rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-xs text-[#1E2A35] dark:text-[#E2E8F0]">25%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 text-xs text-[#A7C7F9] font-bold">Inglês</span>
                        <div className="flex-1 h-3 bg-[#A7C7F9] rounded-full mx-2">
                            <div className="h-3 bg-[#A7C7F9] rounded-full" style={{ width: "15%" }}></div>
                        </div>
                        <span className="text-xs text-[#1E2A35] dark:text-[#E2E8F0]">15%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 text-xs text-[#E2E8F0] font-bold">Outros</span>
                        <div className="flex-1 h-3 bg-[#A7C7F9] rounded-full mx-2">
                            <div className="h-3 bg-[#E2E8F0] rounded-full" style={{ width: "15%" }}></div>
                        </div>
                        <span className="text-xs text-[#1E2A35] dark:text-[#E2E8F0]">15%</span>
                    </div>
                </div>
            </section>

            {/* Atividade recente */}
            <section className="w-full max-w-xl bg-white dark:bg-[#0F172A] rounded-xl shadow p-5 flex flex-col">
                <span className="text-sm text-[#A7C7F9] dark:text-[#475569] mb-2">Atividade recente</span>
                <ul className="mb-3">
                    <li className="text-[#1E2A35] dark:text-[#E2E8F0] text-sm mb-1">
                        Curso atualizado: React Avançado
                    </li>
                    <li className="text-[#1E2A35] dark:text-[#E2E8F0] text-sm mb-1">
                        Nota criada: "Hooks customizados"
                    </li>
                    <li className="text-[#1E2A35] dark:text-[#E2E8F0] text-sm mb-1">Curso atualizado: UX Design</li>
                </ul>
                <button className="self-end bg-[#3B82F6] dark:bg-[#60A5FA] text-white dark:text-[#0F172A] rounded-lg px-4 py-2 font-bold text-sm transition-colors hover:bg-[#2563eb] dark:hover:bg-[#3B82F6]">
                    Ver tudo
                </button>
            </section>
        </div>
    );
}
