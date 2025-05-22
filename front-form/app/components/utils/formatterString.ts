export const formatCurrency = (value: string = ''): string => {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(value));
};

export const unformatCurrency = (value: string): number => {
    const numericValue = value.replace(/\D/g, '');
    return Number(numericValue) / 100;
};