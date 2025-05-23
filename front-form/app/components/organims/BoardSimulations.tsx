"use client"

import { motion } from 'framer-motion';
import CardResultSimulation from '../molecule/CardResultSimulation';

type SimulationData = {
    property_value: string;
    value_percentage_entry: string;
    contract_years: string;
    monthly_installment: string;
    total_installments: string;
    total_interest: string;
    total_amount: string;
}

interface BoardSimulationsProps {
    simulations: SimulationData[];
    className?: string;
}

const BoardSimulations: React.FC<BoardSimulationsProps> = ({
    simulations,
    className = ''
}) => {
    if (!simulations?.length) return null;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1
            }}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ${className}`}
            role="region"
            aria-label="Quadro de simulações"
        >
            {simulations.map((simulation, index) => {
                const { id, created_at: CreatedAt, ...simulationData } = simulation;
                return (
                    <CardResultSimulation
                        key={`simulation-${index}`}
                        id={id}
                        createdAt={CreatedAt}
                        data={simulationData}
                        className="w-full"
                    />
                )
            })}
        </motion.div>
    );
};

export default BoardSimulations;
