"use client";

import React from 'react';
import { Panel } from '../atoms/Panel';
import { Form, FormMessage } from '@/components/ui/form';
import { FormControl } from '@/components/ui/form';
import { FormLabel } from '@/components/ui/form';
import { FormItem } from '@/components/ui/form';
import { FormField } from '@/components/ui/form';
import { Control, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { simulationFormSchema } from '../utils/zodSchemas';
import { Input } from '@/components/ui/input';
import { formatCurrency, unformatCurrency } from '../utils/formatterString';



interface FormSimulationProps {
    className?: string;
    onSubmit: (data: z.infer<typeof simulationFormSchema>) => void;
}

interface CustomInputProps {
    control: Control<z.infer<typeof simulationFormSchema>>;
    nameInput: 'propertyValue' | 'valuePercentageEntry' | 'contractYears';
    label: string;
    placeholder: string;
    prefix: string;
}

const INPUTS = [
    {
        name: 'propertyValue',
        label: 'Valor do imóvel',
        placeholder: '0,00',
        prefix: 'R$',
    },
    {
        name: 'valuePercentageEntry',
        label: 'Valor da entrada',
        placeholder: '0,00',
        prefix: 'R$',
    },
    {
        name: 'contractYears',
        label: 'Anos de contrato',
        placeholder: '0',
        prefix: '',
    },
]

const FormSimulation: React.FC<FormSimulationProps> = ({
    className = '',
    onSubmit
}) => {
    const form = useForm<z.infer<typeof simulationFormSchema>>({
        resolver: zodResolver(simulationFormSchema),
        defaultValues: {
            propertyValue: undefined,
            valuePercentageEntry: undefined,
            contractYears: undefined,
        },
    })

    const CustomInput = ({ control, nameInput, label, placeholder, prefix }: CustomInputProps) => {
        return (
            <FormField
                control={control}
                name={nameInput}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <div className="relative">
                                {prefix && (
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                        {prefix}
                                    </span>
                                )}
                                <Input
                                    placeholder={placeholder}
                                    className={`${prefix ? 'pl-8' : ''}`}
                                    {...field}
                                    value={
                                        nameInput === 'contractYears'
                                            ? field.value || ''
                                            : field.value
                                                ? formatCurrency(field.value.toString())
                                                : ''
                                    }
                                    onChange={(e) => {
                                        const rawValue = e.target.value;
                                        if (nameInput === 'contractYears') {
                                            const value = rawValue.replace(/\D/g, '');
                                            field.onChange(value ? Number(value) : undefined);
                                        } else {
                                            const formattedValue = formatCurrency(rawValue);
                                            const numericValue = unformatCurrency(rawValue);
                                            e.target.value = formattedValue;
                                            field.onChange(numericValue);
                                        }
                                    }}
                                />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        )
    }

    return (
        <Panel.Root className={`w-full min-w-[500px] max-w-2xl ${className}`}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                    role="form"
                >
                    <Panel.Header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Formulário de Simulação
                        </h2>
                    </Panel.Header>

                    <Panel.Content className='flex flex-col gap-4 max-h-96 overflow-y-auto'>
                        {INPUTS.map((input) => (
                            <CustomInput key={input.name} control={form.control} nameInput={input.name as 'propertyValue' | 'valuePercentageEntry' | 'contractYears'} label={input.label} placeholder={input.placeholder} prefix={input.prefix} />
                        ))}
                    </Panel.Content>

                    <Panel.Footer className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            aria-label="Enviar formulário"
                        >
                            Enviar
                        </button>
                    </Panel.Footer>
                </form>
            </Form>
        </Panel.Root>
    );
};

export default FormSimulation;
