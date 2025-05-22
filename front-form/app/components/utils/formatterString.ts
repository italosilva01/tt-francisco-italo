export const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');

    const numberValue = Number(numericValue) / 100;

    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numberValue);
};

export const unformatCurrency = (value: string): number => {
    const numericValue = value.replace(/\D/g, '');
    return Number(numericValue) / 100;
};