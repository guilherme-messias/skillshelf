"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function LoginOnboarding() {
    const [step, setStep] = useState(0);

    const onboardingSteps = [
        {
            title: "Cole o link de um curso para começar",
            description: "Adicione rapidamente o link de um curso que você está fazendo.",
        },
        {
            title: "Veja sua prateleira em ação",
            description: "Visualize todos os cursos organizados em sua prateleira.",
        },
        {
            title: "Acompanhe seu progresso visualmente",
            description: "Monitore seu avanço de forma simples e intuitiva.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-[#F5F8FA] dark:bg-[#0F172A] px-3 py-6">
            <div className="flex flex-col items-center mb-8">
                <Image src="/logo.png" alt="SkillShelf Logo" width={64} height={64} />
                <h1 className="mt-2 text-lg font-semibold text-[#1E2A35] dark:text-[#E2E8F0] text-center">
                    Organize o que você aprende.
                </h1>
            </div>
            <form className="w-full max-w-xs flex flex-col gap-3 bg-white dark:bg-[#0F172A] rounded-xl shadow-md p-6 mb-8">
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA]"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="px-4 py-3 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA]"
                />
                <button
                    type="submit"
                    className="bg-[#3B82F6] dark:bg-[#60A5FA] text-white dark:text-[#0F172A] rounded-lg py-3 font-bold text-base mt-1 transition-colors hover:bg-[#2563eb] dark:hover:bg-[#3B82F6]"
                >
                    Entrar
                </button>
                <div className="flex gap-2 mt-2">
                    <button
                        type="button"
                        className="flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-2 font-medium transition-colors hover:bg-[#FACC15] dark:hover:bg-[#EAB308] hover:text-[#1E2A35] dark:hover:text-[#0F172A]"
                    >
                        Google
                    </button>
                    <button
                        type="button"
                        className="flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-2 font-medium transition-colors hover:bg-[#FACC15] dark:hover:bg-[#EAB308] hover:text-[#1E2A35] dark:hover:text-[#0F172A]"
                    >
                        GitHub
                    </button>
                    <button
                        type="button"
                        className="flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-2 font-medium transition-colors hover:bg-[#FACC15] dark:hover:bg-[#EAB308] hover:text-[#1E2A35] dark:hover:text-[#0F172A]"
                    >
                        Apple
                    </button>
                </div>
                <a
                    href="#"
                    className="text-center text-[#3B82F6] dark:text-[#60A5FA] text-sm underline mt-1 cursor-pointer hover:text-[#FACC15] dark:hover:text-[#EAB308]"
                >
                    Criar conta
                </a>
            </form>
            <div className="w-full max-w-xs bg-white dark:bg-[#0F172A] rounded-xl shadow-md p-5 flex flex-col items-center">
                <div className="text-center mb-4">
                    <span className="block text-[#3B82F6] dark:text-[#60A5FA] font-semibold text-sm mb-1">
                        {step + 1} / 3
                    </span>
                    <h2 className="text-base font-bold text-[#1E2A35] dark:text-[#E2E8F0] mb-1">
                        {onboardingSteps[step].title}
                    </h2>
                    <p className="text-sm text-[#1E2A35] dark:text-[#E2E8F0] opacity-80">
                        {onboardingSteps[step].description}
                    </p>
                </div>
                <div className="flex gap-3 justify-center">
                    <button
                        className="bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 font-medium transition-colors disabled:bg-[#e0e0e0] dark:disabled:bg-[#1E293B] disabled:text-[#aaa] dark:disabled:text-[#475569]"
                        disabled={step === 0}
                        onClick={() => setStep(step - 1)}
                    >
                        Anterior
                    </button>
                    <button
                        className="bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 font-medium transition-colors disabled:bg-[#e0e0e0] dark:disabled:bg-[#1E293B] disabled:text-[#aaa] dark:disabled:text-[#475569]"
                        disabled={step === onboardingSteps.length - 1}
                        onClick={() => setStep(step + 1)}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
}
