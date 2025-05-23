"use client";

import React from 'react';
import { motion } from 'framer-motion';

const STROKE_WIDTH = 2
const EmptyState = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-full p-8 text-center"
        >
            <div className="rounded-full bg-purple-100 p-4 mb-4">
                <svg
                    className="w-12 h-12 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={STROKE_WIDTH}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Nenhuma simulação encontrada
            </h3>
            <p className="text-gray-400 max-w-sm">
                Você ainda não realizou nenhuma simulação. Faça sua primeira simulação para começar a acompanhar seu histórico.
            </p>
        </motion.div>
    );
};

export default EmptyState;
