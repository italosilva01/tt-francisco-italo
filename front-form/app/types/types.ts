import { z } from 'zod';
import { simulationFormSchema } from '../utils/zodSchemas';
import { Control } from 'react-hook-form';

export type FormData = z.infer<typeof simulationFormSchema>;
export type SimulationData = {
    property_value: string;
    value_entry: string;
    contract_years: string;
    monthly_amount_to_be_saved: string;
    financed_amount: string;
    save_duration_contract: string;
    total_amount: string;
    id?: string;
    created_at?: string;
}
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