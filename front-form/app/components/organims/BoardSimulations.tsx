"use client"

import { motion } from 'framer-motion';
import { SimulationData } from '@/app/types/types';
import CardResultSimulation from '@/molecules/CardResultSimulation';



interface SimulationsBoardProps {
    simulations: SimulationData[];
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

export default SimulationsBoard;
