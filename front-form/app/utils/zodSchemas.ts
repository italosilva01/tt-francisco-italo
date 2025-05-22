import { z } from 'zod';

export const simulationFormSchema = z.object({
  propertyValue: z
    .number()
    .min(0, 'O valor mínimo é R$ 0,00'),
    valuePercentageEntry: z
    .number()
    .min(0, 'O valor mínimo é 0%').max(100, 'O valor máximo é 100%'),
  
  contractYears: z
    .number()
    .min(0, 'O valor mínimo é 1 ano').max(35, 'O valor máximo é 35 anos'),
  
});

export type SimulationFormData = z.infer<typeof simulationFormSchema>;

