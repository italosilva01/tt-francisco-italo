import EmptyState from '@/app/components/atoms/EmptyState';
import SimulationsBoard from '@/app/components/organims/BoardSimulations';
import BaseTemplate from '@/app/components/templates/BaseTemplate';
import { serverLogger } from '@/app/lib/serverLogger';
import api from '@/services/api';

async function HistoryPage() {
    try {
        const response = await api.get('/historico')
        const simulations = response.data.data
        serverLogger.log('Dados recebidos:', response);

        return (
            <BaseTemplate
                titlePage='Histórico de Simulações'
            >
                {!simulations?.length ? (
                    <EmptyState />
                ) : (
                    <SimulationsBoard
                        simulations={simulations}
                        className="w-full max-w-[90rem] mx-auto"
                    />
                )}
            </BaseTemplate>
        );
    } catch (error) {
        console.error('Erro ao buscar simulações:', error);
        return (
            <BaseTemplate titlePage='Histórico de Simulações' className='justify-start min-w-full !h-screen lg:!h-full lg:!flex-col'>
                <EmptyState />
            </BaseTemplate>
        );
    }
}

export default HistoryPage;
