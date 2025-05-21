import { z } from 'zod';

export const simulationFormSchema = z.object({
  propertyValue: z
    .number()
    .min(0, 'O valor mínimo é R$ 1.000,00'),
    valuePercentageEntry: z
    .number()
    .min(0, 'O valor mínimo é R$ 1.000,00'),
  
  contractYears: z
    .number()
    .min(0, 'O valor mínimo é R$ 1.000,00'),
  
});

export type SimulationFormData = z.infer<typeof simulationFormSchema>;

