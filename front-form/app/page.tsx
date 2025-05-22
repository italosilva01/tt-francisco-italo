"use client"
import { z } from 'zod';

import FormSimulation from './components/molecule/FormSimulation';
import { simulationFormSchema } from './components/utils/zodSchemas';
import api from '@/services/api';
import { ApiPayloadSimulation } from './components/molecule/types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMobile } from './hooks/useMobile';
import CardResultSimulation from './components/molecule/CardResultSimulation';

type SimulationFormValues = z.infer<typeof simulationFormSchema>;


export default function Home() {
  const [x, setX] = useState(0)
  const isMobileScreen = useMobile()
  const [response, setResponse] = useState<any>(null)
  const handleSubmit = async (data: SimulationFormValues) => {
    const { propertyValue, valuePercentageEntry, contractYears } = data;

    const payload: ApiPayloadSimulation = {
      property_value: propertyValue,
      value_percentage_entry: valuePercentageEntry,
      contract_years: contractYears,
    };

    try {
      const response = await api.post('/simulacao', payload)
      setResponse(response.data)
      if (!isMobileScreen) {
        setX(-100)
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <main className="flex flex-col gap-[32px] items-center justify-center lg:flex-row lg:gap-0 lg:max-w-fit w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: x,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.5 }
          }}
        >
          <FormSimulation onSubmit={handleSubmit} />
        </motion.div>
        {response && (
          <CardResultSimulation data={response} />
        )}
      </main>
    </div>
  );
}
