"use client";

import EmptyState from '@/app/components/atoms/EmptyState';
import BaseTemplate from '@/app/components/templates/BaseTemplate';


const HistoryPage = () => {

    return (
        <BaseTemplate titlePage='Histórico de Simulações' className='justify-start min-w-full !h-screen lg:!h-full  lg:!flex-col '>
            <div className='!h-full flex justify-center items-center my-auto lg:mt-8'>
                <EmptyState />
            </div>
        </BaseTemplate>
    );
};

export default HistoryPage;
