"use client"
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { motion } from 'framer-motion';

import { simulationFormSchema } from '@/utils/zodSchemas';
import api from '@/services/api';
import { useMobile } from '@/hooks/useMobile';
import FormSimulation from '@/molecules/FormSimulation';
import { ApiPayloadSimulation } from '@/types/types';
import BaseTemplate from '@/templates/BaseTemplate';
import CardResultSimulation from '@/molecules/CardResultSimulation';

type SimulationFormValues = z.infer<typeof simulationFormSchema>;


export default function Home() {
  const [x, setX] = useState(0)
  const isMobileScreen = useMobile()
  const [response, setResponse] = useState<unknown>(null)
  const handleSubmit = async (data: SimulationFormValues) => {
    const { propertyValue, valuePercentageEntry, contractYears } = data;

    const payload: ApiPayloadSimulation = {
      property_value: propertyValue,
      value_percentage_entry: valuePercentageEntry,
      contract_years: contractYears,
    };

    try {
      const response = await api.post('/simulacao', payload)
      setResponse(response.data.data)
      if (!isMobileScreen) {
        setX(-100)
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  useEffect(() => {
    if (isMobileScreen) {
      setX(0)
    }
  }, [isMobileScreen])
  return (
    <BaseTemplate className='lg:!items-start lg:flex-row'>
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
    </BaseTemplate>


  );
}
