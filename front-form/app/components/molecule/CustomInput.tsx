import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { formatCurrency, unformatCurrency } from '../../utils/formatterString';
import { CustomInputProps } from './types';

export const CustomInput = ({ control, nameInput, label, placeholder, prefix }: CustomInputProps) => {
    const isYearORValuePercentageInput = nameInput === 'contractYears' || nameInput === 'valuePercentageEntry';

    return (
        <FormField
            control={control}
            name={nameInput}
            render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            {prefix && (
                                <span
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    aria-hidden="true"
                                >
                                    {prefix}
                                </span>
                            )}
                            <Input
                                placeholder={placeholder}
                                className={`${prefix ? 'pl-8' : ''} transition-all duration-200 focus:ring-2 focus:ring-purple-500`}
                                aria-label={`Campo para ${label.toLowerCase()}`}
                                {...field}
                                value={
                                    isYearORValuePercentageInput
                                        ? value ?? ''
                                        : value !== undefined
                                            ? formatCurrency(value.toString())
                                            : ''
                                }
                                onChange={(e) => {
                                    const rawValue = e.target.value;
                                    if (isYearORValuePercentageInput) {
                                        const value = rawValue.replace(/\D/g, '');
                                        onChange(value ? Number(value) : undefined);
                                    } else {
                                        const numericValue = unformatCurrency(rawValue);
                                        onChange(numericValue || undefined);
                                    }
                                }}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};