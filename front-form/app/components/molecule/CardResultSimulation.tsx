"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../atoms/Card';

interface CardResultSimulationProps {
    data: any;
    className?: string;
}

const CardResultSimulation: React.FC<CardResultSimulationProps> = ({
    data,
    className = ''
}) => {
    if (!data) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
                opacity: { duration: 0.5, delay: 0.1 },
                scale: { duration: 0.3, delay: 0.1 }
            }}
            className={`border-2 border-purple-500/20 rounded-lg backdrop-blur-sm bg-white/5 p-6 max-w-[500px] !mx-auto relative ml-1.5 ${className}`}
            role="region"
            aria-label="Resultado da simulação"
        >
            <Card.Root>
                <Card.Title className="text-xl font-semibold text-white mb-4">
                    Resultado da Simulação
                </Card.Title>
                <div className="text-white/80 space-y-2">
                    <pre className="whitespace-pre-wrap break-words">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            </Card.Root>
        </motion.div>
    );
};

export default CardResultSimulation;
