"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../atoms/Card';
import { CARD_RESULT_SIMULATION_LABELS } from '../../utils/constants';
import { formatCurrency } from '../../utils/formatterString';
import dayjs from 'dayjs';

type SimulationData = {
    property_value: string;
    value_percentage_entry: string;
    contract_years: string;
    monthly_installment: string;
    total_installments: string;
    total_interest: string;
    total_amount: string;
}

interface CardResultSimulationProps {
    data: SimulationData;
    className?: string;
    id?: string;
    createdAt?: string;
}

const CardResultSimulation: React.FC<CardResultSimulationProps> = ({
    data,
    id,
    className = '',
    createdAt
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
            className={`border-2 border-purple-500/20 rounded-lg backdrop-blur-sm bg-white/5 p-6 max-w-[31.25rem] !mx-auto relative ml-1.5 ${className}`}
            role="region"
            aria-label="Resultado da simulação"
        >
            <Card.Root className='border-none'>
                <Card.Title className="text-xl font-semibold text-white mb-4">
                    Resultado da Simulação {id}
                </Card.Title>
                <Card.Content >
                    <div className='flex flex-col justify-between gap-x-4'>


                        {Object.keys(data).map((key) => {
                            const typedKey = key as keyof SimulationData;
                            const label = CARD_RESULT_SIMULATION_LABELS[typedKey];
                            const value = typedKey === 'contract_years' ? `${data[typedKey]}` : `R$ ${formatCurrency(data[typedKey] || '')}`;
                            return (
                                <div className='flex' key={key}>
                                    <Card.Label
                                        text={`${label} :`}
                                        className='text-white/80 border-b text-pretty !w-fit border-white/20'
                                    />
                                    <span className='text-white/80 ml-auto max-w-[7.8125rem] text-nowrap truncate'>{value}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className='mt-4 border-t'>
                        <Card.Label
                            text={`Criado em: ${dayjs(createdAt).format('DD/MM/YYYY - HH:mm')}`}
                            className='text-white/80  !w-fit border-white/20'
                        />
                    </div>
                </Card.Content>
            </Card.Root>
        </motion.div>
    );
};

export default CardResultSimulation;
