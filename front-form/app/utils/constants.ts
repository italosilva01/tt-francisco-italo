export const FORM_INPUTS = [
    {
        name: 'propertyValue',
        label: 'Valor do imóvel',
        placeholder: '0,00',
        prefix: 'R$',
        'aria-label': 'Digite o valor do imóvel',
    },
    {
        name: 'valuePercentageEntry',
        label: 'Valor da entrada (%)',
        placeholder: '%',
        prefix: '',
        'aria-label': 'Digite a percentagem do valor da entrada',
    },
    {
        name: 'contractYears',
        label: 'Anos de contrato',
        placeholder: '0',
        prefix: '',
        'aria-label': 'Digite os anos de contrato',
    },
] as const; 

export const CARD_RESULT_SIMULATION_LABELS = {
    property_value: 'Valor do imóvel',
    value_entry: 'Valor da entrada',
    contract_years: 'Anos de contrato',
    monthly_amount_to_be_saved: 'Valor mensal a guardar',
    financed_amount: 'Valor financiado',
    save_duration_contract: "Guardar ao longo do contrato",
    total_amount: 'Valor total',
}
