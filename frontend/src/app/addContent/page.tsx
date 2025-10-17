'use client';

import React, { useState } from "react";
import Image from "next/image";

type PreviewType = {
    title: string;
    thumbnail: string;
    platform: string;
};

export default function AddContent() {
    const [link, setLink] = useState("");
    const [preview, setPreview] = useState<PreviewType | null>(null);
    const [success, setSuccess] = useState(false);

    // Simulação de preview
    const fakePreview: PreviewType = {
        title: "React Avançado",
        thumbnail: "/react-course.jpg",
        platform: "Udemy",
    };

    function handlePaste(e: React.ChangeEvent<HTMLInputElement>) {
        setLink(e.target.value);
        // Simula fetch dos metadados
        setPreview(fakePreview);
        setSuccess(false);
    }

    function handleAdd() {
        setSuccess(true);
    }

    return (
        <div className="min-h-screen bg-[#F5F8FA] dark:bg-[#0F172A] px-3 py-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-white dark:bg-[#0F172A] rounded-xl shadow p-6 flex flex-col gap-4">
                <h2 className="text-lg font-bold text-[#1E2A35] dark:text-[#E2E8F0] mb-2">Adicionar conteúdo</h2>
                <input
                    type="text"
                    placeholder="Cole aqui o link do curso, vídeo ou trilha"
                    value={link}
                    onChange={handlePaste}
                    className="px-4 py-3 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA]"
                />
                {preview && (
                    <div className="flex items-center gap-3 bg-[#A7C7F9] dark:bg-[#475569] rounded-lg p-3">
                        <Image src={preview.thumbnail} alt={preview.title} width={48} height={48} className="rounded" />
                        <div>
                            <div className="font-bold text-[#1E2A35] dark:text-[#E2E8F0]">{preview.title}</div>
                            <div className="text-xs text-[#3B82F6] dark:text-[#60A5FA]">{preview.platform}</div>
                        </div>
                    </div>
                )}
                <input
                    type="text"
                    placeholder="Nome personalizado"
                    className="px-4 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569]"
                />
                <select className="px-4 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0]">
                    <option>Categoria</option>
                    <option>Frontend</option>
                    <option>UX</option>
                    <option>Inglês</option>
                </select>
                <input
                    type="text"
                    placeholder="Tags"
                    className="px-4 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569]"
                />
                <input
                    type="number"
                    placeholder="Progresso inicial (%)"
                    className="px-4 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569]"
                />
                <textarea
                    placeholder="Notas iniciais"
                    className="px-4 py-2 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-white dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569]"
                />
                <button
                    onClick={handleAdd}
                    className="bg-[#3B82F6] dark:bg-[#60A5FA] text-white dark:text-[#0F172A] rounded-lg py-3 font-bold text-base mt-2 transition-colors hover:bg-[#2563eb] dark:hover:bg-[#3B82F6]"
                >
                    Adicionar à estante
                </button>
                {success && (
                    <div className="mt-2 text-center text-[#FACC15] dark:text-[#EAB308] font-bold">
                        Curso adicionado com sucesso 🎉
                    </div>
                )}
            </div>
        </div>
    );
}
