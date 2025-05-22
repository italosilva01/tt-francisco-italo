"use client";

import React, { useTransition } from 'react';
import { Panel } from '../atoms/Panel';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { simulationFormSchema } from '../../utils/zodSchemas';
import { CustomInput } from './CustomInput';
import { FormData, FormSimulationProps } from './types';
import { FORM_INPUTS } from '../../utils/constants';
import Link from 'next/link';

const FormSimulation: React.FC<FormSimulationProps> = ({
    className = '',
    onSubmit
}) => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<FormData>({
        resolver: zodResolver(simulationFormSchema),
        defaultValues: {
            propertyValue: undefined,
            valuePercentageEntry: undefined,
            contractYears: undefined,
        },
    });

    const handleSubmit = async (data: FormData) => {
        try {
            startTransition(async () => {
                await onSubmit(data);
            });
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return (
        <Panel.Root
            className={`w-full mx-auto lg:min-w-[31.25rem] max-w-2xl ${className}`}
            role="region"
            aria-label="Formulário de simulação de financiamento"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-6"
                    role="form"
                >
                    <Panel.Header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Formulário de Simulação
                        </h2>
                    </Panel.Header>

                    <Panel.Content className='flex flex-col gap-4 max-h-96 overflow-y-auto'>
                        {FORM_INPUTS.map((input) => (
                            <CustomInput
                                key={input.name}
                                control={form.control}
                                nameInput={input.name}
                                label={input.label}
                                placeholder={input.placeholder}
                                prefix={input.prefix}
                            />
                        ))}
                    </Panel.Content>

                    <Panel.Footer className="flex justify-between">
                        <Link href="/history" className='text-blue-500 underline hover:text-blue-800 transition-all duration-200'>Ir para histórico</Link>
                        <button
                            type="submit"
                            className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                            aria-label="Enviar formulário"
                            disabled={isPending || !form.formState.isValid}
                        >
                            {isPending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </Panel.Footer>
                </form>
            </Form>
        </Panel.Root>
    );
};

export default FormSimulation;
