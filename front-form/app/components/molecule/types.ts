import { z } from 'zod';
import { simulationFormSchema } from '../utils/zodSchemas';
import { Control } from 'react-hook-form';

export type FormData = z.infer<typeof simulationFormSchema>;

export interface FormSimulationProps {
    className?: string;
    onSubmit: (data: FormData) => void;
}

export interface CustomInputProps {
    control: Control<FormData>;
    nameInput: keyof FormData;
    label: string;
    placeholder: string;
    prefix: string;
}



export interface ApiPayloadSimulation {
    property_value: number;
    value_percentage_entry: number;
    contract_years: number;
}