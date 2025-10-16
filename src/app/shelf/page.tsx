import React from "react";
import Image from "next/image";

const shelfData = [
    {
        id: 1,
        title: "React Avançado",
        platform: "Udemy",
        platformIcon: "/udemy.svg",
        tag: "Frontend",
        thumbnail: "/react-course.jpg",
        progress: 80,
    },
    {
        id: 2,
        title: "UX Design Essentials",
        platform: "YouTube",
        platformIcon: "/youtube.svg",
        tag: "UX",
        thumbnail: "/ux-course.jpg",
        progress: 40,
    },
    {
        id: 3,
        title: "Inglês para Devs",
        platform: "Alura",
        platformIcon: "/alura.svg",
        tag: "Inglês",
        thumbnail: "/english-course.jpg",
        progress: 100,
    },
];

export default function Shelf() {
    return (
        <div className="min-h-screen bg-[#F5F8FA] dark:bg-[#0F172A] px-3 py-6 flex flex-col items-center relative">
            {/* Filtros superiores */}
            <div className="w-full max-w-xl flex flex-col gap-2 mb-4">
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-full bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] font-semibold">
                        Todos
                    </button>
                    <button className="px-3 py-1 rounded-full bg-white dark:bg-[#0F172A] border border-[#A7C7F9] dark:border-[#475569] text-[#3B82F6] dark:text-[#60A5FA] font-semibold">
                        Em andamento
                    </button>
                    <button className="px-3 py-1 rounded-full bg-white dark:bg-[#0F172A] border border-[#A7C7F9] dark:border-[#475569] text-[#3B82F6] dark:text-[#60A5FA] font-semibold">
                        Concluídos
                    </button>
                </div>
                <div className="flex gap-2 items-center">
                    <select className="px-3 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0]">
                        <option>Ordenar por: Nome</option>
                        <option>Progresso</option>
                        <option>Adicionado recentemente</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="flex-1 px-3 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569]"
                    />
                </div>
            </div>
            {/* Grade de cards */}
            <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
                {shelfData.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white dark:bg-[#0F172A] rounded-xl shadow p-3 flex flex-col gap-2"
                    >
                        <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                            <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={course.platformIcon} alt={course.platform} width={20} height={20} />
                            <span className="text-xs text-[#A7C7F9] dark:text-[#475569] font-semibold">
                                {course.platform}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#3B82F6] text-white text-xs font-semibold ml-auto">
                                {course.tag}
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1E2A35] dark:text-[#E2E8F0]">{course.title}</h3>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-[#A7C7F9] dark:bg-[#475569] rounded-full overflow-hidden">
                                <div
                                    className="h-2 bg-[#3B82F6] dark:bg-[#60A5FA] rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <span className="text-xs font-bold text-[#3B82F6] dark:text-[#60A5FA]">
                                {course.progress}%
                            </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <button className="flex-1 bg-[#FACC15] dark:bg-[#EAB308] text-[#1E2A35] dark:text-[#0F172A] rounded-lg py-1 text-xs font-semibold flex items-center justify-center gap-1">
                                <span>📝</span>Notas
                            </button>
                            <button className="flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-1 text-xs font-semibold flex items-center justify-center gap-1">
                                <span>⏱</span>Progresso
                            </button>
                            <button className="flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-1 text-xs font-semibold flex items-center justify-center gap-1">
                                <span>🏷</span>Tags
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botão flutuante */}
            <button className="fixed bottom-8 right-8 bg-[#3B82F6] dark:bg-[#60A5FA] text-white dark:text-[#0F172A] rounded-full shadow-lg px-6 py-3 font-bold text-base flex items-center gap-2 hover:bg-[#2563eb] dark:hover:bg-[#3B82F6]">
                + Adicionar conteúdo
            </button>
        </div>
    );
}
