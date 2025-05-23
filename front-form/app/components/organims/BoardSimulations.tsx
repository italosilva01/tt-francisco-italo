"use client"

import { motion } from 'framer-motion';
import CardResultSimulation from '@/molecules/CardResultSimulation';

interface SimulationsBoardProps {
    simulations: {
        id: string;
        sequence_number: number;
        created_at: string;
        property_value: string;
        value_entry: string;
        financed_amount: string;
        contract_years: string;
        monthly_amount_to_be_saved: string;
    }[];
    className?: string;
}

const SimulationsBoard: React.FC<SimulationsBoardProps> = ({
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
            {simulations.map((simulation) => {
                const { created_at: CreatedAt, sequence_number: sequenceNumber, id, ...data } = simulation;
                return (
                    <CardResultSimulation
                        key={`simulation-${id}`}
                        createdAt={CreatedAt}
                        sequenceNumber={sequenceNumber}
                        data={data}
                        className="w-full"
                    />
                )
            })}
        </motion.div>
    );
};

export default SimulationsBoard;
